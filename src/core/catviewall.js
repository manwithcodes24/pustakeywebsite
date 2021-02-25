import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import { Link } from "react-router-dom";
import { addItemToCart} from "./helper/cartHelper";
import ImageHelper from "./helper/ImageHelper";
import { isAutheticated } from "../auth/helper/index";
import Axios from "axios";



export default function Catviewall() {
  const [redirect, setRedirect] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentItem, setrecentItems] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then(data => {
      // if (data.error) {
      //   setError(data.error);
      // } else {
      //   setProducts(data);
      // }
    });
  };
  const fetchCategories = async () => {
  
    const { data } = await Axios.get(
      "http://www.pustakey.com/buysell/index.php/rest/categories/get/api_key/pustakeyapp/limit/10000/offset/0"
    );
    setCategories(data);
    // console.log(data);
  

};
//   const fetchCategories = async () => {
//     fetch('http://www.pustakey.com/buysell/index.php/rest/categories/get/api_key/pustakeyapp/limit/9/offset/0', {mode: 'no-cors'}).then((response) => {
//       // console.log(response.data);
//       setCategories(response);
//       console.log(response);
//     });

//   };
//   const fetchRecentItems = async () => {
//     fetch('http://www.pustakey.com/buysell/index.php/rest/categories/get/api_key/pustakeyapp/limit/9/offset/0', {mode: 'no-cors'}).then((response) => {
//       // console.log(response.data);
//       setrecentItems(response);
//       console.log(response);
//     });

//   };
  useEffect(() => {
    fetchCategories()
  }, []);

  const addToCart = (product) => {
    console.log("added to cart")
    addItemToCart(product, () => setRedirect(true));
  }


  return (
   <div>
   <div className="categoryItemList">
   <ul className="list-unstyled catviewallcontainer">
   
   {
     categories.map((cat) => (
       <div key={cat.cat_id}> 
       <a href={"/subcat/"+ cat.cat_id}>
       <li className= "categoryItem">
       <img src = {"https://www.pustakey.com/buysell/uploads/"+ cat.default_photo.img_path} 
       className= "categoryItemImg"
       />
      {cat.cat_name}</li>
      </a>
       </div>
     
   ))
   }
       
        
     </ul>
     </div>
   

</div>

    // <Base title="Home Page" description="Welcome to the Store">
    //   <div className="row text-center">
    //     <h1 className="text-white">All of Courses</h1>
    //     <div className="row">
    //     {console.log("Courses" , products)}
    //       {products.map((product, index) => {
    //         return (
    //           <div key={index} className="col-4 mb-4">
    //             <Card product={product} />
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </Base>
  );
}

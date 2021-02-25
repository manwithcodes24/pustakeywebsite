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
import { useParams } from 'react-router-dom';



export default function Search() {
  const [redirect, setRedirect] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const { cat_id ,subcatid } = useParams();
  const loadAllProduct = () => {
    getProducts().then(data => {
      // if (data.error) {
      //   setError(data.error);
      // } else {
      //   setProducts(data);
      // }
    });
  };
  const fetchItems = async () => {
      

     
    var profile = {};
    profile["cat_id"] = cat_id
    profile["sub_cat_id"] = subcatid
    const { data } = await Axios.post(
        "http://www.pustakey.com/buysell/index.php/rest/items/search/api_key/pustakeyapp/limit/1000000/offset/0/login_user_id/nologinuser", profile
      );
        // console.log(data);
      
      // console.log(response.data);
      setItems(data);
      console.log(data);
   
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
    fetchItems()
  }, []);

  const addToCart = (product) => {
    console.log("added to cart")
    addItemToCart(product, () => setRedirect(true));
  }


  return (
   <div>
   <div className="recentItemList">
   <ul className="list-unstyled recentItemContainer">
   
   
   
   
   <div className="container">
     <div className="row">
     <div className="col-12 ">
       {
        items.map((item) => (
             <li>
            <a href = {"/itemDetails/" + item.id} >
             <div className="card" key={item.id}>
             
             <div className="text-success"><h5 className="mt-5">{item.user.user_name}</h5></div>
             <p>{item.added_date_str}</p>
               <img className="itemImg" src={"https://www.pustakey.com/buysell/uploads/" + item.default_photo.img_path} alt="Vans" />
              
               <div className="card-body">
                
                 <div className="buy justify-content-between ">
                   <div className="text-success"><h5 className="mt-5">{item.title}</h5></div>
                   
                   
                 </div>
                 <div className="price text-success"><h5 className="">{"₹ " + item.price}</h5></div>
               </div>
             </div>
             </a>
           </li>
         ))  
         
         }
         </div>  
      
     </div>
   </div>
   
   
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

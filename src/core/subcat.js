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


export default function Subcat() {
  const [redirect, setRedirect] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcat, setSubCat] = useState([]);
  const [error, setError] = useState(false);
  const { catid } = useParams();
  const laodsubcat = async () => {
    const { data } = await Axios.get(
        `http://www.pustakey.com/buysell/index.php/rest/subcategories/get/api_key/pustakeyapp/cat_id/${catid}/limit/100000/offset/0`
      );
        // console.log(data);
        setSubCat(data);
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
    laodsubcat()
  }, []);

  const addToCart = (product) => {
    console.log("added to cart")
    addItemToCart(product, () => setRedirect(true));
  }


  return (
   <div>
  

  { 
    subcat.map((subcat) => (
    <div key={subcat.cat_id}> 
    <a href ={"/subcatitems/"+subcat.cat_id+"/"+subcat.id} >
    <div>
    <ul className="list-unstyled">
      <li className="subcatItem" style={{paddingTop: 13, paddingBottom: 13, paddingLeft: 8, backgroundColor: '#f7f4f4'}}>{subcat.name}</li>
    </ul>
  </div>
  </a>
    </div>
  
))
}

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

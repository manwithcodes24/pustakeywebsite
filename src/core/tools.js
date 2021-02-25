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



export default function Tools() {
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
  }, []);

  const addToCart = (product) => {
    console.log("added to cart")
    addItemToCart(product, () => setRedirect(true));
  }


  return (
   <div>
  

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

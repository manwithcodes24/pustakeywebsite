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


export default function Tools() {
    const { itemId } = useParams();
  const [redirect, setRedirect] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [Item, setItem] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    
  };
  const loadItem = async () => {
    const { data } = await Axios.get(
        `http://www.pustakey.com/buysell/index.php/rest/items/get/api_key/pustakeyapp/id/${itemId}/nologinuser`
      );
        // console.log(response.data);
        var temarr = [data]
        setItem(temarr);
        console.log(data);
     
  };

  useEffect(() => {
    loadItem()
  }, []);

  const addToCart = (product) => {
    console.log("added to cart")
    addItemToCart(product, () => setRedirect(true));
  }


  return (
   <div>
   
   
    
      {
          Item.map((item) => (
        <div><img style={{width: '100%', height: 300 , backgroundSize : 'contain'}} src={"https://www.pustakey.com/buysell/uploads/" + item.default_photo.img_path} />
        <div>
        <div className="card">
        <div className="card-body" style={{borderRadius: 20, color: 'rgb(255,255,255)',
        background: 'linear-gradient(0deg, rgba(13,225,255,1) 0%, rgba(0,8,255,1) 100%)'}}>
        <h3 style={{color: 'rgb(255,255,255)'}}>{item.title}</h3>
        <p className="card-text">{"₹ " +item.price}</p>
        <p className="card-text">{item.added_date_str}</p>
        <p className="card-text">{item.favourite_count + " likes"}</p>
        <p className="card-text">{item.condition_of_item.name }</p>
        <p className="card-text">{item.category.cat_name +" / "+item.sub_category.name }</p>
        <p className="card-text">{item.description }</p>
       
        </div>
       <div className="row mb-3 profilecard">
  <div className="col-md-6">
    <div className="d-flex flex-row border rounded">
      <div className="p-0 w-25">
        <img src="https://c1.staticflickr.com/3/2862/12328317524_18e52b5972_k.jpg" className="img-thumbnail border-0" />
      </div>
      <div className="pl-3 pt-2 pr-2 pb-2 w-75 border-left">
        <h4 className="text-dark ">{item.user.user_name}</h4>
   
        <ul className="m-0 float-left" style={{listStyle: 'none', margin: 0, padding: 0}}>
          <li><i className="fab fa-facebook-square" /> {
             item.user.email_verify || item.user.phone_verify || item.user.google_verify ? "Verified" : "" 
          }</li>
        
        </ul>
       
      </div>
    </div>
  </div>
</div>

        </div>
        </div>
       <div className="navbaritemdetails navbar  justify-content-between">
  <a href="/" className="active buybutton"> Buy</a>
</div>

        </div>
        
      ))}
       
     
 
 

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

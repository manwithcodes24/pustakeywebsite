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
import { useHistory } from "react-router-dom";

import Axios from "axios";



export default function Home() {
  const [redirect, setRedirect] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentItem, setrecentItems] = useState([]);
  const [keyword, setKeyword] = useState(" ");
  const [error, setError] = useState(false);
  const history = useHistory();

  const loadAllProduct = () => {
   
  };
  const fetchCategories = async () => {
  
      const { data } = await Axios.get(
        "http://www.pustakey.com/buysell/index.php/rest/categories/get/api_key/pustakeyapp/limit/9/offset/0"
      );
      setCategories(data);
      // console.log(data);
    

  };
  const fetchRecentItems = async () => {
    const { data } = await Axios.post(
      "http://www.pustakey.com/buysell/index.php/rest/items/search/api_key/pustakeyapp/limit/10/offset/0/login_user_id/nologinuser"
    );
      // console.log(response.data);
      setrecentItems(data);
      // console.log(data);
   
  };
  useEffect(() => {
    fetchRecentItems();
    fetchCategories() ; 
    loadAllProduct();
  }, []);

  const addToCart = (product) => {
  
  }

  const handleClick = () => {
    let path = `/search/${keyword}`; 
    history.push(path);
  }
  const handleChange = (e) => {
    setKeyword(e.target.value)

  }

  return (
   <div>
   <div className="row padMar" style={{marginTop: 40}}>
  <div className="col padMar">
    <div className="input-group">
      <div className="input-group-prepend" /><input onChange={handleChange} type="text" className="form-control autocomplete" placeholder="Find books, novels, notes school books" style={{fontSize: 12, height: 38}} />
      <div className="input-group-append"><button onClick={handleClick}  className="btn btn-warning" type="button" style={{backgroundColor: 'rgba(255,193,7,0)'}}><i className="fa fa-search" /></button></div>
    </div>
  </div>
</div>

<div className="categoryContainer">

<h3 className="categoryHeader"> Category </h3> 
<p className="categoryViewAll"><a href="/catviewall" > View All </a></p>

</div>

<div className="categoryItemList">
<ul className="list-unstyled categoryItemContainer">

{
  categories.map((cat) => (
    <div key={cat.cat_id}> 
    <a href={"/subcat/"+ cat.cat_id}>
    <img src = {"https://www.pustakey.com/buysell/uploads/"+ cat.default_photo.img_path} 
    className= "categoryItemImg"
    />
    <li className= "categoryItem">{cat.cat_name}</li>
    </a>
    </div>
  
))
}
    
     
  </ul>
  </div>



  <div className="recentContainer">

<h3 className="recentHeader"> Recent Uploaded Items </h3> 
<p className="recentViewAll"> <a href="/itemviewall" >View All</a> </p>

</div>

<div className="recentItemList">
<ul className="list-unstyled recentItemContainer">




<div className="container">
  <div className="row">
  <div className="col-12 ">
    {
        recentItem.map((item) => (
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


  <div className="instructionContainer">

  <h3 className="instructionHeader"> Instructions </h3> 
  <p className="instructionViewAll"> View All </p>
  
  </div>
  
  <div className="instructionItemList">
  <ul className="list-unstyled instructionItemContainer">
  
  {recentItem.map((cat) => (
    
    // <li className= "recentItem" key={cat.cat_id}>{cat.cat_name}</li>
    <li></li>
  ))}
      <li></li>
       
    </ul>
    </div>
    <div class="navbar">
  <a href="/" class="active"><i class="material-icons">home</i> <br/>Home</a>
  <a href="/content"><i class="material-icons">category</i> <br/>Tools</a>
  <a href="/advertisment"><i class="material-icons">library_add</i> <br/>Sell</a>
 
  <a href="/advertisment"><i class="material-icons">message</i> <br/>Message</a>
  <a href="/privacypolicy"><i class="material-icons">switch_account</i> <br/>Privacy Policy</a>
 
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

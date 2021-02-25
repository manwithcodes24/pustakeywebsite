import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import {getProductContent} from './helper/productContentHelper'
import {  isAutheticated } from "../auth/helper";
import Async from 'react-async';
import ImageHelper from "./helper/ImageHelper";






export default function ProductContent()   {
    const _product = JSON.parse(sessionStorage.getItem("product"))
    console.log(_product)
    const _user  = isAutheticated().user 
    const _token = isAutheticated().token
    const [content, setContent] = useState()
    const [data, setData] = useState()
  
    const [reload, setReload] =  useState(false)
    // setData(getProductContent(_user._id, _productId, _token))
    // console.log(data)
    useEffect( () =>{
       
        if(_user._id, _product._id, _token){
            getProductContent(_user._id, _product._id, _token).then(data => {
                console.log(data.content)
                setContent(data.content)
                
            })
          
         
        }
       
     
    },[reload])
        
    const fetchContent = async () => {
      

    }
            // setContent(data.content)
        
    

    return(
        <div>
        
        {_product._id ? <div>
           <h2 className="contentTitle">{_product.name}</h2> 
            <h4 className="contentDescription">{content}</h4>
            
            </div> : <div><h3> Select a course from <a href="/user/dashboard" > User Dashboard </a></h3> </div>}
        </div>
    )

}
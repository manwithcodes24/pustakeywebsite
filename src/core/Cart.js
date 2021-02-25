import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart,emptyCart } from "./helper/cartHelper";

import {Container} from '@material-ui/core';
import { createOrder } from '../core/helper/orderHelper'
import StripeCheckout from 'react-stripe-checkout'

const Cart = () => {
  const products = loadCart()
  // const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  const  _jwt  = JSON.parse(localStorage.getItem('jwt'))
  const _user  = _jwt.user
  const userId = _user._id
  const _token = _jwt.token
  const [totalAmount, setTotalAmount] = useState(0);
  const [showPayBtn, setPayBtn] = useState(false)

  const order = {
    "products" : products ,
    "amount" : totalAmount ,
    "address" : _user.email ,
    "user" : _user
  }
  const makeOrder = () => {
     createOrder(_user._id , _token , order)
    
  }
  
  useEffect(() => {
 if(!localStorage.getItem("cart") ){
   let cart = []
   localStorage.setItem("cart" , JSON.stringify(cart))
 }
    if(localStorage.getItem("cart") != "[]"){
      setPayBtn(true)
    }
   console.log(showPayBtn)
   
    
  
  }, [reload]);

  const loadAllProducts = () => {
  
 
  

    return (
      <div>
        <h2></h2>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
          
        ))}
      </div>
    );
          
  };
  const loadCheckout = () => {
    return (
      <div>
        <h2>This section for checkout</h2>
      </div>
    );
  };
  const getFinalAmount = () => {

    let amount = 0 ; 
    products.map((product, index) => {
      amount = amount + product.price 
   
    })
    return amount; 
  }

   const makePayment = (token) => {
      const body = {
        token, 
        products
      }   
      const headers = {
        'Content-type' : 'application/json'
      }
      return fetch(`${API}/stripepayment`, {
        method : "POST" ,
        headers ,
        body : JSON.stringify(body)

      }).then(res => {
          console.log(res)
          res.json().then((response) => {
            const orderData = {
              products : products,
              transaction_id : response.id,
              amount : response.amount 
          
            }
            createOrder(userId, _token, orderData)
          })
          
      }).catch(err => console.log(err))

     
   }
  



   const emptyCartlocal = () =>{
     emptyCart()
     createOrder()
     setReload(!reload)
     
     
   }


   
   

// fix response not showing issue
  return (
  <div className  = "cartRoot">
  <div className = "cartContainer">
  <div className="cartBtn"> 
  
 <a  href="/" > <button > Keep shoping </button></a>
  </div>
 <div className="productSection"> 
    <h1>Shopping Cart  </h1> 
    <h3> Courses </h3>
    <p className="CoursesTitle cartContent">
   

    </p> 
    {loadAllProducts()}
    <p className="CoursesPrice cartContent">
    
    </p>
  </div>
  <div className = "sideCard"> 
    <h3 className = "cart-totalAmountTitle">Total  </h3> 
    <h4 className="cart-totalAmountPrice"> ${getFinalAmount()} </h4> 
    
    {showPayBtn ? <div> <StripeCheckout
      stripeKey = {process.env.REACT_APP_KEY}
      token = {makePayment}  
      amount = {getFinalAmount() * 100}
      shippingAddress
      billingAddress
      >
          <button className="checkoutBtn btn-success" onClick = {emptyCartlocal}> checkout </button>
          
          </StripeCheckout></div>  : <div className="cart-totalAmountPrice"> Cart is empty </div>}

  </div>

  </div>
  
  </div>
  );
};

export default Cart;

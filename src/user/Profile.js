import React from "react";
import Base from "../core/Base";
import {Link, Redirect} from 'react-router-dom'

import $ from 'jquery'; 
import './profile/style.css'
import './profile/profile.jpg'


const Profile = () => {
 let jwt = JSON.parse(localStorage.getItem('jwt'))
 
  let user = jwt.user
  if(user.role == 1){
    var role = "Admin"
  }
  else {
   var role = "User"
  }



  return (
   <div>
  <div>
  <title>Profile Card</title>
  <link rel="stylesheet" type="text/css" href="./profile/style.css" />
  
    <div><div className="card-container">
    <div className="upper-container">
      <div className="image-container">
        <img src="./profile/profile.jpg" />
      </div>
    </div> <div className="lower-container">
    <div>
    
  
 
  <h4 class="name">{user.name}</h4>
      <p class="email">{user.email}</p>
     
    </div>
    <div>
      <p>{role}</p>
    </div>
    <div className="btnContainer">
   <Link className="btn" to="/user/dashboard" >Dashboard </Link>
   <Link className="HomeBtn" to="/" >Home </Link>
    </div>
  </div></div></div> 
   
  </div>



</div>

  );
};

export default Profile;

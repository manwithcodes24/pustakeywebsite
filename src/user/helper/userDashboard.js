import { API } from "../../backend";
import { signin, authenticate, isAutheticated } from "../../auth/helper";

export const getUserDetails = (user,token) => {
  
    console.log(`${API}/user/${user._id}`)
  return fetch(`${API}/user/${user._id}`, { method: "GET" ,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },})
    .then(res => {
      return res.json()
      
    }).then(data => {
      sessionStorage.setItem("userDetails" , JSON.stringify(data))

    })
    .catch(err => console.log(err));
};

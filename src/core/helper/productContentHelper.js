import { API } from "../../backend";

export const  getProductContent = async (userId, productId, token) => {
  return fetch(`${API}/product/${userId}/${productId}/content`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
      Authorization: `Bearer ${token}`
    },
   
  })
    .then(response => {
     
      return response.json();
    })
    .catch(err => console.log(err));
};

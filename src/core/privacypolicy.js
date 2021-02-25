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

//   const addToCart = (product) => {
//     console.log("added to cart")
//     addItemToCart(product, () => setRedirect(true));
//   }


  return (
   <div>
   
   Pustakey built the Pustakey app as a Free app. This SERVICE is provided by Pustakey at no cost and is intended for use as is.
<br/><br/>
   This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
   <br/>
   <br/>
   If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
   <br/>
   <br/>
   The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Pustakey unless otherwise defined in this Privacy Policy.
   <br/>
   <br/>
   Information Collection and Use
   <br/>
   <br/>
   For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Name , Phone no. , Address , Location access, Bank details ,Camera access, External storage access. The information that we request will be retained by us and used as described in this privacy policy.
   <br/>
   <br/>
   The app does use third party services that may collect information used to identify you.
   <br/>
   <br/>
   Link to privacy policy of third party service providers used by the app
   <br/>
   <br/>
   Google Play Services
   AdMob
   Log Data
   <br/><br/>
   We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
   <br/>
   <br/>
   Cookies
   <br/>
   <br/>
   Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
   <br/>
   <br/>
   This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
   <br/>
   <br/>
   Service Providers
   <br/>
   <br/>
   We may employ third-party companies and individuals due to the following reasons:
   <br/>
   <br/>
   To facilitate our Service;
   To provide the Service on our behalf;
   To perform Service-related services; or
   To assist us in analyzing how our Service is used.
   We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
   <br/>
   <br/>
   Security
   <br/>
   <br/>
   We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
   <br/>
   <br/>
   Links to Other Sites
   <br/>
   <br/>
   This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
   <br/>
   <br/>
   Children’s Privacy
   <br/>
   <br/>
   These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
   <br/>
   <br/>
   Changes to This Privacy Policy
   <br/>

   <br/>
   We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
   <br/>
   <br/>
   This policy is effective as of 2021-04-30

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

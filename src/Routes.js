import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./core/Home";
import tools from "./core/tools";
import itemviewall from "./core/itemviewall";
import catviewall from "./core/catviewall";
import subcat from "./core/subcat.js";
import subcatitems from "./core/subcatitems.js";
import privacypolicy from "./core/privacypolicy.js";
import itemdetails from "./core/itemdetails";
import search from "./core/search";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import Cart from "./core/Cart";
import Profile from './user/Profile'
import content from './core/productContent'
const Routes = () => {
  var jwt = localStorage.getItem('jwt')
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
         <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/home" exact component={Home} />
          <Route path="/tools" exact component={tools} />
          <Route path="/search/:keyword" exact component={search} />
          <Route path="/itemviewall" exact component={itemviewall} />
          <Route path="/catviewall" exact component={catviewall} />
          <Route path="/itemdetails/:itemId" exact component={itemdetails} />
          <Route path="/subcat/:catid" exact component={subcat} />
          <Route path="/privacypolicy" exact component={privacypolicy} />
          <Route path="/subcatitems/:cat_id/:subcatid" exact component={subcatitems} />

       

        <Route path="/cart" exact component={Cart} />
        <Route path="/product/content" exact component={content} />

        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />

        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        {jwt ?  <div><Route path="/" exact component={Profile} /> </div>: <div> <Redirect from='/' to='/' /></div>}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

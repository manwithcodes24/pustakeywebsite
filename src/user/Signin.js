import React, { useState } from "react";
import Base from "../core/Base";
import { Redirect, BrowserRouter } from "react-router-dom";

import { signin, authenticate, isAutheticated } from "../auth/helper";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: true
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then(data => {
     
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
          
        } else {
          
          authenticate(data, () => {
           
            setValues({
              ...values,
            
            });
           
          });

        }
      })
      
      
      
  };

  const performRedirect = () => {
   

    if (didRedirect) {
      if (user && user.role === 1) {
       console.log("reaching here")
        return (
          <BrowserRouter>
         
          <Redirect to="/admin/dashboard" /> 
          </BrowserRouter>
          
          )
      } else {
        return (<Redirect to="/user/dashboard" />)
      }
    }
    if (isAutheticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="email"
              />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };



  {loadingMessage()}
  {errorMessage()}
  {performRedirect()}
  return (
   
    
   <div className="uk-grid-collapse" data-uk-grid>
  <div className="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center" data-uk-height-viewport>
    <div className="uk-width-3-4@s">
      <div className="uk-text-center uk-margin-bottom">
        <a className="uk-logo uk-text-success uk-text-bold" href="/">Wideup </a>
      </div>
      <div className="uk-text-center uk-margin-medium-bottom">
        <h1 className="uk-letter-spacing-small">Sign In to Wideup</h1>
      </div>
      <div data-uk-grid className="uk-child-width-auto uk-grid-small uk-flex uk-flex-center uk-margin">
        <div>
          <a href="#" data-uk-icon="icon: facebook" className="uk-icon-button uk-icon-button-large facebook" />
        </div>
        <div>
          <a href="#" data-uk-icon="icon: google-plus" className="uk-icon-button uk-icon-button-large google-plus" />
        </div>
        <div>
          <a href="#" data-uk-icon="icon: linkedin" className="uk-icon-button uk-icon-button-large linkedin" />
        </div>
      </div>    
      <div className="uk-text-center uk-margin">
        <p className="uk-margin-remove">Or use your email account:</p>
      </div>
      <form>
        <div className="uk-width-1-1 uk-margin">
          <label className="uk-form-label" htmlFor="email">Email</label>
          <input onChange={handleChange("email")}
          value={email} id="email" className="uk-input uk-form-large" type="email" placeholder="tom@company.com" />
        </div>
        <div className="uk-width-1-1 uk-margin">
          <label className="uk-form-label" htmlFor="password">Password</label>
          <input  onChange={handleChange("password")}
          value={password} id="password" className="uk-input uk-form-large" type="password" placeholder="Min 8 characters" />
        </div>
        <div className="uk-width-1-1 uk-margin uk-text-center">
          <a className="uk-text-small uk-link-muted" href="#">Forgot your password?</a>
        </div>
        <div className="uk-width-1-1 uk-text-center">
          <button onClick={onSubmit} className="uk-button uk-button-primary uk-button-large">Sign In</button>
        </div>
      </form>
    </div>
  </div>
  <div className="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center uk-light
uk-background-cover uk-background-norepeat uk-background-blend-overlay uk-background-primary" style={{backgroundImage: 'url(https://source.unsplash.com/2FPjlAyMQTA/680x1000)'}} data-uk-height-viewport>
    <div>
      <div className="uk-text-center">
        <h2 className="uk-h1 uk-letter-spacing-small">Hello There, Join Us</h2>
      </div>
      <div className="uk-margin-top uk-margin-medium-bottom uk-text-center">
        <p>Enter your personal details and join the learning community</p>
      </div>
      <div className="uk-width-1-1 uk-text-center">
        <a href="/signup" className="uk-button uk-button-success-outline uk-button-large">Sign Up</a>
      </div>
    </div>
  </div>
</div>

  );
  
};

export default Signin;

import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  const { name, email, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value={password}
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

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
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

  return (
   <div className="uk-grid-collapse" data-uk-grid>
  <div className="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center" data-uk-height-viewport>
    <div className="uk-width-3-4@s">
      <div className="uk-text-center uk-margin-bottom">
        <a className="uk-logo uk-text-success uk-text-bold" href="/">Wideup</a>
      </div>
      <div className="uk-text-center uk-margin-medium-bottom">
        <h1 className="uk-letter-spacing-small">Create an Account</h1>
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
        <p className="uk-margin-remove">Or use your email for registration:</p>
      </div>
      <form>
        <div className="uk-width-1-1 uk-margin">
          <label className="uk-form-label" htmlFor="name">Full name</label>
          <input onChange={handleChange("name")}
          type="text"
          value={name} id="name" className="uk-input uk-form-large" type="text" placeholder="Tom Atkins" />
        </div>
        <div className="uk-width-1-1 uk-margin">
          <label className="uk-form-label" htmlFor="email">Email</label>
          <input     onChange={handleChange("email")}
          type="email"
          value={email} id="email" className="uk-input uk-form-large" type="email" placeholder="tom@company.com" />
        </div>
        <div className="uk-width-1-1 uk-margin">
          <label className="uk-form-label" htmlFor="password">Password</label>
          <input  onChange={handleChange("password")}
          
          type="password"
          value={password}  id="password" className="uk-input uk-form-large" type="password" placeholder="Min 8 characters" />
        </div>
        <div className="uk-width-1-1 uk-text-center">
          <button onClick={onSubmit} className="uk-button uk-button-primary uk-button-large">Sign Up</button>
        </div>
        <div className="uk-width-1-1 uk-margin uk-text-center">
          <p className="uk-text-small uk-margin-remove">By signing up you agree to our <a className="uk-link-border" href="#">terms</a> of service.</p>
        </div>
      </form>
    </div>
  </div>
  <div className="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center uk-light
    uk-background-cover uk-background-norepeat uk-background-blend-overlay uk-background-primary" style={{backgroundImage: 'url(https://source.unsplash.com/nF8xhLMmg0c/680x1000)'}} data-uk-height-viewport>
    <div>
      <div className="uk-text-center">
        <h2 className="uk-h1 uk-letter-spacing-small">Welcome Back</h2>
      </div>
      <div className="uk-margin-top uk-margin-medium-bottom uk-text-center">
        <p>Already signed up, enter your details and start the learning today</p>
      </div>
      <div className="uk-width-1-1 uk-text-center">
        <a href="/signin" className="uk-button uk-button-success-outline uk-button-large">Sign In</a>
      </div>
    </div>
  </div>
    {successMessage()}
    {errorMessage()}
    
</div>

    // <Base title="Sign up page" description="A page for user to sign up!">
    //   {successMessage()}
    //   {errorMessage()}
    //   {signUpForm()}
    //   <p className="text-white text-center">{JSON.stringify(values)}</p>
    // </Base>
  );
};

export default Signup;

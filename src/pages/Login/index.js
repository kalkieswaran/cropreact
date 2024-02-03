import React, { useState, useEffect } from "react";
import SmartInput from "../../components/core/forms/SmartInput";
import { post } from "../../services/smartApiService";
import { Link, Navigate, useNavigate } from "react-router-dom";
import croplogo from "../../assets/images/croplogo.png";
import "./Login.css"; // You can remove this if not needed
import { LOGIN_lOGO } from "../../services/ImageService";
import Signup from "./Signup";

const Login = () => {
  const [cropid, setCropid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here using cropid and password
    console.log("Logging in...");
  };

  const handleSignup = () => {
    // Add your signup logic here
    navigate("/site/signup");
    console.log("Redirecting to signup...");
  };

  const leftImage = () => {
    return (
      <>
        <figure className="image is-hidden-mobile">
          <img
            src={LOGIN_lOGO}
            alt="Login Logo"
            className="image login-image"
          />
        </figure>
      </>
    );
  };

  const LoginForm = () => {
    return (
      <>
        <div className="is-size-6-mobile">
          <div className="card login-card mb-5">
            <figure className="crop-image is-flex is-justify-content-center">
              <img src={croplogo} alt="Crop Logo" />
            </figure>
            <div className="login-title has-text-centered is-size-3  p-5">
              Login
            </div>
            <div className="has-text-centered is-size-4 p-5 ">
              Your Access to the World of Customer Loyalty
            </div>
            <div className="fullform">
              <div className="control login-radio p-4  is-flex">
                <label className="radio">
                  <input type="radio" name="loginMethod" />
                  Crop ID
                </label>
                <label className="radio">
                  <input type="radio" name="loginMethod" />
                  Mobile
                </label>
                <label className="radio">
                  <input type="radio" name="loginMethod" />
                  Email
                </label>
              </div>
              <div className="login-form is-flex is-justify-content-center is-flex-direction-column">
                <div className="control p-5">
                  <input
                    className="input login-input"
                    type="text"
                    placeholder="Crop ID"
                    value={cropid}
                    onChange={(e) => setCropid(e.target.value)}
                  />
                </div>
                <div className="control p-5">
                  <input
                    className="input login-input"
                    type="password"
                    placeholder="Pin"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="field login-button is-flex is-justify-content-center p-6">
                  <button className="is-size-4" type="submit">
                    Log in
                  </button>
                </div>
                <div className="field login-signup is-flex is-justify-content-center is-size-4">
                  Not a Member?
                  <Link to="/site/signup" className="" onClick={handleSignup}>
                    {" "}
                    Signup Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container login-container is-fluid is-fullheight">
        <div className="columns is-vcentered">
          <div className="column is-6">{leftImage()}</div>
          <div className="column is-6">
            {/* login form */}
            {LoginForm()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

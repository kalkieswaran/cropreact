import React, { useState, useEffect } from "react";
import { useSiteContext } from "../../contexts/SiteProvider";
import { post } from "../../services/smartApiService";
import { Link, useNavigate } from "react-router-dom";
import croplogo from "../../assets/images/croplogo.png";
import "./Login.css"; // You can remove this if not needed
import signup from "../../assets/images/signup.png";
import { SmartSoftInput } from "soft_digi";

const Signup = () => {
  const { setLoading, setUser, openModal, closeModal, startSessionAct } =
    useSiteContext();
  const navigate = useNavigate();
  const [mobile, setmobile] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {
    const data = { username: "kminchelle", password: "0lelplR" };
    setLoading(true, "Logging in Please Wait....");
    const subscription = post("auth/login", data).subscribe((response) => {
      setUser(response.data);
      setLoading(false);
      startSessionAct();
      navigate("/");
    });
    return () => {
      subscription.unsubscribe();
    };
  };

  const handleSignup = () => {
    navigate("/signup");
  };
  const leftImage = () => {
    return (
      <>
        <figure className="">
          <img
            src={signup}
            alt="sign Logo"
            className="image sign-image"
          />
        </figure>
      </>
    );
  };

  const SignupForm = () => {
    return (
      <>
        <div className="card login-card mb-5">
          <figure className="crop-image is-flex is-justify-content-center">
            <img src={croplogo} alt="Crop Logo" />
          </figure>
          <div className="login-title has-text-centered is-size-3  p-5">
          Sign Up
          </div>
          <div className="has-text-centered is-size-4 p-5 ">
          Enter Your Credentials to Continue
          </div>
          <div className="fullform">
            <div className="control login-radio p-5  is-flex">
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
                  placeholder="mobile"
                  value={mobile}
                  onChange={(e) => setmobile(e.target.value)}
                />
              
              </div>
              <div className="field login-button is-flex is-justify-content-center p-6">
                <button className="is-size-4" type="submit">
                  Send OTP
                </button>
              </div>
              <div className="field login-signup is-flex is-justify-content-center is-size-4">
                Already have an Account?
                <Link to="/" className="login-sign" onClick={handleSignup}>
                  {" "}
                  Login
                </Link>
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
          {SignupForm()}
        </div>
      </div>
    </div>
  </>
  );
};

export default Signup;
/*
  <SmartSoftInput 
                  leftIcon="fa-user"
                  placeHolder='hiiiiiii'
                  
                />*/

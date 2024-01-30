import React, { useState, useEffect } from 'react';
import { useSiteContext } from '../../contexts/SiteProvider';
import { post } from '../../services/smartApiService';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import croplogo from '../../assets/images/croplogo.png';
import './Login.css'; // You can remove this if not needed
import { LOGIN_lOGO } from '../../services/ImageService';
import Signup from './Signup';

const Login = () => {
  const [cropid, setCropid] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here using cropid and password
    console.log('Logging in...');
  };

  const handleSignup = () => {
    // Add your signup logic here
    navigate("/site/signup")
    console.log('Redirecting to signup...');
  };

  
 
  return (

    <div className="container">
      <div className="columns is-vcentered mt-2">
        <div className="left-column is-6  ">
          <figure className="login-image ">
            <img src={LOGIN_lOGO} alt="Login Logo" />
          </figure>
        </div>
        <div className="right-column  is-6 ">
          <div className="box mb-3">
            <figure className="login-image1  mt-2 is-126*126 ">
              <img src={croplogo} alt="Crop Logo" />
            </figure>
            <h1 className="title is-4">Login</h1>
            <p className="title is-6">Your Access to the World of Customer Loyalty</p>
            <form onSubmit={handleLogin}>
              <div className="radio-field">
                <div className="radio-control">
                  <label className="radio-label">
                    <input type="radio" name="loginMethod" />
                    Crop ID
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="loginMethod" />
                    Mobile
                  </label> <label className="radio-label">
                    <input type="radio" name="loginMethod" />
                    Email
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Crop ID"
                    value={cropid} onChange={(e) => setCropid(e.target.value)}
                  />
                </div> </div> <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Pin"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="button-field">
                <div className="button-control">
                  <button className="button-button" type="submit">
                    Login
                  </button>
                </div>
                <div className="field">
               Not a Member?<Link to="/site/signup" className="login-sign" onClick={handleSignup}> Signup Now
                </Link>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div> </div>
  );
};

export default Login;
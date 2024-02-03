import React, { useState, useEffect } from 'react';
import { useSiteContext } from '../../contexts/SiteProvider';
import { post } from '../../services/smartApiService';
import { Link, useNavigate } from 'react-router-dom';
import croplogo from '../../assets/images/croplogo.png';
import './Login.css'; // You can remove this if not needed
import  forget  from '../../assets/images/forget.png';


const Forgetpin = () => {
  const { setLoading, setUser, openModal, closeModal, startSessionAct } = useSiteContext();
  const navigate = useNavigate();
  
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    const data = { username: 'kminchelle', password: '0lelplR' };
    setLoading(true, 'Logging in Please Wait....');
    const subscription = post('auth/login', data).subscribe((response) => {
      setUser(response.data);
      setLoading(false);
      startSessionAct();
      navigate('/');
    });
    return () => {
      subscription.unsubscribe();
    };
  };


  const handleSignup = () => {
    navigate('/signup');
  };
  const leftImage = () => {
    return (
      <>
        <figure className="">
          <img
            src={forget}
            alt="forget Logo"
            className="image sign-image"
          />
        </figure>
      </>
    );
  };

  const ForgetpinForm = () => {
    return (
      <>
        <div className="card login-card mb-5">
          <figure className="crop-image is-flex is-justify-content-center">
            <img src={croplogo} alt="Crop Logo" />
          </figure>
          <div className="login-title has-text-centered is-size-3  p-5">
          Forget Pin
          </div>
          <div className="has-text-centered is-size-4 p-5 ">
          Enter Your Credentials to Continue
          </div>
          <div className="fullform">
            <div className="control login-radio p-5  is-flex">
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
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              
              </div>
              <div className="field login-button is-flex is-justify-content-center p-6">
                <button className="is-size-4" type="submit">
                  Continue
                </button>
              </div>
              <div className="field login-signup is-flex is-justify-content-center is-size-4">
              Already have an Account?<Link to="/" className="login-sign" onClick={handleSignup}> Back to Login</Link>
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
          {ForgetpinForm()}
        </div>
      </div>
    </div>
  </>
  );
};

export default Forgetpin;
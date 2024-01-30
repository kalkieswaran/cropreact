import React, { useState, useEffect } from 'react';
import { useSiteContext } from '../../contexts/SiteProvider';
import { post } from '../../services/smartApiService';
import { Link, useNavigate } from 'react-router-dom';
import croplogo from '../../assets/images/croplogo.png';
import './Login.css'; // You can remove this if not needed
import { LOGIN_lOGO } from '../../services/ImageService';
import Signup from './Signup';

const Login = () => {
  const { setLoading, setUser, openModal, closeModal, startSessionAct } = useSiteContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

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

  const handleRememberMe = () => {
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
  };

  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleForgetPassword = () => {
    // Implement your forget password logic here
  };

  const handleSignup = () => {
    navigate('/site/signup');
  };

  return (

    <div className="login-container">
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
                    value={email} onChange={(e) => setEmail(e.target.value)}
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
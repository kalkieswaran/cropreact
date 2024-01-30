import React, { useState, useEffect } from 'react';
import { useSiteContext } from '../../contexts/SiteProvider';
import { post } from '../../services/smartApiService';
import { Link, useNavigate } from 'react-router-dom';
import croplogo from '../../assets/images/croplogo.png';
import './Login.css'; // You can remove this if not needed
import  signup  from '../../assets/images/signup.png';


const Signup = () => {
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
    navigate('/signup');
  };

  return (

    <div className="container">
      <div className="columns is-vcentered">
        <div className="left-column is-6  ">
          <figure className="signup-image ">
            <img src={signup} alt="Login Logo" />
          </figure>
        </div>
        <div className="right-column  is-6 ml-6 ">
          <div className="box">
            <figure className="login-image1">
              <img src={croplogo} alt="Crop Logo" />
            </figure><br/>
            <h1 className="title is-4">Sign Up</h1>
            <p className="title is-6">Enter  Your Credentials to Continue</p>
            <form onSubmit={handleLogin}>
              <div className="radio-field">
                <div className="radio-control">
                 
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
                    type="number"
                    placeholder="Mobile"
                    value={password}
                    leftIcon="fa-lock"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="button-field">
                <div className="button-control">
                  <button className="button-button" type="submit">
                    Send OTP
                  </button>
                </div><br/>
                <div className="signup-field">
             Already have an Account?<Link to="/" className="login-sign" onClick={handleSignup}> Login
                </Link>
                </div>
                
              </div>

            </form>
          </div>
        </div>
      </div> </div>
  );
};

export default Signup;
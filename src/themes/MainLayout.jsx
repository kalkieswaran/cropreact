// LoginLayout.js
import React from 'react';
import Header from './MainTheme/Header';
import test from "../assets/images/sidetest.png"
import { useSiteContext } from '../contexts/SiteProvider';
import './MainLayoutStyle.css'
import SideNav from './MainTheme/SideNav';


const MainLayout = ({ children }) => {
  const { user, setUser } = useSiteContext();
  const handleLogout = () => {
    setUser();
  }
  return (
    <div className="container is-fluid smart-crop-container">
         <div className='smart-crop-sidenav'>
           <SideNav />
         </div> 
         <div className='smart-crop-middle'>
              <div className='smart-crop-header'>
                  <Header />
              </div>
              <div className='smart-crop-content'>
                  {children}
              </div>
         </div>
    </div>
  );
};

export default MainLayout;

/***
 * 
  <main className='smart-mainlayout-middle p-5'>{children}</main>  
 */
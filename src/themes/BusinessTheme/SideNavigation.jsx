import React, { useState } from 'react'
import './SideNav.css' 
const SideNavigation = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(sidebarOpen=>!sidebarOpen);
      console.log('Toggle sidebar')
    };

    const  toggleSidebarOpen= sidebarOpen ?"active":null;
  return (
   <>
   <div className='main-side-nave-items'>

    <div className='side-nav-content'>
      <div className='side-nav-title ' onClick={toggleSidebar} >
       <p className='side-list-heading ml-4'>MANAGE SERVICES</p> 
       <i class="fa fa-caret-down mr-3 mt-1" aria-hidden="true"></i>
         </div>
         <ul className={`side-nav-links ${sidebarOpen ? 'visible' : 'hidden'}`}>
      {/* <ul className={'side-nav-links ${toggleSidebarOpen}'}> */}
      <li className='list-items'>
      <i class="fa fa-trash mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>My Offers</p>
      </li>
      <li className='list-items'>
      <i class="fa fa-pencil-square-o mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Create Offers</p>
      </li>
      <li className='list-items'>
      <i class="fa fa-trash mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Market Offers</p>
      </li>
      <li className='list-items'>
      <i class="fa fa-cog mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Service Settings</p>
      </li>
     
      </ul>
    </div>
    <div className='side-nav-content'>
      <div className='side-nav-title ' onClick={toggleSidebar} >
       <p className='side-list-heading ml-4'>MANAGE PROGRAM</p> 
       <i class="fa fa-caret-down mr-3 mt-1" aria-hidden="true"></i>
         </div>
         <ul className={`side-nav-links ${sidebarOpen ? 'visible' : 'hidden'}`}>
      {/* <ul className={'side-nav-links ${toggleSidebarOpen}'}> */}
      <li className='list-items'>
      <i class="fa fa-trash mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Offer CROPs</p>
      </li>
      <li className='list-items'>
      <i class="fa fa-pencil-square-o mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Extend Bonus CROPs</p>
      </li>
      <li className='list-items'>
      <i class="fa fa-trash mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Slash Redemption CROPs</p>
      </li>
      <li className='list-items'>
      <i class="fa fa-cog mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Happy Hours</p>
      </li>
      <li className='list-items'>
      <i class="fa fa-cog mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Other Services</p>
      </li>
     
      </ul>
    </div>
    <div className='side-nav-content'>
      <div className='side-nav-title ' onClick={toggleSidebar} >
       <p className='side-list-heading ml-4'>MY ACCOUNT</p> 
       <i class="fa fa-caret-down mr-3 mt-1" aria-hidden="true"></i>
         </div>
         <ul className={`side-nav-links ${sidebarOpen ? 'visible' : 'hidden'}`}>
      {/* <ul className={'side-nav-links ${toggleSidebarOpen}'}> */}
      <li className='list-items'>
      <i class="fa fa-trash mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>My Offers</p>
      </li>
      <li className='list-items'>
      <i class="fa fa-pencil-square-o mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Create Offers</p>
      </li>
      <li className='list-items'>
      <i class="fa fa-trash mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Market Offers</p>
      </li>
      <li className='list-items'>
      <i class="fa fa-cog mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Service Settings</p>
      </li>
     
      </ul>
    </div>
    <div className='side-nav-content'>
      <div className='side-nav-title ' onClick={toggleSidebar} >
       <p className='side-list-heading ml-4'>SETTINGS</p> 
       <i class="fa fa-caret-down mr-3 mt-1" aria-hidden="true"></i>
         </div>
         <ul className={`side-nav-links ${sidebarOpen ? 'visible' : 'hidden'}`}>
      {/* <ul className={'side-nav-links ${toggleSidebarOpen}'}> */}
      <li className='list-items'>
      <i class="fa fa-trash mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>My Offers</p>
      </li>
      <li className='list-items'>
      <i class="fa fa-pencil-square-o mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Create Offers</p>
      </li>
      <li className='list-items'>
      <i class="fa fa-trash mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Market Offers</p>
      </li>
      <li className='list-items'>
      <i class="fa fa-cog mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Service Settings</p>
      </li>
     
      </ul>
    </div>


   </div>
   </>
  )
}

export default SideNavigation
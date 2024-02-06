import React, { useState } from 'react'
import './SideNav.css' 
import { useLocation, useNavigate } from 'react-router-dom';

const  ManageServices=()=>{
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleNavigation = (link) => {
    navigate(link);
  };

  const toggleSidebar = () => {
    setSidebarOpen(sidebarOpen=>!sidebarOpen);
    console.log('Toggle sidebar')
  };

  const ManageServicesItems=[
    {
      id: 1,
      label: "My Offers",
      icon: <i class="fa fa-trash" aria-hidden="true"></i>,
      link:"/business/amendform"
    },
    {
      id: 1,
      label: "Create Offers",
      icon: <i class="fa fa-pencil-square-o" aria-hidden="true"></i>,
      link:"/business/createoffersform"
    },
    {
      id: 1,
      label: "Market Offers",
      icon: <i class="fa fa-folder" aria-hidden="true"></i>,
      link:"/business/myoffertable"
    },
    {
      id: 1,
      label: "Service Settings",
      icon: <i class="fa fa-cog" aria-hidden="true"></i>,
      link:"/business/servicesettingsform"
    },
  ]

  return(<>
   <div className='side-nav-content'>
      <div className='side-nav-title ' onClick={toggleSidebar} >
       <p className='side-list-heading ml-4'>MANAGE SERVICES</p> 
       <i class="fa fa-caret-down mr-3 mt-1" aria-hidden="true"></i>
         </div>
         <ul className={`side-nav-links ${sidebarOpen ? 'visible' : 'hidden'}`}>
          { ManageServicesItems.map((item)=>(
          <li 
          key={item.id}
          onClick={() => handleNavigation(item.link)}
          className={location.pathname === item.link ? 'list-item-active' : 'list-items '}>
            <div className='is-flex py-2 ml-3 side-nav-display-items my-1'>
            <div className='side-nav-icon px-2 '>{item.icon}</div>
            <p className='item-text is-size-6'>{item.label}</p>
            </div>
        
          </li>
     ))}
  
      {/* <li className='list-items'>
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
      </li> */}
     
      </ul>
    </div>
  </>)
}

const ManageProgram =()=>{
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(sidebarOpen=>!sidebarOpen);
    console.log('Toggle sidebar')
  };

  

  return(
    <>
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
    </>
  )
}

const MyAccount =() =>{
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(sidebarOpen=>!sidebarOpen);
    console.log('Toggle sidebar')
  };
  return(
    <>
     <div className='side-nav-content'>
      <div className='side-nav-title ' onClick={toggleSidebar} >
       <p className='side-list-heading ml-4'>MY ACCOUNT</p> 
       <i class="fa fa-caret-down mr-3 mt-1" aria-hidden="true"></i>
         </div>
         <ul className={`side-nav-links ${sidebarOpen ? 'visible' : 'hidden'}`}>
      {/* <ul className={'side-nav-links ${toggleSidebarOpen}'}> */}
      <li className='list-items'>
      <i class="fa fa-trash mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>My CROPs Activity</p>
      </li>
      <li className='list-items'>
      <i class="fa fa-pencil-square-o mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Statement</p>
      </li>
      <li className='list-items'>
      <i class="fa fa-trash mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>My CROP Card</p>
      </li>
      
     
      </ul>
    </div>
    </>
  )
}

const Settings = ()=>{
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(sidebarOpen=>!sidebarOpen);
    console.log('Toggle sidebar')
  };
  return(
    <>
 <div className='side-nav-content'>
      <div className='side-nav-title ' onClick={toggleSidebar} >
       <p className='side-list-heading ml-4'>SETTINGS</p> 
       <i class="fa fa-caret-down mr-3 mt-1" aria-hidden="true"></i>
         </div>
         <ul className={`side-nav-links ${sidebarOpen ? 'visible' : 'hidden'}`}>
      {/* <ul className={'side-nav-links ${toggleSidebarOpen}'}> */}
      <li className='list-items'>
      <i class="fa fa-trash mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Pin Change</p>
      </li>
      <li className='list-items'>
      <i class="fa fa-pencil-square-o mx-4 mt-1" aria-hidden="true"></i>
      <p className='item-text'>Communication Preference</p>
      </li>
     
      </ul>
    </div>

    </>
  )
}

const SideNavigation = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(sidebarOpen=>!sidebarOpen);
      console.log('Toggle sidebar')
    };

    
  return (
   <>
   <div className='main-side-nave-items'>
      <ManageServices />
      <ManageProgram />
      <MyAccount />
      <Settings />
   </div>
   </>
  )
}

export default SideNavigation
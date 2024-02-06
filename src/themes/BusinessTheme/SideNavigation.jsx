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
    
  };

  const ManageServicesItems=[
    {
      id: 1,
      label: "My Offers",
      icon: <i class="fa fa-trash" aria-hidden="true"></i>,
      link:"/business/amendform"
    },
    {
      id: 2,
      label: "Create Offers",
      icon: <i class="fa fa-pencil-square-o" aria-hidden="true"></i>,
      link:"/business/createoffersform"
    },
    {
      id: 3,
      label: "Market Offers",
      icon: <i class="fa fa-shopping-basket" aria-hidden="true"></i>,
      link:"/business/myoffertable"
    },
    {
      id: 4,
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
            <p className='item-text '>{item.label}</p>
            </div>
        
          </li>
     ))}
  
    
      </ul>
    </div>
  </>)
}

const ManageProgram =()=>{
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
  const ManageProgramItems=[
    {
      id: 1,
      label: "Offer CROPs",
      icon: <i class="fa fa-gift" aria-hidden="true"></i>,
      link:"/business/offerscropsform"
    },
    {
      id: 2,
      label: "Extend Bonus CROPs",
      icon: <i class="fa fa-american-sign-language-interpreting" aria-hidden="true"></i>,
      link:"/business/extendbonusform"
    },
    {
      id: 3,
      label: "Slash Redemption CROPs",
      icon: <i class="fa fa-gift" aria-hidden="true"></i>,
      link:"/business/slashredemptionform"
    },
    {
      id: 4,
      label: "Happy Hours",
      icon: <i class="fa fa-clock-o" aria-hidden="true"></i>,
      link:"/business/happyhoursform"
    },
    {
      id: 5,
      label: "Other Services",
      icon: <i class="fa fa-cogs" aria-hidden="true"></i>,
      link:"/business/otherserviceform"
    },
  ]

  

  return(
    <>
      <div className='side-nav-content'>
      <div className='side-nav-title ' onClick={toggleSidebar} >
       <p className='side-list-heading ml-4'>MANAGE PROGRAM</p> 
       <i class="fa fa-caret-down mr-3 mt-1" aria-hidden="true"></i>
         </div>
         <ul className={`side-nav-links ${sidebarOpen ? 'visible' : 'hidden'}`}>
    
         { ManageProgramItems.map((item)=>(
          <li 
          key={item.id}
          onClick={() => handleNavigation(item.link)}
          className={location.pathname === item.link ? 'list-item-active' : 'list-items '}>
            <div className='is-flex py-2 ml-3 side-nav-display-items my-1'>
            <div className='side-nav-icon px-2 '>{item.icon}</div>
            <p className='item-text '>{item.label}</p>
            </div>
        
          </li>
     ))}
  
      </ul>
    </div>
    </>
  )
}

const MyAccount =() =>{
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleNavigation = (link) => {
    navigate(link);
  };
  const MyAccountItems=[
    {
      id: 1,
      label: "My CROPs Activity",
      icon: <i class="fa fa-trash" aria-hidden="true"></i>,
      link:"/business/mycropstable"
    },
    {
      id: 2,
      label: "Statement",
      icon: <i class="fa fa-pencil-square-o" aria-hidden="true"></i>,
      link:"/business/statementform"
    },
    {
      id: 3,
      label: "My CROP Card",
      icon: <i class="fa fa-folder" aria-hidden="true"></i>,
      link:"/business/mycardformview"
    },
   
  ]


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
         { MyAccountItems.map((item)=>(
          <li 
          key={item.id}
          onClick={() => handleNavigation(item.link)}
            className={location.pathname === item.link ? 'list-item-active' : 'list-items '}>
            <div className='is-flex py-2 ml-3 side-nav-display-items my-1'>
            <div className='side-nav-icon px-2 '>{item.icon}</div>
            <p className='item-text '>{item.label}</p>
            </div>
        
          </li>
     ))}
     
     
      </ul>
    </div>
    </>
  )
}

const Settings = ()=>{
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleNavigation = (link) => {
    navigate(link);
  };

  const SettingsItems=[
    {
      id: 1,
      label: "Pin Change",
      icon: <i class="fa fa-trash" aria-hidden="true"></i>,
      link:"/business/pinchangeform"
    },
    {
      id: 2,
      label: "Communication Preference",
      icon: <i class="fa fa-pencil-square-o" aria-hidden="true"></i>,
      link:"/business/communicationpreform"
    },
   
  ]


  const toggleSidebar = () => {
    setSidebarOpen(sidebarOpen=>!sidebarOpen);
    console.log('Toggle sidebar')
  };
  return(
    <>
 <div className='side-nav-content'>
      <div className='side-nav-title ' onClick={toggleSidebar} >
       <p className='side-list-heading  ml-4'>SETTINGS</p> 
       <i class="fa fa-caret-down mr-3 mt-1" aria-hidden="true"></i>
         </div>
         <ul className={`side-nav-links ${sidebarOpen ? 'visible' : 'hidden'}`}>
         { SettingsItems.map((item)=>(
          <li 
          key={item.id}
          onClick={() => handleNavigation(item.link)}
          className={location.pathname === item.link ? 'list-item-active' : 'list-items '}>
            <div className='is-flex py-2 ml-3 side-nav-display-items my-1'>
            <div className='side-nav-icon px-2 '>{item.icon}</div>
            <p className='item-text '>{item.label}</p>
            </div>
        
          </li>
     ))}
   
     
     
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
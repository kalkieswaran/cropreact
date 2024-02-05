import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import MainLayout from "../themes/MainLayout";
import LoginLayout from "../themes/LoginLayout";
import PrivateRoute from "./PrivateRoute";
import { ToastContainer } from "react-toastify";
import Pdftable from "../pages/Table/Pdftable";
import Pdfform from "../pages/Table/Pdfform";
import PdfCalendar from "../pages/Table/PdfCalander";
import Signup from "../pages/Login/Signup";
import SmartLogin from "../pages/Login/SmartLogin";
import TextBoxExample from "../pages/examples/TextBoxExample";
import TableExample from "../pages/examples/TableExample";
import SelectBoxExample from "../pages/examples/SelectBoxExample";
import ModalExample from "../pages/examples/ModalExample";
import Forgetpin from "../pages/Login/Forgetpin";
import HomeButtons from "../pages/Home/HomeButtons";
import CreatePromosOfferForm from "../pages/Business/PromosButton/CreatePromosOfferForm";
import MarketOfferForm from "../pages/Business/ManageService/MyOffers/MarketOfferForm";
import Dashboard from "../pages/Business/Dashboard/Dashboard";
import MyPromosTable from "../pages/Business/PromosButton/MyPromosTable";
import RatedOffersTable from "../pages/Business/PromosButton/RatedOffersTable";
import MyOffersTable from "../pages/Business/ManageService/MyOffers/MyOffersTable";
import HomeView from "../pages/Business/Home/Home/HomeView";
import MyProfileForm from "../pages/Business/Home/MyProfile/MyProfileForm";
import MyOffersView from "../pages/Business/ManageService/MyOffers/MyOffersView";
import AmendForm from "../pages/Business/ManageService/MyOffers/AmendForm";
import ViewComentsCard from "../pages/Business/PromosButton/ViewComentsCard";
import CreateOffersForm from "../pages/Business/ManageService/CreateOffers/CreateOffersForm";
import MarketOffersTable from "../pages/Business/ManageService/MarketOffers/MarketOffersTable";
import ServiceSettingsForm from "../pages/Business/ManageService/ServiceSettings/ServiceSettingsForm";
import OfferCropsForm from "../pages/Business/ManageProgram/OfferCrops/OfferCropsForm";
import ExtendBonusForm from "../pages/Business/ManageProgram/ExtendBonus/ExtendBonusForm";
import SlashRedemptionForm from "../pages/Business/ManageProgram/SlashRedemption/SlashRedemptionForm";
import HappyHoursForm from "../pages/Business/ManageProgram/HappyHours/HappyHoursForm";
import OtherServiceForm from "../pages/Business/ManageProgram/OtherService/OtherServiceForm";
import MyCropsTable from "../pages/Business/MyAccount/MyCrops/MyCropsTable";
import MyCropsView from "../pages/Business/MyAccount/MyCrops/MyCropsView";
import StatementForm from "../pages/Business/MyAccount/Statement/StatementForm";
import MyCardFormview from "../pages/Business/MyAccount/MyCard/MyCardFormview";

const SiteRoute = () => {
  const isAuthenticated = true;

  const exampleRoutes=()=>{
    return (
      <MainLayout>     
        <Routes>
          <Route path="textbox" element={<TextBoxExample />} />  
          <Route path="selectbox" element={<SelectBoxExample />} />  
          <Route path="table" element={<TableExample />} />  
          <Route path="modal" element={<ModalExample />} />   
        </Routes>
    </MainLayout>
    )
  }


  const BusinessRoutes=()=>{
    return (
      <MainLayout> 
        <Routes>
          {/* dashboard */}
          <Route path="/dashboard" element={< Dashboard />} />

          {/* home  Button */}
          <Route path="/homeview" element={<HomeView />} /> 
          <Route path="/myprofileform" element={<MyProfileForm />} /> 

          {/* Promos button*/}
          <Route path="/mypromostable" element={< MyPromosTable />} />
          <Route path="/createpromosofferform"  element={< CreatePromosOfferForm/>}/>
          <Route path="/ratedoffertable" element={<RatedOffersTable />} /> 
          <Route path="/viewcomentscard" element={<ViewComentsCard />} /> 
        
           {/* Manage Services >My Offers  */}
           <Route path="/myoffertable" element={<MyOffersTable />} /> 
           <Route path="/myofferview" element={<MyOffersView />} /> 
           <Route path="/marketofferform" element={<MarketOfferForm />} /> 
           <Route path="/amendform" element={<AmendForm />} /> 
       
           {/* Manage Services >Create Offers  */}
           <Route path="/createoffersform" element={<CreateOffersForm />} /> 

           {/* Manage Services >Market Offers  */}
           <Route path="/createofferstable" element={<MarketOffersTable />} /> 

           {/* Manage Services >Service Settings  */}
           <Route path="/servicesettingsform" element={<ServiceSettingsForm />} />
 
          {/* Manage Program > Offers Crops */}
          <Route path="/offerscropsform" element={<OfferCropsForm />} />

          {/* Manage Program > Extend Bonus Crops */}
          <Route path="/extendbonusform" element={<ExtendBonusForm />} />

          {/* Manage Program > Slash Redemption Crops */}
          <Route path="/slashredemptionform" element={<SlashRedemptionForm />} />

          {/* Manage Program > Happy Hours */}
          <Route path="happyhoursform" element ={<HappyHoursForm />} />

          {/* Manage Program > Other Services */}
          <Route path='/otherserviceform' element={<OtherServiceForm />} />

          {/* My Account >My Crops */}
          <Route path="/mycropstable" element={<MyCropsTable />} />
          <Route path="/mycropsview" element={<MyCropsView />} />

          {/* My Account >Statement */}
          <Route path="/statementform" element={<StatementForm />} />

          {/* My Account >My Card */}
          <Route path="/mycardformview" element={<MyCardFormview />} />        
       
          
        </Routes>
        </MainLayout> 
  
    )
  }

  const mainRouteChildren = () => {
    return (
      <MainLayout>
        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/pdftable" element={<Pdftable/>} />
          <Route path="/newform" element={<Pdfform/>} />
          <Route path="/pdfcal" element={<PdfCalendar/>} />
    
        </Routes>
      </MainLayout>
    );
  };

  const loginLayoutChildren = () => {
    return (
      <LoginLayout >        
        <Login/>
      </LoginLayout>
    );
  };

  return (
    <>
      <Router>
        <Routes>         
          <Route path="/" element={loginLayoutChildren()} />         
          <Route
            path="/site/*"
            element={<PrivateRoute> {mainRouteChildren()}</PrivateRoute>}
          />
            <Route
            path="/examples/*"
            element={ exampleRoutes()}
          />

          <Route 
          path="/business/*"
          element={BusinessRoutes()}
          />

          <Route path="/home-button" element={<HomeButtons />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/forgetpin" element={<Forgetpin/>} />
          <Route path="/SmartLogin" element={<SmartLogin/>} />

        


        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default SiteRoute;

/*

 <Route
            path="/home"
            element={ mainRouteChildren()}
          />*/
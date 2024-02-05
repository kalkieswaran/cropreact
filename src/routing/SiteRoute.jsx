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
        
        <Routes>
          <Route path="/dashboard" element={< Dashboard />} />
          <Route path="/mypromostable" element={< MyPromosTable />} />
          <Route path="/createpromosofferform"  element={< CreatePromosOfferForm/>}/>
          <Route path="/marketofferform" element={<MarketOfferForm />} /> 
          <Route path="/ratedoffertable" element={<RatedOffersTable />} /> 
          <Route path="/marketofferform" element={<MarketOfferForm />} /> 
          <Route path="/myoffertable" element={<MyOffersTable />} /> 
         
          
        </Routes>
  
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
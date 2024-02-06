import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import MainLayout from "../../themes/MainLayout";
import OperationsRoute from "./OperationsRoute";

const AdminRoute = () => { 
  return (
     <MainLayout>
          <Routes>
            <Route path="/operations/*" element={<OperationsRoute />} />     
         </Routes>       
     </MainLayout>
  )
}

export default AdminRoute
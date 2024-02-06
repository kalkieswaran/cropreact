import React from 'react'
import MainLayout from "../../themes/MainLayout";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const BusinessRoute = () => {
  return (
    <MainLayout>
    <Routes>
      <Route path="/operations/*" element={<OperationsRoute />} />     
   </Routes>       
</MainLayout>
  )
}

export default BusinessRoute
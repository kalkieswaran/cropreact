import React from 'react'
import MainLayout from "../../themes/MainLayout";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ManageServices from './ManageServices';
import ManageProgramRoute from './ManageProgramRoute';

const BusinessRoute = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/manage-services/*" element={<ManageServices />} />
        <Route path="/manage-program/*" element={<ManageProgramRoute />} />
      </Routes>
    </MainLayout>
  )
}

export default BusinessRoute
import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { MyOffersTable } from '../../pages/Business';

const ManageServices = () => {
  return ( 
    <Routes>
        <Route path="/my-offer-list" element={<MyOffersTable />} />      
      </Routes>
      
  )
}

export default ManageServices
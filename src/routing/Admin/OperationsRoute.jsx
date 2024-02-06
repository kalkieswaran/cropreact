
import {LoyalityTable } from "../../pages/Admin/index";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const OperationsRoute = () => {
  return ( 
    <Routes>
      <Route path="/loyality-list" element={<LoyalityTable />} />     
    </Routes>  
  );
};

export default OperationsRoute;

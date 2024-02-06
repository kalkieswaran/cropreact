import React, { useState } from 'react'

import { useSiteContext } from '../../../../contexts/SiteProvider';
import {SmartSoftButton, SmartSoftForm} from "soft_digi"




const MarketOfferForm = () => {

  
  const [formData, setFormData] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState(false);
  const { setLoading,closeModal } = useSiteContext();

  const handleInputChange = (name, value) => {
    //console.log(" name " ,name , "   value " , value)
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleErrorChange = (name, value) => {
    setFormErrors((prev) => {
      // Create a copy of the previous state
      const updatedFormData = { ...prev };
      // Check if the value is null or empty
      if (value === null || value === "") {
        // If true, remove the property from the updated state
        delete updatedFormData[name];
      } else {
        // Otherwise, update or add the property in the updated state
        updatedFormData[name] = value;
      }

      return updatedFormData;
    });
  };

  const numericValidations = [
    {
      type: "required",
      msg: "Numeric Value is Required",
    },
    {
      type: "pattern",
      msg: "Please Enter Correct Numeric Value",
      pattern: "[0-9]+",
    },
  ];

  
  const handleFormSubmit = () => {
    console.log("formdata" , formData);
    setFormSubmit(true);
    console.log("form errors ", formErrors);
  };

  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];

  const formElements = [

  {
     type:"SELECT_BOX",
     width:"6",
     name:"select_one",
     element:{
       placeHolder:'Slot',
       options:options
     }
    },

    {
     type:"SELECT_BOX",
     width:"6",
     name:"select_one",
     element:{
       placeHolder:"Market Offer For",
       options:options
     }
    },

    {
     type:"SELECT_BOX",
     width:"6",
     name:"select_one",
     element:{
       placeHolder:"Publish Start Date",
       options:options
     }
    },

    {
     type:"SELECT_BOX",
     width:"6",
     name:"select_one",
     element:{
       placeHolder:"Publish End Date",
       options:options
     }
    },
    {
     type:"TEXT_BOX",
     width:"6",
     name:"input_one",
     element:{
       placeHolder:"Base Price (AUD)",
       validations:numericValidations
     }
    },
    {
     type:"TEXT_BOX",
     width:"6",
     name:"input_two",
     element:{
       placeHolder:"Bid Price (AUD)",
       validations:numericValidations
     }
    },

    
 ]
  

  return (
    <>
    <div className='container'>
      <div className='m-5'> 
        <h1>Market Offer</h1>
      </div>
     
      <hr/>
      
         
         <div className='is-flex is-justify-content-space-between m-2'>
          <h1>Offer Title: Product</h1>
           <SmartSoftButton
          label="Cancel"
          onClick={() => handleFormSubmit()}
          classList={[ "is-small", "is-rounded"]}
          // disabled={!isEmptyObject(formErrors)}
        />
        </div>

        <div className='column multiline'>

        <SmartSoftForm 
           formData={formData} 
          setFormData={handleInputChange} 
          elements={formElements}
          formSubmit={formSubmit}
          handleErrorChange={handleErrorChange}
         />
        </div> 
       

       <div className='is-flex is-justify-content-space-between'>
        <div className='is-flex is-justify-content-space-between m-3'>
        <SmartSoftButton
          label="Submit"
          onClick={() => handleFormSubmit()}
          classList={["is-primary", "is-small", "is-rounded"]}
          // disabled={!isEmptyObject(formErrors)}
        />
        </div>

        <div className='is-flex is-justify-content-space-between'>
        <SmartSoftButton
          label="View Offers"
          onClick={() => handleFormSubmit()}
          classList={['m-3',"is-primary", "is-small", "is-rounded"]}
          // disabled={!isEmptyObject(formErrors)}
        />
         <SmartSoftButton
          label="Amend Offers"
          onClick={() => handleFormSubmit()}
          classList={['m-3',"is-primary", "is-small", "is-rounded"]}
          // disabled={!isEmptyObject(formErrors)}
        />
        </div>

       </div>
        



          
            

          
            
          

       

   

      
   
  </div>

    </>
  )
}

export default MarketOfferForm
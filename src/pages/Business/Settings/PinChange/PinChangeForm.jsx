import React, { useState } from 'react'
import { SmartSoftButton, SmartSoftForm } from 'soft_digi';

const PinChangeForm = () => {

  const [formData, setFormData] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState(false);

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

  const formElements = [
    {
      type:"TEXT_BOX",
      width:"6",
      name:"input_one",
      element:{
        placeHolder:"Enter Old Pin",
        validations:numericValidations
      }
     },

     {
      type:"TEXT_BOX",
      width:"6",
      name:"input_one",
      element:{
        placeHolder:"Enter New Pin",
        validations:numericValidations
      }
     },
  
     {
      type:"TEXT_BOX",
      width:"6",
      name:"input_one",
      element:{
        placeHolder:"Confirm New Pin",
        validations:numericValidations
      }
     },
  

  
     
      
    ]  

  return (
    <>
    <div className='container'>
      <div className='m-5'> 
        <h1>Pin Change</h1>
      </div>
     
      <hr/>
      
      <div className='column multiline is-flex'>
      <SmartSoftForm
           formData={formData} 
          setFormData={handleInputChange} 
          elements={formElements}
          formSubmit={formSubmit}
          handleErrorChange={handleErrorChange}
         />
      </div>
      
      <div className='is-justify-content-center'>
      <SmartSoftButton
          label="Save"
          onClick={() => handleFormSubmit()}
          // disabled={!isEmptyObject(formErrors)}
        />
      </div>

        

       
</div>

    </>
  )
}

export default PinChangeForm
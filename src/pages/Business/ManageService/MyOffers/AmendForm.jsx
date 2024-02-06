import React, { useState } from 'react'
import { useSiteContext } from '../../../../contexts/SiteProvider';
import { SmartSoftButton, SmartSoftForm } from 'soft_digi';

const AmendForm = () => {

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
       type:"TEXT_BOX",
       width:"4",
       name:"input_one",
       element:{
         placeHolder:"Title",
         validations:numericValidations
       }
      },
      {
       type:"TEXT_BOX",
       width:"4",
       name:"input_two",
       element:{
         placeHolder:"Brand",
         validations:numericValidations
       }
      },

      {
        type:"TEXT_BOX",
        width:"4",
        name:"input_two",
        element:{
          placeHolder:"Sector",
          validations:numericValidations
        }
       },

       {
        type:"SELECT_BOX",
        width:"4",
        name:"select_one",
        element:{
          placeHolder:"Apply",
          options:options
        }
       },
       {
        type:"TEXT_BOX",
        width:"4",
        name:"input_two",
        element:{
          placeHolder:"Original Price",
          validations:numericValidations
        }
       },

       {
        type:"TEXT_BOX",
        width:"4",
        name:"input_two",
        element:{
          placeHolder:"Discount Percentage",
          validations:numericValidations
        }
       },

       {
        type:"TEXT_BOX",
        width:"4",
        name:"input_two",
        element:{
          placeHolder:"Quantity",
          validations:numericValidations
        }
       },

       {
        type:"TEXT_BOX",
        width:"4",
        name:"input_two",
        element:{
          placeHolder:"Product Available From Date",
          validations:numericValidations
        }
       },

       {
        type:"TEXT_BOX",
        width:"4",
        name:"input_two",
        element:{
          placeHolder:"Product Available To Date",
          validations:numericValidations
        }
       },

       {
        type:"TEXT_BOX",
        width:"4",
        name:"input_two",
        element:{
          placeHolder:"Detailed Description",
          validations:numericValidations
        }
       },
       {
        type:"TEXT_BOX",
        width:"4",
        name:"input_two",
        element:{
          placeHolder:"Brief Description",
          validations:numericValidations
        }
       },

       {
        type:"TEXT_BOX",
        width:"4",
        name:"input_two",
        element:{
          placeHolder:"Brief Description",
          validations:numericValidations
        }
       },
   ]

  return (
    <>
    <div className='container'>
      <div className='m-5'> 
        <h1>Amend Products</h1>
      </div>
     
      <hr/>
      
         <div className='is-flex is-justify-content-center'>
         <SmartSoftButton
          label="Upload Product Images"
          onClick={() => handleFormSubmit()}
          classList={['m-3']}
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
          // disabled={!isEmptyObject(formErrors)}
        />
        </div>

        <div className='is-flex is-justify-content-space-between'>
        <SmartSoftButton
          label="View Offers"
          onClick={() => handleFormSubmit()}
          classList={['m-3']}
          // disabled={!isEmptyObject(formErrors)}
        />
         <SmartSoftButton
          label="Market Offers"
          onClick={() => handleFormSubmit()}
          classList={['m-3']}
          // disabled={!isEmptyObject(formErrors)}
        />
        </div>

       </div>
        



          
            

          
            
          

       

   

      
   
  </div>

    </>
  )
}

export default AmendForm
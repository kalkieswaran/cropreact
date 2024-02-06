import React, { useState } from 'react'
import { SmartSoftButton, SmartSoftForm } from 'soft_digi';

const CreatePromosOfferForm = () => {

  const [formData, setFormData] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState(false);
  const [type, setType] = useState("password");

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
    console.log("formdata", formData);
    setFormSubmit(true);
    console.log("form errors ", formErrors);
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];


  const formElements = [
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_one",
      element: {
        placeHolder: 'Uplosd Product Images',
        validations: numericValidations
      }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_two",
      element: {
        placeHolder: 'Base Price',
        validations: numericValidations
      }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_three",
      element: {
        placeHolder: 'Product Available From Date',
        validations: numericValidations
      }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_four",
      element: {
        placeHolder: 'Title',
        validations: numericValidations
      }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_five",
      element: {
        placeHolder: 'Briel Description Required',
        validations: numericValidations
      }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_six",
      element: {
        placeHolder: 'Slot',
        validations: numericValidations
      }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_seven",
      element: {
        placeHolder: 'Quantity',
        validations: numericValidations
      }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_eight",
      element: {
        placeHolder: 'Customize Message',
        validations: numericValidations
      }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_nine",
      element: {
        placeHolder: 'Publish End Data',
        validations: numericValidations
      }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_ten",
      element: {
        placeHolder: 'Product Available To Date',
        validations: numericValidations
      }
    },
    {
      type: "SELECT_BOX",
      width: "4",
      name: "select_eleven",
      element: {
        placeHolder: 'Sector',
        options: options
      }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_towl",
      element: {
        placeHolder: 'Bid Price(AUD)',
        validations: numericValidations
      }
    },
    {
      type: "SELECT_BOX",
      width: "4",
      name: "select_tharteen",
      element: {
        placeHolder: 'Publish Available To Date',
        options: options
      }
    },
    {
      type: "SELECT_BOX",
      width: "4",
      name: "select_fourteen",
      element: {
        placeHolder: 'Apply',
        options: options
      }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_fourteen",
      element: {
        placeHolder: 'Detailed description',
        validations: numericValidations
      }
    },
  ]

  return (
    <div className='CreatePromosOfferForm'>
      <div className='header has-text-link is-size-5'>
        <i class="fa fa-caret-square-o-left ml-3 mr-5" aria-hidden="true"></i>
        Create Promo Offer
      </div>
      <hr />
      <SmartSoftForm formData={formData}
        setFormData={handleInputChange}
        elements={formElements}
        formSubmit={formSubmit}
        handleErrorChange={handleErrorChange} />

      <div className='is-flex is-justify-content-center'>
        <SmartSoftButton
          label="submit"
          classList={["is-primary", "is-small", "is-rounded",]}
          onClick={() => handleFormSubmit()}
        />
      </div>
    </div>
  )
}

export default CreatePromosOfferForm
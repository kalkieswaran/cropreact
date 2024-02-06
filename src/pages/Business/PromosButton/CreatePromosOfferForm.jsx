import React, { useState } from 'react'
import { SmartSoftButton, SmartSoftDate, SmartSoftForm } from "soft_digi"



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
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const handleFormSubmit = () => {
    console.log("formdata", formData);
    setFormSubmit(true);
    console.log("form errors ", formErrors);
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

  const formElements = [
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_one",
      element: { placeHolder: 'Upload Product Image', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_two",
      element: { placeHolder: 'Base Price(AUD)', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4", name:
        "input_three",
      element: { placeHolder: 'Product Availlable from', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_four",
      element: { placeHolder: 'Title', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_five",
      element: { placeHolder: 'Brisf Description Required', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_six",
      element: { placeHolder: 'Slot', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_seven",
      element: { placeHolder: 'Quantity', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_eight",
      element: { placeHolder: 'Customize Message', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_nine",
      element: { placeHolder: 'Publish End Date', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_ten",
      element: { placeHolder: 'prodct Available To Date', validations: numericValidations }
    },
    {
      type: "SELECT_BOX",
      width: "4",
      name: "select_eleven",
      element: { placeHolder: 'Sector', options: options }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_twelve",
      element: {
        placeHolder: 'Bid Price (AUO)',
        validations: numericValidations
      }
    },

    {
      type: "SELECT_BOX",
      width: "4",
      name: "select_thirteen",
      element: { placeHolder: 'Publish Start Date', options: options }
    },
    {
      type: "SELECT_BOX",
      width: "4",
      name: "select_fourteen",
      element: { placeHolder: 'Apply ', options: options }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_fifteen",
      element: { placeHolder: 'Detailed ', validations: numericValidations }
    },
  ]

  return (
    <div className='CreatePromosOfferForm'>
      <div className='header is-size-5 has-text-link'>
        <i class="fa fa-caret-square-o-left ml-3 mr-5 " aria-hidden="true"></i>

        Create Promo Offer

      </div>
      <hr />
      <SmartSoftForm formData={formData}
        setFormData={handleInputChange}
        elements={formElements}
        formSubmit={formSubmit}
        handleErrorChange={handleErrorChange} />




      <div className='is-justify-content-center is-flex'>
        <SmartSoftButton
          label="submit"
          classList={["is-primary", "is-small", "is-rounded"]}
        />
      </div>
    </div>
  )
}

export default CreatePromosOfferForm
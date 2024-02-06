import React, { useState } from 'react';
import { SmartSoftButton, SmartSoftForm } from 'soft_digi';
import SmartForm from 'soft_digi/dist/forms/SmartForm';


const CreateOffersForm = () => {
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
      element: { placeHolder: 'Title', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_two",
      element: { placeHolder: 'Brand', validations: numericValidations }
    },
    {
      type: "SELECT_BOX",
      width: "4",
      name: "select_three",
      element: { placeHolder: 'Sector ', options: options }
    },
    {
      type: "SELECT_BOX",
      width: "4",
      name: "select_four",
      element: { placeHolder: 'Apply', options: options }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_five",
      element: { placeHolder: 'Original Price', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_six",
      element: { placeHolder: 'Discount Percentage', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_seven",
      element: { placeHolder: 'Quentity', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_eight",
      element: { placeHolder: 'Product Available From Date', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_nine",
      element: { placeHolder: 'Detailed Description', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_ten",
      element: { placeHolder: 'Brief Description', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_eleven",
      element: { placeHolder: 'Brief Description', validations: numericValidations }
    },

  ]

  return (
    <div className='CreateOffersForm'>
      <div className='header is-size-5 has-text-link'>
        <i class="fa fa-caret-square-o-left ml-3 mr-5 " aria-hidden="true"></i>

        Amend Products

      </div>
      <hr />
      <SmartSoftForm formData={formData}
        setFormData={handleInputChange}
        elements={formElements}
        formSubmit={formSubmit}
        handleErrorChange={handleErrorChange} />


      <div className='is-justify-content-space-between is-flex'>
        <span> <SmartSoftButton
          label="submit"
          classList={["is-primary", "is-small", "is-rounded"]}
        />
        </span>
        <span>
          <SmartSoftButton
            label="View Offers"
            classList={["is-primary", "is-small", "is-rounded"]}
          />
          <SmartSoftButton
            label="Moeket Offer"
            classList={["is-primary", "is-small", "is-rounded"]}
          />
        </span>
      </div>
    </div>
  )
};

export default CreateOffersForm;

import React, { useState } from 'react'
<<<<<<< Updated upstream
import { SmartSoftButton, SmartSoftForm } from 'soft_digi';

const CreatePromosOfferForm = () => {

=======
import { SmartSoftButton, SmartSoftDate, SmartSoftForm } from "soft_digi"



const CreatePromosOfferForm = () => {


>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
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


=======
>>>>>>> Stashed changes
  const formElements = [
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_one",
<<<<<<< Updated upstream
      element: {
        placeHolder: 'Uplosd Product Images',
        validations: numericValidations
      }
=======
      element: { placeHolder: 'Upload Product Image', validations: numericValidations }
>>>>>>> Stashed changes
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_two",
<<<<<<< Updated upstream
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
=======
      element: { placeHolder: 'Base Price(AUD)', validations: numericValidations }
    },
    {
      type: "TEXT_BOX",
      width: "4", name:
        "input_three", 
        element:{ placeHolder: 'Product Availlable from', validations: numericValidations}
>>>>>>> Stashed changes
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_four",
<<<<<<< Updated upstream
      element: {
        placeHolder: 'Title',
        validations: numericValidations
      }
=======
      element: { placeHolder: 'Title', validations: numericValidations }
>>>>>>> Stashed changes
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_five",
<<<<<<< Updated upstream
      element: {
        placeHolder: 'Briel Description Required',
        validations: numericValidations
      }
=======
      element: { placeHolder: 'Brisf Description Required', validations: numericValidations }
>>>>>>> Stashed changes
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_six",
<<<<<<< Updated upstream
      element: {
        placeHolder: 'Slot',
        validations: numericValidations
      }
=======
      element: { placeHolder: 'Slot', validations: numericValidations }
>>>>>>> Stashed changes
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_seven",
<<<<<<< Updated upstream
      element: {
        placeHolder: 'Quantity',
        validations: numericValidations
      }
=======
      element: { placeHolder: 'Quantity', validations: numericValidations }
>>>>>>> Stashed changes
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_eight",
<<<<<<< Updated upstream
      element: {
        placeHolder: 'Customize Message',
        validations: numericValidations
      }
=======
      element: { placeHolder: 'Customize Message', validations: numericValidations }
>>>>>>> Stashed changes
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_nine",
<<<<<<< Updated upstream
      element: {
        placeHolder: 'Publish End Data',
        validations: numericValidations
      }
=======
      element: { placeHolder: 'Publish End Date', validations: numericValidations }
>>>>>>> Stashed changes
    },
    {
      type: "TEXT_BOX",
      width: "4",
      name: "input_ten",
<<<<<<< Updated upstream
      element: {
        placeHolder: 'Product Available To Date',
        validations: numericValidations
      }
=======
      element: { placeHolder: 'prodct Available To Date', validations: numericValidations }
>>>>>>> Stashed changes
    },
    {
      type: "SELECT_BOX",
      width: "4",
      name: "select_eleven",
<<<<<<< Updated upstream
      element: {
        placeHolder: 'Sector',
        options: options
      }
=======
      element: { placeHolder: 'Sector', options: options }
>>>>>>> Stashed changes
    },
    {
      type: "TEXT_BOX",
      width: "4",
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
    },
    {
      type: "SELECT_BOX",
      width: "4",
      name: "select_fourteen",
<<<<<<< Updated upstream
      element: {
        placeHolder: 'Apply',
        options: options
      }
=======
      element: { placeHolder: 'Apply ', options: options }
>>>>>>> Stashed changes
    },
    {
      type: "TEXT_BOX",
      width: "4",
<<<<<<< Updated upstream
      name: "input_fourteen",
      element: {
        placeHolder: 'Detailed description',
        validations: numericValidations
      }
=======
      name: "input_fifteen",
      element: { placeHolder: 'Detailed ', validations: numericValidations }
>>>>>>> Stashed changes
    },
  ]

  return (
    <div className='CreatePromosOfferForm'>
<<<<<<< Updated upstream
      <div className='header has-text-link is-size-5'>
        <i class="fa fa-caret-square-o-left ml-3 mr-5" aria-hidden="true"></i>
        Create Promo Offer
=======
      <div className='header is-size-5 has-text-link'>
        <i class="fa fa-caret-square-o-left ml-3 mr-5 " aria-hidden="true"></i>

        Create Promo Offer

>>>>>>> Stashed changes
      </div>
      <hr />
      <SmartSoftForm formData={formData}
        setFormData={handleInputChange}
        elements={formElements}
        formSubmit={formSubmit}
        handleErrorChange={handleErrorChange} />

<<<<<<< Updated upstream
      <div className='is-flex is-justify-content-center'>
        <SmartSoftButton
          label="submit"
          classList={["is-primary", "is-small", "is-rounded",]}
          onClick={() => handleFormSubmit()}
=======

      <SmartSoftDate key="text-4"
        label="Enter Employee Name"
        value={formData?.input_four || ""}
        onChange={(value) => handleInputChange("input_four", value)}
        inputType="BORDER_LABEL_FOCUS"
        leftIcon="fa-user"
        inputProps={{ isFocussed: true }}
      />

      <div className='is-justify-content-center is-flex'>
        <SmartSoftButton
          label="submit"
          classList={["is-primary", "is-small", "is-rounded"]}
>>>>>>> Stashed changes
        />
      </div>
    </div>
  )
}

export default CreatePromosOfferForm
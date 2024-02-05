import React, { useState } from 'react'
import { SmartSoftButton } from 'soft_digi'

const OfferCropsForm = () => {

  const [formData, setFormData] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState(false);

  const handleFormSubmit = () => {
    console.log("formdata" , formData);
    setFormSubmit(true);
    console.log("form errors ", formErrors);
  };


  return (
    <>
    <div className='container'>
      <div className='m-5'> 
        <h1>Offer CROPs</h1>
      </div>
     
      <hr/>
      
         <div className='is-flex is-justify-content-center'>
         <SmartSoftButton
          label="Scan"
          onClick={() => handleFormSubmit()}
          classList={['m-3']}
          // disabled={!isEmptyObject(formErrors)}
        />

         </div>
      

        

       
</div>

    </>
  )
}

export default OfferCropsForm
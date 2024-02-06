import React from 'react'

<<<<<<< Updated upstream
const CreateOffersForm = () => {
  return (
    <div>CreateOffersForm</div>
  )
}

export default CreateOffersForm
=======

const CreateOffersForm = () => {

    const formElements = [
        {
            type: "TEXT_BOX",
            width: "3",
            name: "input_one",
            element: {
                label: "Enter Name",
                validations: numericValidations
            }
        },
        {
            type: "TEXT_BOX",
            width: "3",
            name: "input_two",
            element: {
                label: "Enter ID",
                validations: numericValidations
            }
        },
        {
            type: "SELECT_BOX",
            width: "3",
            name: "select_one",
            element: {
                label: "Select Role",
                options: options
            }
        }
    ]

    return (
        <div className='container'>
            <SmartSoftForm
                elements={formElements}
            />
        </div>
    )
}

export default CreateOffersForm
>>>>>>> Stashed changes

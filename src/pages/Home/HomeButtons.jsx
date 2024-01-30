import React from 'react'
import './Home.css'; 

const HomeButtons = () => {
  return (
    <>
    <div className='main-container  is-fullhd'>
        <div className='sub-title is-size-5 has-text-weight-bold ml-6'>
        MANAGE SERVICES
        </div>
        <div className='columns ml-5'>
            <div className='column manage-service-button is-2 '>
              
            <i className="fa fa-trash is-size-3 primary-text" aria-hidden="true"></i>
            <p className='smart-button-list'>
                View Offers
            </p>
            </div>
            <div className='column manage-service-button is-2 '>
          
            <i className="fa fa-pencil-square-o is-size-3 primary-text" aria-hidden="true"></i>
            <p className='smart-button-list'>
            Create Offers
            </p>

               </div>
               <div className='column manage-service-button is-2 '>
              
               <i className="fa fa-trash is-size-3 primary-text" aria-hidden="true"></i>
            <p className='smart-button-list'>
            Market Offers
            </p>
               </div>
               <div className='column  manage-service-button is-2'>
              
               <i className="fa fa-trash is-size-3 primary-text" aria-hidden="true"></i>
            <p className='smart-button-list'>
            Service Settings
            </p>
               </div>
            
        </div>


    </div>
    </>
  )
}

export default HomeButtons
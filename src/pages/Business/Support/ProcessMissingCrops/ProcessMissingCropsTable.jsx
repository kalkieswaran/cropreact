import React from 'react'
import { SmartSoftTable } from 'soft_digi'

const ProcessMissingCropsTable = () => {

    const nameTags = [

      { value:"rejected", label:"Rejected", class:"is-danger" },
      { value:"approved", label:"Approved", class:"is-info" },
    
    ];

  const columns = [
    { title: "S.No", index: "sno", type:"sno",isSortable: true},
    { title: "Offer Title", index: "offertitle", isSortable: true },
    { title: "Invoice Date", index: "invoicedate",isSortable: true },
    { title: "Invoice Copy", index: "invoicecopy", isSortable: true },
    { title: "Reason For Claim", index: "reasonforclaim", isSortable: true },  
    { 
      title: "Status", 
      index: "status", 
      type: "tags",
      tags: nameTags,
      isSortable: true,
    },
  ];

  const data=[
  {
    sno:"1",
    offertitle:"",
    invoicedate:"04/05/2023",
    invoicecopy:"6B772157-0001",
    reasonforclaim:"Missing crop Claim",
    status:"rejected",
  },
  {
    sno:"2",
    offertitle:"",
    invoicedate:"04/05/2023",
    invoicecopy:"6B772157-0001",
    reasonforclaim:"missing",
    status:"approved",
  },
  {
    sno:"3",
    offertitle:"",
    invoicedate:"28/04/2023",
    invoicecopy:"E7E25D3D-0001",
    reasonforclaim:"purchase",
    status:"approved",
  },
  {
    sno:"4",
    offertitle:"",
    invoicedate:"28/04/2023",
    invoicecopy:"E7E25D3D-0001",
    reasonforclaim:"purchase",
    status:"approved",
  },

  ];

  return (
    <>
      <div className="is-flex">
      <p className="has-text-info has-text-weight-bold is-size-5 pb-2 ml-6">
        Process Mixing CROPs
        </p>
       
      </div>
    <div>
      <SmartSoftTable columns={columns} data={data}/>
    </div>
   
     </>
  )
}

export default ProcessMissingCropsTable
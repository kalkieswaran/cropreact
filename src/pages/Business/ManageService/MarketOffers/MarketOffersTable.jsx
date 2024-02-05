import React from 'react'
import { SmartSoftTable } from 'soft_digi'

const MarketOffersTable = () => {

  const columns=[
    {title:"S.No",isSortable:true},
    {title:"Offer Title",isSortable:true},
    {title:"Status",isSortable:true},
    {title:"Market For",isSortable:true},
    {title:"Base Price(AUD)",isSortable:true},
    {title:"Bid Price(AUD)",isSortable:true},
    {title:"Invoice",isSortable:true},
    {title:"From Date",isSortable:true},
    {title:"To Date",isSortable:true}
   
   
  ]
  return (
    <>
    <div>
    
      <SmartSoftTable columns={columns} />
    </div>
    </>
  )
}

export default MarketOffersTable
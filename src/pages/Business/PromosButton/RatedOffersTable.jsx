import React from 'react'
import { SmartSoftTable } from 'soft_digi'

const RatedOffersTable = () => {

  const columns=[
    {title:"S.No",index:"sno",isSortable:true},
    {title:"Image",index:"image",isSortable:true},
    {title:"Offer Title",index:"offertitle",isSortable:true},
    {title:"Star Rating",index:"starrating",isSortable:true},
    {title:"Likes",index:"likes",isSortable:true},
    {title:"Count",index:"count",isSortable:true},
    {title:"Action",index:"action",isSortable:true},
   
  ]

  const data=[
   
    {sno:"1",image:"",offertitle:"Mobiles and Watch with Toy", starrating:"4", likes:"4",count:"",action:"View Comments"},
   

]
  return (
    <>
    <div>
      <SmartSoftTable columns={columns} data={data}/>
    </div>
    </>
     
  )
}

export default RatedOffersTable
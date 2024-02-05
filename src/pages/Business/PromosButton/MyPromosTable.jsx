import React from 'react';
import { SmartSoftTable } from 'soft_digi';


const MyPromosTable = () => {
  const columns=[
    {title:"S.No",index:"sno",isSortable:true},
    {title:"Image",index:"image",isSortable:true},
    {title:"Offer Title",index:"offertitle",isSortable:true},
    {title:"Star Rating",index:"starrating",isSortable:true},
    {title:"Likes",index:"likes",isSortable:true},
    {title:"From Date",index:"fromdate",isSortable:true},
    {title:"To Date",index:"todate",isSortable:true},
    {title:"Status",index:"status",isSortable:true}
  ]

  const data=[
   
       {sno:"1",image:"",offertitle:"Prd1", starrating:"0", likes:"0",formdate:"",todate:"", status:"Expired"},
       {sno:"2",image:"",offertitle:"Newones", starrating:"0", likes:"0",formdate:"",todate:"", status:"pending"},
       {sno:"3",image:"",offertitle:"Product", starrating:"0", likes:"0",formdate:"",todate:"", status:"pending"},

  ]

  return (
    <>
  <div>
    <SmartSoftTable columns={columns} data={data}/>
  </div>
  </>
   
  )
}

export default MyPromosTable
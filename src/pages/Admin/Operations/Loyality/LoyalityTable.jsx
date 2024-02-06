import React from 'react'
import { SmartSoftTable } from 'soft_digi'

const LoyalityTable = () => {
  const edit_buttons = [
    {
      label: "",
      leftIcon: "fa-pencil",
      type: "icon",
      classList: ["smart-edit-icon"],
      onClick: (data) => {
        //viewEditData(data["ID"],"VIEW");
      },
    },
  ];
  const delete_buttons = [
    {
      label: "",
      leftIcon: "fa-trash",
      type: "icon",
      classList: ["smart-delete-icon"],
      onClick: (data) => {
        //viewEditData(data["ID"],"VIEW");
      },
    },
  ];

  const columns = [
    { title: "LOYALITY", index: "loyality", isSortable: true,width:"60" },
    { title: "EDIT", index: "edit", type: "buttons", buttons: edit_buttons },
    { title: "DELETE", index: "delete", type: "buttons", buttons: delete_buttons },
  ];
  const data = [];



  return (
    <>
     <div className='columns is-vcentered'>
        <div className='column is-1 crop-admin-table-back'>
            <span className="icon"><i className="fa fa-undo" aria-hidden="true"></i> </span>
        </div>
        <div className='column is-8 crop-admin-table-title'>
            Loyalty  Programs
        </div>
        <div className='column is-3 has-text-right crop-table-top-pagination'>
            <i className="fa fa-caret-left" aria-hidden="true"></i>  <i className="fa fa-caret-right" aria-hidden="true"></i>
        </div>
     </div>
     <SmartSoftTable columns={columns} data={columns} tableProps={{className:"crop-table-layout"}}/>
     </>
  )
}

export default LoyalityTable
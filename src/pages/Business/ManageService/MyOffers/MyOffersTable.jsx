import React from "react";
import { SmartSoftTable } from "soft_digi";

const MyOffersTable = () => {
  const viewbuttons = [
    {
      label: "",
      leftIcon: "fa fa-eye",
      type: "icon",
      classList: ["has-text-info"],
      onClick: (data) => {
        console.log("data", data);
      },
    },
  ];
  const martketbutton = [
    {
      label: "",
      leftIcon: "fa fa-archive",
      type: "icon",
      classList: ["has-text-primary"],
      onClick: (data) => {
        console.log("data", data);
      },
    },
  ];

  const editbutton = [
    {
      label: "",
      leftIcon: "fa fa-pencil-square-o",
      type: "icon",
      classList: ["smart-edit-icon"],
      onClick: (data) => {
        console.log("data", data);
      },
    },
  ];

  const deletebutton = [
    {
      label: "",
      leftIcon: "fa fa-trash",
      type: "icon",
      classList: ["has-text-danger"],
      onClick: (data) => {
        console.log("data", data);
      },
    },
  ];

  const columns = [
    { title: "S.No", index: "sno", isSortable: true, type: "sno"},
    { title: "Image", index: "img", isSortable: true },
    { title: "Offer Title", index: "offertitle", isSortable: true },
    { title: "Qty", index: "qty", isSortable: true },
    { title: "Price(AUD)", index: "price", isSortable: true },
    { title: "Discount %", index: "discount", isSortable: true },
    { title: "Sale Price(AUD)", index: "saleprice", isSortable: true },
    { title: "CROPs", index: "crop", isSortable: true },
    {
      title: "View",
      index: "view",
      type: "buttons",
      buttons: viewbuttons,
    },
    {
      title: "Market",
      index: "martket",
      type: "buttons",
      buttons: martketbutton,
    },
    {
      title: "Amend",
      index: "amend",
      type: "buttons",
      buttons: editbutton,
    },
    {
      title: "Remove",
      index: "remove",
      type: "buttons",
      buttons: deletebutton,
    },
  ];

  const data = [
    {
      sno: "1",
      img: <i class="fa fa-folder" aria-hidden="true"></i>,
      offertitle: "Newones",
      qty: 5,
      price: "",
      discount: 0,
      saleprice: 0,
      crop: 0,
    },
    {
      sno: "2",
      img: <i class="fa fa-folder" aria-hidden="true"></i>,
      offertitle: "Pral",
      qty: 10,
      price: 100,
      discount: 2,
      saleprice: 98,
      crop: 98,
    },
    {
      sno: "3",
      img: <i class="fa fa-folder" aria-hidden="true"></i>,
      offertitle: "Toys",
      qty: 100,
      price: 100,
      discount: 10,
      saleprice: 90,
      crop: 90,
    },
    {
      sno: "4",
      img: <i class="fa fa-folder" aria-hidden="true"></i>,
      offertitle: "Mobile",
      qty: 300,
      price: 399,
      discount: 10,
      saleprice: 389,
      crop: 389,
    },
    {
      sno: "5",
      img: <i class="fa fa-folder" aria-hidden="true"></i>,
      offertitle: "Mobiles and watch With Toys",
      qty: 98,
      price: 350,
      discount: 12,
      saleprice: 388,
      crop: 388,
    },
  ];
  return (
    <>
      <div>
        <p className="has-text-info has-text-weight-bold is-size-5 pb-5 pl-3 pt-2">
          My Offers
        </p>
      </div>
      <SmartSoftTable data={data} columns={columns} tableProps={{className:"crop-bussiness-table-layout"}} />
    </>
  );
};

export default MyOffersTable;

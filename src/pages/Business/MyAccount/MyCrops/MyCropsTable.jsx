import React from "react";
import { SmartSoftInput } from "soft_digi";
import { SmartSoftTable } from "soft_digi";

const MyCropsTable = () => {
  const viewButton = [
    {
      label: "",
      type: "icon",
      leftIcon: "fa fa-eye",
      classList: ["has-text-info"],
      onclick: (data) => {
        console.log("data", data);
      },
    },
  ];

  const downloadButton = [
    {
      label: "Download",
      type: "",
      leftIcon: "",
      classList: ["button is-info is-rounded"],
      onclick: (data) => {
        console.log("data", data);
      },
    },
  ];

  const columns = [
    { title: "S.No", index: "sno", isSortable: true, type: "sno" },
    {
      title: "Date",
      index: "date",
      isSortable: true,
      type: "date",
      dateFormat: "DD-MM-YYYY",
    },
    { title: "Offer No", index: "offerno", isSortable: true },
    { title: "Customer Name", index: "customername", isSortable: true },
    { title: "Credit", index: "credit", isSortable: true },
    { title: "Debit", index: "debit", isSortable: true },
    { title: "Amount(AUD)", index: "amount", isSortable: true },
    {
      title: "View",
      index: "view",
      isSortable: true,
      type: "buttons",
      buttons: viewButton,
    },
    {
      title: "Download",
      index: "download",
      isSortable: true,
      type: "buttons",
      buttons: downloadButton,
    },
  ];

  const data = [
    {
      sno: 1,
      date: "2022-09-25",
      offerno: "ICM82382346",
      customername: "Balaji",
      credit: 1000,
      debit: -500,
      amount: 2000,
    },
  ];

  return (
    <>
      <div>
        <p className="has-text-info has-text-weight-bold is-size-5 pb-5 pl-3 pt-2">
          My CROPs Activity
        </p>
      </div>
      <div className=" is-flex is-justify-content-space-around">
        <SmartSoftInput type="date" />
        <SmartSoftInput type="date" />
        <button className="button is-info is-outlined has-text-weight-medium is-rounded">
          Sumbit
        </button>
        <SmartSoftInput
          type="text"
          rightIcon="fa fa-user"
          placeHolder="Search Order No"
        />
      </div>
      <div>
        <SmartSoftTable data={data} columns={columns} />
      </div>
    </>
  );
};

export default MyCropsTable;

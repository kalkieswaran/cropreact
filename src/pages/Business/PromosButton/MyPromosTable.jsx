import React from "react";
import { SmartSoftTable } from "soft_digi";
import { FOLDER_ICON } from "../../../services/ImageService";

const MyPromosTable = () => {
  const nameImage = () => {
    return (
      <>
        <div className="image">
          <img src={FOLDER_ICON} alt="icon" />
        </div>
      </>
    );
  };

  const nameTags = [
    { value: "pending", label: "Pending", class: "is-warning" },
    { value: "expired", label: "Expired", class: "is-danger" },
  ];

  const columns = [
    { title: "S.No", index: "sno", isSortable: true , type: "sno" },
    { title: "Image", index: "image", isSortable: true, image: nameImage},
    { title: "Offer Title", index: "offertitle", isSortable: true },
    { title: "Star Rating", index: "starrating", isSortable: true },
    { title: "Likes", index: "likes", isSortable: true },
    {
      title: "From Date",
      index: "fromdate",
      type: "date",
      dateFormat: "DD-MM-YYYY",
      isSortable: true,
    },
    {
      title: "To Date",
      index: "todate",
      isSortable: true,
      type: "date",
      dateFormat: "DD-MM-YYYY",
    },
    {
      title: "Status",
      index: "status",
      type: "tags",
      tags: nameTags,
      isSortable: true,
    },
  ];

  const data = [
    {
      sno: "1",
      image: "",
      offertitle: "Prd1",
      starrating: "0",
      likes: "0",
      fromdate: "2022-10-17",
      todate: "2022-10-18",
      status: "expired",
    },
    {
      sno: "2",
      image: "",
      offertitle: "Newones",
      starrating: "0",
      likes: "0",
      fromdate: "2022-10-18",
      todate: "2022-11-19",
      status: "pending",
    },
    {
      sno: "3",
      image: "",
      offertitle: "Product",
      starrating: "0",
      likes: "0",
      fromdate: "2022-11-19",
      todate: "2022-12-20",
      status: "pending",
    },
  ];

  return (
    <>
      <div className="is-flex is-justify-content-space-between">
        <p className="has-text-info has-text-weight-bold is-size-5 pb-5 pl-3 pt-2">
          My Promos
        </p>
        <button className="button is-info is-outlined has-text-weight-medium is-rounded">
          Create New Promos
        </button>
      </div>
      <div>
        <SmartSoftTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default MyPromosTable;

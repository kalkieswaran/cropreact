import React from "react";
import { SmartSoftTable } from "soft_digi";

const RatedOffersTable = () => {
  const buttons = [
    {
      label: "View Comments",
      leftIcon: "",
      type: "",
      classList: ["button is-info is-inverted"],
      onclick: (data) => {
        console.log("date", data);
      },
    },
  ];

  const columns = [
    { title: "S.No", index: "sno", isSortable: true, type: "sno"},
    { title: "Image", index: "image", isSortable: true },
    { title: "Offer Title", index: "offertitle", isSortable: true },
    { title: "Star Rating", index: "starrating", isSortable: true },
    { title: "Likes", index: "likes", isSortable: true },
    { title: "Count", index: "count", isSortable: true },
    {
      title: "Action",
      index: "action",
      type: "buttons",
      buttons: buttons,
      isSortable: true,
    },
  ];

  const data = [
    {
      sno: "1",
      image: "",
      offertitle: "Mobiles and Watch with Toy",
      starrating: "4",
      likes: "4",
      count: "",
      action: "View Comments",
    },
  ];
  return (
    <>
      <div>
        <p className="has-text-info has-text-weight-bold is-size-5 pb-5 pl-3 pt-2">
          Rated Offers
        </p>
      </div>
      <div>
        <SmartSoftTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default RatedOffersTable;

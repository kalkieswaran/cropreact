import React from "react";
import { SmartSoftTable } from "soft_digi";

const MarketOffersTable = () => {
  const nameTags = [
    { value: "pending", Label: "Pending", class: "is-warning" },
    { value: "process", Label: "Process", class: "is-info" },
    { value: "completed", Label: "Completed", class: "is-success" },
  ];

  const columns = [
    { title: "S.No", index: "sno", isSortable: true },
    { title: "Offer Title", index: "offertitle", isSortable: true },
    {
      title: "Status",
      index: "status",
      isSortable: true,
      type: "tags",
      tags: nameTags,
    },
    { title: "Market For", index: "marketfor", isSortable: true },
    { title: "Base Price(AUD)", index: "baseprice", isSortable: true },
    { title: "Bid Price(AUD)", index: "bidprice", isSortable: true },
    { title: "Invoice", index: "invoice", isSortable: true },
    {
      title: "From Date",
      index: "fromdate",
      isSortable: true,
      type: "date",
      dateFormat: "DD-MM-YYYY",
    },
    {
      title: "To Date",
      index: "todate",
      isSortable: true,
      type: "date",
      dateFormat: "DD-MM-YYYY",
    },
  ];

  const data = [
    {
      sno: "1",
      offertitle: "Mobiles",
      status: "process",
      marketfor: "",
      baseprice: 200,
      bidprice: 100,
      invoice: 10,
      fromdate: "2022-09-17",
      todate: "2022-10-29",
    },
  ];
  return (
    <>
      <div>
        <p className="has-text-info has-text-weight-bold is-size-5 pb-5 pl-3 pt-2">
          Market Offer
        </p>
      </div>
      <div>
        <SmartSoftTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default MarketOffersTable;

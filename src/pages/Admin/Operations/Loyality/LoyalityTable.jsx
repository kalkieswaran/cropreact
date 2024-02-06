import React, { useEffect, useState } from "react";
import { SmartSoftButton, SmartSoftTable } from "soft_digi";
import { useSiteContext } from "../../../../contexts/SiteProvider";
import LoyalityForm from "./LoyalityForm";

const LoyalityTable = () => {
  const [tabData, setTabData] = useState([]);
  const {setLoading, openModal, closeModal } = useSiteContext();
  // this is api to the table data
  const loadTableData = () => {
   // setLoading(true, "Logging in Please Wait....");
    /*
    const handleError = (errorMessage) => {
      showNotification("error", errorMessage);
      setTabData([]);
      setLoading(false);
    };
    const subscription = get(USER_API_URLS.get_all, handleError).subscribe(
      (response) => {
        setTabData(response.data);
        console.table("testing", response.data);
        setLoading(false);
      }
    );
    return () => {
      subscription.unsubscribe();
    };*/
  };

  useEffect(() => {
    loadTableData();
  }, []);
  
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
    { title: "", index: "testnew", width: "20" },
    { title: "LOYALITY", index: "loyality", isSortable: true, width: "40" },
    { title: "EDIT", index: "edit", type: "buttons", buttons: edit_buttons },
    {
      title: "DELETE",
      index: "delete",
      type: "buttons",
      buttons: delete_buttons,
    },
  ];
  const data = [];

  const openNewForm = () => {
    let modalObject = {     
      body: <LoyalityForm loadTableData={loadTableData} />,   
      modalClass: "crop-admin-modal",        
    };
    openModal(modalObject);
  };

  return (
    <>
      <div className="columns is-vcentered">
        <div className="column is-1 crop-admin-table-back">
          <span className="icon">
            <i className="fa fa-undo" aria-hidden="true"></i>{" "}
          </span>
        </div>
        <div className="column is-8 crop-admin-table-title">
          Loyalty Programs
        </div>
        <div className="column is-3 has-text-right crop-table-top-pagination">
          <i className="fa fa-caret-left" aria-hidden="true"></i>{" "}
          <i className="fa fa-caret-right" aria-hidden="true"></i>
        </div>
      </div>
      <div className="columns">
        <div className="column is-offset-1 is-8">
          <SmartSoftButton
            label="ADD A LOYALITY"
            classList={["is-rounded is-small crop-admin-secondary-button"]}
            onClick={openNewForm}
          />
        </div>
      </div>
      <SmartSoftTable
        columns={columns}
        data={columns}
        tableProps={{ className: "crop-table-layout" }}
      />
    </>
  );
};

export default LoyalityTable;

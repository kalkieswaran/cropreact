import React, { useState, useEffect } from "react";
import {
  SmartSoftButton,
  SmartSoftCheckRadioSwitch,
  SmartSoftInput,
  SmartSoftSelect,
} from "soft_digi";
import { useSiteContext } from "../../../../contexts/SiteProvider";
import { post } from "../../../../services/smartApiService";
import { CROP_ADMIN_LOYALITY } from "../../../../services/ImageService";

const LoyalityForm = ({ loadTableData, dataIn }) => {
  const [formData, setFormData] = useState(dataIn ? dataIn : {});
  const [formSubmit, setFormSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState(false);
  const { setLoading, closeModal } = useSiteContext();
  const [roles, setRoles] = useState([]);
  //const [type, setType] = useState("password");

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    /*
      setFormSubmit(true);
      const handleError = (errorMessage) => {
        showNotification("error", errorMessage);
        setLoading(false);
      };
      setLoading(true, "Details Submitting Please Wait....");
      let url = USER_API_URLS.insert;
      if(formData.ID!==undefined){
        formData["id"] = formData.ID;
        url = USER_API_URLS.update;
      }
  
      const subscription = post(
        url,
        formData,
        handleError
      ).subscribe((response) => {
        //console.log("response form ", response.data);
        loadTableData();
        showNotification("success","Data Saved Successfully");
        closeModal();
        // setUser(response.data);
        setLoading(false);
      });
      return () => {
        subscription.unsubscribe();
      };*/
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="columns">
        <div className=" column is-10 card crop-admin-modal-content">
          <div className="columns is-multiline">
            <div className="column is-12 has-text-centered" key="1">
              <p className="crop-admin-form-title"> Add Loyality</p>
            </div>
            <div className="column is-12" key="2">
              <SmartSoftInput
                label="Loyality Name"
                value={formData?.loyalityName || ""}
                inputType="BORDER_LABEL"
                onChange={(value) => handleInputChange("loyalityName", value)}
                errorEnable={formSubmit}
              />
            </div>
            <div className="column is-12 has-text-centered">
              <SmartSoftButton
                key="save"
                label="UPDATE"
                // leftIcon="fa-save"
                classList={["is-rounded crop-admin-action-button"]}
                onClick={handleSubmit}
              />
            </div>
            <div className="column is-12 has-text-centered">
              <img src={CROP_ADMIN_LOYALITY} />
            </div>
          </div>
        </div>
        <div className="column is-2">
          <div className="crop-admin-modal-close" onClick={closeModal}><i class="fa fa-times" aria-hidden="true"></i></div> 
        </div>
      </div>
    </>
  );
};

export default LoyalityForm;

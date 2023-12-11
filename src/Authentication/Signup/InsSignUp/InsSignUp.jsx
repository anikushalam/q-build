import React, { useState } from "react";
import MobileNumber from "../MobileNumber";
import SignUpVerify from "../SignUpVerify";
import RegisterIns from "./Components/RegisterIns";
import CreatePassword from "../CreatePassword";
import InstituteType from "./Components/InstituteType";
import InstituteMode from "./Components/InstituteMode";
import { useInstituteSignup } from "./Components/use-institute-signup";

function InsSignUp({ switchUser }) {
  const [activeTab, setActiveTab] = useState("MOBILE");
  const [instituteId, setInstituteId] = useState("");
  const [instituteData, setInstituteData] = useState({
    phoneNumber: "",
    mobileStatus: "",
    type: "",
    mode: "",
  });
  const { mobileRegister, numberVerification, createPassword } =
    useInstituteSignup();

  const onChangeData = (val) => {
    setInstituteData((pre) => ({
      ...pre,
      [val.type]: val.value,
    }));
  };

  console.info(activeTab);
  return (
    <>
      {activeTab === "MOBILE" && (
        <MobileNumber
          onMobileNumberAdd={mobileRegister}
          setActiveTab={setActiveTab}
          setPhoneNumber={onChangeData}
          switchUser={switchUser}
        />
      )}
      {activeTab === "VERIFIED_MOBILE" && (
        <SignUpVerify
          phoneNumber={instituteData.phoneNumber}
          onMobileVerified={numberVerification}
          setActiveTab={setActiveTab}
          onMobileNumberAdd={mobileRegister}
          onMobileStatus={onChangeData}
          activeType="INSTITUTE_TYPE"
        />
      )}

      {activeTab === "INSTITUTE_TYPE" && (
        <InstituteType
          type={instituteData.type}
          setActiveTab={setActiveTab}
          setInstituteData={setInstituteData}
        />
      )}

      {activeTab === "INSTITUTE_MODE" && (
        <InstituteMode
          mode={instituteData.mode}
          setActiveTab={setActiveTab}
          setInstituteData={setInstituteData}
        />
      )}

      {activeTab === "INSTITUTE_REGISTER" && (
        <RegisterIns
          instituteData={instituteData}
          setInstituteId={setInstituteId}
          setActiveTab={setActiveTab}
        />
      )}

      {activeTab === "CREATE_PASSWORD" && (
        <CreatePassword id={instituteId} createPassword={createPassword} />
      )}
    </>
  );
}

export default InsSignUp;

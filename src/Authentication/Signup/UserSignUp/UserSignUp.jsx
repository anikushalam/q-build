import React, { useState } from "react";
import RegisterUser from "./components/RegisterUser";
import { useUserSignup } from "./components/use-user-signup";
import MobileNumber from "../MobileNumber";
import CreatePassword from "../CreatePassword";
import SignUpVerify from "../SignUpVerify";

function UserSignUp() {
  const [userId, setUserId] = useState("");
  const [activeTab, setActiveTab] = useState("MOBILE");
  const [userData, setUserData] = useState({
    phoneNumber: "",
    mobileStatus: "",
  });

  const { mobileRegister, numberVerification, createPassword } =
    useUserSignup();

  const onChangeData = (val) => {
    setUserData((pre) => ({
      ...pre,
      [val.type]: val.value,
    }));
  };

  return (
    <>
      {activeTab === "MOBILE" && (
        <MobileNumber
          onMobileNumberAdd={mobileRegister}
          setActiveTab={setActiveTab}
          setPhoneNumber={onChangeData}
        />
      )}
      {activeTab === "VERIFIED_MOBILE" && (
        <SignUpVerify
          phoneNumber={userData.phoneNumber}
          onMobileVerified={numberVerification}
          setActiveTab={setActiveTab}
          onMobileNumberAdd={mobileRegister}
          onMobileStatus={onChangeData}
          activeType="USER_REGISTER"
        />
      )}

      {activeTab === "USER_REGISTER" && (
        <RegisterUser
          userData={userData}
          setActiveTab={setActiveTab}
          setUserId={setUserId}
        />
      )}

      {activeTab === "CREATE_PASSWORD" && (
        <CreatePassword id={userId} createPassword={createPassword} />
      )}
    </>
  );
}

export default UserSignUp;

import React from "react";
import style from "./AuthModal.module.css";
import { useDispatch } from "react-redux";
import { authChangeAction } from "../../../redux/store/authenticate-slice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import VerifyOtp from "../VerifyOtp/VerifyOtp";
import ExistingAccounts from "../ExistingAccounts/ExistingAccounts";
import DesignationOption from "../DesignationOption/DesignationOption";
import SignUpForm from "../SignUpForm/SignUpForm";
import CreatePassword from "../CreatePassword/CreatePassword";
import DesignationCode from "../DesignationCode/DesignationCode";
import AuthCard from "../AuthCard/AuthCard";
import { useUserSignup } from "../../Signup/UserSignUp/components/use-user-signup";
import CustomSuspense from "../../../Custom/SuspenseLoading/CustomSuspense";
const VerifyForgetOtp = React.lazy(() =>
  import("../../../Authentication/Auth_New_Flow/ForgetPassword/VerifyForgetOtp")
);
const ChangePassword = React.lazy(() =>
  import("../../../Authentication/Auth_New_Flow/ForgetPassword/ChangePassword")
);

function AuthModal({ ins, switchUser, external }) {
  const [index, setIndex] = useState(1);
  const [status, setStatus] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  //for user related thinsg
  const [userData, setUserData] = useState({
    phoneNumber: "",
    mobileStatus: "",
  });
  const [existingAccount, setExistingAccount] = useState("");
  const { mobileRegister, numberVerification } = useUserSignup();

  const onChangeData = (val) => {
    setUserData((pre) => ({
      ...pre,
      [val.type]: val.value,
    }));
  };
  const handleSignup = () => {
    if (ins) {
      dispatch(authChangeAction.signupChange({ status: false }));
      navigate("/signup");
    } else {
      dispatch(authChangeAction.signupChange({ status: true }));
      navigate("/signup");
    }
  };

  return (
    <>
      {external && (
        <div className={style.modalContainerr}>
          {status === "" && (
            <AuthCard
              index={index}
              setIndex={setIndex}
              setStatus={setStatus}
              status={status}
              ins={ins}
              switchUser={switchUser}
              handleSignup={handleSignup}
              onMobileNumberAdd={mobileRegister}
              setPhoneNumber={onChangeData}
            />
          )}
          <CustomSuspense>
            {status === "FORGET_PASSWORD" && (
              <ForgetPassword
                setStatus={setStatus}
                setIndex={setIndex}
                setUserId={setUserId}
              />
            )}
            {status === "FORGET_VERIFIED_MOBILE" && (
              <VerifyForgetOtp
                setStatus={setStatus}
                setUserId={setUserId}
                userId={userId}
              />
            )}

            {status === "VERIFIED_MOBILE" && (
              <VerifyOtp
                setStatus={setStatus}
                phoneNumber={userData.phoneNumber}
                onMobileVerified={numberVerification}
                onMobileNumberAdd={mobileRegister}
                onMobileStatus={onChangeData}
                activeType="EXISTING_ACCOUNT"
                setExistingAccount={setExistingAccount}
              />
            )}

            {status === "CHANGE_PASSWORD" && (
              <ChangePassword
                userId={userId}
                setIndex={setIndex}
                setStatus={setStatus}
              />
            )}
            {status === "EXISTING_ACCOUNT" && (
              <ExistingAccounts
                setStatus={setStatus}
                existingAccount={existingAccount}
              />
            )}
            {status?.type === "LANDING_EXITING_ACCOUNT" && (
              <ExistingAccounts
                isLandingAccount={status}
                setStatus={setStatus}
                existingAccount={existingAccount}
              />
            )}

            {status === "DESIGNATION_OPTION" && (
              <DesignationOption setStatus={setStatus} />
            )}

            {status === "USER_REGISTER" && (
              <SignUpForm
                setStatus={setStatus}
                userData={userData}
                setUserId={setUserId}
              />
            )}
            {status === "CREATE_PASSWORD" && <CreatePassword id={userId} />}
            {status === "STAFF_DESIGNATION" && (
              <DesignationCode
                status="staff"
                mobileNumber={userData.phoneNumber}
              />
            )}
            {status === "STUDENT_DESIGNATION" && (
              <DesignationCode
                status="student"
                mobileNumber={userData.phoneNumber}
              />
            )}
          </CustomSuspense>
        </div>
      )}
    </>
  );
}

export default AuthModal;

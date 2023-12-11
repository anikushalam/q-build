import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../Auth.module.css";
import LoginFormWithUserName from "./LoginFormWithUserName";
import LoginFormWithMobile from "./LoginFormWithMobile";

const userMobile = "USER_MOBILE";
const userName = "USER_NAME";
const instituteUserName = "INSTITUTE_USER_NAME";
const userLogin = [userMobile, userName];

const Login = () => {
  const { t } = useTranslation();
  const [state, setState] = useState("USER_MOBILE");

  const onUser = () => {
    setState(userMobile);
  };
  const onUserName = () => {
    setState(userName);
  };
  const onInstitute = () => {
    setState(instituteUserName);
  };

  return (
    <>
      <div className={style.auth_login_tab_container}>
        <div
          className={
            userLogin?.includes(state)
              ? style.auth_login_tab_active
              : style.auth_login_tab
          }
          onClick={onUser}
        >
          {t("user_staff_student")}
        </div>
        <div
          className={
            state === instituteUserName
              ? style.auth_login_tab_active
              : style.auth_login_tab
          }
          onClick={onInstitute}
        >
          {t("institute")}
        </div>
      </div>
      {state === userMobile ? (
        <LoginFormWithMobile onUserName={onUserName} />
      ) : state === userName ? (
        <LoginFormWithUserName isUser onUserMobile={onUser} />
      ) : (
        <LoginFormWithUserName />
      )}
    </>
  );
};

export default Login;

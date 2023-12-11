import React from "react";
import style from "./SigninHeader.module.css";
import i18next from "i18next";

function SigninHeader({ status }) {
  const languages = [
    { code: "en", name: "English" },
    { code: "hn", name: "हिंदी" },
    { code: "mt", name: "मराठी" },
  ];
  return (
    <>
      {status === "login" ? (
        <div className={style.signinHeaderr}>
          <div className={style.inner}>
            <p
              onClick={() => {
                i18next.changeLanguage(languages[0].code);
              }}
            >
              {languages[0].name}
            </p>
            <p
              onClick={() => {
                i18next.changeLanguage(languages[1].code);
              }}
            >
              {languages[1].name}
            </p>
            <p
              onClick={() => {
                i18next.changeLanguage(languages[2].code);
              }}
            >
              {languages[2].name}
            </p>
          </div>
        </div>
      ) : (
        <div className={style.signinHeader}>
          <div></div>
          <div></div>
          <div className={style.inner}>
            <p
              onClick={() => {
                i18next.changeLanguage(languages[0].code);
              }}
            >
              {languages[0].name}
            </p>
            <p
              onClick={() => {
                i18next.changeLanguage(languages[1].code);
              }}
            >
              {languages[1].name}
            </p>
            <p
              onClick={() => {
                i18next.changeLanguage(languages[2].code);
              }}
            >
              {languages[2].name}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default SigninHeader;

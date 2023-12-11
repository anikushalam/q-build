import React, { useRef, useState } from "react";
import style from "./InsSignUp/Components/component.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./InsSignUp/Components/Component.css";
import SigninHeader from "../Login/Components/SigninHeader";
import ButtonWithTypeSubmit from "../../Custom/Button/ButtonWithTypeSubmit";
import { Notfication } from "../../validation/Snackbar";

function MobileNumber({
  onMobileNumberAdd,
  setActiveTab,
  setPhoneNumber,
  switchUser,
}) {
  const { t } = useTranslation();
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const phoneRef = useRef("");
  const [disabled, setDisabled] = useState(false);
  const PhoneRegisterHandler = async (e) => {
    e.preventDefault();
    setDisabled((pre) => !pre);
    // if (phoneRef.current?.value?.length === 10) {
    if (phoneRef.current?.value) {
      const data = await onMobileNumberAdd({
        insPhoneNumber: `${phoneRef.current?.value}`,
        status: "Not Verified",
      });
      if (data?.phoneNumber) {
        setPhoneNumber({ type: "phoneNumber", value: data?.phoneNumber });
        setActiveTab("VERIFIED_MOBILE");
        setDisabled((pre) => !pre);
      } else {
        setNotificationState({
          msg: "Some thing went wrong",
          run: true,
        });
        setDisabled((pre) => !pre);
      }
    } else {
      setNotificationState({
        msg: "Please enter 10 digit mobile number",
        run: true,
      });
      setDisabled((pre) => !pre);
    }
  };

  return (
    <div className={style.modalContainerr}>
      <form onSubmit={PhoneRegisterHandler}>
        <div className={`${style.form} ${style.forggotPassForm}`}>
          <div className={`${style.inputlabelcontainer}`}>
            <h3>{t("signup")}</h3>

            <div className={`${style.inputlabelcontainer}`}>
              <p>{t("signup_details")}</p>
              <div className={style.otpcontainer}>
                <div
                  style={{ marginTop: "12px" }}
                  className={style.userNamecontainer}
                >
                  <input
                    type="tel"
                    name="insPhoneNumber"
                    // maxLength={"10"}
                    ref={phoneRef}
                    placeholder={t("mobile_bumber")}
                    required
                  />
                  <img
                    alt="not found"
                    className={style.username}
                    src="/images/phone-input-icon.svg"
                  />
                </div>

                <div className={style.forgotPass}>
                  <Link
                    to={"/login?external"}
                    style={{ textDecoration: "none" }}
                  >
                    <p onClick={() => switchUser(true)}>{t("back_to_login")}</p>
                  </Link>
                </div>
              </div>

              <div className={style.toc}>
                <p>
                  {t("by_continue")}
                  <span className={style.tocspan}>
                    {" "}
                    <a href="/q/terms/condition">
                      {" "}
                      {t("Tirms_conditions")}
                    </a>{" "}
                    {t("and")}{" "}
                    <a href="/q/privacy/policy">{t("privacy_policy")}</a>
                  </span>
                </p>
              </div>
            </div>

            <ButtonWithTypeSubmit
              buttonText={t("send_otp")}
              customStyleButton={{
                minHeight: "2.3rem",
                backgroundColor: "#575caa",
              }}
              type="submit"
              disabled={disabled}
            />
          </div>
        </div>
      </form>

      <div className={style.footer}>
        <p>
          {t("already_register")}{" "}
          <Link to={"/login?external"} style={{ textDecoration: "none" }}>
            <span className={style.signupbtn} onClick={() => switchUser(true)}>
              {t("login")}
            </span>
          </Link>
        </p>
      </div>
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />
    </div>
  );
}

export default MobileNumber;

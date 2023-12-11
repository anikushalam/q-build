import style from "./Container.module.css";
import "./Container.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonWithAction from "../../../Custom/Button/ButtonWithAction";
import { useVerifyForgetUserName } from "../../../hooks/authentication-api";

const ForgetPassword = ({ setActive, setUserId }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(false);

  const [forgetUsername] = useVerifyForgetUserName();
  const VerifyHandler = () => {
    setDisabled((pre) => !pre);
    forgetUsername({ username }).then((res) => {
      if (res.data.institute) {
        setUserId(res.data.institute._id);
        setActive("OTP");
      } else if (res.data.user) {
        setUserId(res.data.user._id);
        setActive("OTP");
      }
      setDisabled((pre) => !pre);
    });
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div className={style.modalContainerr}>
      <div className={`${style.form} ${style.forggotPassForm}`}>
        <h3>{t("verification_code")}</h3>

        <div className={`${style.inputlabelcontainer}`}>
          <p>{t("forgotpass_detail")}</p>
          <div
            className={`${style.userNamecontainer}`}
            style={{ marginTop: "12px" }}
          >
            <input
              type="text"
              name="username"
              value={username}
              onChange={onChangeUsername}
              className="forgotpassinput"
              placeholder={t("username")}
            />
            <img
              alt="not found"
              className={style.username}
              src="/images/username-icon.svg"
            />
          </div>

          <div className={style.forgotPass}>
            <p onClick={() => ""}>
              {t("if_not_rec")}
              &nbsp;
              {t("Resend")}
            </p>
          </div>
        </div>

        {username !== "" ? (
          <ButtonWithAction
            buttonText={t("send_otp")}
            customStyleButton={{
              minHeight: "2.3rem",
              backgroundColor: "#575caa",
            }}
            disabled={disabled}
            shwoLoader={true}
            onAction={VerifyHandler}
          />
        ) : (
          <ButtonWithAction
            buttonText={t("verify")}
            customStyleButton={{
              minHeight: "2.3rem",
              backgroundColor: "#575caa",
              marginTop: "2.5rem",
            }}
            disabled={true}
            shwoLoader={false}
            onAction={VerifyHandler}
          />
        )}
      </div>

      <div></div>
    </div>
  );
};

export default ForgetPassword;

import React from "react";
import style from "../../../Home/components/Header/NewHeader/HeaderIns.module.css";
import { TextInput } from "../InputWithIcon/InputWithIcon";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useVerifyForgetUserName } from "../../../hooks/authentication-api";
import ButtonWithTypeSubmit from "../../../Custom/Button/ButtonWithTypeSubmit";

function ForgetPassword({ setStatus, setIndex, setUserId }) {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(false);

  const [forgetUsername] = useVerifyForgetUserName();
  const VerifyHandler = (e) => {
    e.preventDefault();
    setDisabled((pre) => !pre);
    forgetUsername({ username }).then((res) => {
      // if (res.data.institute) {
      //   setUserId(res.data.institute._id);
      //   setActive("OTP");
      // } else
      if (res.data.user) {
        setUserId(res.data.user._id);
        setStatus("FORGET_VERIFIED_MOBILE");
      }
      setDisabled((pre) => !pre);
    });
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  return (
    <form onSubmit={VerifyHandler}>
      <div className={style.card}>
        <h6 className={style.cardhdark}>{t("enter_username")}</h6>

        <p className={`${style.pusername} ${style.ptoc}`}>
          {t("find_ur_username")}
        </p>

        <div className={style.input_margin_top}>
          <TextInput
            icon="/images/username-icon.svg"
            placeholder={t("username")}
            name="username"
            onChange={onChangeUsername}
            value={username}
            required={true}
          />
        </div>

        <div
          className={`${style.forgot_pass_container} ${style.forgot_pass_container_margin_top}`}
        >
          <p
            className={style.forgot_pass}
            onClick={() => {
              setStatus("");
              setIndex(1);
            }}
          >
            {t("forgot_username")}
          </p>
        </div>

        <p className={`${style.forgotpusername} ${style.ptoc}`}>
          {t("incase_forgot_username")}
        </p>

        <div className={style.btn_container}>
          <ButtonWithTypeSubmit
            disabled={disabled}
            buttonText={t("find_account")}
            customStyleButton={{
              minHeight: "2.3rem",
              marginTop: "4rem",
              marginBottom: "1rem",
            }}
            customStyleButtonText={{
              fontSize: "1rem",
            }}
          />
        </div>
      </div>
    </form>
  );
}

export default ForgetPassword;

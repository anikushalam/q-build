import React from "react";
import style from "../../../Home/components/Header/NewHeader/HeaderIns.module.css";
import { PasswordInput } from "../InputWithIcon/InputWithIcon";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForgetNewPassword } from "../../../hooks/authentication-api";
import ButtonWithTypeSubmit from "../../../Custom/Button/ButtonWithTypeSubmit";
import { Notfication } from "../../../validation/Snackbar";

function ChangePassword({ userId, setIndex, setStatus }) {
  const { t } = useTranslation();
  const [password, setPassword] = useState({
    userPassword: "",
    userRePassword: "",
  });
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [disabled, setDisabled] = useState(false);
  const [forgetNewPassword] = useForgetNewPassword();

  const NewPasswordHandler = (e) => {
    e.preventDefault();
    setDisabled((pre) => !pre);
    if (password.userPassword && password.userRePassword) {
      if (password.userPassword === password.userRePassword) {
        forgetNewPassword({
          rid: userId,
          password: password,
        })
          .then(() => {
            setStatus("");
            setIndex(2);
          })
          .catch({});
      } else {
        setNotificationState({
          msg: t("please_match"),
          run: true,
        });
        setDisabled((pre) => !pre);
      }
    } else {
      setNotificationState({
        msg: t("please_enter"),
        run: true,
      });
      setDisabled((pre) => !pre);
    }
  };
  return (
    <form onSubmit={NewPasswordHandler}>
      <div className={style.card}>
        <h6 className={style.cardhdark}>{t("changr_pass")}</h6>
        <p className={`${style.pusername} ${style.ptoc}`}>{t("pass_length")}</p>
        <div className={style.change_pass_input}>
          <PasswordInput
            icon="/images/password-icon.svg"
            placeholder={t("create_pass")}
            name="userPassword"
            value={password.userPassword}
            onChange={(e) =>
              setPassword({
                ...password,
                userPassword: e.target.value,
              })
            }
          />
        </div>

        <div className={style.re_pass_input}>
          <PasswordInput
            icon="/images/password-icon.svg"
            placeholder={t("re_enter_pass")}
            name="userRePassword"
            value={password.userRePassword}
            onChange={(e) =>
              setPassword({
                ...password,
                userRePassword: e.target.value,
              })
            }
          />
        </div>

        <div className={style.re_enter_btn_container}>
          <ButtonWithTypeSubmit
            disabled={disabled}
            buttonText={t("submit")}
            customStyleButton={{
              minHeight: "2.3rem",
              marginTop: "4rem",
            }}
            customStyleButtonText={{
              fontSize: "1rem",
            }}
          />
        </div>
      </div>
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />
    </form>
  );
}

export default ChangePassword;

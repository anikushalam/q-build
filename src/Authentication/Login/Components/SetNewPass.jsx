import { useState } from "react";
import "./Container.css";
import style from "./Container.module.css";
import { useTranslation } from "react-i18next";
import { useForgetNewPassword } from "../../../hooks/authentication-api";
import { Notfication } from "../../../validation/Snackbar";
import ButtonWithAction from "../../../Custom/Button/ButtonWithAction";

function SetNewPass({ setActive, userId }) {
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

  const NewPasswordHandler = () => {
    setDisabled((pre) => !pre);
    if (password.userPassword && password.userRePassword) {
      if (password.userPassword?.length >= 8) {
        if (password.userPassword === password.userRePassword) {
          forgetNewPassword({
            rid: userId,
            password: password,
          })
            .then(() => {
              setActive("LOGIN");
            })
            .catch({});
        } else {
          setNotificationState({
            msg: "Please match your password and confirm password",
            run: true,
          });
          setDisabled((pre) => !pre);
        }
      } else {
        setNotificationState({
          msg: "Please enter atleast 8 characters password",
          run: true,
        });
        setDisabled((pre) => !pre);
      }
    } else {
      setNotificationState({
        msg: "Please enter password and confirm password",
        run: true,
      });
      setDisabled((pre) => !pre);
    }
  };

  return (
    <div className={style.modalContainerr}>
      <div className={`${style.form} ${style.forggotPassForm}`}>
        <h3>{t("set-new-password-label")}</h3>

        <p>{t("set_pass_detail")}</p>
        <div
          className={style.otpcontainer}
          style={{ flexDirection: "column", marginBottom: "7vw" }}
        >
          <div
            style={{ marginTop: "12px" }}
            className={style.userNamecontainer}
          >
            <input
              type="password"
              name="userPassword"
              maxLength="16"
              minLength="8"
              placeholder={t("set_new_pass_filed1")}
              value={password.userPassword}
              onChange={(e) =>
                setPassword({
                  ...password,
                  userPassword: e.target.value,
                })
              }
            />
            <img
              alt="not found"
              className={style.username}
              src="/images/password-icon.svg"
            />
          </div>
          <div
            style={{ marginTop: "12px" }}
            className={style.userNamecontainer}
          >
            <input
              type="password"
              name="userRePassword"
              maxLength="16"
              minLength="8"
              placeholder={t("confirm_pass")}
              value={password.userRePassword}
              onChange={(e) =>
                setPassword({
                  ...password,
                  userRePassword: e.target.value,
                })
              }
            />
            <img
              alt="not found"
              className={style.username}
              src="/images/password-icon.svg"
            />
          </div>
        </div>
        <ButtonWithAction
          buttonText={t("submit")}
          customStyleButton={{
            minHeight: "2.3rem",
            backgroundColor: "#575caa",
          }}
          disabled={disabled}
          shwoLoader={true}
          onAction={NewPasswordHandler}
        />
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

export default SetNewPass;

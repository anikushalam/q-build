import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLogin } from "../Components/use-login";
import style from "./Container.module.css";
import SigninHeader from "./SigninHeader";
import { Notfication } from "../../../validation/Snackbar";
import { Link } from "react-router-dom";
import ButtonWithTypeSubmit from "../../../Custom/Button/ButtonWithTypeSubmit";
const LoginForm = ({ onSignupLink, setActive }) => {
  const { t } = useTranslation();
  const { authenticateLogin } = useLogin();
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [disabled, setDisabled] = useState(false);
  const [login, setLogin] = useState({
    insUserName: "",
    insPassword: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const LoginAuthHandler = async (e) => {
    setDisabled((pre) => !pre);
    e.preventDefault();
    const data = await authenticateLogin(login);
    if (data?.msg) {
      setNotificationState({ msg: data.msg, run: data.notify });
      setDisabled((pre) => !pre);
    }
  };
  return (
    <>
      <div className={style.modalContainerr}>
        <form onSubmit={LoginAuthHandler}>
          <div className={`${style.form} ${style.forggotPassForm}`}>
            <h3>{t("log_in")}</h3>

            <p style={{ marginBottom: "1vw" }}>{t("login_detail")}</p>

            <div className={style.userNamecontainer}>
              <input
                type="text"
                name="insUserName"
                maxLength={"30"}
                minLength={"6"}
                value={login.insUserName}
                onChange={(e) =>
                  setLogin({ ...login, insUserName: e.target.value })
                }
                placeholder={t("username")}
                required
              />
              <img
                alt="not found"
                className={style.username}
                src="/images/username-icon.svg"
              />
            </div>

            <div
              style={{ marginTop: "12px" }}
              className={style.userNamecontainer}
            >
              <input
                type={passwordVisible ? "text" : "password"}
                name="insPassword"
                maxLength={"16"}
                minLength={"4"}
                value={login.insPassword}
                placeholder={t("password")}
                onChange={(e) =>
                  setLogin({ ...login, insPassword: e.target.value })
                }
                required
              />
              <img
                alt="not found"
                className={style.username}
                src="/images/password-icon.svg"
              />

              {!passwordVisible && (
                <img
                  alt="not found"
                  className={style.eye}
                  src="/images/eye-icon.svg"
                  onClick={() => setPasswordVisible((open) => !open)}
                />
              )}

              {passwordVisible && (
                <img
                  alt="not found"
                  className={style.eyeOpen}
                  src="/images/eye-open.svg"
                  onClick={() => setPasswordVisible((open) => !open)}
                />
              )}
            </div>

            <div className={style.forgotPass}>
              <p
                style={{ marginBottom: "1vw", marginTop: "1vw" }}
                onClick={() => setActive("FORGET_PASSWORD")}
              >
                {t("forgot_password")}
              </p>
            </div>
          </div>
          <ButtonWithTypeSubmit
            type="submit"
            customStyleButton={{
              minHeight: "2.3rem",
              backgroundColor: "#575caa",
            }}
            disabled={disabled}
            buttonText={t("log_in")}
          />
        </form>

        <div className={style.footer}>
          <p>
            {t("new_to_qviple")}
            <span className={style.signupbtn}>
              <Link
                onClick={onSignupLink}
                to={"/signup"}
                style={{
                  textDecoration: "none",
                  color: "#2c5dcd",
                  marginLeft: "0.3vw",
                }}
              >
                {t("signup")}
              </Link>
            </span>
          </p>
        </div>
      </div>
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />
    </>
  );
};

export default LoginForm;

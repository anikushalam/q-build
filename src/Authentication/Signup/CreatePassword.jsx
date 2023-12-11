import { useState } from "react";
import style from "../Login/Components/Container.module.css";
import { useTranslation } from "react-i18next";
import { Notfication } from "../../validation/Snackbar";
import SigninHeader from "../Login/Components/SigninHeader";
import ButtonWithAction from "../../Custom/Button/ButtonWithAction";
// import PwdRequisite from "./PwdRequisite";

function CreatePassword({ id, createPassword }) {
  const { t } = useTranslation();
  const [pwdReq, setPwdReq] = useState(false);
  const [ConfirmPass, setConfirmPass] = useState(false);
  const [iconClicked, setIconClicked] = useState(false);
  const [iconClicked2, setIconClicked2] = useState(false);
  const [password, setPassword] = useState({
    insPassword: "",
    insRePassword: "",
  });
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [disabled, setDisabled] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });

  const NewPasswordHandler = async () => {
    setDisabled((pre) => !pre);
    if (password.insPassword && password.insRePassword && id) {
      if (password.insPassword === password.insRePassword) {
        const data = await createPassword({
          id: id,
          insPassword: password.insPassword,
          insRePassword: password.insRePassword,
        });

        if (data?.msg) {
          setNotificationState({
            msg: data?.msg,
            run: true,
          });
          setDisabled((pre) => !pre);
        }
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

  if (false) {
    setPwdReq(pwdReq);
    setChecks(checks);
  }

  // const handleOnFocus = () => {
  //   setPwdReq(true);
  // };

  // const handleOnBlur = () => {
  //   setPwdReq(false);
  // };

  const handleOnKeyUp = (e) => {
    const value = e.target.value;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const specialCharCheck = /[!@#$%^&*]/.test(value);

    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  };

  return (
    <>
      {notificationState.run && (
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      )}
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
                type={iconClicked ? "text" : "password"}
                name="insPassword"
                maxLength="16"
                minLength="8"
                placeholder={t("set_new_pass_filed1")}
                className="form-control"
                value={password.insPassword}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    insPassword: e.target.value,
                  })
                }
                onFocus={() => setPwdReq(true)}
                onBlur={() => setPwdReq(false)}
                onKeyUp={handleOnKeyUp}
              />
              <img
                alt="not found"
                className={style.username}
                src="/images/password-icon.svg"
              />

              {!iconClicked && (
                <img
                  alt="not found"
                  className={style.eye}
                  src="/images/eye-icon.svg"
                  onClick={() => setIconClicked(!iconClicked)}
                />
              )}

              {iconClicked && (
                <img
                  alt="not found"
                  className={style.eyeOpen}
                  src="/images/eye-open.svg"
                  onClick={() => setIconClicked(!iconClicked)}
                />
              )}
            </div>
            <div
              style={{ marginTop: "12px" }}
              className={style.userNamecontainer}
            >
              <input
                type={iconClicked2 ? "text" : "password"}
                name="insRePassword"
                maxLength="16"
                minLength="8"
                className="form-control"
                placeholder={t("confirm_pass")}
                value={password.insRePassword}
                onChange={(e) => {
                  setPassword({
                    ...password,
                    insRePassword: e.target.value,
                  });
                }}
                onFocus={() => setConfirmPass(true)}
                onBlur={() => setConfirmPass(false)}
              />
              <img
                alt="not found"
                className={style.username}
                src="/images/password-icon.svg"
              />

              {!iconClicked2 && (
                <img
                  alt="not found"
                  className={style.eye}
                  src="/images/eye-icon.svg"
                  onClick={() => setIconClicked2(!iconClicked2)}
                />
              )}

              {iconClicked2 && (
                <img
                  alt="not found"
                  className={style.eyeOpen}
                  src="/images/eye-open.svg"
                  onClick={() => setIconClicked2(!iconClicked2)}
                />
              )}

              {ConfirmPass &&
                password.insRePassword !== password.insPassword && (
                  <div className={style.ConfirmPass}>
                    <p>{t("invalid_pass")}</p>
                  </div>
                )}
            </div>
          </div>

          {password.insPassword !== "" && password.insRePassword !== "" ? (
            <ButtonWithAction
              buttonText={t("submit")}
              disabled={disabled}
              shwoLoader={true}
              onAction={NewPasswordHandler}
              customStyleButton={{
                minHeight: "2.3rem",
                backgroundColor: "#575caa",
              }}
            />
          ) : (
            <ButtonWithAction
              buttonText={t("submit")}
              disabled={true}
              shwoLoader={false}
              onAction={NewPasswordHandler}
              customStyleButton={{
                minHeight: "2.3rem",
                backgroundColor: "#575caa",
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default CreatePassword;

import React from "react";
import style from "../../../Home/components/Header/NewHeader/HeaderIns.module.css";
import { PasswordInput } from "../InputWithIcon/InputWithIcon";
import { useState } from "react";
import { useUserSignup } from "../../Signup/UserSignUp/components/use-user-signup";
import { Notfication } from "../../../validation/Snackbar";
import ButtonWithTypeSubmit from "../../../Custom/Button/ButtonWithTypeSubmit";
import { useTranslation } from "react-i18next";

function CreatePassword({ id }) {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [password, setPassword] = useState({
    insPassword: "",
    insRePassword: "",
  });
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const { createPassword } = useUserSignup();

  const NewPasswordHandler = async (e) => {
    e.preventDefault();
    setDisabled((pre) => !pre);
    if (password.insPassword && password.insRePassword && id) {
      if (password.insPassword?.length >= 8) {
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
            msg: t("please_match_pass"),
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
        msg: t("please_enter_pass"),
        run: true,
      });
      setDisabled((pre) => !pre);
    }
  };
  return (
    <form onSubmit={NewPasswordHandler}>
      <div className={style.card}>
        <h6 className={style.cardhdark}>{t("create_pass")}</h6>
        <p className={`${style.pusername} ${style.ptoc}`}>{t("pass_length")}</p>
        <div className={style.change_pass_input}>
          <PasswordInput
            icon="/images/password-icon.svg"
            placeholder={t("create_pass")}
            name="insPassword"
            value={password.insPassword}
            onChange={(e) =>
              setPassword({
                ...password,
                insPassword: e.target.value,
              })
            }
            required={false}
          />
        </div>

        <div className={style.re_pass_input}>
          <PasswordInput
            icon="/images/password-icon.svg"
            placeholder={t("re_enter_pass")}
            name="insRePassword"
            value={password.insRePassword}
            onChange={(e) => {
              setPassword({
                ...password,
                insRePassword: e.target.value,
              });
            }}
            required={false}
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
      {notificationState.run && (
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      )}
    </form>
  );
}

export default CreatePassword;

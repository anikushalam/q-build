import { useState } from "react";
import GetStarted from "../GetStarted";
import AuthCardWrapper from "../AuthCardWrapper";
import { useTranslation } from "react-i18next";
import NotifyEvent from "@/Utils/Snackbar/NotifyEvent";
import AuthFormFieldWithIcon from "@/Ui/Auth/AuthFormFieldWithIcon";
import style from "../Auth.module.css";
import { invalidateAuthUsername } from "@/Validation/Auth/invalidateAuthUsername";
import {
  existingRequiredField,
  requiredField,
} from "@/Validation/functions/checkingRequiredField";
import { useAuthUserForget } from "@/Hooks/ApiHooks/Auth/auth-api";
import { assestsAuthUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import ButtonWithTypeSubmit from "@/Ui/Button/ButtonWithTypeSubmit";
import { useNavigate } from "react-router-dom";
import { decryption } from "@/Services/Encryption/decrypt";

const UserForget = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
  });

  const [disabled, setDisabled] = useState(false);
  const [errorField, setErrorField] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    msg: "",
    variant: "error",
  });
  const [authUserForget] = useAuthUserForget();

  const onChangeHandler = (e) => {
    setState((prev) => ({ ...prev, username: e.target.value }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let validation = requiredField(state);
    if (existingRequiredField(validation)) {
      setDisabled((pre) => !pre);
      if (invalidateAuthUsername(state?.username))
        setSnackbar({
          msg: "Special Character not allowed in username.",
          open: true,
          variant: "error",
        });
      else {
        authUserForget({
          forgot: state,
        })
          .then((res) => {
            let response = decryption(res?.data?.encrypt);
            if (response?.user?._id) {
              navigate("/user/forget/verify", {
                state: {
                  uid: response?.user?._id,
                  phoneNumber: response?.sent_address ?? "DONOT KNOW",
                  type: response?.sent_type ?? "DONOT Type",
                },
              });
            } else {
              setSnackbar({
                msg: "Invalid Username",
                open: true,
                variant: "error",
              });
            }
            setDisabled((pre) => !pre);
          })
          .catch((err) => {
            setSnackbar({
              msg: `Time out of request with reason ${err}`,
              open: true,
              variant: "error",
            });
            setDisabled((pre) => !pre);
          });
      }
    } else {
      setErrorField(validation);
    }
  };
  const onForgetHandler = () => {
    let url = "/";
    navigate(url);
  };
  return (
    <GetStarted>
      <AuthCardWrapper
        title="forgot_password_heading"
        subTitle={t("forgot_passowrd_note")}
        subTitleStyle={{
          fontSize: "0.7rem",
        }}
        titleStyle={{
          fontSize: "1rem",
        }}
      >
        <form onSubmit={onSubmitHandler} className={style.auth_login_form}>
          <AuthFormFieldWithIcon
            label={t("username")}
            placeholder={t("username_placeholder")}
            fieldIconUrl={`${assestsAuthUrl}/auth-user.svg`}
            validate={errorField["username"]}
            name="username"
            value={state.username}
            onChange={onChangeHandler}
          />
          <div
            className={style.auth_forget_container}
            style={{
              marginBottom: "0",
            }}
          >
            <p className={style.auth_forget_text} onClick={onForgetHandler}>
              {t("forgot_username")}
            </p>
          </div>
          <div className={style.auth_forget_container}>
            <p className={style.auth_forgot_username}>
              {t("forgot_username_note")}
            </p>
          </div>
          <ButtonWithTypeSubmit type="submit" buttonText={t("find_account")} />

          <NotifyEvent eventState={snackbar} eventStateHandler={setSnackbar} />
        </form>
      </AuthCardWrapper>
    </GetStarted>
  );
};

export default UserForget;

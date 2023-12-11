import { useState } from "react";
import GetStarted from "../GetStarted";
import AuthCardWrapper from "../AuthCardWrapper";
import { useTranslation } from "react-i18next";
import NotifyEvent from "@/Utils/Snackbar/NotifyEvent";
import AuthFormFieldWithIcon from "@/Ui/Auth/AuthFormFieldWithIcon";
import style from "../Auth.module.css";
import {
  existingRequiredField,
  requiredField,
} from "@/Validation/functions/checkingRequiredField";
import { useAuthUserSetPassword } from "@/Hooks/ApiHooks/Auth/auth-api";
import { assestsAuthUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import ButtonWithTypeSubmit from "@/Ui/Button/ButtonWithTypeSubmit";
import { useLocation, useNavigate } from "react-router-dom";
import { decryption } from "@/Services/Encryption/decrypt";

const UserSetForgetPassword = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState({
    userPassword: "",
    userRePassword: "",
  });

  const [disabled, setDisabled] = useState(false);
  const [errorField, setErrorField] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    msg: "",
    variant: "error",
  });
  const [authUserSetPassword] = useAuthUserSetPassword();

  const onChangeHandler = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let validation = requiredField(state);
    if (existingRequiredField(validation) && getQuery.state?.uid) {
      if (state.userPassword === state.userRePassword) {
        setDisabled((pre) => !pre);
        authUserSetPassword({
          uid: getQuery.state?.uid,
          password: state,
        })
          .then((res) => {
            let response = decryption(res?.data?.encrypt);
            if (response?.user?._id) {
              navigate("/");
            } else {
              setSnackbar({
                msg: "Invalid Change Password",
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
      } else {
        setSnackbar({
          msg: "Please match your password and confirm password",
          open: true,
          variant: "error",
        });
      }
    } else {
      setErrorField(validation);
    }
  };

  return (
    <GetStarted>
      <AuthCardWrapper
        title="change_password"
        subTitle={t("change_password_note")}
        subTitleStyle={{
          fontSize: "0.7rem",
        }}
      >
        <form onSubmit={onSubmitHandler} className={style.auth_login_form}>
          <AuthFormFieldWithIcon
            label={t("password")}
            placeholder={t("password_placeholder")}
            fieldIconUrl={`${assestsAuthUrl}/auth-password.svg`}
            validate={errorField["userPassword"]}
            name="userPassword"
            value={state.userPassword}
            onChange={onChangeHandler}
            type="password"
            isPassword
          />

          <AuthFormFieldWithIcon
            label={t("confirm_password")}
            placeholder={t("password_confirm_placeholder")}
            fieldIconUrl={`${assestsAuthUrl}/auth-password.svg`}
            validate={errorField["userRePassword"]}
            name="userRePassword"
            value={state.userRePassword}
            onChange={onChangeHandler}
            type="password"
            isPassword
          />

          <ButtonWithTypeSubmit
            type="submit"
            buttonText={t("submit")}
            customStyleButton={{
              marginTop: "5rem",
            }}
          />

          <NotifyEvent eventState={snackbar} eventStateHandler={setSnackbar} />
        </form>
      </AuthCardWrapper>
    </GetStarted>
  );
};

export default UserSetForgetPassword;

import { useTranslation } from "react-i18next";
import style from "../../Auth.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuthUserCreatePassword } from "@/Hooks/ApiHooks/Auth/auth-api";
import { useLogin } from "@/Auth/hooks/use-login";
import {
  existingRequiredField,
  requiredField,
} from "@/Validation/functions/checkingRequiredField";
import GetStarted from "@/Auth/GetStarted";
import AuthCardWrapper from "@/Auth/AuthCardWrapper";
import AuthFormFieldWithIcon from "@/Ui/Auth/AuthFormFieldWithIcon";
import ButtonWithTypeSubmit from "@/Ui/Button/ButtonWithTypeSubmit";
import NotifyEvent from "@/Utils/Snackbar/NotifyEvent";
import { assestsAuthUrl } from "@/Services/UrlConfig/AssestsBaseUrl";

const UserSetPassword = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
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
  const [authUserCreatePassword] = useAuthUserCreatePassword();
  const { userDispatchAction } = useLogin();

  const onChangeHandler = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let validation = requiredField(state);
    if (existingRequiredField(validation) && getQuery.state?.uid) {
      if (state.userPassword === state.userRePassword) {
        setDisabled((pre) => !pre);
        authUserCreatePassword({
          uid: getQuery.state?.uid,
          password: state,
        })
          .then((res) => {
            let response = decryption(res?.data?.encrypt);
            // console.info("dnbfjhsf", response);
            if (response?.login) {
              userDispatchAction({
                token: response?.token,
                user: response?.user,
                isUniversal: false,
              });
            } else {
              setSnackbar({
                msg: "Invalid Create Password",
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
        title="create_password"
        subTitle={t("change_password_note")}
        subTitleStyle={{
          fontSize: "0.7rem",
        }}
        titleStyle={{
          fontSize: "1rem",
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

export default UserSetPassword;

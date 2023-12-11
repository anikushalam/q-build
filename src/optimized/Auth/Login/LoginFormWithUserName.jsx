import { useState } from "react";
import { useTranslation } from "react-i18next";
import AuthFormFieldWithIcon from "../../Ui/Auth/AuthFormFieldWithIcon";
import ButtonWithTypeSubmit from "../../Ui/Button/ButtonWithTypeSubmit";
import style from "../Auth.module.css";
import { assestsAuthUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import { useAuthLogin } from "@/Hooks/ApiHooks/Auth/auth-api";
import NotifyEvent from "@/Utils/Snackbar/NotifyEvent";
import {
  existingRequiredField,
  requiredField,
} from "@/Validation/functions/checkingRequiredField";
import { useLogin } from "../hooks/use-login";
import { invalidateAuthUsername } from "@/Validation/Auth/invalidateAuthUsername";
import { decryption } from "@/Services/Encryption/decrypt";
import { useNavigate } from "react-router-dom";
const LoginFormWithUserName = ({ isUser, onUserMobile }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [state, setState] = useState({
    insUserName: "",
    insPassword: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [errorField, setErrorField] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    msg: "",
    variant: "error",
  });
  const [authLogin] = useAuthLogin();
  const { userDispatchAction } = useLogin();
  const onChangeHandler = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let validation = requiredField(state);
    if (existingRequiredField(validation)) {
      setDisabled((pre) => !pre);
      if (invalidateAuthUsername(state?.insUserName))
        setSnackbar({
          msg: "Special Character not allowed in username.",
          open: true,
          variant: "error",
        });
      else {
        authLogin({
          login: state,
        })
          .then((res) => {
            const response = decryption(res?.data?.encrypt);
            // console.info("response", response);

            if (response?.login) {
              userDispatchAction({
                token: response?.token,
                user: response?.user,
                isUniversal: response?.user?.is_universal,
                phoneNumber: response?.user?.code_arr,
              });
            } else {
              setSnackbar({
                msg: "Invalid Credentials",
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
    let url = "";
    if (isUser) url = "/user/forget";
    else url = "/institute/forget";
    navigate(url);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <AuthFormFieldWithIcon
        label={t("username")}
        placeholder={t("username_placeholder")}
        fieldIconUrl={`${assestsAuthUrl}/auth-user.svg`}
        validate={errorField["insUserName"]}
        name="insUserName"
        value={state.insUserName}
        onChange={onChangeHandler}
      />
      <AuthFormFieldWithIcon
        label={t("password")}
        placeholder={t("password_placeholder")}
        fieldIconUrl={`${assestsAuthUrl}/auth-password.svg`}
        validate={errorField["insPassword"]}
        name="insPassword"
        value={state.insPassword}
        onChange={onChangeHandler}
        type="password"
        isPassword
      />

      <div className={style.auth_forget_container}>
        <p className={style.auth_forget_text} onClick={onForgetHandler}>
          {t("forgot_password")}
        </p>
      </div>
      <ButtonWithTypeSubmit
        type="submit"
        buttonText={t("login")}
        disabled={disabled}
      />
      {isUser ? (
        <div className={style.auth_footer_container}>
          <p className={style.auth_forget_text} onClick={onUserMobile}>
            {t("continue_with_mobile_no")}
          </p>
        </div>
      ) : (
        <div className={style.auth_footer_container}>
          <p className={style.auth_forget_text}>
            {t("new_to_qviple")} {t("signup")}
          </p>
        </div>
      )}
      <NotifyEvent eventState={snackbar} eventStateHandler={setSnackbar} />
    </form>
  );
};

export default LoginFormWithUserName;

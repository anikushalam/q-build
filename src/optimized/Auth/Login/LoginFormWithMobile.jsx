import { useState } from "react";
import { useTranslation } from "react-i18next";
import AuthFormFieldWithIcon from "../../Ui/Auth/AuthFormFieldWithIcon";
import ButtonWithTypeSubmit from "../../Ui/Button/ButtonWithTypeSubmit";
import style from "../Auth.module.css";
import { assestsAuthUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import { useAuthUserNumber } from "@/Hooks/ApiHooks/Auth/auth-api";
import NotifyEvent from "@/Utils/Snackbar/NotifyEvent";
import {
  invalidateAuthEmailOrMobile,
  typeOfAuth,
} from "@/Validation/Auth/invalidateAuthUsername";
import { useNavigate } from "react-router-dom";
import { decryption } from "@/Services/Encryption/decrypt";
const LoginFormWithMobile = ({ onUserName }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [authUserNumber] = useAuthUserNumber();
  const [state, setState] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [errorField, setErrorField] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    msg: "",
    variant: "error",
  });

  const onChangeHandler = (e) => {
    setState(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (state) {
      setDisabled((pre) => !pre);
      authUserNumber({
        userPhoneNumber: state,
        status: "Not Verified",
        is_qid: invalidateAuthEmailOrMobile(state),
      })
        .then((res) => {
          let response = decryption(res?.data?.encrypt);
          if (response?.userPhoneNumber) {
            navigate("/verify", {
              state: {
                phoneNumber: response?.ePhone,
                type:
                  typeOfAuth(state) === "qviple id"
                    ? "mobile number"
                    : typeOfAuth(state),
              },
            });
            setDisabled((pre) => !pre);
          }
        })
        .catch(() => {
          setSnackbar({
            open: true,
            msg: "Time out of request...",
            variant: "error",
          });
        });
    } else {
      setErrorField({
        state: "* required",
      });
    }
  };
  return (
    <form onSubmit={onSubmitHandler} className={style.auth_login_form}>
      <AuthFormFieldWithIcon
        label={t("user_email_number_qviple_id")}
        placeholder={t("user_email_number_qviple_id_placeholder")}
        fieldIconUrl={`${assestsAuthUrl}/auth-flag.svg`}
        validate={errorField["state"]}
        name="mobile_number"
        value={state}
        onChange={onChangeHandler}
      />
      <p className={style.auth_privacy_and_policy}>
        {t("mobile_login_note")}{" "}
        <span className={style.auth_privacy_and_policy_link}>
          <a href="/q/terms/condition">{t("terms_condition")}</a>
        </span>{" "}
        {t("and")}
        <span className={style.auth_privacy_and_policy_link}>
          <a href="/q/privacy/policy">{t("privacy_policy")}</a>
        </span>
      </p>
      <ButtonWithTypeSubmit
        type="submit"
        buttonText={t("send_otp")}
        disabled={disabled}
      />
      <div className={style.auth_footer_container}>
        <p className={style.auth_forget_text} onClick={onUserName}>
          {t("login_with_user_name")}
        </p>
      </div>
      <NotifyEvent eventState={snackbar} eventStateHandler={setSnackbar} />
    </form>
  );
};

export default LoginFormWithMobile;

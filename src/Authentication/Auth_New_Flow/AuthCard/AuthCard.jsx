import React, { useEffect, useState } from "react";
import style from "../../../Home/components/Header/NewHeader/HeaderIns.module.css";
import {
  TextInput,
  PasswordInput,
  NumberInput,
} from "../InputWithIcon/InputWithIcon";
import { useTranslation } from "react-i18next";
import ButtonWithTypeSubmit from "../../../Custom/Button/ButtonWithTypeSubmit";
import { useLogin } from "../../Login/Components/use-login";
import { Notfication } from "../../../validation/Snackbar";
import { useDispatch } from "react-redux";
import { authChangeAction } from "../../../redux/store/authenticate-slice";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

function AuthCard({
  index,
  setIndex,
  setStatus,
  ins,
  switchUser,
  onMobileNumberAdd,
  setPhoneNumber,
  handleSignup,
}) {
  const { t } = useTranslation();
  const { authenticateLogin } = useLogin();
  const getQuery = useLocation();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [disabled, setDisabled] = useState(false);
  const [login, setLogin] = useState({
    insUserName: "",
    insPassword: "",
  });

  useEffect(() => {
    if (getQuery.state?.openAs) {
      setIndex(2);
    }
    if (searchParams?.get("go") === "landing_page") {
      setIndex(1);
    }
  }, [getQuery.state?.openAs, searchParams]);

  const onLoginChange = (e) => {
    setLogin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const LoginAuthHandler = async (e) => {
    e.preventDefault();
    setDisabled((pre) => !pre);
    const data = await authenticateLogin(login);
    if (data?.msg) {
      setNotificationState({ msg: data.msg, run: data.notify });
      setDisabled((pre) => !pre);
    }
  };

  //for user related things
  // const phoneRef = useRef("");
  const [phone, setPhone] = useState("");
  const PhoneRegisterHandler = async (e) => {
    e.preventDefault();
    setDisabled((pre) => !pre);
    if (phone) {
      const data = await onMobileNumberAdd({
        insPhoneNumber: `${phone}`,
        status: "Not Verified",
      });
      if (data?.phoneNumber) {
        setPhoneNumber({ type: "phoneNumber", value: data?.phoneNumber });
        setStatus("VERIFIED_MOBILE");
        setDisabled((pre) => !pre);
      } else {
        setNotificationState({
          msg: t("something_wrong"),
          run: true,
        });
        setDisabled((pre) => !pre);
      }
    } else {
      setNotificationState({
        msg: "Please enter your number or email",
        run: true,
      });
      setDisabled((pre) => !pre);
    }
  };
  const onInstituteForgetPassword = () => {
    if (index === 0) {
      dispatch(
        authChangeAction.onForgetPassword({
          forgetAs: "INSTITUTE",
        })
      );
      navigate("/login");
    } else {
      setStatus("FORGET_PASSWORD");
    }
  };

  // console.info("skfhadhjfdagg", getQuery.search);
  return (
    <div className={style.card}>
      <h6 className={style.cardhdark}>{t("hello_")}</h6>
      <h6 className={style.cardhlight}>{t("welcome_to_qviple_")}</h6>

      <div className={style.tabsss}>
        <div
          className={
            (index === 1 || index === 2) && !ins
              ? `${style.singletab} ${style.singletabActive}`
              : style.singletab
          }
          onClick={() => {
            setIndex(1);
            switchUser(false);
          }}
        >
          {t("users_")}
        </div>
        <div
          className={
            index === 0 && ins
              ? `${style.singletab} ${style.singletabActive}`
              : style.singletab
          }
          onClick={() => {
            setIndex(0);
            switchUser(true);
          }}
        >
          {t("ins")}
        </div>
      </div>

      {(index === 0 || index === 2) && (
        <form onSubmit={LoginAuthHandler}>
          <div className={style.index_contrainer}>
            <h3 className={style.input_label}>{t("enter_username_pass")}</h3>
            <TextInput
              icon="/images/username-icon.svg"
              placeholder={t("username")}
              name="insUserName"
              onChange={onLoginChange}
              value={login.insUserName}
              required={true}
            />
            <PasswordInput
              icon="/images/password-icon.svg"
              placeholder={t("password")}
              name="insPassword"
              onChange={onLoginChange}
              value={login.insPassword}
              required={true}
            />
            <div className={style.forgot_pass_container}>
              <p
                className={style.forgot_pass}
                onClick={onInstituteForgetPassword}
              >
                {t("forgot_password")}
              </p>
            </div>

            <div className={style.btn_container}>
              <ButtonWithTypeSubmit
                type="submit"
                disabled={disabled}
                buttonText={t("login")}
                customStyleButton={{
                  minHeight: "2.3rem",
                  backgroundColor: "#575caa",
                }}
                customStyleButtonText={{
                  fontSize: "1rem",
                }}
              />
            </div>

            {index === 0 && (
              <div className={style.register_link_container}>
                <p className={style.forgot_pass} onClick={handleSignup}>
                  {t("new_to_qviple")} {t("signup")}
                </p>
              </div>
            )}

            {index === 2 && (
              <div className={style.register_link_container}>
                <p className={style.forgot_pass} onClick={() => setIndex(1)}>
                  {t("continue_mbl_no")}
                </p>
              </div>
            )}
          </div>
        </form>
      )}

      {index === 1 && (
        <form onSubmit={PhoneRegisterHandler}>
          <div className={style.index_contrainer}>
            <h3 className={style.input_label}>Mobile Number / Email</h3>
            <NumberInput
              icon="/images/landing-page/flag.svg"
              placeholder={t("mobile_bumber_and_email")}
              name="mobileNumber"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <p className={style.ptoc}>
              {t("term_condition")}{" "}
              <span className={style.spantoc}>
                <a href="/q/terms/condition">{t("Tirms_conditions")}</a>
              </span>{" "}
              {t("andd")}
              <span className={style.spantoc}>
                {" "}
                <a href="/q/privacy/policy">{t("privacy_policy")}</a>
              </span>
            </p>

            <div className={style.btn_containerstaff}>
              <ButtonWithTypeSubmit
                type="submit"
                disabled={disabled}
                buttonText={t("send_otp")}
                customStyleButton={{
                  minHeight: "2.3rem",
                  backgroundColor: "#575caa",
                }}
                customStyleButtonText={{
                  fontSize: "1rem",
                }}
              />
            </div>

            <div className={style.register_link_container}>
              <p className={style.forgot_pass} onClick={() => setIndex(2)}>
                {t("login_with_user_name")}
              </p>
            </div>
          </div>
        </form>
      )}
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

export default AuthCard;

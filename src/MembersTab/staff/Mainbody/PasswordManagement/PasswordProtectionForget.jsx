import React, { useState } from "react";
import style from "../PromoteDepartment/PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import { useForgetPasswordProtection } from "../../../../hooks/member_tab/admission-api";
import PopupWrapper from "../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QLoader from "../../../../Loader/QLoader";
import JoinFormInput from "../../../../JoiningForm/Student/Form/JoinFormInput";
import { useDispatch } from "react-redux";
import { idChangeAction } from "../../../../redux/store/department-slice";

const PasswordProtectionForget = ({ onClose, faid, openAs }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [forgetPasswordProtection] = useForgetPasswordProtection();
  const [protectedPin, setProtectedPin] = useState({
    old_pass: "",
    new_pass: "",
  });
  const [filled, setFilled] = useState("");

  const onInputChange = (e) => {
    setProtectedPin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    if (data["old_pass"] && data["new_pass"]) {
      if (data["old_pass"] === data["new_pass"])
        errors["pass_match"] = ` is required!`;
    }
    if (data["old_pass"]?.length !== 4)
      errors["old_pass_length"] = ` is required!`;
    if (data["new_pass"]?.length !== 4)
      errors["new_pass_length"] = ` is required!`;
    return errors;
  };
  const onDispatchAction = (type, value) => {
    dispatch(
      idChangeAction.onAddPasswordManager({
        type,
        value,
      })
    );
  };
  const onLoginAccess = () => {
    const validation = onValidation(protectedPin);
    let flag = false;
    for (let errField in validation) {
      flag = true;
      break;
    }
    if (flag) {
      setFilled(validation);
    } else {
      setDisabled((pre) => !pre);
      forgetPasswordProtection({
        forgetPassword: protectedPin,
        faid: faid,
        flow: openAs,
      })
        .then(() => {
          setDisabled((pre) => !pre);
          if (openAs === "Admission_Login") {
            onDispatchAction("ADMISSION_PASSWORD", protectedPin.new_pass);
          } else {
            onDispatchAction("FINANCE_PASSWORD", protectedPin.new_pass);
          }
          onClose();
        })
        .catch({});
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.promote_container}
        style={{
          minHeight: "11rem",
          maxWidth: "23rem",
          overflow: "hidden",
        }}
      >
        <h6
          style={{
            textAlign: "center",
          }}
        >
          {t(
            openAs === "Admission_Login"
              ? "admission_passowrd_protection"
              : "finance_passowrd_protection"
          )}
        </h6>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <JoinFormInput
          type={"tel"}
          name={"old_pass"}
          labelText={t("current_password")}
          inputLength={"4"}
          value={protectedPin.old_pass}
          onChange={onInputChange}
          placeholder={t("enter_current_password_pin")}
          errorShow={filled["old_pass"]}
        />
        {filled["old_pass_length"] && (
          <p style={{ color: "red", marginBottom: "0" }}>
            {t("old_pass_length")}
          </p>
        )}
        <JoinFormInput
          type={"tel"}
          name={"new_pass"}
          labelText={t("new_password")}
          inputLength={"4"}
          value={protectedPin.new_pass}
          onChange={onInputChange}
          placeholder={t("enter_new_password_pin")}
          errorShow={filled["new_pass"]}
        />
        {filled["new_pass_length"] && (
          <p style={{ color: "red", marginBottom: "0" }}>
            {t("new_pass_length")}
          </p>
        )}
        {filled["pass_match"] && (
          <p style={{ color: "red", marginBottom: "0" }}>
            {t("both_match_password")}
          </p>
        )}
        <button
          className={style.select_application_btn}
          onClick={onLoginAccess}
          style={{
            width: "100%",
            marginTop: "3rem",
            justifyContent: "center",
          }}
          title="Confirm"
        >
          {t("confirm")}
        </button>
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default PasswordProtectionForget;

import React, { useState } from "react";
import style from "../PromoteDepartment/PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import { usePasswordProtectionLogin } from "../../../../hooks/member_tab/admission-api";
import PopupWrapper from "../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QLoader from "../../../../Loader/QLoader";
import JoinFormInput from "../../../../JoiningForm/Student/Form/JoinFormInput";
import PasswordProtectionForget from "./PasswordProtectionForget";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { idChangeAction } from "../../../../redux/store/department-slice";

const PasswordProtectionLogin = ({ onClose, faid, openAs }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [passwordProtectionLogin] = usePasswordProtectionLogin();
  const [protectedPin, setProtectedPin] = useState("");
  const [filled, setFilled] = useState("");
  const [forgetPassword, setForgetPassword] = useState(false);

  const onNavigationBack = () => {
    navigate(`/q/${params.username}/feed`);
  };
  const onDispatchAction = (type, value) => {
    dispatch(
      idChangeAction.onAddPasswordManager({
        type,
        value,
      })
    );
  };
  const onLoginAccess = (e) => {
    e.preventDefault();
    if (!protectedPin || protectedPin?.length !== 4) {
      setFilled({ protectedPin: "required" });
    } else {
      setDisabled((pre) => !pre);
      passwordProtectionLogin({
        loginPassword: {
          protected_pin: protectedPin,
          flowId: faid,
          flow: openAs,
        },
      })
        .then(() => {
          setDisabled((pre) => !pre);
          if (openAs === "Admission_Login") {
            onDispatchAction("ADMISSION_PASSWORD", protectedPin);
          } else {
            onDispatchAction("FINANCE_PASSWORD", protectedPin);
          }
          onClose();
        })
        .catch({});
    }
  };
  return (
    <>
      {!forgetPassword ? (
        <PopupWrapper onClose={() => {}}>
          <div
            className={style.promote_container}
            style={{
              minHeight: "11rem",
              maxWidth: "23rem",
              overflow: "hidden",
            }}
          >
            <div className={style.promote_container_title}>
              <h6>
                {t(
                  openAs === "Admission_Login"
                    ? "admission_passowrd_protection"
                    : "finance_passowrd_protection"
                )}
              </h6>
              <img
                src="/images/close-post-icon.svg"
                onClick={onNavigationBack}
                alt=""
              />
            </div>

            <BorderBottom
              customStyle={{
                width: "100%",
              }}
            />
            <form onSubmit={onLoginAccess}>
              <JoinFormInput
                type={"tel"}
                name={"protectedPin"}
                labelText={t(
                  openAs === "Admission_Login"
                    ? "admission_passowrd_protection_placeholder"
                    : "finance_passowrd_protection_placeholder"
                )}
                inputLength={"4"}
                value={protectedPin}
                onChange={(e) => setProtectedPin(e.target.value)}
                placeholder={t("enter_password_pin")}
                errorShow={filled["protectedPin"]}
              />
              <h6 onClick={() => setForgetPassword(true)}>
                {t("forget_password")}
              </h6>
              <button
                className={style.select_application_btn}
                style={{
                  width: "100%",
                  marginTop: "3rem",
                  justifyContent: "center",
                }}
                title="Confirm"
                type="submit"
              >
                {t("confirm")}
              </button>
            </form>
          </div>
          {disabled && <QLoader />}
        </PopupWrapper>
      ) : (
        <PasswordProtectionForget
          openAs={openAs}
          faid={faid}
          onClose={() => setForgetPassword(false)}
        />
      )}
    </>
  );
};

export default PasswordProtectionLogin;

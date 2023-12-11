import React, { useEffect, useState } from "react";
import style from "../Student/Form/JoinForm.module.css";
import PopupWrapper from "../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../Student/Form/JoinFormInput";
import { useTranslation } from "react-i18next";
import QLoader from "../../Loader/QLoader";
import {
  useUserloginDetailsProfile,
  useUserloginStaffProfile,
} from "../../hooks/authentication-api";

const StudentProfileLoginDetails = ({
  onLoginDetailToggle,
  loginData,
  sid,
  onRefetch,
  is_staff,
}) => {
  const { t } = useTranslation();
  const [login, setLogin] = useState({
    phone: loginData?.userPhoneNumber || "",
    email: loginData?.userEmail || "",
  });

  const [disabled, setDisabled] = useState(false);
  const [userloginDetailsProfile] = useUserloginDetailsProfile();
  const [userloginStaffProfile] = useUserloginStaffProfile();
  useEffect(() => {
    if (loginData) {
      setLogin((prev) => ({
        ...prev,
        phone: loginData?.userPhoneNumber || "",
        email: loginData?.userEmail || "",
      }));
    }
  }, [loginData]);
  // const [filled, setFilled] = useState("");

  const onUpdateInput = (e) => {
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onUpdate = () => {
    setDisabled((pre) => !pre);
    if (is_staff) {
      userloginStaffProfile({
        login_details: {
          phone: login.phone,
          email: login.email,
          sid: sid,
        },
      })
        .then(() => {
          onRefetch();
          setDisabled((pre) => !pre);
          onLoginDetailToggle();
        })
        .catch({});
    } else {
      userloginDetailsProfile({
        login_details: {
          phone: login.phone,
          email: login.email,
          sid: sid,
        },
      })
        .then(() => {
          onRefetch();
          setDisabled((pre) => !pre);
          onLoginDetailToggle();
        })
        .catch({});
    }
    // await onUpdateLoginDetailsForm();
  };
  return (
    <PopupWrapper onClose={onLoginDetailToggle}>
      <div className={style.login_details_modal}>
        <h6>{t("login_details")}</h6>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.5rem",
          }}
        />
        <JoinFormInput
          labelText={t("mobile_number")}
          placeholder={t("mobile_number_placeholder")}
          name={"phone"}
          value={login.phone}
          type={"text"}
          onChange={onUpdateInput}
          //   errorShow={filled["phone"]}
        />
        <JoinFormInput
          labelText={t("email")}
          placeholder={t("email_placeholder")}
          name={"email"}
          value={login.email}
          type={"text"}
          onChange={onUpdateInput}
          //   errorShow={filled["email"]}
        />
        <button className={style.login_details_btn} onClick={onUpdate}>
          {t("update")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default StudentProfileLoginDetails;

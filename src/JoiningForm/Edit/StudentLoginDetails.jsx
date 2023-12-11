import React from "react";
import style from "../Student/Form/JoinForm.module.css";
import PopupWrapper from "../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../Student/Form/JoinFormInput";
import { useTranslation } from "react-i18next";
import QLoader from "../../Loader/QLoader";

const StudentLoginDetails = ({
  onLoginDetailToggle,
  onUpdateLoginDetailsForm,
  student,
  onUpdateInput,
  disabled,
}) => {
  const { t } = useTranslation();

  const onUpdate = async () => {
    await onUpdateLoginDetailsForm();
    onLoginDetailToggle();
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
          value={student?.phone}
          type={"text"}
          onChange={onUpdateInput}
          //   errorShow={filled["phone"]}
        />
        <JoinFormInput
          labelText={t("email")}
          placeholder={t("email_placeholder")}
          name={"email"}
          value={student?.email}
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

export default StudentLoginDetails;

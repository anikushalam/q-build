import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../../../Loader/QLoader";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../../../Hostel/HostelFeeStructure/HostelFeeStructure.module.css";
import { useCancelAdmissionApplicant } from "../../../../../../hooks/member_tab/admission-api";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";

const AdmissionCancelApplication = ({
  onClose,
  onRefetchWhenSelect,
  applicationId,
  studentId,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [cancelAdmissionApplicant] = useCancelAdmissionApplicant();
  const [filled, setFilled] = useState(false);
  const [verify, setVerify] = useState("");

  const onCancelRequest = () => {
    if (studentId !== "" && applicationId !== "") {
      if (verify === "Confirm") {
        setDisabled((pre) => !pre);
        cancelAdmissionApplicant({
          sid: studentId,
          aid: applicationId,
        })
          .then(() => {
            onRefetchWhenSelect();
            onClose(false);
            setDisabled((pre) => !pre);
          })
          .catch({});
      } else {
        setFilled(true);
      }
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "30rem",
          minHeight: "10rem",
          height: "fit-content",
        }}
      >
        <div className={style.add_category_modal_title}>
          <h6>{t("cancel_admission_application")}</h6>
          <img
            src="/images/close-post-icon.svg"
            onClick={onClose}
            alt="close"
          />
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.7rem",
          }}
        />

        <JoinFormInput
          labelText={t("type_confirm_to_continue")}
          placeholder={t("type_confirm_to_continue")}
          name={"verification"}
          value={verify}
          type={"text"}
          onChange={(e) => setVerify(e.target.value)}
          errorShow={filled}
        />
        <button
          className={style.set_fees_structure_btn}
          title="Cancel Request"
          onClick={onCancelRequest}
          style={{ justifyContent: "center", marginTop: "4rem" }}
        >
          {t("confirm")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default AdmissionCancelApplication;

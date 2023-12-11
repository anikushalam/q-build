import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useCancelApplicantRequestByHostel,
  useCancelRenewalByHostel,
} from "../../../../../../hooks/member_tab/hostel-api";
import QLoader from "../../../../../../Loader/QLoader";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../../HostelFeeStructure/HostelFeeStructure.module.css";

const HostelCancelApplication = ({
  onClose,
  onRefetchWhenSelect,
  applicationId,
  studentId,
  viewAs,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [cancelApplicantRequestByHostel] = useCancelApplicantRequestByHostel();
  const [cancelRenewalByHostel] = useCancelRenewalByHostel();

  const onCancelRequest = () => {
    if (studentId !== "" && applicationId !== "") {
      setDisabled((pre) => !pre);
      if (viewAs === "RENEWAL") {
        cancelRenewalByHostel({
          sid: studentId,
          huid: applicationId,
        })
          .then(() => {
            onRefetchWhenSelect();
            onClose();
            setDisabled((pre) => !pre);
          })
          .catch({});
      } else {
        cancelApplicantRequestByHostel({
          sid: studentId,
          aid: applicationId,
        })
          .then(() => {
            onRefetchWhenSelect();
            onClose();
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "23rem",
          height: "10rem",
        }}
      >
        <div className={style.add_category_modal_title}>
          <h6>
            {t(
              viewAs === "RENEWAL"
                ? "cancl_student_renewal_request"
                : "cancel_student_hostel_request"
            )}
          </h6>
          <img
            src="/images/close-post-icon.svg"
            onClick={onClose}
            alt="close"
          />
        </div>
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

export default HostelCancelApplication;

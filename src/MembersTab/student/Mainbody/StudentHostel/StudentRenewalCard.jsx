import React, { useState } from "react";
import style from "../../../staff/Mainbody/Hostel/Hostel.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import RenewalPaymentFees from "../ApplicationStatus/ConfirmStudentAdmisionModal/RenewalPaymentFees";
import CancelStudentAdmisionModal from "../ApplicationStatus/CancelStudentAdmisionModal/CancelStudentAdmisionModal";
import RenewalReApplyPaymentFees from "../ApplicationStatus/ConfirmStudentAdmisionModal/RenewalReApplyPaymentFees";

const StudentRenewalCard = ({ renewal, onRefetch }) => {
  const { t } = useTranslation();
  const [confirm, setConfirm] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [reApply, setReApply] = useState(false);
  return (
    <>
      <div className={style.student_renewal_card}>
        <h6>{t("current_stay")}</h6>
        <div className={style.student_renewal_date}>
          <p>{t("start_on")}</p>
          <p>{moment(renewal?.renewal_start).format("DD MMM yyyy")}</p>
        </div>
        <div className={style.student_renewal_date}>
          <p>{t("expire_on")}</p>
          <p>{moment(renewal?.renewal_end).format("DD MMM yyyy")}</p>
        </div>
        <p>
          Stay for{" "}
          {renewal?.renewal_student?.hostel_fee_structure?.structure_month}{" "}
          Months for fees info click here
        </p>
        {renewal?.renewal_status === "Current Stay Request" && (
          <>
            <h6>{t("renewal_requested")}</h6>
            <div className={style.student_renewal_btn_group}>
              <button
                className={style.student_renewal_cancel_btn}
                onClick={() => setCancel(true)}
              >
                {t("cancel")}
              </button>
              <button
                className={style.student_renewal_confirm_btn}
                onClick={() => setConfirm(true)}
              >
                {t("confirm")}
              </button>
            </div>
          </>
        )}
        {renewal?.receipt_status === "Requested" && (
          <>
            <h6>{t("renewal_requested")}</h6>
            <div className={style.student_renewal_btn_group}>
              <button
                className={style.student_renewal_confirm_btn}
                style={{
                  backgroundColor: "#B8B83E",
                  width: "100%",
                }}
              >
                {t("requested")}
              </button>
            </div>
          </>
        )}
        {renewal?.receipt_status === "Rejected" && (
          <>
            <h6>{t("renewal_requested")}</h6>
            <div
              className={style.student_renewal_date}
              style={{
                justifyContent: "flex-start",
              }}
            >
              <p>{t("reason")} </p>
              <p>{` : ${renewal?.receipt?.reason ?? ""}`}</p>
            </div>
            <div className={style.student_renewal_btn_group}>
              <button
                className={style.student_renewal_confirm_btn}
                style={{
                  // backgroundColor: "#B8B83E",
                  width: "100%",
                }}
                onClick={() => setReApply(true)}
              >
                {t("re_apply_for_receipt")}
              </button>
            </div>
          </>
        )}
      </div>
      {reApply && (
        <RenewalReApplyPaymentFees
          receipt={renewal?.receipt?._id}
          onClose={() => setReApply(false)}
          onRefetch={onRefetch}
          sid={renewal?.renewal_student?._id}
        />
      )}
      {confirm && (
        <RenewalPaymentFees
          addDisplay={confirm}
          hideModal={(w) => setConfirm(w)}
          statusQuery={renewal}
          onRefetchApplication={onRefetch}
        />
      )}
      {cancel && (
        <CancelStudentAdmisionModal
          cancelStatus={cancel}
          hideModal={(w) => setCancel(w)}
          cancelData={renewal}
          fetch={onRefetch}
          setCancel={setCancel}
          viewAs="RENEWAL"
        />
      )}
    </>
  );
};

export default StudentRenewalCard;

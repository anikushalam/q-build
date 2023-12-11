import React, { useState } from "react";
import style from "../ApplicationStatus.module.css";
import ApplicationPreviewDetail from "../../../../staff/Mainbody/FinanceManager/FeesStructure/ApplicationPreviewDetail";
import RejectedReceipt from "../RejectedReceipt";
import DownloadReceipt from "../DownloadReceipt";
import { useTranslation } from "react-i18next";
import StudentHostelApplicationPayment from "../ConfirmStudentAdmisionModal/StudentHostelApplicationPayment";
import { useStudentBankValidationByAdmission } from "../../../../../hooks/member_tab/admission-api";
import { Notfication } from "../../../../../validation/Snackbar";
import QLoader from "../../../../../Loader/QLoader";

const HostelSecondNotification = ({ message, onRefetchApplication }) => {
  const { t } = useTranslation();
  const [structureId, setStructureId] = useState("");
  const [statusQuery, setStatusQuery] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [studentBankValidationByAdmission] =
    useStudentBankValidationByAdmission();

  const onBankValidate = () => {
    setDisabled((pre) => !pre);
    studentBankValidationByAdmission({
      fid: message?.finance,
      aid: message?.applicationId?._id,
      flow: "BY_HOSTEL",
    })
      .then((res) => {
        setDisabled((pre) => !pre);
        if (res?.data?.denied) {
          setNotificationState({
            msg: "Before initiating payment. you must have a valid bank account to receive payment.",
            run: true,
          });
        } else {
          setStatusQuery(message);
        }
      })
      .catch({});
  };
  return (
    <>
      <p>
        You have been selected for{" "}
        <span
          style={{
            fontWeight: "500",
          }}
        >
          {message?.applicationId?.applicationName ?? ""}.
        </span>
      </p>
      <p>
        Your fee structure is (
        <span
          style={{
            color: "#002BBE",
            cursor: "pointer",
          }}
          title="View fees structure"
          onClick={() =>
            setStructureId(message?.hostel_fee_structure?._id ?? "")
          }
        >
          click here to view structure
        </span>{" "}
        ).
      </p>

      <p
        style={{
          marginBottom: "0.5rem",
          fontWeight: "500",
        }}
      >
        Complete your admission by paying applicable admission fees from below:
      </p>

      <p>
        Applicable Admission Fees: Rs.{" "}
        <span
          style={{
            fontWeight: "500",
          }}
        >
          {message?.hostel_fee_structure?.applicable_fees ?? 0}
        </span>
      </p>

      {message?.isPaid === "Paid" ? (
        ""
      ) : message?.payMode === "online" ? (
        <>
          {message?.receipt_status === "Rejected" && (
            <RejectedReceipt
              item={message}
              openForm={openForm}
              setOpenForm={setOpenForm}
              applicationStatusFetch={onRefetchApplication}
            />
          )}
          {message?.receipt_status === "Rejected" ? (
            ""
          ) : message?.receipt_status === "Approved" ? (
            <p>
              Admission confirmation is in process. Payment receipt accepted.
            </p>
          ) : (
            <p>
              Admission confirmation is in process. Payment receipt is being
              requested. Stay updated
            </p>
          )}
          <section>
            <h6 className={style.online_payment_note}>
              {t("online_payment_note")}
            </h6>
            {message?.receipt_status === "Rejected" && (
              <button
                className={style.rejected_btn}
                onClick={() => setOpenForm((pre) => !pre)}
              >
                {t("re_apply_for_receipt")}
              </button>
            )}
            {message?.receipt_status === "Approved" && (
              <DownloadReceipt receiptId={message?.receipt} />
            )}
            {message?.receipt_status === "Requested" && (
              <button className={style.requested_btn}>{t("requested")}</button>
            )}
          </section>
        </>
      ) : (
        <div className={style.itemrow}>
          <div
            className={`${style.itembtn} ${style.blue}`}
            style={{
              width: "100%",
            }}
            onClick={onBankValidate}
          >
            Pay Admission Fees
          </div>
        </div>
      )}
      {structureId && (
        <ApplicationPreviewDetail
          structureId={structureId}
          setStructureId={setStructureId}
          viewAs="HOSTEL_SEARCH"
        />
      )}
      <StudentHostelApplicationPayment
        addDisplay={statusQuery ? true : false}
        hideModal={() => setStatusQuery("")}
        statusQuery={statusQuery}
        onRefetchApplication={onRefetchApplication}
        isFeesEditable
      />
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />
      {disabled && <QLoader />}
    </>
  );
};

export default HostelSecondNotification;

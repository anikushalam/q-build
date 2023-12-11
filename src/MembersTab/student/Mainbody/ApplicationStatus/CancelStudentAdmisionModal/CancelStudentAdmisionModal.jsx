import React from "react";
import style from "./CancelStudentAdmisionModal.module.css";
import { Dialog } from "@mui/material";
import { useState } from "react";
import { useCancelStudentApplicationStatus } from "../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../Loader/QLoader";
import {
  useCancelHostelApplicationByStudent,
  useCancelRenewalByStudent,
} from "../../../../../hooks/member_tab/hostel-api";

function CancelStudentAdmisionModal({
  cancelStatus,
  hideModal,
  cancelData,
  fetch,
  setCancelStatus,
  viewAs,
}) {
  const [cancel, setCancel] = useState("");
  const [cancelApplication] = useCancelStudentApplicationStatus();
  const [cancelHostelApplicationByStudent] =
    useCancelHostelApplicationByStudent();
  const [cancelRenewalByStudent] = useCancelRenewalByStudent();

  const [disabled, setDisabled] = useState(false);

  const CancelOffline = () => {
    if (
      cancelData?._id &&
      cancelData?.applicationId &&
      cancelData?.studentId &&
      cancel === "Cancel"
    ) {
      setDisabled(true);
      if (viewAs === "RENEWAL") {
        cancelRenewalByStudent({
          rid: cancelData?._id,
          sid: cancelData?.renewal_student?._id,
        })
          .then(() => {
            fetch();
            setCancelStatus(false);
            setDisabled(false);
          })
          .catch({});
      } else {
        if (cancelData?.flow_status === "Hostel Application") {
          cancelHostelApplicationByStudent({
            status: cancelData?._id,
            appId: cancelData?.applicationId?._id,
            sid: cancelData?.studentId,
          })
            .then(() => {
              // if (res.data.cancel_status) {
              fetch();
              setCancelStatus(false);
              setDisabled(false);
              // }
            })
            .catch({});
        } else {
          cancelApplication({
            status: cancelData?._id,
            appId: cancelData?.applicationId?._id,
            sid: cancelData?.studentId,
          })
            .then((res) => {
              if (res.data.cancel_status) {
                fetch();
                setCancelStatus(false);
                setDisabled(false);
              }
            })
            .catch({});
        }
      }
    }
  };

  // console.info("saafsdfhgjksd", cancelData);

  return (
    <>
      {!disabled && (
        <Dialog open={cancelStatus} onClose={() => hideModal(false)}>
          <div className={`${style.addDisplay} ${style.cancelModal}`}>
            <div className={style.title}>Not Accept Application ?</div>
            <div className={style.content}>
              <div className={style.payCard}>
                <label htmlFor="Cancel" className={style.payLabel}>
                  Type <i>Cancel</i> for cancel ?
                </label>
                <input
                  type="text"
                  name="cancel"
                  className={style.payInput}
                  required
                  placeholder="Type Cancel here..."
                  id="Cancel"
                  onChange={(e) => setCancel(e.target.value)}
                />
                {cancel === "Cancel" ? (
                  <div className={style.btn} onClick={CancelOffline}>
                    Cancel
                  </div>
                ) : (
                  <div className={style.btn2}>Cancel</div>
                )}
              </div>
            </div>
          </div>
        </Dialog>
      )}
      {disabled && <QLoader />}
    </>
  );
}

export default CancelStudentAdmisionModal;

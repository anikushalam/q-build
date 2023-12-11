import React from "react";
import style from "../Standerds/Standerds.module.css";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDepartmentBacklogOneStudentClearDropout } from "../../../../../../hooks/member_tab/department-api";
import { useState } from "react";
import QLoader from "../../../../../../Loader/QLoader";
import { imageShowUrl } from "../../../../../../services/BaseUrl";

function BacklogStudentModal({
  hideModal,
  open,
  studentId,
  subjectMasterId,
  onRefetchWhenConfirm,
}) {
  const { t } = useTranslation();
  const [status, setStatus] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [studentClearDropout] = useDepartmentBacklogOneStudentClearDropout();
  const onActionStudent = () => {
    if (status) {
      setDisabled((pe) => !pe);
      studentClearDropout({
        sid: studentId?._id,
        smid: subjectMasterId,
        status: status,
      })
        .then(() => {
          // console.info("this is asfjsfdbga", res);
          onRefetchWhenConfirm();
          setDisabled((pe) => !pe);
          hideModal(false);
        })
        .catch({});
    }
  };
  // console.info("dsdgdhjssdf", studentId);
  return (
    <Dialog open={open} onClose={() => hideModal(false)}>
      <div className={style.studentModal}>
        <div
          className={style.standerdItem}
          style={{ borderTopLeftRadius: "0", borderTopRightRadius: "0" }}
        >
          <div className={style.standerdsleft}>
            <div className={style.studentImgcontainer}>
              <img
                className={style.studentImg}
                src={
                  studentId?.photoId !== "1"
                    ? `${imageShowUrl}/${studentId?.studentProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
                alt="student"
              />
            </div>
            <div className={style.standerdsright}>
              <h6 className={style.standerdsh6}>{`${
                studentId?.studentFirstName
              } ${studentId?.studentMiddleName || ""} ${
                studentId?.studentLastName
              }`}</h6>
              <p className={style.studentp1}>
                {studentId?.batches?.batchName || ""}
              </p>
            </div>
          </div>
          <p className={style.studentRightp}>
            {" "}
            {studentId?.studentClass?.className}{" "}
            {studentId?.studentClass?.classTitle}
          </p>
        </div>

        <div className={style.modalbody}>
          <div className={style.backItem} onClick={() => setStatus("Clear")}>
            <img
              src="/images/department/clear_backlog.svg"
              alt="clear backlog"
            />
            <div className={style.backItemRight}>
              <h6>{t("clr_backlog")}</h6>
              <p>{t("have_passed")}</p>
            </div>
          </div>

          <div className={style.backItem} onClick={() => setStatus("Dropout")}>
            <img src="/images/department/dropout.svg" alt="clear backlog" />
            <div className={style.backItemRight}>
              <h6>{t("dropout")}</h6>
              <p>{t("either")}</p>
            </div>
          </div>

          <div className={style.confirmbutton} onClick={onActionStudent}>
            {t("confirm")}
          </div>
        </div>
      </div>
      {disabled && <QLoader />}
    </Dialog>
  );
}

export default BacklogStudentModal;

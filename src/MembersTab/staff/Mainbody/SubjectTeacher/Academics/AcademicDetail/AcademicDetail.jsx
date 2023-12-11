import React, { useState } from "react";
import style from "../Academics.module.css";
import AcademicHeader from "./AcademicHeader";
import { useFileUpload } from "../../../../../../hooks/authentication-api";
import { useOneSubjectExcelUpload } from "../../../../../../hooks/member_tab/subject-api";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QLoader from "../../../../../../Loader/QLoader";
import AllAcademicChapter from "./AllAcademicChapter";
import AcademicEditTime from "./AcademicEditTime";

const AcademicDetail = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [oneSubjectExcelUpload] = useOneSubjectExcelUpload();
  const [editCount, setEditCount] = useState(false);

  const onExcelFileUpload = (e) => {
    if (getQuery.state?.isView === "SUBJECT_TEACHER") {
      if (e.target.files?.length && getQuery.state?.subjectId) {
        setDisabled(true);
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        oneFileUpload({
          fileUpload: formData,
        })
          .then((res) => {
            if (res.data?.imageKey) {
              oneSubjectExcelUpload({
                sid: getQuery.state?.subjectId,
                excelFile: {
                  excel_file: res.data?.imageKey,
                },
              })
                .then(() => {
                  setDisabled(false);
                })
                .catch({});
            } else {
              setDisabled(false);
            }
          })
          .catch({});
      }
    } else {
      if (e.target.files?.length && getQuery.state?.sid) {
        setDisabled(true);
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        oneFileUpload({
          fileUpload: formData,
        })
          .then((res) => {
            if (res.data?.imageKey) {
              oneSubjectExcelUpload({
                sid: getQuery.state?.sid,
                excelFile: {
                  excel_file: res.data?.imageKey,
                },
              })
                .then(() => {
                  setDisabled(false);
                })
                .catch({});
            } else {
              setDisabled(false);
            }
          })
          .catch({});
      }
    }
  };
  const onEditToggle = () => {
    setEditCount((pre) => !pre);
  };

  return (
    <>
      <div
        className={
          ["INSTITUTE", "STUDENT", "SUBJECT_TEACHER"]?.includes(
            getQuery.state?.isView
          )
            ? style.subject_academic_container
            : style.academic_container
        }
        style={
          getQuery.state?.isView === "INSTITUTE"
            ? {
                borderTopRightRadius: "0",
                borderTopLeftRadius: "0",
                marginTop: "1rem",
              }
            : null
        }
      >
        {["INSTITUTE", "SUBJECT_TEACHER"]?.includes(getQuery.state?.isView) ? (
          <div className={style.subject_academic_title}>
            <h6>{getQuery.state?.subjectName ?? t("academics_teachings")}</h6>
            <div className={style.record_lecture}>
              <h6 className={style.add_record_lecture} onClick={onEditToggle}>
                {t("edit_academic")}
              </h6>
              <label
                className={style.class_header_info_add_student}
                htmlFor="uploadExcel"
              >
                <img
                  src="/images/member_tab/subject/subject-excel-icon.svg"
                  alt="excel icon"
                  style={{
                    cursor: "pointer",
                  }}
                />
              </label>
            </div>
          </div>
        ) : ["ADMINISTRATOR"]?.includes(getQuery.state?.isView) ? null : (
          <div className={style.academic_title}>
            <div className={style.academic_title_text}>
              <img
                src="/images/arrow-left-fees-icon.svg"
                alt="back"
                onClick={() => navigate(-1)}
              />
              <h6>{getQuery.state?.subjectName ?? t("academics_teachings")}</h6>
            </div>
            {/* <img
              src="/images/member_tab/subject/subject-excel-icon.svg"
              alt="excel-icon"
            /> */}
          </div>
        )}
        <input
          type="file"
          id="uploadExcel"
          accept=".xlsx"
          onChange={onExcelFileUpload}
          style={{
            display: "none",
          }}
        />
        <BorderBottom
          customStyle={{
            width: "100%",
            marginBottom: "0.7rem",
          }}
        />

        <AcademicHeader
          sid={getQuery.state?.subjectId ?? getQuery.state?.sid}
        />

        <AllAcademicChapter
          sid={getQuery.state?.subjectId ?? getQuery.state?.sid}
          isView={getQuery.state?.isView}
          isSubType={getQuery.state?.isSubType}
        />
      </div>
      {disabled && <QLoader />}
      {editCount && (
        <AcademicEditTime
          onClose={onEditToggle}
          sid={getQuery.state?.subjectId ?? getQuery.state?.sid}
        />
      )}
    </>
  );
};

export default AcademicDetail;

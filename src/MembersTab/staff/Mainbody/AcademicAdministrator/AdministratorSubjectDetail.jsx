import React, { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import AcademicAdministratorTab from "./AcademicAdministratorTab";
import AcademicSubjectSetting from "./AcademicSubjectSetting";
import AcademicDetail from "../SubjectTeacher/Academics/AcademicDetail/AcademicDetail";
import { useFileUpload } from "../../../../hooks/authentication-api";
import { useOneSubjectExcelUpload } from "../../../../hooks/member_tab/subject-api";
import QLoader from "../../../../Loader/QLoader";
import { useTranslation } from "react-i18next";
import style from "./AcademicAdministrator.module.css";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";

const AdministratorSubjectDetail = ({ carryParentState }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [searchParams] = useSearchParams();

  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [oneSubjectExcelUpload] = useOneSubjectExcelUpload();

  const onExcelFileUpload = (e) => {
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
  };
  return (
    <>
      <div
        className={style.subject_academic_title}
        style={{
          marginBottom: "1rem",
        }}
      >
        <h6>
          {" "}
          {t("subject_name")}
          {" : "}
          {getQuery.state?.subjectName ?? t("academics_teachings")}
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
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "0.5rem",
        }}
      />
      <AcademicAdministratorTab
        carryParentState={carryParentState}
        isView="SUBJECT"
      />

      {searchParams.get("n") === "setting" ? (
        <AcademicSubjectSetting sid={getQuery.state?.subjectId} />
      ) : (
        <AcademicDetail />
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
      {disabled && <QLoader />}
    </>
  );
};

export default AdministratorSubjectDetail;

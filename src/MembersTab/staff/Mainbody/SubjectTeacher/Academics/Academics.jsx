import React, { useState } from "react";
import style from "./Academics.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import SubjectDailyUpdate from "./SubjectDailyUpdate";
// import { useFileUpload } from "../../../../../hooks/authentication-api";
// import { useOneSubjectExcelUpload } from "../../../../../hooks/member_tab/subject-api";
// import QLoader from "../../../../../Loader/QLoader";
import AddAcademicRecord from "./AddAdcemicRecord/AddAcademicRecord";
import AcademicEditTime from "./AcademicDetail/AcademicEditTime";
import { useParams, Link } from "react-router-dom";
const Academics = ({ sid, carryParentState, isDepartment }) => {
  const { t } = useTranslation();
  const params = useParams();
  // const [disabled, setDisabled] = useState(false);
  const [addRecord, setAddRecord] = useState(false);
  const [editCount, setEditCount] = useState(false);
  const [reftechStatus, setReftechStatus] = useState(false);
  // const [oneFileUpload] = useFileUpload();
  // const [oneSubjectExcelUpload] = useOneSubjectExcelUpload();

  // const onExcelFileUpload = (e) => {
  //   if (e.target.files?.length && sid) {
  //     setDisabled(true);
  //     const formData = new FormData();
  //     formData.append("file", e.target.files[0]);
  //     oneFileUpload({
  //       fileUpload: formData,
  //     })
  //       .then((res) => {
  //         if (res.data?.imageKey) {
  //           oneSubjectExcelUpload({
  //             sid: sid,
  //             excelFile: {
  //               excel_file: res.data?.imageKey,
  //             },
  //           })
  //             .then(() => {
  //               setDisabled(false);
  //             })
  //             .catch({});
  //         } else {
  //           setDisabled(false);
  //         }
  //       })
  //       .catch({});
  //   }
  // };

  const onRecordToggle = () => {
    setAddRecord((pre) => !pre);
  };
  const onEditToggle = () => {
    setEditCount((pre) => !pre);
  };

  const onRefetch = () => {
    setReftechStatus(true);
  };
  return (
    <>
      <div className={style.subject_academic_container}>
        <div className={style.subject_academic_title}>
          <h6>{t("academics_teachings")}</h6>
          <div className={style.subject_academic_link}>
            {isDepartment === "CLASS_TEACHER" ? (
              <Link
                to={`/q/${params.username}/member/class/${params.cname}?a=subject-academic-detail`}
                state={{
                  ...carryParentState,
                  subjectId: sid,
                  isView: "DEPARTMENT_HEAD",
                }}
              >
                <h6
                  className={style.add_record_lecture}
                  style={{
                    margin: "0",
                  }}
                >
                  {t("view_academic_detail")}
                </h6>
              </Link>
            ) : isDepartment === "DEPARTMENT_HEAD" ? (
              <Link
                to={`/q/${params.username}/member/department/${params.deptname}?a=subject-academic-detail`}
                state={{
                  ...carryParentState,
                  subjectId: sid,
                  isView: "DEPARTMENT_HEAD",
                }}
              >
                <h6
                  className={style.add_record_lecture}
                  style={{
                    margin: "0",
                  }}
                >
                  {t("view_academic_detail")}
                </h6>
              </Link>
            ) : (
              <>
                <Link
                  to={`/q/${params.username}/member/subject/${params.sname}?a=subject-academic`}
                  state={{
                    ...carryParentState,
                    subjectId: sid,
                    isView: isDepartment
                      ? "DEPARTMENT_HEAD"
                      : "SUBJECT_TEACHER",
                    isSubType: "SUBJECT_TEACHER_INSTITUTE",
                  }}
                >
                  <h6
                    className={style.add_record_lecture}
                    style={{
                      margin: "0",
                    }}
                  >
                    {t("view_academic_detail")}
                  </h6>
                </Link>
                {/* <label htmlFor="uploadExcel">
                  <img
                    src="/images/member_tab/subject/subject-excel-icon.svg"
                    alt="excel icon"
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </label> */}
              </>
            )}
          </div>
        </div>
        {/* <input
          type="file"
          id="uploadExcel"
          accept=".xlsx"
          onChange={onExcelFileUpload}
          style={{
            display: "none",
          }}
        /> */}
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.7rem",
            marginBottom: "0.7rem",
          }}
        />
        {isDepartment ? null : (
          <div className={style.record_lecture}>
            <h6 className={style.add_record_lecture} onClick={onRecordToggle}>
              {t("record_lecture_teachings")}
            </h6>
            {/* <h6 className={style.add_record_lecture} onClick={onEditToggle}>
              {t("edit_academic")}
            </h6> */}
          </div>
        )}
        {addRecord && (
          <AddAcademicRecord
            onClose={onRecordToggle}
            sid={sid}
            onRefetch={onRefetch}
          />
        )}
        {editCount && <AcademicEditTime onClose={onEditToggle} sid={sid} />}
        <SubjectDailyUpdate
          sid={sid}
          reftechStatus={reftechStatus}
          setReftechStatus={setReftechStatus}
          isDepartment={isDepartment}
        />
      </div>
      {/* {disabled && <QLoader />} */}
    </>
  );
};

export default Academics;

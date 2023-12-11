import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../StaffTab/InstituteSetting/InstituteSetting.module.css";
import Card from "../Dashboard/InsDashboard/Components/Mainbody/SidebarRight/components/Card";
import { useFileUpload } from "../hooks/authentication-api";
import {
  useAddStaffExcelByInstitute,
  useExcelDeprtment,
} from "../hooks/institute/institute-staff-student-api";
import { useSelector } from "react-redux";
import QLoader from "../Loader/QLoader";
import { useAddUnapprovedStudentExcelByInstitute } from "../Department/Institute/Components/DepartmentApi/depart-api";
import { useScholarShipExcelByInstitute } from "../hooks/member_tab/admission-api";

const InstituteExcelImportTab = ({ onActive }) => {
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange.id);
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [excelDeprtment] = useExcelDeprtment();
  const [addStaffExcelByInstitute] = useAddStaffExcelByInstitute();
  const [scholarShipExcelByInstitute] = useScholarShipExcelByInstitute();
  const [addUnapprovedStudentExcelByInstitute] =
    useAddUnapprovedStudentExcelByInstitute();
  const onExcelFileUpload = (e) => {
    if (e.target.files?.length) {
      setDisabled(true);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            excelDeprtment({
              id: ids,
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

  const onExcelFileUploadStudent = (e) => {
    if (e.target.files?.length) {
      setDisabled(true);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            addUnapprovedStudentExcelByInstitute({
              id: ids,
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
  const onExcelFileUploadStudentScholarship = (e) => {
    if (e.target.files?.length) {
      setDisabled(true);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            scholarShipExcelByInstitute({
              id: ids,
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
  const onExcelFileUploadStaff = (e) => {
    if (e.target.files?.length) {
      setDisabled(true);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            addStaffExcelByInstitute({
              id: ids,
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
    <div
      className={style.institute_setting_tab}
      style={{
        marginLeft: "2.5rem",
      }}
    >
      <label htmlFor="uploadDepartmentExcel">
        <div className={style.institute_admission}>
          <Card
            name={t("department_excel")}
            img="/images/member_tab/department/department-excel-icon.svg"
            customStyle={{
              height: "100%",
            }}
          />
          <div className={style.institute_admission_preview}>
            {t("preview")}
          </div>
        </div>
      </label>

      <div
        className={style.institute_admission}
        onClick={() => onActive("CLASS_MASTER")}
      >
        <Card
          name={t("class_master_excel")}
          img="/images/member_tab/class/class-master-excel-icon.svg"
          customStyle={{
            height: "100%",
          }}
        />
        <div className={style.institute_admission_preview}>{t("preview")}</div>
      </div>
      <div
        className={style.institute_admission}
        onClick={() => onActive("SUBJECT_MASTER")}
      >
        <Card
          name={t("subject_master_excel")}
          img="/images/member_tab/subject/subject-master-excel-icon.svg"
          customStyle={{
            height: "100%",
          }}
        />
        <div className={style.institute_admission_preview}>{t("preview")}</div>
      </div>
      <div
        className={style.institute_admission}
        onClick={() => onActive("ONLY_CLASS")}
      >
        <Card
          name={t("only_class_excel")}
          img="/images/member_tab/class/class-excel-icon.svg"
          customStyle={{
            height: "100%",
          }}
        />
        <div className={style.institute_admission_preview}>{t("preview")}</div>
      </div>
      <div
        className={style.institute_admission}
        onClick={() => onActive("ONLY_SUBJECT")}
      >
        <Card
          name={t("only_subject_excel")}
          img="/images/member_tab/subject/subject-institute-excel-icon.svg"
          customStyle={{
            height: "100%",
          }}
        />
        <div className={style.institute_admission_preview}>{t("preview")}</div>
      </div>
      <label htmlFor="uploadStudentExcel">
        <div className={style.institute_admission}>
          <Card
            name={t("staff_excel")}
            img="/images/member_tab/subject/subject-institute-excel-icon.svg"
            customStyle={{
              height: "100%",
            }}
          />
          <div className={style.institute_admission_preview}>
            {t("preview")}
          </div>
        </div>
      </label>
      <label htmlFor="uploadStaffExcel">
        <div className={style.institute_admission}>
          <Card
            name={t("unapproved_student_excel")}
            img="/images/member_tab/subject/subject-institute-excel-icon.svg"
            customStyle={{
              height: "100%",
            }}
          />
          <div className={style.institute_admission_preview}>
            {t("preview")}
          </div>
        </div>
      </label>
      <label htmlFor="uploadStudentScholarExcel">
        <div className={style.institute_admission}>
          <Card
            name={t("student_scholarship_excel")}
            img="/images/member_tab/subject/subject-institute-excel-icon.svg"
            customStyle={{
              height: "100%",
            }}
          />
          <div className={style.institute_admission_preview}>
            {t("preview")}
          </div>
        </div>
      </label>
      <input
        type="file"
        id="uploadDepartmentExcel"
        accept=".xlsx"
        onChange={onExcelFileUpload}
        style={{
          display: "none",
        }}
      />
      <input
        type="file"
        id="uploadStudentExcel"
        accept=".xlsx"
        onChange={onExcelFileUploadStudent}
        style={{
          display: "none",
        }}
      />
      <input
        type="file"
        id="uploadStaffExcel"
        accept=".xlsx"
        onChange={onExcelFileUploadStaff}
        style={{
          display: "none",
        }}
      />
      <input
        type="file"
        id="uploadStudentScholarExcel"
        accept=".xlsx"
        onChange={onExcelFileUploadStudentScholarship}
        style={{
          display: "none",
        }}
      />
      {disabled && <QLoader />}
    </div>
  );
};

export default InstituteExcelImportTab;

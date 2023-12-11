import React, { useState } from "react";
import { imageShowUrl } from "../../../services/BaseUrl";
import BlueLineBar from "../../../Sidebar/BlueLineBar";
import style from "./ClassProfile.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useFileUpload } from "../../../hooks/authentication-api";
import { useAddStudentByXlSX } from "../Components/DepartmentApi/depart-api";
import QLoader from "../../../Loader/QLoader";
const ClassHeader = ({ classes, bid }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [addStudentByXlSX] = useAddStudentByXlSX();

  const onExcelFileUpload = (e) => {
    // console.info("this is excel up,lsd", e.target.files[0]);
    setDisabled((pre) => !pre);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        if (res.data?.imageKey) {
          addStudentByXlSX({
            cid: classes?._id,
            excelFile: {
              excel_file: res.data?.imageKey,
            },
          })
            .then(() => {
              setDisabled((pre) => !pre);
            })
            .catch({});
        } else {
          setDisabled((pre) => !pre);
        }
      })
      .catch({});
  };
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <BlueLineBar customStyleBlueLine={{ width: "100%" }} />
      <div
        className={style.class_header_container}
        style={{
          width: "100%",
        }}
      >
        <img
          src={
            classes?.cover
              ? `${imageShowUrl}/${classes?.cover}`
              : "/images/profileAndCover/classroom-cover.svg"
          }
          alt="class room background"
          className={style.class_header_image}
        />
        <div className={style.class_header_info}>
          <div className={style.class_header_info_detail}>
            <h4>{classes?.classTitle || ""}</h4>
            <h6>
              {classes?.classHeadTitle || ""}:{" "}
              {`${classes?.classTeacher?.staffFirstName || ""} ${
                classes?.classTeacher?.staffMiddleName
                  ? classes?.classTeacher?.staffMiddleName
                  : ""
              } ${classes?.classTeacher?.staffLastName || ""}`}
            </h6>
            <p>{classes?.batch?.batchName || ""}</p>
          </div>
          <div className={style.class_header_info_bottom}>
            <div className={style.class_header_info_conut}>
              <p>
                <span>{classes?.studentCount || 0}</span> {t("students")}
              </p>
              <p>
                <span>{classes?.subjectCount || 0}</span> {t("subjects")}
              </p>
            </div>
            <Link
              to={"/q/joining"}
              state={{
                formAs: "STUDENT",
                openAs: "INSTITUTE_SIDE",
                classId: classes?._id,
                classMasterId: classes?.masterClassName,
                batchId: bid,
              }}
            >
              <div className={style.class_header_info_add_student}>
                <img src="/images/add-icon.svg" alt="add student icon" />
                <p>{t("add_student")}</p>
              </div>
            </Link>
            <label
              className={style.class_header_info_add_student}
              htmlFor="uploadExcel"
            >
              <img src="/images/upload-xslx-icon.svg" alt="add student icon" />
              <p>{t("upload_excel")}</p>
            </label>
            <input
              type={"file"}
              id="uploadExcel"
              accept=".xlsx"
              onChange={onExcelFileUpload}
              style={{
                display: "none",
              }}
            />
          </div>
        </div>
      </div>
      {disabled && <QLoader />}
    </div>
  );
};

export default ClassHeader;

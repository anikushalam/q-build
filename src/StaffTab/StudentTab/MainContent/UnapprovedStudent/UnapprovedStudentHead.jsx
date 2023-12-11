import React, { useState } from "react";
import style from "../StudentFunctionRow/StudentFunctionRow.module.css";
import QLoader from "../../../../Loader/QLoader";
import { useFileUpload } from "../../../../hooks/authentication-api";
import { useAddUnapprovedStudentExcelByInstitute } from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
const UnapprovedStudentHead = ({ id, children }) => {
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [addUnapprovedStudentExcelByInstitute] =
    useAddUnapprovedStudentExcelByInstitute();
  const onExcelFileUpload = (e) => {
    if (e.target?.files?.length && id) {
      setDisabled((pre) => !pre);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            addUnapprovedStudentExcelByInstitute({
              id: id,
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
    }
  };
  return (
    <>
      <div className={style.exploreParent}>
        <div
          className={style.exploreChild}
          style={{
            width: "100%",
          }}
        >
          <div
            className={style.searchbar}
            style={{
              width: "100%",
            }}
          >
            {children}
            <img alt="img" src="/images/search-dash-icon.svg" />
          </div>
          <div>
            <label className={style.upload_excel_file} htmlFor="uploadExcel">
              <img
                src="/images/upload-xslx-icon.svg"
                alt="add student icon"
                title="Upload unapproved excel file"
              />
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
    </>
  );
};

export default UnapprovedStudentHead;

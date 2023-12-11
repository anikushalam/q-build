import React, { useState } from "react";
import style from "./JoinForm.module.css";
import { useTranslation } from "react-i18next";
import ViewFileDialog from "./ViewFileDialog";
import { fileShowUrl } from "../../../services/BaseUrl";
const JoinFormFileEdit = ({
  labelText,
  name,
  multiple,
  value,
  onChange,
  onClick,
  errorShow,
  acceptType,
  customStyleContainer,
}) => {
  const { t } = useTranslation();
  const [openFile, setOpenFile] = useState("");
  const onViewFile = () => {
    if (!value?.originalName) {
      setOpenFile(value);
    } else {
      if (value?.isPdf) {
        const newWindow = window.open(
          `${fileShowUrl}/${value?.key}`,
          "_blank",
          "noopener,noreferrer"
        );
        if (newWindow) newWindow.opener = null;
      } else {
        setOpenFile(value?.key);
      }
    }
  };
  const onClose = () => {
    setOpenFile("");
  };

  // console.info(value);
  return (
    <>
      <div
        className={style.join_form_container}
        style={{ ...customStyleContainer }}
      >
        <label className={style.join_form_label}>
          {labelText}
          {errorShow && (
            <span style={{ color: "red", marginLeft: "15px" }}>* required</span>
          )}
        </label>
        <div className={style.join_form_file_container}>
          <label
            className={
              value
                ? `${style.join_form_file_choose} ${style.join_form_active_background}`
                : style.join_form_file_choose
            }
            htmlFor={name}
          >
            {t(value !== "" ? "file_chosen" : "chose_file")}
          </label>
          <label
            className={style.join_form_file_choosen}
            onClick={onViewFile}
            style={{ color: "#002BBE", cursor: "pointer" }}
          >
            {value !== ""
              ? value?.originalName
                ? value?.originalName
                : "View"
              : t("no_file_chosen")}
          </label>
        </div>
        <input
          type="file"
          multiple={multiple ? true : false}
          accept={
            acceptType
              ? acceptType
              : "image/*, .doc,.docx, application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          }
          name={name}
          id={name}
          style={{ display: "none" }}
          onChange={onChange}
        />
      </div>
      {openFile && <ViewFileDialog onClose={onClose} keyValue={openFile} />}
    </>
  );
};

export default JoinFormFileEdit;

import React, { useState } from "react";
import ViewFileDialog from "../../../../../JoiningForm/Student/Form/ViewFileDialog";
import style from "./StaffProfile.module.css";

const EachField = ({
  labelText1,
  labelValue1,
  labelText2,
  labelValue2,
  labelFile1,
  labelFile2,
  howManyField,
  customStyleContainer,
  customStyleEachField,
}) => {
  const [openFile, setOpenFile] = useState("");
  const onViewFile = (val) => {
    setOpenFile(val);
  };
  const onClose = () => {
    setOpenFile("");
  };
  return (
    <>
      <div
        className={style.each_field_container}
        style={{ ...customStyleContainer }}
      >
        <div className={style.each_field} style={{ ...customStyleEachField }}>
          <p className={style.each_field_text}>
            {labelText1}
            {` : `}
          </p>
          {labelFile1 ? (
            <h6
              className={style.each_field_text_value}
              style={{ color: "#002BBE", cursor: "pointer" }}
              onClick={() => onViewFile(labelValue1)}
            >
              {labelValue1 ? "View" : "N/A"}
            </h6>
          ) : (
            <h6 className={style.each_field_text_value}>{labelValue1}</h6>
          )}
        </div>
        {howManyField !== 1 && (
          <div className={style.each_field} style={{ ...customStyleEachField }}>
            <p className={style.each_field_text}>
              {labelText2}
              {` : `}
            </p>
            {labelFile2 ? (
              <h6
                className={style.each_field_text_value}
                style={{ color: "#002BBE", cursor: "pointer" }}
                onClick={() => onViewFile(labelValue2)}
              >
                {labelValue2 ? "View" : "N/A"}
              </h6>
            ) : (
              <h6 className={style.each_field_text_value}>{labelValue2}</h6>
            )}
          </div>
        )}
      </div>
      {openFile && <ViewFileDialog onClose={onClose} keyValue={openFile} />}
    </>
  );
};

export default EachField;

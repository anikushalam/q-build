import React from "react";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import style from "../../AdmissionApplicationRequest.module.css";

function ClassCard({ setViewClass, classData, setAllotC, isView }) {
  return (
    <>
      {isView === "ONLY_SUBJECT" ? (
        <div className={style.admission_confirm_class_card}>
          <img
            src={
              classData?.photo
                ? `${imageShowUrl}/${classData?.photo}`
                : "/images/allot-class-icon.svg"
            }
            alt="Class Avatar"
            loading="lazy"
          />
          <div
            className={style.admission_collect_docs}
            style={{
              alignItems: "flex-start",
              marginTop: "0",
            }}
          >
            <h6>{`${classData?.className ?? ""} - ${
              classData?.classTitle ?? ""
            }`}</h6>
          </div>
        </div>
      ) : (
        <div
          className={style.admission_confirm_class_card}
          onClick={() => {
            setViewClass(true);
            setAllotC(classData);
          }}
        >
          <img
            src={
              classData?.photoId !== "1"
                ? `${imageShowUrl}/${classData?.photo}`
                : "/images/allot-class-icon.svg"
            }
            alt="Class Avatar"
            loading="lazy"
          />
          <div
            className={style.admission_collect_docs}
            style={{
              alignItems: "flex-start",
              marginTop: "0",
            }}
          >
            <h6>{`${classData?.className ?? ""} - ${
              classData?.classTitle ?? ""
            }`}</h6>
            {isView === "CLASS_TEACHER" ? null : (
              <div className={style.admission_confirm_class_count}>
                <p>Boys : {classData?.boyCount}</p>
                <p>Girls : {classData?.girlCount}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ClassCard;

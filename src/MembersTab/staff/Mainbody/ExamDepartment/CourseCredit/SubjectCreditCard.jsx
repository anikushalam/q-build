import React, { useState } from "react";
import style from "../ExamDepartment.module.css";
import { useTranslation } from "react-i18next";
import SubjectCreditUpdate from "./SubjectCreditUpdate";
const SubjectCreditCard = ({ sub, onRefetch }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState("");
  return (
    <>
      <div
        className={style.class_container}
        onClick={() => setOpen(sub?._id)}
        style={{
          cursor: "pointer",
        }}
        title="Update subject credit"
      >
        <img
          className={style.oneRowImage}
          // src="/images/backlog-examination.svg"
          src="/images/book-24-icon.svg"
          alt="batch icon"
        />
        <div className={style.class_container_text}>
          <h6>{sub?.subjectName}</h6>
          <p>
            {t("course_credit")} {`: `}
            {sub?.course_credit ?? 0}
          </p>
        </div>
      </div>
      {open && (
        <SubjectCreditUpdate
          onClose={() => setOpen("")}
          sid={open}
          onRefetch={onRefetch}
          courseCredit={sub?.course_credit}
        />
      )}
    </>
  );
};

export default SubjectCreditCard;

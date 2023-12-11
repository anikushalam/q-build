import React from "react";
import style from "./StudentAttendence.module.css";
const StudentSubjectCard = ({ subject, onFilterAttendance, active }) => {
  return (
    <div
      className={
        active
          ? `${style.student_subject_container} ${style.student_subject_container_active}`
          : style.student_subject_container
      }
      title="Select subject and see attandance"
      onClick={() => onFilterAttendance(subject)}
    >
      <img src="/images/book-24-icon.svg" alt="subject icon" />
      <div className={style.student_subject_text}>
        <h6>
          {subject?.subjectName ?? ""}{" "}
          {subject?.subject_category ? `(${subject?.subject_category})` : ""}
          {subject?.selected_batch_query?.batchName ? (
            <span
              style={{
                fontWeight: "400",
                fontSize: "12px",
              }}
            >
              {" "}
              ({subject?.selected_batch_query?.batchName})
            </span>
          ) : null}{" "}
          {subject?.subjectOptional === "Optional" &&
            `(${subject?.subjectOptional})`}
        </h6>
        <p>{`${subject?.subjectTeacherName?.staffFirstName ?? ""} ${
          subject?.subjectTeacherName?.staffMiddleName ?? ""
        } ${subject?.subjectTeacherName?.staffLastName ?? ""}`}</p>
      </div>
    </div>
  );
};

export default StudentSubjectCard;

import React from "react";
import { Link, useParams } from "react-router-dom";

const SubjectDropdown = ({ parentStyle, sid, subject, onClose }) => {
  const params = useParams();

  // console.info("wvsfasvhj,,ssf", subject);
  return (
    <Link
      to={`/q/${params.username}/member/subject/${subject?.subjectName}`}
      state={{
        onClickValue: subject,
        sid: sid,
      }}
      onClick={onClose}
    >
      <div className={parentStyle}>
        <img alt="" src="/images/members/sTeacher-icon.svg" />
        <h6>
          {subject?.subjectName}{" "}
          {/* {subject?.subject_category ? `(${subject?.subject_category})` : ""} */}
          {subject?.selected_batch_query?.batchName ? (
            <span
              style={{
                fontWeight: "400",
                fontSize: "12px",
              }}
            >
              {" "}
              ({subject?.subject_category === "Practical" ? "P:" : "T:"}
              {subject?.selected_batch_query?.batchName})
            </span>
          ) : null}{" "}
          {/* {subject?.subjectOptional === "Optional" &&
            `(${subject?.subjectOptional})`} */}
          {subject?.class?.classTitle} {" - "}
          {subject?.class?.batch?.batchName}
        </h6>
      </div>
    </Link>
  );
};

export default SubjectDropdown;

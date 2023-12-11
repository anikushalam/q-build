import React from "react";
import { useTranslation } from "react-i18next";
import style from "./Assignment.module.css";
import moment from "moment";

const StudentAssignmentCard = ({ assignment }) => {
  const { t } = useTranslation();

  return (
    <div className={style.assignmentCard}>
      <h6 className={style.subject}>
        {assignment?.subject?.subjectName ?? ""}
      </h6>
      <p className={style.title}>{assignment?.assignmentName ?? ""}</p>
      <p className={style.duetime}>
        {t("due_on")} {moment(assignment?.dueDate).format("Do MMM YY")}
      </p>
      <div
        className={`${style.rangecirclestatus}`}
        style={{
          backgroundColor:
            assignment?.assignmentSubmit && assignment?.assignmentSubmitRequest
              ? " #06BB06"
              : !assignment?.assignmentSubmit &&
                assignment?.assignmentSubmitRequest
              ? "#001A72"
              : "#FFC700",
        }}
      ></div>
    </div>
  );
};

export default StudentAssignmentCard;

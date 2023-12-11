import React from "react";
import style from "./SubjectTeacherAssignment.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
function AssignmentListItem({ assignment }) {
  const { t } = useTranslation();
  return (
    <>
      <div className={style.left}>
        <img src="/images/members/assignment.svg" alt="" />
        <div className={style.text}>
          <h6>{assignment?.assignmentName}</h6>
          <p>
            {" "}
            {t("due_date")} :{" "}
            {moment(assignment?.dueDate).format("DD MMM yyyy")}
          </p>
          <p className={style.assignmentCount}>
            {t("submitted")} : {assignment?.submittedCount}/
            {assignment?.totalCount}
          </p>
        </div>
      </div>
    </>
  );
}

export default AssignmentListItem;

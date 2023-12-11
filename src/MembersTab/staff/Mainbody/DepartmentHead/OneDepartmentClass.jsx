import React from "react";
import InstituteClassStudentList from "../../../../Department/Institute/Pages/InstituteClassStudentList";
import { useLocation } from "react-router-dom";
import style from "./staff/StaffRoom.module.css";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
const OneDepartmentClass = () => {
  const getQuery = useLocation();

  return (
    <>
      <h6 className={style.student_heading}>{getQuery.state?.clsName ?? ""}</h6>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <InstituteClassStudentList
        cid={getQuery.state.clsId}
        openAs={"SUBJECT_TEACHER"}
      />
    </>
  );
};

export default OneDepartmentClass;

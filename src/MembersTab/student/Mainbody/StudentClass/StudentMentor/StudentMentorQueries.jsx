import React, { useEffect, useState } from "react";
import { useGetAllMentorQueryStudent } from "../../../../../hooks/member_tab/student-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useTranslation } from "react-i18next";
import style from "../../../../staff/Mainbody/StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";
import StudentAskQuery from "./StudentAskQuery";
import StudentQueryCard from "../../../../staff/Mainbody/DepartmentHead/DepartmentMentor/DepartmentQueries/StudentQueryCard";

const StudentMentorQueries = ({ sid, carryParentState, mid }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [askQuery, setAskQuery] = useState(false);
  const { getAllMentorQueryStudent, getAllMentorQueryStudentRefetch } =
    useGetAllMentorQueryStudent({
      sid: sid,
      skip: !sid,
    });

  useEffect(() => {
    if (sid) {
      setShowingDataLoading(true);
      getAllMentorQueryStudentRefetch();
    }
  }, [sid, getAllMentorQueryStudentRefetch]);

  useEffect(() => {
    if (getAllMentorQueryStudent?.all_query) {
      setShowingDataLoading(false);
    } else if (getAllMentorQueryStudent?.all_query?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
  }, [getAllMentorQueryStudent?.all_query]);

  const onClose = () => {
    setAskQuery((pre) => !pre);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <p className={style.add_new_category} onClick={onClose}>
          {t("ask_your_query")}
        </p>
      </div>
      {getAllMentorQueryStudent?.all_query?.map((query_detail) => (
        <StudentQueryCard
          query_detail={query_detail}
          key={query_detail?._id}
          carryParentState={carryParentState}
        />
      ))}
      {showingDataLoading && <QvipleLoading />}
      {askQuery && (
        <StudentAskQuery
          onRefetch={getAllMentorQueryStudentRefetch}
          onClose={onClose}
          sid={sid}
          mid={mid}
        />
      )}
    </>
  );
};

export default StudentMentorQueries;

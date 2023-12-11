import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useGetSubjectListByStudent } from "../../../../../hooks/member_tab/student-api";
import StudentSubjectCard from "./StudentSubjectCard";
const StudentSubjectList = ({ sid, onFilterAttendance, filterAttendance }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { getSubjectListByStudent, getSubjectListByStudentRefetch } =
    useGetSubjectListByStudent({
      sid: sid,
      skip: !sid,
    });

  useEffect(() => {
    if (sid) getSubjectListByStudentRefetch();
  }, [sid, getSubjectListByStudentRefetch]);
  useEffect(() => {
    if (getSubjectListByStudent?.subjects) setShowingDataLoading(false);

    if (getSubjectListByStudent?.subjects?.length === 0)
      setShowingDataLoading(false);
  }, [getSubjectListByStudent?.subjects]);

  return (
    <>
      <p>{t("all_subjects")}</p>
      <BorderBottom
        customStyle={{
          marginTop: "-0.5rem",
          marginBottom: "0.5rem",
          width: "100%",
        }}
      />
      {getSubjectListByStudent?.subjects?.map((subject) => (
        <StudentSubjectCard
          subject={subject}
          key={subject?._id}
          active={subject?._id === filterAttendance?._id ? true : false}
          onFilterAttendance={onFilterAttendance}
        />
      ))}
      {!getSubjectListByStudent?.subjects?.length && !showingDataLoading && (
        <p>No any subject yet</p>
      )}
      {showingDataLoading && <p>Loading all subjects...</p>}
    </>
  );
};

export default StudentSubjectList;

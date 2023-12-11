import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useStudentTimeTableList } from "../../../../../hooks/member_tab/student-api";
import style from "./StudentAttendence.module.css";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { ClassTimetableCard } from "./TimeTableCard/TimeTableCard";

const StudentTimeTable = ({ cid, timeData }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { studentTimeTable, studentTimeTableRefetch } = useStudentTimeTableList(
    {
      data: {
        cid: cid,
        status: timeData.status,
        date: timeData.date,
      },
      skip: !cid || !timeData.status || !timeData.date,
    }
  );

  useEffect(() => {
    if (cid && timeData.status && timeData.date) studentTimeTableRefetch();
  }, [cid, timeData.date, timeData.status, studentTimeTableRefetch]);
  useEffect(() => {
    if (studentTimeTable?.studentScheduleList) setShowingDataLoading(false);

    if (studentTimeTable?.studentScheduleList?.length === 0)
      setShowingDataLoading(false);
  }, [studentTimeTable?.studentScheduleList]);

  return (
    <>
      <p>{t("class_time_table")}</p>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      {studentTimeTable?.studentScheduleList?.map((schedule, index) => (
        <div key={index} className={style.itemref}>
          <ClassTimetableCard schedule={schedule} />
        </div>
      ))}

      {!studentTimeTable?.studentScheduleList?.length &&
        !showingDataLoading && (
          <div className={style.noData}>
            <img src="/images/nodata.jpg" alt="" />
          </div>
        )}

      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default StudentTimeTable;

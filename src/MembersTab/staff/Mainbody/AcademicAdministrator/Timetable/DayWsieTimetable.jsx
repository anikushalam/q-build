import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../Hostel/Hostel.module.css";
import { useGetDayTimetable } from "../../../../../hooks/member_tab/class-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import AddTimetable from "./AddTimetable";
import TimetableCard from "../../PromoteDepartment/Department/TimetableCard";
import EmptyInfo from "../../../../../Loader/EmptyInfo";
const DayWsieTimetable = ({ clsId, day }) => {
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { getDayTimetable, getDayTimetableRefetch } = useGetDayTimetable({
    data: {
      status: day,
      cid: clsId,
    },
    skip: !clsId,
  });

  useEffect(() => {
    if (clsId) {
      setShowingDataLoading(true);
      getDayTimetableRefetch();
    }
  }, [clsId, day, getDayTimetableRefetch]);

  useEffect(() => {
    if (getDayTimetable?.dayList) {
      setShowingDataLoading(false);
    } else if (getDayTimetable?.dayList?.length === 0)
      setShowingDataLoading(false);
    else {
    }
  }, [getDayTimetable?.dayList]);
  const onClose = () => {
    setAdd((pre) => !pre);
  };

  return (
    <>
      <div className={style.add_container}>
        <p className={style.add_new_category} onClick={onClose}>
          {t("add_time_table")}
        </p>
      </div>
      {getDayTimetable?.dayList?.schedule?.map((table) => (
        <TimetableCard
          table={table}
          key={table?._id}
          clsId={clsId}
          day={day}
          onRefetch={getDayTimetableRefetch}
          tid={getDayTimetable?.dayList?._id}
        />
      ))}
      {add && (
        <AddTimetable
          clsId={clsId}
          onClose={onClose}
          day={day}
          onRefetch={getDayTimetableRefetch}
        />
      )}

      {showingDataLoading && <QvipleLoading status="white" />}
      {!showingDataLoading && !getDayTimetable?.dayList?.schedule?.length && (
        <EmptyInfo
          customStyleContainer={{
            marginTop: "5rem",
            height: "inherit",
          }}
          title={"No time table created yet for this day."}
        />
      )}
    </>
  );
};

export default DayWsieTimetable;

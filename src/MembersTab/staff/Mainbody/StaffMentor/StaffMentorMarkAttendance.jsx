import React, { useEffect, useState } from "react";
import { useGetOneMentorMenteeList } from "../../../../hooks/member_tab/department-api";
import StaffMenteeCard from "./StaffMenteeCard";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import StaffMentorTabsAttendance from "./StaffMentorTabsAttendance";
import style from "../DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useTranslation } from "react-i18next";

const StaffMentorMarkAttendance = ({ mid, onClose, onAddMeeting }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [present, setPresent] = useState([]);
  const [absent, setAbsent] = useState([]);
  const [isVisible, setIsVisible] = useState("PRESENT");
  const { getOneMentorMenteeList, getOneMentorMenteeListRefetch } =
    useGetOneMentorMenteeList({
      data: {
        mid: mid,
        page: 1,
        limit: 1000,
      },
      skip: !mid,
    });
  useEffect(() => {
    if (mid) {
      setShowingDataLoading(true);
      getOneMentorMenteeListRefetch();
    }
  }, [mid, getOneMentorMenteeListRefetch]);

  const onPresentHandler = () => {
    let arr = [];
    for (let i = 0; i < getOneMentorMenteeList?.all_mentees?.length; i++) {
      arr.push(getOneMentorMenteeList?.all_mentees[i]?._id);
    }
    setAbsent(arr);
    setPresent([]);
    setIsVisible("PRESENT");
  };

  useEffect(() => {
    if (getOneMentorMenteeList?.all_mentees) {
      onPresentHandler();
      setShowingDataLoading(false);
    } else if (getOneMentorMenteeList?.all_mentees?.length === 0)
      setShowingDataLoading(false);
    else {
    }
  }, [getOneMentorMenteeList?.all_mentees]);

  const onAbsentHandler = () => {
    let arr = [];
    for (let i = 0; i < getOneMentorMenteeList?.all_mentees?.length; i++) {
      arr.push(getOneMentorMenteeList?.all_mentees[i]?._id);
    }
    setAbsent([]);
    setPresent(arr);
    setIsVisible("ABSENT");
  };

  const onPresent = (val) => {
    if (present?.includes(val)) {
      setPresent((prev) => prev?.filter((id) => id !== val));
      setAbsent((prev) => [...prev, val]);
    } else {
      setPresent((prev) => [...prev, val]);
      setAbsent((prev) => prev?.filter((id) => id !== val));
    }
  };
  const onAbsent = (val) => {
    if (absent?.includes(val)) {
      setAbsent((prev) => prev?.filter((id) => id !== val));
      setPresent((prev) => [...prev, val]);
    } else {
      setAbsent((prev) => [...prev, val]);
      setPresent((prev) => prev?.filter((id) => id !== val));
    }
  };

  const onSave = () => {
    onAddMeeting({ present, absent });
  };
  return (
    <>
      <section
        className={style.seating_modal_title_left}
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div className={style.attendance_text}>
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt=""
          />
          <h6>{t("mark_attendance")}</h6>
        </div>
        <div
          className={style.attendance_next_btn}
          style={{
            marginTop: "0",
            width: "80px",
            padding: "0.5rem",
            height: "auto",
            cursor: "pointer",
          }}
          onClick={onSave}
        >
          {t("add")}
        </div>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "1rem",
        }}
      />
      <StaffMentorTabsAttendance
        onPresentHandler={onPresentHandler}
        onAbsentHandler={onAbsentHandler}
      />
      {getOneMentorMenteeList?.all_mentees?.map((mentee) => (
        <StaffMenteeCard
          mentee={mentee}
          key={mentee?._id}
          viewAs="ATTENDANCE"
          isVisible={isVisible}
          absent={absent}
          present={present}
          onPresent={onPresent}
          onAbsent={onAbsent}
        />
      ))}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default StaffMentorMarkAttendance;

import { useState } from "react";
import style from "./StudentAdmissionFees.module.css";
import { useTranslation } from "react-i18next";
import { useStudentAttendanceCalenderQuery } from "../../../../services/joining/joinApi";
import { useStudentSubjectAttendance } from "../../../../hooks/member_tab/student-api";
import StudentSubjectList from "../../../../MembersTab/student/Mainbody/StudentClass/StudentAttendence/StudentSubjectList";
const StudentProfileAttendance = ({ studentId, openAs, editAs }) => {
  const { t } = useTranslation();
  const [monthState, setMonthState] = React.useState("Month");
  const [filterAttendance, setFilterAttendance] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

  const currentDate = new Date();
  const currentDateLocalFormat = currentDate.toISOString().split("-");
  const month =
    +currentDateLocalFormat[1] > 9
      ? +currentDateLocalFormat[1]
      : `0${+currentDateLocalFormat[1]}`;

  const {
    data: studentCalenderAttendance,
    refetch: studentCalenderAttendanceRefetch,
  } = useStudentAttendanceCalenderQuery(
    {
      sid: studentId,
      month: monthState === "Month" ? month : "",
      year: +currentDateLocalFormat[0],
    },
    { skip: !studentId }
  );

  const { studentSubjectAttendance, studentSubjectAttendanceRefetch } =
    useStudentSubjectAttendance({
      data: {
        sid: studentId,
        month: monthState === "Month" ? month : "",
        year: +currentDateLocalFormat[0],
        subjectId: filterAttendance?._id,
      },
      skip: !filterAttendance?._id || !studentId,
    });

  React.useEffect(() => {
    if (studentId) studentCalenderAttendanceRefetch();
  }, [studentId, monthState, studentCalenderAttendanceRefetch]);

  React.useEffect(() => {
    if (filterAttendance?._id) studentSubjectAttendanceRefetch();
  }, [filterAttendance?._id, monthState, studentSubjectAttendanceRefetch]);
  const radioChangeHandler = (data) => {
    setMonthState(data);
  };

  const onOpenFilter = () => {
    setOpenFilter((pre) => !pre);
  };
  const onFilterAttendance = (val) => {
    if (filterAttendance?._id === val?._id) setFilterAttendance("");
    else setFilterAttendance(val);
    onOpenFilter();
  };

  return (
    <div className={style.student_attendane_container}>
      <div className={style.student_attendance_heading}>
        <h6>
          {filterAttendance
            ? filterAttendance?.subjectName ?? ""
            : t("class_attendance")}
        </h6>
        <img
          src="/images/filter-blue-icon.svg"
          alt="filter icon"
          onClick={onOpenFilter}
          title="Filter by subject"
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className={style.colours}>
        <div
          className={style.monthColours}
          onClick={() => radioChangeHandler("Month")}
        >
          <p>Monthly</p>
          {monthState === "Month" ? (
            <img src="/images/radio-active.svg" alt="" />
          ) : (
            <img src="/images/radio-disabled.svg" alt="" />
          )}
        </div>
        <div
          className={style.monthColours}
          onClick={() => radioChangeHandler("Year")}
        >
          <p>Yearly</p>
          {monthState === "Year" ? (
            <img src="/images/radio-active.svg" alt="" />
          ) : (
            <img src="/images/radio-disabled.svg" alt="" />
          )}
        </div>
      </div>

      <div className={style.percentage}>
        <div className={style.presentcount}>
          <p>Present Count</p>
          <p>
            {filterAttendance
              ? studentSubjectAttendance?.presentArray?.length
              : studentCalenderAttendance?.presentArray?.length}{" "}
            days
          </p>
          <p>
            {filterAttendance
              ? studentSubjectAttendance?.present === "NaN"
                ? 0
                : studentSubjectAttendance?.present
              : studentCalenderAttendance?.present === "NaN"
              ? 0
              : studentCalenderAttendance?.present}{" "}
            %
          </p>
        </div>
        <div className={style.absentcount}>
          <p>Absent Count</p>
          <p>
            {filterAttendance
              ? studentSubjectAttendance?.absentArray?.length
              : studentCalenderAttendance?.absentArray?.length}{" "}
            days
          </p>
          <p>
            {filterAttendance
              ? studentSubjectAttendance?.absent === "NaN"
                ? 0
                : studentSubjectAttendance?.absent
              : studentCalenderAttendance?.absent === "NaN"
              ? 0
              : studentCalenderAttendance?.absent}
            %
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileAttendance;

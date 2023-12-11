import React from "react";
import style from "./StaffAttendence.module.css";
import Calendar from "./Calender/Calender";
import { useTranslation } from "react-i18next";
import { useOneStaffCalenderAttendance } from "../../../../../../hooks/attendance-api";

function StaffAttendence({ sid }) {
  const currentDate = new Date();
  const { t } = useTranslation();
  const currentDateLocalFormat = currentDate.toISOString().split("-");
  const month =
    +currentDateLocalFormat[1] > 9
      ? +currentDateLocalFormat[1]
      : `0${+currentDateLocalFormat[1]}`;

  const [monthState, setMonthState] = React.useState("Month");
  const { staffCalenderAttendance, staffCalenderAttendanceRefetch } =
    useOneStaffCalenderAttendance({
      sid: sid,
      month: monthState === "Month" ? month : "",
      year: +currentDateLocalFormat[0],
    });
  const [presentArr, setPresentArr] = React.useState([]);
  const [absentArr, setAbsentArr] = React.useState([]);
  const [leavesArr, setLeavesArr] = React.useState([]);

  const holidayArr = [];
  // const leavesArr = [];

  React.useEffect(() => {
    if (staffCalenderAttendance) {
      setPresentArr([...staffCalenderAttendance?.presentArray]);
      setAbsentArr([...staffCalenderAttendance?.absentArray]);
      if (staffCalenderAttendance?.leaves) {
        const leav = [];
        for (let dat of staffCalenderAttendance?.leaves) {
          leav.push(...dat.date);
        }
        setLeavesArr(leav);
      }
    }
  }, [staffCalenderAttendance]);

  React.useEffect(() => {
    staffCalenderAttendanceRefetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthState]);
  const radioChangeHandler = (data) => {
    setMonthState(data);
  };

  return (
    <>
      <div className={style.staffAttendence}>
        <div className={style.calendar}>
          <Calendar
            presentArr={presentArr}
            absentArr={absentArr}
            holidayArr={holidayArr}
            leavesArr={leavesArr}
          />

          <div className={style.arrColors}>
            {/* <div className={`${style.clr} ${style.present}`}>Present</div> */}

            <div className={`${style.clr} ${style.absent}`}>{t("absent")}</div>

            <div className={`${style.clr} ${style.holiday}`}>
              {t("holiday_")}
            </div>

            <div className={`${style.clr} ${style.leave}`}>{t("leave")}</div>
          </div>
        </div>

        <div className={style.colours}>
          <div class="form-check" onClick={() => radioChangeHandler("Month")}>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault1">
              {t("monthly")}
            </label>
          </div>
          <div class="form-check" onClick={() => radioChangeHandler("Year")}>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              {t("yearly")}
            </label>
          </div>
        </div>
      </div>

      <div className={style.percentage}>
        <div className={style.presentcount}>
          <p>{t("present_count")}</p>
          <p>
            {staffCalenderAttendance?.presentArray?.length} {t("days")}{" "}
          </p>
          <p>{staffCalenderAttendance?.present}%</p>
        </div>
        <div className={style.absentcount}>
          <p>{t("absent_count")}</p>
          <p>
            {staffCalenderAttendance?.absentArray?.length} {t("days")}
          </p>
          <p>{staffCalenderAttendance?.absent}%</p>
        </div>
      </div>
    </>
  );
}

export default StaffAttendence;

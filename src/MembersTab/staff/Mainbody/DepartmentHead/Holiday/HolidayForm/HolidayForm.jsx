import React, { useState } from "react";
import style from "./HolidayForm.module.css";
import { useTranslation } from "react-i18next";
import Calender from "./Calender/Calender";
import HolidayModal from "./HolidayModal/HolidayModal";
import { specificFormatDate } from "../../../../../../utils/date_convert";
import { useDepartmentCreatedHoliday } from "../../../../../../hooks/member_tab/department-api";
import QLoader from "../../../../../../Loader/QLoader";
function HolidayForm({ onRefetch, did, allHoliday }) {
  const { t } = useTranslation();
  const [clickAdd, setClickAdd] = useState(false);
  const [arr, setArr] = useState([]);
  const [holidayDate, setHolidayDate] = useState([]);
  const [reason, setReason] = useState("");
  const [disabled, setDisabled] = useState(false);

  const [departmentCreatedHoliday] = useDepartmentCreatedHoliday();
  const removeDateArray = (arr) => {
    setHolidayDate(arr);
    setArr(arr);
  };

  const addDateArray = (date) => {
    const curr = [...holidayDate];
    curr?.push(date);
    setHolidayDate(curr);
    setArr((prev) => [...prev, date]);
  };

  const handleReason = (e) => {
    setReason(e.target.value);
  };

  const submitHandler = () => {
    setDisabled(true);
    const newFormatDate = specificFormatDate(holidayDate);
    departmentCreatedHoliday({
      did: did,
      holiday: {
        reason: reason,
        dates: newFormatDate,
      },
    })
      .then(() => {
        onRefetch();
        setReason("");
        setDisabled(false);
      })
      .catch(() => {
        setDisabled(false);
      });
    setArr([]);
  };

  return (
    <div className={style.examForm}>
      <div className={style.formhead}>
        <h6>{t("select_holidays_date")}</h6>
        {reason && holidayDate.length > 0 && (
          <button
            className={style.savedateBtn}
            disabled={disabled}
            onClick={submitHandler}
          >
            {t("save_date")}
          </button>
        )}
      </div>

      <div className={style.formcontent}>
        <Calender
          removeDateArray={removeDateArray}
          dateArr={arr}
          addDateArray={addDateArray}
          allHoliday={allHoliday}
        />
        <div className={style.reasoncontainer}>
          <div className={style.reason} onClick={() => setClickAdd(true)}>
            {t("reason")}
          </div>
        </div>
      </div>
      {clickAdd && (
        <HolidayModal
          clickAdd={clickAdd}
          hideModal={(w) => setClickAdd(w)}
          handleReason={handleReason}
          submitHandler={submitHandler}
          reason={reason}
        />
      )}
      {disabled && <QLoader />}
    </div>
  );
}

export default HolidayForm;

// import { useState } from "react";
// import { Calendar } from "react-multi-date-picker";
// export default function HolidayForm() {
//   const [values, setValues] = useState([
//     new Date(),

//   ]);

//   return (
//     <Calendar
//       multiple
//       value={values}
//       onChange={(newDate) => setValues(newDate)}
//     />
//   );
// }

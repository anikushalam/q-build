import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../FinanceManager/FeesStructure/PopupWrapper";
import style from "../FinanceManager/FeesStructure/FeesStructure.module.css";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import Calender from "./NewLeave/Calender/Calender";
import styleCal from "./NewLeave/NewLeave.module.css";
import { Notfication } from "../../../../validation/Snackbar";

const ChooseLeaveDates = ({
  onClose,
  onGrabDates,
  alradyDates,
  currentTileActive,
  createdBy,
}) => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState([]);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const today = new Date();
  const toDate = `${
    today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()
  }/${
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1
  }/${today.getFullYear()}`;

  useEffect(() => {
    if (alradyDates?.length > 0) {
      setSelectedDate(alradyDates);
    }
  }, [alradyDates]);
  function convertToDate(dateString) {
    return new Date(dateString.split("/").reverse().join("/"));
  }

  const removeDateArray = (arr) => {
    setSelectedDate(arr);
  };

  const addDateArray = (date) => {
    if (+convertToDate(date) >= +convertToDate(toDate))
      setSelectedDate((prev) => [...prev, date]);
  };

  const onSelect = () => {
    // console.info("sfbsdh", currentTileActive?.count, selectedDate?.length);
    if (createdBy === "OWN_PROFILE") {
      onGrabDates(selectedDate);
      onClose();
    } else {
      if (currentTileActive?.count < selectedDate?.length) {
        setNotificationState({
          msg: `You have not sufficient ${currentTileActive?.key}.`,
          run: true,
        });
      } else {
        onGrabDates(selectedDate);
        onClose();
      }
    }
  };
  return (
    <>
      <PopupWrapper onClose={onClose}>
        <div
          className={style.add_category_modal}
          style={{
            width: "35rem",
            minHeight: "10rem",
            height: "fit-content",
          }}
        >
          <section
            className={style.fee_middle_section_container}
            style={{ marginBottom: "1.2rem" }}
          >
            <h6
              style={{
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {t("choose_leave_dates")}
            </h6>

            <BorderBottom
              customStyle={{
                width: "100%",
                marginTop: "0.7rem",
              }}
            />
            <div className={styleCal.calender}>
              <Calender
                dateSelected={selectedDate}
                setSelectedDate={setSelectedDate}
                removeDateArray={removeDateArray}
                addDateArray={addDateArray}
              />

              <div className={styleCal.btncontainer}>
                <div className={styleCal.reasonbtn} onClick={onSelect}>
                  {t("select")}
                </div>
              </div>
            </div>
          </section>
        </div>
      </PopupWrapper>
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />
    </>
  );
};

export default ChooseLeaveDates;

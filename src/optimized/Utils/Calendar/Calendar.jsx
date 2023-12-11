import {
  dayName,
  getCompareDate,
  getCompareToday,
  getYearList,
  monthName,
  useCalendar,
} from "@/Hooks/CustomHooks/use-calendar";
import style from "./Calendar.module.css";
import Modal from "@/Ui/Modal/Modal";
import { assestsUserFinanceUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import dayjs from "dayjs";
import { useCallback, useMemo, useState } from "react";
const Calendar = ({ onClose, date, onDateSelect }) => {
  const {
    selectedDate,
    setSelectedDate,
    getPreviousMonth,
    getNextMonth,
    getSelectedDate,
    generateCalendar,
  } = useCalendar();
  const [step, setStep] = useState("");
  const onDateChoose = (data) => {
    getSelectedDate(data);
    onDateSelect(data);
    onClose();
  };
  const allYear = getYearList();
  const currentYear = useMemo(
    () => allYear.indexOf(selectedDate.getFullYear()),
    [selectedDate, allYear]
  );
  const [yearCount, setYearCount] = useState(0);
  const showYear = useMemo(
    () =>
      allYear.slice(
        currentYear + 12 * yearCount,
        yearCount ? currentYear + 12 * yearCount + 12 : currentYear + 12
      ),
    [allYear, yearCount, currentYear]
  );

  const onMonth = useCallback(() => {
    if (step) setStep("");
    else setStep("MONTH");
  }, [step]);
  const onYear = useCallback(() => {
    if (step) setStep("");
    else setStep("YEAR");
  }, [step]);

  const onChooseMonth = useCallback(
    (value) => {
      setSelectedDate(
        (prev) => new Date(`${value} ${prev.getDate()} ${prev.getFullYear()}`)
      );
      onMonth();
    },
    [onMonth]
  );

  const onChooseYear = useCallback(
    (value) => {
      setSelectedDate(
        (prev) => new Date(`${prev.getMonth() + 1} ${prev.getDate()} ${value}`)
      );
      onYear();
    },
    [onYear]
  );

  const onPrev = () => {
    if (step) {
      if (step === "YEAR") {
        setYearCount((prev) => (prev = prev - 1));
      }
    } else {
      getPreviousMonth();
    }
  };
  const onNext = () => {
    if (step) {
      if (step === "YEAR") {
        setYearCount((prev) => (prev = prev + 1));
      }
    } else {
      getNextMonth();
    }
  };
  return (
    <Modal
      onClose={onClose}
      customBackdropStyle={{
        zIndex: "2000",
      }}
      customOverlayStyle={{
        zIndex: "2000",
      }}
    >
      <div className={style.calendar}>
        <div className={style.calendar_top}>
          <img
            src={`${assestsUserFinanceUrl}/refresh.svg`}
            alt="previous icon"
            onClick={onPrev}
          />
          <h6>
            <span onClick={onMonth}>{dayjs(selectedDate).format("MMMM")}</span>{" "}
            <span onClick={onYear}>{dayjs(selectedDate).format("YYYY")}</span>
          </h6>
          <img
            src={`${assestsUserFinanceUrl}/refresh.svg`}
            alt="next icon"
            onClick={onNext}
          />
        </div>
        {step === "MONTH" ? (
          <div className={style.calendar_month}>
            {monthName.map((name) => (
              <p
                className={
                  dayjs(selectedDate).format("MMMM") === name
                    ? `${style.calendar_month_value} ${style.calendar_month_value_active}`
                    : style.calendar_month_value
                }
                key={name}
                onClick={() => onChooseMonth(name)}
              >
                {name}
              </p>
            ))}
          </div>
        ) : step === "YEAR" ? (
          <div className={style.calendar_month}>
            {showYear?.map((name) => (
              <p
                className={
                  dayjs(selectedDate).format("YYYY") === `${name}`
                    ? `${style.calendar_month_value} ${style.calendar_month_value_active}`
                    : style.calendar_month_value
                }
                key={name}
                onClick={() => onChooseYear(name)}
              >
                {name}
              </p>
            ))}
          </div>
        ) : (
          <div
          // className={style.calendar_content}
          >
            <div className={style.calendar_days}>
              {dayName.map((name) => (
                <p className={style.calendar_days_label} key={name}>
                  {name}
                </p>
              ))}
            </div>
            {Object.values(generateCalendar)?.map((cols) => (
              <div className={style.calendar_days}>
                {cols.map((cl) => (
                  <p
                    className={style.calendar_days_value}
                    key={cl?.date}
                    style={{
                      "--calendar-border": getCompareToday(cl?.date)
                        ? "#123456"
                        : getCompareDate(selectedDate, cl?.date)
                        ? "red"
                        : "",
                    }}
                    onClick={() => onDateChoose(cl?.date)}
                  >
                    {cl?.value}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Calendar;

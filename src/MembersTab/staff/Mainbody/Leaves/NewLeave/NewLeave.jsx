import React from "react";
import { useState } from "react";
import style from "./NewLeave.module.css";
import Calender from "./Calender/Calender";
import ReasonModal from "./ReasonModal/ReasonModal";
import { UpdateStatus } from "../../../../../validation/Snackbar";
import { useStaffLeaveRequestMutation } from "../../../../../services/joining/joinApi";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../../Loader/QLoader";

function NewLeave({ staffId, refetch }) {
  const { t } = useTranslation();
  const [staffLeaveData] = useStaffLeaveRequestMutation();
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedReason, setSelectedReason] = useState("");
  const [addDisplay, setAddDisplay] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [toast, setToast] = useState(false);
  const [vmessage, setvMessage] = useState("");

  const today = new Date();
  const toDate = `${
    today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()
  }/${
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1
  }/${today.getFullYear()}`;

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

  const sendRequest = () => {
    setAddDisplay(false);
    setDisabled((pre) => !pre);
    staffLeaveData({
      sid: staffId && staffId,
      LeaveData: {
        reason: selectedReason,
        dates: selectedDate,
      },
    })
      .then((res) => {
        if (res.data) {
          setvMessage("Successfully Submitted Request");
          setToast(true);
          refetch();
          setSelectedDate([]);
          setSelectedReason("");
          setDisabled((pre) => !pre);
        }
      })
      .catch(() => {
        setDisabled((pre) => !pre);
      });
  };

  return (
    <div className={style.newComplain}>
      <UpdateStatus msg={vmessage} run={toast} setRun={setToast} />
      <div className={style.header}>
        <h6 className={style.newComplainheader}>{t("select_leave_date")}</h6>
      </div>

      <div className={style.calender}>
        <Calender
          dateSelected={selectedDate}
          setSelectedDate={setSelectedDate}
          removeDateArray={removeDateArray}
          addDateArray={addDateArray}
        />

        <div className={style.btncontainer}>
          {selectedDate.length > 0 ? (
            <div
              className={style.reasonbtn}
              onClick={() => setAddDisplay(true)}
            >
              {t("reason")}
            </div>
          ) : (
            <div className={`${style.reasonbtn} ${style.disabled}`}>
              {t("reason")}
            </div>
          )}
        </div>
      </div>

      {addDisplay && (
        <ReasonModal
          hideModal={(w) => setAddDisplay(w)}
          addDisplay={addDisplay}
          selectedReason={selectedReason}
          setSelectedReason={setSelectedReason}
          sendRequest={sendRequest}
        />
      )}
      {disabled && <QLoader />}
    </div>
  );
}

export default NewLeave;

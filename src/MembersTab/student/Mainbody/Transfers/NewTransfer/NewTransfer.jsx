import React from "react";
import { useState } from "react";
import style from "./NewTransfer.module.css";
import Calender from "./Calender/Calender";
import ReasonModal from "./ReasonModal/ReasonModal";
import {
  FileNotUpload,
  UpdateStatus,
} from "../../../../../validation/Snackbar";

function NewTransfer() {
  // console.info(complaintData);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedReason, setSelectedReason] = useState("");
  const [addDisplay, setAddDisplay] = useState(false);
  const [toast, setToast] = useState(false);
  const [vmessage, setvMessage] = useState("");
  const [toast2, setToast2] = useState(false);
  const [vmessage2, setvMessage2] = useState("");
  const today = new Date();
  const toDate = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  function convertToDate(dateString) {
    return new Date(dateString.split("/").reverse().join("/"));
  }

  // const removeDateArray = (arr) => {
  //   setSelectedDate(arr);
  // };

  const addDateArray = (date) => {
    if (+convertToDate(date) >= +convertToDate(toDate)) {
      setSelectedDate(date);
    }
  };

  const sendRequest = () => {
    console.info(selectedDate);
  };

  // const handleCompare = () => {
  //   const x = convertToDate(selectedDate);
  //   const y = convertToDate(toDate);

  //   if (+x >= +y) {
  //     sendRequest();
  //   } else {
  //     setvMessage("date before today cannot be selected");
  //     setToast(true);
  //   }

  //   // sendRequest();
  // };

  return (
    <div className={style.newComplain}>
      <UpdateStatus msg={vmessage} run={toast} setRun={setToast} />
      <FileNotUpload msg={vmessage2} run={toast2} setRun={setToast} />
      <div className={style.header}>
        <h6 className={style.newComplainheader}>Select Transfer Date</h6>
      </div>

      <div className={style.calender}>
        <Calender dateSelected={selectedDate} addDateArray={addDateArray} />

        <div className={style.btncontainer}>
          {selectedDate.length > 0 ? (
            <div
              className={style.reasonbtn}
              onClick={() => setAddDisplay(true)}
            >
              Reason
            </div>
          ) : (
            <div className={`${style.reasonbtn} ${style.disabled}`}>Reason</div>
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
    </div>
  );
}

export default NewTransfer;

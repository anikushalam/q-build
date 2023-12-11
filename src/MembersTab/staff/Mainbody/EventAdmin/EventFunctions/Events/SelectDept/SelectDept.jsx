import React, { useState } from "react";
import style from "./SelectClass.module.css";
import { useTranslation } from "react-i18next";

// function SelectClass({ d, sIndex, sectionClick, classClick, sectionIndex }) {
function SelectClass({
  dept,
  indexNumber,
  setClassMasterIndex,
  classMasterIndex,
  eventData,
  setEventData,
  vacancyData,
  setVacancyData,
  storyData,
  setStoryData,
  setClickDept,
  key,
  seminarData,
  setSeminarData,
  status,
}) {
  const [selectedClassMaster, setSelectedClassMaster] = useState(false);
  const { t } = useTranslation();
  const onClassMasterHandler = () => {
    setClassMasterIndex(!selectedClassMaster ? indexNumber : "");
    setSelectedClassMaster((selectedClassMaster) => !selectedClassMaster);
  };

  const onDeptSelectHandler = (val) => {
    if (status === "seminar") {
      const arr = [...seminarData.depart];
      if (arr?.includes(val)) {
        const index = arr?.indexOf(val);
        arr?.splice(index, 1);
      } else {
        arr.push(val);
      }
      setSeminarData({
        ...seminarData,
        depart: arr,
        new_depart: arr,
        // new_depart: arr,
      });
    } else if (status === "prominent") {
      setStoryData({
        ...storyData,
        department: val?._id,
        department_name: val?.dName,
      });
    } else if (status === "vacancy") {
      const arr = [...vacancyData.depart];
      if (arr?.includes(val)) {
        const index = arr?.indexOf(val);
        arr?.splice(index, 1);
      } else {
        arr.push(val);
      }
      setVacancyData({
        ...vacancyData,
        depart: arr,
      });
    } else {
      const arr = [...eventData.depart];
      if (arr?.includes(val)) {
        const index = arr?.indexOf(val);
        arr?.splice(index, 1);
      } else {
        arr.push(val);
      }
      setEventData({
        ...eventData,
        depart: arr,
        new_depart: arr,
        // new_depart: arr,
      });
    }
  };

  return (
    <div>
      {status === "seminar" ? (
        <div
          className={style.standerd}
          onClick={() => onDeptSelectHandler(dept?._id)}
        >
          {dept?.dName}
          {seminarData.depart.includes(dept?._id) ? (
            <img
              className={style.standerdImg}
              src="/images/members/radio-btn-active.svg"
              alt=""
            />
          ) : (
            <img
              className={style.standerdImg}
              src="/images/members/radio-btn.svg"
              alt=""
            />
          )}
        </div>
      ) : status === "vacancy" ? (
        <div
          className={style.standerd}
          onClick={() => onDeptSelectHandler(dept?._id)}
        >
          {dept?.dName}
          {vacancyData.depart.includes(dept?._id) ? (
            <img
              className={style.standerdImg}
              src="/images/members/radio-btn-active.svg"
              alt=""
            />
          ) : (
            <img
              className={style.standerdImg}
              src="/images/members/radio-btn.svg"
              alt=""
            />
          )}
        </div>
      ) : status === "prominent" ? (
        <div
          className={style.standerd}
          onClick={() => onDeptSelectHandler(dept)}
        >
          {dept?.dName}
          {storyData.department.includes(dept?._id) ? (
            <img
              className={style.standerdImg}
              src="/images/members/radio-btn-active.svg"
              alt=""
            />
          ) : (
            <img
              className={style.standerdImg}
              src="/images/members/radio-btn.svg"
              alt=""
            />
          )}
        </div>
      ) : (
        <div
          className={style.standerd}
          onClick={() => onDeptSelectHandler(dept?._id)}
        >
          {dept?.dName}
          {eventData.depart.includes(dept?._id) ? (
            <img
              className={style.standerdImg}
              src="/images/members/radio-btn-active.svg"
              alt=""
            />
          ) : (
            <img
              className={style.standerdImg}
              src="/images/members/radio-btn.svg"
              alt=""
            />
          )}
        </div>
      )}
    </div>
  );
}

export default SelectClass;

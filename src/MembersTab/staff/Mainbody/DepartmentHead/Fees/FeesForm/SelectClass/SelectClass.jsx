import React, { useState } from "react";
import style from "./SelectClass.module.css";
import { useTranslation } from "react-i18next";

// function SelectClass({ d, sIndex, sectionClick, classClick, sectionIndex }) {
function SelectClass({
  classMaster,
  indexNumber,
  setClassMasterIndex,
  classMasterIndex,
  createFees,
  setCreateFees,
  participateData,
  setParticipateData,
  status,
}) {
  const [selectedClassMaster, setSelectedClassMaster] = useState(false);
  const { t } = useTranslation();
  const onClassMasterHandler = () => {
    setClassMasterIndex(!selectedClassMaster ? indexNumber : "");
    setSelectedClassMaster((selectedClassMaster) => !selectedClassMaster);
  };

  const onCLassSelectHandler = (val) => {
    if (status === "participate") {
      const arr = [...participateData.classes];
      if (arr?.includes(val)) {
        const index = arr?.indexOf(val);
        arr?.splice(index, 1);
      } else {
        arr.push(val);
      }
      setParticipateData({ ...participateData, classes: arr });
    } else {
      const arr = [...createFees.ClassId];
      if (arr?.includes(val)) {
        const index = arr?.indexOf(val);
        arr?.splice(index, 1);
      } else {
        arr.push(val);
      }
      setCreateFees({ ...createFees, ClassId: arr });
    }
  };

  // console.info("this class id of list ", createFees);

  return (
    <div>
      <div className={style.standerd} onClick={onClassMasterHandler}>
        {classMaster?.className}
        {classMasterIndex === indexNumber ? (
          <img src="/images/members/radio-btn-active.svg" alt="" />
        ) : (
          <img src="/images/members/radio-btn.svg" alt="" />
        )}
      </div>

      {selectedClassMaster && (
        <div className={style.options}>
          {classMaster?.classDivision?.map((cls) => (
            <div
              key={cls?._id}
              className={
                createFees?.ClassId?.includes(cls?._id)
                  ? `${style.selectoption} ${style.background}`
                  : participateData?.classes?.includes(cls?._id)
                  ? `${style.selectoption} ${style.background}`
                  : style.selectoption
              }
              onClick={() => onCLassSelectHandler(cls?._id)}
            >
              {t("Class")} - {cls?.classTitle}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectClass;

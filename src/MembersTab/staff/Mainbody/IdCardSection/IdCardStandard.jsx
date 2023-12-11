import React, { useEffect, useState } from "react";
import style from "../PromoteDepartment/PromoteDepartment.module.css";
import { useOneViewDepartment } from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useTranslation } from "react-i18next";
import QvipleLoading from "../../../../Loader/QvipleLoading";

const IdCardStandard = ({
  departmentId,
  selectedClasses,
  setState,
  setStudentData,
  setIsZip,
}) => {
  const { t } = useTranslation();
  const [standard, setStandard] = useState([]);
  const [isAll, setIsAll] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { oneDepartment, oneDepartmentRefetch } = useOneViewDepartment({
    did: departmentId,
    skip: !departmentId,
  });

  useEffect(() => {
    if (departmentId) {
      setStandard([]);
      setIsAll(false);
      setShowingDataLoading(true);
      oneDepartmentRefetch();
    }
  }, [departmentId, oneDepartmentRefetch]);

  useEffect(() => {
    if (oneDepartment?.department?.departmentSelectBatch?.classroom) {
      setStandard(
        oneDepartment?.department?.departmentSelectBatch?.classroom ?? []
      );
      setShowingDataLoading(false);
    }
  }, [oneDepartment?.department?.departmentSelectBatch?.classroom]);

  const onSelect = (stu) => {
    setStudentData([]);
    setIsZip(false);
    if (selectedClasses?.includes(stu?._id)) {
      setState((prev) => ({
        ...prev,
        classes: prev.classes?.filter((val) => val !== stu?._id),
        studentCount: prev?.studentCount - stu?.ApproveStudent?.length,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        classes: [...prev.classes, stu?._id],
        studentCount: prev?.studentCount + stu?.ApproveStudent?.length,
      }));
    }
  };

  const allSelect = () => {
    setStudentData([]);
    setIsZip(false);
    let arr = [];
    let sCount = 0;
    for (let cl of oneDepartment?.department?.departmentSelectBatch
      ?.classroom) {
      arr.push(cl?._id);
      sCount += cl?.ApproveStudent?.length;
    }
    setState((prev) => ({
      ...prev,
      classes: arr,
      studentCount: sCount,
    }));
    setIsAll(true);
  };

  const onRemove = () => {
    setState((prev) => ({
      ...prev,
      classes: [],
      studentCount: 0,
    }));
    setIsAll(false);
  };
  return (
    <>
      <div
        className={style.with_search}
        style={{
          width: "100%",
          //   marginTop: "1rem",
          border: "0.4px solid rgba(0, 0, 0, 0.15)",
          borderRadius: "4px",
        }}
      >
        <div
          className={style.search_container_input}
          style={{
            width: "100%",
          }}
        >
          <img
            className={style.searchIcon}
            alt="search icon"
            src="/images/search-dash-icon.svg"
          />
          <input
            type="text"
            placeholder="Search classes..."
            style={{
              width: "100%",
            }}
            // onChange={onSearchEvent}
          />
        </div>
      </div>
      <div className={style.counts}>
        <p>
          {selectedClasses?.length > 0 ? selectedClasses.length : ""} selected
        </p>
        <p style={{ cursor: "pointer" }} onClick={isAll ? onRemove : allSelect}>
          {t(!isAll ? "select_all" : "all_remove")}
        </p>
      </div>
      <div className={style.items}>
        {standard?.map((cls) => (
          <div key={cls?._id} onClick={() => onSelect(cls)}>
            <div className={style.itemm}>
              <div className={style.subItem}>{cls?.classTitle}</div>

              {selectedClasses?.includes(cls?._id) ? (
                <img
                  className={style.checkbox}
                  src="/images/checkbox-icon.svg"
                  alt="icon"
                  //   onClick={handleDeselect}
                />
              ) : (
                <img
                  className={style.checkbox}
                  src="/images/box-icon.svg"
                  alt="icon"
                  //   onClick={handleSelect}
                />
              )}
            </div>
            <BorderBottom
              customStyle={{
                width: "100%",
              }}
            />
          </div>
        ))}
        {showingDataLoading && <QvipleLoading status="white" />}
      </div>
    </>
  );
};

export default IdCardStandard;

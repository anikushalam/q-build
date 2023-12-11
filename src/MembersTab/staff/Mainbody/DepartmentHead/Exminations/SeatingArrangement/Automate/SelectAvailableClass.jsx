import React, { useEffect, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetClassListExam } from "../../../../../../../hooks/member_tab/department-api";
import { debounce } from "lodash";
import style from "../SeatingArrangement.module.css";
import BorderBottom from "../../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";

const SelectAvailableClass = ({
  examId,
  onBack,
  onGrabClass,
  class_list,
  clsList,
  setStudentCount,
}) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [classList, setClassList] = useState([]);
  const [search, setSearch] = useState("");

  const [selectedClasses, setSelectedClasses] = useState(
    class_list?.length ? [...class_list] : []
  );
  const [clsValue, setClsValue] = useState(clsList ?? []);
  const [selectAll, setSelectAll] = useState(false);

  const { getClassListExam, getClassListExamRefetch } = useGetClassListExam({
    data: {
      eid: examId,
      page: page,
      limit: 10,
      search: search,
    },
    skip: !examId,
  });

  React.useEffect(() => {
    if (class_list?.length) {
      setSelectedClasses(class_list?.length ? [...class_list] : []);
    }
    if (clsList) {
      setClsValue(clsList);
    }
  }, [class_list, clsList]);

  useEffect(() => {
    if (examId) {
      setShowingDataLoading(true);
      getClassListExamRefetch();
    }
  }, [examId, page, search, getClassListExamRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (search) {
      setClassList(getClassListExam?.all_classes);
      setShowingDataLoading(false);
    } else {
      if (getClassListExam?.all_classes) {
        setClassList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getClassListExam?.all_classes]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getClassListExam?.all_classes?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getClassListExam?.all_classes?.length === 10) setState(true);
    else setState(false);
  }, [getClassListExam?.all_classes]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );
  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };

  const onSelectAll = () => {
    let arr = [];
    let arr1 = [];
    let stu = 0;
    for (let cls of classList) {
      arr.push(cls?._id);
      arr1.push(cls);
      stu += cls.studentCount;
    }
    setSelectedClasses(arr);
    setClsValue(arr1);
    setStudentCount(stu);
    setSelectAll(true);
  };
  const onRemoveAll = () => {
    setSelectedClasses([]);
    setClsValue([]);
    setSelectAll(false);
    setStudentCount(0);
  };

  const onSelectOne = (staff) => {
    if (selectedClasses?.includes(staff?._id)) {
      setSelectedClasses((prev) => prev?.filter((ids) => ids !== staff?._id));
      setClsValue((prev) => prev?.filter((val) => val?._id !== staff?._id));
      setStudentCount((value) => value - staff?.studentCount);
    } else {
      setSelectedClasses((prev) => [...prev, staff?._id]);
      setClsValue((prev) => [...prev, staff]);
      setStudentCount((value) => value + staff?.studentCount);
    }
  };

  const onNext = () => {
    onGrabClass(selectedClasses, clsValue);
  };

  return (
    <div className={style.seating_modal}>
      <section
        className={style.seating_modal_title_left}
        style={{
          position: "relative",
        }}
      >
        <img src="/images/arrow-left-fees-icon.svg" onClick={onBack} alt="" />
        <h6>{t("select_availbale_classroom")}</h6>
        <button className={style.next_btn} title="Next" onClick={onNext}>
          {t("next")}
        </button>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <div className={style.select_mutliple}>
        <p>
          {selectedClasses?.length ? selectedClasses?.length : ""} {` `}
          {t("selected")}
        </p>
        {selectAll ? (
          <button onClick={onRemoveAll}>{t("remove_all")}</button>
        ) : (
          <button onClick={onSelectAll}>{t("select_all")}</button>
        )}
      </div>
      <div
        className={style.search_container}
        style={{
          marginBottom: "0.5rem",
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
            placeholder={t("search-label")}
            style={{
              width: "100%",
            }}
            onChange={onSearchEvent}
          />
        </div>
      </div>

      {classList?.map((cls, index) =>
        classList?.length === index + 1 ? (
          <div
            className={style.classes_main_container}
            key={cls._id}
            ref={ref}
            onClick={() => onSelectOne(cls)}
          >
            <img src="/images/master-24-grey-icon.svg" alt="classes icon" />
            <div className={style.with_check_container}>
              <div className={style.person_container_text}>
                <h6>{`${cls?.className ?? ""} ${cls?.classTitle ?? ""}`}</h6>
              </div>
              <div className={style.classes_count_container}>
                {selectedClasses?.includes(cls?._id) ? (
                  <>
                    <h6>{selectedClasses?.indexOf(cls?._id) + 1}</h6>
                    <img
                      src="/images/department/blue-check-icon.svg"
                      alt="checkbox icon"
                      title="Select staff"
                    />
                  </>
                ) : (
                  <img
                    src="/images/department/uncheck-icon.svg"
                    alt="checkbox icon"
                    title="Unselect staff"
                  />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div
            className={style.classes_main_container}
            key={cls._id}
            onClick={() => onSelectOne(cls)}
          >
            <img src="/images/master-24-grey-icon.svg" alt="classes icon" />
            <div className={style.with_check_container}>
              <div className={style.person_container_text}>
                <h6>{`${cls?.className ?? ""} ${cls?.classTitle ?? ""}`}</h6>
              </div>
              <div className={style.classes_count_container}>
                {selectedClasses?.includes(cls?._id) ? (
                  <>
                    <h6>{selectedClasses?.indexOf(cls?._id) + 1}</h6>
                    <img
                      src="/images/department/blue-check-icon.svg"
                      alt="checkbox icon"
                      title="Select staff"
                    />
                  </>
                ) : (
                  <img
                    src="/images/department/uncheck-icon.svg"
                    alt="checkbox icon"
                    title="Unselect staff"
                  />
                )}
              </div>
            </div>
          </div>
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default SelectAvailableClass;

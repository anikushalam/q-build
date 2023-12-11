import React, { useEffect, useState } from "react";
import style from "./Exminations.module.css";
import ExamForm from "./ExamFrom/ExamFrom";
import { useDepartmentAllExam } from "../../../../../hooks/member_tab/department-api";
import OneExamDetail from "./ExamFrom/OneExamDetail";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import DepartmentExamCard from "./ExamList/DepartmentExamCard";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../../Loader/EmptyInfo";

function Exminations({ did, bid, carryParentState, instituteId, viewAs }) {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [add, setAdd] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [examList, setExamList] = useState([]);
  const [noAnySearch, setNoAnySearch] = useState(false);
  const { departmentAllExam, departmentAllExamRefetch } = useDepartmentAllExam({
    data: {
      did: did,
      page: 1,
      limit: 20,
    },
    skip: !did,
  });
  useEffect(() => {
    if (did) departmentAllExamRefetch();
  }, [did, departmentAllExamRefetch]);

  useEffect(() => {
    if (departmentAllExam?.exam?.length) {
      setExamList(departmentAllExam?.exam);
      setShowingDataLoading(false);
    } else if (departmentAllExam?.exam?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
  }, [departmentAllExam?.exam]);
  const onToggleAdd = () => {
    setAdd((pre) => !pre);
  };

  const onSearchEvent = (e) => {
    if (e.target.value) {
      const filterExam = departmentAllExam?.exam?.filter((exam) => {
        if (
          exam?.examName?.toLowerCase()?.includes(e.target.value?.toLowerCase())
        ) {
          return exam;
        } else {
          return null;
        }
      });
      if (filterExam?.length === 0) {
        setNoAnySearch(true);
      } else {
        setNoAnySearch(false);
      }
      setExamList(filterExam);
    } else {
      setNoAnySearch(false);
      setExamList(departmentAllExam?.exam);
    }
  };

  return (
    <>
      {(getQuery?.search?.substring(3) === "exam" ||
        getQuery?.search?.substring(3) === "department&n=exam") && (
        <div className={style.exam_container}>
          <div className={style.with_search}>
            <h6>{t("previous_exam_list")}</h6>
            <section className={style.search_container}>
              <div className={style.search_container_input}>
                <img
                  className={style.searchIcon}
                  alt="search icon"
                  src="/images/search-dash-icon.svg"
                />
                <input
                  type="text"
                  placeholder="Search exams..."
                  onChange={onSearchEvent}
                />
              </div>
            </section>
          </div>
          <BorderBottom
            customStyle={{
              marginTop: "0.5rem",
              marginBottom: "0.6rem",
              width: "100%",
            }}
          />

          <div className={style.add_new_container}>
            <p className={style.add_new_exam} onClick={onToggleAdd}>
              {t("create_new_exam")}
            </p>
          </div>
          {examList?.map((exam) => (
            <DepartmentExamCard
              key={exam._id}
              exam={exam}
              carryParentState={carryParentState}
              viewAs={viewAs}
            />
          ))}
          {!showingDataLoading && !departmentAllExam?.exam?.length && (
            <EmptyInfo
              customStyleContainer={{
                marginTop: "9rem",
              }}
              title={"No any exams found"}
              subtitle={"Please make sure you have created exam."}
            />
          )}
          {noAnySearch && (
            <EmptyInfo
              customStyleContainer={{
                marginTop: "9rem",
              }}
              title={"No any search found"}
            />
          )}
          {showingDataLoading && <QvipleLoading />}
        </div>
      )}
      {(getQuery?.search?.substring(3, 16) === "exam&n=detail" ||
        getQuery?.search?.substring(3, 29) ===
          "department&n=exam&n=detail") && (
        <OneExamDetail
          carryParentState={carryParentState}
          instituteId={instituteId}
          viewAs={viewAs}
        />
      )}
      {add && (
        <ExamForm
          onClose={onToggleAdd}
          did={did}
          bid={bid}
          onRefetch={departmentAllExamRefetch}
        />
      )}
    </>
  );
}

export default Exminations;

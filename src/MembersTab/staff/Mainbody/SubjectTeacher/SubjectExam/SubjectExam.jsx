import React, { useEffect, useState } from "react";
import style from "../../DepartmentHead/Exminations/Exminations.module.css";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSubjectAllExam } from "../../../../../hooks/member_tab/subject-api";
import SubjectExamCard from "../SubjectMarks/SubjectExamCard";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import EmptyInfo from "../../../../../Loader/EmptyInfo";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import ExamFrom from "../../DepartmentHead/Exminations/ExamFrom/ExamFrom";
import MarkDetails from "../MarkDetails/MarkDetails";

const SubjectExam = ({ sid, isDepartment, carryParentState, cid, smid }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [add, setAdd] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [examList, setExamList] = useState([]);
  const [noAnySearch, setNoAnySearch] = useState(false);
  const { subjectAllExam, subjectAllExamRefetch } = useSubjectAllExam({
    data: { sid: sid, page: 1, limit: 50 },
    skip: !sid,
  });
  useEffect(() => {
    if (sid) subjectAllExamRefetch();
  }, [sid, subjectAllExamRefetch]);

  useEffect(() => {
    if (subjectAllExam?.subject?.length) {
      setExamList(subjectAllExam?.subject);
      setShowingDataLoading(false);
    } else if (subjectAllExam?.subject?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
  }, [subjectAllExam?.subject]);
  const onToggleAdd = () => {
    setAdd((pre) => !pre);
  };

  const onSearchEvent = (e) => {
    if (e.target.value) {
      const filterExam = subjectAllExam?.subject?.filter((exam) => {
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
      setExamList(subjectAllExam?.subject);
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
            <SubjectExamCard
              key={exam?._id}
              exam={exam}
              carryParentState={carryParentState}
            />
          ))}
          {!showingDataLoading && !subjectAllExam?.subject?.length && (
            <EmptyInfo
              customStyleContainer={{
                marginTop: "9rem",
              }}
              title={"No exams found"}
              subtitle={"Please make sure you have created exam."}
            />
          )}
          {noAnySearch && (
            <EmptyInfo
              customStyleContainer={{
                marginTop: "9rem",
              }}
              title={"No search found"}
            />
          )}
          {showingDataLoading && <QvipleLoading />}
        </div>
      )}
      {getQuery?.search?.substring(3) === "exam-detail" && (
        <MarkDetails
          examView={getQuery.state?.examView}
          sid={sid}
          isDepartment={isDepartment}
        />
      )}

      {add && (
        <ExamFrom
          onClose={onToggleAdd}
          sid={sid}
          onRefetch={subjectAllExamRefetch}
          createdBy="SUBJECT_TEACHER"
          smid={smid}
        />
      )}
    </>
  );
};

export default SubjectExam;

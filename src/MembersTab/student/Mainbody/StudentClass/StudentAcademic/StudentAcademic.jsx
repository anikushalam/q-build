import React, { useEffect, useState } from "react";
import style from "../../../../staff/Mainbody/SubjectTeacher/Academics/Academics.module.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import StudentAcademicTab from "./StudentAcademicTab";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../../Loader/EmptyInfo";
import { useGetStudentDailyUpdate } from "../../../../../hooks/member_tab/student-api";
import { useLocation } from "react-router-dom";
import SubjectDailyUpdateCard from "../../../../staff/Mainbody/SubjectTeacher/Academics/SubjectDailyUpdateCard";
const StudentAcademic = ({ sid, carryParentState }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [dailyList, setDailyList] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { scrollToTop } = useScrollbar();
  const { getStudentDailyUpdate, getStudentDailyUpdateRefetch } =
    useGetStudentDailyUpdate({
      data: {
        sid: sid,
        page: page,
        limit: 10,
        subjectId: getQuery.state?.subjectId ?? "",
      },
      skip: !sid,
    });

  useEffect(() => {
    if (sid) {
      setShowingDataLoading(true);
      getStudentDailyUpdateRefetch();
    }
  }, [sid, page, getQuery.state?.subjectId, getStudentDailyUpdateRefetch]);

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getStudentDailyUpdate?.dailyUpdate) {
      if (page === 1) {
        setDailyList(getStudentDailyUpdate?.dailyUpdate);
      } else {
        setDailyList((prev) =>
          [
            ...new Set(
              [...prev, ...getStudentDailyUpdate?.dailyUpdate].map(
                JSON.stringify
              )
            ),
          ].map(JSON.parse)
        );
      }
      setShowingDataLoading(false);
    } else if (getStudentDailyUpdate?.dailyUpdate?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
    if (getStudentDailyUpdate?.dailyUpdate?.length === 10) setState(true);
    else setState(false);
  }, [getStudentDailyUpdate?.dailyUpdate]);

  return (
    <div className={style.subject_academic_container}>
      <div className={style.subject_academic_title}>
        <h6>{t("academics_teachings")}</h6>
      </div>
      <StudentAcademicTab carryParentState={carryParentState} sid={sid} />

      {dailyList?.map((daily, index) =>
        dailyList?.length === index + 1 ? (
          <div ref={ref} key={daily?._id}>
            <SubjectDailyUpdateCard daily={daily} isView="STUDENT" />
          </div>
        ) : (
          <SubjectDailyUpdateCard
            key={daily?._id}
            daily={daily}
            isView="STUDENT"
          />
        )
      )}
      {!showingDataLoading && !getStudentDailyUpdate?.dailyUpdate?.length && (
        <EmptyInfo
          customStyleContainer={{
            marginTop: "9rem",
          }}
          title={"No daily update found yet."}
        />
      )}
      {showingDataLoading && <QvipleLoading status="white" />}
    </div>
  );
};

export default StudentAcademic;

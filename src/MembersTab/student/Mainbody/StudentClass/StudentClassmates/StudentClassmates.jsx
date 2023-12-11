import React, { useEffect, useState } from "react";
import style from "../../../../staff/Mainbody/SubjectTeacher/Academics/Academics.module.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import { useGetClassmatesByStudent } from "../../../../../hooks/member_tab/student-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../../Loader/EmptyInfo";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import StudentClassmatesCard from "./StudentClassmatesCard";
const StudentClassmates = ({ carryParentState, sid }) => {
  const { t } = useTranslation();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [classmatesList, setClassmatesList] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { scrollToTop } = useScrollbar();
  const { getClassmatesByStudent, getClassmatesByStudentRefetch } =
    useGetClassmatesByStudent({
      data: {
        sid: sid,
        page: page,
        limit: 10,
      },
      skip: !sid,
    });

  useEffect(() => {
    if (sid) {
      setShowingDataLoading(true);
      getClassmatesByStudentRefetch();
    }
  }, [sid, page, getClassmatesByStudentRefetch]);
  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getClassmatesByStudent?.all_mates) {
      if (page === 1) {
        setClassmatesList(getClassmatesByStudent?.all_mates);
      } else {
        setClassmatesList((prev) =>
          [
            ...new Set(
              [...prev, ...getClassmatesByStudent?.all_mates].map(
                JSON.stringify
              )
            ),
          ].map(JSON.parse)
        );
      }
      setShowingDataLoading(false);
    } else if (getClassmatesByStudent?.all_mates?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
    if (getClassmatesByStudent?.all_mates?.length === 10) setState(true);
    else setState(false);
  }, [getClassmatesByStudent?.all_mates]);

  return (
    <div className={style.subject_academic_container}>
      <div className={style.subject_academic_title}>
        <h6>{t("student_classmates")}</h6>
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.5rem",
          marginBottom: "0.7rem",
        }}
      />{" "}
      {classmatesList?.map((classmate, index) =>
        classmatesList?.length === index + 1 ? (
          <div ref={ref} key={classmate?._id}>
            <StudentClassmatesCard classmate={classmate} />
          </div>
        ) : (
          <StudentClassmatesCard key={classmate?._id} classmate={classmate} />
        )
      )}
      {!showingDataLoading && !getClassmatesByStudent?.all_mates?.length && (
        <EmptyInfo
          customStyleContainer={{
            marginTop: "9rem",
          }}
          title={"No classmates found yet."}
        />
      )}
      {showingDataLoading && <QvipleLoading status="white" />}
    </div>
  );
};

export default StudentClassmates;

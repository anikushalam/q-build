import React, { useEffect, useState } from "react";
import style from "./Assignment.module.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import {
  useGetAssignmentByStudent,
  useGetAssignmentCountByStudent,
} from "../../../../../hooks/member_tab/student-api";
import EmptyInfo from "../../../../../Loader/EmptyInfo";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import AssignmentLineBar from "./AssignmentLineBar";
import StudentAssignmentCard from "./StudentAssignmentCard";
import StudentTabChangeLink from "../StudentTabChangeLink";
import { useSearchParams } from "react-router-dom";
import StudentAssignmentDetail from "./StudentAssignmentDetail";
const onPercentageCalculation = (val, total) => {
  return Math.ceil((val / total) * 100);
};

const StudentAssignment = ({ sid, carryParentState }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [assignmentList, setAssignmentList] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { scrollToTop } = useScrollbar();
  const { getAssignmentCountByStudent, getAssignmentCountByStudentRefetch } =
    useGetAssignmentCountByStudent({
      sid: sid,
      skip: !sid,
    });
  const { getAssignmentByStudent, getAssignmentByStudentRefetch } =
    useGetAssignmentByStudent({
      data: {
        sid: sid,
        page: page,
        limit: 10,
      },
      skip: !sid,
    });

  useEffect(() => {
    if (sid) {
      getAssignmentCountByStudentRefetch();
    }
  }, [sid, getAssignmentCountByStudentRefetch]);

  useEffect(() => {
    if (sid) {
      setShowingDataLoading(true);
      getAssignmentByStudentRefetch();
    }
  }, [sid, page, getAssignmentByStudentRefetch]);

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getAssignmentByStudent?.assignments) {
      if (page === 1) {
        setAssignmentList(getAssignmentByStudent?.assignments);
      } else {
        setAssignmentList((prev) =>
          [
            ...new Set(
              [...prev, ...getAssignmentByStudent?.assignments].map(
                JSON.stringify
              )
            ),
          ].map(JSON.parse)
        );
      }
      setShowingDataLoading(false);
    } else if (getAssignmentByStudent?.assignments?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
    if (getAssignmentByStudent?.assignments?.length === 10) setState(true);
    else setState(false);
  }, [getAssignmentByStudent?.assignments]);

  const onRefetch = () => {
    setPage(1);
    getAssignmentByStudentRefetch();
    getAssignmentCountByStudentRefetch();
    // setRefetchStatus(true);
  };

  return (
    <div className={style.student_assignment}>
      {searchParams.get("type") ? (
        <StudentAssignmentDetail onRefetch={onRefetch} />
      ) : (
        <>
          <div className={style.rangeCard}>
            <AssignmentLineBar
              text={t("total")}
              background="#a0a0a0"
              progress={onPercentageCalculation(
                getAssignmentCountByStudent?.totalAssignment,
                getAssignmentCountByStudent?.totalAssignment
              )}
              number={getAssignmentCountByStudent?.totalAssignment}
            />

            <AssignmentLineBar
              text={t("submitted")}
              background="#001A72"
              progress={onPercentageCalculation(
                getAssignmentCountByStudent?.submittedAssignment,
                getAssignmentCountByStudent?.totalAssignment
              )}
              number={getAssignmentCountByStudent?.submittedAssignment}
            />

            <AssignmentLineBar
              text={t("incomplete")}
              background="#FFC700"
              progress={onPercentageCalculation(
                getAssignmentCountByStudent?.incompletedAssignment,
                getAssignmentCountByStudent?.totalAssignment
              )}
              number={getAssignmentCountByStudent?.incompletedAssignment}
            />
            <AssignmentLineBar
              text={t("completed")}
              background="#06BB06"
              progress={onPercentageCalculation(
                getAssignmentCountByStudent?.completedAssignment,
                getAssignmentCountByStudent?.totalAssignment
              )}
              number={getAssignmentCountByStudent?.completedAssignment}
            />
          </div>
          <div className={style.assignmentCards} style={{ width: "100%" }}>
            {assignmentList.map((assignment, index) =>
              assignmentList?.length === index + 1 ? (
                <StudentTabChangeLink
                  key={assignment?._id}
                  carryParentState={{
                    ...carryParentState,
                    aid: assignment?._id,
                  }}
                  activeTab={"assignment&type=detail"}
                  customStyleLink={{
                    width: "48%",
                  }}
                >
                  <div className={style.itemref} ref={ref}>
                    <StudentAssignmentCard assignment={assignment} />
                  </div>
                </StudentTabChangeLink>
              ) : (
                <StudentTabChangeLink
                  key={assignment?._id}
                  carryParentState={{
                    ...carryParentState,
                    aid: assignment?._id,
                  }}
                  activeTab={"assignment&type=detail"}
                  customStyleLink={{
                    width: "48%",
                  }}
                >
                  <div className={style.itemref}>
                    <StudentAssignmentCard assignment={assignment} />
                  </div>
                </StudentTabChangeLink>
              )
            )}
          </div>
          {!showingDataLoading &&
            !getAssignmentByStudent?.assignments?.length && (
              <EmptyInfo
                customStyleContainer={{
                  marginTop: "9rem",
                }}
                title={"No assignments found"}
              />
            )}
          {showingDataLoading && <QvipleLoading status="white" />}
        </>
      )}
    </div>
  );
};

export default StudentAssignment;

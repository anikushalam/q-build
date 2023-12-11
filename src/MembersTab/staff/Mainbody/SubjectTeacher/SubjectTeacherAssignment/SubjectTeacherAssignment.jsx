import React, { useEffect, useState } from "react";
import style from "./SubjectTeacherAssignment.module.css";
import AssignmentListItem from "./AssignmentListItem";
import { useInView } from "react-intersection-observer";
import CreateAssignment from "./CreateAssignment";
import { useTranslation } from "react-i18next";
import AssignmentDetailModal from "./SelectStudentModal/AssignmentDetailModal";
import AssignmentStudentDetail from "./AssignmentStudentDetail";
import { useSubjectAllAssignment } from "../../../../../hooks/member_tab/subject-api";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import EmptyInfo from "../../../../../Loader/EmptyInfo";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import SubjectTabChangeLink from "../SubjectTabChangeLink";
import DepartmentTabChangeLink from "../../DepartmentHead/DepartmentTabChangeLink";
import ClassTabChangeLink from "../../ClassTeacher/ClassTabChangeLink";
import AcademicAdministatorTabChange from "../../AcademicAdministrator/AcademicAdministatorTabChange";

function SubjectTeacherAssignment({
  carryParentState,
  sid,
  cid,
  bid,
  isDepartment,
  smid,
}) {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const params = useParams();

  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [assignmentList, setAssignmentList] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { scrollToTop } = useScrollbar();

  const { subjectAllAssignment, subjectAllAssignmentRefetch } =
    useSubjectAllAssignment({
      data: {
        page: page,
        sid: sid,
        limit: 10,
      },
      skip: !sid,
    });

  useEffect(() => {
    if (sid) {
      setShowingDataLoading(true);
      subjectAllAssignmentRefetch();
    }
  }, [sid, page, subjectAllAssignmentRefetch]);

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (subjectAllAssignment?.assignments) {
      if (page === 1) {
        setAssignmentList(subjectAllAssignment?.assignments);
      } else {
        setAssignmentList((prev) =>
          [
            ...new Set(
              [...prev, ...subjectAllAssignment?.assignments].map(
                JSON.stringify
              )
            ),
          ].map(JSON.parse)
        );
      }
      setShowingDataLoading(false);
    } else if (subjectAllAssignment?.assignments?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
    if (subjectAllAssignment?.assignments?.length === 10) setState(true);
    else setState(false);
  }, [subjectAllAssignment?.assignments]);

  const onRefetch = () => {
    setPage(1);
    subjectAllAssignmentRefetch();
  };

  const onCreateAssignment = () => {
    navigate(
      `/q/${params.username}/member/subject/${params.sname}?a=assignment&type=create`,
      {
        state: carryParentState,
      }
    );
  };
  return (
    <>
      {!searchParams?.get("type") && (
        <div
          className={style.subject_assignment}
          style={{
            border: isDepartment ? "none" : "0.5px solid #cacaca",
          }}
        >
          <div
            className={style.assignmentDetailTop}
            style={{
              justifyContent: "flex-start",
              gap: "1.3rem",
              paddingLeft: "1rem",
            }}
          >
            <img
              src="/images/members/arrow-left.svg"
              alt=""
              onClick={() => navigate(-1)}
            />
            <h6>{t("assignment")}</h6>
          </div>
          <BorderBottom
            customStyle={{
              width: "100%",
            }}
          />

          <div
            className={style.assignment}
            style={{
              margin: "0",
              padding: "1rem",
            }}
          >
            {isDepartment ? null : (
              <div className={style.assignment_btn}>
                <div
                  className={style.assignment_btn_text}
                  onClick={onCreateAssignment}
                >
                  {t("create_assignment")}
                </div>
              </div>
            )}

            <div className={style.assignmentList}>
              {isDepartment === "CLASS_TEACHER"
                ? assignmentList.map((assignment, index) =>
                    assignmentList?.length === index + 1 ? (
                      <ClassTabChangeLink
                        key={assignment?._id}
                        carryParentState={{
                          ...carryParentState,
                          aid: assignment?._id,
                        }}
                        activeTab={"assignment-detail"}
                        customStyleLink={{
                          width: "48%",
                        }}
                      >
                        <div className={style.assignmentItem} ref={ref}>
                          <AssignmentListItem assignment={assignment} />
                        </div>
                      </ClassTabChangeLink>
                    ) : (
                      <ClassTabChangeLink
                        key={assignment?._id}
                        carryParentState={{
                          ...carryParentState,
                          aid: assignment?._id,
                        }}
                        activeTab={"assignment-detail"}
                        customStyleLink={{
                          width: "48%",
                        }}
                      >
                        <div className={style.assignmentItem}>
                          <AssignmentListItem assignment={assignment} />
                        </div>
                      </ClassTabChangeLink>
                    )
                  )
                : isDepartment === "DEPARTMENT_HEAD"
                ? assignmentList.map((assignment, index) =>
                    assignmentList?.length === index + 1 ? (
                      <DepartmentTabChangeLink
                        key={assignment?._id}
                        carryParentState={{
                          ...carryParentState,
                          aid: assignment?._id,
                        }}
                        activeTab={"assignment-detail"}
                        customStyleLink={{
                          width: "48%",
                        }}
                      >
                        <div className={style.assignmentItem} ref={ref}>
                          <AssignmentListItem assignment={assignment} />
                        </div>
                      </DepartmentTabChangeLink>
                    ) : (
                      <DepartmentTabChangeLink
                        key={assignment?._id}
                        carryParentState={{
                          ...carryParentState,
                          aid: assignment?._id,
                        }}
                        activeTab={"assignment-detail"}
                        customStyleLink={{
                          width: "48%",
                        }}
                      >
                        <div className={style.assignmentItem}>
                          <AssignmentListItem assignment={assignment} />
                        </div>
                      </DepartmentTabChangeLink>
                    )
                  )
                : isDepartment === "ADMINISTRATOR"
                ? assignmentList.map((assignment, index) =>
                    assignmentList?.length === index + 1 ? (
                      <AcademicAdministatorTabChange
                        key={assignment?._id}
                        carryParentState={{
                          ...carryParentState,
                          aid: assignment?._id,
                        }}
                        activeTab={"subject-menu&n=assignment-detail"}
                        customStyleLink={{
                          width: "48%",
                        }}
                      >
                        <div className={style.assignmentItem} ref={ref}>
                          <AssignmentListItem assignment={assignment} />
                        </div>
                      </AcademicAdministatorTabChange>
                    ) : (
                      <AcademicAdministatorTabChange
                        key={assignment?._id}
                        carryParentState={{
                          ...carryParentState,
                          aid: assignment?._id,
                        }}
                        activeTab={"subject-menu&n=assignment-detail"}
                        customStyleLink={{
                          width: "48%",
                        }}
                      >
                        <div className={style.assignmentItem}>
                          <AssignmentListItem assignment={assignment} />
                        </div>
                      </AcademicAdministatorTabChange>
                    )
                  )
                : assignmentList.map((assignment, index) =>
                    assignmentList?.length === index + 1 ? (
                      <SubjectTabChangeLink
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
                        <div className={style.assignmentItem} ref={ref}>
                          <AssignmentListItem assignment={assignment} />
                        </div>
                      </SubjectTabChangeLink>
                    ) : (
                      <SubjectTabChangeLink
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
                        <div className={style.assignmentItem}>
                          <AssignmentListItem assignment={assignment} />
                        </div>
                      </SubjectTabChangeLink>
                    )
                  )}

              {!showingDataLoading &&
                !subjectAllAssignment?.assignments?.length && (
                  <EmptyInfo
                    customStyleContainer={{
                      marginTop: "9rem",
                    }}
                    title={"No assignments created yet."}
                  />
                )}
              {showingDataLoading && <QvipleLoading status="white" />}
            </div>
          </div>
        </div>
      )}
      {searchParams?.get("type") === "create" && (
        <CreateAssignment
          onRefetch={onRefetch}
          cid={cid}
          sid={sid}
          bid={bid}
          smid={smid}
        />
      )}
      {searchParams?.get("type") === "detail" && (
        <AssignmentDetailModal
          carryParentState={carryParentState}
          isDepartment={isDepartment}
          onParentRefetch={onRefetch}
        />
      )}
      {searchParams?.get("type") === "student-detail" && (
        <AssignmentStudentDetail onRefetch={onRefetch} />
      )}
    </>
  );
}

export default SubjectTeacherAssignment;

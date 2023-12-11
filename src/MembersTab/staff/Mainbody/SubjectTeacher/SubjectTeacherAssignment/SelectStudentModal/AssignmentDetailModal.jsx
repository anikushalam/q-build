import React, { useState, useEffect } from "react";
import { Divider } from "@mui/material";
import { useInView } from "react-intersection-observer";
import style from "./SelectStudentModal.module.css";
import { useTranslation } from "react-i18next";
import {
  useSubjectAssignmentSubmitCount,
  useSubjectAssignmentSubmitAllStudent,
} from "../../../../../../hooks/member_tab/subject-api";
import moment from "moment";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import { useLocation, useNavigate } from "react-router-dom";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";
import EmptyInfo from "../../../../../../Loader/EmptyInfo";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import SubjectTabChangeLink from "../../SubjectTabChangeLink";
import DepartmentTabChangeLink from "../../../DepartmentHead/DepartmentTabChangeLink";
import ClassTabChangeLink from "../../../ClassTeacher/ClassTabChangeLink";
import AssignmentDetailPopup from "./AssignmentDetailPopup";
import AssignmentMenu from "./AssignmentMenu";
import AcademicAdministatorTabChange from "../../../AcademicAdministrator/AcademicAdministatorTabChange";

function Item({ student }) {
  const { t } = useTranslation();
  return (
    <>
      <div className={style.subItem}>
        <img
          src={
            student?.studentProfilePhoto
              ? `${imageShowUrl}/${student?.studentProfilePhoto}`
              : "/images/ins_default_profile.svg"
          }
          alt="student profile icon"
        />
        <div className={style.itemtext}>
          <div className={style.insName}>
            <h6>
              {" "}
              {`${student?.studentFirstName} ${
                student?.studentMiddleName ? student?.studentMiddleName : ""
              } ${student?.studentLastName}`}
            </h6>
          </div>
          <p className={style.insUserName}>
            {" "}
            {t("roll_no")} {student?.studentROLLNO}
          </p>
        </div>
      </div>

      <div className={style.statuscontainer}>
        <img
          className={style.status}
          src="/images/members/submittedAssignment.svg"
        />
        <p>{moment(student?.assignmentSubmittedDate).format("DD MMM yyyy")}</p>
      </div>
    </>
  );
}

function AssignmentDetailModal({
  carryParentState,
  isDepartment,
  onParentRefetch,
}) {
  const getQuery = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [submittedStudent, setSubmittedStudent] = useState([]);
  const { scrollToTop } = useScrollbar();
  const [isAid, setIsAid] = useState("");
  const [edit, setEdit] = useState("");
  const { subjectAssignmentSubmitCount, subjectAssignmentSubmitCountRefetch } =
    useSubjectAssignmentSubmitCount({
      aid: getQuery.state?.aid,
      skip: !getQuery.state?.aid,
    });

  const {
    subjectAssignmentSubmitAllStudent,
    subjectAssignmentSubmitAllStudentRefetch,
  } = useSubjectAssignmentSubmitAllStudent({
    data: {
      page: page,
      aid: getQuery.state?.aid,
      limit: 10,
    },
    skip: !getQuery.state?.aid,
  });

  //for the refteching after the page is reset
  useEffect(() => {
    if (getQuery.state?.aid) subjectAssignmentSubmitCountRefetch();
  }, [getQuery.state?.aid, subjectAssignmentSubmitCountRefetch]);

  useEffect(() => {
    if (getQuery.state?.aid) {
      setShowingDataLoading(true);
      subjectAssignmentSubmitAllStudentRefetch();
    }
  }, [page, getQuery.state?.aid, subjectAssignmentSubmitAllStudentRefetch]);

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  //for the infinite scroll then change the page
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (subjectAssignmentSubmitAllStudent?.submittedStudent?.submittedStudent) {
      if (page === 1) {
        setSubmittedStudent(
          subjectAssignmentSubmitAllStudent?.submittedStudent?.submittedStudent
        );
      } else {
        setSubmittedStudent((prev) =>
          [
            ...new Set(
              [
                ...prev,
                ...subjectAssignmentSubmitAllStudent?.submittedStudent
                  ?.submittedStudent,
              ].map(JSON.stringify)
            ),
          ].map(JSON.parse)
        );
      }
      setShowingDataLoading(false);
    } else if (
      subjectAssignmentSubmitAllStudent?.submittedStudent?.submittedStudent
        ?.length === 0
    ) {
      setShowingDataLoading(false);
    } else {
    }
    if (
      subjectAssignmentSubmitAllStudent?.submittedStudent?.submittedStudent
        ?.length === 10
    )
      setState(true);
    else setState(false);
  }, [subjectAssignmentSubmitAllStudent?.submittedStudent?.submittedStudent]);

  return (
    <>
      <div className={style.assignmentDetail}>
        <div
          className={style.assignmentDetailTop}
          style={{
            paddingLeft: "1rem",
          }}
        >
          <img
            src="/images/left-nav-icon.svg"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
          <h6>
            {subjectAssignmentSubmitCount?.submittedStudent?.assignmentName}
          </h6>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <img
              style={{
                height: "1.5rem",
              }}
              onClick={() => setIsAid(getQuery.state?.aid)}
              src="/images/application_info.svg"
              alt="icon"
              title="View Assignment Details"
            />
            {isDepartment ? null : (
              <img
                src="/images/text-iconn.svg"
                onClick={() => setEdit(getQuery.state?.aid)}
              />
            )}
          </div>
        </div>
        <Divider />
        <div className={style.counts}>
          <p>
            {t("submitted")} :{" "}
            {subjectAssignmentSubmitCount?.submittedStudent?.submittedCount}/
            {subjectAssignmentSubmitCount?.submittedStudent?.totalCount}
          </p>
          <p style={{ color: "red" }}>
            {moment(
              subjectAssignmentSubmitCount?.submittedStudent?.dueDate
            ).format("DD MMM yyyy")}
          </p>
        </div>
        <div className={style.items}>
          {isDepartment === "CLASS_TEACHER"
            ? submittedStudent?.map((student, index) =>
                submittedStudent?.length === index + 1 ? (
                  <ClassTabChangeLink
                    key={student?._id}
                    carryParentState={{
                      ...carryParentState,
                      studentId: student?._id,
                    }}
                    activeTab={"assignment-student-detail"}
                    customStyleLink={{
                      width: "100%",
                    }}
                  >
                    <div className={`${style.item} ${style.itemm}`} ref={ref}>
                      <Item student={student} />
                    </div>
                    <Divider />
                  </ClassTabChangeLink>
                ) : (
                  <ClassTabChangeLink
                    key={student?._id}
                    carryParentState={{
                      ...carryParentState,
                      studentId: student?._id,
                    }}
                    activeTab={"assignment-student-detail"}
                    customStyleLink={{
                      width: "100%",
                    }}
                  >
                    <div className={`${style.item} ${style.itemm}`}>
                      <Item student={student} />
                    </div>
                    <Divider />
                  </ClassTabChangeLink>
                )
              )
            : isDepartment === "DEPARTMENT_HEAD"
            ? submittedStudent?.map((student, index) =>
                submittedStudent?.length === index + 1 ? (
                  <DepartmentTabChangeLink
                    key={student?._id}
                    carryParentState={{
                      ...carryParentState,
                      studentId: student?._id,
                    }}
                    activeTab={"assignment-student-detail"}
                    customStyleLink={{
                      width: "100%",
                    }}
                  >
                    <div className={`${style.item} ${style.itemm}`} ref={ref}>
                      <Item student={student} />
                    </div>
                    <Divider />
                  </DepartmentTabChangeLink>
                ) : (
                  <DepartmentTabChangeLink
                    key={student?._id}
                    carryParentState={{
                      ...carryParentState,
                      studentId: student?._id,
                    }}
                    activeTab={"assignment-student-detail"}
                    customStyleLink={{
                      width: "100%",
                    }}
                  >
                    <div className={`${style.item} ${style.itemm}`}>
                      <Item student={student} />
                    </div>
                    <Divider />
                  </DepartmentTabChangeLink>
                )
              )
            : isDepartment === "ADMINISTRATOR"
            ? submittedStudent?.map((student, index) =>
                submittedStudent?.length === index + 1 ? (
                  <AcademicAdministatorTabChange
                    key={student?._id}
                    carryParentState={{
                      ...carryParentState,
                      studentId: student?._id,
                    }}
                    activeTab={"subject-menu&n=assignment-student-detail"}
                    customStyleLink={{
                      width: "100%",
                    }}
                  >
                    <div className={`${style.item} ${style.itemm}`} ref={ref}>
                      <Item student={student} />
                    </div>
                    <Divider />
                  </AcademicAdministatorTabChange>
                ) : (
                  <AcademicAdministatorTabChange
                    key={student?._id}
                    carryParentState={{
                      ...carryParentState,
                      studentId: student?._id,
                    }}
                    activeTab={"subject-menu&n=assignment-student-detail"}
                    customStyleLink={{
                      width: "100%",
                    }}
                  >
                    <div className={`${style.item} ${style.itemm}`}>
                      <Item student={student} />
                    </div>
                    <Divider />
                  </AcademicAdministatorTabChange>
                )
              )
            : submittedStudent?.map((student, index) =>
                submittedStudent?.length === index + 1 ? (
                  <SubjectTabChangeLink
                    key={student?._id}
                    carryParentState={{
                      ...carryParentState,
                      studentId: student?._id,
                    }}
                    activeTab={"assignment&type=student-detail"}
                    customStyleLink={{
                      width: "100%",
                    }}
                  >
                    <div className={`${style.item} ${style.itemm}`} ref={ref}>
                      <Item student={student} />
                    </div>
                    <Divider />
                  </SubjectTabChangeLink>
                ) : (
                  <SubjectTabChangeLink
                    key={student?._id}
                    carryParentState={{
                      ...carryParentState,
                      studentId: student?._id,
                    }}
                    activeTab={"assignment&type=student-detail"}
                    customStyleLink={{
                      width: "100%",
                    }}
                  >
                    <div className={`${style.item} ${style.itemm}`}>
                      <Item student={student} />
                    </div>
                    <Divider />
                  </SubjectTabChangeLink>
                )
              )}

          {!showingDataLoading &&
            !subjectAssignmentSubmitAllStudent?.submittedStudent
              ?.submittedStudent?.length && (
              <EmptyInfo
                customStyleContainer={{
                  marginTop: "9rem",
                }}
                title={"No student submitted yet."}
              />
            )}
          {showingDataLoading && <QvipleLoading status="white" />}
        </div>
      </div>

      {isAid && (
        <AssignmentDetailPopup onClose={() => setIsAid("")} aid={isAid} />
      )}
      {edit && (
        <AssignmentMenu
          onClose={() => setEdit("")}
          aid={edit}
          onRefetch={subjectAssignmentSubmitCountRefetch}
          onParentRefetch={onParentRefetch}
        />
      )}
    </>
  );
}

export default AssignmentDetailModal;

import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import OneDepartmentClassDetailTab from "./OneDepartmentClassDetailTab";
import style from "../../PromoteDepartment/PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import InstituteClassStudentList from "../../../../../Department/Institute/Pages/InstituteClassStudentList";
import AdministratorSubject from "../../AcademicAdministrator/AdministratorSubject";
import SubjectCatalog from "../../SubjectTeacher/SubjectCatalog/SubjectCatalog";
import Attendence from "../../ClassTeacher/ClassCatalog/Attendence/Attendence";
import OneDepartmentSubjectDetail from "./OneDepartmentSubjectDetail";
import SubjectAttendance from "../../SubjectTeacher/Attendence/SubjectAttendance";
import SubjectTeacherAssignment from "../../SubjectTeacher/SubjectTeacherAssignment/SubjectTeacherAssignment";
import SubjectMarks from "../../SubjectTeacher/SubjectMarks/SubjectMarks";
import Academics from "../../SubjectTeacher/Academics/Academics";
import AcademicDetail from "../../SubjectTeacher/Academics/AcademicDetail/AcademicDetail";
import AssignmentDetailModal from "../../SubjectTeacher/SubjectTeacherAssignment/SelectStudentModal/AssignmentDetailModal";
import AssignmentStudentDetail from "../../SubjectTeacher/SubjectTeacherAssignment/AssignmentStudentDetail";
const OneDepartmentClassDetail = ({
  carryParentState,
  viewAs,
  did,
  instituteId,
}) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [searchParams] = useSearchParams();
  return (
    <>
      {searchParams.get("a") === "subject-academic-detail" ? (
        <AcademicDetail />
      ) : searchParams.get("a") === "assignment-detail" ? (
        <AssignmentDetailModal
          isDepartment={viewAs}
          carryParentState={carryParentState}
        />
      ) : searchParams.get("a") === "assignment-student-detail" ? (
        <AssignmentStudentDetail isDepartment={viewAs} />
      ) : (
        <div className={style.departmenthead}>
          <div className={style.demaprtment_list}>
            <div
              className={style.with_search}
              style={{
                marginBottom: "0.7rem",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              {searchParams.get("a")?.substring(0, 7) === "subject" ? (
                <>
                  <h6>
                    {t("subject_name")}
                    {" : "}
                    {getQuery.state?.subjectName ?? ""}
                  </h6>
                  <h6>
                    {t("subject_teacher")}
                    {" : "}
                    {getQuery.state?.subjectTeacherName ?? ""}
                  </h6>
                </>
              ) : (
                <>
                  <h6>
                    {t("class_name")}
                    {" : "}
                    {getQuery.state?.clsName ?? ""}
                  </h6>
                  <h6>
                    {t("class_teacher")}
                    {" : "}
                    {getQuery.state?.teacherName ?? ""}
                  </h6>
                </>
              )}
            </div>
            {searchParams.get("a") === "subject-detail" ? (
              <OneDepartmentSubjectDetail
                carryParentState={carryParentState}
                isDepartment={viewAs}
              />
            ) : searchParams.get("a") === "subject-catalog" ? (
              <SubjectCatalog
                cid={getQuery.state?.clsId}
                bid={getQuery.state?.batchId}
                isDepartment={viewAs}
                sid={getQuery.state?.subjectId}
              />
            ) : searchParams.get("a") === "subject-attendance" ? (
              <SubjectAttendance
                sid={getQuery.state?.subjectId}
                bid={getQuery.state?.batchId}
                isDepartment={viewAs}
                subjectName={getQuery.state?.subjectName ?? ""}
              />
            ) : searchParams.get("a") === "subject-assignment" ? (
              <SubjectTeacherAssignment
                sid={getQuery.state?.subjectId}
                cid={getQuery.state?.clsId}
                carryParentState={carryParentState}
                bid={getQuery.state?.batchId}
                isDepartment={viewAs}
              />
            ) : searchParams.get("a") === "subject-exam" ? (
              <SubjectMarks
                sid={getQuery.state?.subjectId}
                cid={getQuery.state?.clsId}
                isDepartment={viewAs}
              />
            ) : searchParams.get("a") === "subject-academic" ? (
              <Academics
                sid={getQuery.state?.subjectId}
                carryParentState={carryParentState}
                isDepartment={viewAs}
              />
            ) : (
              <>
                <OneDepartmentClassDetailTab
                  carryParentState={carryParentState}
                />

                {searchParams.get("a") === "class-detail" && (
                  <InstituteClassStudentList
                    cid={getQuery.state.clsId}
                    openAs={"SUBJECT_TEACHER"}
                    isDepartment
                  />
                )}
                {searchParams.get("a") === "class-subject" && (
                  <AdministratorSubject
                    carryParentState={carryParentState}
                    clsId={getQuery.state?.clsId}
                    isView="DEPARTMENT_HEAD"
                    instituteId={instituteId}
                    did={did}
                  />
                )}
                {searchParams.get("a") === "class-attendance" && (
                  <Attendence
                    cid={getQuery.state?.clsId}
                    isDepartment
                    className={getQuery.state?.clsName ?? ""}
                  />
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default OneDepartmentClassDetail;

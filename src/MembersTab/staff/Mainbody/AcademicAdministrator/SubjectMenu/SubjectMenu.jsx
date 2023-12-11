import { useTranslation } from "react-i18next";
import AcademicAdministatorTabChange from "../AcademicAdministatorTabChange";
import style from "../../SubjectTeacher/SubjectTeacherProfile/MiddleContent/MiddleContent.module.css";
import { useLocation, useSearchParams } from "react-router-dom";
import SubjectCatalog from "../../SubjectTeacher/SubjectCatalog/SubjectCatalog";
import SubjectAttendance from "../../SubjectTeacher/Attendence/SubjectAttendance";
import SubjectTeacherAssignment from "../../SubjectTeacher/SubjectTeacherAssignment/SubjectTeacherAssignment";
import SubjectMarks from "../../SubjectTeacher/SubjectMarks/SubjectMarks";
import AssignmentDetailModal from "../../SubjectTeacher/SubjectTeacherAssignment/SelectStudentModal/AssignmentDetailModal";
import AssignmentStudentDetail from "../../SubjectTeacher/SubjectTeacherAssignment/AssignmentStudentDetail";
const SubjectMenu = ({ carryParentState, isDepartment }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [searchParams] = useSearchParams();
  //   console.info("getQuery", getQuery.state);
  return (
    <>
      {searchParams.get("n") ? (
        <>
          {searchParams.get("n") === "subject-catalog" ? (
            <SubjectCatalog
              cid={getQuery.state?.cid}
              bid={getQuery.state?.batchId}
              isDepartment={isDepartment}
              sid={getQuery.state?.subjectId}
            />
          ) : searchParams.get("n") === "subject-attendance" ? (
            <SubjectAttendance
              sid={getQuery.state?.subjectId}
              bid={getQuery.state?.batchId}
              isDepartment={isDepartment}
              subjectName={getQuery.state?.subjectName ?? ""}
            />
          ) : searchParams.get("n") === "subject-assignment" ? (
            <SubjectTeacherAssignment
              sid={getQuery.state?.subjectId}
              cid={getQuery.state?.cid}
              carryParentState={carryParentState}
              bid={getQuery.state?.batchId}
              isDepartment={isDepartment}
            />
          ) : searchParams.get("n") === "subject-exam" ? (
            <SubjectMarks
              sid={getQuery.state?.subjectId}
              cid={getQuery.state?.cid}
              isDepartment={isDepartment}
            />
          ) : searchParams.get("n") === "assignment-detail" ? (
            <AssignmentDetailModal
              carryParentState={carryParentState}
              isDepartment={isDepartment}
            />
          ) : searchParams.get("n") === "assignment-student-detail" ? (
            <AssignmentStudentDetail isDepartment={isDepartment} />
          ) : null}
        </>
      ) : (
        <div
          className={style.MiddleContentLeft}
          style={{
            border: "none",
          }}
        >
          {isDepartment === "ADMINISTRATOR" ? (
            <div
              className={style.item}
              style={{
                paddingLeft: "2vw",
              }}
            >
              <AcademicAdministatorTabChange
                carryParentState={carryParentState}
                activeTab="subject-menu&n=subject-catalog"
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/class/class-catalog-icon.svg"
                    alt="Class Catalog"
                  />
                  <p>{t("catalog")}</p>
                </div>
              </AcademicAdministatorTabChange>
              <AcademicAdministatorTabChange
                carryParentState={carryParentState}
                activeTab="subject-menu&n=subject-attendance"
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/class/class-attendance-icon.svg"
                    alt="attendence"
                  />
                  <p> {t("attendance")} </p>
                </div>
              </AcademicAdministatorTabChange>
              <AcademicAdministatorTabChange
                carryParentState={carryParentState}
                activeTab="subject-menu&n=subject-assignment"
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/subject/subject-assignment-icon.svg"
                    alt="assignment"
                  />
                  <p>{t("assigmnent")}</p>
                </div>
              </AcademicAdministatorTabChange>
              <AcademicAdministatorTabChange
                carryParentState={carryParentState}
                activeTab="subject-menu&n=subject-exam"
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/department/department-examination-icon.svg"
                    alt="attendence"
                  />
                  <p>{t("examinations")}</p>
                </div>
              </AcademicAdministatorTabChange>
              <AcademicAdministatorTabChange
                carryParentState={carryParentState}
                activeTab="subject"
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/subject/subject-daily-update-icon.svg"
                    alt="student Request"
                  />
                  <p
                    style={{
                      textAlign: "center",
                    }}
                  >
                    {t("academics_teachings")}
                  </p>
                </div>
              </AcademicAdministatorTabChange>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default SubjectMenu;

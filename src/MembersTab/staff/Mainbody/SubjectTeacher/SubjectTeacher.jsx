import React, { useEffect } from "react";
import style from "./SubjectTeacher.module.css";
import "../DepartmentHead/Exminations/Exminations.css";
import SubjectCatalog from "./SubjectCatalog/SubjectCatalog";
// import SubjectMarks from "./SubjectMarks/SubjectMarks";
import SubjectTeacherAssignment from "./SubjectTeacherAssignment/SubjectTeacherAssignment";
import SubjectTeacherMCQ from "./SubjectTeacherMCQ/SubjectTeacherMCQ";
import Setting from "./Settings/Setting";
import SubjectTeacherProfile from "./SubjectTeacherProfile/SubjectTeacherProfile";
import { useLocation } from "react-router-dom";
import SubjectAttendance from "./Attendence/SubjectAttendance";
import Academics from "./Academics/Academics";
import AcademicDetail from "./Academics/AcademicDetail/AcademicDetail";
import { useGetOneSubjectProfile } from "../../../../hooks/member_tab/subject-api";
import SubjectExam from "./SubjectExam/SubjectExam";
import SubjectCoAttainment from "./SubjectCoAttainment/SubjectCoAttainment";

function SubjectTeacher({ onClickValue, carryParentState, setOpenMcq }) {
  // const { t } = useTranslation();
  const getQuery = useLocation();
  const { getOneSubjectProfile, getOneSubjectProfileRefetch } =
    useGetOneSubjectProfile({
      sid: onClickValue?._id,
      skip: !onClickValue?._id,
    });

  useEffect(() => {
    if (onClickValue?._id) {
      getOneSubjectProfileRefetch();
    }
  }, [onClickValue?._id, getOneSubjectProfileRefetch]);

  // console.info("getOneSubjectProfile", getOneSubjectProfile);
  return (
    <div className={style.subjectTeacher}>
      {!getQuery?.search && (
        <SubjectTeacherProfile
          onClickValue={onClickValue}
          carryParentState={carryParentState}
        />
      )}
      {getQuery?.search && (
        <div>
          {getQuery?.search?.substring(3) === "catalog" && (
            <SubjectCatalog
              cid={onClickValue?.class?._id}
              bid={getOneSubjectProfile?.one_subject?.selected_batch_query?._id}
              sid={onClickValue?._id}
            />
          )}
          {getQuery?.search?.substring(3) === "attendance" && (
            <SubjectAttendance
              sid={onClickValue?._id}
              bid={getOneSubjectProfile?.one_subject?.selected_batch_query?._id}
              subjectName={`${
                getOneSubjectProfile?.one_subject?.subjectName
              } (${
                getOneSubjectProfile?.one_subject?.subject_category ?? ""
              }) (${
                getOneSubjectProfile?.one_subject?.selected_batch_query
                  ?.batchName ?? ""
              })`}
              carryParentState={carryParentState}
            />
          )}
          {getQuery?.search?.substring(3) === "extra-attendance" && (
            <SubjectAttendance
              sid={onClickValue?._id}
              bid={getOneSubjectProfile?.one_subject?.selected_batch_query?._id}
              subjectName={`${
                getOneSubjectProfile?.one_subject?.subjectName
              } (${
                getOneSubjectProfile?.one_subject?.subject_category ?? ""
              }) (${
                getOneSubjectProfile?.one_subject?.selected_batch_query
                  ?.batchName ?? ""
              })`}
              carryParentState={carryParentState}
            />
          )}
          {/* {getQuery?.search?.substring(3) === "exam" && (
            <SubjectMarks
              sid={onClickValue?._id}
              cid={onClickValue?.class?._id}
            />
          )} */}
          {(getQuery?.search?.substring(3) === "exam" ||
            getQuery?.search?.substring(3) === "exam-detail") && (
            <SubjectExam
              sid={onClickValue?._id}
              cid={onClickValue?.class?._id}
              carryParentState={carryParentState}
              smid={getOneSubjectProfile?.one_subject?.subjectMasterName}
            />
          )}{" "}
          {["co-attainment", "co-mapping", "co-setting"]?.includes(
            getQuery?.search?.substring(3)
          ) && (
            <SubjectCoAttainment
              sid={onClickValue?._id}
              cid={onClickValue?.class?._id}
              carryParentState={carryParentState}
              smid={getOneSubjectProfile?.one_subject?.subjectMasterName}
            />
          )}
          {getQuery?.search?.substring(3) === "mcq" && (
            <SubjectTeacherMCQ
              sid={onClickValue?._id}
              setOpenMcq={setOpenMcq}
            />
          )}
          {getQuery?.search?.substring(3, 13) === "assignment" && (
            <SubjectTeacherAssignment
              sid={onClickValue?._id}
              cid={onClickValue?.class?._id}
              carryParentState={carryParentState}
              bid={getOneSubjectProfile?.one_subject?.selected_batch_query?._id}
              smid={getOneSubjectProfile?.one_subject?.subjectMasterName}
            />
          )}
          {getQuery?.search?.substring(3) === "setting" && (
            <Setting sid={onClickValue?._id} />
          )}
          {getQuery?.search?.substring(3, 11) === "academic" && (
            <Academics
              sid={onClickValue?._id}
              carryParentState={carryParentState}
            />
          )}
          {getQuery?.search?.substring(3) === "subject-academic" && (
            <AcademicDetail />
          )}
        </div>
      )}
    </div>
  );
}

export default SubjectTeacher;

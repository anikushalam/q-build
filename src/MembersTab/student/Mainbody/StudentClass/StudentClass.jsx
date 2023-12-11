import React, { lazy, useEffect, useState } from "react";
import style from "./StudentClass.module.css";
import StudentAttendence from "./StudentAttendence/StudentAttendence";
import { useTranslation } from "react-i18next";
import Tab from "../../../staff/Mainbody/FinanceManager/Components/Tab";
import TabDark from "../../../staff/Mainbody/FinanceManager/Components/TabDark";
import "./Tabs.css";
// import Assignment from "./Assignment/Assignment";
import Exam from "./Exam/Exam";
import StudentLibrary from "./StudentLibrary/StudentLibrary";
import { useOneDepartmentClassProfile } from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import UniversalDepartmentMiddleHead from "../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import MiddleContent from "./MiddleContent/MiddleContent";
import McqList from "./Exam/Mcq/McqList";
import StudentSportClassDetails from "./StudentSportArts/StudentSportClassDetails/StudentSportClassDetails";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import StudentTabChangeLink from "./StudentTabChangeLink";
import Events from "../../../../EventDept/InsEventDeptFunction/InsDeptEvents/InsDeptEvents";
import Seminars from "../../../../EventDept/InsEventDeptFunction/InsDeptSeminars/InsDeptSeminars";
import { useSelector } from "react-redux";
import Elections from "./Elections/Elections";
import StudentAllFeesData from "./StudentAllFeesData/StudentAllFeesData";
import { useStudentDesignationDataQuery } from "../../../../services/joining/joinApi";
import CustomSuspenseGif from "../../../../Custom/SuspenseLoading/CustomSuspenseGif";
import StudentAcademic from "./StudentAcademic/StudentAcademic";
import AcademicDetail from "../../../staff/Mainbody/SubjectTeacher/Academics/AcademicDetail/AcademicDetail";
import StudentClassmates from "./StudentClassmates/StudentClassmates";
import SetudentReadmission from "./StudentReadmission/SetudentReadmission";
import StudentMentor from "./StudentMentor/StudentMentor";
const StudentAssignment = lazy(() => import("./Assignment/StudentAssignment"));

// import StudentActivity from "./StudentActivity/StudentActivity";
function StudentClass({
  studentRollNo,
  onClickValue,
  carryParentState,
  studentId,
}) {
  const { t } = useTranslation();
  const skipForm = useSelector((state) => state.idChange.studentFormSkip);
  const getQuery = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [takeReadmission, setTakeReadmission] = React.useState(false);
  const { oneClassProfile, oneClassProfileRefetch } =
    useOneDepartmentClassProfile({
      cid: onClickValue?.studentClass?._id,
      skip: !onClickValue?.studentClass?._id,
    });
  useEffect(() => {
    if (onClickValue?.studentClass?._id) oneClassProfileRefetch();
  }, [oneClassProfileRefetch]);

  const {
    data: studentDesignationData,
    refetch: studentDesignationDataRefetch,
  } = useStudentDesignationDataQuery(studentId, { skip: !studentId });

  useEffect(() => {
    if (studentId) {
      studentDesignationDataRefetch();
    }
  }, [studentId, studentDesignationDataRefetch]);
  useEffect(() => {
    if (
      studentDesignationData?.re_admission_tab ||
      studentDesignationData?.re_admission_tab === null
    ) {
      if (studentDesignationData?.re_admission_tab === "Visible") {
        setTakeReadmission(true);
      } else {
        if (
          studentDesignationData?.student?.form_status === "Filled" ||
          !studentDesignationData?.student?.institute
            ?.student_section_form_show_query
        ) {
        } else {
          if (
            !skipForm &&
            studentDesignationData?.student?.form_status === "Not Filled"
          ) {
            navigate(`/q/${params.username}/edit/student`, {
              state: {
                sid: onClickValue?._id,
                openAs: "STUDENT_MEMBER",
                student: studentDesignationData?.student,
              },
            });
          }
        }
      }
    }
  }, [skipForm, studentDesignationData?.student?.form_status]);

  // console.info("studentDesignationData", studentDesignationData);
  return (
    <>
      {searchParams.get("a") === "mentor" ? (
        <StudentMentor carryParentState={carryParentState} sid={studentId} />
      ) : (
        <>
          {takeReadmission && (
            <SetudentReadmission
              onClose={() => setTakeReadmission(false)}
              student={studentDesignationData?.student}
            />
          )}
          {(!getQuery?.search ||
            getQuery?.search?.substring(3) === "about" ||
            getQuery?.search?.substring(3) === "activity") && (
            <>
              <div className={style.middleHeadContainer}>
                <UniversalDepartmentMiddleHead
                  coverKey={oneClassProfile?.classes?.cover}
                  coverId={oneClassProfile?.classes?.coverId}
                  defaultCover="/images/profileAndCover/department-cover.png"
                  textLarge={`${oneClassProfile?.classes?.className}-${oneClassProfile?.classes?.classTitle}`}
                  batchStatus="true"
                  textSmall={`${oneClassProfile?.classes?.batch?.batchName}`}
                  rollNoStatus={true}
                  rollNo={studentRollNo}
                  count1={oneClassProfile?.classes?.studentCount}
                  count1label={t("students")}
                  count2label={t("subjects")}
                  count2={oneClassProfile?.classes?.subjectCount}
                  coverUpdate={false}
                />
              </div>

              <MiddleContent
                studentId={studentId}
                classHeadTitle={oneClassProfile?.classes?.classHeadTitle}
                classTeacher={oneClassProfile?.classes?.classTeacher}
                carryParentState={carryParentState}
                studentMentor={studentDesignationData?.student?.mentor}
              />
            </>
          )}

          {getQuery?.search &&
          getQuery?.search?.substring(3) !== "about" &&
          getQuery?.search?.substring(3) !== "activity" &&
          getQuery?.search?.substring(3) !== "events" &&
          getQuery?.search?.substring(3) !== "seminars" &&
          getQuery?.search?.substring(3) !== "elections" ? (
            <div className={style.departmenthead}>
              {getQuery?.search?.substring(3) === "attendance" && (
                <StudentAttendence
                  studentId={studentId}
                  cid={onClickValue?.studentClass?._id}
                />
              )}

              {getQuery?.search?.substring(3, 13) === "assignment" && (
                <CustomSuspenseGif>
                  <StudentAssignment
                    sid={studentId}
                    carryParentState={carryParentState}
                  />
                </CustomSuspenseGif>
              )}

              {getQuery?.search?.substring(3, 11) === "academic" && (
                <StudentAcademic
                  sid={studentId}
                  carryParentState={carryParentState}
                />
                // <StudentDailyUpdates studentId={studentId} />
              )}
              {getQuery?.search?.substring(3) === "subject-academic" && (
                <AcademicDetail />
                // <StudentDailyUpdates studentId={studentId} />
              )}
              {getQuery?.search?.substring(3) === "fees" && (
                <div className={style.student_fees_data}>
                  <StudentAllFeesData
                    sid={studentId}
                    viewAs="STUDENT"
                    isFeesEditable={
                      studentDesignationData?.student
                        ?.online_amount_edit_access === "Granted"
                        ? false
                        : true
                    }
                  />
                </div>
              )}
              {getQuery?.search?.substring(3) === "exam" && (
                <Exam studentId={studentId} />
              )}
              {getQuery?.search?.substring(3) === "mcq" && (
                <McqList sid={studentId} />
              )}
              {getQuery?.search?.substring(3, 10) === "library" && (
                <StudentLibrary
                  lid={onClickValue?.institute?.library[0]}
                  studentId={studentId}
                  carryParentState={carryParentState}
                />
              )}
              {getQuery?.search?.substring(3) === "classmates" && (
                <StudentClassmates
                  sid={studentId}
                  carryParentState={carryParentState}
                />
              )}
            </div>
          ) : getQuery?.search &&
            getQuery?.search?.substring(3) !== "about" &&
            getQuery?.search?.substring(3) !== "activity" &&
            (getQuery?.search?.substring(3) === "events" ||
              getQuery?.search?.substring(3) === "seminars" ||
              getQuery?.search?.substring(3) === "elections") ? (
            <div className={style.departmenthead}>
              <div className={`${style.tabs} ${style.studentEventTabs}`}>
                <StudentTabChangeLink
                  carryParentState={carryParentState}
                  activeTab="events"
                >
                  <div className={`${style.tab} ${style.studentEventTab}`}>
                    {getQuery?.search?.substring(3) === "events" ? (
                      <TabDark
                        name={t("events")}
                        img="/images/internal-funds.svg"
                        imgDark="/images/internal-funds-white.svg"
                      />
                    ) : (
                      <Tab
                        name={t("events")}
                        img="/images/internal-funds.svg"
                        imgDark="/images/internal-funds-white.svg"
                      />
                    )}
                  </div>
                </StudentTabChangeLink>

                <StudentTabChangeLink
                  carryParentState={carryParentState}
                  activeTab="seminars"
                >
                  <div className={`${style.tab} ${style.studentEventTab}`}>
                    {getQuery?.search?.substring(3) === "seminars" ? (
                      <TabDark
                        name={t("seminars")}
                        img="/images/incomes.svg"
                        imgDark="/images/incomes-white.svg"
                      />
                    ) : (
                      <Tab
                        name={t("seminars")}
                        img="/images/incomes.svg"
                        imgDark="/images/incomes-white.svg"
                      />
                    )}
                  </div>
                </StudentTabChangeLink>

                <StudentTabChangeLink
                  carryParentState={carryParentState}
                  activeTab="elections"
                >
                  <div className={`${style.tab} ${style.studentEventTab}`}>
                    {getQuery?.search?.substring(3) === "elections" ? (
                      <TabDark
                        name={t("elections")}
                        img="/images/expenses.svg"
                        imgDark="/images/finance/expense-white.svg"
                      />
                    ) : (
                      <Tab
                        name={t("elections")}
                        img="/images/expenses.svg"
                        imgDark="/images/finance/expense-white.svg"
                      />
                    )}
                  </div>
                </StudentTabChangeLink>
              </div>

              {getQuery?.search?.substring(3) === "events" && (
                <Events deptId={onClickValue?.department} />
              )}

              {getQuery?.search?.substring(3) === "seminars" && (
                <Seminars deptId={onClickValue?.department} />
              )}
              {getQuery?.search?.substring(3) === "elections" && (
                <Elections sid={studentId} />
              )}
            </div>
          ) : (
            ""
          )}

          {activeIndex === 2 && (
            <StudentSportClassDetails
              setActiveIndex={setActiveIndex}
              // sportId={sportId}
              studentId={studentId}
            />
          )}
        </>
      )}
    </>
  );
}

export default StudentClass;

import React, { useEffect, useState } from "react";
import style from "./ExamDepartment.module.css";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import Fees from "../DepartmentHead/Fees/Fees";
import Exminations from "../DepartmentHead/Exminations/Exminations";
import Backlogs from "../DepartmentHead/Backlogs/Backlogs";
import ExamTabChangeLink from "./ExamTabChangeLink";
import { useGetExaminationSectionDetail } from "../../../../hooks/member_tab/department-api";
import GradeSystem from "./GradeSystem/GradeSystem";
import SubjectCredit from "./CourseCredit/SubjectCredit";
const OneExamDepartment = ({ carryParentState, instituteId }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const [gradeOpen, setGradeOpen] = useState(false);
  const { getExaminationSectionDetail, getExaminationSectionDetailRefetch } =
    useGetExaminationSectionDetail({
      did: getQuery.state?.did,
      skip: !getQuery.state?.did,
    });
  useEffect(() => {
    if (getQuery.state?.did) getExaminationSectionDetailRefetch();
  }, [getQuery.state?.did, getExaminationSectionDetailRefetch]);

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };

  const onGradeToggle = () => {
    setGradeOpen((pre) => !pre);
  };
  // console.info("this is ofsds", getExaminationSectionDetail);
  return (
    <>
      <section className={style.moderator_container_title}>
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt="go to previous tab"
          title="Go Back"
          style={{
            cursor: "pointer",
          }}
        />
        <h6>{getExaminationSectionDetail?.c_query?.name ?? ""}</h6>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.5rem",
        }}
      />
      {getQuery?.search?.substring(3) !== "department&n=exam" &&
        getQuery?.search?.substring(3) !== "department&n=fees" &&
        getQuery?.search?.substring(3, 23) !== "department&n=backlog" &&
        getQuery?.search?.substring(3) !== "department&n=exam&n=detail" &&
        getQuery?.search?.substring(3) !==
          "department&n=exam&n=detail&seating" &&
        getQuery?.search?.substring(3) !==
          "department&n=exam&n=detail&subject" &&
        getQuery?.search?.substring(3) !== "department&n=grade" &&
        getQuery?.search?.substring(3) !== "department&n=credit" && (
          <>
            <ExamTabChangeLink
              carryParentState={{
                ...carryParentState,
                did: getQuery.state?.did,
              }}
              activeTab={"department&n=exam"}
            >
              <div className={style.class_container}>
                <img
                  className={style.oneRowImage}
                  src="/images/exam-examination.svg"
                  alt="batch icon"
                />
                <div className={style.class_container_text}>
                  <h6>{t("examination_section")}</h6>
                  <p>
                    {getExaminationSectionDetail?.c_query?.classCount ?? 0}
                    {` `}

                    {t("classes")}
                  </p>
                </div>
              </div>
            </ExamTabChangeLink>

            <ExamTabChangeLink
              carryParentState={{
                ...carryParentState,
                did: getQuery.state?.did,
              }}
              activeTab={"department&n=fees"}
            >
              <div className={style.class_container}>
                <img
                  className={style.oneRowImage}
                  src="/images/fees-examination.svg"
                  alt="batch icon"
                />
                <div className={style.class_container_text}>
                  <h6>{t("fees_section")}</h6>
                  <p>
                    {getExaminationSectionDetail?.c_query?.classCount ?? 0}
                    {` `}
                    {t("classes")}
                  </p>
                </div>
              </div>
            </ExamTabChangeLink>
            {/* <ExamTabChangeLink
              carryParentState={{
                ...carryParentState,
                did: getQuery.state?.did,
              }}
              activeTab={"department&n=grade"}
            > */}
            <div
              className={style.class_container}
              onClick={onGradeToggle}
              style={{
                cursor: "pointer",
              }}
            >
              <img
                className={style.oneRowImage}
                src="/images/department/grade-icon.svg"
                alt="batch icon"
              />
              <div className={style.class_container_text}>
                <h6>{t("grade_system")}</h6>
                <p>
                  {getExaminationSectionDetail?.c_query?.classCount ?? 0}
                  {` `}
                  {t("classes")}
                </p>
              </div>
            </div>
            {/* </ExamTabChangeLink> */}

            <ExamTabChangeLink
              carryParentState={{
                ...carryParentState,
                did: getQuery.state?.did,
              }}
              activeTab={"department&n=backlog&standard"}
            >
              <div className={style.class_container}>
                <img
                  className={style.oneRowImage}
                  // src="/images/backlog-examination.svg"
                  src="/images/book-24-icon.svg"
                  alt="batch icon"
                />
                <div className={style.class_container_text}>
                  <h6>{t("backlog_section")}</h6>
                  <p>
                    {getExaminationSectionDetail?.c_query
                      ?.backlogStudentCount ?? 0}
                    {` `}

                    {t("students")}
                  </p>
                </div>
              </div>
            </ExamTabChangeLink>
            <ExamTabChangeLink
              carryParentState={{
                ...carryParentState,
                did: getQuery.state?.did,
              }}
              activeTab={"department&n=credit"}
            >
              <div className={style.class_container}>
                <img
                  className={style.oneRowImage}
                  // src="/images/backlog-examination.svg"
                  src="/images/book-24-icon.svg"
                  alt="batch icon"
                />
                <div className={style.class_container_text}>
                  <h6>{t("course_credit")}</h6>
                  <p>
                    {getExaminationSectionDetail?.c_query
                      ?.backlogStudentCount ?? 0}
                    {` `}

                    {t("subjects")}
                  </p>
                </div>
              </div>
            </ExamTabChangeLink>
          </>
        )}
      {/* {showingDataLoading && <QvipleLoading />} */}
      {getQuery?.search?.substring(3, 20) === "department&n=exam" && (
        <Exminations
          carryParentState={carryParentState}
          bid={getExaminationSectionDetail?.c_query?.defaultBatch}
          did={getQuery.state?.did}
          instituteId={instituteId}
          viewAs="EXAMINATION_SECTION"
          // bid={""}
        />
      )}
      {getQuery?.search?.substring(3) === "department&n=fees" && (
        <Fees
          //   did={departmentProfile?.department?._id}
          bid={getExaminationSectionDetail?.c_query?.defaultBatch}
          did={getQuery.state?.did}
          // bid={""}
        />
      )}
      {getQuery?.search?.substring(3, 23) === "department&n=backlog" && (
        <Backlogs
          did={getQuery.state?.did}
          viewAs="EXAMINATION_SECTION"
          carryParentState={carryParentState}
        />
      )}
      {gradeOpen && (
        <GradeSystem onClose={onGradeToggle} did={getQuery.state?.did} />
      )}
      {getQuery?.search?.substring(3) === "department&n=credit" && (
        <SubjectCredit did={getQuery.state?.did} instituteId={instituteId} />
      )}
    </>
  );
};

export default OneExamDepartment;

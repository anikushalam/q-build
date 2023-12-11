import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {
  useDepartmentExamDetail,
  useSendExamNotifyToSubject,
} from "../../../../../../hooks/member_tab/department-api";
import JoinFormInputView from "../../../../../../JoiningForm/Student/Form/JoinFormInputView";
import DepartmentTabChangeLink from "../../DepartmentTabChangeLink";
import SeatingArrangement from "../SeatingArrangement/SeatingArrangement";
import style from "../SeatingArrangement/SeatingArrangement.module.css";
import ExamTabChangeLink from "../../../ExamDepartment/ExamTabChangeLink";
import ExamCreatedSubjectView from "./ExamCreatedSubjectView";
import QLoader from "../../../../../../Loader/QLoader";

const OneExamDetail = ({ instituteId, viewAs }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [state, setState] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const { departmentExamDetail, departmentExamDetailRefetch } =
    useDepartmentExamDetail({
      eid: getQuery.state?.examId,
      skip: !getQuery.state?.examId,
    });
  const { sendExamNotifyToSubject, sendExamNotifyToSubjectRefetch } =
    useSendExamNotifyToSubject({
      eid: getQuery.state?.examId,
      skip: state,
    });

  useEffect(() => {
    if (getQuery.state?.examId) departmentExamDetailRefetch();
  }, [getQuery.state?.examId, departmentExamDetailRefetch]);

  useEffect(() => {
    if (sendExamNotifyToSubject?.message) {
      if (
        sendExamNotifyToSubject.message ===
        "All designation of marks update is processing...😎"
      )
        setDisabled(false);
    }
  }, [sendExamNotifyToSubject?.message]);
  const onSendNotify = () => {
    setDisabled((pre) => !pre);
    setState(false);
    sendExamNotifyToSubjectRefetch();
  };
  return (
    <div className={style.view_container}>
      {(getQuery?.search?.substring(3) === "exam&n=detail" ||
        getQuery?.search?.substring(3) === "department&n=exam&n=detail" ||
        getQuery?.search?.substring(3) === "backlog&exam&detail" ||
        getQuery?.search?.substring(3) ===
          "department&n=backlog&exam&detail") && (
        <>
          <h6 className={style.exam_detail_h6}>{t("exam_detail")}</h6>
          {viewAs === "DEPARTMENT_BACKLOG" &&
            departmentExamDetail?.exam?.is_backlog_notify === "Not Send" &&
            !sendExamNotifyToSubject?.message && (
              <div
                style={{
                  position: "relative",
                }}
              >
                <button
                  className={style.next_btn}
                  onClick={onSendNotify}
                  style={{
                    top: "-2rem",
                    backgroundColor: "inherit",
                  }}
                  title="Send exam update notification"
                >
                  {t("send_notification")}
                </button>
              </div>
            )}

          <section className={style.exam_info_container}>
            <JoinFormInputView
              labelText={`${t("exam_name")}:`}
              value={departmentExamDetail?.exam?.examName ?? ""}
              customStyleValue={{
                fontWeight: "500",
              }}
            />
            <JoinFormInputView
              labelText={`${t("exam_type")}:`}
              value={departmentExamDetail?.exam?.examType ?? ""}
              customStyleValue={{
                fontWeight: "500",
              }}
            />
            <JoinFormInputView
              labelText={`${t("exam_mode")}:`}
              value={departmentExamDetail?.exam?.examMode ?? ""}
              customStyleValue={{
                fontWeight: "500",
              }}
            />
            {departmentExamDetail?.exam?.examType === "Other" && (
              <JoinFormInputView
                labelText={`${t("exam_weight")}:`}
                // value={`${departmentExamDetail?.exam?.examWeight ?? ""} ${t(
                //   "total_weightage"
                // )}`}
                value={`${departmentExamDetail?.exam?.examWeight ?? ""}%`}
                customStyleValue={{
                  fontWeight: "500",
                }}
              />
            )}
          </section>
          <div className={style.exam_schedule}>
            <h6>{t("exam_schedule")}</h6>
            {viewAs === "EXAMINATION_SECTION" ? (
              <ExamTabChangeLink
                carryParentState={{
                  ...getQuery.state,
                  examName: departmentExamDetail?.exam?.examName,
                }}
                activeTab={"department&n=backlog&exam&detail&subject"}
              >
                <button
                  className={
                    // viewSchedule
                    //   ? ` ${style.exam_schedule_btn} ${style.exam_schedule_btn_active}`
                    //   :
                    style.exam_schedule_btn
                  }
                  title="See Exam Schedule"
                >
                  <div>{t("exam_schedule")}</div>
                  <img src="/images/forward-right-icon.svg" alt="next step" />
                </button>
              </ExamTabChangeLink>
            ) : (
              <DepartmentTabChangeLink
                carryParentState={{
                  ...getQuery.state,
                  examName: departmentExamDetail?.exam?.examName,
                }}
                activeTab={
                  viewAs === "DEPARTMENT_BACKLOG"
                    ? "backlog&exam&detail&subject"
                    : "exam&n=detail&subject"
                }
              >
                <button
                  className={
                    // viewSchedule
                    //   ? ` ${style.exam_schedule_btn} ${style.exam_schedule_btn_active}`
                    //   :
                    style.exam_schedule_btn
                  }
                  title="See Exam Schedule"
                >
                  <div>{t("exam_schedule")}</div>
                  <img src="/images/forward-right-icon.svg" alt="next step" />
                </button>
              </DepartmentTabChangeLink>
            )}
          </div>

          <div className={style.exam_schedule}>
            <h6>{t("seating_arrangements")}</h6>
            {viewAs === "EXAMINATION_SECTION" ? (
              <ExamTabChangeLink
                carryParentState={{
                  ...getQuery.state,
                  examName: departmentExamDetail?.exam?.examName,
                }}
                activeTab="department&n=exam&n=detail&seating"
              >
                <button
                  className={style.exam_schedule_btn}
                  title="See Seating Arrangements"
                  // onClick={onMoveNextStep}
                >
                  <div>{t("seating_arrangements")}</div>
                  <img src="/images/forward-right-icon.svg" alt="next step" />
                </button>
              </ExamTabChangeLink>
            ) : (
              <DepartmentTabChangeLink
                carryParentState={{
                  ...getQuery.state,
                  examName: departmentExamDetail?.exam?.examName,
                }}
                activeTab={
                  viewAs === "DEPARTMENT_BACKLOG"
                    ? "backlog&exam&detail&seating"
                    : "exam&n=detail&seating"
                }
              >
                <button
                  className={style.exam_schedule_btn}
                  title="See Seating Arrangements"
                  // onClick={onMoveNextStep}
                >
                  <div>{t("seating_arrangements")}</div>
                  <img src="/images/forward-right-icon.svg" alt="next step" />
                </button>
              </DepartmentTabChangeLink>
            )}
          </div>
        </>
      )}
      {(getQuery?.search?.substring(3) === "exam&n=detail&seating" ||
        getQuery?.search?.substring(3) ===
          "department&n=exam&n=detail&seating" ||
        getQuery?.search?.substring(3) === "backlog&exam&detail&seating" ||
        getQuery?.search?.substring(3) ===
          "department&n=backlog&exam&detail&seating") && (
        <SeatingArrangement instituteId={instituteId} viewAs="BACKLOG" />
      )}

      {(getQuery?.search?.substring(3) === "exam&n=detail&subject" ||
        getQuery?.search?.substring(3) ===
          "department&n=exam&n=detail&subject" ||
        getQuery?.search?.substring(3) === "backlog&exam&detail&subject" ||
        getQuery?.search?.substring(3) ===
          "department&n=backlog&exam&detail&subject") && (
        <section className={style.schedule_subject_container}>
          <ExamCreatedSubjectView
            examSubject={departmentExamDetail?.oneExamDetail}
          />
        </section>
      )}
      {disabled && <QLoader />}
    </div>
  );
};

export default OneExamDetail;

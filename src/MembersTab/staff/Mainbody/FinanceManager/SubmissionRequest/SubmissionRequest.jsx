import React from "react";
import style from "./SubmissionRequest.module.css";
import ClassTeacherRequest from "./ClassTeacherRequest";
import AdmissionRequest from "./AdmissionRequest";
import LibraryRequest from "./LibraryRequest";
import HostelRequest from "./HostelRequest";
import { useLocation, useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TransportRequest from "./TransportRequest";
function SubmissionRequest({ carryParentState }) {
  const getQuery = useLocation();
  const params = useParams();
  const { t } = useTranslation();
  return (
    <div className={style.SubmissionRequest}>
      <section className={style.submission_tab_container}>
        <Link
          to={`/q/${params.username}/member/finance?a=submission`}
          state={{
            ...carryParentState,
          }}
          style={{
            width: "20%",
          }}
        >
          <h6
            className={
              getQuery?.search?.substring(3) === "submission"
                ? `${style.submission_tab_text} ${style.submission_tab_text_active}`
                : style.submission_tab_text
            }
          >
            {t("class_teacher")}
          </h6>
        </Link>
        <Link
          to={`/q/${params.username}/member/finance?a=submission&n=admission`}
          state={{
            ...carryParentState,
          }}
          style={{
            width: "20%",
          }}
        >
          <h6
            className={
              getQuery?.search?.substring(16) === "admission"
                ? `${style.submission_tab_text} ${style.submission_tab_text_active}`
                : style.submission_tab_text
            }
          >
            {t("admission")}
          </h6>
        </Link>
        <Link
          to={`/q/${params.username}/member/finance?a=submission&n=library`}
          state={{
            ...carryParentState,
          }}
          style={{
            width: "20%",
          }}
        >
          <h6
            className={
              getQuery?.search?.substring(16) === "library"
                ? `${style.submission_tab_text} ${style.submission_tab_text_active}`
                : style.submission_tab_text
            }
          >
            {t("library")}
          </h6>
        </Link>
        <Link
          to={`/q/${params.username}/member/finance?a=submission&n=hostel`}
          state={{
            ...carryParentState,
          }}
          style={{
            width: "20%",
          }}
        >
          <h6
            className={
              getQuery?.search?.substring(16) === "hostel"
                ? `${style.submission_tab_text} ${style.submission_tab_text_active}`
                : style.submission_tab_text
            }
          >
            {t("hostel")}
          </h6>
        </Link>
        <Link
          to={`/q/${params.username}/member/finance?a=submission&n=transport`}
          state={{
            ...carryParentState,
          }}
          style={{
            width: "20%",
          }}
        >
          <h6
            className={
              getQuery?.search?.substring(16) === "transport"
                ? `${style.submission_tab_text} ${style.submission_tab_text_active}`
                : style.submission_tab_text
            }
          >
            {t("transport")}
          </h6>
        </Link>
      </section>
      <div className={style.submissionContent}>
        {getQuery?.search?.substring(3) === "submission" && (
          <ClassTeacherRequest />
        )}
        {getQuery?.search?.substring(16) === "admission" && (
          <AdmissionRequest />
        )}
        {getQuery?.search?.substring(16) === "library" && <LibraryRequest />}
        {getQuery?.search?.substring(16) === "hostel" && <HostelRequest />}
        {getQuery?.search?.substring(16) === "transport" && (
          <TransportRequest />
        )}
        {/* {getQuery?.search?.substring(3) === "submission" && (
          <ClassTeacherRequest />
        )} */}
      </div>
    </div>
  );
}

export default SubmissionRequest;

import React, { useEffect, useState } from "react";
import style from "../../../Hostel/Hostel.module.css";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInputView from "../../../../../../JoiningForm/Student/Form/JoinFormInputView";
import moment from "moment";
import JoinFormTextArea from "../../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useGetQueryDetail,
  useMarkQuery,
} from "../../../../../../hooks/member_tab/department-api";
import QLoader from "../../../../../../Loader/QLoader";
import { useMentorQueryReportStudent } from "../../../../../../hooks/member_tab/student-api";

const QueryDetail = ({ queryFlow }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    remark: "",
    forward: "",
  });
  const { getQueryDetail, getQueryDetailRefetch } = useGetQueryDetail({
    qid: getQuery.state?.qid,
    skip: !getQuery.state?.qid,
  });

  const [markQuery] = useMarkQuery();
  const [mentorQueryReportStudent] = useMentorQueryReportStudent();
  useEffect(() => {
    if (getQuery.state?.qid) {
      getQueryDetailRefetch();
    }
  }, [getQuery.state?.qid, getQueryDetailRefetch]);

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };

  const onMarkSolved = () => {
    if (state.remark || state.forward) {
      setDisabled((pre) => !pre);
      markQuery({
        qid: getQuery.state?.qid,
        flow: queryFlow,
        mark_query: state,
      })
        .then(() => {
          getQueryDetailRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  const onStudentReport = () => {
    if (getQuery.state?.qid) {
      setDisabled((pre) => !pre);
      mentorQueryReportStudent({
        qid: getQuery.state?.qid,
      })
        .then(() => {
          getQueryDetailRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <>
      <div
        className={style.with_search}
        style={{
          justifyContent: "flex-start",
          gap: "1rem",
        }}
      >
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt="go to previous tab"
          title="Go Back"
          style={{
            cursor: "pointer",
          }}
        />
        <h6>{t("query")}</h6>
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "0.5rem",
        }}
      />

      <JoinFormInputView
        labelText={t("mentor")}
        value={`${
          getQueryDetail?.query?.mentor?.mentor_head?.staffFirstName ?? ""
        } ${
          getQueryDetail?.query?.mentor?.mentor_head?.staffMiddleName ?? ""
        } ${getQueryDetail?.query?.mentor?.mentor_head?.staffLastName ?? ""}`}
      />
      {queryFlow === "By_Student" ? (
        <>
          <JoinFormInputView
            labelText={t("raised_on")}
            value={moment(getQueryDetail?.query?.raised_on).format(
              "DD MMM,yyyy"
            )}
          />
          <JoinFormInputView
            labelText={`${t("query")}: `}
            value={getQueryDetail?.query?.query ?? ""}
            customStyleContainer={{
              alignItems: "flex-start",
            }}
          />
          <JoinFormInputView
            labelText={t("replied_on")}
            value={moment(getQueryDetail?.query?.report_on).format(
              "DD MMM,yyyy"
            )}
          />
          <JoinFormInputView
            labelText={t("remark_by_mentor_if_any")}
            value={getQueryDetail?.query?.remark ?? ""}
            customStyleContainer={{
              alignItems: "flex-start",
            }}
          />

          {getQueryDetail?.query?.report_by === "Reported" ? (
            <p
              className={style.mentor_status_card_paragraph}
              style={{
                color: "#E2C318",
              }}
            >
              {t("reported")}
            </p>
          ) : getQueryDetail?.query?.query_status === "Solved" ? (
            <p
              className={style.mentor_status_card_paragraph}
              style={{
                color: "#20B038",
              }}
            >
              {t("solved")}
            </p>
          ) : getQueryDetail?.query?.query_status === "UnSolved" ? (
            <p
              className={style.mentor_status_card_paragraph}
              style={{
                color: "#EE3833",
              }}
            >
              {t("not_solved")}
            </p>
          ) : null}

          {getQueryDetail?.query?.report_by === "Reported" ? null : (
            <p className={style.mentor_status_card_paragraph}>
              {t("if_query_not_resolved")}:{"  "}
              <span
                style={{
                  color: "#EE3833",
                  cursor: "pointer",
                }}
                onClick={onStudentReport}
              >
                {t("report")}
              </span>
            </p>
          )}

          {getQueryDetail?.query?.query_status === "Solved" && (
            <JoinFormInputView
              labelText={t("remark_by_me")}
              value={getQueryDetail?.query?.remark_by_depart ?? ""}
              customStyleContainer={{
                alignItems: "flex-start",
              }}
            />
          )}
        </>
      ) : (
        <>
          <JoinFormInputView
            labelText={t("mentee")}
            value={`${getQueryDetail?.query?.student?.studentFirstName ?? ""} ${
              getQueryDetail?.query?.student?.studentMiddleName ?? ""
            } ${getQueryDetail?.query?.student?.studentLastName ?? ""}`}
          />
          <JoinFormInputView
            labelText={`${t("mobile_number")}/${t("email")}: `}
            value={
              getQueryDetail?.query?.student?.user?.userPhoneNumber ??
              getQueryDetail?.query?.student?.user?.userEmail ??
              ""
            }
          />
          <JoinFormInputView
            labelText={t("raised_on")}
            value={moment(getQueryDetail?.query?.raised_on).format(
              "DD MMM,yyyy"
            )}
          />
          <JoinFormInputView
            labelText={t("reported_on")}
            value={moment(getQueryDetail?.query?.report_on).format(
              "DD MMM,yyyy"
            )}
          />
          <JoinFormInputView
            labelText={`${t("query")}: `}
            value={getQueryDetail?.query?.query ?? ""}
            customStyleContainer={{
              alignItems: "flex-start",
            }}
          />
          <JoinFormInputView
            labelText={t("remark_by_mentor_if_any")}
            value={getQueryDetail?.query?.remark ?? ""}
            customStyleContainer={{
              alignItems: "flex-start",
            }}
          />
          {getQueryDetail?.query?.query_status === "Solved" && (
            <JoinFormInputView
              labelText={t("remark_by_me")}
              value={getQueryDetail?.query?.remark_by_depart ?? ""}
              customStyleContainer={{
                alignItems: "flex-start",
              }}
            />
          )}

          {getQueryDetail?.query?.query_status !== "Solved" && (
            <>
              <JoinFormTextArea
                labelText={t("remark")}
                name="remark"
                type={"text"}
                value={state.remark}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    remark: e.target.value,
                  }))
                }
                placeholder={t("follow_up_details")}
              />
              <button
                className={style.student_renewal_confirm_btn}
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onClick={onMarkSolved}
              >
                {t("send")}
              </button>
            </>
          )}
        </>
      )}

      {disabled && <QLoader />}
    </>
  );
};

export default QueryDetail;

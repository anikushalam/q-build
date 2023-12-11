import React from "react";
import style from "../../../../staff/Mainbody/StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import StudentMentorTab from "./StudentMentorTab";
import QueryDetail from "../../../../staff/Mainbody/DepartmentHead/DepartmentMentor/DepartmentQueries/QueryDetail";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import StudentMentorQueries from "./StudentMentorQueries";
import StaffMentorMeeting from "../../../../staff/Mainbody/StaffMentor/StaffMentorMeeting";
import MeetingDetail from "../../../../staff/Mainbody/DepartmentHead/DepartmentMentor/DepartmentQueries/MeetingDetail";
const StudentMentor = ({ carryParentState, sid }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const params = useParams();
  const getQuery = useLocation();
  const [searchParams] = useSearchParams();
  const onBackWithArrowLeft = () => {
    navigate(`/q/${params.username}/member/mentor`, {
      state: {
        ...carryParentState,
      },
    });
  };
  return (
    <div
      className={style.admission_application_container}
      style={{
        marginTop: "1vw",
      }}
    >
      {searchParams.get("n") === "query-detail" ? (
        <QueryDetail queryFlow="By_Student" />
      ) : searchParams.get("n") === "meeting-detail" ? (
        <MeetingDetail queryFlow="By_Student" />
      ) : (
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
            <h6>{t("complaint_and_queries")}</h6>
          </div>
          <BorderBottom
            customStyle={{
              width: "100%",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          />
          <StudentMentorTab carryParentState={carryParentState} />
          {searchParams.get("n") === "meeting" ? (
            <StaffMentorMeeting
              mid={getQuery.state?.mid}
              carryParentState={carryParentState}
              queryFlow="By_Student"
            />
          ) : (
            <StudentMentorQueries
              sid={sid}
              carryParentState={carryParentState}
              mid={getQuery.state?.mid ?? ""}
            />
          )}
        </>
      )}
    </div>
  );
};

export default StudentMentor;

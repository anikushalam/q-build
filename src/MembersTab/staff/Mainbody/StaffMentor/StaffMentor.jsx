import React from "react";
import style from "../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import StaffMentorTabs from "./StaffMentorTabs";
import StaffMenteeList from "./StaffMenteeList";
import { useTranslation } from "react-i18next";
import DepartmentQueries from "../DepartmentHead/DepartmentMentor/DepartmentQueries/DepartmentQueries";
import QueryDetail from "../DepartmentHead/DepartmentMentor/DepartmentQueries/QueryDetail";
import StaffMentorMeeting from "./StaffMentorMeeting";
import MeetingDetail from "../DepartmentHead/DepartmentMentor/DepartmentQueries/MeetingDetail";
const StaffMentor = ({ carryParentState, onClickValue }) => {
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
      {searchParams.get("a") === "query-detail" ? (
        <QueryDetail queryFlow="By_Mentor" />
      ) : searchParams.get("a") === "meeting-detail" ? (
        <MeetingDetail />
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
            <h6>{t("desi_mentor")}</h6>
          </div>
          <BorderBottom
            customStyle={{
              width: "100%",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          />
          <StaffMentorTabs carryParentState={carryParentState} />

          {searchParams.get("a") === "queries" ? (
            <DepartmentQueries
              did={onClickValue}
              carryParentState={carryParentState}
              queryFlow="By_Mentor"
            />
          ) : searchParams.get("a") === "meeting" ? (
            <StaffMentorMeeting
              mid={onClickValue}
              carryParentState={carryParentState}
              queryFlow="By_Mentor"
            />
          ) : (
            <StaffMenteeList mid={onClickValue} />
          )}
        </>
      )}
    </div>
  );
};

export default StaffMentor;

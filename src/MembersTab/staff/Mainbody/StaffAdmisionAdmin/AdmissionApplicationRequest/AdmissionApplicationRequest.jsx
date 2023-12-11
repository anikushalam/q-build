import React from "react";
import style from "./AdmissionApplicationRequest.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AdmissionOngoingApplication from "./OngoingApplication/AdmissionOngoingApplication";
import AdmissionOneOngoingApplication from "./OngoingApplication/AdmissionOneOngoingApplication";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useTranslation } from "react-i18next";
const AdmissionApplicationRequest = ({
  admissionId,
  instituteId,
  carryParentState,
  accessRole,
  accessApplication,
  accessTpye,
  callApi,
  pageOpenAs,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const params = useParams();
  const getQuery = useLocation();
  const onBackWithArrowLeft = () => {
    // navigate(-1);
    if (pageOpenAs === "INSTITUTE") {
      navigate(`/q/${params.username}/admission`, {
        state: {
          ...carryParentState,
        },
      });
    } else {
      navigate(`/q/${params.username}/member/admission`, {
        state: {
          ...carryParentState,
        },
      });
    }
  };

  return (
    <div className={style.admission_application_container}>
      {getQuery.search?.substring(3) === "ongoing" && (
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
            <h6>{t("ongoing_application")}</h6>
          </div>
          <BorderBottom
            customStyle={{
              width: "100%",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          />
        </>
      )}

      {getQuery.search?.substring(3) === "ongoing" && (
        <AdmissionOngoingApplication
          admissionId={admissionId}
          carryParentState={carryParentState}
          accessRole={accessRole}
          accessTpye={accessTpye}
          accessApplication={accessApplication}
          callApi={callApi}
          pageOpenAs={pageOpenAs}
        />
      )}
      {getQuery?.search?.substring(3, 13) === "ongoing&n=" && (
        <AdmissionOneOngoingApplication
          instituteId={instituteId}
          admissionId={admissionId}
          carryParentState={carryParentState}
          accessRole={accessRole}
          accessTpye={accessTpye}
          callApi={callApi}
          pageOpenAs={pageOpenAs}
        />
      )}
    </div>
  );
};

export default AdmissionApplicationRequest;

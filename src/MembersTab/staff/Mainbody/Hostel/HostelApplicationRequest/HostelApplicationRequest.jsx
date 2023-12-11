import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import style from "../Hostel.module.css";
import HostelCompletedApplication from "./HostelCompletedApplication/HostelCompletedApplication";
import HostelOneOngoingApp from "./HostelOneOngoingApp";
import HostelOngoingApplication from "./HostelOngoingApplication";
import HostelRenewal from "./HostelRenewal/HostelRenewal";
import HostelUnit from "../HostelUnit/HostelUnit";

const HostelApplicationRequest = ({
  hid,
  carryParentState,
  accessApplication,
  accessRole,
  accessTpye,
  callApi,
  pageOpenAs,
  instituteId,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const params = useParams();

  const tabList = [
    {
      name: t("application"),
      id: 0,
      url: "member/hostel?a=request",
      is_active:
        accessRole === "MULTI_APP_ACCESS" || !accessRole
          ? "enabled"
          : "disabled",
    },
    {
      name: t("completed"),
      id: 1,
      url: "member/hostel?a=request&completed",
      is_active: !accessRole ? "enabled" : "disabled",
    },
    {
      name: t("renewals"),
      id: 2,
      url: "member/hostel?a=request&unit&renewal",
      is_active:
        accessRole === "RENEWAL_UNIT_ACCESS" || !accessRole
          ? "enabled"
          : "disabled",
    },
  ];
  const tabListInstitute = [
    {
      name: t("application"),
      id: 0,
      url: "hostel?a=request",
      is_active: "enabled",
    },
    {
      name: t("completed"),
      id: 1,
      url: "hostel?a=request&completed",
      is_active: "enabled",
    },
    {
      name: t("renewals"),
      id: 2,
      url: "hostel?a=request&unit&renewal",
      is_active: "enabled",
    },
  ];

  const onBackWithArrowLeft = () => {
    // here is bugs to solve issue
    // navigate(-1);
    if (pageOpenAs === "INSTITUTE") {
      navigate(`/q/${params.username}/hostel`, {
        state: {
          ...carryParentState,
        },
      });
    } else {
      navigate(`/q/${params.username}/member/hostel`, {
        state: {
          ...carryParentState,
        },
      });
    }
  };
  return (
    <>
      {(getQuery.search?.substring(3) === "request" ||
        getQuery.search?.substring(3) === "request&completed" ||
        getQuery.search?.substring(3) === "request&unit&renewal") && (
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
            <h6>{t("reuqests")}</h6>
          </div>
          <UniversalTab
            tabList={pageOpenAs === "INSTITUTE" ? tabListInstitute : tabList}
            activeIndexTab={
              getQuery.search?.substring(3) === "request"
                ? 0
                : getQuery.search?.substring(3) === "request&completed"
                ? 1
                : 2
            }
            showAs={true}
            customStyleLink={{
              width: "50%",
            }}
            carryParentState={carryParentState}
          />
          <BorderBottom
            customStyle={{
              width: "100%",
              marginBottom: "0.5rem",
            }}
          />
        </>
      )}

      {getQuery.search?.substring(3) === "request" && (
        <HostelOngoingApplication
          hid={hid}
          carryParentState={carryParentState}
          accessRole={accessRole}
          accessTpye={accessTpye}
          accessApplication={accessApplication}
          callApi={callApi}
          pageOpenAs={pageOpenAs}
        />
      )}
      {getQuery.search?.substring(3, 18) === "request&ongoing" && (
        <HostelOneOngoingApp
          hid={hid}
          carryParentState={carryParentState}
          accessRole={accessRole}
          accessTpye={accessTpye}
          callApi={callApi}
          pageOpenAs={pageOpenAs}
          instituteId={instituteId}
        />
      )}
      {getQuery.search?.substring(3, 20) === "request&completed" && (
        <HostelCompletedApplication
          hid={hid}
          carryParentState={carryParentState}
          accessRole={accessRole}
          accessTpye={accessTpye}
          callApi={callApi}
          pageOpenAs={pageOpenAs}
        />
      )}
      {getQuery.search?.substring(3) === "request&unit&renewal" && (
        <HostelUnit
          hid={hid}
          carryParentState={carryParentState}
          viewAs="RENEWAL"
        />
      )}
      {getQuery.search?.substring(3, 18) === "request&renewal" && (
        <HostelRenewal
          hid={hid}
          carryParentState={carryParentState}
          // accessRole={accessRole}
        />
      )}
    </>
  );
};

export default HostelApplicationRequest;

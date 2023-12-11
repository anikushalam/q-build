import React from "react";
import { useTranslation } from "react-i18next";
import style from "../MembersTab/staff/Mainbody/Hostel/MiddleContent/MiddleContent.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
import HostelRules from "../MembersTab/staff/Mainbody/Hostel/HostelRules/HostelRules";
import HostelFeesStructureList from "../MembersTab/staff/Mainbody/Hostel/HostelFeeStructure/HostelFeesStructureList";
import HostelUnit from "../MembersTab/staff/Mainbody/Hostel/HostelUnit/HostelUnit";

const HostelSearchTab = ({ carryParentState, hostel }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const params = useParams();
  return (
    <>
      <div
        style={{
          width: "100%",
          paddingBottom: "2vw",
        }}
      >
        {!getQuery?.search && (
          <div className={style.item}>
            <Link
              to={`/q/${params?.username}/hostel/profile?a=knows`}
              state={{
                ...carryParentState,
              }}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/hostel/hostel-know-icon.svg"
                  alt="inquery"
                />
                <p>{t("knows_hostel")}</p>
              </div>
            </Link>
            <Link
              to={`/q/${params?.username}/hostel/profile?a=rules`}
              state={{
                ...carryParentState,
              }}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/hostel/hostel-rule-icon.svg"
                  alt="moderator icon"
                />
                <p>{t("rules_and_regulation")}</p>
              </div>
            </Link>
            <Link
              to={`/q/${params?.username}/hostel/profile?a=fees`}
              state={{
                ...carryParentState,
              }}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/finance/finance-pending-icon.svg"
                  alt="refund"
                />
                <p>{t("fees")}</p>
              </div>
            </Link>
          </div>
        )}

        {getQuery?.search?.substring(3) === "rules" && (
          <div
            style={{
              padding: "1rem",
            }}
          >
            <HostelRules hid={getQuery.state?.hid} viewAs="HOSTEL_SEARCH" />
          </div>
        )}
        {getQuery?.search?.substring(3) === "fees" && (
          <div
            style={{
              padding: "1rem",
            }}
          >
            <HostelFeesStructureList
              financeId={hostel?.institute?.financeDepart?.[0]?._id}
              hostelId={hostel?._id}
              instituteId={hostel?.institute?._id}
              viewAs="HOSTEL_SEARCH"
            />
          </div>
        )}
        {getQuery?.search?.substring(3) === "knows" && (
          <div
            style={{
              padding: "1rem",
            }}
          >
            <HostelUnit
              hid={hostel?._id}
              carryParentState={carryParentState}
              viewAs="HOSTEL_SEARCH"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default HostelSearchTab;

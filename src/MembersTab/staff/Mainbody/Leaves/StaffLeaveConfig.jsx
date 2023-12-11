import React from "react";
import style from "../Hostel/Hostel.module.css";
import { useSearchParams } from "react-router-dom";
import UniversalTab from "../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useTranslation } from "react-i18next";
import Leaves from "./Leaves";
import StaffManageCOff from "./StaffManageCOff";
import StaffLeaveOverview from "./StaffLeaveOverview";

const StaffLeaveConfig = ({ carryParentState, staffId }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const tabList = [
    {
      name: t("request"),
      id: 0,
      url: "member?a=leave",
      is_active: "enabled",
    },
    {
      name: t("overview"),
      id: 1,
      url: "member?a=leave&n=overview",
      is_active: "enabled",
    },
    {
      name: t("c_off_leave"),
      id: 2,
      url: "member?a=leave&n=manage-off",
      is_active: "enabled",
    },
  ];
  return (
    <>
      <div
        style={{
          marginTop: "1rem",
        }}
      >
        <div className={style.hostel_container}>
          <div className={style.with_search}>
            <h6>{t("leave_request")}</h6>
          </div>
          <BorderBottom
            customStyle={{
              marginTop: "0.5rem",
              width: "100%",
            }}
          />
          <UniversalTab
            tabList={tabList}
            activeIndexTab={
              !searchParams.get("n")
                ? 0
                : searchParams.get("n") === "overview"
                ? 1
                : 2
            }
            showAs={true}
            customStyleTab={{
              width: "100%",
            }}
            customStyleLink={{
              width: "33.3%",
            }}
            carryParentState={carryParentState}
          />
          <BorderBottom
            customStyle={{
              width: "100%",
              marginBottom: "0.6rem",
            }}
          />

          {!searchParams.get("n") ? (
            <Leaves staffId={staffId} />
          ) : searchParams.get("n") === "overview" ? (
            <StaffLeaveOverview staffId={staffId} />
          ) : (
            <StaffManageCOff staffId={staffId} />
          )}
        </div>
      </div>
    </>
  );
};

export default StaffLeaveConfig;

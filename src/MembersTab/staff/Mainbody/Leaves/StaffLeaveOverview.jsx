import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import style from "../LeaveAndTransferAuthority/LeavesAndTransfer.module.css";
import { useGetLeaveOverviewCount } from "../../../../hooks/member_tab/department-api";
import TileWrapper from "../../../../Department/Institute/Components/exportData/TileWrapper";
import StaffLeaveOverviewIssued from "./StaffLeaveOverviewIssued";
import { useLocation } from "react-router-dom";
const typeList = [
  {
    name: "all",
    key: "All Leave",
    isAvaiable: true,
    count: 0,
    mode: "FILTER",
  },
  {
    name: "casual_leave",
    key: "Casual Leave",
    isAvaiable: true,
    count: 0,
    mode: "FILTER",
  },
  {
    name: "medical_leave",
    key: "Medical Leave",
    isAvaiable: true,
    count: 0,
    mode: "FILTER",
  },
  {
    name: "sick_leave",
    key: "Sick Leave",
    isAvaiable: true,
    count: 0,
    mode: "FILTER",
  },
  {
    name: "compensation_off_leave",
    key: "Compensation Off Leave",
    isAvaiable: true,
    count: 0,
    mode: "FILTER",
  },
  {
    name: "on_duty_leave",
    key: "On Duty Leave",
    isAvaiable: true,
    count: 0,
    mode: "FILTER",
  },
  {
    name: "leave_without_pay",
    key: "Leave Without Pay",
    isAvaiable: true,
    count: 0,
    mode: "FILTER",
  },
];
function StaffLeaveOverview({ staffId }) {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [stateType, setStateType] = useState(typeList);
  const [currentTileActive, setCurrentTileActive] = useState("");

  const { getLeaveOverviewCount, getLeaveOverviewCountRefetch } =
    useGetLeaveOverviewCount({
      data: {
        sid: staffId,
      },
      skip: !staffId,
    });
  useEffect(() => {
    if (staffId) {
      setShowingDataLoading(true);
      getLeaveOverviewCountRefetch();
    }
  }, [staffId, getLeaveOverviewCountRefetch]);

  useEffect(() => {
    if (getLeaveOverviewCount?.overview) {
      let lm = typeList;
      lm[0].count = getLeaveOverviewCount?.overview?.casual_leave;
      lm[1].count = getLeaveOverviewCount?.overview?.medical_leave;
      lm[2].count = getLeaveOverviewCount?.overview?.sick_leave;
      lm[3].count = getLeaveOverviewCount?.overview?.c_off_leave;
      lm[4].count = getLeaveOverviewCount?.overview?.off_duty_leave;
      lm[5].count = getLeaveOverviewCount?.overview?.lwp_leave;
      setStateType(lm);
      if (getQuery.state.isCategory) {
        setCurrentTileActive({
          key: getQuery.state.isCategory,
        });
      } else {
        setCurrentTileActive(lm[0]);
      }
      setShowingDataLoading(false);
    }
  }, [getLeaveOverviewCount?.overview]);

  const onSelectParentType = (val) => {
    setCurrentTileActive(val);
  };
  return (
    <>
      <div
        className={style.request_card_inner_text}
        style={{
          marginTop: "0.5rem",
        }}
      >
        {getQuery?.state?.staffName ? (
          <h6
            style={{
              fontWeight: "400",
            }}
          >
            {t("name")} {" : "}
            {getQuery?.state?.staffName}
          </h6>
        ) : null}
        <h6
          style={{
            fontWeight: "400",
          }}
        >
          {t("total_leave_available")} {" : "}
          {getLeaveOverviewCount?.overview?.total_leave_available}
        </h6>
        <h6
          style={{
            fontWeight: "400",
          }}
        >
          {t("total_leave_taken")} {" : "}
          {getLeaveOverviewCount?.overview?.total_leave_taken}
        </h6>
      </div>
      <TileWrapper
        labelText=""
        tileList={stateType}
        activeTile={currentTileActive?.key}
        onParentTile={onSelectParentType}
        customTileContainer={{
          flexWrap: "wrap",
        }}
      />

      <StaffLeaveOverviewIssued
        categoryKey={currentTileActive?.key}
        staffId={staffId}
      />
      {showingDataLoading && <QvipleLoading />}
    </>
  );
}

export default StaffLeaveOverview;

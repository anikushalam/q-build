import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useGetLeaveOverviewIssue } from "../../../../hooks/member_tab/department-api";
import StaffLeaveCard from "./StaffLeaveCard";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import style from "../LeaveAndTransferAuthority/LeavesAndTransfer.module.css";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";

const StaffLeaveOverviewIssued = ({ staffId, categoryKey }) => {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [leaveList, setLeaveList] = useState([]);

  const { getLeaveOverviewIssue, getLeaveOverviewIssueRefetch } =
    useGetLeaveOverviewIssue({
      data: {
        sid: staffId,
        page: page,
        limit: 10,
        category: categoryKey === "All Leave" ? "" : categoryKey,
      },
      skip: !categoryKey ? !categoryKey : !staffId,
    });
  useEffect(() => {
    if (staffId) {
      setShowingDataLoading(true);
      getLeaveOverviewIssueRefetch();
    }
  }, [staffId, categoryKey, page, getLeaveOverviewIssueRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getLeaveOverviewIssue?.all_leave) {
      if (page === 1) {
        setLeaveList(getLeaveOverviewIssue?.all_leave);
        setShowingDataLoading(false);
      } else {
        setLeaveList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getLeaveOverviewIssue?.all_leave]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      }
    } else if (getLeaveOverviewIssue?.all_leave?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getLeaveOverviewIssue?.all_leave?.length === 10) setState(true);
    else setState(false);
  }, [getLeaveOverviewIssue?.all_leave]);

  return (
    <>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.9rem",
        }}
      />
      <div
        className={style.request_card_inner_text}
        style={{
          marginTop: "0.5rem",
        }}
      >
        <h6>{categoryKey ?? ""}</h6>
      </div>
      {leaveList?.map((leave, index) =>
        leaveList?.length === index + 1 ? (
          <div ref={ref} key={leave?._id}>
            <StaffLeaveCard leave={leave} viewBy="OVERVIEW" />
          </div>
        ) : (
          <StaffLeaveCard key={leave?._id} leave={leave} viewBy="OVERVIEW" />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default StaffLeaveOverviewIssued;

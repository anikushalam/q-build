import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useGetManageCOffLeave } from "../../../../../hooks/member_tab/department-api";
import LeaveRequestCard from "./LeaveRequestCard";

const LeavesAndTransferAllCOff = ({ instituteId }) => {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [leaveList, setLeaveList] = useState([]);

  const { getManageCOffLeave, getManageCOffLeaveRefetch } =
    useGetManageCOffLeave({
      data: {
        id: instituteId,
        page: page,
        limit: 10,
        flow: "Request",
      },
      skip: !instituteId,
    });
  useEffect(() => {
    if (instituteId) {
      setShowingDataLoading(true);
      getManageCOffLeaveRefetch();
    }
  }, [instituteId, page, getManageCOffLeaveRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getManageCOffLeave?.all_leave) {
      if (page === 1) {
        setLeaveList(getManageCOffLeave?.all_leave);
        setShowingDataLoading(false);
      } else {
        setLeaveList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getManageCOffLeave?.all_leave]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      }
    } else if (getManageCOffLeave?.all_leave?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getManageCOffLeave?.all_leave?.length === 10) setState(true);
    else setState(false);
  }, [getManageCOffLeave?.all_leave]);

  const onRefetchWhenAction = () => {
    setPage(1);
    setShowingDataLoading(true);
    getManageCOffLeaveRefetch();
  };
  return (
    <>
      {leaveList?.map((leave, index) =>
        leaveList?.length === index + 1 ? (
          <div ref={ref} key={leave?._id}>
            <LeaveRequestCard
              leave={leave}
              onStaffLeaveListRefetch={onRefetchWhenAction}
              viewBy="COFF"
            />
          </div>
        ) : (
          <LeaveRequestCard
            key={index}
            leave={leave}
            onStaffLeaveListRefetch={onRefetchWhenAction}
            viewBy="COFF"
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default LeavesAndTransferAllCOff;

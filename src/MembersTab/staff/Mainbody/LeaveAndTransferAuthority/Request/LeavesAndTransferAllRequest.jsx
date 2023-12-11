import React, { useEffect, useState } from "react";
import { useStaffLeaveList } from "../../../../../hooks/institute/institute-staff-student-api";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import LeaveRequestCard from "./LeaveRequestCard";

const LeavesAndTransferAllRequest = ({ instituteId }) => {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [leaveList, setLeaveList] = useState([]);

  const { staffLeaveList, staffLeaveListRefetch } = useStaffLeaveList({
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
      staffLeaveListRefetch();
    }
  }, [instituteId, page, staffLeaveListRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (staffLeaveList?.all_leave) {
      if (page === 1) {
        setLeaveList(staffLeaveList?.all_leave);
        setShowingDataLoading(false);
      } else {
        setLeaveList((prevState) =>
          [
            ...new Set(
              [...prevState, ...staffLeaveList?.all_leave]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      }
    } else if (staffLeaveList?.all_leave?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (staffLeaveList?.all_leave?.length === 10) setState(true);
    else setState(false);
  }, [staffLeaveList?.all_leave]);

  const onRefetchWhenAction = () => {
    setPage(1);
    setShowingDataLoading(true);
    staffLeaveListRefetch();
  };
  return (
    <>
      {leaveList?.map((leave, index) =>
        leaveList?.length === index + 1 ? (
          <div ref={ref} key={leave?._id}>
            <LeaveRequestCard
              leave={leave}
              onStaffLeaveListRefetch={onRefetchWhenAction}
            />
          </div>
        ) : (
          <LeaveRequestCard
            key={index}
            leave={leave}
            onStaffLeaveListRefetch={onRefetchWhenAction}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default LeavesAndTransferAllRequest;

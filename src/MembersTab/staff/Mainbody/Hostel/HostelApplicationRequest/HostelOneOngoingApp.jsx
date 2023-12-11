import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HostelApplication from "./HostelApplication/HostelApplication";
import { useGetHostelAppliciontDetail } from "../../../../../hooks/member_tab/hostel-api";
import HostelSelected from "./HostelSelected/HostelSelected";
import HostelConfirm from "./HostelConfirm/HostelConfirm";
import HostelAllotted from "./HostelAllotted/HostelAllotted";
import HostelCancelled from "./HostelCancelled/HostelCancelled";

const HostelOneOngoingApp = ({
  carryParentState,
  hid,
  accessRole,
  accessTpye,
  pageOpenAs,
  instituteId,
}) => {
  const getQuery = useLocation();
  const { getHostelAppliciontDetail, getHostelAppliciontDetailRefetch } =
    useGetHostelAppliciontDetail({
      aid: getQuery.state?.applicationId,
      skip: !getQuery.state?.applicationId,
    });

  useEffect(() => {
    if (getQuery.state?.applicationId) getHostelAppliciontDetailRefetch();
  }, [getQuery.state?.applicationId, getHostelAppliciontDetailRefetch]);
  return (
    <>
      {getQuery.search?.substring(21) === "application" && (
        <HostelApplication
          applicationId={getQuery.state?.applicationId}
          hostelId={hid}
          carryParentState={carryParentState}
          applicationDetail={getHostelAppliciontDetail?.oneApply}
          accessRole={accessRole}
          accessTpye={accessTpye}
          applicationDetailApplicablePending={
            getHostelAppliciontDetail?.applicable_pending
          }
          pageOpenAs={pageOpenAs}
        />
      )}
      {getQuery.search?.substring(21) === "select" && (
        <HostelSelected
          applicationId={getQuery.state?.applicationId}
          hostelId={hid}
          carryParentState={carryParentState}
          applicationDetail={getHostelAppliciontDetail?.oneApply}
          accessRole={accessRole}
          accessTpye={accessTpye}
          applicationDetailApplicablePending={
            getHostelAppliciontDetail?.applicable_pending
          }
          pageOpenAs={pageOpenAs}
        />
      )}
      {getQuery.search?.substring(21) === "confirm" && (
        <HostelConfirm
          applicationId={getQuery.state?.applicationId}
          hostelId={hid}
          carryParentState={carryParentState}
          applicationDetail={getHostelAppliciontDetail?.oneApply}
          unitId={getQuery.state?.unitId}
          accessRole={accessRole}
          accessTpye={accessTpye}
          applicationDetailApplicablePending={
            getHostelAppliciontDetail?.applicable_pending
          }
          pageOpenAs={pageOpenAs}
          instituteId={instituteId}
        />
      )}
      {getQuery.search?.substring(21) === "allot" && (
        <HostelAllotted
          applicationId={getQuery.state?.applicationId}
          carryParentState={carryParentState}
          applicationDetail={getHostelAppliciontDetail?.oneApply}
          accessRole={accessRole}
          accessTpye={accessTpye}
          applicationDetailApplicablePending={
            getHostelAppliciontDetail?.applicable_pending
          }
          pageOpenAs={pageOpenAs}
        />
      )}
      {getQuery.search?.substring(21) === "cancel" && (
        <HostelCancelled
          applicationId={getQuery.state?.applicationId}
          carryParentState={carryParentState}
          applicationDetail={getHostelAppliciontDetail?.oneApply}
          accessRole={accessRole}
          accessTpye={accessTpye}
          applicationDetailApplicablePending={
            getHostelAppliciontDetail?.applicable_pending
          }
          pageOpenAs={pageOpenAs}
        />
      )}
    </>
  );
};

export default HostelOneOngoingApp;

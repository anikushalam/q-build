import React from "react";
import { useOneInstituteDashboard } from "../../../../hooks/dashboard/dashboard-api";
import LeavesAndtransferAuthorityTab from "./LeavesAndtransferAuthorityTab";
import { useLocation } from "react-router-dom";
import style from "../PromoteDepartment/PromoteDepartment.module.css";
import AllStaffList from "./AllStaffList";
import Attendence from "../../../../StaffTab/Attendence/Attendence";
import LeavesAndTransferConfiguration from "./LeavesAndTransferConfiguration";
import LeavesAndTransferRequest from "./LeavesAndTransferRequest";
import LeaveModerator from "./LeaveModerator/LeaveModerator";
import StaffLeaveOverview from "../Leaves/StaffLeaveOverview";
const LeaveAndTransferAuthority = ({ instituteId, carryParentState }) => {
  const getQuery = useLocation();
  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: instituteId,
      skip: !instituteId,
    });

  React.useEffect(() => {
    if (instituteId) {
      oneInstituteDashboardRefetch();
    }
  }, [instituteId, oneInstituteDashboardRefetch]);
  return (
    <div className={style.departmenthead}>
      <div className={style.demaprtment_list}>
        {getQuery.search?.substring(3) === "overview" ? null : (
          <LeavesAndtransferAuthorityTab carryParentState={carryParentState} />
        )}
        {!getQuery.search ? (
          <AllStaffList
            instituteId={instituteId}
            staffAlias={
              oneInstituteDashboard?.institute?.alias_pronounciation
                ?.staff_alias
            }
            carryParentState={carryParentState}
          />
        ) : getQuery.search?.substring(3) === "attendance" ? (
          <Attendence instituteId={instituteId} viewBy="LEAVE_AND_TRANSFER" />
        ) : getQuery.search?.substring(3) === "configuration" ? (
          <LeavesAndTransferConfiguration
            instituteId={instituteId}
            onRefetch={oneInstituteDashboardRefetch}
            leaveConfig={oneInstituteDashboard?.institute?.staff_leave_config}
          />
        ) : getQuery.search?.substring(3) === "moderator" ? (
          <LeaveModerator
            instituteId={instituteId}
            onRefetch={oneInstituteDashboardRefetch}
            leaveConfig={oneInstituteDashboard?.institute?.staff_leave_config}
          />
        ) : getQuery.search?.substring(3) === "overview" ? (
          <StaffLeaveOverview staffId={getQuery?.state?.staffId} />
        ) : (
          <LeavesAndTransferRequest
            carryParentState={carryParentState}
            instituteId={instituteId}
          />
        )}
      </div>
    </div>
  );
};

export default LeaveAndTransferAuthority;

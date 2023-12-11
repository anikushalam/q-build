import React from "react";
import style from "./DepartmentHead.module.css";
import Backlogs from "./Backlogs/Backlogs";
import Examinations from "./Exminations/Exminations";
import DepartmentHeadProfile from "./DepartmentHeadProfile/DepartmentHeadProfile";
import { useDepartmentProfile } from "../../../../hooks/member_tab/department-api";
import StaffRoom from "./staff/StaffRoom";
// import DepartmentSetting from "./DepartmentSetting/DepartmentSetting";
import Fees from "./Fees/Fees";
import Checklist from "./Checklist/Checklist";
import Holiday from "./Holiday/Holiday";
import { useLocation } from "react-router-dom";
import DepartmentMentor from "./DepartmentMentor/DepartmentMentor";
// import OneDepartmentClass from "./OneDepartmentClass";
import OneDepartmentClassDetail from "./OneDepartmentClassDetail/OneDepartmentClassDetail";
import DepartmentComplaint from "./DepartmentSetting/DepartmentComplaint";
import DepartmentExamSetting from "./DepartmentSetting/DepartmentExamSetting";
function DepartmentHead({ onClickValue, carryParentState }) {
  const getQuery = useLocation();

  const { departmentProfile, departmentProfileRefetch } = useDepartmentProfile({
    did: onClickValue?._id,
    skip: !onClickValue?._id,
  });
  React.useEffect(() => {
    if (onClickValue?._id) departmentProfileRefetch();
  }, [onClickValue?._id, departmentProfileRefetch]);

  return (
    <div className={style.departmenthead}>
      {!getQuery?.search && (
        <DepartmentHeadProfile
          departmentProfile={departmentProfile?.department}
          // onReftech={departmentProfileRefetch}
          carryParentState={carryParentState}
          instituteId={departmentProfile?.department?.institute?._id}
        />
      )}

      {getQuery?.search && (
        <>
          {getQuery?.search?.substring(3) === "staff" && (
            <StaffRoom did={departmentProfile?.department?._id} />
          )}
          {getQuery?.search?.substring(3, 7) === "exam" && (
            <Examinations
              did={departmentProfile?.department?._id}
              bid={departmentProfile?.department?.userBatch?._id}
              carryParentState={carryParentState}
              instituteId={departmentProfile?.department?.institute?._id}
            />
          )}

          {getQuery?.search?.substring(3) === "fees" && (
            <Fees
              did={departmentProfile?.department?._id}
              bid={departmentProfile?.department?.userBatch?._id}
            />
          )}

          {getQuery?.search?.substring(3) === "holiday" && (
            <Holiday
              did={departmentProfile?.department?._id}
              bid={departmentProfile?.department?.userBatch?._id}
            />
          )}

          {/* {getQuery?.search?.substring(3) === "competition" && (
            <Competition
              did={departmentProfile?.department?._id}
              bid={departmentProfile?.department?.userBatch?._id}
            />
          )} */}

          {getQuery?.search?.substring(3) === "complaint" && (
            <DepartmentComplaint did={departmentProfile?.department?._id} />
          )}

          {/* {getQuery?.search?.substring(3) === "setting" && (
            <DepartmentSetting did={departmentProfile?.department?._id} />
          )} */}
          {getQuery?.search?.substring(3) === "setting" && (
            <DepartmentExamSetting
              did={departmentProfile?.department?._id}
              ea={departmentProfile?.department?.external_assesment}
              ia={departmentProfile?.department?.internal_assesment}
            />
          )}
          {getQuery?.search?.substring(3) === "checklist" && (
            <Checklist
              did={departmentProfile?.department?._id}
              bid={departmentProfile?.department?.userBatch?._id}
            />
          )}

          {getQuery?.search?.substring(3, 10) === "backlog" && (
            <Backlogs
              did={departmentProfile?.department?._id}
              carryParentState={carryParentState}
              instituteId={departmentProfile?.department?.institute?._id}
              viewAs="DEPARTMENT_BACKLOG"
            />
          )}
          {getQuery?.search?.substring(3, 9) === "mentor" && (
            <DepartmentMentor
              did={departmentProfile?.department?._id}
              instituteId={departmentProfile?.department?.institute?._id}
              carryParentState={carryParentState}
            />
          )}
          {/* {getQuery.search?.substring(3) === "class&students" && (
            <OneDepartmentClass />
          )} */}

          {(getQuery.search?.substring(3, 8) === "class" ||
            getQuery.search?.substring(3, 10) === "subject" ||
            getQuery.search?.substring(3, 13) === "assignment") && (
            <OneDepartmentClassDetail
              carryParentState={carryParentState}
              viewAs="DEPARTMENT_HEAD"
              did={departmentProfile?.department?._id}
              instituteId={departmentProfile?.department?.institute?._id}
            />
          )}
        </>
      )}
    </div>
  );
}

export default DepartmentHead;

import React from "react";
import style from "../PromoteDepartment/PromoteDepartment.module.css";
import { useLocation } from "react-router-dom";
import AllStudent from "../FinanceManager/AllStudent/AllStudent";
import IdCardSectionTab from "./IdCardSectionTab";
import { useOneInstituteDashboard } from "../../../../hooks/dashboard/dashboard-api";
import StudentIdCard from "./StudentIdCard";
import IdCardExport from "./Export/IdCardExport";
import StudentMessageHistory from "../FinanceManager/AllStudent/StudentMessageHistory";
const IdCardSection = ({ carryParentState, instituteId }) => {
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

  // console.info("onClickValue", onClickValue);
  return (
    <div className={style.departmenthead}>
      {getQuery.search?.substring(3) === "student-message" ? (
        <StudentMessageHistory sid={instituteId} />
      ) : (
        <div className={style.demaprtment_list}>
          <IdCardSectionTab carryParentState={carryParentState} />
          {!getQuery.search ? (
            <AllStudent
              instituteId={instituteId}
              is_view="ID_CARD_SECTION"
              viewId={carryParentState?.onClickValue?._id}
              studentAlias={
                oneInstituteDashboard?.institute?.alias_pronounciation
                  ?.student_alias
              }
              headId={carryParentState?.sid}
              carryParentState={carryParentState}
            />
          ) : getQuery.search?.substring(3) === "issue" ? (
            <StudentIdCard instituteId={instituteId} />
          ) : (
            <IdCardExport instituteId={instituteId} />
          )}
        </div>
      )}
    </div>
  );
};

export default IdCardSection;

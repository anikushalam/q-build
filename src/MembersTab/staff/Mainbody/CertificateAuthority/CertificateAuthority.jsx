import React from "react";
import style from "../PromoteDepartment/PromoteDepartment.module.css";
import CertificateAuthorityTab from "./CertificateAuthorityTab";
import AllStudent from "../FinanceManager/AllStudent/AllStudent";
import { useLocation } from "react-router-dom";
import { useOneInstituteDashboard } from "../../../../hooks/dashboard/dashboard-api";
import StudentMessageHistory from "../FinanceManager/AllStudent/StudentMessageHistory";
import CertificateFund from "./CertificateFund/CertificateFund";
import CertificateAllRequest from "./CertificateRequest/CertificateAllRequest";
const CertificateAuthority = ({ instituteId, carryParentState }) => {
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

  // console.info("carryParentState", oneInstituteDashboard);
  return (
    <div className={style.departmenthead}>
      {getQuery.search?.substring(3) === "student-message" ? (
        <StudentMessageHistory sid={instituteId} />
      ) : (
        <div className={style.demaprtment_list}>
          <CertificateAuthorityTab carryParentState={carryParentState} />
          {!getQuery.search ? (
            <AllStudent
              instituteId={instituteId}
              viewId={carryParentState?.onClickValue?._id}
              is_view="CERTIFICATE_AUTHORITY"
              studentAlias={
                oneInstituteDashboard?.institute?.alias_pronounciation
                  ?.student_alias
              }
              headId={carryParentState?.sid}
              carryParentState={carryParentState}
            />
          ) : getQuery.search?.substring(3) === "fund" ? (
            <CertificateFund
              instituteId={instituteId}
              fundCharges={
                oneInstituteDashboard?.institute?.certificate_fund_charges
              }
              issuedCOunt={
                oneInstituteDashboard?.institute?.certificate_issued_count ?? 0
              }
              onRefetch={oneInstituteDashboardRefetch}
            />
          ) : (
            <CertificateAllRequest
              carryParentState={carryParentState}
              instituteId={instituteId}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CertificateAuthority;

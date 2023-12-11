import React, { useEffect } from "react";
import style from "./FinanceManager.module.css";
import FinanceManagerProfile from "./FinanceManagerProfile/FinanceManagerProfile";
import InternalFunds from "./InternalFunds/InternalFunds";
import SubmissionRequest from "./SubmissionRequest/SubmissionRequest";
import RemainingAmount from "./RemainingAmount/RemainingAmount";
import Incomes from "./Incomes/Incomes";
import Expenses from "./Expenses/Expenses";
import Payroll from "./Payroll/Payroll";
// import Repayment from "./Repayment/Repayment";
import History from "./History/History";
import Inventry from "./Inventry/Inventry";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import BankDetails from "./BankDetails/BankDetails";
import ExemptionUnrecovered from "./Exemption/ExemptionUnrecovered";
import GovernmentScholarship from "./Scholarship/GovernmentScholarship";
import FinanceExport from "./Export/FinanceExport";
import Deposit from "./Deposit/Deposit";
import FinanceModerator from "./Moderator/FinanceModerator";
import { useFinanceDetailManager } from "../../../../hooks/member_tab/finance-api";
import AllStudent from "./AllStudent/AllStudent";
import StudentMessageHistory from "./AllStudent/StudentMessageHistory";

function FinanceManager({ onClickValue, carryParentState, role, mid }) {
  const insId = useSelector((state) => state.financeChange.insId);
  const getQuery = useLocation();
  // const [activatedRole, setActivatedRole] = useState("");
  const { financeDetailManager, financeDetailManagerRefetch } =
    useFinanceDetailManager({
      data: {
        fid: role ? onClickValue?.finance : `${onClickValue}`,
        mod_id: role ? mid : "",
      },
      skip: !onClickValue,
    });

  useEffect(() => {
    if (onClickValue) financeDetailManagerRefetch();
  }, [onClickValue, financeDetailManagerRefetch]);
  // useEffect(() => {
  //   if (financeDetailManager?.roles?.length) {
  //     if (role) {
  //       let modId = onClickValue?._id;
  //       for (let moder of financeDetailManager?.roles) {
  //         if (modId === moder?._id) {
  //           setActivatedRole(moder);
  //           break;
  //         }
  //       }
  //     }
  //   }
  // }, [financeDetailManager?.roles]);
  // console.info("this is url search getQuery", getQuery);
  return (
    <div className={style.departmenthead}>
      {(!getQuery?.search ||
        getQuery?.search?.substring(3, 6) === "fee" ||
        getQuery?.search?.substring(3) === "fund") && (
        <FinanceManagerProfile
          onClickValue={onClickValue}
          carryParentState={carryParentState}
          role={role}
          mid={mid}
        />
      )}
      {getQuery?.search &&
        getQuery?.search?.substring(3, 6) !== "fee" &&
        getQuery?.search?.substring(3) !== "fund" && (
          <div>
            {getQuery?.search?.substring(3) === "internal" && (
              <InternalFunds
                carryParentState={carryParentState}
                callApi={financeDetailManager?.finance?._id ? true : false}
              />
            )}

            {getQuery?.search?.substring(3) === "income" && <Incomes />}
            {getQuery?.search?.substring(3) === "expense" && <Expenses />}
            {getQuery?.search?.substring(3, 10) === "payroll" && (
              <Payroll
                insId={insId}
                carryParentState={carryParentState}
                // callApi={financeDetailManager?.finance?._id ? true : false}
              />
            )}
            {getQuery?.search?.substring(3, 13) === "submission" && (
              <SubmissionRequest
                carryParentState={carryParentState}
                // callApi={financeDetailManager?.finance?._id ? true : false}
              />
            )}

            {getQuery?.search?.substring(3) === "pending" && (
              <RemainingAmount />
            )}
            {/* {getQuery?.search?.substring(3) === "repayment" && <Repayment />} */}
            {getQuery?.search?.substring(3) === "history" && (
              <History insId={insId} />
            )}
            {getQuery?.search?.substring(3) === "inventory" && <Inventry />}
            {getQuery?.search?.substring(3, 7) === "bank" && (
              <BankDetails
                carryParentState={carryParentState}
                callApi={financeDetailManager?.finance?._id ? true : false}
              />
            )}
            {getQuery?.search?.substring(3, 14) === "scholarship" && (
              <GovernmentScholarship
                carryParentState={carryParentState}
                callApi={financeDetailManager?.finance?._id ? true : false}
              />
            )}
            {getQuery?.search?.substring(3) === "exemption" && (
              <ExemptionUnrecovered />
            )}
            {getQuery?.search?.substring(3) === "export" && (
              <FinanceExport
                hostelId={
                  financeDetailManager?.finance?.institute?.hostelDepart?.[0]
                }
                financeId={financeDetailManager?.finance?._id}
                insId={financeDetailManager?.finance?.institute?._id}
              />
            )}
            {getQuery?.search?.substring(3) === "deposit" && <Deposit />}
            {getQuery?.search?.substring(3) === "moderator" && (
              <FinanceModerator />
            )}
            {getQuery?.search?.substring(3) === "student" && (
              <AllStudent
                instituteId={insId}
                viewId={financeDetailManager?.finance?._id}
                is_view="FINANCE_MANAGER"
                studentAlias={
                  financeDetailManager?.finance?.institute?.alias_pronounciation
                    ?.student_alias
                }
                headId={financeDetailManager?.finance?.financeHead?._id}
                carryParentState={carryParentState}
              />
            )}
            {getQuery?.search?.substring(3) === "student-message" && (
              <StudentMessageHistory
                sid={financeDetailManager?.finance?.institute?._id}
              />
            )}
          </div>
        )}
    </div>
  );
}

export default FinanceManager;

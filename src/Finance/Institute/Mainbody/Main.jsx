import React, { useEffect } from "react";
import style from "./Main.module.css";
import { useSelector } from "react-redux";
import FinanceSidebar from "../FinanceSidebar";
import { useOneInstituteDashboard } from "../../../hooks/dashboard/dashboard-api";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import CustomSuspense from "../../../Custom/SuspenseLoading/CustomSuspense";
import InstituteFinanceTab from "./InstituteFinanceTab";
import { useFinanceDetailManager } from "../../../hooks/member_tab/finance-api";
const FeesStructure = React.lazy(() =>
  import(
    "../../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/FeesStructure"
  )
);
const FinanceModerator = React.lazy(() =>
  import(
    "../../../MembersTab/staff/Mainbody/FinanceManager/Moderator/FinanceModerator"
  )
);
const FinanceExport = React.lazy(() =>
  import(
    "../../../MembersTab/staff/Mainbody/FinanceManager/Export/FinanceExport"
  )
);
const BankDetails = React.lazy(() =>
  import(
    "../../../MembersTab/staff/Mainbody/FinanceManager/BankDetails/BankDetails"
  )
);

const InsFund = React.lazy(() => import("./stats/InsFund/InsFund"));
const Incomes = React.lazy(() =>
  import("../../../MembersTab/staff/Mainbody/FinanceManager/Incomes/Incomes")
);
const Expenses = React.lazy(() =>
  import("../../../MembersTab/staff/Mainbody/FinanceManager/Expenses/Expenses")
);
const RemainingAmount = React.lazy(() =>
  import(
    "../../../MembersTab/staff/Mainbody/FinanceManager/RemainingAmount/RemainingAmount"
  )
);
const History = React.lazy(() =>
  import("../../../MembersTab/staff/Mainbody/FinanceManager/History/History")
);

function Main() {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const getQuery = useLocation();
  const finance = useSelector((state) => state.financeChange);
  const ids = useSelector((state) => state.idChange);

  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: ids?.id,
      skip: !ids?.id,
    });

  useEffect(() => {
    if (ids?.id) oneInstituteDashboardRefetch();
  }, [ids?.id, oneInstituteDashboardRefetch]);

  const { financeDetailManager, financeDetailManagerRefetch } =
    useFinanceDetailManager({
      data: {
        fid: finance?.fid
          ? finance?.fid
          : oneInstituteDashboard?.institute?.financeDepart[0],
        mod_id: "",
      },
      skip: !finance?.fid
        ? !oneInstituteDashboard?.institute?.financeDepart[0]
        : !finance?.fid,
    });

  useEffect(() => {
    if (finance?.fid || oneInstituteDashboard?.institute?.financeDepart[0])
      financeDetailManagerRefetch();
  }, [
    finance?.fid,
    oneInstituteDashboard?.institute?.financeDepart[0],
    financeDetailManagerRefetch,
  ]);

  return (
    <div className={style.main}>
      <FinanceSidebar
        username={params.username}
        financeId={oneInstituteDashboard?.institute?.financeDepart[0]}
      />
      <div
        className={
          !(
            !searchParams?.get("a") ||
            searchParams?.get("a") === "account" ||
            searchParams?.get("a") === "fee"
          )
            ? style.finance_container_other
            : style.finance_container
        }
      >
        {(!searchParams?.get("a") ||
          searchParams?.get("a") === "account" ||
          searchParams?.get("a") === "fee") && (
          <InstituteFinanceTab carryParentState={getQuery.state} />
        )}

        <CustomSuspense>
          {searchParams?.get("a") === "internal" && (
            <InsFund
              detailFund={financeDetailManager?.finance}
              financeId={oneInstituteDashboard?.institute?.financeDepart[0]}
              fId={finance?.fid}
            />
          )}
          {searchParams?.get("a") === "income" && (
            <Incomes
              fId={
                finance?.fid
                  ? finance?.fid
                  : oneInstituteDashboard?.institute?.financeDepart[0]
              }
            />
          )}
          {searchParams?.get("a") === "expense" && (
            <Expenses
              fId={
                finance?.fid
                  ? finance?.fid
                  : oneInstituteDashboard?.institute?.financeDepart[0]
              }
            />
          )}
          {searchParams?.get("a") === "pending" && (
            <div style={{ marginTop: "1vw" }}>
              <RemainingAmount
                fId={
                  finance?.fid
                    ? finance?.fid
                    : oneInstituteDashboard?.institute?.financeDepart[0]
                }
              />
            </div>
          )}
          {searchParams?.get("a") === "history" && (
            <History insId={oneInstituteDashboard?.institute?._id} />
          )}
          {searchParams?.get("a") === "bank" && (
            <div className={style.institute_finance_container_border}>
              <BankDetails
                financeId={
                  finance?.fid
                    ? finance?.fid
                    : oneInstituteDashboard?.institute?.financeDepart[0]
                }
                viewAs="INSTITUTE"
              />
            </div>
          )}
          {searchParams?.get("a") === "export" && (
            <div className={style.institute_finance_container_border}>
              <FinanceExport
                financeId={
                  finance?.fid
                    ? finance?.fid
                    : oneInstituteDashboard?.institute?.financeDepart[0]
                }
                insId={oneInstituteDashboard?.institute?._id}
                hostelId={
                  financeDetailManager?.finance?.institute?.hostelDepart?.[0]
                }
                viewAs="INSTITUTE"
              />
            </div>
          )}
          {searchParams?.get("a") === "moderator" && (
            <div className={style.institute_finance_container_border}>
              <FinanceModerator
                financeId={
                  finance?.fid
                    ? finance?.fid
                    : oneInstituteDashboard?.institute?.financeDepart[0]
                }
                insId={oneInstituteDashboard?.institute?._id}
              />
            </div>
          )}
          {searchParams?.get("a") === "fee" && (
            <FeesStructure
              financeId={financeDetailManager?.finance?._id}
              instituteId={financeDetailManager?.finance?.institute?._id}
              fees_category_count={
                financeDetailManager?.finance?.fees_category_count
              }
              fee_master_array_count={
                financeDetailManager?.finance?.fee_master_array_count
              }
              carryParentState={getQuery.state}
              viewAs="INSTITUTE"
            />
          )}
        </CustomSuspense>
      </div>
    </div>
  );
}

export default Main;

import { Suspense, lazy } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import FinanceManagerProfile from "./FinanceManagerProfile";
import Scholarship from "./Scholarship/Scholarship";
import { useFinanceDashboardMaster } from "../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import UserMemberMainWrapper from "../../Layout/UserMemberTab/UserMemberMainWrapper";
import QvipleLoader from "../../Loader/QvipleLoader";

const BankDetail = lazy(() => import("./BankDetail/BankDetail"));
const PendingFees = lazy(() => import("./PendingFees/PendingFees"));
const Income = lazy(() => import("./Income/Income"));
const Expense = lazy(() => import("./Expense/Expense"));
const ExemptionUnrecovered = lazy(() =>
  import("./ExemptionUnrecovered/ExemptionUnrecovered")
);
const FinanceExport = lazy(() => import("./FinanceExport/FinanceExport"));
const TransactionHistory = lazy(() =>
  import("./TransactionHistory/TransactionHistory")
);
const FinanceModerator = lazy(() => import("./Moderator/FinanceModerator"));
const FinanceDeposit = lazy(() => import("./FinanceDeposit/FinanceDeposit"));
const StudentStatitics = lazy(() =>
  import("./StudentStatitics/StudentStatitics")
);
const InternalFees = lazy(() => import("./InternalFees/InternalFees"));
const StudentStatiticsDetail = lazy(() =>
  import("./StudentStatitics/StudentStatiticsDetail")
);
const FeeStatistics = lazy(() => import("./FeeStatistics/FeeStatistics"));
const FinanceAllStudent = lazy(() =>
  import("./FinanceAllStudent/FinanceAllStudent")
);
const StudentMessageHistory = lazy(() =>
  import("./FinanceAllStudent/StudentMessageHistory/StudentMessageHistory")
);
const FinanceManager = () => {
  const getQuery = useLocation();
  const [searchParams] = useSearchParams();
  const { financeDashboardMaster } = useFinanceDashboardMaster({
    data: {
      fid: getQuery.state?.fid,
      mid: "",
    },
    skip: !getQuery.state?.fid,
  });

  // console.info("financeDashboardMaster", getQuery.state);
  return (
    <>
      <UserMemberMainWrapper>
        <Suspense fallback={<QvipleLoader />}>
          {!searchParams.get("type") ||
          ["fees", "fund"]?.includes(searchParams.get("type")) ? (
            <FinanceManagerProfile
              financeHead={financeDashboardMaster?.finance?.financeHead}
              fid={getQuery.state?.fid}
              instituteId={financeDashboardMaster?.finance?.institute?._id}
              categoryCount={
                financeDashboardMaster?.finance?.fees_category_count ?? 0
              }
              masterCount={
                financeDashboardMaster?.finance?.fee_master_array_count ?? 0
              }
              financeData={financeDashboardMaster?.finance}
            />
          ) : searchParams.get("type") === "bank" ? (
            <BankDetail
              fid={getQuery.state?.fid}
              libraryId={
                financeDashboardMaster?.finance?.institute?.library?.[0]
              }
              transportId={
                financeDashboardMaster?.finance?.institute?.transportDepart?.[0]
              }
              hostelId={
                financeDashboardMaster?.finance?.institute?.hostelDepart?.[0]
              }
            />
          ) : searchParams.get("type") === "students" ? (
            <FinanceAllStudent
              instituteId={financeDashboardMaster?.finance?.institute?._id}
              messageId={financeDashboardMaster?.finance?._id}
              headId={financeDashboardMaster?.finance?.financeHead?._id}
              studentAlias={
                financeDashboardMaster?.finance?.institute?.alias_pronounciation
                  ?.student_alias
              }
            />
          ) : searchParams.get("type") === "pending-fee" ? (
            <PendingFees fid={getQuery.state?.fid} />
          ) : searchParams.get("type") === "income" ? (
            <Income fid={getQuery.state?.fid} />
          ) : searchParams.get("type") === "expense" ? (
            <Expense fid={getQuery.state?.fid} />
          ) : searchParams.get("type") === "exemption" ? (
            <ExemptionUnrecovered
              fid={getQuery.state?.fid}
              exemptBalance={
                financeDashboardMaster?.finance?.financeExemptBalance
              }
            />
          ) : searchParams.get("type") === "export" ? (
            <FinanceExport
              fid={getQuery.state?.fid}
              instituteId={financeDashboardMaster?.finance?.institute?._id}
              hostelId={
                financeDashboardMaster?.finance?.institute?.hostelDepart?.[0]
              }
            />
          ) : searchParams.get("type") === "history" ? (
            <TransactionHistory
              fid={getQuery.state?.fid}
              instituteId={financeDashboardMaster?.finance?.institute?._id}
            />
          ) : searchParams.get("type") === "moderator" ? (
            <FinanceModerator
              fid={getQuery.state?.fid}
              instituteId={financeDashboardMaster?.finance?.institute?._id}
            />
          ) : searchParams.get("type") === "deposit" ? (
            <FinanceDeposit
              fid={getQuery.state?.fid}
              instituteId={financeDashboardMaster?.finance?.institute?._id}
            />
          ) : searchParams.get("type") === "student-statistics" ? (
            <StudentStatitics fid={getQuery.state?.fid} />
          ) : searchParams.get("type") === "statistics-detail" ? (
            <StudentStatiticsDetail fid={getQuery.state?.fid} />
          ) : searchParams.get("type") === "internal-fees" ? (
            <InternalFees fid={getQuery.state?.fid} />
          ) : searchParams.get("type") === "fees-statistics" ? (
            <FeeStatistics
              fid={getQuery.state?.fid}
              instituteId={financeDashboardMaster?.finance?.institute?._id}
            />
          ) : searchParams.get("type") === "message" ? (
            <StudentMessageHistory
              instituteId={financeDashboardMaster?.finance?.institute?._id}
            />
          ) : searchParams.get("type") === "scholarship" ? (
            <Scholarship
              fid={getQuery.state?.fid}
              instituteId={financeDashboardMaster?.finance?.institute?._id}
              aid={
                financeDashboardMaster?.finance?.institute?.admissionDepart?.[0]
              }
            />
          ) : null}
        </Suspense>
      </UserMemberMainWrapper>

      {/* <UserMemberHeaderWrapper
        coverUrl={`${assestsUserFinanceUrl}/cover.png`}
        isAuthor
      /> */}
    </>
  );
};

export default FinanceManager;

// const FinanceManager = () => {
//   const { t } = useTranslation();
//   return (
//     <StaffMemberConfig>
//       <div className={style.smc_content_main}>
//         <FinanceManagerProfile />
//       </div>
//       <div className={style.smc_content_profile}></div>
//     </StaffMemberConfig>
//   );
// };

// export default FinanceManager;

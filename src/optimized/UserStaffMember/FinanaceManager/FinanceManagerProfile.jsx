import { useLocation, useParams, useSearchParams } from "react-router-dom";
import FeesStructure from "./FeesStructure/FeesStructure";
import FinanceFund from "./FinanceFund/FinanceFund";
import { assestsUserFinanceUrl } from "../../Services/UrlConfig/AssestsBaseUrl";
import UserMemberTabsWrapper from "../../Ui/UserMember/UserMemberTabsWrapper";
import RectangleTabWrapper from "../../Ui/Tab/Rectangle/RectangleTabWrapper";
import RectangleTabCard from "../../Ui/Tab/Rectangle/RectangleTabCard";
import SquareTabWrapper from "../../Ui/Tab/Square/SquareTabWrapper";
import SquareTabCard from "../../Ui/Tab/Square/SquareTabCard";
import { financeModeratorAccess } from "../../Constant/Finance/finance_constant";
const tabList = [
  {
    label: "menu",
    id: "menu",
    urlKey: "",
  },
  {
    label: "fees_structure",
    id: "fees",
    urlKey: "?type=fees",
  },
  {
    label: "funds",
    id: "fund",
    urlKey: "?type=fund",
  },
];

const FinanceManagerProfile = ({
  instituteId,
  fid,
  categoryCount,
  masterCount,
  financeData,
}) => {
  const params = useParams();
  const getQuery = useLocation();
  const [searchParams] = useSearchParams();

  // console.info("getQuery", getQuery.state);
  return (
    <>
      <UserMemberTabsWrapper>
        <RectangleTabWrapper>
          {tabList.map((tab) => (
            <RectangleTabCard
              key={tab?.id}
              label={tab.label}
              isLink
              isActive={
                tab.id === "menu" && !searchParams.get("type")
                  ? true
                  : searchParams.get("type") === tab.id
                  ? true
                  : false
              }
              parentState={getQuery.state}
              url={`/q/${params.username}/member/staff/finance${tab.urlKey}`}
              isAuthorized={
                getQuery.state?.role
                  ? financeModeratorAccess[getQuery.state?.role]?.includes(
                      tab?.id
                    )
                  : true
              }
            />
          ))}
        </RectangleTabWrapper>
        {!searchParams.get("type") ? (
          <SquareTabWrapper>
            <SquareTabCard
              label="all_students"
              iconUrl={`${assestsUserFinanceUrl}/student.svg`}
              url={`/q/${params.username}/member/staff/finance?type=students`}
              state={getQuery.state}
              isAuthorized={
                getQuery.state?.role
                  ? financeModeratorAccess[getQuery.state?.role]?.includes(
                      "student"
                    )
                  : true
              }
            />
            <SquareTabCard
              label="bank_details"
              iconUrl={`${assestsUserFinanceUrl}/bank.svg`}
              url={`/q/${params.username}/member/staff/finance?type=bank`}
              state={getQuery.state}
              isAuthorized={
                getQuery.state?.role
                  ? financeModeratorAccess[getQuery.state?.role]?.includes(
                      "bank"
                    )
                  : true
              }
            />
            <SquareTabCard
              label="pending_fees"
              iconUrl={`${assestsUserFinanceUrl}/pending.svg`}
              url={`/q/${params.username}/member/staff/finance?type=pending-fee`}
              state={getQuery.state}
              isAuthorized={
                getQuery.state?.role
                  ? financeModeratorAccess[getQuery.state?.role]?.includes(
                      "pending"
                    )
                  : true
              }
            />
            {/* <SquareTabCard
              label="submit_requests"
              iconUrl={`${assestsUserFinanceUrl}/cash.svg`}
            /> */}
            <SquareTabCard
              label="deposits"
              iconUrl={`${assestsUserFinanceUrl}/deposit.svg`}
              url={`/q/${params.username}/member/staff/finance?type=deposit`}
              state={getQuery.state}
              isAuthorized={
                getQuery.state?.role
                  ? financeModeratorAccess[getQuery.state?.role]?.includes(
                      "deposit"
                    )
                  : true
              }
            />
            <SquareTabCard
              label="incomes"
              iconUrl={`${assestsUserFinanceUrl}/income.svg`}
              url={`/q/${params.username}/member/staff/finance?type=income`}
              state={getQuery.state}
              isAuthorized={
                getQuery.state?.role
                  ? financeModeratorAccess[getQuery.state?.role]?.includes(
                      "income"
                    )
                  : true
              }
            />
            <SquareTabCard
              label="expenses"
              iconUrl={`${assestsUserFinanceUrl}/expense.svg`}
              url={`/q/${params.username}/member/staff/finance?type=expense`}
              state={getQuery.state}
              isAuthorized={
                getQuery.state?.role
                  ? financeModeratorAccess[getQuery.state?.role]?.includes(
                      "expense"
                    )
                  : true
              }
            />
            <SquareTabCard
              label="scholarsips"
              iconUrl={`${assestsUserFinanceUrl}/scholarship.svg`}
              url={`/q/${params.username}/member/staff/finance?type=scholarship`}
              state={getQuery.state}
              isAuthorized={
                getQuery.state?.role
                  ? financeModeratorAccess[getQuery.state?.role]?.includes(
                      "scholarship"
                    )
                  : true
              }
            />
            <SquareTabCard
              label="exemption_and_unrecovered"
              iconUrl={`${assestsUserFinanceUrl}/exemption.svg`}
              url={`/q/${params.username}/member/staff/finance?type=exemption`}
              state={getQuery.state}
              isAuthorized={
                getQuery.state?.role
                  ? financeModeratorAccess[getQuery.state?.role]?.includes(
                      "exemption"
                    )
                  : true
              }
            />
            <SquareTabCard
              label="transaction_history"
              iconUrl={`${assestsUserFinanceUrl}/history.svg`}
              url={`/q/${params.username}/member/staff/finance?type=history`}
              state={getQuery.state}
              isAuthorized={
                getQuery.state?.role
                  ? financeModeratorAccess[getQuery.state?.role]?.includes(
                      "trasnsaction"
                    )
                  : true
              }
            />
            <SquareTabCard
              label="data_export"
              iconUrl={`${assestsUserFinanceUrl}/export.svg`}
              url={`/q/${params.username}/member/staff/finance?type=export`}
              state={getQuery.state}
              isAuthorized={
                getQuery.state?.role
                  ? financeModeratorAccess[getQuery.state?.role]?.includes(
                      "export"
                    )
                  : true
              }
            />
            <SquareTabCard
              label="finance_moderators"
              iconUrl={`${assestsUserFinanceUrl}/moderator.svg`}
              url={`/q/${params.username}/member/staff/finance?type=moderator`}
              state={getQuery.state}
              isAuthorized={
                getQuery.state?.role
                  ? financeModeratorAccess[getQuery.state?.role]?.includes(
                      "moderator"
                    )
                  : true
              }
            />
            <SquareTabCard
              label="internal_fees"
              iconUrl={`${assestsUserFinanceUrl}/internal-fees.svg`}
              url={`/q/${params.username}/member/staff/finance?type=internal-fees`}
              state={getQuery.state}
              isAuthorized={
                getQuery.state?.role
                  ? financeModeratorAccess[getQuery.state?.role]?.includes(
                      "internal"
                    )
                  : true
              }
            />
            <SquareTabCard
              label="student_statitics"
              iconUrl={`${assestsUserFinanceUrl}/statitics.svg`}
              url={`/q/${params.username}/member/staff/finance?type=student-statistics`}
              state={getQuery.state}
              isAuthorized={
                getQuery.state?.role
                  ? financeModeratorAccess[getQuery.state?.role]?.includes(
                      "student statistics"
                    )
                  : true
              }
            />
            <SquareTabCard
              label="fees_statitics"
              iconUrl={`${assestsUserFinanceUrl}/statitics.svg`}
              url={`/q/${params.username}/member/staff/finance?type=fees-statistics`}
              state={getQuery.state}
              isAuthorized={
                getQuery.state?.role
                  ? financeModeratorAccess[getQuery.state?.role]?.includes(
                      "fee statistics"
                    )
                  : true
              }
            />
          </SquareTabWrapper>
        ) : searchParams.get("type") === "fees" ? (
          <FeesStructure
            fid={fid}
            instituteId={instituteId}
            masterCount={masterCount}
            categoryCount={categoryCount}
          />
        ) : searchParams.get("type") === "fund" ? (
          <FinanceFund financeData={financeData} />
        ) : null}
      </UserMemberTabsWrapper>
    </>
  );
};

export default FinanceManagerProfile;

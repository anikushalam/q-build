import style from "../FinanceManager.module.css";
import UserMemberContainerWrapper from "../../../Ui/UserMember/UserMemberContainerWrapper";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import HorizontalTabCard from "../../../Ui/Tab/Horizontal/HorizontalTabCard";
import HorizontalTabWrapper from "../../../Ui/Tab/Horizontal/HorizontalTabWrapper";
import FinanceReceipt from "./FinanceReceipt";
import { Suspense, lazy } from "react";
import QvipleLoader from "../../../Loader/QvipleLoader";
const FinanceSettlement = lazy(() => import("./FinanceSettlement"));
const FinanceHistory = lazy(() => import("./FinanceHistory"));
const tabList = [
  {
    label: "receipts",
    id: "receipt",
    urlKey: "",
  },
  {
    label: "payments",
    id: "payment",
    urlKey: "&n=payment",
  },
  {
    label: "settlement_history",
    id: "settlement",
    urlKey: "&n=settlement",
  },
];

const TransactionHistory = ({ fid, instituteId }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const getQuery = useLocation();
  const params = useParams();

  return (
    <UserMemberContainerWrapper>
      <UserMemberContentWrapper>
        <div className={style.fm_header_container}>
          <h6>{t("transaction_history")}</h6>
        </div>
      </UserMemberContentWrapper>
      <BorderBottom />
      <UserMemberContentWrapper
        customStyle={{
          paddingTop: "0",
        }}
      >
        <HorizontalTabWrapper>
          {tabList.map((tab) => (
            <HorizontalTabCard
              key={tab?.id}
              tab={tab}
              isLink
              isActive={
                tab.id === "receipt" && !searchParams.get("n")
                  ? true
                  : searchParams.get("n") === tab.id
                  ? true
                  : false
              }
              parentState={getQuery.state}
              url={`/q/${params.username}/member/staff/finance?type=history${tab.urlKey}`}
            />
          ))}
        </HorizontalTabWrapper>
        <BorderBottom
          customStyleBorder={{
            marginTop: "0",
          }}
        />
      </UserMemberContentWrapper>

      <UserMemberContentWrapper
        customStyle={{
          paddingTop: "0",
        }}
      >
        <Suspense fallback={<QvipleLoader />}>
          {searchParams.get("n") === "payment" ? (
            <FinanceHistory instituteId={instituteId} />
          ) : searchParams.get("n") === "settlement" ? (
            <FinanceSettlement instituteId={instituteId} />
          ) : (
            <FinanceReceipt instituteId={instituteId} />
          )}
        </Suspense>
      </UserMemberContentWrapper>
    </UserMemberContainerWrapper>
  );
};

export default TransactionHistory;

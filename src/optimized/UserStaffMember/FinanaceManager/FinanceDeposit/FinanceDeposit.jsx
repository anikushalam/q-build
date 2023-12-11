import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import HorizontalTabCard from "../../../Ui/Tab/Horizontal/HorizontalTabCard";
import HorizontalTabWrapper from "../../../Ui/Tab/Horizontal/HorizontalTabWrapper";
import UserMemberContainerWrapper from "../../../Ui/UserMember/UserMemberContainerWrapper";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import { useTranslation } from "react-i18next";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import FinanceDepositCollection from "./FinanceDepositCollection";
import style from "../FinanceManager.module.css";
import FinanceDepositRefunded from "./FinanceDepositRefunded";
import { useFinanceMasterDeposit } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";

const tabList = [
  {
    label: "collection",
    id: "collection",
    urlKey: "",
  },
  {
    label: "refunded",
    id: "refund",
    urlKey: "&n=refund",
  },
];
const FinanceDeposit = ({ fid }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const getQuery = useLocation();
  const params = useParams();
  const { financeMasterDeposit } = useFinanceMasterDeposit({
    fid: fid,
    skip: !fid,
  });
  return (
    <UserMemberContainerWrapper>
      <UserMemberContentWrapper>
        <div className={style.fm_header_container}>
          <h6>{t("deposit")}</h6>
          <img src={`${assestsUserFinanceUrl}/filter.svg`} alt="filter icon" />
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
                tab.id === "collection" && !searchParams.get("n")
                  ? true
                  : searchParams.get("n") === tab.id
                  ? true
                  : false
              }
              parentState={getQuery.state}
              url={`/q/${params.username}/member/staff/finance?type=deposit${tab.urlKey}`}
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
        {searchParams.get("n") === "refund" ? (
          <FinanceDepositRefunded
            fid={fid}
            refundAmount={financeMasterDeposit?.refund_amount}
            refundStudentCount={financeMasterDeposit?.refund_student_count}
          />
        ) : (
          <FinanceDepositCollection
            fmid={financeMasterDeposit?._id}
            depositAmount={financeMasterDeposit?.deposit_amount}
            paidStudentCount={financeMasterDeposit?.paid_student_count}
          />
        )}
      </UserMemberContentWrapper>
    </UserMemberContainerWrapper>
  );
};

export default FinanceDeposit;

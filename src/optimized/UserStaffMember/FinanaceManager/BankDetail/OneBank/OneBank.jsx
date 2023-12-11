import style from "../../FinanceManager.module.css";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import OneBankFund from "./OneBankFund";
import OneBankInfo from "./OneBankInfo";
import OneBankMenu from "./OneBankMenu";
import { useLocation } from "react-router-dom";
import { useFinanceOneBankDetail } from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import UserMemberContentWrapper from "../../../../Ui/UserMember/UserMemberContentWrapper";
import HorizontalTabCard from "../../../../Ui/Tab/Horizontal/HorizontalTabCard";
import HorizontalTabWrapper from "../../../../Ui/Tab/Horizontal/HorizontalTabWrapper";
import BorderBottom from "../../../../Ui/Border/BorderBottom";
import { assestsUserFinanceUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";
const tabList = [
  {
    label: "bank_info",
    id: 0,
  },
  {
    label: "fund",
    id: 1,
  },
];
const OneBank = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [active, setActive] = useState(0);
  const [add, setAdd] = useState(false);
  const [bankEdit, setBankEdit] = useState(false);

  const { financeOneBankDetail } = useFinanceOneBankDetail({
    bid: getQuery.state.bankId,
    skip: !getQuery.state.bankId,
  });

  const onToggle = useCallback(() => {
    setAdd((pre) => !pre);
  }, []);

  const onAction = (value) => {
    setActive(value);
  };

  //   console.info("financeOneBankDetail", financeOneBankDetail);
  return (
    <>
      {!bankEdit && (
        <>
          <UserMemberContentWrapper>
            <div className={style.fm_header_container}>
              <h6>{t("bank_details")}</h6>
              <img
                src={`${assestsUserFinanceUrl}/edit.svg`}
                alt="back arrow"
                title="Edit Bank"
                onClick={onToggle}
              />
            </div>
            <HorizontalTabWrapper>
              {tabList.map((tab) => (
                <HorizontalTabCard
                  key={tab?.id}
                  tab={tab}
                  isActive={tab?.id === active ? true : false}
                  onAction={onAction}
                />
              ))}
            </HorizontalTabWrapper>
            <BorderBottom
              customStyleBorder={{
                marginTop: "0",
              }}
            />
          </UserMemberContentWrapper>

          <UserMemberContentWrapper>
            {active === 0 ? (
              <OneBankInfo oneBank={financeOneBankDetail?.one_bank} />
            ) : (
              <OneBankFund
                totalRepay={financeOneBankDetail?.one_bank?.total_repay}
                collectOnline={financeOneBankDetail?.one_bank?.collect_online}
                dueRepay={financeOneBankDetail?.one_bank?.due_repay}
              />
            )}
          </UserMemberContentWrapper>
        </>
      )}
      {add && (
        <OneBankMenu
          onToggle={onToggle}
          setBankEdit={setBankEdit}
          openBankMenu={financeOneBankDetail?.one_bank}
        />
      )}
    </>
  );
};

export default OneBank;

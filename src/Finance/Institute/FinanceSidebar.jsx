import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomSuspense from "../../Custom/SuspenseLoading/CustomSuspense";
import { imageShowUrl } from "../../services/BaseUrl";
import CommonSidebarBackground from "../../Sidebar/CommonSidebarBackground";
import CommonSideCard from "../../Sidebar/CommonSideCard";
import Goback from "../../Sidebar/Goback";
import { useTranslation } from "react-i18next";
import { useFinanceDetailManager } from "../../hooks/member_tab/finance-api";
const FinanceModal = React.lazy(() =>
  import("../../Dashboard/InsDashboard/Modals/finance/FinanceModal")
);

const FinanceSidebar = ({ username, financeId }) => {
  const { t } = useTranslation();
  const finance = useSelector((state) => state.financeChange);
  const [cashBalance, setCashBalance] = useState(0);
  const [bankBalance, setBankBalance] = useState(0);
  const [openMenu, setOpenMenu] = React.useState(false);
  const { financeDetailManager, financeDetailManagerRefetch } =
    useFinanceDetailManager({
      data: {
        fid: finance?.fid ? finance?.fid : financeId,
        mod_id: "",
      },
      skip: !finance?.fid ? !financeId : !finance?.fid,
    });

  useEffect(() => {
    if (finance?.fid || financeId) financeDetailManagerRefetch();
  }, [finance?.fid, financeId, financeDetailManagerRefetch]);

  useEffect(() => {
    if (financeDetailManager?.finance) {
      var cashBalance =
        financeDetailManager?.finance?.financeCashBalance +
        financeDetailManager?.finance?.financeSubmitBalance +
        financeDetailManager?.finance?.financeIncomeCashBalance;
      if (
        cashBalance > financeDetailManager?.finance?.financeExpenseCashBalance
      ) {
        cashBalance -= financeDetailManager?.finance?.financeExpenseCashBalance;
      }

      var bankBalance =
        financeDetailManager?.finance?.financeBankBalance +
        financeDetailManager?.finance?.financeIncomeBankBalance;
      if (
        bankBalance > financeDetailManager?.finance?.financeExpenseBankBalance
      ) {
        bankBalance -= financeDetailManager?.finance?.financeExpenseBankBalance;
      }
      setCashBalance(cashBalance);
      setBankBalance(bankBalance);
    }
  }, [financeDetailManager?.finance]);
  //   console.info("shfjsdgfhsdf", financeDetailManager);

  const onOpenMenu = () => {
    setOpenMenu((pre) => !pre);
  };

  const onNumberFormat = (val) => {
    return val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0;
  };
  return (
    <div
      style={{
        position: "sticky",
        top: "77px",
        height: "fit-content",
        width: "30%",
      }}
    >
      <Goback whichType="PREVIOUS_GO" />
      <CommonSidebarBackground
        dynamicImage={
          financeDetailManager?.finance?.cover
            ? `${imageShowUrl}/${financeDetailManager?.finance?.cover}`
            : "/images/profileAndCover/finance-cover.svg"
        }
        edit={true}
        onEditAction={onOpenMenu}
      />

      <CommonSideCard
        cardAsHead={true}
        heading={` ${
          financeDetailManager?.finance?.financeHead?.staffFirstName || ""
        } ${
          financeDetailManager?.finance?.financeHead?.staffMiddleName
            ? financeDetailManager?.finance?.financeHead?.staffMiddleName
            : ""
        } ${financeDetailManager?.finance?.financeHead?.staffLastName || ""}`}
        description={t("finace_manager")}
        customStyleCard={{
          borderRadius: "18px 18px 0px 0px",
          border: "none",
          marginTop: "-1.49vw",
        }}
      />
      <CommonSideCard
        cardAsHead={false}
        heading={t("cash")}
        description={t("cash_balance")}
        count={`Rs. ${onNumberFormat(cashBalance)}`}
      />
      <CommonSideCard
        cardAsHead={false}
        heading={t("bank")}
        description={t("bank_balance")}
        count={`Rs. ${onNumberFormat(bankBalance)}`}
      />
      <CommonSideCard
        cardAsHead={false}
        heading={t("due")}
        description={t("due_from_qviple")}
        count={`Rs. ${onNumberFormat(
          financeDetailManager?.finance?.institute?.adminRepayAmount
        )}`}
        customStyleCard={{
          borderRadius: "0 0 12px 12px",
          borderBottom: "0.4px solid rgba(0, 0, 0, 0.15)",
        }}
      />
      <CustomSuspense>
        <FinanceModal
          financeModal={openMenu}
          hideModal={onOpenMenu}
          edit={true}
          financeManagerName={financeDetailManager?.finance?.financeHead}
          onParentRefetch={financeDetailManagerRefetch}
        />
      </CustomSuspense>
    </div>
  );
};

export default FinanceSidebar;

import { useFinanceAllBank } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import CustomSelectBank from "../../../Ui/Select/CustomSelectBank";
import { useTranslation } from "react-i18next";

const FeeStatisticsBankFilter = ({ fid, onSelect }) => {
  const { t } = useTranslation();
  const { financeAllBank } = useFinanceAllBank({
    data: {
      fid: fid,
      page: 1,
      limit: 1000,
      search: "",
    },
    skip: !fid,
  });
  // console.info("sdjhfbsdj",financeAllBank?.all_accounts)

  return (
    <CustomSelectBank
      selectLabel={t("bank_account")}
      selectedValue={t("bank_account_placeholder")}
      options={
        financeAllBank?.all_accounts?.length > 0
          ? [...financeAllBank?.all_accounts]
          : []
      }
      onClick={onSelect}
      isFull
    />
  );
};

export default FeeStatisticsBankFilter;

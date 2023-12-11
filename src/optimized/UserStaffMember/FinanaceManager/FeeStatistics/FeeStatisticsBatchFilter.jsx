import { useDepartmentAllBatch } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import CustomSelectBatch from "../../../Ui/Select/CustomSelectBatch";
import { useTranslation } from "react-i18next";

const FeeStatisticsBatchFilter = ({ did, onSelect, onlyBatch }) => {
  const { t } = useTranslation();
  const { departmentAllBatch } = useDepartmentAllBatch({
    did: did,
    skip: !did,
  });
  return (
    <>
      {onlyBatch ? (
        <CustomSelectBatch
          selectLabel={t("select_batch")}
          selectedValue={t("select_batch_placeholder")}
          options={departmentAllBatch?.length > 0 ? departmentAllBatch : []}
          onClick={onSelect}
          isFull
        />
      ) : (
        <CustomSelectBatch
          selectLabel={t("select_batch")}
          selectedValue={t("select_batch_placeholder")}
          options={
            departmentAllBatch?.length > 0
              ? ["ALL", ...departmentAllBatch]
              : ["ALL"]
          }
          onClick={onSelect}
          isFull
        />
      )}
    </>
  );
};

export default FeeStatisticsBatchFilter;

import { useDepartmentAllClassMaster } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import CustomSelectStandard from "../../../Ui/Select/CustomSelectStandard";
import { useTranslation } from "react-i18next";

const FeeStatisticsStandardFilter = ({ instituteId, did, onSelect }) => {
  const { t } = useTranslation();
  const { departmentAllClassMaster } = useDepartmentAllClassMaster({
    data: {
      id: instituteId,
      did: did,
    },
    skip: !instituteId ? !instituteId : !did ? !did : !did,
  });
  return (
    <CustomSelectStandard
      selectLabel={t("select_standard")}
      selectedValue={t("select_standard_placeholder")}
      options={
        departmentAllClassMaster?.length > 0
          ? [...departmentAllClassMaster]
          : []
      }
      onClick={onSelect}
      isFull
    />
  );
};

export default FeeStatisticsStandardFilter;

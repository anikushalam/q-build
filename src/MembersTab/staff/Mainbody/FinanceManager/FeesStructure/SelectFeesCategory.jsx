import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useGetAllFeesCategory } from "../../../../../hooks/member_tab/finance-api";
import CustomSelectInput from "../../../../../JoiningForm/Student/Form/CustomSelectInput";

const SelectFeesCategory = ({
  financeId,
  onSelectOption,
  categoryMaster,
  filled,
}) => {
  const { t } = useTranslation();
  const { getAllFeesCategory, getAllFeesCategoryRefetch } =
    useGetAllFeesCategory({
      fid: financeId,
      skip: !financeId,
    });

  useEffect(() => {
    if (financeId) getAllFeesCategoryRefetch();
  }, [financeId, getAllFeesCategoryRefetch]);

  return (
    <>
      <CustomSelectInput
        selectLabel={t("select_fee_category_master")}
        selectedValue={t("please_select_fees_category")}
        value={categoryMaster}
        onClick={onSelectOption}
        name="categoryMaster"
        options={getAllFeesCategory?.all_fees_format || []}
        errorShow={filled["categoryMaster"]}
      />
    </>
  );
};

export default SelectFeesCategory;

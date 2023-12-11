import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomNormalSelectInput from "../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import JoinFormCalender from "../../../../../../JoiningForm/Student/Form/JoinFormCalender";
import style from "./TransactionFilter.module.css";
const FilterFeesType = ({ onFilterData }) => {
  const { t } = useTranslation();
  const [filterKey, setFilterKey] = useState({
    tab_flow: "BY_FEE_TYPE",
    timeline: "false",
    timeline_content: "",
    from: "",
    to: "",
    fee_type: "",
    fee_mode: "",
  });

  const onDateFunctionFrom = (val) => {
    let splitDate = val?.split("/");
    let modify = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    setFilterKey((prev) => ({
      ...prev,
      from: modify,
    }));
  };

  const onDateFunctionTo = (val) => {
    let splitDate = val?.split("/");
    let modify = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    setFilterKey((prev) => ({
      ...prev,
      to: modify,
    }));
  };
  const onModeSelect = (val) => {
    setFilterKey((prev) => ({
      ...prev,
      timeline: false,
      fee_mode: val,
    }));
  };
  const onTypeSelect = (val) => {
    setFilterKey((prev) => ({
      ...prev,
      timeline: false,
      fee_type: val,
    }));
  };

  const onFilter = () => {
    onFilterData(filterKey);
  };
  return (
    <div>
      <CustomNormalSelectInput
        selectLabel={t("filter_select_fee_mode")}
        selectedValue={t("filter_select_fee_mode_placeholder")}
        options={["Online", "Offline", "By Bank", "By Cash"]}
        onClick={onModeSelect}
        value={filterKey.fee_mode}
      />
      <CustomNormalSelectInput
        selectLabel={t("filter_select_fee_type")}
        selectedValue={t("filter_select_fee_type_placeholder")}
        options={[
          "Admission Fees",
          "Expense",
          "Income",
          "Internal Fees",
          "Admission",
        ]}
        onClick={onTypeSelect}
        value={filterKey.fee_type}
      />
      <div className={style.row_field}>
        <JoinFormCalender
          labelText={t("filter_from")}
          placeholder={t("select_date")}
          name={"from"}
          value={filterKey.from}
          onDateFunction={onDateFunctionFrom}
          //  errorShow={formErrors["staffDOB"]}
          customStyleContainer={{ position: "relative", width: "48%" }}
          datePickerPosition={{
            top: "-11rem",
          }}
        />
        <JoinFormCalender
          labelText={t("filter_to")}
          placeholder={t("select_date")}
          name={"from"}
          value={filterKey.to}
          onDateFunction={onDateFunctionTo}
          //  errorShow={formErrors["staffDOB"]}
          customStyleContainer={{ position: "relative", width: "48%" }}
          datePickerPosition={{
            top: "-11rem",
            left: "-7rem",
          }}
        />
      </div>

      <button className={style.filter_data_btn} onClick={onFilter}>
        {t("filter_data")}
      </button>
    </div>
  );
};

export default FilterFeesType;

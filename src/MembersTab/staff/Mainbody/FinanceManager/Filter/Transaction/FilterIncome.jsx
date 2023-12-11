import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomNormalSelectInput from "../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import JoinFormCalender from "../../../../../../JoiningForm/Student/Form/JoinFormCalender";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "./TransactionFilter.module.css";
const FilterIncome = ({ onFilterData }) => {
  const { t } = useTranslation();
  const [filterKey, setFilterKey] = useState({
    tab_flow: "BY_INCOMES",
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
  const onTimelineSelect = (val) => {
    setFilterKey((prev) => ({
      ...prev,
      timeline: true,
      timeline_content: val,
    }));
  };

  const onFilter = () => {
    onFilterData(filterKey);
  };
  return (
    <div>
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
            top: "-1rem",
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
            top: "-1rem",
            left: "-7rem",
          }}
        />
      </div>
      {/* <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "1.5rem",
          marginBottom: "0.5rem",
        }}
      />
      <h6 className={style.filter_or}>{t("filter_or")}</h6>
      <CustomNormalSelectInput
        selectLabel={t("filter_select_timeline")}
        selectedValue={t("filter_select_timeline_placeholder")}
        options={["Past Week", "Past Month", "Past Year"]}
        onClick={onTimelineSelect}
        value={filterKey.timeline_content}
      /> */}

      <button className={style.filter_data_btn} onClick={onFilter}>
        {t("filter_data")}
      </button>
    </div>
  );
};

export default FilterIncome;

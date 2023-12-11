import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  useAllDepartmentCondition,
  useOneDepartmentAllClassMaster,
  useOneViewDepartment,
} from "../../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import {
  useFilterFeeHeadReceipt,
  useGetAllBankByFinance,
  // useGetAllFeesStructure,
} from "../../../../../../hooks/member_tab/finance-api";
import CustomNormalSelectInput from "../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import CustomSelectDepartment from "../../../../../../JoiningForm/Student/Form/CustomSelectDepartment";
// import CustomSelectStructure from "../../../../../../JoiningForm/Student/Form/CustomSelectStructure";
import JoinFormCalender from "../../../../../../JoiningForm/Student/Form/JoinFormCalender";
import QLoader from "../../../../../../Loader/QLoader";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../FeesStructure/PopupWrapper";
import style from "../Transaction/TransactionFilter.module.css";
// import { useGetBatchStandardWithMultipleDepartment } from "../../../../../../hooks/member_tab/admission-api";

const FeeHeadFilter = ({ onClose, financeId, instituteId }) => {
  const { t } = useTranslation();
  const ids = useSelector((state) => state.financeChange);
  const [disabled, setDisabled] = useState(false);
  const [filterData, setFilterData] = useState({
    timeline: "false",
    timeline_content: "",
    from: "",
    to: "",
    depart: "",
    batch: "",
    master: [],
    bank: "",
  });
  const [filled, setFilled] = useState("");
  const [filterFeeHeadReceipt] = useFilterFeeHeadReceipt();
  const { allDepartment, allDepartmentRefetch } = useAllDepartmentCondition({
    id: ids.insId ? ids.insId : instituteId,
    skip: ids.insId ? !ids.insId : !instituteId,
  });
  const { allClassMaster, allClassMasterRefetch } =
    useOneDepartmentAllClassMaster({
      data: {
        id: instituteId,
        did: filterData.depart,
      },
      skip: filterData.depart !== "All" ? !filterData.depart : true,
    });
  const { oneDepartment, oneDepartmentRefetch } = useOneViewDepartment({
    did: filterData.depart,
    skip: filterData.depart !== "All" ? !filterData.depart : true,
  });
  const { getAllBankByFinance, getAllBankByFinanceRefetch } =
    useGetAllBankByFinance({
      data: { fid: ids.fid, page: 1, limit: 1000, search: "" },
      skip: !ids.fid,
    });

  React.useEffect(() => {
    if (ids.fid) getAllBankByFinanceRefetch();
  }, [ids.fid, getAllBankByFinanceRefetch]);
  React.useEffect(() => {
    if (ids.insId || instituteId) allDepartmentRefetch();
  }, [ids.insId, instituteId, allDepartmentRefetch]);
  useEffect(() => {
    if (filterData.depart && filterData.depart !== "All") {
      allClassMasterRefetch();
    }
  }, [filterData.depart, allClassMasterRefetch]);

  useEffect(() => {
    if (filterData.depart && filterData.depart !== "All") {
      oneDepartmentRefetch();
    }
  }, [filterData.depart, oneDepartmentRefetch]);

  const onDateFunctionFrom = (val) => {
    let splitDate = val?.split("/");
    let modify = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    setFilterData((prev) => ({
      ...prev,
      from: modify,
    }));
  };

  const onDateFunctionTo = (val) => {
    let splitDate = val?.split("/");
    let modify = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    setFilterData((prev) => ({
      ...prev,
      to: modify,
    }));
  };
  const onTimelineSelect = (val) => {
    setFilterData((prev) => ({
      ...prev,
      timeline: true,
      timeline_content: val,
    }));
  };
  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };

  const onFilterData = () => {
    const validation = onValidation({
      // bank: filterData.bank,
      batch: filterData.batch,
      depart: filterData.depart,
    });
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      setDisabled((pre) => !pre);
      filterFeeHeadReceipt({
        fid: financeId,
        ...filterData,
        all_depart: filterData.depart === "All" ? "All" : "Particular",
        batch_status: filterData.batch,
        pendingData: {
          depart: filterData.depart === "All" ? "" : filterData.depart,
          batch: filterData.depart === "All" ? "" : filterData.batch,
          master: filterData.depart === "All" ? [] : filterData.master,
        },
      })
        .then(() => {
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch({});
    }
  };

  const onDepartmentSelect = (val) => {
    setFilterData((prev) => ({
      ...prev,
      depart: val,
    }));
  };

  const onSelectBank = (val) => {
    setFilterData((prevState) => ({
      ...prevState,
      bank: val?._id,
    }));
  };
  const onBatchSelect = (val) => {
    setFilterData((prev) => ({
      ...prev,
      batch: val,
    }));
  };
  const onMasterSelect = (val) => {
    setFilterData((prev) => ({
      ...prev,
      master: [...prev.master, val],
    }));
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.transaction_container}>
        <h6>{t("filter_by_fee_head")}</h6>
        <CustomSelectDepartment
          selectLabel={t("select_department")}
          selectedValue={t("all_select_particular_department")}
          options={
            allDepartment?.institute?.depart
              ? ["All", ...allDepartment?.institute?.depart]
              : ["All"]
          }
          onClick={onDepartmentSelect}
          errorShow={filled["depart"]}
        />
        <CustomSelectDepartment
          selectLabel={
            filterData.depart === "All"
              ? t("select_current_batch")
              : t("select_batch")
          }
          selectedValue={
            filterData.depart === "All"
              ? t("select_pref")
              : t("all_time_select_batch")
          }
          options={
            filterData.depart === "All"
              ? ["Current", "All"]
              : oneDepartment?.department?.batches
              ? [...oneDepartment?.department?.batches]
              : []
          }
          onClick={onBatchSelect}
          errorShow={filled["batch"]}
        />
        {filterData.depart === "All" ? (
          ""
        ) : (
          <CustomSelectDepartment
            selectLabel={t("select_standard_year")}
            selectedValue={t("select_standard_year_placeholder")}
            options={
              allClassMaster?.classMaster
                ? [...allClassMaster?.classMaster]
                : []
            }
            onClick={onMasterSelect}
            viewAs="NORMAL_FILTER"
            defalutValue={
              filterData.master?.length < 2
                ? ""
                : `${filterData.master?.length} standard`
            }
          />
        )}
        <CustomSelectDepartment
          selectLabel="Select Bank (Optional)"
          selectedValue="Please select Bank"
          options={getAllBankByFinance?.all_accounts ?? []}
          value={""}
          onClick={onSelectBank}
          openAs="PROMOTE"
          // errorShow={filled["bank"]}
        />
        <div className={style.row_field}>
          <JoinFormCalender
            labelText={t("filter_from")}
            placeholder={t("select_date")}
            name={"from"}
            value={filterData.from}
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
            value={filterData.to}
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
          value={filterData.timeline_content}
        /> */}

        <button className={style.filter_data_btn} onClick={onFilterData}>
          {t("filter_data")}
        </button>
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default FeeHeadFilter;

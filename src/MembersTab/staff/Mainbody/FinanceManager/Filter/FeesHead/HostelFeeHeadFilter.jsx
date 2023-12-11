import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useFilterHostelFeeHeadReceipt } from "../../../../../../hooks/member_tab/finance-api";
import CustomNormalSelectInput from "../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import CustomSelectDepartment from "../../../../../../JoiningForm/Student/Form/CustomSelectDepartment";
import CustomSelectStructure from "../../../../../../JoiningForm/Student/Form/CustomSelectStructure";
import JoinFormCalender from "../../../../../../JoiningForm/Student/Form/JoinFormCalender";
import QLoader from "../../../../../../Loader/QLoader";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../FeesStructure/PopupWrapper";
import style from "../Transaction/TransactionFilter.module.css";
import {
  useGetHostelFeeStructureList,
  useGetHostelUnitList,
} from "../../../../../../hooks/member_tab/hostel-api";

const HostelFeeHeadFilter = ({ onClose, financeId, hostelId }) => {
  const { t } = useTranslation();
  const ids = useSelector((state) => state.financeChange);
  const [disabled, setDisabled] = useState(false);
  const [filterStatus, setFilterStatus] = useState(true);
  const [filterData, setFilterData] = useState({
    timeline: "false",
    timeline_content: "",
    from: "",
    to: "",
    fsid: "",
    depart: "",
  });
  const { filterHostelFeeHeadReceipt, filterHostelFeeHeadReceiptRefetch } =
    useFilterHostelFeeHeadReceipt({
      data: {
        fid: ids.fid ? ids.fid : financeId,
        ...filterData,
      },
      skip: filterStatus,
    });

  const { getHostelUnitList, getHostelUnitListRefetch } = useGetHostelUnitList({
    data: {
      hid: hostelId,
      page: 1,
      limit: 1000,
      search: "",
    },
    skip: !hostelId,
  });
  const { getHostelFeeStructureList, getHostelFeeStructureListRefetch } =
    useGetHostelFeeStructureList({
      data: {
        hid: hostelId,
        page: 1,
        limit: 1000,
        filter_by: "",
        master_by: "",
      },
      skip: !hostelId,
    });

  React.useEffect(() => {
    if (hostelId) {
      getHostelUnitListRefetch();
      getHostelFeeStructureListRefetch();
    }
  }, [hostelId, getHostelUnitListRefetch]);

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

  const onFilterData = () => {
    setDisabled((pre) => !pre);
    setFilterStatus(false);
    filterHostelFeeHeadReceiptRefetch();
  };
  useEffect(() => {
    if (filterHostelFeeHeadReceipt?.message) {
      setDisabled((pre) => !pre);
      onClose();
    }
  }, [filterHostelFeeHeadReceipt]);
  const onDepartmentSelect = (val) => {
    setFilterData((prev) => ({
      ...prev,
      depart: val,
    }));
  };
  const onFeeStructureSelect = (val) => {
    setFilterData((prev) => ({
      ...prev,
      fsid: val,
    }));
  };

  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.transaction_container}>
        <h6>{t("filter_by_fee_head")}</h6>
        <CustomSelectDepartment
          selectLabel={t("select_unit")}
          selectedValue={t("select_unit")}
          options={getHostelUnitList?.all_units ?? []}
          onClick={onDepartmentSelect}
          value={filterData.depart}
        />
        <CustomSelectStructure
          selectLabel={t("filter_select_fee_structure")}
          selectedValue={t("filter_select_fee_structure_placeholder")}
          options={getHostelFeeStructureList?.all_structures ?? []}
          onClick={onFeeStructureSelect}
          value={filterData.fsid}
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

export default HostelFeeHeadFilter;

import React, { useEffect, useState } from "react";
import style from "../../StaffAdmisionAdmin/MiddleContent/Funds/Funds.module.css";
import { useTranslation } from "react-i18next";
// import { useNavigate, useParams } from "react-router-dom";
import {
  useExportFilterDataByHostel,
  useGetHostelUnitList,
} from "../../../../../hooks/member_tab/hostel-api";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import CustomSelectDepartment from "../../../../../JoiningForm/Student/Form/CustomSelectDepartment";
import { useGetAllFeesCategory } from "../../../../../hooks/member_tab/finance-api";
import { casteCategory } from "../../../../../constant/constant_value";
import QLoader from "../../../../../Loader/QLoader";
const HostelFilter = ({
  hostelId,
  financeId,
  // carryParentState,
  onClose,
  viewAs,
  onRefetch,
}) => {
  const { t } = useTranslation();
  // const navigate = useNavigate();
  // const params = useParams();
  // const [next, setNext] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [filterData, setFilterData] = useState({
    depart: "",
    // batch: "",
    // master: "",
    fee_struct: "",
  });
  const [queryData, setQueryData] = useState({
    gender: "",
    caste: "",
    is_all: "",
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

  const { getAllFeesCategory, getAllFeesCategoryRefetch } =
    useGetAllFeesCategory({
      fid: financeId,
      skip: !financeId,
    });

  const [exportFilterDataByHostel] = useExportFilterDataByHostel();
  useEffect(() => {
    if (hostelId) {
      getHostelUnitListRefetch();
    }
  }, [hostelId, getHostelUnitListRefetch]);

  useEffect(() => {
    if (financeId) getAllFeesCategoryRefetch();
  }, [financeId, getAllFeesCategoryRefetch]);
  const onDepartmentSelect = (val) => {
    setFilterData((prev) => ({
      ...prev,
      depart: val,
    }));
  };

  const onGenderSelect = (val) => {
    setQueryData((prev) => ({
      ...prev,
      gender: val,
    }));
  };
  const onCatseSelect = (val) => {
    setQueryData((prev) => ({
      ...prev,
      caste: val,
    }));
  };
  const onCategorySelect = (val) => {
    setFilterData((prev) => ({
      ...prev,
      fee_struct: val,
    }));
  };
  const onPendingSelect = (val) => {
    setQueryData((prev) => ({
      ...prev,
      is_all: val === "All Time Fees" ? true : false,
    }));
  };
  const onExportData = () => {
    setDisabled((pre) => !pre);
    exportFilterDataByHostel({
      hid: hostelId,
      ...queryData,
      all_depart: filterData.depart === "All" ? "All" : "Particular",
      // batch_status: filterData.batch,
      pendingData: {
        depart: filterData.depart === "All" ? "" : filterData.depart,
        // batch: filterData.depart === "All" ? "" : filterData.batch,
        // master: filterData.depart === "All" ? "" : filterData.master,
        fee_struct: filterData.depart === "All" ? "" : filterData.fee_struct,
      },
    })
      .then(() => {
        if (viewAs === "EXPORT") {
          onRefetch();
          onClose();
        } else {
          // navigate(`/q/${params.username}/member/hostel?a=export`, {
          //   state: {
          //     ...carryParentState,
          //   },
          // });
        }
        setDisabled((pre) => !pre);
        // console.info("this ndgs", res);
      })
      .catch({});
  };
  //   console.info("sdgdggsgs0", instituteId, filterData.depart);
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.filter_container}>
        <h6 className={style.filter_title}>
          {t("filter_and_export_fees_data")}
        </h6>
        {/* {!next && (
          <>
            
            <button
              className={style.next_btn}
              onClick={() => setNext((pre) => !pre)}
            >
              {t("next")}
            </button>
          </>
        )} */}
        {/* {next && (
          <> */}
        <CustomSelectDepartment
          selectLabel={t("select_unit")}
          selectedValue={t("all_select_particular_department")}
          options={
            getHostelUnitList?.all_units
              ? ["All", ...getHostelUnitList?.all_units]
              : ["All"]
          }
          onClick={onDepartmentSelect}
        />

        <CustomSelectDepartment
          selectLabel={t("select_gender")}
          selectedValue={t("select_gender_placeholder")}
          options={["Male", "Female", "Other"]}
          onClick={onGenderSelect}
        />
        <CustomSelectDepartment
          selectLabel={t("select_caste_catgory")}
          selectedValue={t("select_caste_catgory_placeholder")}
          options={casteCategory}
          onClick={onCatseSelect}
        />
        <CustomSelectDepartment
          selectLabel={t("select_fee_category")}
          selectedValue={t("select_fee_category_placeholder")}
          options={
            getAllFeesCategory?.all_fees_format
              ? [...getAllFeesCategory?.all_fees_format]
              : []
          }
          onClick={onCategorySelect}
        />
        <CustomSelectDepartment
          selectLabel={t("select_all_or_pending")}
          selectedValue={t("select_all_or_pending_placeholder")}
          options={["All Time Fees", "Pending Fees"]}
          onClick={onPendingSelect}
        />
        <button className={style.next_btn} onClick={onExportData}>
          {t("export_data")}
        </button>
        {/* </>
        )} */}
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default HostelFilter;

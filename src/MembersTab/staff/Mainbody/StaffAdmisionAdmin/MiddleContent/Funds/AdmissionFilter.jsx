import React, { useEffect, useState } from "react";
import style from "./Funds.module.css";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import CustomSelectDepartment from "../../../../../../JoiningForm/Student/Form/CustomSelectDepartment";
import {
  useExportFilterDataByAdmission,
  useGetAllDepartment,
} from "../../../../../../hooks/member_tab/admission-api";
import {
  useOneDepartmentAllClassMaster,
  useOneViewDepartment,
} from "../../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { casteCategory } from "../../../../../../constant/constant_value";
import { useGetAllFeesCategory } from "../../../../../../hooks/member_tab/finance-api";
import { useNavigate, useParams } from "react-router-dom";
import QLoader from "../../../../../../Loader/QLoader";
const AdmissionFilter = ({
  admissionId,
  instituteId,
  financeId,
  carryParentState,
  onClose,
  viewAs,
  onRefetch,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const params = useParams();
  const [next, setNext] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [filterData, setFilterData] = useState({
    depart: "",
    batch: "",
    master: "",
    fee_struct: "",
  });
  const [queryData, setQueryData] = useState({
    gender: "",
    caste: "",
    is_all: "",
  });
  const { allDepartmentList, allDepartmentListRefetch } = useGetAllDepartment({
    aid: admissionId,
    skip: !admissionId,
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
  const { getAllFeesCategory, getAllFeesCategoryRefetch } =
    useGetAllFeesCategory({
      fid: financeId,
      skip: !financeId,
    });

  const [exportFilterDataByAdmission] = useExportFilterDataByAdmission();
  useEffect(() => {
    if (admissionId) {
      allDepartmentListRefetch();
    }
  }, [admissionId, allDepartmentListRefetch]);

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

  useEffect(() => {
    if (financeId) getAllFeesCategoryRefetch();
  }, [financeId, getAllFeesCategoryRefetch]);
  const onDepartmentSelect = (val) => {
    setFilterData((prev) => ({
      ...prev,
      depart: val,
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
      master: val,
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
    exportFilterDataByAdmission({
      aid: admissionId,
      ...queryData,
      all_depart: filterData.depart === "All" ? "All" : "Particular",
      batch_status: filterData.batch,
      pendingData: {
        depart: filterData.depart === "All" ? "" : filterData.depart,
        batch: filterData.depart === "All" ? "" : filterData.batch,
        master: filterData.depart === "All" ? [] : [filterData.master],
        fee_struct: filterData.depart === "All" ? "" : filterData.fee_struct,
      },
    })
      .then(() => {
        if (viewAs === "EXPORT") {
          onRefetch();
          onClose();
        } else {
          navigate(`/q/${params.username}/member/admission?a=export`, {
            state: {
              ...carryParentState,
            },
          });
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
        {!next && (
          <>
            <CustomSelectDepartment
              selectLabel={t("select_department")}
              selectedValue={t("all_select_particular_department")}
              options={
                allDepartmentList?.allDB
                  ? ["All", ...allDepartmentList?.allDB]
                  : ["All"]
              }
              onClick={onDepartmentSelect}
            />

            <CustomSelectDepartment
              selectLabel={
                filterData.depart === "All"
                  ? t("select_current_batch")
                  : t("select_batch_optional")
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
              />
            )}
            <button
              className={style.next_btn}
              onClick={() => setNext((pre) => !pre)}
            >
              {t("next")}
            </button>
          </>
        )}
        {next && (
          <>
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
          </>
        )}
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default AdmissionFilter;

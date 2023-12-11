import React, { useCallback, useEffect, useState } from "react";
import style from "../../../../MembersTab/staff/Mainbody/StaffAdmisionAdmin/MiddleContent/Funds/Funds.module.css";
import { useTranslation } from "react-i18next";
import {
  useAllDepartmentCondition,
  useOneDepartmentAllClassMaster,
  useOneViewDepartment,
} from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { useSelector } from "react-redux";
import PopupWrapper from "../../../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import CustomSelectDepartment from "../../../../JoiningForm/Student/Form/CustomSelectDepartment";
import { casteCategory, religion } from "../../../../constant/constant_value";
import QLoader from "../../../../Loader/QLoader";
import { useStudentExportData } from "../../../../hooks/ExportData/export-data-api";
import { CSVLink } from "react-csv";

const InstituteStudentFilter = ({ onClose }) => {
  const { t } = useTranslation();
  const instituteId = useSelector((state) => state.idChange.id);
  const [next, setNext] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [filterData, setFilterData] = useState({
    depart: "",
    batch: "",
    master: "",
    religion: "",
  });
  const [queryData, setQueryData] = useState({
    gender: "",
    caste: "",
  });

  const [exportData, setExportData] = useState([]);
  const [downloadLink, setDownloadLink] = useState(false);
  const { allDepartment, allDepartmentRefetch } = useAllDepartmentCondition({
    id: instituteId,
    skip: !instituteId,
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

  useEffect(() => {
    if (instituteId) {
      allDepartmentRefetch();
    }
  }, [instituteId, allDepartmentRefetch]);

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

  const [studentExportData] = useStudentExportData();

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
  const onReligionSelect = (val) => {
    setFilterData((prev) => ({
      ...prev,
      religion: val,
    }));
  };

  function getfunctionEntries(arr) {
    return arr?.map(function (e) {
      return {
        GRNo: e?.studentGRNO,

        Name:
          e?.studentFirstName +
          " " +
          e?.studentMiddleName +
          " " +
          e?.studentLastName,
        Gender: e?.studentGender,
        MotherName: e?.studentMotherName ? e?.studentMotherName : "NA",
        DOB: e?.studentDOB ? e?.studentDOB : "NA",
        CastCategory: e?.studentCastCategory ? e?.studentCastCategory : "NA",
        Religion: e?.studentReligion ? e?.studentReligion : "NA",
        BirthPlace: e?.studentBirthPlace ? e?.studentBirthPlace : "NA",
        Address: e?.studentAddress ? e?.studentAddress : "NA",
        ParentsName: e?.studentParentsName ? e?.studentParentsName : "NA",
        State: e?.studentState ? e?.studentState : "NA",
        District: e?.studentDistrict ? e?.studentDistrict : "NA",
        Nationality: e?.studentNationality ? e?.studentNationality : "NA",
        Class: e?.studentClass?.className ? e?.studentClass?.className : "NA",
        Contact: e?.studentPhoneNumber ? e?.studentPhoneNumber : "NA",
        AdmissionDate: e?.studentAdmissionDate
          ? e?.studentAdmissionDate?.split("T")[0]
          : "NA",
        AadharNumber: e?.AadharNumber ? e?.AadharNumber : "NA",
      };
    });
  }
  const onExportData = () => {
    setDisabled((pre) => !pre);
    studentExportData({
      id: instituteId,
      all_depart: filterData.depart === "All" ? "All" : "Particular",
      batch_status: filterData.batch,
      ...queryData,
      religion: filterData.depart === "All" ? "" : filterData.religion,
      body: {
        depart: filterData.depart === "All" ? "" : filterData.depart,
        batch: filterData.depart === "All" ? "" : filterData.batch,
        master: filterData.depart === "All" ? "" : filterData.master,
      },
    })
      .then(async (res) => {
        setExportData(() => getfunctionEntries(res.data?.student_card));
        setDownloadLink(true);
      })
      .catch(() => {});
  };

  useEffect(() => {
    if (downloadLink) {
      let downlabel = document.getElementById("csv_download_file");
      downlabel.click();
      setDownloadLink(false);
      setExportData([]);
      setDisabled((pre) => !pre);
    }
  }, [downloadLink]);

  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.filter_container}>
        <h6 className={style.filter_title}>
          {t("filter_and_export_student_data")}
        </h6>
        {!next && (
          <>
            <CustomSelectDepartment
              selectLabel={t("select_department")}
              selectedValue={t("all_select_particular_department")}
              options={
                allDepartment?.institute?.depart
                  ? ["All", ...allDepartment?.institute?.depart]
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
              selectLabel={t("select_student_religion")}
              selectedValue={t("select_student_religion_placeholder")}
              options={religion}
              onClick={onReligionSelect}
            />
            <button className={style.next_btn} onClick={onExportData}>
              {t("export_data")}
            </button>
            <CSVLink
              data={exportData}
              filename="Student List"
              id="csv_download_file"
            />
          </>
        )}
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default InstituteStudentFilter;

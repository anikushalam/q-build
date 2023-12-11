import React, { useCallback, useEffect, useState } from "react";
import style from "./StaffFunctionRow.module.css";
import {
  useAddStaffExcelByInstitute,
  useSearchStaff,
} from "../../../../../hooks/institute/institute-staff-student-api";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useStaffExportData } from "../../../../../hooks/ExportData/export-data-api";
import { Link, useParams } from "react-router-dom";
import { debounce } from "lodash";
import { CSVLink } from "react-csv";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import QLoader from "../../../../../Loader/QLoader";
const StaffFunctionRow = ({ countRow, setAllStaff, value, setValue }) => {
  const { t } = useTranslation();
  const id = useSelector((state) => state.idChange.id);
  const params = useParams();
  const [previousStaff, setPreviousStaff] = useState(countRow);
  const [disabled, setDisabled] = useState(false);
  const { searchStaff, searchStaffRefetch } = useSearchStaff({
    data: { search: value, page: 1, limit: 10, id: id },
    skip: !value,
  });
  const [oneFileUpload] = useFileUpload();
  const [addStaffExcelByInstitute] = useAddStaffExcelByInstitute();

  const { staffExportData } = useStaffExportData();
  useEffect(() => {
    if (countRow) {
      setPreviousStaff(countRow);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countRow]);

  useEffect(() => {
    if (searchStaff?.staff) {
      setAllStaff(searchStaff.staff);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchStaff?.staff]);

  useEffect(() => {
    if (value) searchStaffRefetch();
  }, [value, searchStaffRefetch]);
  const onSearchDebounce = useCallback(
    debounce((val) => setValue(val), 500),
    []
  );

  const searchHandler = (e) => {
    if (e.target.value === "") {
      setValue("");
      setAllStaff(previousStaff);
    } else {
      onSearchDebounce(e.target.value);
    }
  };

  function getfunctionEntries(arr) {
    return arr?.map(function (e) {
      return {
        RollNo: e?.staffROLLNO,

        Name:
          e?.staffFirstName + " " + e?.staffMiddleName + " " + e?.staffLastName,
        Gender: e?.staffGender ? e?.staffGender : "NA",
        MotherName: e?.staffMotherName ? e?.staffMotherName : "NA",
        DOB: e?.staffDOB ? e?.staffDOB : "NA",
        CastCategory: e?.staffCastCategory ? e?.staffCastCategory : "NA",
        Religion: e?.staffReligion ? e?.staffReligion : "NA",
        BirthPlace: e?.staffBirthPlace ? e?.staffBirthPlace : "NA",
        Address: e?.staffAddress ? e?.staffAddress : "NA",

        State: e?.staffState ? e?.staffState : "NA",
        District: e?.staffDistrict ? e?.staffDistrict : "NA",
        Nationality: e?.staffNationality ? e?.staffNationality : "NA",

        Contact: e?.staffPhoneNumber ? e?.staffPhoneNumber : "NA",
        JoiningDate: e?.staffJoinDate ? e?.staffJoinDate?.split("T")[0] : "NA",
        AadharNumber: e?.staffAadharNumber ? e?.staffAadharNumber : "NA",
      };
    });
  }

  const newArray = getfunctionEntries(staffExportData?.staff_card);
  const onExcelFileUpload = (e) => {
    setDisabled((pre) => !pre);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        if (res.data?.imageKey) {
          addStaffExcelByInstitute({
            id: id,
            excelFile: {
              excel_file: res.data?.imageKey,
            },
          })
            .then(() => {
              setDisabled((pre) => !pre);
            })
            .catch({});
        } else {
          setDisabled((pre) => !pre);
        }
      })
      .catch({});
  };
  return (
    <>
      <div className={style.exploreParent}>
        <div className={style.exploreChild}>
          <div className={style.searchbar}>
            <input
              type="text"
              name="search"
              placeholder={t("search")}
              className={`form-control ${style.searchinput}`}
              onChange={searchHandler}
            />
            <img alt="img" src="/images/search-dash-icon.svg" />
          </div>
          <div
            className={style.class_header_info_add_student}
            title="Import staff from excel"
            style={{
              marginRight: "0.5rem",
            }}
          >
            <label className={style.upload_excel_file} htmlFor="uploadExcel">
              <img
                src="/images/upload-xslx-icon.svg"
                alt="add student icon"
                title="Upload excel file"
              />
            </label>
            <input
              type={"file"}
              id="uploadExcel"
              accept=".xlsx"
              onChange={onExcelFileUpload}
              style={{
                display: "none",
              }}
            />
          </div>
          <Link
            to={"/q/joining"}
            state={{
              formAs: "STAFF",
              openAs: "INSTITUTE_SIDE",
            }}
            style={{
              marginRight: "0.5rem",
            }}
          >
            <div className={style.class_header_info_add_student}>
              <img src="/images/add-icon.svg" alt="add student icon" />
              {/* <p>{t("add_student")}</p> */}
            </div>
          </Link>
          {newArray?.length > 0 && (
            <CSVLink data={newArray} filename="Staff List">
              <button type="button" className={style.downloadBtn}>
                <img
                  src="/images/download.svg"
                  title="Download"
                  alt="download icon"
                />
              </button>
            </CSVLink>
          )}
          {/* <Link to={`/q/${params.username}/staff?a=setting`}>
            <p
              className={style.staff_settings}
              style={{
                marginRight: "0.5rem",
              }}
            >
              {t("staff_setting")}
            </p>
          </Link> */}
        </div>
      </div>
      {disabled && <QLoader />}
    </>
  );
};

export default StaffFunctionRow;

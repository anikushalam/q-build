import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";
import { useTranslation } from "react-i18next";
import RemainingNotify from "./RemainingNotify";
import AllStudentFilter from "../../../Filter/Dynamic/AllStudentFilter";
import QLoader from "../../../../../Loader/QLoader";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import { useExistStudentFeesExcelByAdmission } from "../../../../../hooks/member_tab/admission-api";
const RemainingFeesWrapper = ({
  aid,
  instituteId,
  isEnable,
  onRefetch,
  setApplyFilter,
  applyFilter,
  isApplicable,
  pageOpenAs,
  admissionId,
  children,
}) => {
  const { t } = useTranslation();
  const [reminder, setReminder] = useState(false);
  const [filter, setFilter] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const [disabled, setDisabled] = useState(false);

  const [oneFileUpload] = useFileUpload();
  const [existStudentFeesExcelByAdmission] =
    useExistStudentFeesExcelByAdmission();
  const onBackWithArrowLeft = () => {
    navigate(-1);
  };

  const onExcelFileUpload = (e) => {
    if (e.target.files?.length && admissionId) {
      setDisabled(true);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            existStudentFeesExcelByAdmission({
              aid: admissionId,
              excelFile: {
                excel_file: res.data?.imageKey,
              },
            })
              .then(() => {
                setDisabled(false);
              })
              .catch({});
          } else {
            setDisabled(false);
          }
        })
        .catch({});
    }
  };

  return (
    <>
      <section className={style.moderator_container_title}>
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt="go to previous tab"
          title="Go Back"
          style={{
            cursor: "pointer",
          }}
        />
        <div className={style.with_search}>
          <h6>{t("admission_remaining_fees")}</h6>
          <div className={style.search_container_filter}>
            <section className={style.search_container}>
              <div className={style.search_container_input}>
                <img
                  className={style.searchIcon}
                  alt="search icon"
                  src="/images/search-dash-icon.svg"
                />
                {children}
              </div>
            </section>
            <div className={style.os_filter_container}>
              {isApplicable ? (
                ""
              ) : (
                <img
                  src="/images/filter-blue-icon.svg"
                  alt="filter icon"
                  onClick={() => setFilter(true)}
                />
              )}
              {pageOpenAs === "INSTITUTE" ? (
                <label htmlFor="uploadExcel">
                  <img
                    src="/images/member_tab/subject/subject-excel-icon.svg"
                    alt="excel icon"
                    style={{
                      cursor: "pointer",
                      height: "1.5rem",
                    }}
                  />
                </label>
              ) : null}

              <button
                className={style.os_reminder}
                onClick={() => setReminder(true)}
                disabled={!isEnable}
                style={{
                  opacity: isEnable ? "1" : "0.5",
                }}
              >
                {t("outstanding_reminder")}
              </button>
              <Link
                to={
                  pageOpenAs === "INSTITUTE"
                    ? `/q/${params.username}/admission?a=reminder-message`
                    : `/q/${params.username}/member/admission?a=reminder-message`
                }
                state={{
                  ...getQuery.state,
                  instituteId: instituteId,
                }}
              >
                <img
                  src="/images/member_tab/finance/finance-message-log-icon.svg"
                  alt="receipt icon"
                  title="View message history"
                  style={{
                    height: "2rem",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.5rem",
        }}
      />
      {reminder && (
        <RemainingNotify
          onClose={() => setReminder(false)}
          aid={aid}
          onRefetch={onRefetch}
        />
      )}
      {filter && (
        <AllStudentFilter
          onClose={() => setFilter(false)}
          instituteId={instituteId}
          setApplyFilter={setApplyFilter}
          applyFilter={applyFilter}
        />
      )}
      <input
        type="file"
        id="uploadExcel"
        accept=".xlsx"
        onChange={onExcelFileUpload}
        style={{
          display: "none",
        }}
      />
      {disabled && <QLoader />}
    </>
  );
};

export default RemainingFeesWrapper;

import React, { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import AllAccept from "./AllAccept";
import AllRejected from "./AllRejected";
import AllRequest from "./AllRequest";
import style from "./FeeReceipts.module.css";
import FilterReceipt from "./FilterReceipt";
import { debounce } from "lodash";
const FeeReceipts = ({ admissionId, carryParentState, financeId }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const tabList = [
    {
      name: t("all_request"),
      id: 0,
      url: "member/admission?a=receipt&n=request",
    },
    {
      name: t("accepted"),
      id: 1,
      url: "member/admission?a=receipt&n=accept",
    },
    {
      name: t("rejected"),
      id: 2,
      url: "member/admission?a=receipt&n=reject",
    },
  ];
  const [filterReceipt, setFilterReceipt] = useState(false);
  const [filterReceiptQuery, setFilterReceiptQuery] = useState("");
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (getQuery?.search) {
      setSearch("");
      setSearchValue("");
    }
  }, [getQuery?.search]);
  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    setSearchValue(e.target.value);
    onDebounce(e.target.value);
  };

  return (
    <div className={style.receipt_container}>
      <section className={style.receipt_container_title}>
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt="go to previous tab"
          title="Go Back"
          style={{
            cursor: "pointer",
          }}
        />
        <div
          className={style.receipt_container_title}
          style={{
            justifyContent: "space-between",
            width: "95%",
          }}
        >
          <h6>
            {filterReceiptQuery?.finance_bank_name ? (
              <>
                {filterReceiptQuery?.finance_bank_name ?? ""}
                <span
                  style={{
                    color: "rgba(18, 18, 18, 0.6)",
                    fontSize: "12px",
                  }}
                >
                  {"   ( "}
                  {filterReceiptQuery?.department?.dName ?? ""}
                  {" )"}
                </span>
              </>
            ) : (
              t("fee_receipts_request")
            )}
          </h6>
          <div className={style.search_container_filter}>
            <section className={style.search_container}>
              <div className={style.search_container_input}>
                <img
                  className={style.searchIcon}
                  alt="search icon"
                  src="/images/search-dash-icon.svg"
                />
                <input
                  type="text"
                  placeholder="Search receipts..."
                  onChange={onSearchEvent}
                  value={searchValue}
                />
              </div>
            </section>
            <img
              src="/images/export-filter-icon.svg"
              alt=""
              onClick={() => setFilterReceipt(true)}
              className={style.receipt_filter_icon}
              title="Fliter Fee Receipt"
            />
          </div>
        </div>
      </section>

      <UniversalTab
        tabList={tabList}
        activeIndexTab={
          getQuery?.search?.substring(13) === "request"
            ? 0
            : getQuery?.search?.substring(13) === "accept"
            ? 1
            : 2
        }
        showAs={true}
        customStyleTab={{
          width: "100%",
        }}
        customStyleLink={{
          width: "33.3%",
        }}
        carryParentState={carryParentState}
      />
      <BorderBottom />

      {getQuery?.search?.substring(13) === "request" && (
        <AllRequest
          admissionId={admissionId}
          filterReceiptQuery={filterReceiptQuery}
          search={search}
        />
      )}
      {getQuery?.search?.substring(13) === "accept" && (
        <AllAccept
          admissionId={admissionId}
          filterReceiptQuery={filterReceiptQuery}
          search={search}
        />
      )}
      {getQuery?.search?.substring(13) === "reject" && (
        <AllRejected
          admissionId={admissionId}
          filterReceiptQuery={filterReceiptQuery}
          search={search}
        />
      )}
      {filterReceipt && (
        <FilterReceipt
          onClose={() => setFilterReceipt(false)}
          financeId={financeId}
          setFilterReceiptQuery={setFilterReceiptQuery}
        />
      )}
    </div>
  );
};

export default FeeReceipts;

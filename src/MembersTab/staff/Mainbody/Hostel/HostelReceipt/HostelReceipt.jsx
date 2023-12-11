import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import style from "../../StaffAdmisionAdmin/FeeReceipts/FeeReceipts.module.css";
import { debounce } from "lodash";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import HostelAllRequest from "./HostelAllRequest";
import HostelAllAccept from "./HostelAllAccept";
import HostelAllRejected from "./HostelAllRejected";

const HostelReceipt = ({ hid, carryParentState }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const tabList = [
    {
      name: t("all_request"),
      id: 0,
      url: "member/hostel?a=receipt&n=request",
    },
    {
      name: t("accepted"),
      id: 1,
      url: "member/hostel?a=receipt&n=accept",
    },
    {
      name: t("rejected"),
      id: 2,
      url: "member/hostel?a=receipt&n=reject",
    },
  ];
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
    <div
      className={style.receipt_container}
      style={{
        marginTop: "0",
      }}
    >
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
          <h6>{t("fee_receipts_request")}</h6>
          <div className={style.search_container_filter}>
            <section
              className={style.search_container}
              style={{
                marginTop: "0",
              }}
            >
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
                  style={{
                    border: "0.029vw solid rgba(0, 0, 0, 0.15)",
                    borderRadius: "6px",
                  }}
                />
              </div>
            </section>
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
        <HostelAllRequest hid={hid} search={search} />
      )}
      {getQuery?.search?.substring(13) === "accept" && (
        <HostelAllAccept hid={hid} search={search} />
      )}
      {getQuery?.search?.substring(13) === "reject" && (
        <HostelAllRejected hid={hid} search={search} />
      )}
    </div>
  );
};

export default HostelReceipt;

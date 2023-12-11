import React from "react";
import { useNavigate } from "react-router-dom";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";
import { useTranslation } from "react-i18next";

const RemainingAmountWrapper = ({ children }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onBackWithArrowLeft = () => {
    navigate(-1);
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
          <h6>{t("pending_fees")}</h6>
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
          </div>
        </div>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
        }}
      />
    </>
  );
};

export default RemainingAmountWrapper;

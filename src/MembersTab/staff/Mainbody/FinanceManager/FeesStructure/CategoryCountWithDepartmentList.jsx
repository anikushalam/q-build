import React from "react";
import { useTranslation } from "react-i18next";
import FinanceTabChangeLink from "../FinanceTabChangeLink";
import DepartmentList from "./DepartmentList";
import style from "./FeesStructure.module.css";
import InstituteFinanceTabChangeLink from "../../../../../Finance/Institute/Mainbody/InstituteFinanceTabChangeLink";

const CategoryCountWithDepartmentList = ({
  instituteId,
  fees_category_count,
  fee_master_array_count,
  carryParentState,
  accessRole,
  callApi,
  viewAs,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {viewAs === "INSTITUTE" ? (
        <InstituteFinanceTabChangeLink
          carryParentState={carryParentState}
          activeTab="?a=fee&n=category"
        >
          <div className={style.fees_category}>
            <div className={style.fees_category_icon}>
              <img src="/images/fees-category-icon.svg" alt="categor icon" />
            </div>
            <div className={style.fees_category_text}>
              {/* <h6>{t("fees_category")}</h6> */}
              <h6>{t("fees_master")}</h6>
              <p>
                {t("fees_total")}{" "}
                {fees_category_count + fee_master_array_count ?? 0}
              </p>
            </div>
          </div>
        </InstituteFinanceTabChangeLink>
      ) : (
        <FinanceTabChangeLink
          carryParentState={carryParentState}
          activeTab="fee&n=category"
          accessRole={accessRole}
          callApi={callApi}
        >
          <div className={style.fees_category}>
            <div className={style.fees_category_icon}>
              <img src="/images/fees-category-icon.svg" alt="categor icon" />
            </div>
            <div className={style.fees_category_text}>
              {/* <h6>{t("fees_category")}</h6> */}
              <h6>{t("fees_master")}</h6>
              <p>
                {t("fees_total")}{" "}
                {fees_category_count + fee_master_array_count ?? 0}
              </p>
            </div>
          </div>
        </FinanceTabChangeLink>
      )}

      <DepartmentList
        instituteId={instituteId}
        carryParentState={carryParentState}
        accessRole={accessRole}
        callApi={callApi}
        viewAs={viewAs}
      />
    </>
  );
};

export default CategoryCountWithDepartmentList;

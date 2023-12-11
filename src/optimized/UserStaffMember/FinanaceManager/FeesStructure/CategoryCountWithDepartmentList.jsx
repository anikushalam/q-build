import React from "react";
import { useTranslation } from "react-i18next";
import DepartmentList from "./DepartmentList";
import style from "./FeesStructure.module.css";
import FinanceTabLink from "../FinanceTabLink";
import { useLocation } from "react-router-dom";
import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";

const CategoryCountWithDepartmentList = ({
  instituteId,
  categoryCount,
  masterCount,
  fid,
}) => {
  const { t } = useTranslation();
  const getQuery = useLocation();

  return (
    <>
      <FinanceTabLink
        parentState={getQuery.state}
        activeUrl="type=fees&n=category"
        // accessRole={accessRole}
        // callApi={callApi}
      >
        <div className={style.fees_category}>
          <div className={style.fees_category_icon}>
            <img
              src={`${assestsUserFinanceUrl}/category.svg`}
              alt="categor icon"
            />
          </div>
          <div className={style.fees_category_text}>
            {/* <h6>{t("fees_category")}</h6> */}
            <h6>{t("fees_master")}</h6>
            <p>
              {t("fees_total")} {" : "} {categoryCount + masterCount}
            </p>
          </div>
        </div>
      </FinanceTabLink>
      <DepartmentList
        fid={fid}
        instituteId={instituteId}
        carryParentState={getQuery.state}
        // accessRole={accessRole}
        // callApi={callApi}
        // viewAs={viewAs}
      />
    </>
  );
};

export default CategoryCountWithDepartmentList;

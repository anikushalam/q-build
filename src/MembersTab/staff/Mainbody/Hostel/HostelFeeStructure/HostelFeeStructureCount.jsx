import React from "react";
import { useTranslation } from "react-i18next";
import HostelTabChangeLink from "../HostelTabChangeLink";
import style from "./HostelFeeStructure.module.css";
import InstituteHostelTabChangeLink from "../../../../../InstituteHostel/InstituteHostelTabChange";

const HostelFeeStructureCount = ({
  fees_category_count,
  fee_master_array_count,
  fee_structure_count,
  carryParentState,
  accessRole,
  callApi,
  pageOpenAs,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {pageOpenAs === "INSTITUTE" ? (
        <>
          <InstituteHostelTabChangeLink
            carryParentState={carryParentState}
            activeTab="fee&n=category"
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
          </InstituteHostelTabChangeLink>
          <InstituteHostelTabChangeLink
            carryParentState={carryParentState}
            activeTab="fee&n=structure"
          >
            <div
              className={style.department_card_container}
              style={{
                marginTop: "0.8rem",
              }}
            >
              <img
                src="/images/profileAndCover/department-profile-img.svg"
                alt="department avatar"
                className={style.department_card_image}
              />
              <div>
                <h6 className={style.department_card_name}>
                  {t("fees_structure")}
                </h6>
                <p className={style.department_card_head}>
                  {t("total_fees_structure")} {fee_structure_count ?? 0}
                </p>
              </div>
            </div>
          </InstituteHostelTabChangeLink>
        </>
      ) : (
        <>
          <HostelTabChangeLink
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
          </HostelTabChangeLink>
          <HostelTabChangeLink
            carryParentState={carryParentState}
            activeTab="fee&n=structure"
            accessRole={accessRole}
            callApi={callApi}
          >
            <div
              className={style.department_card_container}
              style={{
                marginTop: "0.8rem",
              }}
            >
              <img
                src="/images/profileAndCover/department-profile-img.svg"
                alt="department avatar"
                className={style.department_card_image}
              />
              <div>
                <h6 className={style.department_card_name}>
                  {t("fees_structure")}
                </h6>
                <p className={style.department_card_head}>
                  {t("total_fees_structure")} {fee_structure_count ?? 0}
                </p>
              </div>
            </div>
          </HostelTabChangeLink>
        </>
      )}
    </>
  );
};

export default HostelFeeStructureCount;

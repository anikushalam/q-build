import React from "react";
import style from "../StaffAdmisionAdmin/MiddleContent/MiddleContent.module.css";
import { useTranslation } from "react-i18next";
import PromoteTabChangeLink from "./PromoteTabChangeLink";
const PromoteMenuTab = ({ carryParentState }) => {
  const { t } = useTranslation();
  return (
    <div className={style.MiddleContent}>
      <div className={style.MiddleContentLeft}>
        <div className={style.item}>
          <PromoteTabChangeLink
            carryParentState={carryParentState}
            activeTab="student"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/finance/finance-student-icon.svg"
                alt="moderator icon"
              />
              <p>{t("all_student")}</p>
            </div>
          </PromoteTabChangeLink>
          <PromoteTabChangeLink
            carryParentState={carryParentState}
            activeTab="departmentlist"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/admission/admission-ongoing-icon.svg"
                alt="Class Catalog"
              />
              <p>{t("departments")}</p>
            </div>
          </PromoteTabChangeLink>
          <PromoteTabChangeLink
            carryParentState={carryParentState}
            activeTab="setting"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/class/class-setting-icon.svg"
                alt="inquery"
              />
              <p>{t("setting")}</p>
            </div>
          </PromoteTabChangeLink>

          <PromoteTabChangeLink
            carryParentState={carryParentState}
            activeTab="export"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/finance/finance-export-icon.svg"
                alt="refund"
              />
              <p>{t("data_exporting")}</p>
            </div>
          </PromoteTabChangeLink>
        </div>
      </div>
    </div>
  );
};

export default PromoteMenuTab;

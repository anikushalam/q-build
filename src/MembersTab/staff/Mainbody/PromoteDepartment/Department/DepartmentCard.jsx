import React from "react";
import style from "../PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import PromoteTabChangeLink from "../PromoteTabChangeLink";
const DepartmentCard = ({ department, carryParentState }) => {
  const { t } = useTranslation();
  return (
    <PromoteTabChangeLink
      carryParentState={{
        ...carryParentState,
        did: department?._id,
      }}
      activeTab={"department"}
    >
      <div className={style.department_card_container} title="View Department">
        <img
          src="/images/profileAndCover/department-profile-img.svg"
          alt="department avatar"
          className={style.department_card_image}
        />
        <div>
          <h6 className={style.department_card_name}>
            {department?.dName || ""}
          </h6>
          <h6 className={style.department_card_head}>
            {t("total_classes")}
            {department?.classCount ?? 0}
          </h6>
        </div>
      </div>
    </PromoteTabChangeLink>
  );
};

export default DepartmentCard;

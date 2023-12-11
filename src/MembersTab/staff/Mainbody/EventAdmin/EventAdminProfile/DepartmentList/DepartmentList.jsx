import React from "react";
import { useSelector } from "react-redux";
import style from "./DepartmentList.module.css";
import { useTranslation } from "react-i18next";
import { useAllDepartment } from "../../../../../../Department/Institute/Components/DepartmentApi/depart-api";

import EventsTabChangeLink from "../EventsTabChnageLink";

function DepartmentList({ carryParentState }) {
  const { t } = useTranslation();
  const author = useSelector((state) => state.eventAdminChange);
  const { allDepartment, allDepartmentRefetch } = useAllDepartment({
    id: author?.insId,
    skip: !author?.insId,
  });

  return (
    <div className={style.department_container}>
      {allDepartment?.institute?.depart?.map((depart) => (
        <EventsTabChangeLink
          carryParentState={carryParentState}
          activeTab="departmet&events"
          deptId={depart?._id}
        >
          <div className={style.department_card_container}>
            <img
              src="/images/profileAndCover/department-profile-img.svg"
              alt="department avatar"
              className={style.department_card_image}
            />
            <div>
              <h6 className={style.department_card_name}>
                {depart?.dName || ""}
              </h6>
              <p className={style.department_card_head}>
                {t("total_masters")} {depart?.classMasterCount ?? 0}
              </p>
            </div>
          </div>
        </EventsTabChangeLink>
      ))}
    </div>
  );
}

export default DepartmentList;

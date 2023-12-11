import React from "react";
import CommonTab from "../Sidebar/CommonTab";
import style from "./staffTab.module.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

const StaffTabContainer = ({ activeIndex }) => {
  const { t } = useTranslation();
  const params = useParams();

  const departmentTab = () => {};

  return (
    <div className={style.staff_tab_tabs}>
      <Link to={`/q/${params.username}/department`}>
        <CommonTab
          tabLevel={t("departments")}
          onTabAction={departmentTab}
          customStyleContainer={{
            marginRight: "2px",
            borderTopLeftRadius: "6px",
          }}
          customStyleLevel={{ borderTopLeftRadius: "6px" }}
          tabValue={0}
          currentValue={activeIndex}
        />
      </Link>
      <Link to={`/q/${params.username}/staff`}>
        <CommonTab
          tabLevel={t("staffs")}
          onTabAction={departmentTab}
          customStyleContainer={{ marginRight: "2px" }}
          tabValue={1}
          currentValue={activeIndex}
        />
      </Link>

      <Link to={`/q/${params.username}/student`}>
        <CommonTab
          tabLevel={t("students")}
          customStyleContainer={{ borderTopRightRadius: "6px", width: "280px" }}
          customStyleLevel={{ borderTopRightRadius: "6px" }}
          onTabAction={departmentTab}
          tabValue={2}
          currentValue={activeIndex}
        />
      </Link>
    </div>
  );
};

export default StaffTabContainer;

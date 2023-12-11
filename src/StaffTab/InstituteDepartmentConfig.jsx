import React from "react";
import Navbar from "../Dashboard/InsDashboard/Components/Navbar/Navbar";
import style from "./staffTab.module.css";
import StaffTabSidebar from "./StaffTabSidebar";
import Departments from "../Department/InsDepartment/Components/DepartmentTab/Departments";
import StaffTabContainer from "./StaffTabContainer";

const InstituteDepartmentConfig = () => {
  return (
    <div className={style.insprofilesetting}>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>
      <div className={style.staff_tab_container}>
        <div>
          <div className={style.staff_tab_sidebar}>
            <StaffTabSidebar activeIndex={0} />
          </div>
        </div>
        <div className={style.staff_tab_main}>
          <StaffTabContainer activeIndex={0} />
          <div className={style.staff_tab_department_wrapper}>
            <Departments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteDepartmentConfig;

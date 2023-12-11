import React from "react";
import Navbar from "../Dashboard/InsDashboard/Components/Navbar/Navbar";
import style from "./staffTab.module.css";
import StaffTabSidebar from "./StaffTabSidebar";
import MainContent from "./components/DividerTab/MainContent/MainContent";
import { useSearchParams } from "react-router-dom";
import StaffDesignation from "./components/DividerTab/MainContent/StaffDesignation/StaffDesignation";
const InstituteStaffConfig = () => {
  const [searchParams] = useSearchParams();
  return (
    <div className={style.insprofilesetting}>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>
      {searchParams.get("a") === "designation" ? (
        <StaffDesignation />
      ) : (
        <div className={style.staff_tab_container}>
          <div>
            <div className={style.staff_tab_sidebar}>
              <StaffTabSidebar activeIndex={1} />
            </div>
          </div>
          <div className={style.staff_tab_main}>
            <MainContent />
          </div>
        </div>
      )}
    </div>
  );
};

export default InstituteStaffConfig;

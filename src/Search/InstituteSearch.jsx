import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./SearchWrapper.module.css";
import { useGetSingleInsDataQuery } from "../services/qvipleAPI";
import Navbar from "../Dashboard/InsDashboard/Components/Navbar/Navbar";
import SearchTab from "./SearchTab";
import SearchCardList from "./SearchCardList";
import { useScrollbar } from "../Scroll/use-scroll";
import InstituteList from "./Institute/InstituteList";
import StaffList from "./Institute/StaffList";
import StudentList from "./Institute/StudentList";
import DepartmentList from "./Institute/DepartmentList";
import InstituteAllSearchList from "./Institute/InstituteAllSearchList";

const InstituteSearch = ({ search }) => {
  const ids = useSelector((state) => state.idChange);

  const { showScrollbar } = useScrollbar();
  const [searchTabActive, setSearchTabActive] = useState("all");

  const { data: dashboardData, refetch } = useGetSingleInsDataQuery(ids?.id, {
    skip: !ids?.id,
  });

  useEffect(() => {
    if (ids.id) refetch();
    showScrollbar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids?.id, refetch]);

  // console.info("thiw ssddhfsbna auidasdvfasz", instituteAllSearch);

  return (
    <>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>
      <SearchTab
        searchTab={[
          "Institutes",
          "Staffs",
          "Students",
          "Departments",
          "Hashtags",
        ]}
        searchTabActive={searchTabActive}
        setSearchTabActive={setSearchTabActive}
        top="66px"
      />
      <SearchCardList>
        {searchTabActive === "all" && (
          <InstituteAllSearchList
            search={search}
            username={dashboardData?.institute?.name}
          />
        )}
        {searchTabActive === "Institutes" && <InstituteList search={search} />}
        {searchTabActive === "Staffs" && (
          <StaffList
            search={search}
            username={dashboardData?.institute?.name}
          />
        )}
        {searchTabActive === "Students" && (
          <StudentList
            search={search}
            username={dashboardData?.institute?.name}
          />
        )}
        {searchTabActive === "Departments" && (
          <DepartmentList
            search={search}
            username={dashboardData?.institute?.name}
          />
        )}

        {searchTabActive === "Hashtags" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5vw",
            }}
          >
            Coming Soon...
          </div>
        )}
      </SearchCardList>
    </>
  );
};

export default InstituteSearch;

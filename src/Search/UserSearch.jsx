import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./SearchWrapper.module.css";
import Navbar from "../Dashboard/UserDashboard/Components/Navbar/Navbar";
import { useGetOneUserProfileQuery } from "../services/qvipleAPI";
import SearchTab from "./SearchTab";
import SearchCardList from "./SearchCardList";
import AllMixinList from "./User/AllMixinList";
import Mentors from "./User/Mentors";
import PeopleSearch from "./User/PeopleSearch";
import InstituteSearchList from "./User/InstituteSearchList";
import { useScrollbar } from "../Scroll/use-scroll";

const UserSearch = ({ search }) => {
  const ids = useSelector((state) => state.idChange);
  // console.info(ids);
  const { showScrollbar } = useScrollbar();
  const [searchTabActive, setSearchTabActive] = useState("all");

  const { data: profileData, refetch } = useGetOneUserProfileQuery(ids?.id, {
    skip: !ids?.id,
  });

  useEffect(() => {
    if (ids.id) refetch();
    showScrollbar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids?.id, refetch]);

  return (
    <>
      <div className={style.navbar}>
        <Navbar
          status="dashboard"
          profileId={profileData ? profileData?.user?._id : ""}
          username={profileData?.user?.username}
          name={profileData?.user?.userLegalName}
          photoId={profileData?.user?.photoId}
          profilePhoto={profileData?.user?.profilePhoto}
          profileData={profileData?.user}
        />
      </div>
      <SearchTab
        searchTab={["Institutes", "People", "Hashtags"]}
        searchTabActive={searchTabActive}
        setSearchTabActive={setSearchTabActive}
        top="77px"
      />
      <SearchCardList>
        {searchTabActive === "all" && (
          <AllMixinList
            search={search}
            // username={dashboardData?.institute?.name}
          />
        )}
        {searchTabActive === "Institutes" && (
          <InstituteSearchList
            search={search}
            // username={dashboardData?.institute?.name}
          />
        )}
        {searchTabActive === "Mentors" && (
          <Mentors
            search={search}
            // username={dashboardData?.institute?.name}
          />
        )}
        {searchTabActive === "People" && (
          <PeopleSearch
            search={search}
            // username={dashboardData?.institute?.name}
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

export default UserSearch;

import React from "react";
import style from "./InsSportsAndArts.module.css";
import { useSelector } from "react-redux";
import { useGetSingleInsDataQuery } from "../../services/qvipleAPI";
import { useFetchSportsArts } from "../../hooks/sports/sports-api";
import Main from "./Mainbody/Main";
import Navbar from "../../Dashboard/InsDashboard/Components/Navbar/Navbar";

function InsSportsAndArts() {
  const author = useSelector((state) => state.authChange);
  const { data: dashboardData } = useGetSingleInsDataQuery(author?.id);

  const { fetchSportsArts, fetchSportsArtsRefetch } = useFetchSportsArts({
    sportId: dashboardData?.institute?.sportDepart[0],
    skip: !dashboardData?.institute?.sportDepart[0],
  });

  return (
    <div className={style.bgContainer}>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>
      <div className={style.editContainer}>
        <Main
          fetchSportsArtsRefetch={fetchSportsArtsRefetch}
          sportsData={fetchSportsArts?.sport}
          insName={dashboardData?.institute?.name}
          insCover={dashboardData?.institute?.insProfileCoverPhoto}
          insNamee={dashboardData?.institute?.insName}
        />
      </div>
    </div>
  );
}

export default InsSportsAndArts;

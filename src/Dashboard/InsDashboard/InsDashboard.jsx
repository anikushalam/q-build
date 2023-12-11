import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import style from "./InsDashboard.module.css";
import Mainbody from "./Components/Mainbody/Mainbody";
import { useScrollbar } from "../../Scroll/use-scroll";

function InsDashboard() {
  const { showScrollbar } = useScrollbar();
  React.useEffect(() => {
    showScrollbar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   const identifire = setInterval(() => {
  //     refetch();
  //   }, 20000);

  //   return () => clearInterval(identifire);
  // }, [refetch]);

  // useEffect(() => {
  //   if (dashboardData?.institute) {
  //     dispatch(
  //       idChangeAction.addLoginProfile({
  //         profile: {
  //           username: dashboardData?.institute?.name,
  //           insProfilePhoto: dashboardData?.institute?.insProfilePhoto,
  //           insName: dashboardData?.institute?.insName,
  //         },
  //       })
  //     );
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dashboardData?.institute]);
  return (
    <div className={style.insDashboard}>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>

      <Mainbody />
    </div>
  );
}

export default InsDashboard;

import React, { useEffect } from "react";
import Navbar from "../../Dashboard/InsDashboard/Components/Navbar/Navbar";
import style from "./InsProfile.module.css";
import Main from "./Pages/Main";

function InsProfile() {
  useEffect(() => {
    document.getElementById("scrollViewTop")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }, []);
  return (
    <div className={style.Profile} id="scrollViewTop">
      <div className={style.navbar}>
        <Navbar status="profile" />
      </div>
      <Main />
    </div>
  );
}

export default InsProfile;

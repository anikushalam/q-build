import style from "./Navbar.module.css";
import React from "react";
import Navleft from "./components/Navleft";
import Navright from "./components/Navright";
import Navmid from "./components/Navmid";

function Navbar({ profileData }) {

  return (
    <div className={style.navbar}>
      <Navleft searchUserName={profileData && profileData}/>
      <Navmid midData={profileData && profileData}/>
      <Navright />
    </div>
  );
}

export default Navbar;

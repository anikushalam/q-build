import style from "./Navbar.module.css";
import React from "react";
import Navleft from "./components/Navleft";
import Navright from "./components/Navright";
import Navmid from "./components/Navmid";

function Navbar({
  profileData,
  status,
  profileId,
  username,
  name,
  profilePhoto,
}) {
  return (
    <div className={style.navbar}>
      <Navleft />
      <Navmid
        midData={profileData && profileData}
        status={status && status}
        profileId={profileId && profileId}
        username={username}
        name={name}
        profilePhoto={profilePhoto}
      />
      <Navright />
    </div>
  );
}

export default Navbar;

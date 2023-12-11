import React from "react";
import style from "./Navbar.module.css";
import Navmid from "./Navmid/Navmid";
import Navright from "./Navright/Navright";

function Navbar({ setState, nCount }) {
  return (
    <div className={style.navbar}>
      <div></div>
      <div></div>

      <div className={style.navright}>
        <Navmid />
        <Navright setState={setState} getCount={nCount && nCount}/>
      </div>
    </div>
  );
}

export default Navbar;

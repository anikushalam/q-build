import React, { useState } from "react";
import style from "./MainBody.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Stats from "./Stats/Stats";
function MainBody({ profileData, profileDataRefetch }) {
  const [clickItem, setClickItem] = useState(1);

  const changeItem = (item) => {
    setClickItem(item);
  };
  return (
    <div className={style.mainbody}>
      <div className={style.sidebar}>
        <Sidebar changeItem={changeItem} clickItem={clickItem} />
      </div>
      <div className={style.stats}>
        <Stats
          changeItem={changeItem}
          clickItem={clickItem}
          dashboardData={profileData}
          dashboardDataRefetch={profileDataRefetch}
        />
      </div>
    </div>
  );
}

export default MainBody;

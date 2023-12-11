import React, { useState } from "react";
import style from "./Support.module.css";
import Tab from "./Components/Tab";
import TabDark from "./Components/TabDark";
import Requests from "../InsStatus/Requests/Requests";
// import InsChat from "./Components/Chat/Institute/Mainbody";
import ComingSoon from "../../../StaffTab/StudentTab/MainContent/StudentAProfile/ComingSoon";
// import UserChat from "./Components/Chat/User/Mainbody";

function Support() {
  const [index, setIndex] = useState(1);

  return (
    <div className={style.insStatus}>
      <ComingSoon />
      {/* <div className={style.tabs}>
        <div className={style.tab} onClick={() => setIndex(1)}>
          {index === 1 ? (
            <TabDark
              name="Institute"
              img="/images/admin/ins-tab-icon.svg"
              imgDark="/images/admin/ins-tab-white-icon.svg"
            />
          ) : (
            <Tab
              name="Institute"
              img="/images/admin/ins-tab-icon.svg"
              imgDark="/images/admin/ins-tab-white-icon.svg"
            />
          )}
        </div>

        <div className={style.tab} onClick={() => setIndex(2)}>
          {index === 2 ? (
            <TabDark
              name="User"
              img="/images/admin/user-support-icon.svg"
              imgDark="/images/admin/user-support-white-icon.svg"
            />
          ) : (
            <Tab
              name="User"
              img="/images/admin/user-support-icon.svg"
              imgDark="/images/admin/user-support-white-icon.svg"
            />
          )}
        </div>
      </div> */}

      {/* {index === 1 && (
        <div className={style.requests}>
          <Requests text="Qviple Support" />
          <InsChat />
          <ComingSoon />
        </div>
      )}

      {index === 2 && (
        <div className={style.requests}>
          <Requests text="Qviple Support" />
          <UserChat />

          <ComingSoon />
        </div>
      )} */}
    </div>
  );
}

export default Support;

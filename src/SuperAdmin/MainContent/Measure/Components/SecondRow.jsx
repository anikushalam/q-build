import React from "react";
import style from "./SecondRow.module.css";
import Tab from "./Tab";
import TabDark from "./TabDark";

function SecondRow({ second, count, changeTab }) {
  return (
    <div className={style.secondRow}>
      {changeTab.value === "ACTIVE_USERS_TAB" ? (
        <TabDark number={second && second.userCount} text="Active Users" />
      ) : (
        <Tab number={second && second.userCount} text="Active Users" />
      )}

      {changeTab.value === "ACTIVE_INSTITUTES_TAB" ? (
        <TabDark
          number={second && second.instituteCount}
          text="Active Institutes"
        />
      ) : (
        <Tab
          number={second && second.instituteCount}
          text="Active Institutes"
        />
      )}

      {changeTab.value === "TOTAL_POST_TAB" ? (
        <TabDark number={count && count} text="Total Post" />
      ) : (
        <Tab number={count && count} text="Total Post" />
      )}

      {changeTab.value === "TOTAL_PAYMENT_TAB" ? (
        <TabDark
          number={second && second.paymentCount + second?.featureAmount}
          text="Total Payment
Volume"
        />
      ) : (
        <Tab
          number={second && second.paymentCount + second?.featureAmount}
          text="Total Payment
Volume"
        />
      )}

      {changeTab.value === "TOTAL_PLAYLIST_TAB" ? (
        <TabDark
          number={second && second.playlistCount}
          text="Total Playlist"
        />
      ) : (
        <Tab number={second && second.playlistCount} text="Total Playlist" />
      )}
    </div>
  );
}

export default SecondRow;

import React, { useState } from "react";
// import style from "./Account.module.css";
import DeleteAcnt from "./DeleteAcnt";
import Recovery from "./Recovery";

function Account({ dashboardData, dashboardFetch }) {
  const [switched, setSwitched] = useState(false);
  const switchh = () => {
    setSwitched(true);
  };
  return (
    <>
      {!switched && (
        <Recovery
          switchh={switchh}
          dashboardData={dashboardData}
          dashboardFetch={dashboardFetch}
        />
      )}

      {switched && <DeleteAcnt dashboardData={dashboardData} />}
    </>
  );
}

export default Account;

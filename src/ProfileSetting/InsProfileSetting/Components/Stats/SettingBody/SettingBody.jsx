import React from "react";
import Account from "./Account/Account";
import ComingSoon from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/ComingSoon";
import CustomSuspense from "../../../../../Custom/SuspenseLoading/CustomSuspense";
import InstitutePaymetToggle from "./InstitutePaymetToggle";
// import Support from "./Support/Support";
// import Transaction from "./Transaction/Transaction";
// import SavedPost from "./SavedPost/SavedPost";
// import QCoins from "./QCoins/QCoins";
const Notification = React.lazy(() => import("./Notification/Notification"));
const Privacy = React.lazy(() => import("./Privacy/Privacy"));
function SettingBody({ clickItem }) {
  return (
    <>
      {clickItem === 1 && <Account />}

      <CustomSuspense>{clickItem === 2 && <Notification />}</CustomSuspense>
      <CustomSuspense>
        {clickItem === 3 && <InstitutePaymetToggle />}
      </CustomSuspense>

      {/* {clickItem === 3 && <SavedPost />} */}

      {/* {clickItem === 4 && <QCoins />} */}

      {/* {clickItem === 5 && <Transaction />} */}

      {clickItem === 6 && (
        // <Support
        //   supportQuery={dashboardData && dashboardData?.institute?.supportChat}
        // />

        <ComingSoon />
      )}
      <CustomSuspense>{clickItem === 7 && <Privacy />}</CustomSuspense>
    </>
  );
}

export default SettingBody;

import React from "react";

import Notification from "./Notification/Notification";
// import Support from "./Support/Support";
import Account from "./Account/Account";
import Privacy from "./Privacy/Privacy";
import { useGetOneUserProfileQuery } from "../../../../../services/qvipleAPI";
import ComingSoon from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/ComingSoon";
// import QCoins from "./QCoins/QCoins";
// import Referal from "./Referal/Referal";
import PaymentHistory from "./PaymentHistory/PaymentHistory";
import About from "./About/About";

function SettingBody({ clickItem, dashboardData, dashboardFetch }) {
  const userid = localStorage.getItem("user");
  const { data: profileData } = useGetOneUserProfileQuery(userid);

  return (
    <>
      {clickItem === 1 && (
        <Account
          dashboardData={dashboardData}
          dashboardFetch={dashboardFetch}
        />
      )}

      {clickItem === 2 && (
        <Notification
          answer={profileData?.user?.user_answer_notify}
          comment={profileData?.user?.user_comment_notify}
          follower={profileData?.user?.user_follower_notify}
          institute={profileData?.user?.user_institute_notify}
        />
      )}

      {/* {clickItem === 4 && <QCoins />} */}

      {/* {clickItem === 5 && <Referal />}  */}

      {clickItem === 6 && <PaymentHistory />}

      {clickItem === 7 && (
        // <Support
        //   supportQuery={dashboardData && dashboardData?.institute?.supportChat}
        // />

        <ComingSoon />
      )}

      {clickItem === 8 && (
        <Privacy
          tag={profileData?.user?.tag_privacy}
          address={profileData?.user?.user_address_privacy}
          birth={profileData?.user?.user_birth_privacy}
          circle={profileData?.user?.user_circle_privacy}
        />
      )}

      {clickItem === 9 && <About />}
    </>
  );
}

export default SettingBody;

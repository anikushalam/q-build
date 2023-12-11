import React from "react";
import { useSelector } from "react-redux";
import CustomSuspense from "../Custom/SuspenseLoading/CustomSuspense";
const InsProfileSetting = React.lazy(() =>
  import("./InsProfileSetting/InsProfileSetting")
);
const UserProfileSetting = React.lazy(() =>
  import("./User/UserProfileSetting")
);
function ProfileSetting() {
  const logged = useSelector((state) => state.idChange.loggedinAs);

  return (
    <div>
      <CustomSuspense>
        {logged === "institute" ? (
          <InsProfileSetting />
        ) : (
          <UserProfileSetting />
        )}
      </CustomSuspense>
    </div>
  );
}

export default ProfileSetting;

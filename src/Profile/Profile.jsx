import React from "react";
import CustomSuspense from "../Custom/SuspenseLoading/CustomSuspense";
const InsProfile = React.lazy(() => import("./Institute/InsProfile"));
const UserProfile = React.lazy(() => import("./User/UserProfile"));

function Profile() {
  const loginAs = localStorage.getItem("loggedinAs");

  return (
    <>
      {loginAs === "user" ? (
        <CustomSuspense>
          <UserProfile />
        </CustomSuspense>
      ) : (
        <CustomSuspense>
          <InsProfile />
        </CustomSuspense>
      )}
    </>
  );
}

export default Profile;

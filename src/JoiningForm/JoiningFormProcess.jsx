import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useGetOneUserProfileQuery } from "../services/qvipleAPI";
import style from "./Student/Form/JoinForm.module.css";
import CustomSuspense from "../Custom/SuspenseLoading/CustomSuspense";
// const HomeNavbar = React.lazy(() => import("../Home/components/Navbar/Navbar"));
const InsNavbar = React.lazy(() =>
  import("../Dashboard/InsDashboard/Components/Navbar/Navbar")
);
const Navbar = React.lazy(() =>
  import("../Dashboard/UserDashboard/Components/Navbar/Navbar")
);
const StudentForm = React.lazy(() => import("./Student/StudentForm"));
const StaffForm = React.lazy(() => import("./Staff/StaffForm"));
const JoiningFormProcess = () => {
  const location = useLocation();
  const ids = useSelector((state) => state.idChange.id);
  const { data: profileData } = useGetOneUserProfileQuery(ids, {
    skip:
      location.state?.openAs === "DIRECT" ||
      location.state?.openAs === "INSTITUTE_SIDE"
        ? true
        : false,
  });
  return (
    <div>
      <div className={style.navbar}>
        <CustomSuspense>
          {location.state?.openAs === "INSTITUTE_SIDE" ? (
            <InsNavbar status="home" />
          ) : location.state?.openAs === "DIRECT" ? null : (
            <Navbar
              status="profile"
              profileId={profileData ? profileData?.user?._id : ""}
              username={profileData?.user?.username}
              name={profileData?.user?.userLegalName}
              photoId={profileData?.user?.photoId}
              profilePhoto={profileData?.user?.profilePhoto}
              profileData={profileData?.user}
            />
          )}
        </CustomSuspense>
      </div>
      {location.state?.formAs === "STUDENT" && (
        <CustomSuspense>
          <StudentForm location={location.state} />
        </CustomSuspense>
      )}
      {location.state?.formAs === "STAFF" && (
        <CustomSuspense>
          <StaffForm location={location.state} />
        </CustomSuspense>
      )}
    </div>
  );
};

export default JoiningFormProcess;

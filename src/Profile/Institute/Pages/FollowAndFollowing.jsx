import React from "react";
import Navbar from "../../../Dashboard/InsDashboard/Components/Navbar/Navbar";
import style from "./FollowAndFollowing.module.css";
import { useSelector } from "react-redux";
import { useOneInstituteProfile } from "../../../hooks/dashboard/dashboard-api";
import CustomSuspense from "../../../Custom/SuspenseLoading/CustomSuspense";
const Follower = React.lazy(() => import("./Follower"));
const Following = React.lazy(() => import("./Following"));

const FollowAndFollowing = () => {
  const [active, setActive] = React.useState(true);
  const ids = useSelector((state) => state.idChange);
  const { oneInstituteProfile, oneInstituteProfileRefetch } =
    useOneInstituteProfile({
      data: {
        id: ids?.id,
        type: "ID",
      },
      skip: !ids?.id,
    });
  React.useEffect(() => {
    if (ids?.id) oneInstituteProfileRefetch();
  }, [ids?.id, oneInstituteProfileRefetch]);
  return (
    <div className={style.bgContainer}>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.container}>
        <div className={style.subMain}>
          <p
            className={
              active
                ? `${style.subMainFoll} ${style.subMainFollActive}`
                : style.subMainFoll
            }
            onClick={() => setActive(true)}
          >
            {oneInstituteProfile?.institute?.followersCount
              ? `${oneInstituteProfile?.institute?.followersCount} `
              : "0 "}
            Followers
          </p>
          <p
            className={
              !active
                ? `${style.subMainFoll} ${style.subMainFollActive}`
                : style.subMainFoll
            }
            onClick={() => setActive(false)}
          >
            {oneInstituteProfile?.institute?.followingCount
              ? `${oneInstituteProfile?.institute?.followingCount} `
              : "0 "}
            Following
          </p>
        </div>
        <p className={style.subMainBorder}></p>
        <CustomSuspense>{active ? <Follower /> : <Following />}</CustomSuspense>
      </div>
    </div>
  );
};

export default FollowAndFollowing;

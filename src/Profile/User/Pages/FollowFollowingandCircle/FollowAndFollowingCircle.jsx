import React from "react";
import Navbar from "../../../../Dashboard/UserDashboard/Components/Navbar/Navbar";
import { useGetOneUserProfileQuery } from "../../../../services/qvipleAPI";
import style from "./FollowAndFollowing.module.css";
import Follower from "./Follower";
import Following from "./Following";
import { useSelector } from "react-redux";
import Circle from "./Circle";
import { useParams, useLocation, Link } from "react-router-dom";

const FollowAndFollowing = () => {
  const ids = useSelector((state) => state.idChange);
  const getQuery = useLocation();
  const params = useParams();
  const { data: profileData } = useGetOneUserProfileQuery(ids?.id);

  return (
    <div className={style.bgContainer}>
      <div className={style.navbar}>
        <Navbar
          status="profile"
          profileData={profileData?.user}
          username={profileData?.user?.username}
          name={profileData?.user?.userLegalName}
          photoId={profileData?.user?.photoId}
          profilePhoto={profileData?.user?.profilePhoto}
        />
      </div>
      <div className={style.container}>
        <div className={style.subMain}>
          <Link to={`/q/${params?.username}/connections?a=followers`}>
            <p
              className={
                getQuery.search?.substring(3) === "followers"
                  ? `${style.subMainFoll} ${style.subMainFollActive}`
                  : style.subMainFoll
              }
            >
              Followers
            </p>
          </Link>
          <Link to={`/q/${params?.username}/connections?a=following`}>
            <p
              className={
                getQuery.search?.substring(3) === "following"
                  ? `${style.subMainFoll} ${style.subMainFollActive}`
                  : style.subMainFoll
              }
            >
              Following
            </p>
          </Link>
          <Link to={`/q/${params?.username}/connections?a=circled`}>
            <p
              className={
                getQuery.search?.substring(3) === "circled"
                  ? `${style.subMainFoll} ${style.subMainFollActive}`
                  : style.subMainFoll
              }
            >
              Circles
            </p>
          </Link>
        </div>
        <p className={style.subMainBorder}></p>
        {getQuery.search?.substring(3) === "followers" && <Follower />}
        {getQuery.search?.substring(3) === "following" && <Following />}
        {getQuery.search?.substring(3) === "circled" && <Circle />}
      </div>
    </div>
  );
};

export default FollowAndFollowing;

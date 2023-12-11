import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Navbar from "../Dashboard/UserDashboard/Components/Navbar/Navbar";
import { useOneUserDashboard } from "../hooks/dashboard/dashboard-api";
import {
  useFollowOneHashtag,
  useGetOneHashtagDetail,
} from "../Post/Institute/Components/post-api";
import { imageShowUrl } from "../services/BaseUrl";
import HashtagCount from "./HashtagCount";
import HashtagPost from "./HashtagPost";
import style from "./HashtagProfile.module.css";
const HashtagProfile = () => {
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const getQuery = useLocation();
  const [followOneHashtag] = useFollowOneHashtag();
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    document.getElementById("scrollViewHashtag")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, []);
  const { oneUserDashboard, oneUserDashboardRefetch } = useOneUserDashboard({
    id: ids?.id,
    skip: !ids.id,
  });

  const { getOneHashtagDetail, getOneHashtagDetailRefetch } =
    useGetOneHashtagDetail({
      data: {
        hid: getQuery.state?.hid,
      },
      skip: !getQuery.state?.hid,
    });
  useEffect(() => {
    if (ids.id) oneUserDashboardRefetch();
  }, [ids.id, oneUserDashboardRefetch]);
  useEffect(() => {
    if (getQuery.state?.hid) getOneHashtagDetailRefetch();
  }, [getQuery.state?.hid, getOneHashtagDetailRefetch]);

  const onFollowHashtag = () => {
    if (getQuery.state?.hid) {
      setDisabled(true);
      followOneHashtag({
        hid: getQuery.state?.hid,
      })
        .then(() => {
          oneUserDashboardRefetch();
          getOneHashtagDetailRefetch();
          setDisabled(false);
        })
        .catch({});
    }
  };
  // console.info("getQuery", getQuery);
  return (
    <div className={style.Profile}>
      <div className={style.navbar}>
        <Navbar
          status="dashboard"
          profileData={oneUserDashboard?.user}
          username={oneUserDashboard?.user?.username}
          name={oneUserDashboard?.user?.userLegalName}
          photoId={oneUserDashboard?.user?.photoId}
          profilePhoto={oneUserDashboard?.user?.profilePhoto}
        />
      </div>
      <div className={style.mainbody}>
        <div className={style.hashtag_left} id="scrollViewHashtag">
          <img
            src={
              getOneHashtagDetail?.hash?.hashtag_profile_photo
                ? `${imageShowUrl}/${getOneHashtagDetail?.hash?.hashtag_profile_photo}`
                : "/images/hashtag-bg-icon.svg"
            }
            alt="hashtag icon"
          />
          <h6>{getOneHashtagDetail?.hash?.hashtag_name ?? ""}</h6>
          <button onClick={onFollowHashtag} disabled={disabled}>
            {t(
              oneUserDashboard?.user?.follow_hashtag?.includes(
                getOneHashtagDetail?.hash?._id
              )
                ? "following"
                : "follow"
            )}
          </button>
        </div>
        <HashtagPost hid={getQuery.state?.hid} />
        <HashtagCount hash={getOneHashtagDetail?.hash} />
      </div>
    </div>
  );
};

export default HashtagProfile;

import React, { memo } from "react";
import style from "../Feed.module.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { imageShowUrl } from "@/Services/UrlConfig/BaseUrl";
import { assestsFeedUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import { useSelector } from "react-redux";

const UserFeedProfile = ({ coverPhoto, oneLineAbout, followerCount, name }) => {
  const { t } = useTranslation();
  const params = useParams();
  const currentLogin = useSelector((state) => state.baseChange.currentLogin);
  return (
    <div className={style.f_left_profile_container}>
      {coverPhoto ? (
        <div className={style.f_left_cover}>
          <img src={`${imageShowUrl}/${coverPhoto}`} alt="user avatar" />
        </div>
      ) : (
        <div className={style.f_left_wave_cover}>
          <img
            className={style.f_left_wave_cover_l}
            src={`${assestsFeedUrl}/feed-wave-1.svg`}
            alt="first wave"
          />
          <img
            className={style.f_left_wave_cover_r}
            src={`${assestsFeedUrl}/feed-wave.svg`}
            alt="second wave"
          />
        </div>
      )}

      {currentLogin?.profilePhoto ? (
        <img
          alt="user avatar"
          src={`${imageShowUrl}/${currentLogin?.profilePhoto}`}
          className={style.f_left_photo}
        />
      ) : (
        <img
          className={style.f_left_photo}
          alt="user avatar"
          src={`${assestsFeedUrl}/feed-user-avatar.svg`}
        />
      )}

      <div className={style.f_left_content}>
        <Link to={`/q/${params?.username}/profile`}>
          <h6 className={style.f_left_content_name}>{currentLogin?.name}</h6>
        </Link>
        <Link to={`/q/${params?.username}/profile`}>
          <p className={style.f_left_content_username}>@{params?.username}</p>
        </Link>

        {oneLineAbout ? (
          <p className={style.f_left_content_follower}>
            {oneLineAbout?.length > 20
              ? `${oneLineAbout?.match(/.{1,20}/g)[0]}`
              : oneLineAbout?.length <= 20
              ? oneLineAbout
              : ""}
          </p>
        ) : followerCount < 2 ? (
          <p className={style.f_left_content_follower}>
            {followerCount ?? 0} {t("follower")}
          </p>
        ) : (
          <p className={style.f_left_content_follower}>
            {followerCount ?? 0} {t("followers")}
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(UserFeedProfile);

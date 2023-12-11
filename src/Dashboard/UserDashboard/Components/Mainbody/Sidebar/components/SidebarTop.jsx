import React from "react";
import style from "./SidebarTop.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";

function SidebarTop({ data }) {
  const { t } = useTranslation();

  return (
    <div className={style.sidebartopp}>
      <div className={style.sidebartoppHead}>
        {data?.coverId !== "2" ? (
          <div className={style.defaultcover}>
            <img src={`${imageShowUrl}/${data?.profileCoverPhoto}`} />
          </div>
        ) : (
          <div className={style.defaultcoverr}>
            <img
              className={style.defaultcoverwaveleft}
              src="/images/profile/cover-wave-2.svg"
              alt=""
            />
            <img
              className={style.defaultcoverwaveright}
              src="/images/profile/cover-wave.svg"
              alt=""
            />
          </div>
        )}
        {data?.photoId !== "1" ? (
          <div className={`${style.imgcontainer} ${style.imgposition}`}>
            <img
              alt="not found"
              src={`${imageShowUrl}/${data?.profilePhoto}`}
            />
          </div>
        ) : (
          <div className={`${style.imgcontainerr} ${style.imgposition}`}>
            <img
              alt="not found"
              src="/images/member_tab/class/default_avatar.svg"
            />
          </div>
        )}

        <div className={style.textContainer}>
          <Link to={`/q/${data?.username}/profile`}>
            <h6>{data?.userLegalName}</h6>
          </Link>
          <p className={style.username}>@{data?.username}</p>

          {data?.one_line_about ? (
            <p className={style.followers}>
              {data?.one_line_about?.length > 20
                ? `${data?.one_line_about?.match(/.{1,20}/g)[0]}`
                : data?.one_line_about?.length <= 20
                ? data?.one_line_about
                : ""}
            </p>
          ) : data?.followerCount < 2 ? (
            <p className={style.followers}>
              {data?.followerCount} {t("follower_")}
            </p>
          ) : (
            <p className={style.followers}>
              {data?.followerCount} {t("followers_")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SidebarTop;

import React from "react";
import style from "./ProfileSidebarBottom.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Item({
  label,
  content,
  number,
  first,
  last,
  userData,
  check,
  activeTab,
}) {
  return (
    <Link to={`/q/${userData?.username}/connections?a=${activeTab}`}>
      <div
        className={
          first
            ? `${style.item2} ${style.itemfirst}`
            : last
            ? `${style.item2} ${style.itemlast}`
            : style.item2
        }
      >
        <div className={style.left}>
          <h6>{content}</h6>
          <p className={check ? style.labelblue : ""}>{label}</p>
        </div>
        <div className={style.right}>{number}</div>
      </div>
    </Link>
  );
}

function ProfileSidebarBottom({ userData, status }) {
  const { t } = useTranslation();

  // console.info(userData);
  return (
    <div className={style.sidebarbottom}>
      {status !== "profile" && (
        <div
          className={
            status !== "profile"
              ? `${style.item2} ${style.itemfirst}`
              : `${style.item2} ${style.item2border} ${style.itemfirst}`
          }
        >
          <div className={style.left}>
            <h6>{t("know_s")}</h6>
            <p>{t("helpful_ans")}</p>
          </div>
          <div className={style.right}>{userData?.answerQuestionCount}</div>
        </div>
      )}

      {status === "profile" && (
        <Item
          number={userData?.postCount}
          content={t("posts")}
          label={t("private_public")}
          userData={userData}
        />
      )}

      {status === "profile" && (
        <Item
          number={userData?.followerCount}
          content={t("followers")}
          label={t("grow_network")}
          userData={userData}
          check={true}
          activeTab="followers"
        />
      )}

      {status === "profile" ? (
        ""
      ) : (
        <Item
          number={userData?.followingUICount}
          content={t("following")}
          label={t("people_you_follow")}
          userData={userData}
          activeTab="following"
        />
      )}
      <Item
        number={userData?.circleCount}
        content={t("circle")}
        label={t("close_net")}
        last={true}
        userData={userData}
        activeTab="circled"
      />
    </div>
  );
}

export default ProfileSidebarBottom;

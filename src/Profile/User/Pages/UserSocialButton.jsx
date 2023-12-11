import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useOneUserDashboard } from "../../../hooks/dashboard/dashboard-api";
import {
  useUserCircle,
  useUserFollow,
  useUserUncircle,
  useUserUnfollow,
} from "../../../Post/Institute/Components/search-api";
import style from "../../Institute/Pages/InstituteProfileInfoTop.module.css";
const UserSocialButton = ({ userId }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const ids = useSelector((state) => state.idChange);
  const [userFollow] = useUserFollow();
  const [userUnfollow] = useUserUnfollow();
  const [userCircle] = useUserCircle();
  const [userUncircle] = useUserUncircle();

  const { oneUserDashboard, oneUserDashboardRefetch } = useOneUserDashboard({
    id: ids?.id,
    skip: !ids?.id,
  });

  useEffect(() => {
    if (ids?.id) {
      oneUserDashboardRefetch();
    }
  }, [ids?.id, oneUserDashboardRefetch]);
  const followHandler = () => {
    setDisabled(true);
    userFollow({
      userFollowId: userId,
    })
      .then(() => {
        oneUserDashboardRefetch();
        setDisabled(false);
      })
      .catch({});
  };

  const unfollowHandler = () => {
    setDisabled(true);
    userUnfollow({
      userFollowId: userId,
    })
      .then(() => {
        oneUserDashboardRefetch();
        setDisabled(false);
      })
      .catch({});
  };

  const onFollowBack = () => {
    setDisabled(true);
    userCircle({
      followId: userId,
    })
      .then(() => {
        oneUserDashboardRefetch();
        setDisabled(false);
      })
      .catch({});
  };

  const onUncirlce = () => {
    setDisabled(true);
    userUncircle({
      followId: userId,
    })
      .then(() => {
        oneUserDashboardRefetch();
        setDisabled(false);
      })
      .catch({});
  };

  // console.info("this is blodkd", oneUserDashboard);
  return (
    <>
      {oneUserDashboard?.user?.userFollowing?.includes(userId) ? (
        <div className={style.profileedit} title="Unfollow User">
          <button
            onClick={unfollowHandler}
            disabled={disabled}
            style={{
              fontSize: "0.9rem",
            }}
          >
            {t("unfollow")}
          </button>
        </div>
      ) : oneUserDashboard?.user?.userFollowers?.includes(userId) ? (
        <div className={style.profileedit} title="Follow Back User">
          <button
            onClick={onFollowBack}
            disabled={disabled}
            style={{
              fontSize: "0.9rem",
            }}
          >
            {t("follow_back")}
          </button>
        </div>
      ) : oneUserDashboard?.user?.userCircle?.includes(userId) ? (
        <div className={style.profileedit} title="Uncirlced User">
          <button
            onClick={onUncirlce}
            disabled={disabled}
            style={{
              fontSize: "0.9rem",
            }}
          >
            {t("uncircled")}
          </button>
        </div>
      ) : (
        <div className={style.profileedit} title="Follow User">
          <button
            onClick={followHandler}
            disabled={disabled}
            style={{
              fontSize: "0.9rem",
            }}
          >
            {t("follow")}
          </button>
        </div>
      )}
    </>
  );
};

export default UserSocialButton;

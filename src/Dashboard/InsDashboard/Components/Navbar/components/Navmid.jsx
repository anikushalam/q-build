import React, { Suspense, useEffect, useState } from "react";
import style from "./Navmid.module.css";
import { Link, useLocation } from "react-router-dom";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import { useDispatch, useSelector } from "react-redux";
import { idChangeAction } from "../../../../../redux/store/department-slice";
import { useOneInstituteDashboard } from "../../../../../hooks/dashboard/dashboard-api";
import { useTranslation } from "react-i18next";
// import SwitchAccount from "../../../Modals/SwitchAccount";
const Logout = React.lazy(() => import("../../../Modals/Logout"));
const Invite = React.lazy(() => import("../../../Modals/Invite"));

function Navmid({ status }) {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [profileClicked, setProfileClicked] = useState(false);
  const [invite, setInvite] = useState(false);
  const [logout, setLogout] = useState(false);
  const author = useSelector((state) => state.authChange);
  const profile = useSelector((state) => state.idChange.loginProfile);
  const dispatch = useDispatch();
  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: author?.id,
      skip: !author?.id,
    });
  useEffect(() => {
    if (author?.id) oneInstituteDashboardRefetch();
  }, [author?.id, oneInstituteDashboardRefetch]);
  const changeLogout = () => {
    setLogout(false);
  };

  const handleClickOutside = (e) => {
    if (!e.target.id) {
      setProfileClicked(false);
    } else if (profileClicked && e.target.id !== "tooltipid") {
      setProfileClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
    // refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (oneInstituteDashboard?.institute) {
      dispatch(
        idChangeAction.addLoginProfile({
          profile: {
            username: oneInstituteDashboard?.institute?.name,
            insProfilePhoto: oneInstituteDashboard?.institute?.insProfilePhoto,
            insName: oneInstituteDashboard?.institute?.insName,
          },
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oneInstituteDashboard?.institute]);

  const onDispatchActions = () => {
    dispatch(
      idChangeAction.searchId({
        id: "",
        type: "ID",
        searchAs: "",
      })
    );
    dispatch(
      idChangeAction.openQuestionWithAnswer({
        repost: "post",
        post: "",
        type: "",
        otherOption: {},
        search: "",
      })
    );
  };
  return (
    <div className={style.navmid}>
      <Link to={`/q/${profile?.username}/feed`} onClick={onDispatchActions}>
        <div className={style.item}>
          <img
            src={
              status === "home"
                ? "/images/home-dash-icon.svg"
                : "/images/home-nav-icon.svg"
            }
            alt="home icon for navbar"
          />
          <p>{t("home")}</p>
        </div>
      </Link>
      {getQuery.state?.loginRole === "_usr_rs" ||
      author?.loginRole === "_usr_rs" ? (
        <div className={style.item}>
          <img
            src={
              status === "notification"
                ? "/images/noti-nav-icon.svg"
                : "/images/noti-dash-icon.svg"
            }
            alt="notification icon for navbar"
          />
          <p> {t("notifications")}</p>
        </div>
      ) : (
        <Link
          to={`/q/${profile?.username}/notifications`}
          onClick={onDispatchActions}
        >
          <div className={style.item}>
            <img
              src={
                status === "notification"
                  ? "/images/noti-nav-icon.svg"
                  : "/images/noti-dash-icon.svg"
              }
              alt="notification icon for navbar"
            />
            <p> {t("notifications")}</p>
          </div>
        </Link>
      )}
      <div
        className={style.item}
        onClick={() => setProfileClicked(!profileClicked)}
      >
        <img
          src={
            status === "profile"
              ? "/images/profile-nav-icon.svg"
              : "/images/profile-dash-icon.svg"
          }
          alt="profile icon for navbar"
        />
        <p> {t("profile")}</p>
      </div>
      {profileClicked && (
        <div id="tooltipid" className={style.profileToolTip}>
          <div
            id="tooltipid"
            className={
              profileClicked
                ? style.triangle
                : `${style.triangle} ${style.triangleDisplay}`
            }
          ></div>
          <Link
            to={`/q/${profile?.username}/profile`}
            onClick={onDispatchActions}
          >
            <div id="tooltipid" className={style.tooltipHeader}>
              <div id="tooltipid" className={style.imgcontainer}>
                <img
                  id="tooltipid"
                  alt="not found"
                  src={
                    oneInstituteDashboard?.institute?.photoId !== "1"
                      ? `${imageShowUrl}/${oneInstituteDashboard?.institute?.insProfilePhoto}`
                      : "/images/ins_default_profile.svg"
                  }
                />
              </div>
              <h5 id="tooltipid">
                {profile?.username ? profile?.username : "User name"}
              </h5>
              <p id="tooltipid" className={style.insName}>
                {profile?.name}
              </p>
            </div>
          </Link>
          <hr />
          <div id="tooltipid" className={style.profilelist}>
            <div id="tooltipid">
              {getQuery.state?.loginRole === "_usr_rs" ||
              author?.loginRole === "_usr_rs" ? (
                "Settings"
              ) : (
                <Link to={`/q/${profile?.username}/settings`}>Settings</Link>
              )}
            </div>
            <div id="tooltipid" onClick={() => setInvite(true)}>
              {t("invite_friend")}
            </div>
            <div id="tooltipid" onClick={() => setLogout(true)}>
              {t("log_out")}
            </div>
          </div>
        </div>
      )}
      <Suspense>
        {invite && <Invite invite={invite} hideModal={(w) => setInvite(w)} />}
        {logout && <Logout changeLogout={changeLogout} logout={logout} />}
      </Suspense>
    </div>
  );
}

export default Navmid;

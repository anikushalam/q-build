import React, { useState, Suspense } from "react";
import style from "./Navmid.module.css";
import { useTranslation } from "react-i18next";
// import Invite from "../../../Modals/Invite";
// import Logout from "../../../../InsDashboard/Modals/Logout";
// import SwitchAccount from "../../../Modals/SwitchAccount";
import { Link } from "react-router-dom";
import QLoader from "../../../../../Loader/QLoader";

import { useDispatch } from "react-redux";
import { idChangeAction } from "../../../../../redux/store/department-slice";
// import { postChangeAction } from "../../../../../redux/store/post-slice";
const Logout = React.lazy(() =>
  import("../../../../InsDashboard/Modals/Logout")
);
const ProfileDialog = React.lazy(() => import("./ProfileDialog/ProfileDialog"));

function Navmid({ status, username, photoId, profilePhoto, name }) {
  const [profileClicked, setProfileClicked] = useState(false);
  const { t } = useTranslation();
  // const [invite, setInvite] = useState(false);
  const [logout, setLogout] = useState(false);
  // const [swichAccount, setSwichAccount] = useState(false);

  const dispatch = useDispatch();
  const changeLogout = () => {
    setLogout(false);
  };

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
      <Link to={`/q/${username}/feed`} onClick={onDispatchActions}>
        <div className={style.item}>
          {status === "dashboard" ? (
            <img alt="not found" src="/images/home-dash-icon.svg" />
          ) : (
            <img alt="not found" src="/images/home-nav-icon.svg" />
          )}
          <p>{t("home")}</p>
        </div>
      </Link>

      <Link to={`/q/${username}/memberstab`} onClick={onDispatchActions}>
        <div className={style.item}>
          {status === "members" ? (
            <img alt="not found" src="/images/members-dark-icon.svg" />
          ) : (
            <img alt="not found" src="/images/members-icon.svg" />
          )}
          <p>{t("members")}</p>
        </div>
      </Link>

      <Link to={`/q/${username}/notifications`} onClick={onDispatchActions}>
        <div className={style.item}>
          {status === "notification" ? (
            <img alt="not found" src="/images/noti-nav-icon.svg" />
          ) : (
            <img alt="not found" src="/images/noti-dash-icon.svg" />
          )}

          <p>{t("notifications")}</p>
        </div>
      </Link>
      <div
        className={style.item}
        onClick={() => setProfileClicked(!profileClicked)}
      >
        {status === "profile" ? (
          <img alt="not found" src="/images/profile-nav-icon.svg" />
        ) : (
          <img alt="not found" src="/images/profile-dash-icon.svg" />
        )}

        <p>{t("profile")}</p>
      </div>

      {profileClicked && (
        <Suspense fallback={<QLoader />}>
          <ProfileDialog
            profileClicked={profileClicked}
            onClose={() => setProfileClicked(false)}
            username={username}
            onDispatchActions={onDispatchActions}
            photoId={photoId}
            profilePhoto={profilePhoto}
            name={name}
            setLogout={setLogout}
          />
        </Suspense>
      )}

      {/* {invite && <Invite invite={invite} hideModal={(w) => setInvite(w)} />} */}

      {logout && (
        <Suspense fallback={<QLoader />}>
          <Logout changeLogout={changeLogout} logout={logout} />
        </Suspense>
      )}
      {/* {swichAccount && (
        <SwitchAccount
          hideModal={(w) => setSwichAccount(w)}
          swichAccount={swichAccount}
        />
      )} */}
    </div>
  );
}

export default Navmid;

import React from "react";
import style from "./ProfileDialog.module.css";
import { Link } from "react-router-dom";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import { useTranslation } from "react-i18next";
// const BUTTON_WRAPPER_STYLES = {
//     position: "relative",
//     zIndex: 1,
//   };

const MODAL_STYLES = {
  position: "absolute",
  left: "14.5vw",
  top: "5vw",
  zIndex: 10,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};

function ProfileDialog({
  profileClicked,
  onClose,
  username,
  onDispatchActions,
  photoId,
  profilePhoto,
  name,
  setLogout,
}) {
  const { t } = useTranslation();
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div id="tooltipid" className={style.profileToolTip} style={MODAL_STYLES}>
        <div
          id="tooltipid"
          className={
            profileClicked
              ? style.triangle
              : `${style.triangle} ${style.triangleDisplay}`
          }
        ></div>

        <Link
          to={`/q/${username}/profile`}
          // state={{ dashboard: "ram setu/" }}
          onClick={onDispatchActions}
        >
          <div id="tooltipid" className={style.tooltipHeader}>
            <div id="tooltipid" className={style.imgcontainer}>
              <img
                id="tooltipid"
                alt=""
                src={
                  photoId !== "1"
                    ? `${imageShowUrl}/${profilePhoto}`
                    : "/images/ins_default_profile.svg"
                }
              />
            </div>
            <h5 id="tooltipid">{username}</h5>
            <p id="tooltipid" className={style.insName}>
              {name}
            </p>
          </div>
        </Link>
        {/* <img
    id="tooltipid"
    alt="not found"
    className={style.tooltipDots}
    src="/images/menu-dots-icon.svg"
    onClick={() => setSwichAccount(true)}
  /> */}

        <hr />

        <div id="tooltipid" className={style.profilelist}>
          <div id="tooltipid">
            <Link to={`/q/${username}/settings`}>{t("settings")}</Link>
          </div>

          {/* <div id="tooltipid">Help and Support</div>
    <div id="tooltipid">Payment</div> */}
          <div
            id="tooltipid"
            //  onClick={() => setInvite(true)}
          >
            {t("invite_friend")}
          </div>
          <div
            id="tooltipid"
            onClick={() => {
              setLogout(true);
              // localStorage.setItem("searchStatus", "");
              // localStorage.setItem("_searchId", "");
            }}
          >
            {t("log_out")}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileDialog;

import React, { useEffect, useState } from "react";
import style from "./Navmid.module.css";
import Invite from "../../../../Dashboard/InsDashboard/Modals/Invite";
import Logout from "../../../../Dashboard/InsDashboard/Modals/Logout";
import SwitchAccount from "../../../../Dashboard/InsDashboard/Modals/SwitchAccount";
import { Link } from "react-router-dom";
import { imageShowUrl } from "../../../../services/BaseUrl";
import { useGetSingleInsDataQuery } from "../../../../services/qvipleAPI";
import { useSelector } from "react-redux";

function Navmid() {
  const [profileClicked, setProfileClicked] = useState(false);
  const [invite, setInvite] = useState(false);
  const [logout, setLogout] = useState(false);
  const [swichAccount, setSwichAccount] = useState(false);
  const author = useSelector((state) => state.authChange);
  const { data: midData } = useGetSingleInsDataQuery(author?.id);
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
  }, []);

  return (
    <div className={style.navmid}>
      <Link to={`/q/${midData?.institute?.name}/feed`}>
        <div className={style.item}>
          <img alt="not found" src="/images/home-nav-icon.svg" />
          <p>Home</p>
        </div>
      </Link>
      <Link to={`/q/${midData?.institute?.name}/notifications`}>
        <div
          className={style.item}
          // onClick={() => navigate("./notifications", { replace: true })}
        >
          <img alt="not found" src="/images/noti-dash-icon.svg" />
          <p>Notifications</p>
        </div>
      </Link>
      <div className={style.item}>
        <img
          className={style.msgIcon}
          // style={{ marginTop: "10px", marginBottom: "5px" }}
          alt="not found"
          src="/images/msg-dark-icon.svg"
        />
        <p>Messages</p>
      </div>
      <div
        className={style.item}
        onClick={() => setProfileClicked(!profileClicked)}
      >
        <img alt="not found" src="/images/profile-dash-icon.svg" />
        <p>Profile</p>
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

          <Link to={`/q/${midData?.institute?.name}/profile`}>
            <div id="tooltipid" className={style.tooltipHeader}>
              <div id="tooltipid" className={style.imgcontainer}>
                <img
                  id="tooltipid"
                  alt="not found"
                  src={
                    midData?.institute?.photoId !== "1"
                      ? `${imageShowUrl}/${midData?.institute?.insProfilePhoto}`
                      : "/images/ins_default_profile.svg"
                  }
                />
              </div>
              <h5 id="tooltipid">
                {midData?.institute && midData?.institute.name
                  ? midData?.institute.name
                  : "User name"}
              </h5>
              <p id="tooltipid" className={style.insName}>
                {midData?.institute?.insName}
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
              <Link to={`/q/${midData?.institute?.name}/settings`}>
                Settings
              </Link>
            </div>

            <div id="tooltipid">Help and Support</div>
            <div id="tooltipid">Payment</div>
            <div id="tooltipid" onClick={() => setInvite(true)}>
              Invite Friend
            </div>
            <div id="tooltipid" onClick={() => setLogout(true)}>
              Logout
            </div>
          </div>
        </div>
      )}

      {invite && <Invite invite={invite} hideModal={(w) => setInvite(w)} />}
      {logout && <Logout changeLogout={changeLogout} logout={logout} />}
      {swichAccount && (
        <SwitchAccount
          hideModal={(w) => setSwichAccount(w)}
          swichAccount={swichAccount}
        />
      )}
    </div>
  );
}

export default Navmid;

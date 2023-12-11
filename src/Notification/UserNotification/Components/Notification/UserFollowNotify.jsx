import React from "react";
import style from "./Item.module.css";
import { imageShowUrl } from "../../../../services/BaseUrl";
import moment from "moment";
import { idChangeAction } from "../../../../redux/store/department-slice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const UserFollowNotify = ({ notification }) => {
  const dispatch = useDispatch();
  //   console.info("this is UserFollowNotify", notification);

  const onRedirectToSearch = () => {
    dispatch(
      idChangeAction.searchId({
        id: notification?.notifyByPhoto?._id,
        type: "ID",
        searchAs: "user",
      })
    );
  };
  return (
    <Link
      to={`/q/${notification?.notifyByPhoto?.username}/profile`}
      onClick={onRedirectToSearch}
      style={{ width: "100%" }}
    >
      <div className={style.eachItem}>
        <div className={style.eachItemleft}>
          <img
            src={
              notification?.notifyByPhoto?.photoId !== "1"
                ? `${imageShowUrl}/${notification?.notifyByPhoto?.profilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt=""
          />
          <p>{notification?.notifyContent}</p>
        </div>
        <div className={style.text}>
          <p>{moment(notification?.notifyTime).format("LT")}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserFollowNotify;

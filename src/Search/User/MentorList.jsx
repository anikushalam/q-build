import React from "react";
import style from "../SearchStyle.module.css";
import { Link } from "react-router-dom";
import { imageShowUrl } from "../../services/BaseUrl";
import { useDispatch } from "react-redux";
// import {
//   useUserFollow,
//   useUserUnfollow,
//   useUserCircle,
//   useUserUncircle,
// } from "../../Post/Institute/Components/search-api";
import { useScrollbar } from "../../Scroll/use-scroll";
import { idChangeAction } from "../../redux/store/department-slice";

const MentorList = ({ staff }) => {
  const dispatch = useDispatch();
  const { showScrollbar } = useScrollbar();
  // const [userFollow] = useUserFollow();
  // const [userUnfollow] = useUserUnfollow();
  // const [userCircle] = useUserCircle();
  // const [userUncircle] = useUserUncircle();
  const searchProfileHandler = (id) => {
    showScrollbar();
    dispatch(
      idChangeAction.searchId({
        id: id,
        type: "ID",
        searchAs: "user",
      })
    );
  };
  return (
    <div className={style.searchResult}>
      <Link
        to={`/q/${staff?.user?.username}/profile`}
        onClick={() => searchProfileHandler(staff?.user?._id)}
      >
        <div className={style.searchResultLeft}>
          <img
            src={
              staff?.photoId !== "1"
                ? `${imageShowUrl}/${staff?.staffProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt="staff profile avatar"
          />

          <div>
            <h6>{`${staff?.staffFirstName} ${
              staff?.staffMiddleName ? staff?.staffMiddleName : ""
            } ${staff?.staffLastName}`}</h6>
            <h6>{staff?.staffROLLNO}</h6>
          </div>
        </div>
      </Link>

      {/* {item?.name && ifollowing.includes(item?._id) ? (
        <div onClick={unfollowHandler} className={style.connectBtn}>
          Following
        </div>
      ) : item?.username && uFollowing.includes(item?._id) ? (
        <div onClick={unfollowHandler} className={style.connectBtn}>
          Following
        </div>
      ) : item?.username && followers.includes(item?._id) ? (
        <div onClick={circleHandler} className={style.connectBtn}>
          Follow Back
        </div>
      ) : item?.username && circled.includes(item?._id) ? (
        <div onClick={unCircleHandler} className={style.connectBtn}>
          Circled
        </div>
      ) : (
        <div className={style.connectBtn} onClick={followHandler}>
          Follow
        </div>
      )} */}
    </div>
  );
};

export default MentorList;

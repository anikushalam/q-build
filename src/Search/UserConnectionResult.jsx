import React from "react";
import { useDispatch } from "react-redux";
import {
  useUserFollow,
  useUserUnfollow,
  useUserFollowIns,
  useUserUnfollowIns,
  useUserCircle,
  useUserUncircle,
  useUserFollowList,
  useUserOwnFollowingList,
  useUserCircleList,
} from "../Post/Institute/Components/search-api";
import { idChangeAction } from "../redux/store/department-slice";
import { imageShowUrl } from "../services/BaseUrl";
import style from "./SearchStyle.module.css";
import { Link } from "react-router-dom";
import { useScrollbar } from "../Scroll/use-scroll";

const UserConnectionResult = ({ item, userId, hideModal }) => {
  const itemName = item.username ? item.username : item?.name ? item?.name : "";
  const dispatch = useDispatch();
  const itemId = item?._id;
  const { showScrollbar } = useScrollbar();

  const [userFollow] = useUserFollow();
  const [userUnfollow] = useUserUnfollow();
  const [userFollowIns] = useUserFollowIns();
  const [userUnfollowIns] = useUserUnfollowIns();
  const [userCircle] = useUserCircle();
  const [userUncircle] = useUserUncircle();

  const { userFollowingList, userFollowingListRefetch } =
    useUserOwnFollowingList({
      page: 1,
      id: userId,
      limit: 100,
    });
  const { userFollowList, userFollowListRefetch } = useUserFollowList({
    list: { page: 1, id: userId, limit: 100 },
  });

  const { userCircleList, userCircleListRefetch } = useUserCircleList({
    page: 1,
    id: userId,
    limit: 100,
  });

  let uFollowing = [];
  let ifollowing = [];
  let followers = [];
  let circled = [];

  for (let i = 0; i < userFollowingList?.uFollowing?.length; i++) {
    uFollowing.push(userFollowingList?.uFollowing[i]?._id);
  }

  for (let i = 0; i < userFollowingList?.uInsFollowing?.length; i++) {
    ifollowing.push(userFollowingList?.uInsFollowing[i]?._id);
  }

  for (let i = 0; i < userFollowList?.followers?.length; i++) {
    followers.push(userFollowList?.followers[i]?._id);
  }
  for (let i = 0; i < userCircleList?.circle?.length; i++) {
    circled.push(userCircleList?.circle[i]?._id);
  }

  const followHandler = () => {
    if (item?.name) {
      userFollowIns({
        InsfollowId: item?._id,
      })
        .then((res) => {
          if (res.data.message) {
            userFollowingListRefetch();
          }
        })
        .catch({});
    } else if (item?.username) {
      userFollow({
        userFollowId: item?._id,
      })
        .then((res) => {
          if (res.data.message) {
            userFollowingListRefetch();
          }
        })
        .catch({});
    }
  };

  const unfollowHandler = () => {
    if (item?.name) {
      userUnfollowIns({
        InsfollowId: item?._id,
      })
        .then((res) => {
          if (res.data.message) {
            userFollowingListRefetch();
          }
        })
        .catch({});
    } else if (item?.username) {
      userUnfollow({
        userFollowId: item?._id,
      })
        .then((res) => {
          if (res.data.message) {
            userFollowingListRefetch();
          }
        })
        .catch({});
    }
  };

  const circleHandler = () => {
    userCircle({
      followId: item?._id,
    })
      .then((res) => {
        if (res.data.message) {
          userCircleListRefetch();
          userFollowListRefetch();
        }
      })
      .catch({});
  };

  const unCircleHandler = () => {
    userUncircle({
      followId: item?._id,
    })
      .then((res) => {
        if (res.data.message) {
          userCircleListRefetch();
          userFollowListRefetch();
        }
      })
      .catch({});
  };

  const searchProfileHandler = () => {
    showScrollbar();
    item.username
      ? dispatch(
          idChangeAction.searchId({
            id: itemId,
            type: "ID",
            searchAs: "user",
          })
        )
      : dispatch(
          idChangeAction.searchId({
            id: itemId,
            type: "ID",
            searchAs: "institute",
          })
        );
    hideModal(false);
  };

  return (
    <div className={style.searchResult}>
      <Link to={`/q/${itemName}/profile`} onClick={searchProfileHandler}>
        <div className={style.searchResultLeft}>
          {item?.insName ? (
            <img
              src={
                item?.photoId !== "1"
                  ? `${imageShowUrl}/${item?.insProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt=""
            />
          ) : (
            <img
              src={
                item?.photoId !== "1"
                  ? `${imageShowUrl}/${item?.profilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt=""
            />
          )}

          <div>
            {item?.name ? (
              <h6>{item?.name}</h6>
            ) : item?.username ? (
              <h6>{item?.username}</h6>
            ) : (
              ""
            )}
            {item?.insName ? (
              <p>{item?.insName}</p>
            ) : item?.userLegalName ? (
              <p>{item?.userLegalName}</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </Link>
      {item?.hostelDepart?.[0] && (
        <Link
          to={`/q/${itemName}/hostel/profile`}
          state={{
            hid: item?.hostelDepart?.[0],
          }}
        >
          <img
            src="/images/hostel/hostel-bed-icon.svg"
            alt="bed icon"
            style={{
              marginRight: "-8rem",
              cursor: "pointer",
            }}
            title="Apply for hostel"
          />
        </Link>
      )}

      {item?.name && ifollowing.includes(item?._id) ? (
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
      )}
    </div>
  );
};

export default UserConnectionResult;

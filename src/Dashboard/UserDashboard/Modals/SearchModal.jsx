import React, { useCallback, useEffect, useState } from "react";
import style from "./SearchModal.module.css";
import { makeStyles, Dialog } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
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
  useUserAllSearch,
} from "../../../Post/Institute/Components/search-api";

import { debounce } from "lodash";
import { imageShowUrl } from "../../../services/BaseUrl";
import { SearchSuggestion } from "../../../script/script";
import SearchResults from "./SearchResults";
import { Link } from "react-router-dom";
import { idChangeAction } from "../../../redux/store/department-slice";
// import { useDashAllPost } from "../../../Post/Institute/Components/post-api";
// import { postChangeAction } from "../../../redux/store/post-slice";
const useStyles = makeStyles({
  dialog: {
    position: "absolute",
    left: "14vw",
    top: 0,
  },
});

const ConnectionResult = ({ item, userId, hideModal }) => {
  const itemName = item.username ? item.username : item?.name ? item?.name : "";
  const dispatch = useDispatch();
  const itemId = item?._id;

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
            {item?.insName ? (
              <h6>{item?.insName}</h6>
            ) : item?.userLegalName ? (
              <h6>{item?.userLegalName}</h6>
            ) : (
              ""
            )}

            {item?.name ? (
              <p>{item?.name}</p>
            ) : item?.username ? (
              <p>{item?.username}</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </Link>

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

function SearchModal({ navClick, hideModal, username }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [skip, setSkip] = useState(true);
  const [search, setSearch] = useState("");
  const searchLength = search.length;
  const ids = useSelector((state) => state.idChange);
  const { userAllSearch, userAllSearchRefetch } = useUserAllSearch({
    skip: skip,
    search: { search: search, page: 1, id: ids?.id, limit: 10 },
  });

  const [dyanmicSuggestion, setDyanmicSuggestion] = useState();
  // const [queryValue, setQueryValue] = useState("");
  // const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const SearchQuery = (value) => {
    const dyanmic = SearchSuggestion(value);

    setDyanmicSuggestion(dyanmic);
  };

  const handleSearch = () => {
    setSkip(false);
    userAllSearchRefetch();
  };

  const deb = useCallback(
    debounce((val) => setSearch(val), 1000),
    []
  );

  const searchHandler = (val) => {
    // const deb = debounce(() => setSearch(val), 1000);

    deb(val);
  };
  const handleClose = () => {
    hideModal(false);
  };

  return (
    <Dialog
      classes={{
        paper: classes.dialog,
      }}
      open={navClick}
      onClose={handleClose}
    >
      <div className={style.searchModal}>
        <div className={style.searchheader}>
          <img
            alt="img"
            className={style.leftImg}
            src="/images/left-nav-icon.svg"
          />
          <div className={style.searchbar}>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => searchHandler(e.target.value)}
              onKeyUp={(e) => SearchQuery(e.target.value)}
              className={`form-control ${style.searchinput}`}
            />
            <img
              className={style.searchIcon}
              alt="img"
              src="/images/search-dash-icon.svg"
            />
          </div>
        </div>

        <div className={style.titles}>
          <p>{t("Recent Searches")}</p>
          <p>{t("Clear")}</p>
        </div>

        {/* <SearchResults
          queryContent={dyanmicSuggestion && dyanmicSuggestion}
          // setQueryValue={setQueryValue}
        /> */}

        {/* {instituteAllSearch?.allInstitutes?.map((institute) => (
          <ConnectionItem
            institute={institute}
            key={institute?._id}
            hideModal={hideModal}
          />
        ))} */}

        {userAllSearch?.universalArrayUser
          ?.filter((val) => {
            const nameSubstring = val?.userLegalName
              ? val?.userLegalName
                  ?.substring(0, searchLength)
                  .toLocaleLowerCase()
              : val?.insName
              ? val?.insName?.substring(0, searchLength).toLocaleLowerCase()
              : "";

            const userNameSubstring = val?.username
              ? val?.username?.substring(0, searchLength).toLocaleLowerCase()
              : val?.name
              ? val?.name?.substring(0, searchLength).toLocaleLowerCase()
              : "";

            if (
              userNameSubstring === search.toLocaleLowerCase() ||
              nameSubstring === search.toLocaleLowerCase()
            ) {
              return val;
            } else {
              return "";
            }
          })
          .map((item, index) => (
            <ConnectionResult
              item={item}
              key={index}
              hideModal={hideModal}
              userId={ids?.id}
            />
          ))}

        <div className={style.footer}>
          <p>{t("explore-place")}</p>
          <div className={style.tabs}>
            <div className={style.tabItem}>
              <img src="/images/search/institutes.svg" alt="" />
              {/* <Link
                to="/q/username/department"
                style={{ textDecoration: "none" }}
              > */}
              <p>Institutes</p>
              {/* </Link> */}
            </div>

            <div className={style.tabItem}>
              <img src="/images/search/mentors.svg" alt="" />
              {/* <Link
                to={`/q/${username && username}/staff`}
                style={{ textDecoration: "none" }}
              > */}
              <p>Mentors</p>
              {/* </Link> */}
            </div>

            <div className={style.tabItem}>
              <img src="/images/search/users.svg" alt="" />
              {/* <Link
                to={`/q/${username && username}/staff`}
                style={{ textDecoration: "none" }}
              > */}
              <p>Users</p>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default SearchModal;

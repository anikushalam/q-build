import React, { useEffect, useState } from "react";
import style from "./SearchModal.module.css";
import { makeStyles, Dialog } from "@material-ui/core";

import { useTranslation } from "react-i18next";
import {
  useInstituteAllSearch,
  useInstituteFollow,
  useInstituteFollowList,
  useInstituteOwnFollowingList,
  useInstituteUnfollow,
} from "../../../Post/Institute/Components/search-api";
import { useDispatch, useSelector } from "react-redux";
import { imageShowUrl } from "../../../services/BaseUrl";
// import { SearchSuggestion } from "../../../script/script";
// import SearchResults from "./SearchResults";
import { Link } from "react-router-dom";
import { useDashAllPost } from "../../../Post/Institute/Components/post-api";
import { postChangeAction } from "../../../redux/store/post-slice";
import { idChangeAction } from "../../../redux/store/department-slice";
import { instituteAs } from "../../../constant/constant_value";
const useStyles = makeStyles({
  dialog: {
    position: "absolute",
    left: "14vw",
    top: 0,
  },
});

// function Item() {
//   return (
//     <div className={style.searchItem}>
//       <div className={style.searchItemLeft}>
//         <img src="/images/search-clock-icon.svg" />
//         <p>Parag Hude</p>
//       </div>
//       <img className={style.recentIcon} src="/images/recent-search-icon.svg" />
//     </div>
//   );
// }

const ConnectionItem = ({ institute, hideModal }) => {
  const ids = useSelector((state) => state.idChange);
  const allPosts = useSelector((state) => state.postChange.dashboardPosts);

  const dispatch = useDispatch();
  const [instituteFollow] = useInstituteFollow();
  const [instituteUnfollow] = useInstituteUnfollow();
  const { allDashPost, allDashPostRefetch } = useDashAllPost({
    data: { id: ids?.id, viewAs: instituteAs },
    skip: false,
  });

  const { instituteOwnFollowingList } = useInstituteOwnFollowingList({
    page: 1,
    id: institute?._id,
    limit: 100,
  });
  const { instituteFollowList, instituteFollowListRefetch } =
    useInstituteFollowList({
      list: { page: 1, id: institute?._id, limit: 100 },
    });

  useEffect(() => {
    if (allDashPost?.post) {
      dispatch(
        postChangeAction.followPost({
          post: allDashPost?.post,
          profilePost: "dash",
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDashPost?.post]);

  const unfollowDeleteHandler = (authorId) => {
    const leftPost = [];
    for (let i = 0; i < allPosts?.length; i++) {
      if (allPosts[i].author !== authorId) {
        leftPost.push(allPosts[i]);
      }
    }
    return leftPost;
  };
  const followHandler = () => {
    instituteFollow({
      followId: institute?._id,
    })
      .then((res) => {
        if (res.data.message) {
          instituteFollowListRefetch();
          allDashPostRefetch();
        }
      })
      .catch({});
  };
  const unfollowHandler = () => {
    const posts = unfollowDeleteHandler(institute?._id);
    // if(!posts.length){

    // }
    dispatch(
      postChangeAction.unfollowPost({
        posts: posts,
      })
    );
    instituteUnfollow({
      followId: institute?._id,
    })
      .then((res) => {
        if (res.data.message) {
          instituteFollowListRefetch();
          // allDashPostRefetch();
        }
      })
      .catch({});
  };

  // console.info(instituteOwnFollowingList, instituteFollowList);

  return (
    // <Link to={`/q/search/${institute?.name}`}>

    <div className={style.searchResult}>
      <Link
        to={`/q/${institute?.name}/profile`}
        onClick={() => {
          dispatch(
            idChangeAction.searchId({
              id: institute?._id,
              type: "ID",
            })
          );
          hideModal(false);
        }}
      >
        <div className={style.searchResultLeft}>
          <img
            src={
              institute?.photoId !== "1"
                ? `${imageShowUrl}/${institute?.insProfilePhoto}`
                : "/images/ins_default_profile.svg"
            }
            alt=""
          />
          <div>
            <h6>{institute?.insName}</h6>
            <p>{institute?.name}</p>
          </div>
        </div>
      </Link>
      {/* <div className={style.connectBtn}>Connect</div> */}
      {instituteOwnFollowingList?.following?.some(
        (val) => val._id === ids?.id
      ) ? (
        <div className={style.connectBtn}>Block</div>
      ) : institute?.follower?.includes(ids.id) ||
        instituteFollowList?.iFollowers?.some((val) => val._id === ids.id) ? (
        <div className={style.connectBtn} onClick={unfollowHandler}>
          Unfollow
        </div>
      ) : (
        <div className={style.connectBtn} onClick={followHandler}>
          Follow
        </div>
      )}
    </div>
    // {/* </Link> */}
  );
};

function SearchModal({ navClick, hideModal, username }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [skip, setSkip] = useState(true);
  const [search, setSearch] = useState("");
  const ids = useSelector((state) => state.idChange);
  const { instituteAllSearch, instituteAllSearchRefetch } =
    useInstituteAllSearch({
      skip: skip,
      search: { search: search, page: 1, id: ids?.id, limit: 10 },
    });

  // const [dyanmicSuggestion, setDyanmicSuggestion] = useState();
  // const [queryValue, setQueryValue] = useState("");
  // const [searchResult, setSearchResult] = useState([]);

  // const SearchQuery = (value) => {
  //   const dyanmic = SearchSuggestion(value);

  //   setDyanmicSuggestion(dyanmic);
  // };

  const searchHandler = (e) => {
    setSearch(e.target.value);
    setSkip(false);
    instituteAllSearchRefetch();
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
              value={search}
              onChange={searchHandler}
              // onKeyUp={(e) => SearchQuery(e.target.value)}
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

        {instituteAllSearch?.allInstitutes?.map((institute) => (
          <ConnectionItem
            institute={institute}
            key={institute?._id}
            hideModal={hideModal}
          />
        ))}

        <div className={style.footer}>
          <p>{t("explore-place")}</p>
          <div className={style.tabs}>
            <div className={style.tabItem}>
              <img src="/images/tab1.svg" alt="" />
              <Link
                to="/q/username/department"
                style={{ textDecoration: "none" }}
              >
                <p>{t("Departments")}</p>
              </Link>
            </div>

            <div className={style.tabItem}>
              <img src="/images/tab2.svg" alt="" />
              <Link
                to={`/q/${username && username}/staff`}
                style={{ textDecoration: "none" }}
              >
                <p>{t("staff-place")}</p>
              </Link>
            </div>

            <div className={style.tabItem}>
              <img src="/images/tab3.svg" alt="" />
              <Link
                to={`/q/${username && username}/student`}
                style={{ textDecoration: "none" }}
              >
                <p>{t("students-place")}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default SearchModal;

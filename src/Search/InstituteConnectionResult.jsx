import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useInstituteFollow,
  useInstituteFollowList,
  useInstituteOwnFollowingList,
  useInstituteUnfollow,
} from "../Post/Institute/Components/search-api";
import { instituteAs } from "../constant/constant_value";
import { postChangeAction } from "../redux/store/post-slice";
import { idChangeAction } from "../redux/store/department-slice";
import { imageShowUrl } from "../services/BaseUrl";
import { Link } from "react-router-dom";
import { useDashAllPost } from "../Post/Institute/Components/post-api";
import style from "./SearchStyle.module.css";

const InstituteConnectionResult = ({ institute, hideModal }) => {
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
  );
};

export default InstituteConnectionResult;

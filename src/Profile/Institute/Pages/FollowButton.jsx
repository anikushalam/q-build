import React, { useEffect, useState } from "react";
import {
  useBlockInstituteByInstitute,
  useDashAllPost,
  useUnblockInstituteByInstitute,
} from "../../../Post/Institute/Components/post-api";
import {
  useInstituteFollow,
  useInstituteFollowList,
  useInstituteOwnFollowingList,
  useInstituteUnfollow,
} from "../../../Post/Institute/Components/search-api";
import style from "./InstituteProfileInfoTop.module.css";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { instituteAs } from "../../../constant/constant_value";
import { postChangeAction } from "../../../redux/store/post-slice";
import { useOneInstituteProfile } from "../../../hooks/dashboard/dashboard-api";

const FollowButton = ({ institute }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const ids = useSelector((state) => state.idChange);
  const allPosts = useSelector((state) => state.postChange.dashboardPosts);
  const dispatch = useDispatch();
  const [instituteFollow] = useInstituteFollow();
  const [instituteUnfollow] = useInstituteUnfollow();
  const [blockInstituteByInstitute] = useBlockInstituteByInstitute();
  const [unblockInstituteByInstitute] = useUnblockInstituteByInstitute();
  const { allDashPost, allDashPostRefetch } = useDashAllPost({
    data: { id: ids?.id, viewAs: instituteAs },
    skip: false,
  });
  const { oneInstituteProfileRefetch } = useOneInstituteProfile({
    data: {
      id: institute?._id,
      type: "ID",
    },
    skip: !institute?._id,
  });
  const { instituteOwnFollowingList, instituteOwnFollowingListRefetch } =
    useInstituteOwnFollowingList({
      data: {
        page: 1,
        id: institute?._id,
        limit: 100,
      },
      skip: !institute?._id,
    });
  const { instituteFollowList, instituteFollowListRefetch } =
    useInstituteFollowList({
      list: { page: 1, id: institute?._id, limit: 100 },
      skip: !institute?._id,
    });

  useEffect(() => {
    if (institute?._id) {
      instituteFollowListRefetch();
      instituteOwnFollowingListRefetch();
    }
  }, [institute?._id]);
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
    setDisabled(true);
    instituteFollow({
      followId: institute?._id,
    })
      .then((res) => {
        if (res.data.message) {
          instituteFollowListRefetch();
          allDashPostRefetch();
          setDisabled(false);
        }
      })
      .catch({});
  };
  const unfollowHandler = () => {
    setDisabled(true);

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
          setDisabled(false);
        }
      })
      .catch({});
  };

  const onBlockInstitute = () => {
    setDisabled(true);
    blockInstituteByInstitute({
      blockId: institute?._id,
    })
      .then(() => {
        oneInstituteProfileRefetch();
        setDisabled(false);
      })
      .catch({});
  };

  const onUnblockInstitute = () => {
    setDisabled(true);
    unblockInstituteByInstitute({
      blockId: institute?._id,
    })
      .then(() => {
        oneInstituteProfileRefetch();
        setDisabled(false);
      })
      .catch({});
  };
  return (
    <>
      {institute?.blockedBy?.includes(ids?.id) ? (
        <div className={style.profileedit} title="Unblock Institute">
          <button onClick={onUnblockInstitute}>{t("blocked")}</button>
        </div>
      ) : instituteOwnFollowingList?.following?.some(
          (val) => val?._id === ids?.id
        ) ? (
        <div className={style.profileedit} title="Block Institute">
          <button onClick={onBlockInstitute}>{t("block")}</button>
        </div>
      ) : institute?.follower?.includes(ids?.id) ||
        instituteFollowList?.iFollowers?.some((val) => val?._id === ids?.id) ? (
        <div className={style.profileedit} title="Unfollow Institute">
          <button onClick={unfollowHandler} disabled={disabled}>
            {t("unfollow")}
          </button>
        </div>
      ) : (
        <div className={style.profileedit} title="Follow Institute">
          <button onClick={followHandler} disabled={disabled}>
            {t("follow")}
          </button>
        </div>
      )}
    </>
  );
};

export default FollowButton;

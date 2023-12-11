import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { instituteAs } from "../../../../../../../constant/constant_value";
import { useOneInstituteProfile } from "../../../../../../../hooks/dashboard/dashboard-api";
import {
  useCommentOnOff,
  usePostDelete,
  usePostDeleteQuestion,
  usePostVisibilityUpdate,
} from "../../../../../../../Post/Institute/Components/post-api";
import { useInstituteUnfollow } from "../../../../../../../Post/Institute/Components/search-api";
import { postChangeAction } from "../../../../../../../redux/store/post-slice";
import style from "./Menu.module.css";
import { useTranslation } from "react-i18next";
function Menu({
  options,
  authorId,
  setDotsClicked,
  pid,
  postType,
  status,
  commentStatus,
  allPosts,
  popup,
}) {
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const [state, setState] = React.useState(true);
  const dispatch = useDispatch();
  const [instituteUnfollow] = useInstituteUnfollow();
  const [postVisibilityUpdate] = usePostVisibilityUpdate();
  const [postDelete] = usePostDelete();
  const [postDeleteQuestion] = usePostDeleteQuestion();
  const [commentOnOff] = useCommentOnOff();
  const { oneInstituteProfileRefetch } = useOneInstituteProfile({
    data: {
      id: ids?.id,
      type: "ID",
    },
    skip: state,
  });
  const ref = useRef(null);

  const unfollowDeleteHandler = (authorId) => {
    const leftPost = [];
    for (let i = 0; i < allPosts?.length; i++) {
      if (allPosts[i].author !== authorId) {
        leftPost.push(allPosts[i]);
      }
    }
    return leftPost;
  };

  const clickHandler = (option) => {
    if (option === "post_unfollow") {
      const posts = unfollowDeleteHandler(authorId);
      dispatch(
        postChangeAction.unfollowPost({
          posts: posts,
        })
      );
      setDotsClicked(false);
      instituteUnfollow({
        followId: authorId,
      })
        .then(() => {})
        .catch({});
    } else if (option === "post_visibility") {
      dispatch(
        postChangeAction.changeVisibility({
          pid: pid,
          status: status === "Anyone" ? "Private" : "Anyone",
        })
      );
      setDotsClicked(false);
      postVisibilityUpdate({
        pid: pid,
        viewAs: instituteAs,
        postUpdate: { postStatus: status === "Anyone" ? "Private" : "Anyone" },
      })
        .then(() => {})
        .catch({});
    } else if (option === "post_delete") {
      dispatch(
        postChangeAction.deletePost({
          pid: pid,
        })
      );
      setDotsClicked(false);
      if (postType === "Question") {
        postDeleteQuestion({
          id: ids?.id,
          viewAs: instituteAs,
          pid: pid,
        })
          .then(() => {
            // setState(false)
            // oneInstituteProfileRefetch();
          })
          .catch({});
      } else {
        postDelete({
          id: ids?.id,
          viewAs: instituteAs,
          pid: pid,
        })
          .then(() => {
            setState(false);
            oneInstituteProfileRefetch();
          })
          .catch({});
      }
    } else if (option === "turn_off_comment") {
      dispatch(
        postChangeAction.turnOffComment({
          pid: pid,
          status: commentStatus === "On" ? "Off" : "On",
        })
      );
      setDotsClicked(false);
      commentOnOff({
        pid: pid,
        commentFeature: {
          comment_turned: commentStatus === "On" ? "Off" : "On",
        },
      })
        .then(() => {
          // console.info("this is ref", res);
        })
        .catch({});
    }
  };

  const handleClickOutside = (e) => {
    if (!e.target.style.zIndex || e.target.style.zIndex !== "50") {
      setDotsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={
        popup
          ? `${style.profileToolTip} ${style.profileToolTipPopup}`
          : style.profileToolTip
      }
      id="menuTooltip"
    >
      <div
        className={
          popup
            ? `${style.triangle} ${style.trianglePopup}`
            : `${style.triangle} ${style.triangleNotPopup}`
        }
      ></div>

      <div className={style.profilelist}>
        {options.map((option, index) => (
          <div
            ref={ref}
            style={{ zIndex: "50" }}
            value={option}
            onClick={() => clickHandler(option)}
            key={index}
          >
            {t(option)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

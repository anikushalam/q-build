import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAs } from "../../../../../../../constant/constant_value";
import {
  usePostDelete,
  usePostDeleteQuestion,
  usePostVisibilityUpdate,
} from "../../../../../../../Post/Institute/Components/post-api";
import {
  useUserUnfollowIns,
  useUserUnfollow,
} from "../../../../../../../Post/Institute/Components/search-api";
import { postChangeAction } from "../../../../../../../redux/store/post-slice";
import { useGetOneUserProfileQuery } from "../../../../../../../services/qvipleAPI";
import style from "./Menu.module.css";

function Menu({
  options,
  switchOption,
  authorId,
  setDotsClicked,
  pid,
  postType,
  status,
  closeMenu,
  allPosts,
  popup,
  reportType,
}) {
  const ids = useSelector((state) => state.idChange);
  const [state, setState] = React.useState(true);
  const dispatch = useDispatch();
  const [userUnfollowIns] = useUserUnfollowIns();
  const [userUnfollow] = useUserUnfollow();
  const [postVisibilityUpdate] = usePostVisibilityUpdate();
  const [postDelete] = usePostDelete();
  const [postDeleteQuestion] = usePostDeleteQuestion();
  const { refetch: profileQueryReftech } = useGetOneUserProfileQuery(
    {
      id: ids?.id,
      type: "ID",
    },
    {
      skip: state,
    }
  );
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
    // console.info("this is follow handler", reportType);
    if (option === "Unfollow") {
      const posts = unfollowDeleteHandler(authorId);
      dispatch(
        postChangeAction.unfollowPost({
          posts: posts,
        })
      );
      if (reportType === "user")
        userUnfollow({
          userFollowId: authorId,
        })
          .then(() => {
            setDotsClicked(false);
          })
          .catch({});
      else if (reportType === "institute")
        userUnfollowIns({
          InsfollowId: authorId,
        })
          .then(() => {
            setDotsClicked(false);
          })
          .catch({});
      else {
      }
    } else if (option === "Visibility") {
      dispatch(
        postChangeAction.changeVisibility({
          pid: pid,
          status: status === "Anyone" ? "Private" : "Anyone",
        })
      );
      setDotsClicked(false);
      postVisibilityUpdate({
        pid: pid,
        viewAs: userAs,
        postUpdate: { postStatus: status === "Anyone" ? "Private" : "Anyone" },
      })
        .then(() => {})
        .catch({});
    } else if (option === "Delete") {
      dispatch(
        postChangeAction.deletePost({
          pid: pid,
        })
      );
      setDotsClicked(false);
      if (postType === "Question") {
        postDeleteQuestion({
          id: ids?.id,
          viewAs: userAs,
          pid: pid,
        })
          .then(() => {
            // setState(false)
            // profileQueryReftech();
          })
          .catch({});
      } else {
        postDelete({
          id: ids?.id,
          viewAs: userAs,
          pid: pid,
        })
          .then(() => {
            setState(false);
            profileQueryReftech();
          })
          .catch({});
      }
    } else {
      switchOption({
        status: option,
        data: { pid: pid, reportType: reportType },
      });
    }
  };

  const handleClickOutside = (e) => {
    if (!e.target.style.zIndex || e.target.style.zIndex !== "50") {
      closeMenu();
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
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

import React, { useState } from "react";
import style from "./EachQuestion.module.css";
import { idChangeAction } from "../../../../../../../redux/store/department-slice";
import CheckOutsideClick from "../EachPost/CheckOutsideClick";
import Save from "../components/PostBottom/Save";
import { useSelector, useDispatch } from "react-redux";
import PostContainer from "../PostContainer";
import { useTranslation } from "react-i18next";
import CustomSuspense from "../../../../../../../Custom/SuspenseLoading/CustomSuspense";
import QvipeLoaderGif from "../../../../../../../Loader/QvipleLoaderGif";
const Comment = React.lazy(() => import("../components/Comment"));
const Menu = React.lazy(() => import("../EachPost/Menu"));
function EachQuestion({ post, profilePost, allPosts, selectOptions }) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [dotsClicked, setDotsClicked] = useState(false);
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const dispatchRepost = useDispatch();

  const onAnswerHandler = (directAnswer) => {
    setCommentOpen(false);
    // console.info("THis is questio ", ids?.searchProfile?.id);
    dispatchRepost(
      idChangeAction.openQuestionWithAnswer({
        repost: "repost",
        post: post._id,
        type: "question",
        otherOption: {
          profilePost: profilePost,
          selectOptions: selectOptions,
          directAnswer: directAnswer,
        },
        search: ids?.searchProfile?.id !== "" ? "search" : "not search",
      })
    );
  };

  const closeMenu = () => {
    setDotsClicked(false);
  };

  const onCommentHandler = () => {
    setCommentOpen((open) => !open);
  };

  return (
    <PostContainer
      author={post?.author}
      authorPhotoId={post?.authorPhotoId}
      authorProfilePhoto={post?.authorProfilePhoto}
      postStatus={post?.postStatus}
      authorUserName={post?.authorUserName}
      createdAt={post?.createdAt}
      setDotsClicked={setDotsClicked}
    >
      <div className={style.postText}>
        <p
          className={style.text}
          onClick={() => onAnswerHandler(false)}
          data-toggle="tooltip"
          data-placement="top"
          title="see_all_ans"
          style={{ cursor: "pointer" }}
        >
          {post?.postQuestion}
        </p>
      </div>
      <div className={style.questionBottom}>
        <div className={style.questionBottomBorder}>
          <p className={style.needCount}>
            {post?.needCount} {t("need_help")}{" "}
          </p>
          <p>
            {post?.commentCount} {t("comments_")} | {post?.answerCount}{" "}
            {t("Answers")}
          </p>
        </div>
        <div className={style.questionBottomIcon}>
          <div
            className={style.questionBottomIconOne}
            onClick={() => onAnswerHandler(false)}
          >
            <img src="/images/repeat.svg" alt="" />
            <p>{t("answer")}</p>
          </div>
          <div
            className={style.questionBottomIconOne}
            onClick={onCommentHandler}
          >
            <img src="/images/comment-icon.svg" alt="" />
            <p>{t("comment")}</p>
          </div>
          <div className={style.questionBottomIconOne}>
            <Save
              endUserSave={post?.endUserSave}
              pid={post?._id}
              parentStyle={style.questionBottomIconOne}
            />
          </div>
        </div>
      </div>
      <React.Suspense fallback={<QvipeLoaderGif />}>
        {commentOpen && (
          <Comment
            pid={post?._id}
            commentCount={post?.commentCount}
            setCommentOpen={setCommentOpen}
            commentOpen={commentOpen}
            type="not repost"
            comment_turned={post?.comment_turned}
          />
        )}
      </React.Suspense>

      {dotsClicked && (
        <CheckOutsideClick closeMenu={closeMenu}>
          <CustomSuspense>
            <Menu
              setDotsClicked={setDotsClicked}
              options={selectOptions}
              pid={post?._id}
              authorId={post?.author}
              profilePost={profilePost}
              status={post?.postStatus}
              allPosts={allPosts}
              popup={false}
              postType={post?.postType}
              commentStatus={post?.comment_turned}
            />
          </CustomSuspense>
        </CheckOutsideClick>
      )}
    </PostContainer>
  );
}

export default EachQuestion;

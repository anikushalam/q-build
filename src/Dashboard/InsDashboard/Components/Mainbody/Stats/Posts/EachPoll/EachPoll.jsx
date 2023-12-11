import React, { useState } from "react";
import style from "./EachPoll.module.css";
import CheckOutsideClick from "../EachPost/CheckOutsideClick";
import Reactions from "../components/Reactions";
import PostContainer from "../PostContainer";
import { useTranslation } from "react-i18next";
import CustomSuspense from "../../../../../../../Custom/SuspenseLoading/CustomSuspense";
import QvipeLoaderGif from "../../../../../../../Loader/QvipleLoaderGif";
const Comment = React.lazy(() => import("../components/Comment"));
const Menu = React.lazy(() => import("../EachPost/Menu"));
function EachPoll({ post, profilePost, allPosts, selectOptions }) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [dotsClicked, setDotsClicked] = useState(false);
  const { t } = useTranslation();
  const closeMenu = () => {
    setDotsClicked(false);
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
      <p className={style.pollQuestion}>{t("poll_question")}</p>
      <div className={style.postText}>
        <p className={style.text}>{post?.poll_query?.poll_question}</p>
      </div>

      <div className={style.bars}>
        {post?.poll_query?.poll_answer?.map((answer) => (
          <div className={style.barContainer} key={answer?._id}>
            <h6>{answer?.content}</h6>
            <p>{answer?.percent_vote?.toFixed(0)}%</p>
            <div
              className={style.bar}
              style={{
                width: `${answer?.percent_vote}%`,
                backgroundColor: answer?.color_type
                  ? `${answer?.color_type}`
                  : `#F2F2F2`,
              }}
            ></div>
          </div>
        ))}
      </div>
      <Reactions
        likeCount={post?.likeCount}
        endUserLike={post?.endUserLike}
        endUserSave={post?.endUserSave}
        pid={post?._id}
        setCommentOpen={setCommentOpen}
        commentOpen={commentOpen}
        commentCount={post?.commentCount}
        type="Poll"
        total_votes={post?.poll_query?.total_votes}
      />
      <React.Suspense fallback={<QvipeLoaderGif />}>
        <Comment
          pid={post?._id}
          commentCount={post?.commentCount}
          setCommentOpen={setCommentOpen}
          commentOpen={commentOpen}
          comment_turned={post?.comment_turned}
        />
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

export default EachPoll;

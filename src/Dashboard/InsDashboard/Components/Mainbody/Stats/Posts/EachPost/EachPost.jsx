import React, { useState } from "react";
import Reactions from "../components/Reactions";
import style from "./EachPost.module.css";
import "./EachPost.css";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import CheckOutsideClick from "./CheckOutsideClick";
import Carousel from "react-material-ui-carousel";
import PostContainer from "../PostContainer";
import ReadMoreText from "../ReadMoreText";
// import Report from "../../../../../Modals/Report";
import VideoPlayer from "../components/VideoPlayer";
// import Hashtag from "../components/Hashtag";
import CustomSuspense from "../../../../../../../Custom/SuspenseLoading/CustomSuspense";
import QvipeLoaderGif from "../../../../../../../Loader/QvipleLoaderGif";

const PostModal = React.lazy(() =>
  import("../../../../../../../Modal/Post/PostModal")
);
const Comment = React.lazy(() => import("../components/Comment"));
const Menu = React.lazy(() => import("./Menu"));

function EachPost({ post, profilePost, allPosts, selectOptions }) {
  const [dotsClicked, setDotsClicked] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [openPostModal, setOpenPostModal] = useState(false);
  const closeMenu = () => {
    setDotsClicked(false);
  };
  const detailView = () => {
    setOpenPostModal(true);
  };
  // console.info("this is post", post);
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
        <ReadMoreText
          text={post?.postTitle}
          stat="title"
          parentStyle={post?.imageId !== "1" ? style.textDes : style.text}
        />
      </div>
      <div className={style.postText}>
        {post?.imageId !== "0" && (
          <ReadMoreText
            text={post?.postDescription}
            stat="description"
            parentStyle={style.textDes}
          />
        )}
      </div>
      {post?.imageId !== "1" && post?.postImage.length === 1 && (
        <div className={style.postImg}>
          <img
            src={`${imageShowUrl}/${post?.postImage[0]}`}
            alt="post img"
            onClick={detailView}
          />
        </div>
      )}
      {post?.imageId !== "1" && post?.postImage.length > 1 && (
        <Carousel
          className="Example"
          autoPlay={false}
          // minHeight="90%"
          // animation={"slide"}
          indicators={true}
          // fullHeightHover={true}
          // timeout={300}
          // cycleNavigation={true}
          navButtonsAlwaysVisible={false}
          navButtonsAlwaysInvisible={false}
          next={(now, previous) => {}}
          prev={(now, previous) => {}}
          onChange={(now, previous) => {}}
        >
          {post?.postImage.map((image, index) => (
            <div className={style.postImg} key={index}>
              <img
                src={`${imageShowUrl}/${image}`}
                alt="client"
                onClick={detailView}
                // className={style.carouselMinHeight}
              />
              <p className={style.index}>
                {index + 1}/{post?.postImage.length}
              </p>
            </div>
          ))}
        </Carousel>
      )}
      {post?.postVideo && (
        <div className={style.videoContainer}>
          <VideoPlayer
            // video="/videos/landing-video.mp4"
            video={`${imageShowUrl}/${post?.postVideo}`}
          />
        </div>
      )}
      <Reactions
        likeCount={post?.likeCount}
        endUserLike={post?.endUserLike}
        endUserSave={post?.endUserSave}
        pid={post?._id}
        setCommentOpen={setCommentOpen}
        commentOpen={commentOpen}
        commentCount={post?.commentCount}
        type="post"
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

      {/* {report && <Report report={report} hideModal={(w) => setReport(w)} />} */}
      <CustomSuspense>
        {openPostModal && (
          <PostModal
            open={openPostModal}
            hideModal={(w) => setOpenPostModal(w)}
            post={post}
            profilePost={profilePost}
            allPosts={allPosts}
            setDotsClicked={setDotsClicked}
            selectOptions={selectOptions}
          />
        )}
      </CustomSuspense>
    </PostContainer>
  );
}

export default EachPost;

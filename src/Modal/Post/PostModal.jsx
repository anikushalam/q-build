import React, { useRef, useState } from "react";
import style from "./PostModal.module.css";
import { Dialog } from "@mui/material";
import "./PostModal.css";
import { imageShowUrl } from "../../services/BaseUrl";
import TextField from "@mui/material/TextField";
import CheckOutsideClick from "../../Dashboard/InsDashboard/Components/Mainbody/Stats/Posts/EachPost/CheckOutsideClick";
import Menu from "../../Dashboard/InsDashboard/Components/Mainbody/Stats/Posts/EachPost/Menu";
import { postChangeAction } from "../../redux/store/post-slice";
import { usePostComment } from "../../Post/Institute/Components/post-api";
import { useDispatch } from "react-redux";
import Carousel from "react-material-ui-carousel";
import { useTranslation } from "react-i18next";
import { instituteAs } from "../../constant/constant_value";
import Reactions from "../../Dashboard/InsDashboard/Components/Mainbody/Stats/Posts/components/Reactions";

function PostModal({
  open,
  hideModal,
  selectOptions,
  post,
  profilePost,
  allPosts,
}) {
  const [dotsClicked, setDotsClicked] = useState(false);
  const [commentCountIncrement, setCommentCountIncrement] = useState(
    post?.commentCount
  );
  const commentRef = useRef("");
  const [postComment] = usePostComment();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const closeMenu = () => {
    setDotsClicked(false);
  };

  const commentSubmitHandler = () => {
    setCommentCountIncrement((commentCount) => ++commentCount);
    postComment({
      comment: {
        commentDescription: commentRef.current.value,
      },
      pid: post?._id,
      viewAs: instituteAs,
    })
      .then((res) => {
        dispatch(
          postChangeAction.addCreatedComment({
            postId: post?._id,
            comment: {
              allChildCommentCount: res.data?.comment.allChildCommentCount,
              allLikeCount: res.data?.comment.allLikeCount,
              author: res.data?.comment.author,
              authorName: res.data?.comment.authorName,
              authorPhotoId: res.data?.comment.authorPhotoId,
              authorProfilePhoto: res.data?.comment.authorProfilePhoto,
              authorUserName: res.data?.comment.authorUserName,
              commentDescription: res.data?.comment.commentDescription,
              createdAt: res.data?.comment.createdAt,
              _id: res.data?.comment._id,
            },
          })
        );
      })
      .catch({});
    commentRef.current.value = "";
    // }
  };

  return (
    <Dialog open={open} onClose={() => hideModal(false)}>
      <div className={style.postModal}>
        <div className={style.postModalTop}>
          <img
            src="/images/menu-dots-icon.svg"
            alt=""
            className={style.menu}
            onClick={() => setDotsClicked((dotsClicked) => !dotsClicked)}
          />

          <img
            src="/images/close-post-icon.svg"
            alt=""
            className={style.menu}
            onClick={() => hideModal(false)}
          />
        </div>
        <div className={style.horizontalLine}></div>
        {post?.imageId !== "1" && post?.postImage.length === 1 && (
          <img
            src={`${imageShowUrl}/${post?.postImage[0]}`}
            className={style.postModalImg}
            alt="post img"
          />
        )}

        {post?.imageId !== "1" && post?.postImage.length > 1 && (
          <Carousel
            className="Example"
            autoPlay={false}
            // animation={"slide"}
            indicators={true}
            // timeout={this.state.timeout}
            // cycleNavigation={true}
            navButtonsAlwaysVisible={false}
            navButtonsAlwaysInvisible={false}
            next={(now, previous) => {}}
            prev={(now, previous) => {}}
            onChange={(now, previous) => {}}
          >
            {post?.postImage.map((image, index) => (
              <div className={style.anndoc} key={index}>
                <p className={style.modalIndex}>
                  {index + 1}/{post?.postImage.length}
                </p>
                <img
                  className={style.selectedImg}
                  src={`${imageShowUrl}/${image}`}
                  alt="client"
                />
              </div>
            ))}
          </Carousel>
        )}

        <Reactions
          likeCount={post?.likeCount}
          endUserLike={post?.endUserLike}
          endUserSave={post?.endUserSave}
          pid={post?._id}
          commentCount={commentCountIncrement}
          type="post"
          postPopupOpen={true}
        />
        <div class="commentSection" className={style.commentSection}>
          <TextField
            id="standard-basic"
            placeholder={t("write_comment")}
            variant="standard"
            inputRef={commentRef}
          />
          <img
            className={style.postbttn}
            src="/images/postbttn.svg"
            alt=""
            onClick={commentSubmitHandler}
          />
        </div>
      </div>
      {dotsClicked && (
        <CheckOutsideClick closeMenu={closeMenu}>
          <Menu
            setDotsClicked={setDotsClicked}
            options={selectOptions}
            pid={post?._id}
            authorId={post?.author}
            profilePost={profilePost}
            status={post?.postStatus}
            closeMenu={closeMenu}
            allPosts={allPosts}
            popup={true}
          />
        </CheckOutsideClick>
      )}
    </Dialog>
  );
}

export default PostModal;

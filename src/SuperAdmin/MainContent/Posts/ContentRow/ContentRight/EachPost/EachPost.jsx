import React, { useState } from "react";
import { format } from "timeago.js";
import Reactions from "../components/Reactions";
import style from "./EachPost.module.css";
import "./EachPost.css";
import VideoPlayer from "../components/VideoPlayer";
import Menu from "./Menu";
import CheckOutsideClick from "./CheckOutsideClick";
import EachQuestion from "../EachQuestion/EachQuestion";
import EachPoll from "../EachPoll/EachPoll";
import Carousel from "react-material-ui-carousel";
import EachRepost from "../components/EachRepost/EachRepost";
import { imageShowUrl } from "../../../../../../services/BaseUrl";

function ReadMore({ text, stat }) {
  const [showMore, setShowMore] = useState(true);
  const result = showMore ? text?.substring(0, 200) : text;
  return (
    <p className={stat === "description" ? style.textDes : style.textDesc}>
      {result
        ?.split(" ")
        .map((txt) =>
          txt.startsWith("@", 0) ? (
            <span style={{ color: "#436DFA" }}>{` ${txt} `}</span>
          ) : (
            <>{` ${txt} `}</>
          )
        )}
      {showMore && text?.length > 200 ? (
        <span className={style.showMore} onClick={() => setShowMore(!showMore)}>
          ..show More
        </span>
      ) : (
        ""
      )}
    </p>
  );
}

function EachPost({ post }) {
  const [dotsClicked, setDotsClicked] = useState(false);
  const closeMenu = () => {
    setDotsClicked(false);
  };
  return (
    <>
      {post?.postType === "Post" ? (
        <div className={style.eachpost}>
          <div className={style.eachposthead}>
            <div className={style.imgcontainer}>
              <img
                alt="not found"
                src={
                  post.authorPhotoId !== "1"
                    ? `${imageShowUrl}/${post.authorProfilePhoto}`
                    : "/images/ins_default_profile.svg"
                }
                className={style.iimg}
              />
            </div>
            <div className={style.eachpostUserName}>
              <h6>{post.authorUserName} {post?.postBlockStatus === 'Not Block' ? '' : ` (${post?.postBlockStatus})`}</h6>
              <div
                className={style.eachpostUserTime}
                style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}
              >
                <p>{format(post?.createdAt)}</p>
                <img
                  className={style.public}
                  src={
                    post?.postStatus === "Anyone"
                      ? "/images/privacy-icon.svg"
                      : "/images/post-private-icon.svg"
                  }
                  alt="privacy"
                />
              </div>
            </div>
          </div>

          <div className={style.postText}>
            <p className={style.text}>
              <ReadMore text={post?.postTitle} stat="title" />
            </p>
          </div>
          <div className={style.postText}>
            {post?.imageId !== "0" && (
              <ReadMore text={post?.postDescription} stat="description" />
            )}
          </div>
          {/* ---------------Single image------------------------------------ */}
          {post?.imageId !== "1" && post?.postImage.length === 1 && (
            <div className={style.postImg}>
              <img
                src={`${imageShowUrl}/${post?.postImage[0]}`}
                alt="post img"
              />
            </div>
          )}
          {/* ---------------Multiple image------------------------------------ */}
          {post?.imageId !== "1" && post?.postImage.length > 1 && (
            <Carousel
              className="Example"
              autoPlay={false}
              indicators={true}
              navButtonsAlwaysVisible={false}
              navButtonsAlwaysInvisible={false}
            >
              {post?.postImage.map((image, index) => (
                <div className={style.postImg} key={index}>
                  <img src={`${imageShowUrl}/${image}`} alt="client" />
                  <p className={style.index}>
                    {index + 1}/{post?.postImage.length}
                  </p>
                </div>
              ))}
            </Carousel>
          )}

          {/* ---------------Video------------------------------------ */}

          {post?.postVideo && (
            <div className={style.videoContainer}>
              <VideoPlayer video={`${imageShowUrl}/${post?.postVideo}`} />
            </div>
          )}
          {post?.postImage.length > 1 ? (
            ""
          ) : (
            <hr className={post?.imageId !== "1" ? style.hr : ""} />
          )}

          <div className={style.reactions}>
            <Reactions
              likeCount={post?.likeCount}
              commentCount={post?.commentCount}
              marginTop={post?.postImage.length > 1 ? "-20px" : ""}
            />
          </div>

          <img
            src="/images/menu-dots-icon.svg"
            alt=""
            className={style.menu}
            onClick={() => setDotsClicked(!dotsClicked)}
          />

          {dotsClicked && (
            <CheckOutsideClick closeMenu={closeMenu}>
              <Menu
                setDotsClicked={setDotsClicked}
                options={post?.postBlockStatus === 'Not Block' ? ["Block"] : ['UnBlock']}
                closeMenu={closeMenu}
                popup={false}
                postId={post?._id}
              />
            </CheckOutsideClick>
          )}
        </div>
      ) : post?.postType === "Poll" ? (
        <EachPoll post={post} />
      ) : post?.postType === "Question" ? (
        <EachQuestion
          dotsClicked={dotsClicked}
          setDotsClicked={setDotsClicked}
          post={post}
        />
      ) : post?.postType === 'Repost' ? (
        <EachRepost post={post} />
      ) : ''}
    </>
  );
}

export default EachPost;

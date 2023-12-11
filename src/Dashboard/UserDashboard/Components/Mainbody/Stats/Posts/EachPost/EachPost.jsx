import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import Comment from "../components/Comment";
// import Hashtag from "../components/Hashtag";
import Reactions from "../components/Reactions";
import style from "./EachPost.module.css";
import "./EachPost.css";
import VideoPlayer from "../components/VideoPlayer";
import Menu from "./Menu";
import Report from "../../../../../Modals/Report";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import { useDispatch, useSelector } from "react-redux";
import CheckOutsideClick from "./CheckOutsideClick";
import { Link } from "react-router-dom";
import PostModal from "../../../../../../../Modal/Post/PostModal";
import Carousel from "react-material-ui-carousel";
import EachQuestion from "../EachQuestion/EachQuestion";
import EachPoll from "../EachPoll/EachPoll";
import { idChangeAction } from "../../../../../../../redux/store/department-slice";
import EachRepost from "../EachRepost/EachRepost";
import PostApplication from "../PostApplication/PostApplication";

function ReadMore({ text, parentStyle }) {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(true);
  const result = showMore ? text?.substring(0, 200) : text;
  const dispatch = useDispatch();

  const onPostSearchProfile = (saerchId) => {
    dispatch(
      idChangeAction.searchId({
        id: saerchId,
        type: "USERNAME",
        searchAs: "user",
      })
    );
  };

  return (
    <p className={parentStyle}>
      {result
        ?.split(" ")
        .map((txt, index) =>
          txt.startsWith("@", 0) ? (
            <Link
              to={`/q/${txt.slice(1, txt.length)}/profile`}
              onClick={() => onPostSearchProfile(txt.slice(1, txt.length))}
              style={{ color: "#436DFA" }}
              key={index}
            >{` ${txt} `}</Link>
          ) : (
            <span key={index}>{` ${txt} `}</span>
          )
        )}
      {showMore && text?.length > 200 ? (
        <span className={style.showMore} onClick={() => setShowMore(!showMore)}>
          {t("show_more_")}
        </span>
      ) : (
        ""
      )}
    </p>
  );
}

function EachPost({ post, profilePost, allPosts, profileData }) {
  const ids = useSelector((state) => state.idChange);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [selectOptions, setSelectOptions] = useState(
    !profilePost
      ? [t("unfollow2"), t("report")]
      : ids?.id === post?.author
      ? post?.postType === "Poll" ||
        post?.postType === "Question" ||
        post?.postType === "Repost"
        ? [t("delete")]
        : [t("visibility"), t("delete")]
      : [t("unfollow2"), t("report")]
  );
  // "Report Post",
  const [report, setReport] = useState(false);
  const [reportId, setReportId] = useState(false);
  const [dotsClicked, setDotsClicked] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [openPostModal, setOpenPostModal] = useState(false);

  // const [load, setLoad] = useState(false);

  const switchOption = (option) => {
    if (option?.status === "Report") {
      setReportId(option?.data);
      setReport(true);
    }
  };

  useEffect(() => {
    if (ids?.id === post?.author) {
      setSelectOptions(
        post?.postType === "Poll" ||
          post?.postType === "Question" ||
          post?.postType === "Repost"
          ? ["Delete"]
          : ["Visibility", "Delete"]
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post?.author, post?.postType, ids?.id]);

  const closeMenu = () => {
    setDotsClicked(false);
  };

  const detailView = () => {
    setOpenPostModal(true);
  };

  const onPostSearchProfile = (saerchId, searchAs) => {
    dispatch(
      idChangeAction.searchId({
        id: saerchId,
        type: "ID",
        searchAs: searchAs,
      })
    );
  };

  // console.info("this is post type", post);
  return (
    <>
      {post?.postType === "Post" ? (
        <div className={style.eachpost}>
          <div className={style.eachposthead}>
            <div className={style.imgcontainer}>
              {post?.author === ids?.id ? (
                <Link to={`/q/${profileData?.name}/profile`}>
                  <img
                    alt=""
                    src={
                      post.authorPhotoId !== "1"
                        ? `${imageShowUrl}/${post.authorProfilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                    className={post.authorPhotoId !== "1" ? "" : style.iimg}
                    style={
                      post?.postStatus === "Anyone"
                        ? { offset: "none" }
                        : {
                            outline: "2px solid #010447",
                            outlineOffset: "1px",
                          }
                    }
                  />
                </Link>
              ) : (
                <Link
                  to={`/q/${post?.authorUserName}/profile`}
                  onClick={() =>
                    onPostSearchProfile(
                      post?.author,
                      post?.isInstitute || post?.isUser
                    )
                  }
                >
                  <img
                    alt=""
                    src={
                      post.authorPhotoId !== "1"
                        ? `${imageShowUrl}/${post.authorProfilePhoto}`
                        : "/images/ins_default_profile.svg"
                    }
                    className={post.authorPhotoId !== "1" ? "" : style.iimg}
                    style={
                      post?.postStatus === "Anyone"
                        ? { offset: "none" }
                        : {
                            outline: "2px solid #010447",
                            outlineOffset: "1px",
                          }
                    }
                  />
                </Link>
              )}
            </div>
            <div className={style.eachpostUserName}>
              {post?.author === ids?.id ? (
                <Link to={`/q/${profileData?.name}/profile`}>
                  <h6>{post.authorUserName}</h6>
                </Link>
              ) : (
                <Link
                  to={`/q/${post?.authorUserName}/profile`}
                  onClick={() =>
                    onPostSearchProfile(
                      post?.author,
                      post?.isInstitute || post?.isUser
                    )
                  }
                >
                  <h6>{post.authorUserName}</h6>
                </Link>
              )}
              <div
                className={style.eachpostUserTime}
                style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}
              >
                <p>{format(post?.createdAt)}</p>
                {/* <img
                  className={style.public}
                  src={
                    post?.postStatus === "Anyone"
                      ? "/images/privacy-icon.svg"
                      : "/images/post-private-icon.svg"
                  }
                  alt="privacy"
                /> */}
              </div>
            </div>
          </div>

          <div className={style.postText}>
            <ReadMore
              text={post?.postTitle}
              stat="title"
              parentStyle={post?.imageId !== "1" ? style.textDes : style.text}
            />
          </div>
          <div className={style.postText}>
            {post?.imageId !== "0" && (
              <ReadMore
                text={post?.postDescription}
                stat="description"
                parentStyle={style.textDes}
              />
            )}
          </div>
          {/* <div className={style.hashtag}>
        {post?.tagPeople?.map((tag) => (
          <Hashtag text={tag?.userLegalName} key={tag?._id} />
        ))}
      </div> */}

          {/* ---------------Single image------------------------------------ */}
          {post?.imageId !== "1" && post?.postImage.length === 1 && (
            <div className={style.postImg}>
              <img
                onClick={detailView}
                src={`${imageShowUrl}/${post?.postImage[0]}`}
                alt="post img"
                loading="lazy"
              />
            </div>
          )}

          {/* ---------------Multiple image------------------------------------ */}

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
                    loading="lazy"
                    // className={style.carouselMinHeight}
                  />
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
          <Comment
            pid={post?._id}
            commentCount={post?.commentCount}
            setCommentOpen={setCommentOpen}
            commentOpen={commentOpen}
            type="not repost"
          />

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
                options={selectOptions}
                switchOption={switchOption}
                pid={post?._id}
                authorId={post?.author}
                profilePost={profilePost}
                status={post?.postStatus}
                closeMenu={closeMenu}
                allPosts={allPosts}
                popup={false}
                postType={post?.postType}
                setReport={setReport}
                reportType={post?.isInstitute || post?.isUser}
              />
            </CheckOutsideClick>
          )}

          {report && (
            <Report
              report={report}
              hideModal={(w) => setReport(w)}
              id={ids?.id}
              reportId={reportId}
            />
          )}
          {openPostModal && (
            <PostModal
              open={openPostModal}
              hideModal={(w) => setOpenPostModal(w)}
              post={post}
              profilePost={profilePost}
              allPosts={allPosts}
              setDotsClicked={setDotsClicked}
              selectOptions={selectOptions}
              switchOption={switchOption}
            />
          )}
        </div>
      ) : post?.postType === "Poll" ? (
        <EachPoll
          post={post}
          profilePost={profilePost}
          allPosts={allPosts}
          selectOptions={selectOptions}
          dotsClicked={dotsClicked}
          setDotsClicked={setDotsClicked}
          closeMenu={closeMenu}
        />
      ) : post?.postType === "Question" ? (
        <EachQuestion
          post={post}
          profilePost={profilePost}
          allPosts={allPosts}
          selectOptions={selectOptions}
          switchOption={switchOption}
          dotsClicked={dotsClicked}
          setDotsClicked={setDotsClicked}
          closeMenu={closeMenu}
        />
      ) : post?.postType === "Repost" ? (
        <EachRepost
          post={post}
          profilePost={profilePost}
          // allPosts={allPosts}
          selectOptions={selectOptions}
          // switchOption={switchOption}
          // dotsClicked={dotsClicked}
          // setDotsClicked={setDotsClicked}
          // closeMenu={closeMenu}
        />
      ) : post?.postType === "Application" ? (
        <PostApplication post={post} profileData={profileData} />
      ) : (
        ""
      )}
    </>
  );
}

export default EachPost;

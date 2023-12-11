import React, { useState, useRef, useEffect } from "react";
import style from "./NewPost.module.css";
import "./NewPost.css";
// import Hashtag from "../Stats/Posts/components/Hashtag";
import { useTranslation } from "react-i18next";
import {
  usePostWithImage,
  usePostWithText,
  usePostWithVideo,
} from "../../../../../Post/Institute/Components/post-api";
import { useDispatch, useSelector } from "react-redux";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import LoaderButton from "../../../../../Loader/LoaderButton";
import { postChangeAction } from "../../../../../redux/store/post-slice";
import { instituteAs } from "../../../../../constant/constant_value";
import PostHeader from "../../../../CreatePost/PostHeader";
import PostFooterIcon from "../../../../CreatePost/PostFooterIcon";
import { useOneInstituteDashboard } from "../../../../../hooks/dashboard/dashboard-api";
import CustomSuspense from "../../../../../Custom/SuspenseLoading/CustomSuspense";
import VideoPlayer from "../../../../UserDashboard/Components/Mainbody/Stats/Posts/components/VideoPlayer";
import { Notfication } from "../../../../../validation/Snackbar";
const TagPeople = React.lazy(() =>
  import("../../../../../Modal/TagModal/TagPeople")
);

function NewPost({ postType, setPostType, onPostTypeChange }) {
  const { t } = useTranslation();
  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedVideo, setSelectedVideo] = useState("");
  const [disabled, setDisabled] = useState("");
  const [iconIndex, setIconIndex] = useState(
    postType === "text" ? 1 : postType === "video" ? 3 : 2
  );
  const [allFiles, setAllFiles] = useState("");
  const postTitleRef = useRef("");
  const postDescriptionRef = useRef("");
  const postStatusRef = useRef("");
  const postCaptionRef = useRef("");
  const ids = useSelector((state) => state.idChange);
  const dispatch = useDispatch();
  const [postWithText] = usePostWithText();
  const [postWithImage] = usePostWithImage();
  const [postWithVideo] = usePostWithVideo();
  const [privateImage, setPrivateImage] = useState(false);
  const [open, setOpen] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [postTagText, setPostTagText] = useState("");
  const [postTagSearch, setPostTagSearch] = useState("");
  const [allTaggedPeopleList, setAllTaggedPeopleList] = useState([]);
  const [postTagDescription, setPostTagDescription] = useState("");
  const [postTagCaption, setPostTagCaption] = useState("");
  const [commentOn, setCommentOn] = useState("On");
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: ids?.id,
      skip: !ids?.id,
    });
  useEffect(() => {
    if (ids?.id) oneInstituteDashboardRefetch();
  }, [ids?.id, oneInstituteDashboardRefetch]);

  const postTitleHandler = (e) => {
    const lng = e.target.value?.length;
    if (e.target.value[lng - 1] === "@") {
      const lent = postTagText.length;
      if (postTagText[lent - 1] === " " || postTagText === "") {
        setOpen(true);
        setOpenType("title");
      }
    } else {
    }
    if (open) {
      const searchSplit = e.target.value?.split("@");
      const splitLeng = searchSplit.length;
      setPostTagSearch(searchSplit[splitLeng - 1]);
    }
    setPostTagText(e.target.value);
  };

  const postDescritpionHandler = (e) => {
    const lng = e.target.value?.length;
    if (e.target.value[lng - 1] === "@") {
      const lent = postTagDescription.length;
      if (postTagDescription[lent - 1] === " " || postTagDescription === "") {
        setOpen(true);
        setOpenType("description");
      }
    } else {
    }
    if (open) {
      const searchSplit = e.target.value?.split("@");
      const splitLeng = searchSplit.length;
      setPostTagSearch(searchSplit[splitLeng - 1]);
    }
    setPostTagDescription(e.target.value);
  };

  const postCaptionHandler = (e) => {
    const lng = e.target.value?.length;
    if (e.target.value[lng - 1] === "@") {
      const lent = postTagCaption.length;
      if (postTagCaption[lent - 1] === " " || postTagCaption === "") {
        setOpen(true);
        setOpenType("caption");
      }
    } else {
    }
    if (open) {
      const searchSplit = e.target.value?.split("@");
      const splitLeng = searchSplit.length;
      setPostTagSearch(searchSplit[splitLeng - 1]);
    }
    setPostTagCaption(e.target.value);
  };

  const taggedPeoplehandler = (data) => {
    setAllTaggedPeopleList([...allTaggedPeopleList, data]);
    if (openType === "title") {
      const searchSplit = postTagText?.split("@");
      const splitLeng = searchSplit.length;
      searchSplit[splitLeng - 1] = data.tagUserName;
      const actualText = [""];
      let count = 0;
      for (let text of searchSplit) {
        if (count === 0) {
          actualText[0] = text;
        } else {
          const me = `${actualText[0]}@${text}`;
          actualText[0] = me;
        }
        ++count;
      }
      setPostTagText(actualText[0]);
    } else if (openType === "description") {
      const searchSplit = postTagDescription?.split("@");
      const splitLeng = searchSplit.length;
      searchSplit[splitLeng - 1] = data.tagUserName;
      const actualText = [""];
      let count = 0;
      for (let text of searchSplit) {
        if (count === 0) {
          actualText[0] = text;
        } else {
          const me = `${actualText[0]}@${text}`;
          actualText[0] = me;
        }
        ++count;
      }
      setPostTagDescription(actualText[0]);
    } else {
      const searchSplit = postTagCaption?.split("@");
      const splitLeng = searchSplit.length;
      searchSplit[splitLeng - 1] = data.tagUserName;
      const actualText = [""];
      let count = 0;
      for (let text of searchSplit) {
        if (count === 0) {
          actualText[0] = text;
        } else {
          const me = `${actualText[0]}@${text}`;
          actualText[0] = me;
        }
        ++count;
      }
      setPostTagCaption(actualText[0]);
    }
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setAllFiles(e.target.files);
      setSelectedImage(e.target.files[0]);
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setImageList((prevList) => prevList.concat(fileArray));
    }
  };

  const videoChange = (e) => {
    if (e.target.files.length > 0) {
      if (e.target.files[0]?.size > 50000000) {
        setNotificationState({
          msg: "Please upload file size less than or equal to 50mb",
          run: true,
        });
      } else {
        setAllFiles(e.target.files[0]);
        let url = URL.createObjectURL(e.target.files[0]);
        setSelectedVideo(url);
      }
    }
  };

  const postSubmitHandler = () => {
    setDisabled(true);
    if (!selectedImage && !selectedVideo) {
      if (
        postTitleRef.current.value !== "" &&
        postDescriptionRef.current.value !== ""
      )
        postWithText({
          id: ids?.id,
          viewAs: instituteAs,
          post: {
            postTitle: postTitleRef.current.value,
            postDescription: postDescriptionRef.current.value,
            postStatus: postStatusRef.current.value,
            people: allTaggedPeopleList,
            comment_turned: commentOn,
          },
        })
          .then((res) => {
            dispatch(
              postChangeAction.addCreatedPost({
                post: res.data?.post,
              })
            );
            onPostTypeChange("post");
            setDisabled(false);
            oneInstituteDashboardRefetch();
          })
          .catch({});
      else {
        setDisabled(false);
      }
    } else if (selectedVideo && allFiles) {
      const formData = new FormData();
      const people = allTaggedPeopleList;
      formData.append("postTitle", postCaptionRef.current.value);
      formData.append("postStatus", postStatusRef.current.value);
      formData.append("people", JSON.stringify(people));
      formData.append("comment_turned", commentOn);
      formData.append("file", allFiles);
      postWithVideo({
        id: ids?.id,
        viewAs: instituteAs,
        post: formData,
      })
        .then((res) => {
          dispatch(
            postChangeAction.addCreatedPost({
              post: res.data?.post,
            })
          );
          onPostTypeChange("post");
          setDisabled(false);
          oneInstituteDashboardRefetch();
        })
        .catch({});
    } else {
      const formData = new FormData();
      const people = allTaggedPeopleList;
      formData.append("postTitle", postCaptionRef.current.value);
      formData.append("postStatus", postStatusRef.current.value);
      formData.append("people", JSON.stringify(people));
      formData.append("comment_turned", commentOn);
      for (let fil of allFiles) {
        formData.append("file", fil);
      }

      postWithImage({
        id: ids?.id,
        viewAs: instituteAs,
        post: formData,
      })
        .then((res) => {
          dispatch(
            postChangeAction.addCreatedPost({
              post: res.data?.post,
            })
          );
          onPostTypeChange("post");
          setDisabled(false);
          oneInstituteDashboardRefetch();
        })
        .catch({});
    }
  };

  // useEffect(() => {
  //   if (postType === "image") {
  //     onImageOpen();
  //     console.info("this is my info");
  //   }
  // }, [postType]);

  const onResetState = () => {
    setImageList([]);
    setSelectedImage("");
    setSelectedVideo("");
    setAllFiles([]);
    setPostTagCaption("");
    setAllTaggedPeopleList([]);
    setCommentOn("On");
  };
  const onEditIocn = () => {
    setIconIndex(1);
    setPostType("text");
    onResetState();
  };

  const onImageIcon = () => {
    setIconIndex(2);
    setPostType("image");
    onResetState();
  };

  const onVideoIcon = () => {
    setIconIndex(3);
    setPostType("video");
    onResetState();
  };

  const onToggleHandler = (e) => {
    if (e.target.checked) {
      setCommentOn("Off");
    } else {
      setCommentOn("On");
    }
  };

  return (
    <>
      <PostHeader
        postTitle={t("create_post")}
        onClose={() => onPostTypeChange("post")}
        dynamicImage={
          oneInstituteDashboard?.institute?.photoId !== "1"
            ? `${imageShowUrl}/${oneInstituteDashboard?.institute?.insProfilePhoto}`
            : "/images/ins_default_profile.svg"
        }
        name={oneInstituteDashboard?.institute?.insName}
        privateImage={privateImage}
        setPrivateImage={setPrivateImage}
        postStatusRef={postStatusRef}
        onToggleHandler={onToggleHandler}
        checkedToggle={commentOn}
      >
        {open && (
          <div
            className={style.tagList}
            style={
              openType === "description"
                ? { marginTop: "7vw" }
                : { marginTop: "0" }
            }
          >
            <CustomSuspense>
              <TagPeople
                open={open}
                setOpen={setOpen}
                postTagSearch={postTagSearch}
                setPostTagSearch={setPostTagSearch}
                taggedPeoplehandler={taggedPeoplehandler}
              />
            </CustomSuspense>
          </div>
        )}

        {postType === "text" && (
          <div className={style.postTitle}>
            <input
              className={style.input}
              type="text"
              placeholder={t("title_post")}
              ref={postTitleRef}
              onChange={postTitleHandler}
              value={postTagText}
            />
          </div>
        )}

        {postType === "text" && (
          <div className={style.postDesc}>
            <textarea
              className={style.postTextarea}
              rows="3"
              type="text"
              name="CreateInsPost"
              ref={postDescriptionRef}
              placeholder={t("desc_post")}
              onChange={postDescritpionHandler}
              value={postTagDescription}
            />
          </div>
        )}
        {postType === "image" && (
          <div className={style.Container}>
            <p className={style.description}>
              <textarea
                className={style.postTextarea}
                rows="3"
                type="text"
                name="CreateInsPost"
                ref={postCaptionRef}
                placeholder={t("caption_post")}
                onChange={postCaptionHandler}
                value={postTagCaption}
              />
            </p>
            {/* <p className={style.description}>
            <div className={style.hashtag}>
              <Hashtag text="naturephotography" />
              <Hashtag text="lake" />
              <Hashtag text="architecture" />
            </div>
          </p> */}

            <div className={style.selectedImg}>
              {imageList.map((img, index) => (
                <img key={index} alt="list" src={img} />
              ))}
            </div>
          </div>
        )}

        {postType === "video" && (
          <div className={style.Container}>
            <p className={style.description}>
              <textarea
                className={style.postTextarea}
                rows="3"
                type="text"
                name="CreateInsPost"
                ref={postCaptionRef}
                placeholder={t("caption_post")}
                onChange={postCaptionHandler}
                value={postTagCaption}
              />
            </p>
            {selectedVideo ? (
              <div className={style.upload_video}>
                <VideoPlayer video={selectedVideo} />
              </div>
            ) : (
              ""
            )}
          </div>
        )}

        <button
          className={
            selectedImage ? `${style.btn} ${style.afterbtn}` : style.btn
          }
          onClick={postSubmitHandler}
          disabled={disabled}
        >
          <p>{t("post")}</p>
          {disabled && (
            <div>
              <LoaderButton />
            </div>
          )}
        </button>
        <PostFooterIcon
          onEditIocn={onEditIocn}
          onVideoIcon={onVideoIcon}
          onPostTypeChange={onPostTypeChange}
          activeIcon={iconIndex}
          addFileToggle
          onAddFile={iconIndex === 2 ? imageChange : videoChange}
          acceptFormate={
            iconIndex === 2
              ? "image/*, image/gif, image/jpeg, image/png"
              : "video/*"
          }
        >
          <label htmlFor="img" style={{ cursor: "pointer" }}>
            <img
              src="/images/img-post-icon.svg"
              onClick={onImageIcon}
              alt="icon upload for post"
            />
            {iconIndex === 2 && <div className={style.border2}></div>}
          </label>

          <input
            className={style.upload}
            id="img"
            name="file"
            multiple
            onChange={iconIndex === 2 ? imageChange : () => {}}
            // onClick={imageChange1}
            type="file"
            accept="image/*, image/gif, image/jpeg, image/png"
          />
        </PostFooterIcon>
      </PostHeader>
      {notificationState.run && (
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      )}
    </>
  );
}

export default NewPost;

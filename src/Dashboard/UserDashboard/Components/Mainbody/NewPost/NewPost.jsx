import React, { useState, useRef } from "react";
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
import { useGetSingleUserDataQuery } from "../../../../../services/qvipleAPI";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import LoaderButton from "../../../../../Loader/LoaderButton";
import { postChangeAction } from "../../../../../redux/store/post-slice";
import TagPeople from "../../../../../Modal/TagModal/TagPeople";
import { userAs } from "../../../../../constant/constant_value";
function NewPost({
  closeNewPost,
  clickNewAnnouncement,
  clickNewPoll,
  clickNewQuestion,
}) {
  const { t } = useTranslation();
  const [imageList, setImageList] = useState([]);

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedVideo, setSelectedVideo] = useState("");
  const [disabled, setDisabled] = useState("");
  const [iconIndex, setIconIndex] = useState(1);
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
  const { data: dashboardData, refetch: profileQueryReftech } =
    useGetSingleUserDataQuery();

  const [privateImage, setPrivateImage] = useState(false);
  const [open, setOpen] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [postTagText, setPostTagText] = useState("");
  const [postTagSearch, setPostTagSearch] = useState("");
  const [allTaggedPeopleList, setAllTaggedPeopleList] = useState([]);
  const [postTagDescription, setPostTagDescription] = useState("");
  const [postTagCaption, setPostTagCaption] = useState("");

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

  // const videoChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setSelectedVideo(e.target.files[0]);
  //   }
  // };

  const postSubmitHandler = () => {
    setDisabled(true);
    if (!selectedImage && !selectedVideo) {
      if (
        postTitleRef.current.value !== "" &&
        postDescriptionRef.current.value !== ""
      )
        postWithText({
          id: ids?.id,
          viewAs: userAs,
          post: {
            postTitle: postTitleRef.current.value,
            postDescription: postDescriptionRef.current.value,
            postStatus: postStatusRef.current.value,
            people: allTaggedPeopleList,
          },
        })
          .then((res) => {
            dispatch(
              postChangeAction.addCreatedPost({
                post: res.data?.post,
              })
            );
            closeNewPost();
            setDisabled(false);
            profileQueryReftech();
          })
          .catch({});
      else {
        setDisabled(false);
      }
    } else if (selectedVideo) {
      const formData = new FormData();
      const people = allTaggedPeopleList;
      formData.append("postTitle", postCaptionRef.current.value);
      formData.append("postStatus", postStatusRef.current.value);
      formData.append("people", JSON.stringify(people));
      formData.append("file", selectedVideo);
      postWithVideo({
        id: ids?.id,
        viewAs: userAs,
        post: formData,
      })
        .then((res) => {
          dispatch(
            postChangeAction.addCreatedPost({
              post: res.data?.post,
            })
          );
          closeNewPost();
          setDisabled(false);
          profileQueryReftech();
        })
        .catch({});
    } else {
      const formData = new FormData();
      const people = allTaggedPeopleList;
      formData.append("postTitle", postCaptionRef.current.value);
      formData.append("postStatus", postStatusRef.current.value);
      formData.append("people", JSON.stringify(people));
      for (let fil of allFiles) {
        formData.append("file", fil);
      }

      postWithImage({
        id: ids?.id,
        viewAs: userAs,
        post: formData,
      })
        .then((res) => {
          dispatch(
            postChangeAction.addCreatedPost({
              post: res.data?.post,
            })
          );
          closeNewPost();
          setDisabled(false);
          profileQueryReftech();
        })
        .catch({});
    }
  };

  const textArea = document.querySelector("textarea");

  textArea?.addEventListener("keyup", (e) => {
    textArea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textArea.style.height = `${scHeight}px`;
  });

  return (
    <div className={style.newPost}>
      <div className={style.header}>
        <h4>{t("create-post")}</h4>
        <img src="/images/close-post-icon.svg" onClick={closeNewPost} alt="" />
      </div>

      <hr className={style.hr} />

      <div className={style.content}>
        <div className={style.title}>
          <div className={style.imgContainer}>
            <img
              src={
                dashboardData?.user?.photoId !== "1"
                  ? `${imageShowUrl}/${dashboardData?.user?.profilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt=""
            />
          </div>

          <div className={style.userName}>
            <h6>{dashboardData?.user?.userLegalName}</h6>
            <div className={style.public}>
              <img
                className={style.privacyIcon}
                src={
                  !privateImage
                    ? "/images/privacy-icon.svg"
                    : "/images/post-private-icon.svg"
                }
                alt=""
              />
              <div className={style.select}>
                <span className={style.arrow}></span>
                <img
                  className={style.arrowIcon}
                  src="/images/dropdown-icon.svg"
                  alt=""
                />

                <select
                  name="cars"
                  id="cars"
                  ref={postStatusRef}
                  onChange={(e) =>
                    e.target.value === "Anyone"
                      ? setPrivateImage(false)
                      : setPrivateImage(true)
                  }
                >
                  <option value="Anyone">{t("public-label")}</option>
                  <option value="Private">{t("private-label")} </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {open && (
          <div
            className={style.tagList}
            style={
              openType === "description"
                ? { marginTop: "7vw" }
                : { marginTop: "0" }
            }
          >
            <TagPeople
              open={open}
              setOpen={setOpen}
              postTagSearch={postTagSearch}
              setPostTagSearch={setPostTagSearch}
              taggedPeoplehandler={taggedPeoplehandler}
            />
          </div>
        )}

        {imageList.length === 0 && !selectedVideo && (
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

        {imageList.length === 0 && !selectedVideo && (
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

        {/* {!selectedImage && !selectedVideo && (
        <div className={style.hashTag}>
          <div></div>
          <p>{t("Add Hashtag")}</p>
        </div>
      )} */}

        {imageList.length > 0 && (
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

        {selectedVideo && (
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
              <video
                controls="controls"
                src={URL.createObjectURL(selectedVideo)}
                style={{ width: "300px", height: "200px" }}
              />
            </div>
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
        <hr className={style.hr} />
        <div className={style.iconsContainer}>
          <div className={style.icons}>
            <div>
              <img
                onClick={() => {
                  setIconIndex(1);
                  setSelectedVideo("");
                  setPostTagCaption("");
                  setAllTaggedPeopleList([]);
                  setImageList([]);
                  setAllFiles([]);
                  setSelectedImage("");
                }}
                src="/images/edit-icon.svg"
                style={{ marginTop: "-10px" }}
                alt=""
              />
              {iconIndex === 1 && <div className={style.border1}></div>}
            </div>

            <label htmlFor="img" style={{ cursor: "pointer" }}>
              <img
                style={{ marginTop: "-10px" }}
                src="/images/img-post-icon.svg"
                onClick={() => {
                  setIconIndex(2);
                  setAllTaggedPeopleList([]);
                  setSelectedVideo("");
                  setPostTagCaption("");
                  setPostTagText("");
                  setPostTagDescription("");
                }}
                alt=""
              />
              {iconIndex === 2 && <div className={style.border2}></div>}
            </label>

            <input
              className={style.upload}
              id="img"
              name="file"
              multiple
              onChange={imageChange}
              type="file"
              accept="image/gif, image/jpeg, image/png"
            />
            {/* <label htmlFor="video" style={{ cursor: "pointer" }}>
              <img
                style={{ marginTop: "-10px" }}
                src="/images/video-post-icon.svg"
                onClick={() => setIconIndex(3)}
                alt=""
              />
              {iconIndex === 3 && <div className={style.border3}></div>}
            </label> */}
            {/* <input
              className={style.upload}
              id="video"
              name="file"
              onChange={videoChange}
              type="file"
              // accept="image/gif, image/jpeg, image/png"
            /> */}
            {/* <img
              onClick={clickNewAnnouncement}
              src="/images/voice-post-icon.svg"
              alt=""
            /> */}
            <img onClick={clickNewPoll} src="/images/shorts-icon.svg" alt="" />
            <img
              onClick={clickNewQuestion}
              src="/images/document-icon.svg"
              alt=""
            />
          </div>
          <p>{t("add_files")}</p>
        </div>
      </div>
    </div>
  );
}

export default NewPost;

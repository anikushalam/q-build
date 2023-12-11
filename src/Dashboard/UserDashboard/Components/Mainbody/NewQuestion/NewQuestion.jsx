import React, { useState } from "react";
import style from "./NewQuestion.module.css";
import { useTranslation } from "react-i18next";
import "./NewQuestion.css";
import { useGetSingleUserDataQuery } from "../../../../../services/qvipleAPI";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import LoaderButton from "../../../../../Loader/LoaderButton";
import { usePostWithQuestion } from "../../../../../Post/Institute/Components/post-api";
import { useDispatch, useSelector } from "react-redux";
import PollsModal from "../../../../../Modal/Polls/PollsModal";
import { postChangeAction } from "../../../../../redux/store/post-slice";
import { userAs } from "../../../../../constant/constant_value";
import AddHashtagList from "../Stats/Posts/Hashtag/AddHashtagList";

function NewQuestion({
  closeAnnouncement,
  clickNewPost,
  changePostType,
  clickNewPoll,
}) {
  const { t } = useTranslation();
  const [privateImage, setPrivateImage] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [allField, setAllField] = useState(false);
  // const askQuestionRef = useRef("");
  const { data: dashboardData } = useGetSingleUserDataQuery();
  const [postWithQuestion] = usePostWithQuestion();
  const ids = useSelector((state) => state.idChange);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [trendCategoryRef, setTrendCategoryRef] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [openHashtag, setOpenHashtag] = useState(false);
  const [searchHashtag, setSearchHashtag] = useState("");
  const [selectedHashtag, setSelectedHashtag] = useState([]);

  const onQuestionChange = (e) => {
    const lng = e.target.value?.length;
    if (e.target.value[lng - 1] === "#") {
      const lent = questionText.length;
      if (questionText[lent - 1] === " " || questionText === "") {
        setOpenHashtag(true);
      }
    }
    // else {
    //   setOpenHashtag(false);
    // }
    if (openHashtag) {
      const searchSplit = e.target.value?.split("#");
      const splitLeng = searchSplit.length;
      setSearchHashtag(searchSplit[splitLeng - 1]);
    }
    setQuestionText(e.target.value);
    setAllField(false);
  };
  const onSelectHashtag = (val) => {
    setSelectedHashtag((prev) =>
      prev?.length ? [...prev, val?._id] : [val?._id]
    );
    const searchSplit = questionText?.split("#");
    const splitLeng = searchSplit.length;
    searchSplit[splitLeng - 1] = val.hashtag_name?.substring(1);
    const actualText = [""];
    let count = 0;
    for (let text of searchSplit) {
      if (count === 0) {
        actualText[0] = text;
      } else {
        const me = `${actualText[0]}#${text}`;
        actualText[0] = me;
      }
      ++count;
    }
    setQuestionText(actualText[0]);
    setOpenHashtag(false);
  };
  const addQuestionHandler = () => {
    if (questionText !== "") {
      setDisabled(true);
      postWithQuestion({
        post: {
          postQuestion: questionText,
          trend_category: trendCategoryRef,
          file: [],
          hashtag: selectedHashtag,
        },
        id: ids?.id,
        viewAs: userAs,
      })
        .then((res) => {
          console.log(res);
          dispatch(
            postChangeAction.addCreatedPost({
              post: res.data?.post,
            })
          );
          setDisabled(false);
          closeAnnouncement();
        })
        .catch({});
    } else {
      setAllField(true);
    }
  };

  return (
    <>
      <div className={style.newPost}>
        {open && (
          <PollsModal
            open={open}
            setOpen={setOpen}
            setTrendCategoryRef={setTrendCategoryRef}
          />
        )}
        <div className={style.header}>
          <h4>{t("create_post")}</h4>
          <img
            src="/images/close-post-icon.svg"
            onClick={closeAnnouncement}
            alt=""
          />
        </div>

        <hr className={style.hr} />

        <div className={style.content}>
          <div className={style.title}>
            <div className={style.imgContainer}>
              <img
                src={
                  dashboardData?.user?.photoId !== "1"
                    ? `${imageShowUrl}/${dashboardData?.user?.profilePhoto}`
                    : "/images/ins_default_profile.svg"
                }
                alt="profile"
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
                  alt="status dropdown"
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
                    // ref={questionStatusRef}
                    onChange={(e) =>
                      e.target.value === "Anyone"
                        ? setPrivateImage(false)
                        : setPrivateImage(true)
                    }
                  >
                    <option value="Anyone">{t("public")}</option>
                    <option value="Private">{t("private")} </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div
            className={style.postTitle}
            style={{
              position: "relative",
            }}
          >
            <input
              className={style.input}
              type="text"
              // ref={askQuestionRef}
              value={questionText}
              placeholder={t("ask_question")}
              onChange={onQuestionChange}
            />
            {openHashtag && (
              <AddHashtagList
                searchHashtag={searchHashtag}
                onSelectHashtag={onSelectHashtag}
              />
            )}
          </div>
          {allField && (
            <div style={{ color: "red" }}>{t("please_type_question")}</div>
          )}
          <button
            className={style.btn}
            disabled={disabled}
            onClick={addQuestionHandler}
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
                  src="/images/edit-icon.svg"
                  onClick={() => {
                    clickNewPost();
                    changePostType("text");
                  }}
                  alt=""
                />
              </div>

              <div>
                <img
                  src="/images/img-post-icon.svg"
                  onClick={() => {
                    clickNewPost();
                    changePostType("image");
                  }}
                  alt=""
                />
              </div>

              {/* <div>
                <img
                  src="/images/video-post-icon.svg"
                  onClick={() => {
                    clickNewPost();
                    changePostType("video");
                  }}
                  alt=""
                />
              </div> */}

              {/* <div>
                <img src="/images/voice-post-icon.svg" alt="" />
                <div className={style.border4}></div>
              </div> */}

              <div>
                <img
                  src="/images/shorts-icon.svg"
                  alt=""
                  onClick={() => {
                    clickNewPoll();
                  }}
                />
              </div>

              <div>
                <img src="/images/document-icon.svg" alt="" />
                <div className={style.border6}></div>
              </div>
            </div>

            {/* <div>
            <label htmlFor="document" style={{ cursor: "pointer" }}>
              <p className={style.addfiles}>{t("Add Files")}</p>
            </label>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewQuestion;

import React, { useState } from "react";
import style from "./NewPoll.module.css";
import { useTranslation } from "react-i18next";
import "./NewPoll.css";
import { useGetSingleUserDataQuery } from "../../../../../services/qvipleAPI";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import PollsModal from "../../../../../Modal/Polls/PollsModal";
import LoaderButton from "../../../../../Loader/LoaderButton";
import { useDispatch, useSelector } from "react-redux";
import { usePostWithPollQuestion } from "../../../../../Post/Institute/Components/post-api";
import { postChangeAction } from "../../../../../redux/store/post-slice";
import { userAs } from "../../../../../constant/constant_value";
import AddHashtagList from "../Stats/Posts/Hashtag/AddHashtagList";

function NewPoll({
  closeAnnouncement,
  clickNewPost,
  changePostType,
  clickNewAnnouncement,
  clickNewQuestion,
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  const [privateImage, setPrivateImage] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [allField, setAllField] = useState(false);
  const { data: dashboardData } = useGetSingleUserDataQuery();
  const ids = useSelector((state) => state.idChange);
  const dispatch = useDispatch();
  const [questionText, setQuestionText] = useState("");
  // const [pollDays, setPollDays] = useState(1);
  const [trendCategoryRef, setTrendCategoryRef] = useState("");
  const [options, setOptions] = useState([{ content: "" }, { content: "" }]);
  const [openHashtag, setOpenHashtag] = useState(false);
  const [searchHashtag, setSearchHashtag] = useState("");
  const [selectedHashtag, setSelectedHashtag] = useState([]);
  const optionCharLen = 30;
  const questionCharLen = 140;

  const [postWithPollQuestion] = usePostWithPollQuestion();

  const textArea = document.querySelector("textarea");

  textArea?.addEventListener("keyup", (e) => {
    textArea.style.height = "auto";
    let scHeight = e.target.scrollHeight;

    textArea.style.height = `${scHeight}px`;
  });

  const handleChange = (index, e) => {
    const values = [...options];

    values[index][e.target.name] = e.target.value;

    setOptions(values);
  };

  const addOption = () => {
    setOptions([...options, { content: "" }]);
  };

  const removeOptions = (index) => {
    if (options?.length > 2) {
      const arr = [...options];
      arr.splice(index, 1);
      setOptions([...arr]);
    }
  };

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

  const addPollHandler = () => {
    if (questionText !== "") {
      setDisabled(true);
      postWithPollQuestion({
        post: {
          poll_question: questionText,
          // duration_date: ,
          // duration_time: ,
          trend_category: trendCategoryRef,
          day: 7,
          // day: parseInt(pollDays),
          pollAnswer: options,
          hashtag: selectedHashtag,
        },
        id: ids?.id,
        viewAs: userAs,
      })
        .then((res) => {
          console.info("this is response of post", res.data?.post);
          dispatch(
            postChangeAction.addCreatedPost({
              post: res.data?.post,
            })
          );
          setDisabled(false);
          closeAnnouncement();
          // profileQueryReftech();
        })
        .catch({});
    } else {
      setAllField(!allField);
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
          <h4>{t("create_poll")}</h4>
          <img
            src="/images/close-post-icon.svg"
            onClick={closeAnnouncement}
            alt=""
          />
        </div>

        <hr className={style.hr} />

        <div className={style.title}>
          <div className={style.imgContainer}>
            <img
              src={
                dashboardData?.user?.photoId !== "1"
                  ? `${imageShowUrl}/${dashboardData?.user?.profilePhoto}`
                  : "/images/ins_default_profile.svg"
              }
              alt="not found"
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
          className={style.QAns}
          style={{
            position: "relative",
          }}
        >
          <h6>{t("question_")}</h6>
          <textarea
            className={
              questionText.length === questionCharLen
                ? `${style.pollTextarea} ${style.validBorder}`
                : style.pollTextarea
            }
            id="pollTextArea"
            type="text"
            required
            maxlength="140"
            placeholder={t("ask_question")}
            value={questionText}
            onChange={onQuestionChange}
          />
          {openHashtag && (
            <AddHashtagList
              searchHashtag={searchHashtag}
              onSelectHashtag={onSelectHashtag}
              viewAs="POLL"
            />
          )}
          <div className={style.length}>
            <p
              className={
                questionText.length === questionCharLen ? style.validcolor : ""
              }
            >
              {questionText.length}/{questionCharLen}
            </p>
          </div>

          {options.map((option, index) => (
            <div className={style.options} key={index}>
              <div className={style.optionDiv}>
                <h6>
                  {" "}
                  {t("option")} {index + 1}
                </h6>

                {index > 1 ? (
                  <p onClick={() => removeOptions(index)}> {t("remove")} </p>
                ) : (
                  ""
                )}
              </div>
              <input
                name="content"
                placeholder={t("add_option_")}
                className={
                  option.length === optionCharLen
                    ? `${style.pollInput} ${style.validBorder}`
                    : style.pollInput
                }
                type="text"
                maxlength="30"
                required
                value={option.content}
                onChange={(e) => {
                  handleChange(index, e);
                }}
              />

              <div className={style.length}>
                <p
                  className={
                    option.content.length === optionCharLen
                      ? style.validcolor
                      : ""
                  }
                >
                  {option.content.length > 0 ? option.content.length : 0}/
                  {optionCharLen}
                </p>
              </div>
            </div>
          ))}

          {options.length <= 4 && (
            <div className={style.addOption} onClick={addOption}>
              {t("add_option")}
            </div>
          )}

          {/* <h6>Poll duration</h6>
          <select
            className={style.duration}
            onChange={(e) => setPollDays(e.target.value)}
          >
            <option selected>Add days</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select> */}
        </div>

        {allField && <div style={{ color: "red" }}>{t("please_add")}</div>}
        <button
          className={style.btn}
          disabled={disabled}
          onClick={addPollHandler}
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
            {/* 
            <div>
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
              <img
                onClick={clickNewAnnouncement}
                src="/images/voice-post-icon.svg"
                alt=""
              />
            </div> */}

            <div>
              <img src="/images/shorts-icon.svg" alt="" />
              <div className={style.border5}></div>
            </div>

            <div>
              <img
                onClick={clickNewQuestion}
                src="/images/document-icon.svg"
                alt=""
              />
            </div>
          </div>

          <div>
            <label htmlFor="document" style={{ cursor: "pointer" }}>
              <p className={style.addfiles}>{t("Add Files")}</p>
            </label>

            <input
              className={style.upload}
              multiple
              id="document"
              name="file"
              type="file"
              accept="image/gif, image/jpeg, image/png,  application/pdf, application/msword"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPoll;

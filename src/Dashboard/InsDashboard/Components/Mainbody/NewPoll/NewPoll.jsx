import React, { useEffect, useState } from "react";
import style from "./NewPoll.module.css";
import { useTranslation } from "react-i18next";
import "../../../../CreatePost/CreateCommonPost.css";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import PollsModal from "../../../../../Modal/Polls/PollsModal";
import LoaderButton from "../../../../../Loader/LoaderButton";
import { useDispatch, useSelector } from "react-redux";
import { usePostWithPollQuestion } from "../../../../../Post/Institute/Components/post-api";
import { postChangeAction } from "../../../../../redux/store/post-slice";
import { instituteAs } from "../../../../../constant/constant_value";
import PostHeader from "../../../../CreatePost/PostHeader";
import PostFooterIcon from "../../../../CreatePost/PostFooterIcon";
import { useOneInstituteDashboard } from "../../../../../hooks/dashboard/dashboard-api";

function NewPoll({ setPostType, onPostTypeChange }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  const [privateImage, setPrivateImage] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [allField, setAllField] = useState(false);
  const ids = useSelector((state) => state.idChange);
  const dispatch = useDispatch();
  const [question, setquestion] = useState("");
  // const [pollDays, setPollDays] = useState(1);
  const [trendCategoryRef, setTrendCategoryRef] = useState("");
  const [options, setOptions] = useState([{ content: "" }, { content: "" }]);
  const [commentOn, setCommentOn] = useState("On");

  const optionCharLen = 30;
  const questionCharLen = 140;
  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: ids?.id,
      skip: !ids?.id,
    });
  useEffect(() => {
    if (ids?.id) oneInstituteDashboardRefetch();
  }, [ids?.id, oneInstituteDashboardRefetch]);
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

  const addPollHandler = () => {
    if (question !== "" && trendCategoryRef?.current?.value !== "") {
      let flag = false;
      for (let val of options) {
        if (val?.content === "") return (flag = true);
      }
      if (flag) {
        setAllField(!allField);
      } else {
        setAllField(!allField);
        setDisabled(true);
        postWithPollQuestion({
          post: {
            poll_question: question,
            // duration_date: ,
            // duration_time: ,
            trend_category: trendCategoryRef,
            day: 7,
            // day: parseInt(pollDays),
            pollAnswer: options,
            comment_turned: commentOn,
          },
          id: ids?.id,
          viewAs: instituteAs,
        })
          .then((res) => {
            dispatch(
              postChangeAction.addCreatedPost({
                post: res.data?.post,
              })
            );
            setDisabled(false);
            onPostTypeChange("post");
            // profileQueryReftech();
          })
          .catch({});
      }
    } else {
      setAllField(!allField);
    }
  };

  const onEditIocn = () => {
    onPostTypeChange("newPost");
    setPostType("text");
  };
  const onImageIocn = () => {
    onPostTypeChange("newPost");
    setPostType("image");
  };

  const onToggleHandler = (e) => {
    if (e.target.checked) {
      setCommentOn("Off");
    } else {
      setCommentOn("On");
    }
  };
  return (
    <PostHeader
      postTitle={t("create_poll")}
      onClose={() => onPostTypeChange("post")}
      dynamicImage={
        oneInstituteDashboard?.institute?.photoId !== "1"
          ? `${imageShowUrl}/${oneInstituteDashboard?.institute?.insProfilePhoto}`
          : "/images/ins_default_profile.svg"
      }
      name={oneInstituteDashboard?.institute?.insName}
      privateImage={privateImage}
      setPrivateImage={setPrivateImage}
      onToggleHandler={onToggleHandler}
      checkedToggle={commentOn}
    >
      <div className={style.QAns}>
        <h6>{t("question_")}</h6>
        <textarea
          className={
            question.length === questionCharLen
              ? `${style.pollTextarea} ${style.validBorder}`
              : style.pollTextarea
          }
          id="pollTextArea"
          type="text"
          required
          maxlength="140"
          placeholder={t("ask_question")}
          value={question}
          onChange={(e) => setquestion(e.target.value)}
        />
        <div className={style.length}>
          <p
            className={
              question.length === questionCharLen ? style.validcolor : ""
            }
          >
            {question.length}/{questionCharLen}
          </p>
        </div>

        {options.map((option, index) => (
          <div className={style.options} key={index}>
            <div className={style.optionDiv}>
              <h6>Option {index + 1}</h6>

              {index > 1 ? (
                <p onClick={() => removeOptions(index)}>Remove</p>
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
            {t("add_option_")} +
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

      <PostFooterIcon
        onEditIocn={onEditIocn}
        onPostTypeChange={onPostTypeChange}
        activeIcon={5}
        addFileToggle={false}
      >
        <div>
          <img
            src="/images/img-post-icon.svg"
            onClick={onImageIocn}
            alt="file upload icon"
            title="Create Image Post"
          />
        </div>
      </PostFooterIcon>
      {open && (
        <PollsModal
          open={open}
          setOpen={setOpen}
          setTrendCategoryRef={setTrendCategoryRef}
        />
      )}
    </PostHeader>
  );
}

export default NewPoll;

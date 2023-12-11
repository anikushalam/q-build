import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import LoaderButton from "../../../../../../../../Loader/LoaderButton";
import {
  useQuestionAddAnswer,
  useQuestionAnswerRepost,
} from "../../../../../../../../Post/Institute/Components/post-api";
import { postChangeAction } from "../../../../../../../../redux/store/post-slice";
import style from "./CreateAns.module.css";
import { useTranslation } from "react-i18next";

function CreateAns({ pid, setViewIns, answerPostType, questionTitle }) {
  const { t } = useTranslation();
  const [postType, setPostType] = useState(
    answerPostType !== "Repost" ? "Repost" : "Answer"
  );
  const [file, setFile] = useState([]);
  const [ansData, setAnsData] = useState({
    text: "",
    img: "",
  });
  const dispatch = useDispatch();
  const [questionAddAnswer] = useQuestionAddAnswer();
  const [questionAnswerRepost] = useQuestionAnswerRepost();
  const [disabled, setDisabled] = useState(false);
  const textarea = document.querySelector("textarea");
  textarea?.addEventListener("keyup", (e) => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;

    textarea.style.height = `${scHeight}px`;
  });

  useEffect(() => {
    setPostType(answerPostType !== "Repost" ? "Repost" : "Answer");
  }, [answerPostType]);

  useEffect(() => {
    document.getElementById("scrollView").scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, []);
  const imgUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setAnsData({ ...ansData, img: "" });
      setAnsData({ ...ansData, img: URL.createObjectURL(e.target.files[0]) });
      setFile(e.target.files[0]);
    }
  };

  // console.info(ansData);

  const onSubmitHandler = () => {
    setDisabled(true);
    const formData = new FormData();
    formData.append("answerContent", ansData.text);
    formData.append("file", file);
    // for (let [key, value] of formData.entries()) {
    //   console.info(key, value);
    // }
    if (postType === "Answer")
      questionAddAnswer({
        pid: pid,
        postType: "Only Answer",
        answer: formData,
      })
        .then((res) => {
          // console.info(res);
          dispatch(
            postChangeAction.addCreatedAnswer({
              answer: res.data?.answers,
              postId: pid,
            })
          );
          setAnsData({
            text: "",
            img: "",
          });
          setDisabled(false);
        })
        .catch({});
    else
      questionAnswerRepost({
        pid: pid,
        postType: "Repost",
        rePostAnswer: formData,
      })
        .then((res) => {
          setViewIns(false);
          dispatch(
            postChangeAction.addCreatedPost({
              post: res.data?.rePost,
              postType: "repost",
              pid: pid,
            })
          );
          setAnsData({
            text: "",
            img: "",
          });
          setDisabled(false);
        })
        .catch({});
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.questionSection} id="scrollView">
        <div className={style.answerTop}>
          <p>{t("answering")}</p>
          <img
            src="/images/cross-icon.svg"
            alt="close button"
            onClick={() => setViewIns(false)}
          />
        </div>
        <div className={style.questionMainContainer}>
          <h5 className={style.questionTitle}>{questionTitle}</h5>
        </div>
        <textarea
          className={style.postTextarea}
          type="text"
          required
          name="CreateAns"
          placeholder={t("type_a_answer")}
          rows="3"
          value={ansData.text}
          onChange={(e) => setAnsData({ ...ansData, text: e.target.value })}
        />
        <div className={style.postContainer}>
          <label htmlFor="img" style={{ cursor: "pointer" }}>
            <img src="/images/addImg-icon.svg" alt="" />
          </label>

          <input
            className={style.upload}
            id="img"
            name="file"
            onChange={imgUpload}
            type="file"
            accept="image/gif, image/jpeg, image/png"
          />
        </div>

        {ansData.img && (
          <img alt="list" src={ansData.img} className={style.uplaodImage} />
        )}
        <button
          className={style.postActive}
          onClick={onSubmitHandler}
          disabled={disabled}
        >
          <p>{t("post")}</p>
          {disabled && (
            <div>
              <LoaderButton />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default CreateAns;

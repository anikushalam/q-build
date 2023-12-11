import React, { useState, useRef, useEffect } from "react";
import style from "./NewQuestion.module.css";
import { useTranslation } from "react-i18next";
import "../../../../CreatePost/CreateCommonPost.css";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import LoaderButton from "../../../../../Loader/LoaderButton";
import { usePostWithQuestion } from "../../../../../Post/Institute/Components/post-api";
import { useDispatch, useSelector } from "react-redux";
import PollsModal from "../../../../../Modal/Polls/PollsModal";
import { postChangeAction } from "../../../../../redux/store/post-slice";
import { instituteAs } from "../../../../../constant/constant_value";
import PostHeader from "../../../../CreatePost/PostHeader";
import PostFooterIcon from "../../../../CreatePost/PostFooterIcon";
import { useOneInstituteDashboard } from "../../../../../hooks/dashboard/dashboard-api";

function NewQuestion({ setPostType, onPostTypeChange }) {
  const { t } = useTranslation();
  const [privateImage, setPrivateImage] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [allField, setAllField] = useState(false);
  const askQuestionRef = useRef("");
  const [postWithQuestion] = usePostWithQuestion();
  const ids = useSelector((state) => state.idChange);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [trendCategoryRef, setTrendCategoryRef] = useState("");
  const [commentOn, setCommentOn] = useState("On");

  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: ids?.id,
      skip: !ids?.id,
    });
  useEffect(() => {
    if (ids?.id) oneInstituteDashboardRefetch();
  }, [ids?.id, oneInstituteDashboardRefetch]);

  const addQuestionHandler = () => {
    if (
      askQuestionRef.current.value !== "" &&
      trendCategoryRef?.current?.value !== ""
    ) {
      setDisabled(true);
      postWithQuestion({
        post: {
          postQuestion: askQuestionRef.current.value,
          trend_category: trendCategoryRef,
          comment_turned: commentOn,
          file: [],
        },
        id: ids?.id,
        viewAs: instituteAs,
      })
        .then((res) => {
          console.log(res);
          dispatch(
            postChangeAction.addCreatedPost({
              post: res.data?.post,
            })
          );
          setDisabled(false);
          onPostTypeChange("post");
        })
        .catch({});
    } else {
      setAllField(true);
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
    <>
      <PostHeader
        postTitle={t("create_question")}
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
        <div className={style.postTitle}>
          <input
            className={style.input}
            type="text"
            ref={askQuestionRef}
            required
            placeholder={"ask_question"}
            onChange={() => setAllField(false)}
          />
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

        <PostFooterIcon
          onEditIocn={onEditIocn}
          onPostTypeChange={onPostTypeChange}
          activeIcon={6}
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
    </>
  );
}

export default NewQuestion;

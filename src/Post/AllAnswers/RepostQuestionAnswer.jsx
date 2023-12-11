import React, { useEffect, useState } from "react";
import style from "./RepostAnswer.module.css";
import { idChangeAction } from "../../redux/store/department-slice";
import { useDispatch, useSelector } from "react-redux";
import RepostDashAnswer from "./RepostDashAnswer";
import RightQuestion from "./RightQuestion";
import { useTranslation } from "react-i18next";

const RepostQuestionAnswer = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const questionData = useSelector((state) => state.idChange.repostQuestion);
  const allPosts = useSelector((state) => state.postChange);
  const [viewIns, setViewIns] = useState(
    questionData?.otherOption?.directAnswer
  );
  useEffect(() => {
    setViewIns(questionData?.otherOption?.directAnswer);
  }, [questionData?.otherOption?.directAnswer]);
  const backHandler = () => {
    dispatch(
      idChangeAction.openQuestionWithAnswer({
        repost: "post",
        post: "",
        type: "",
        otherOption: {},
        search: "",
      })
    );
  };

  // console.info("THis is question data", allPosts.profilePosts);
  // console.info("THis is question data", questionData);
  return (
    <div className={style.mainContainer}>
      {!viewIns && (
        <div className={style.backButton}>
          <div className={style.backButton1} onClick={backHandler}>
            <img src="/images/back-icon.svg" alt="back button" />
            {t("go_to_home")}
          </div>
        </div>
      )}
      {!questionData?.otherOption?.profilePost &&
        !questionData?.otherOption?.question &&
        allPosts?.dashboardPosts?.map((post) =>
          post?._id === questionData?.post ? (
            <RepostDashAnswer
              post={post}
              key={post?._id}
              viewIns={viewIns}
              setViewIns={setViewIns}
              allPosts={allPosts?.dashboardPosts}
              type={questionData.type}
              backHandler={backHandler}
            />
          ) : (
            ""
          )
        )}
      {!questionData?.otherOption?.profilePost &&
        questionData?.otherOption?.question && (
          <RightQuestion
            pid={questionData?.post}
            viewIns={viewIns}
            setViewIns={setViewIns}
            type={questionData.type}
            backHandler={backHandler}
          />
        )}
      {questionData.search === "not search"
        ? questionData?.otherOption?.profilePost &&
          allPosts?.profilePosts?.map((post) =>
            post?._id === questionData?.post ? (
              <RepostDashAnswer
                post={post}
                key={post?._id}
                viewIns={viewIns}
                setViewIns={setViewIns}
                allPosts={allPosts?.profilePosts}
                type={questionData.type}
                backHandler={backHandler}
              />
            ) : (
              ""
            )
          )
        : questionData?.otherOption?.profilePost &&
          allPosts?.searchPosts?.map((post) =>
            post?._id === questionData?.post ? (
              <RepostDashAnswer
                post={post}
                key={post?._id}
                viewIns={viewIns}
                setViewIns={setViewIns}
                allPosts={allPosts?.searchPosts}
                type={questionData.type}
                backHandler={backHandler}
              />
            ) : (
              ""
            )
          )}
    </div>
  );
};

export default RepostQuestionAnswer;

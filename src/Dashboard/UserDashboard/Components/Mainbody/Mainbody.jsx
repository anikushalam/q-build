import React, { useState } from "react";
import style from "./Mainbody.module.css";
import Sidebar from "./Sidebar/Sidebar";
import NewPoll from "./NewPoll/NewPoll";
import Stats from "./NewPost/Stats";
import NewPost from "./NewPost/NewPost";
import NewQuestion from "./NewQuestion/NewQuestion";
import SidebarRight from "./SidebarRight/SidebarRight";
import { useSelector } from "react-redux";
import RepostQuestionAnswer from "../../../../Post/AllAnswers/RepostQuestionAnswer";

function Mainbody({ profileData, onRefetchUser }) {
  const [iconIndex, setIconIndex] = useState(1);
  const [newPost, setNewPost] = useState(false);
  const [status, setStatus] = useState("post");
  const [postType, setPostType] = useState("");

  const repostStatus = useSelector(
    (state) => state.idChange.repostQuestion.repostStatus
  );
  const clickNewPost = () => {
    setStatus("text");
  };
  const closeAnnouncement = () => {
    setStatus("post");
  };

  const clickNewPoll = () => {
    setStatus("poll");
  };

  const clickNewQuestion = () => {
    setStatus("question");
  };

  const closeNewPost = () => {
    setStatus("post");
  };

  if (false) {
    setNewPost(false);
  }
  const onValueHandler = (val) => {
    setStatus(val);
  };

  // console.info(profileData?.username);
  return (
    <div
      className={newPost ? `${style.mainbody} ${style.main}` : style.mainbody}
    >
      {repostStatus === "post" && (
        <div className={style.sidebar}>
          <Sidebar status={status} userData={profileData} />
        </div>
      )}

      {repostStatus === "post" && status === "post" && (
        <div className={style.test}>
          <Stats
            clickNewPost={clickNewPost}
            closeNewPost={closeNewPost}
            authorData={profileData}
            onValueHandler={onValueHandler}
            onRefetchUser={onRefetchUser}
          />
        </div>
      )}

      {repostStatus !== "post" && <RepostQuestionAnswer />}
      {status === "post" && (
        <div className={style.sidebarright}>
          <SidebarRight />
        </div>
      )}

      {status === "text" && (
        <div className={style.newPost}>
          <NewPost
            closeNewPost={closeNewPost}
            clickNewPoll={clickNewPoll}
            clickNewQuestion={clickNewQuestion}
            iconIndex={iconIndex}
            setIconIndex={setIconIndex}
            postType={postType}
          />
        </div>
      )}

      {status === "poll" && (
        <div className={style.newAnnouncement}>
          <NewPoll
            closeAnnouncement={closeAnnouncement}
            clickNewPost={clickNewPost}
            clickNewQuestion={clickNewQuestion}
            setIconIndex={setIconIndex}
            changePostType={(w) => setPostType(w)}
          />
        </div>
      )}

      {status === "question" && (
        <div className={style.newAnnouncement}>
          <NewQuestion
            clickNewPost={clickNewPost}
            closeAnnouncement={closeAnnouncement}
            clickNewPoll={clickNewPoll}
            setIconIndex={setIconIndex}
            changePostType={(w) => setPostType(w)}
          />
        </div>
      )}
    </div>
  );
}

export default Mainbody;

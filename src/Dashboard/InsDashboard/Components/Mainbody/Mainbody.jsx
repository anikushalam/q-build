import React, { useState } from "react";
import style from "./Mainbody.module.css";
import Sidebar from "./Sidebar/Sidebar";
import SidebarRight from "./SidebarRight/SidebarRight";
import Stats from "./NewPost/Stats";
import { useSelector } from "react-redux";
import CustomSuspense from "../../../../Custom/SuspenseLoading/CustomSuspense";
const RepostQuestionAnswer = React.lazy(() =>
  import("../../../../Post/AllAnswers/RepostQuestionAnswer")
);
const NewPost = React.lazy(() => import("./NewPost/NewPost"));
const NewAnnouncement = React.lazy(() =>
  import("./NewAnnouncement/NewAnnouncement")
);
const NewPoll = React.lazy(() => import("./NewPoll/NewPoll"));
const NewQuestion = React.lazy(() => import("./NewQuestion/NewQuestion"));

function Mainbody() {
  const [status, setStatus] = useState("post");
  const [postType, setPostType] = useState("text");
  const repostStatus = useSelector(
    (state) => state.idChange.repostQuestion.repostStatus
  );

  const onPostTypeChange = (val) => {
    setStatus(val);
  };

  return (
    <div className={style.mainbody}>
      {repostStatus === "post" && (
        <div className={style.sidebar}>
          <Sidebar status={status} />
        </div>
      )}
      {repostStatus === "post" && status === "post" && (
        <div className={style.test}>
          <Stats
            setPostType={setPostType}
            onPostTypeChange={onPostTypeChange}
          />
        </div>
      )}
      {repostStatus !== "post" && (
        <CustomSuspense>
          <RepostQuestionAnswer />
        </CustomSuspense>
      )}
      {status === "post" && (
        <div className={style.sidebarright}>
          <SidebarRight />
        </div>
      )}

      {status === "newPost" && (
        <div className={style.newPost}>
          <CustomSuspense>
            <NewPost
              postType={postType}
              setPostType={setPostType}
              onPostTypeChange={onPostTypeChange}
            />
          </CustomSuspense>
        </div>
      )}

      {status === "newAnnouncement" && (
        <div className={style.newAnnouncement}>
          <CustomSuspense>
            <NewAnnouncement
              setPostType={setPostType}
              onPostTypeChange={onPostTypeChange}
            />
          </CustomSuspense>
        </div>
      )}

      {status === "newPoll" && (
        <div className={style.newAnnouncement}>
          <CustomSuspense>
            <NewPoll
              setPostType={setPostType}
              onPostTypeChange={onPostTypeChange}
            />
          </CustomSuspense>
        </div>
      )}

      {status === "newQuestion" && (
        <div className={style.newAnnouncement}>
          <CustomSuspense>
            <NewQuestion
              setPostType={setPostType}
              onPostTypeChange={onPostTypeChange}
            />
          </CustomSuspense>
        </div>
      )}
    </div>
  );
}

export default Mainbody;

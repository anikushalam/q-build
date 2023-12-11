import React, { useEffect, useState } from "react";
import EachPoll from "../Dashboard/UserDashboard/Components/Mainbody/Stats/Posts/EachPoll/EachPoll";
import EachQuestion from "../Dashboard/UserDashboard/Components/Mainbody/Stats/Posts/EachQuestion/EachQuestion";
import QvipleLoading from "../Loader/QvipleLoading";
import { useGetOneHashtagPostList } from "../Post/Institute/Components/post-api";
import style from "./HashtagProfile.module.css";

const HashtagPost = ({ hid }) => {
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { getOneHashtagPostList, getOneHashtagPostListRefetch } =
    useGetOneHashtagPostList({
      data: {
        hid: hid,
        page: 1,
        limit: 100,
      },
      skip: !hid,
    });

  useEffect(() => {
    if (hid) {
      setShowingDataLoading(true);
      getOneHashtagPostListRefetch();
    }
  }, [hid, getOneHashtagPostListRefetch]);
  useEffect(() => {
    if (getOneHashtagPostList?.post) setShowingDataLoading(false);
    else if (getOneHashtagPostList?.post?.length === 0)
      setShowingDataLoading(false);
    else {
    }
  }, [getOneHashtagPostList?.post]);
  return (
    <div className={style.post_container}>
      {getOneHashtagPostList?.post?.map((post) =>
        post?.postType === "Question" ? (
          <EachQuestion post={post} key={post?._id} viewAs="HASHTAG" />
        ) : (
          <EachPoll post={post} key={post?._id} viewAs="HASHTAG" />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {!showingDataLoading && !getOneHashtagPostList?.post?.length && (
        <h6 className={style.post_container_h6}>No Post use this #tag </h6>
      )}
    </div>
  );
};

export default HashtagPost;

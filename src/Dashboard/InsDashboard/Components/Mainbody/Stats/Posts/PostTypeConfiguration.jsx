import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import QvipeLoaderGif from "../../../../../../Loader/QvipleLoaderGif";
const EachPost = React.lazy(() => import("./EachPost/EachPost"));
const EachPoll = React.lazy(() => import("./EachPoll/EachPoll"));
const EachQuestion = React.lazy(() => import("./EachQuestion/EachQuestion"));
const PostTypeConfiguration = ({ post, profilePost, allPosts }) => {
  const ids = useSelector((state) => state.idChange);
  const [selectOptions, setSelectOptions] = useState(
    !profilePost
      ? ["post_unfollow"]
      : ids?.id === post?.author
      ? post?.postType === "Poll" || post?.postType === "Question"
        ? ["post_delete", "turn_off_comment"]
        : ["post_visibility", "post_delete", "turn_off_comment"]
      : ["post_unfollow"]
  );

  useEffect(() => {
    if (ids?.id === post?.author) {
      post?.postType === "Poll" || post?.postType === "Question"
        ? setSelectOptions(["post_delete", "turn_off_comment"])
        : setSelectOptions([
            "post_visibility",
            "post_delete",
            "turn_off_comment",
          ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post?.author, ids?.id, post?.postType]);

  return (
    <React.Suspense fallback={<QvipeLoaderGif />}>
      {post?.postType === "Post" && (
        <EachPost
          post={post}
          profilePost={profilePost}
          allPosts={allPosts}
          selectOptions={selectOptions}
        />
      )}
      {post?.postType === "Poll" && (
        <EachPoll
          post={post}
          profilePost={profilePost}
          allPosts={allPosts}
          selectOptions={selectOptions}
        />
      )}
      {post?.postType === "Question" && (
        <EachQuestion
          post={post}
          profilePost={profilePost}
          allPosts={allPosts}
          selectOptions={selectOptions}
        />
      )}
    </React.Suspense>
  );
};

export default PostTypeConfiguration;

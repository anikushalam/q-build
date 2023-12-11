import React, { useState } from "react";
import { imageShowUrl } from "../../../../../../../../services/BaseUrl";
import style from "./EachComment.module.css";
import { format } from "timeago.js";
import { useTranslation } from "react-i18next";
import { useCommentLike } from "../../../../../../../../Post/Institute/Components/post-api";
import { useDispatch, useSelector } from "react-redux";
import { postChangeAction } from "../../../../../../../../redux/store/post-slice";
import { instituteAs } from "../../../../../../../../constant/constant_value";
import CustomSuspenseGif from "../../../../../../../../Custom/SuspenseLoading/CustomSuspenseGif";
const NestedComments = React.lazy(() =>
  import("../Nested_Comments/NestedComments")
);
function EachComment({ comment, pid }) {
  const [nestedComment, setNestedComment] = useState(false);
  const [skip, setSkip] = React.useState(true);
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const dispatch = useDispatch();
  const { commentLike, commentLikeRefetch } = useCommentLike({
    ids: { cid: comment?._id, id: ids?.id, viewAs: instituteAs },
    skip,
  });

  React.useEffect(() => {
    if (commentLike) {
      setSkip(true);
      dispatch(
        postChangeAction.addCommentLike({
          postId: pid,
          commentId: comment?._id,
          like: commentLike.allLikeCount,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentLike]);

  const likeHandler = () => {
    setSkip(false);
    commentLikeRefetch();
  };

  return (
    <div className={style.eachCommentContainer}>
      <div className={style.eachComment}>
        <div className={style.imgcontainer}>
          <img
            src={
              comment?.authorPhotoId !== "1"
                ? `${imageShowUrl}/${comment.authorProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt=""
          />
        </div>

        <div className={style.commentText}>
          <h6>{comment?.authorUserName}</h6>
          <p>{comment?.commentDescription}</p>
        </div>
      </div>

      <div className={style.likeReply}>
        <p onClick={likeHandler}>
          {t("Like")} <span>{comment?.allLikeCount}</span>
        </p>
        <p onClick={() => setNestedComment(!nestedComment)}>
          {t("reply")} <span>{comment?.allChildCommentCount}</span>{" "}
        </p>
      </div>

      <div className={style.nested}>
        <CustomSuspenseGif>
          {nestedComment && comment?._id && (
            <NestedComments
              pcid={comment?._id}
              pid={pid}
              allChildCommentCount={comment?.allChildCommentCount}
            />
          )}
        </CustomSuspenseGif>
      </div>
      <div className={style.dots}>
        <p className={style.time}>{format(comment?.createdAt)}</p>
      </div>
    </div>
  );
}

export default EachComment;

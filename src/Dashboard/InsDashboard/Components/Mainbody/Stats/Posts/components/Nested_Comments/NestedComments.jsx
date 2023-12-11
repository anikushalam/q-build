import React, { useState, useEffect, useRef } from "react";
import {
  useCommentReply,
  useOneCommentAllReply,
} from "../../../../../../../../Post/Institute/Components/post-api";
import EachNestedComment from "./EachNestedComment";
import style from "./NestedComments.module.css";
import { useDispatch, useSelector } from "react-redux";
import { imageShowUrl } from "../../../../../../../../services/BaseUrl";
import { postChangeAction } from "../../../../../../../../redux/store/post-slice";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { instituteAs } from "../../../../../../../../constant/constant_value";
import Avatar from "../../../../../../../../Custom/Avatar/Avatar";
import { useOneInstituteDashboard } from "../../../../../../../../hooks/dashboard/dashboard-api";

function NestedComments({ pcid, pid }) {
  //for setting the next page to fetch data
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
  //for the infinite scroll
  const [ref, inView] = useInView();

  //for the fetch more or not after seeing all post
  const [state, setState] = useState(true);

  const commentRef = useRef("");
  const ids = useSelector((state) => state.idChange);
  const allReply = useSelector((state) => state.postChange.replyComments);

  const dispatch = useDispatch();
  const { allReplyComment, allReplyCommentRefetch } = useOneCommentAllReply({
    data: {
      pcid: pcid ? pcid : "",
      page: page,
      limit: 10,
      viewAs: instituteAs,
    },
    skip: false,
  });
  const [commentReply] = useCommentReply();

  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: ids?.id,
      skip: !ids?.id,
    });
  useEffect(() => {
    if (ids?.id) oneInstituteDashboardRefetch();
  }, [ids?.id, oneInstituteDashboardRefetch]);

  //for the infinite scroll then change the page
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  //for the refteching after the page is reset
  useEffect(() => {
    allReplyCommentRefetch();
  }, [page, allReplyCommentRefetch, state]);

  //for the action perform each time when the new data is comming from api
  useEffect(() => {
    //dispatch actions
    if (allReplyComment?.replyComment) {
      dispatch(
        postChangeAction.addReplyComment({
          commentId: pcid,
          reply: allReplyComment?.replyComment,
        })
      );
    }

    //for next api is call or not dashboard
    if (allReplyComment?.replyComment?.length === 10) setState(true);
    else setState(false);
  }, [allReplyComment?.replyComment, dispatch, pcid]);

  const commentSubmitHandler = () => {
    dispatch(
      postChangeAction.addReplyCommentCount({
        commentId: pcid,
        postId: pid,
      })
    );
    commentReply({
      replyComment: {
        comment: commentRef.current.value,
        uid: ids.id,
      },
      pcid: pcid,
      viewAs: instituteAs,
    })
      .then((res) => {
        dispatch(
          postChangeAction.addReplyCreatedComment({
            commentId: pcid,
            reply: res.data?.childReplyComment,
          })
        );
      })
      .catch({});
    commentRef.current.value = "";
  };

  return (
    <>
      <div className={style.eachComment}>
        <div className={style.addComment}>
          <div className={style.imgcontainer}>
            <Avatar
              dynamicImage={
                oneInstituteDashboard?.institute?.photoId !== "1"
                  ? `${imageShowUrl}/${oneInstituteDashboard?.institute?.insProfilePhoto}`
                  : "/images/ins_default_profile.svg"
              }
            />{" "}
          </div>

          <div className={style.inputContainer}>
            <input
              type="text"
              ref={commentRef}
              placeholder={t("add_a_reply")}
              className={`form-control ${style.searchinput}`}
            />
            <div className={style.icons}>
              <img src="/images/img-icon.svg" alt="" />
              <img src="/images/emoji-icon.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={style.btn} onClick={commentSubmitHandler}>
          {t("reply")}
        </div>
      </div>

      {allReply?.map((com) =>
        com.commentId === pcid
          ? com?.reply?.map((comment, index) =>
              com?.reply?.length === index + 1 ? (
                <div className={style.eachComment} key={index} ref={ref}>
                  <EachNestedComment comment={comment} />
                  <hr />
                </div>
              ) : (
                <div className={style.eachComment} key={index}>
                  <EachNestedComment comment={comment} />
                  <hr />
                </div>
              )
            )
          : ""
      )}
    </>
  );
}

export default NestedComments;

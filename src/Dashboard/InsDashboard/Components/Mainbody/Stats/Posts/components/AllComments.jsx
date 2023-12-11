import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import {
  useOnePostAllComment,
  usePostComment,
} from "../../../../../../../Post/Institute/Components/post-api";
import { postChangeAction } from "../../../../../../../redux/store/post-slice";
import style from "./AllComments.module.css";
import { useTranslation } from "react-i18next";
import EachComment from "./EachComment/EachComment";
import { instituteAs } from "../../../../../../../constant/constant_value";
import Avatar from "../../../../../../../Custom/Avatar/Avatar";
import { useOneInstituteDashboard } from "../../../../../../../hooks/dashboard/dashboard-api";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";

const AllComments = ({ pid, commentCount, commentCountIncrement }) => {
  //for setting the next page to fetch data
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
  const commentRef = useRef("");

  //for the infinite scroll
  const [ref, inView] = useInView();

  //for the fetch more or not after seeing all post
  const [state, setState] = useState(true);

  const dispatch = useDispatch();
  const allComment = useSelector((state) => state.postChange.comments);
  const id = useSelector((state) => state.idChange.id);

  const { allPostComment, allPostCommentRefetch } = useOnePostAllComment({
    data: { pid: pid ? pid : "", viewAs: instituteAs, page: page, limit: 10 },
    skip: false,
  });
  const [postComment] = usePostComment();

  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: id,
      skip: !id,
    });
  useEffect(() => {
    if (id) oneInstituteDashboardRefetch();
  }, [id, oneInstituteDashboardRefetch]);

  //for the infinite scroll then change the page
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  //for the refteching after the page is reset
  useEffect(() => {
    allPostCommentRefetch();
  }, [page, allPostCommentRefetch]);

  //for the action perform each time when the new data is comming from api
  useEffect(() => {
    //dispatch actions
    if (allPostComment?.comment) {
      dispatch(
        postChangeAction.addComment({
          postId: pid,
          comment: allPostComment?.comment,
        })
      );
    }

    //for next api is call or not dashboard
    if (allPostComment?.comment.length === 10) setState(true);
    else setState(false);
  }, [allPostComment?.comment, dispatch, pid]);

  const commentSubmitHandler = () => {
    commentCountIncrement(++commentCount);
    postComment({
      comment: {
        commentDescription: commentRef.current.value,
      },
      pid: pid,
      viewAs: instituteAs,
    })
      .then((res) => {
        dispatch(
          postChangeAction.addCreatedComment({
            postId: pid,
            comment: {
              allChildCommentCount: res.data?.comment.allChildCommentCount,
              allLikeCount: res.data?.comment.allLikeCount,
              author: res.data?.comment.author,
              authorName: res.data?.comment.authorName,
              authorPhotoId: res.data?.comment.authorPhotoId,
              authorProfilePhoto: res.data?.comment.authorProfilePhoto,
              authorUserName: res.data?.comment.authorUserName,
              commentDescription: res.data?.comment.commentDescription,
              createdAt: res.data?.comment.createdAt,
              _id: res.data?.comment._id,
            },
          })
        );
      })
      .catch({});
    commentRef.current.value = "";
  };

  // console.log("THis is comment posy", allComment);
  return (
    <>
      <div className={style.addComment}>
        <div className={style.imgcontainer}>
          <Avatar
            dynamicImage={
              oneInstituteDashboard?.institute?.photoId !== "1"
                ? `${imageShowUrl}/${oneInstituteDashboard?.institute?.insProfilePhoto}`
                : "/images/ins_default_profile.svg"
            }
          />
        </div>

        <div className={style.inputContainer}>
          <input
            type="text"
            ref={commentRef}
            placeholder={t("all_comment")}
            className={`form-control ${style.searchinput}`}
          />
          <div className={style.icons}>
            <img src="/images/img-icon.svg" alt="" />
            <img src="/images/emoji-icon.svg" alt="" />
          </div>
        </div>
      </div>
      <div className={style.btn} onClick={commentSubmitHandler}>
        {t("post")}
      </div>

      {allComment?.map((com) =>
        com.postId === pid
          ? com?.comment?.map((comment, index) =>
              com?.comment?.length === index + 1 ? (
                <div className={style.eachComment} key={index} ref={ref}>
                  <EachComment comment={comment} pid={pid} />
                  <hr />
                </div>
              ) : (
                <div className={style.eachComment} key={index}>
                  <EachComment comment={comment} pid={pid} />
                  <hr />
                </div>
              )
            )
          : ""
      )}
    </>
  );
};

export default AllComments;

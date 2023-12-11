import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import {
  useOnePostAllComment,
  usePostComment,
} from "../../../../../../../Post/Institute/Components/post-api";
import { useTranslation } from "react-i18next";
import { postChangeAction } from "../../../../../../../redux/store/post-slice";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import style from "./AllComments.module.css";
import EachComment from "./EachComment/EachComment";
import { userAs } from "../../../../../../../constant/constant_value";
import { useGetSingleUserDataQuery } from "../../../../../../../services/qvipleAPI";
import { Link } from "react-router-dom";
const AllComments = ({ pid, commentCount, commentCountIncrement }) => {
  //for setting the next page to fetch data
  const [page, setPage] = useState(1);
  const commentRef = useRef("");
  const dispatch = useDispatch();

  //for the infinite scroll
  const [ref, inView] = useInView();

  //for the fetch more or not after seeing all post
  const [state, setState] = useState(true);

  const allComment = useSelector((state) => state.postChange.comments);

  const { allPostComment, allPostCommentRefetch } = useOnePostAllComment({
    data: { pid: pid ? pid : "", viewAs: userAs, page: page, limit: 10 },
    skip: false,
  });
  const [postComment] = usePostComment();
  const { data: dashboardData } = useGetSingleUserDataQuery();

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
  const { t } = useTranslation();
  const commentSubmitHandler = () => {
    commentCountIncrement(++commentCount);
    postComment({
      comment: {
        commentDescription: commentRef.current.value,
      },
      pid: pid,
      viewAs: userAs,
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
  return (
    <>
      <div className={style.addComment}>
        <div className={style.imgcontainer}>
          <Link to={`/q/${dashboardData?.user?.username}/profile`}>
            <img
              alt="not found"
              src={
                dashboardData?.user?.photoId !== "1"
                  ? `${imageShowUrl}/${dashboardData?.user?.profilePhoto}`
                  : "/images/ins_default_profile.svg"
              }
            />
          </Link>
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

// for Important thinsh

// //for the check comment in redux or not
// useEffect(() => {
//   if (allComment?.length) {
//     for (let comm of allComment) {
//       if (comm.postId === pid) {
//         comm.comment?.length === commentCount
//           ? setLoad(false)
//           : setLoad(true);
//       }
//     }
//   } else {
//     // console.log("run load else ");
//     setLoad(true);
//   }
// }, [allComment]);

// console.log(load);

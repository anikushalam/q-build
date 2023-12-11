import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { instituteAs } from "../../../../../../../../constant/constant_value";
import { usePostLike } from "../../../../../../../../Post/Institute/Components/post-api";
import { useTranslation } from "react-i18next";
import { postChangeAction } from "../../../../../../../../redux/store/post-slice";
import style from "./Like.module.css";
const Like = ({ parentStyle, endUserLike, pid, type }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [skip, setSkip] = React.useState(true);
  const ids = useSelector((state) => state.idChange);
  const [like, setLike] = React.useState(
    endUserLike?.some((val) => {
      if (val === ids?.id) {
        return true;
      } else {
        return false;
      }
    })
  );

  const { postLikeRefetch } = usePostLike({
    data: { pid: pid, viewAs: instituteAs },
    skip,
  });

  const likeHandler = () => {
    dispatch(
      postChangeAction.addLike({
        pid: pid,
        id: ids?.id,
      })
    );
    setLike(true);
    setSkip(false);
    postLikeRefetch();
  };

  const unlikeHandler = () => {
    dispatch(
      postChangeAction.removeLike({
        pid: pid,
        id: ids?.id,
      })
    );
    setLike(false);
    setSkip(false);
    postLikeRefetch();
  };

  return (
    <>
      {like ? (
        <div className={parentStyle} onClick={unlikeHandler}>
          <img
            src={
              type !== "Poll"
                ? "/images/unlike-icon.svg"
                : "/images/poll-recommended.svg"
            }
            alt="unlike"
            className={style.likeImage}
          />
          <p>{type !== "Poll" ? t("like") : t("recommend")}</p>
        </div>
      ) : (
        <div className={parentStyle} onClick={likeHandler}>
          <img
            src={
              type !== "Poll"
                ? "/images/like-icon.svg"
                : "/images/poll-recommend.svg"
            }
            alt="like"
            className={style.likeImage}
          />
          <p>{type !== "Poll" ? t("like") : t("recommend")}</p>
        </div>
      )}
    </>
  );
};

export default Like;

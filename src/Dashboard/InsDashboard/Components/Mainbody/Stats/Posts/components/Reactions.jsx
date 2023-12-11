import React from "react";
import style from "./Reactions.module.css";
import Like from "./PostBottom/Like";
import Save from "./PostBottom/Save";
import { useTranslation } from "react-i18next";

function Reactions({
  likeCount,
  endUserLike,
  endUserSave,
  pid,
  setCommentOpen,
  commentOpen,
  commentCount,
  type,
  total_votes,
  postPopupOpen,
}) {
  const closeComment = () => {
    if (!postPopupOpen) setCommentOpen(!commentOpen);
  };
  const { t } = useTranslation();
  return (
    <>
      <div className={style.questionBottom}>
        {type !== "Poll" ? (
          <div className={style.questionBottomBorder}>
            <p className={style.needCount}>
              {likeCount} {t("likes")}{" "}
            </p>
            <p>
              {commentCount} {t("comments_")}{" "}
            </p>
          </div>
        ) : (
          <div className={style.questionBottomBorder}>
            <p className={style.pollVote}>{total_votes} Votes</p>
            <p>
              {likeCount} {t("recommend")} | {commentCount} {t("comments_")}
            </p>
          </div>
        )}

        <div className={style.questionBottomIcon}>
          <div className={style.questionBottomIconOne}>
            <Like
              endUserLike={endUserLike}
              pid={pid}
              parentStyle={style.questionBottomIconOne}
              type={type}
            />
          </div>
          <div className={style.questionBottomIconOne} onClick={closeComment}>
            <img src="/images/comment-icon.svg" alt="" />
            <p>{t("comment")}</p>
          </div>

          <div className={style.questionBottomIconOne}>
            <Save
              endUserSave={endUserSave}
              pid={pid}
              parentStyle={style.questionBottomIconOne}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Reactions;

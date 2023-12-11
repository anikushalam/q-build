import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AllComments from "./AllComments";
import style from "./AllComments.module.css";

function Comment({ pid, commentCount, commentOpen, comment_turned }) {
  const [count, setCount] = useState(commentCount);
  const { t } = useTranslation();
  const commentCountIncrement = (value) => {
    setCount(value);
  };

  return (
    <>
      {commentOpen &&
        (comment_turned !== "On" ? (
          <section className={style.comment_not_open}>
            {t("comment_is_not_open_for_this_post")}
          </section>
        ) : (
          <div style={{ padding: "1vw" }}>
            <AllComments
              pid={pid}
              commentCount={count}
              commentCountIncrement={commentCountIncrement}
            />
          </div>
        ))}
    </>
  );
}

export default Comment;

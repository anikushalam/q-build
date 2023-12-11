import React, { useState } from "react";
import AllComments from "./AllComments";

function Comment({ pid, commentCount, commentOpen, type }) {
  const [count, setCount] = useState(commentCount);
  const commentCountIncrement = (value) => {
    setCount(value);
  };

  return (
    <>
      {commentOpen && (
        <div
          style={
            type === "repost" ? { padding: "1vw 0 0 0" } : { padding: "1vw" }
          }
        >
          <AllComments
            pid={pid}
            commentCount={count}
            commentCountIncrement={commentCountIncrement}
          />
        </div>
      )}
    </>
  );
}

export default Comment;

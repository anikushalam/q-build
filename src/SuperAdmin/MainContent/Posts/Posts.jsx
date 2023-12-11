import React from "react";
import ContentRow from "./ContentRow/ContentRow";
import style from "./Posts.module.css";
import Tabs from "./Tabs/SecondRow";

function Posts() {
  return (
    <div className={style.posts}>
      <Tabs />
      <ContentRow />
    </div>
  );
}

export default Posts;

import React from "react";
import style from "./ContentRow.module.css";
import ContentLeft from "./ContentLeft/ContentLeft";
import ContentRight from "./ContentRight/ContentRight";

function ContentRow() {
  return (
    <div className={style.contentRow}>
      <ContentRight />
      <ContentLeft />
    </div>
  );
}

export default ContentRow;

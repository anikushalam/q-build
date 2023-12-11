import React from "react";
import style from "./Terms.module.css";
import SigninHeader from "../Authentication/Login/Components/SigninHeader";
import Content from "./Content/Content";

function Terms() {
  return (
    <div className={style.terms}>
      <div className={style.header}>
        <SigninHeader />
      </div>

      <div className={style.container}>
        <Content />
      </div>
    </div>
  );
}

export default Terms;

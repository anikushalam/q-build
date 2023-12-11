import React, { useState } from "react";

import style from "./Save.module.css";

const Save = () => {
  const [saved, setSaved] = useState(false);

  const saveHandler = () => {
    setSaved(!saved);
  };

  const unsaveHandler = () => {
    setSaved(!saved);
  };

  return (
    <>
      {saved ? (
        <img
          src="/images/unbookmark-icon.svg"
          alt=""
          className={style.bookmarkImage}
          onClick={unsaveHandler}
        />
      ) : (
        <img
          src="/images/bookmark-icon.svg"
          alt=""
          className={style.bookmarkImage}
          onClick={saveHandler}
        />
      )}
    </>
  );
};

export default Save;

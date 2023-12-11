import React, { useState } from "react";

import style from "./Save.module.css";

const Save = () => {
  const [saved, setSaved] = useState(false);

  return (
    <>
      {saved ? (
        <img
          src="/images/unbookmark-icon.svg"
          alt=""
          className={style.bookmarkImage}
          onClick={() => setSaved(!saved)}
        />
      ) : (
        <img
          src="/images/bookmark-icon.svg"
          alt=""
          className={style.bookmarkImage}
          onClick={() => setSaved(!saved)}
        />
      )}
    </>
  );
};

export default Save;

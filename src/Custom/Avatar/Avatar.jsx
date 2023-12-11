import React from "react";
import style from "./Avatar.module.css";

const Avatar = ({ dynamicImage, customStyle }) => {
  return (
    <img
      src={dynamicImage}
      alt="Avatar icon"
      style={{ ...customStyle }}
      className={style.avatar_image}
    />
  );
};

export default Avatar;

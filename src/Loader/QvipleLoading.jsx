import React from "react";
import styles from "./QvipleLoader.module.css";
const QvipleLoading = ({ status }) => {
  return (
    <div className={styles.loaderGif}>
      <img
        src={
          status === "white"
            ? "/images/loader/loader-bg-white.gif"
            : "/images/loader/loader.gif"
        }
        alt="for load an items"
      />
    </div>
  );
};

export default QvipleLoading;

import React from "react";
import style from "./StringLength.module.css";

const MarkValue = ({ message, customStyle }) => {
  return (
    <section style={{ ...customStyle }} className={style.mark_container}>
      {message}
    </section>
  );
};

export default MarkValue;

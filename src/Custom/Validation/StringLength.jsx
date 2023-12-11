import React from "react";
import style from "./StringLength.module.css";
const StringLength = ({ valueLength, maxLength, customStyle }) => {
  return (
    <section style={{ ...customStyle }} className={style.string_container}>
      {valueLength?.length ?? 0}/{maxLength}
    </section>
  );
};

export default StringLength;

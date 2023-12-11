import React from "react";
import style from "./InsChat.module.css";
import Navbar from "./Navbar/Navbar";
import Mainbody from "./Mainbody/Mainbody";

function InsChat() {
  return (
    <div className={style.insChat}>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <Mainbody />
    </div>
  );
}

export default InsChat;

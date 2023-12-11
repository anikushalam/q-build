import React from "react";
import style from "./Sidebarbottom.module.css";

function Item({ img, label, content }) {
  const clength = content?.length;

  let cshort;
  let cResult = "";

  if (clength > 35) {
    cshort = content.split(" ");

    for (let i = 0; i < cshort.length; i++) {
      if (cResult.length >= 50) {
        break;
      }

      cResult = cResult.concat(" ", cshort[i]);
    }
  }

  return (
    <div className={style.item}>
      <img src={img} alt="" />
      <div className={style.itemText}>
        {clength > 35 ? (
          <h6 className={clength > 27 ? style.hup : style.hnormal}>
            {cResult}..
          </h6>
        ) : (
          <h6 className={clength > 27 ? style.hup : style.hnormal}>
            {content}
          </h6>
        )}
        <p className={clength > 27 ? style.pdown : style.pnormal}>{label}</p>
      </div>
    </div>
  );
}

function Sidebarbottom({ userData }) {
  // const userid = localStorage.getItem("user");

  return (
    <div className={style.sidebarbottom}>
      <Item
        img="/images/member_tab/class/default_avatar.svg"
        label="Dean"
        content="Abhiskek Rana"

        // {userData ? userData?.user?.userDateOfBirth : ""}
      />
    </div>
  );
}

export default Sidebarbottom;

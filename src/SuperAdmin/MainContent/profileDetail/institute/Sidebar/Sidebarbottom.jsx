import React from "react";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./Sidebarbottom.module.css";

function Item({ index, img, label, content }) {
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
    <div className={style.item} index={index}>
      <img src={
        img?.photoId !== '1'
        ? `${imageShowUrl}/${img?.profilePhoto}`
        : '/images/demo_users/user1.svg'
      } alt="Dispay Person" />
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

function Sidebarbottom({ userData, bottomData }) {
  // const userid = localStorage.getItem("user");

  return (
    <div className={style.sidebarbottom}>
      {bottomData?.displayPersonList?.map((dt, index) => (
      <Item
        index={index}
        img={dt?.displayUser}
        label={dt?.displayTitle}
        content={dt?.displayUser?.userLegalName}

        // {userData ? userData?.user?.userDateOfBirth : ""}
      />
      ))}
    </div>
  );
}

export default Sidebarbottom;

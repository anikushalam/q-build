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
        img="/images/sidebar/bday-icon.svg"
        label="Birthday"
        content={userData ? userData?.userDateOfBirth : ""}

        // {userData ? userData?.user?.userDateOfBirth : ""}
      />
      <Item
        img="/images/sidebar/head-icon.svg"
        label="Gender"
        content={userData ? userData?.userGender : ""}
      />
      <Item
        img="/images/sidebar/location-icon.svg"
        label={userData ? userData?.userAddress : ""}
        content="Location"
      />
      <Item
        img="/images/sidebar/mail-icon.svg"
        label="Email"
        content={userData ? userData?.userEmail : ""}
      />
      <Item
        img="/images/sidebar/cap-icon.svg"
        label="Education and Work"
        content={userData ? userData?.userEducation : ""}
      />
      <Item
        img="/images/sidebar/sports-icon.svg"
        label="Hobbies and Interest"
        content={userData ? userData?.userHobbies : ""}
      />
    </div>
  );
}

export default Sidebarbottom;

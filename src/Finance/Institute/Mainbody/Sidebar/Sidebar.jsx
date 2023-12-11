import React from "react";
import { imageShowUrl } from "../../../../services/BaseUrl";
import { Link } from "react-router-dom";

import style from "./Sidebar.module.css";

function Item({ value, name, img, type, photoId }) {
  return (
    <div className={style.sidebarbottomitem}>
      {photoId ? (
        <img
          alt="not found"
          src={
            photoId !== "1"
              ? `${imageShowUrl}/${img}`
              : "/images/blue-finance.svg"
          }
        />
      ) : (
        <img alt="not found" src={img} />
      )}
      <div>
        <p className={type === "name" ? style.namee : style.mail}>{value}</p>
        <p className={style.desig}>{name}</p>
      </div>
    </div>
  );
}

const Sidebar = ({ sideDetail, insName }) => {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarback}>
        <Link to={`/q/${insName}/feed`}>
          <div className={style.sidebarbackflex}>
            <img src="/images/arr-left-white.svg" alt="" />
            <h6>Go Back</h6>
          </div>
        </Link>
      </div>

      <div className={style.sidebartopp}>
        <div className={style.sidebartoppHead}>
          <img src="/images/profileAndCover/finance-cover.svg" alt="" />

          <div
            className={`${style.imgcontainer} ${style.imgposition}`}
            // style={{ backgroundImage: "" }}
          >
            <img
              alt="not found"
              src={
                sideDetail?.photoId !== "1"
                  ? `${imageShowUrl}/${sideDetail?.photo}`
                  : "/images/profileAndCover/fiance-profile-img.svg"
              }
            />
          </div>
        </div>

        <img
          src="/images/menu-dots-icon.svg"
          className={style.menudots}
          alt=""
        />

        <div className={style.textContainerr}>
          <h6>Finance Department</h6>
        </div>
      </div>

      <div className={style.sidebarbottom}>
        <div className={style.sidebarbottomhead}>About Department</div>
        <div className={style.sidebarbottomcontent}>
          <Item
            value={`${sideDetail?.financeHead?.staffFirstName} ${
              sideDetail?.financeHead?.staffMiddleName
                ? sideDetail?.financeHead?.staffMiddleName
                : ""
            } ${sideDetail?.financeHead?.staffLastName}`}
            name="Finance Head"
            img={sideDetail?.financeHead?.staffProfilePhoto}
            type="name"
            photoId={sideDetail?.financeHead?.photoId}
          />
          <Item
            value={sideDetail?.financeEmail}
            name="E-mail id"
            img="/images/mail-42-icon.svg"
            type="mail"
          />
          <Item
            value={sideDetail?.financePhoneNumber}
            name="Contact Number"
            img="/images/call-42-icon.svg"
            type="phone"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

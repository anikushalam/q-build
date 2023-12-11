import React from "react";
import { imageShowUrl } from "../services/BaseUrl";
import style from "./InstituteHostel.module.css";

const WardenCard = ({ warden }) => {
  return (
    <div className={style.hostel_warden_card}>
      <img
        src={
          warden?.staffProfilePhoto
            ? `${imageShowUrl}/${warden?.staffProfilePhoto}`
            : "/images/member_tab/class/default_avatar.svg"
        }
        alt=""
      />
      <div className={style.warden_card_text}>
        <h6>{`${warden?.staffFirstName ?? ""} ${
          warden?.staffMiddleName ?? ""
        } ${warden?.staffLastName ?? ""}`}</h6>
        <p>
          {warden?.hostelUnitDepartment?.map((unit, index) => (
            <span key={unit?._id}>
              {index === 0 ? "" : ", "}
              {unit?.hostel_unit_name ?? ""}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default WardenCard;

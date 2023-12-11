import React from "react";
import { imageShowUrl } from "../services/BaseUrl";
import style from "./InstituteHostel.module.css";
import { Link, useParams } from "react-router-dom";

const HostelUnitCard = ({ hostelUnit, carryParentState }) => {
  const params = useParams();
  return (
    <Link
      to={`/q/${params.username}/hostel?a=unit&n=info`}
      state={{
        ...carryParentState,
        huid: hostelUnit?._id,
      }}
    >
      <div className={style.hostel_warden_card}>
        <img
          src={
            hostelUnit?.hostel_unit_head?.staffProfilePhoto
              ? `${imageShowUrl}/${hostelUnit?.hostel_unit_head?.staffProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
          alt=""
        />
        <div className={style.warden_card_text}>
          <h6>{hostelUnit?.hostel_unit_name ?? ""}</h6>
          <p>{`${hostelUnit?.hostel_unit_head?.staffFirstName ?? ""} ${
            hostelUnit?.hostel_unit_head?.staffMiddleName ?? ""
          } ${hostelUnit?.hostel_unit_head?.staffLastName ?? ""}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default HostelUnitCard;

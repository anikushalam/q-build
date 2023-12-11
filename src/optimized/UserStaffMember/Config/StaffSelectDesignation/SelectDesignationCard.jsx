import React from "react";
import { Link, useParams } from "react-router-dom";
import style from "./../StaffMemberConfig.mnodule.css";
import { assestsUserMemberUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
const SelectDesignationCard = ({ urlKey, label, urlIcon, state }) => {
  const params = useParams();
  return (
    <Link to={`/${params.username}/${urlKey}`} state={state}>
      <div className={style.sm_config_card}>
        <img src={`${assestsUserMemberUrl}/${urlIcon}`} alt="member icon" />
        <h6>{label}</h6>
      </div>
    </Link>
  );
};

export default memo(SelectDesignationCard);

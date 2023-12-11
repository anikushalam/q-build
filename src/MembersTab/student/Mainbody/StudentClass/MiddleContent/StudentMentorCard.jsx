import React from "react";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "../StudentAbout/StudentAbout.module.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

const StudentMentorCard = ({ studentMentor, carryParentState, mid }) => {
  const { t } = useTranslation();
  const params = useParams();

  return (
    <div className={`${style.memberItem} ${style.classTeacherItem}`}>
      <div className={style.issuedBookItemMidleft}>
        <div className={style.imgcontainer}>
          <img
            src={
              studentMentor?.staffProfilePhoto
                ? `${imageShowUrl}/${studentMentor?.staffProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt=""
          />
        </div>
        <div className={style.issuedBookItemMidright}>
          <h6>
            {`${studentMentor?.staffFirstName} ${
              studentMentor?.staffMiddleName
                ? studentMentor?.staffMiddleName
                : ""
            } ${studentMentor?.staffLastName}`}
          </h6>
          <p>{t("desi_mentor")}</p>
        </div>
      </div>
      <Link
        to={`/q/${params.username}/member/student/class?a=mentor`}
        state={{ ...carryParentState, mid: mid }}
      >
        <button className={style.query_btn}>{t("view_mentor")}</button>
      </Link>
    </div>
  );
};

export default StudentMentorCard;

import React from "react";
import style from "../PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import { Link, useParams } from "react-router-dom";
const StudentCard = ({ stu, viewAs }) => {
  const { t } = useTranslation();
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/student/profile`}
      state={{ sid: stu?._id, viewAs: "SUBJECT_TEACHER" }}
    >
      <div className={style.student_container}>
        <img
          src={
            stu?.studentProfilePhoto
              ? `${imageShowUrl}/${stu?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
          loading="lazy"
          alt="avatar icon"
        />

        <div className={style.student_info_container}>
          <div className={style.student_info_text}>
            <h6>
              {stu?.studentFirstName}{" "}
              {stu?.studentMiddleName ? stu?.studentMiddleName : " "}{" "}
              {stu?.studentLastName}
            </h6>
            {viewAs === "PROMOTE" ? "" : <p>{stu?.studentGender ?? ""} </p>}
          </div>
          <div className={style.student_info_text}>
            {viewAs === "PROMOTE" ? (
              <p>
                {t("classes")}
                {": "}
                {`${stu?.studentClass?.className ?? ""} - ${
                  stu?.studentClass?.classTitle ?? ""
                }`}
              </p>
            ) : (
              <>
                <p>
                  {t("roll_number")} {stu?.studentROLLNO ?? ""}
                </p>
                <p>
                  {t("gr_number")}
                  {stu?.studentGRNO ?? ""}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StudentCard;

import React from "react";
import { useTranslation } from "react-i18next";
import style from "../Mentor.module.css";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { imageShowUrl } from "../../../../../../services/BaseUrl";

const MentorStudentCard = ({
  viewAs,
  customStyleContainer,
  mentee,
  setOpenMenteeMenu,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className={style.student_card_container}
        style={customStyleContainer}
      >
        <img
          src={
            mentee?.studentProfilePhoto
              ? `${imageShowUrl}/${mentee?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
          alt="student avatar"
          loading="lazy"
        />
        <div className={style.student_container_inner}>
          <h6>{`${mentee?.studentFirstName ?? ""} ${
            mentee?.studentMiddleName ?? ""
          } ${mentee?.studentLastName ?? ""}`}</h6>
          <div className={style.student_inner_bottom}>
            <p
              style={{
                marginTop: "0.6rem",
              }}
            >
              {`${mentee?.total_query ?? 0} `}
              {t("queries_pending")}
            </p>
            {viewAs === "MENTOR_DETAIL" && (
              <button
                className={style.remove_btn}
                onClick={() => setOpenMenteeMenu(mentee)}
              >
                {t("remove")}
              </button>
            )}
          </div>
        </div>
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.6rem",
        }}
      />
    </>
  );
};

export default MentorStudentCard;

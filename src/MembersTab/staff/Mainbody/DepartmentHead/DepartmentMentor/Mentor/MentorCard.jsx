import React from "react";
import style from "../Mentor.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import DepartmentTabChangeLink from "../../DepartmentTabChangeLink";

const MentorCard = ({
  viewAs,
  customStyleContainer,
  mentor,
  carryParentState,
}) => {
  const { t } = useTranslation();
  return (
    <>
      {viewAs === "MENTOR_DETAIL" ? (
        <div
          className={style.mentor_card_container}
          style={customStyleContainer}
        >
          <img
            src={
              mentor?.mentor_head?.staffProfilePhoto
                ? `${imageShowUrl}/${mentor?.mentor_head?.staffProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt="mentor avatar"
          />
          <div className={style.mentor_container_inner}>
            <h6>{`${mentor?.mentor_head?.staffFirstName ?? ""} ${
              mentor?.mentor_head?.staffMiddleName ?? ""
            } ${mentor?.mentor_head?.staffLastName ?? ""}`}</h6>
            <p>
              {t("mentees")} {mentor?.mentees_count ?? 0}
            </p>
            <p>
              {t("queries_pending")} {mentor?.pending_query_count ?? 0}
            </p>
          </div>
          <div className={style.mentor_rating}>
            <img src="/images/department/rating-icon.svg" alt="ating icon" />
            <p>
              {mentor?.rating === 0 ? "" : mentor?.rating}
              {` `} {t("rating")}
            </p>
          </div>
        </div>
      ) : (
        <DepartmentTabChangeLink
          carryParentState={{
            ...carryParentState,
            mid: mentor?._id,
          }}
          activeTab={"mentor&n=detail"}
        >
          <div
            className={style.mentor_card_container}
            style={customStyleContainer}
          >
            <img
              src={
                mentor?.mentor_head?.staffProfilePhoto
                  ? `${imageShowUrl}/${mentor?.mentor_head?.staffProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt="mentor avatar"
            />
            <div className={style.mentor_container_inner}>
              <h6>{`${mentor?.mentor_head?.staffFirstName ?? ""} ${
                mentor?.mentor_head?.staffMiddleName ?? ""
              } ${mentor?.mentor_head?.staffLastName ?? ""}`}</h6>
              <p>
                {t("mentees")} {mentor?.mentees_count ?? 0}
              </p>
              <p>
                {t("queries_pending")} {mentor?.pending_query_count ?? 0}
              </p>
            </div>
          </div>
        </DepartmentTabChangeLink>
      )}
    </>
  );
};

export default MentorCard;

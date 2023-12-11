import React from "react";
import style from "../PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../services/BaseUrl";

const OsReminderStudentCard = ({
  onSelectStudent,
  stu,
  selectedId,
  isMessage,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={
        selectedId?.includes(stu?._id)
          ? ` ${style.promote_student_card} ${style.promote_student_cardActive}`
          : style.promote_student_card
      }
      onClick={() => (isMessage ? null : onSelectStudent(stu?._id))}
      style={{
        width: "100%",
      }}
    >
      <div
        className={style.promote_student_card_text}
        style={{
          width: "100%",
        }}
      >
        <img
          alt=""
          src={
            stu?.studentProfilePhoto
              ? `${imageShowUrl}/${stu?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
        />
        <div className={style.promote_student_check_container}>
          <div className={style.promote_student_name}>
            <p>
              {stu?.studentFirstName}{" "}
              {stu?.studentMiddleName ? stu?.studentMiddleName : " "}{" "}
              {stu?.studentLastName}
            </p>
            <p>
              {t("gr_number")}
              {stu?.studentGRNO}
            </p>
          </div>
          {isMessage ? null : (
            <div className={style.promote_student_check}>
              <div className={style.promote_student_name}>
                {selectedId?.includes(stu?._id) ? (
                  <img
                    className={style.department_checkbox}
                    src="/images/checkbox-icon.svg"
                    alt="icon"
                  />
                ) : (
                  <img
                    className={style.department_checkbox}
                    src="/images/box-icon.svg"
                    alt="icon"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OsReminderStudentCard;

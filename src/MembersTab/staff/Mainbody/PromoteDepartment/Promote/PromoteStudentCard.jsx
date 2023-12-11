import React from "react";
import style from "../PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../services/BaseUrl";

const PromoteStudentCard = ({ onSelectStudent, stu, promoteData }) => {
  const { t } = useTranslation();

  return (
    <div
      className={
        promoteData?.students?.includes(stu?._id)
          ? ` ${style.promote_student_card} ${style.promote_student_cardActive}`
          : style.promote_student_card
      }
      onClick={() => onSelectStudent(stu?._id)}
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
          <div className={style.promote_student_check}>
            <div className={style.promote_student_name}>
              {stu?.fee_structure?.applicable_fees ? (
                <p>
                  {t("applicable_fees_only")}
                  {` `}
                  {t("rs")}.{stu?.fee_structure?.applicable_fees ?? 0}
                </p>
              ) : (
                ""
              )}

              <p>
                {t("paid_fees")} {": "}
                {t("rs")}.{stu?.remainingFeeList?.[0]?.paid_fee ?? 0}
              </p>
            </div>
            <div className={style.promote_student_name}>
              {promoteData?.students?.includes(stu?._id) ? (
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
        </div>
      </div>
    </div>
  );
};

export default PromoteStudentCard;

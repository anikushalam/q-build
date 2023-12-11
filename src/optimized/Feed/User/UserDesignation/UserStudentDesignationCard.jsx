import {
  assestsFeedUrl,
  assestsUtilityUrl,
} from "@/Services/UrlConfig/AssestsBaseUrl";
import style from "../UserFeed.module.css";
import { useTranslation } from "react-i18next";
import { memo } from "react";

const UserStudentDesignationCard = ({ studentClass, rollNumber }) => {
  const { t } = useTranslation();
  return (
    <div className={style.ufu_application}>
      <div className={style.ufu_your_application}>
        <img
          src={`${assestsFeedUrl}/class-teacher.svg`}
          alt="your icon"
          style={{
            borderRadius: "0",
          }}
        />
        <div className={style.ufu_your_application_inner}>
          <h6>
            {t("your_class")}
            {": "}
            {studentClass?.className ?? ""} {studentClass?.classTitle}
          </h6>
          <p>
            {studentClass?.batch?.batchName ?? ""}
            {" | "}
            {t("roll_no")} {rollNumber}
          </p>
        </div>
      </div>
      <div
        className={style.ufu_application_form}
        style={{
          backgroundColor: "rgba(18, 18, 18, 0.20)",
        }}
      >
        <h6>{t("click_to_view_fees_academics_and_more")}</h6>
        <img src={`${assestsUtilityUrl}/next.svg`} alt="more icon" />
      </div>
    </div>
  );
};

export default memo(UserStudentDesignationCard);

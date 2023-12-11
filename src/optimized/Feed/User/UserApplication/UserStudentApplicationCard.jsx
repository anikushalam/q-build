import {
  assestsUserMemberUrl,
  assestsUtilityUrl,
} from "@/Services/UrlConfig/AssestsBaseUrl";
import style from "../UserFeed.module.css";
import { useTranslation } from "react-i18next";

const UserStudentApplicationCard = () => {
  const { t } = useTranslation();
  return (
    <div className={style.ufu_application}>
      <div className={style.ufu_your_application}>
        <img
          src={`${assestsUserMemberUrl}/member-profile.svg`}
          alt="your icon"
          style={{
            borderRadius: "0",
          }}
        />
        <div className={style.ufu_your_application_inner}>
          <h6>{t("your_class")}</h6>
          <p>
            {" | "}
            {t("roll_no")}
          </p>
        </div>
      </div>
      <div className={style.ufu_application_form}>
        <h6>{t("click_here_to_fill_admission_application_form")}</h6>
        <img src={`${assestsUtilityUrl}/next.svg`} alt="more icon" />
      </div>
    </div>
  );
};

export default UserStudentApplicationCard;

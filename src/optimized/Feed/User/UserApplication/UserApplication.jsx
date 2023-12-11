import {
  assestsFeedUrl,
  assestsUserMemberUrl,
  assestsUtilityUrl,
} from "@/Services/UrlConfig/AssestsBaseUrl";
import style from "../UserFeed.module.css";
import { useTranslation } from "react-i18next";

const UserApplication = () => {
  const { t } = useTranslation();
  return (
    <div className={style.ufu_application}>
      <div className={style.ufu_your_application}>
        <img
          src={`${assestsFeedUrl}/your-admission.svg`}
          alt="your icon"
          style={{
            borderRadius: "0",
          }}
        />
        <div className={style.ufu_your_application_inner}>
          <h6>{t("your_admission")}</h6>
          <p>{t("admission_application_and_process_more")}</p>
        </div>
      </div>
      <div className={style.ufu_application_form}>
        <h6>{t("click_here_to_fill_admission_application_form")}</h6>
        <img src={`${assestsUtilityUrl}/next.svg`} alt="more icon" />
      </div>
    </div>
  );
};

export default UserApplication;

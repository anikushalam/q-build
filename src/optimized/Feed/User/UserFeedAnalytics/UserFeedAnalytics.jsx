import { assestsFeedUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import style from "../UserFeed.module.css";
import { useTranslation } from "react-i18next";
import NavbarLanguage from "@/Navbar/NavbarLanguage";
const UserFeedAnalytics = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={style.uf_ufa_container}>
        <NavbarLanguage />
        <div className={style.uf_ufa_container_inner}>
          <img src={`${assestsFeedUrl}/analytic.svg`} alt="icon" />
          <h6>{t("swtich_to_analytics")}</h6>
        </div>
        <div className={style.uf_ufa_container_inner}>
          <img src={`${assestsFeedUrl}/trending.svg`} alt="icon" />
          <h6>{t("see_whats_trending")}</h6>
        </div>
      </div>
    </>
  );
};

export default UserFeedAnalytics;

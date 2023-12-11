import DashboardContentLayout from "@/Layout/Dashboard/DashboardContentLayout";
import style from "./UserFeed.module.css";
import { assestsNavbarUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import { useTranslation } from "react-i18next";
import UserApplication from "./UserApplication/UserApplication";
import UserFeedAnalytics from "./UserFeedAnalytics/UserFeedAnalytics";
import DashboardLayout from "@/Layout/Dashboard/DashboardLayout";
import UserActiveMemberProfile from "./UserActiveMemberProfile";
import UserAllStats from "./UserFeedAnalytics/UserAllStats";
const UserFeed = () => {
  const { t } = useTranslation();
  return (
    <DashboardLayout activeTab="dashboard">
      <div className={style.user_feed_member}>
        <DashboardContentLayout>
          <div className={style.uf_search}>
            <input
              className={style.uf_search_input}
              type="text"
              placeholder={t("search")}
            />
            <img
              src={`${assestsNavbarUrl}/navbar-search.svg`}
              alt="search icon"
            />
          </div>
          <UserApplication />
          <UserActiveMemberProfile />
        </DashboardContentLayout>
      </div>
      <div className={style.user_feed_analytic}>
        <UserFeedAnalytics />
        <UserAllStats />
      </div>
    </DashboardLayout>
  );
};

export default UserFeed;

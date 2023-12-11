import UserDrawer from "@/Feed/User/UserDrawer";
import style from "./StaffMemberConfig.module.css";
import UserMemberGo from "@/Layout/UserMemberTab/UserMemberGo";
import UserMemberDesignationWrapper from "@/Layout/UserMemberTab/UserMemberDesignationWrapper";
import UserMemberProfileWrapper from "@/Layout/UserMemberTab/UserMemberProfileWrapper";
import {
  assestsFeedUrl,
  assestsUserFinanceUrl,
} from "@/Services/UrlConfig/AssestsBaseUrl";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { imageShowUrl } from "@/Services/UrlConfig/BaseUrl";
import { systemMeasure } from "@/Utils/Functions/systemMeasure";
const StaffMemberConfig = ({ children }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const { width, height } = systemMeasure();

  return (
    <div className={style.smc}>
      <div
        className={style.smc_drawer}
        style={{
          "--dl-height": `${height - 35}px`,
          width: width < 1280 ? "50px" : "fit-content",
          flex: width < 1280 ? "none" : "0.7 0.7",
        }}
      >
        <UserDrawer activeTab="member" />
      </div>
      <div className={style.smc_content_main}>
        <div className={style.smc_content}>
          <UserMemberGo />
          <UserMemberDesignationWrapper>
            <img
              src={`${assestsUserFinanceUrl}/manager.svg`}
              alt="finance icon"
            />
            <h6>{t("finance_manager")}</h6>
          </UserMemberDesignationWrapper>

          <UserMemberProfileWrapper>
            <img
              src={
                getQuery.state?.staffProfilePhoto
                  ? `${imageShowUrl}/${getQuery.state?.staffProfilePhoto}`
                  : `${assestsFeedUrl}/feed-user-avatar.svg`
              }
              alt="finance icon"
            />
            <h6>{t("profile_leaves_and_more")}</h6>
          </UserMemberProfileWrapper>
        </div>
        <div className={style.smc_content}>{children}</div>
      </div>
    </div>
  );
};

export default StaffMemberConfig;

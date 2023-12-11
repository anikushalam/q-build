import React, { useEffect } from "react";
import style from "./SiteEdit.module.css";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import SiteTab from "./SiteTab";
import SiteLandingPage from "./SiteLandingPage";
import ActiveTabs from "./ActiveTabs";
import SiteContacts from "./SiteContacts";
import Navbar from "../../../../Dashboard/InsDashboard/Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useWebsiteInfoGetByInstitute } from "../../../../hooks/setting-api";
import SiteOpener from "./SiteOpener";
import OtherSiteInfo from "./OtherSiteInfo";

const SiteEdit = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const id = useSelector((state) => state.idChange.id);
  const { websiteInfoGetByInstitute, websiteInfoGetByInstituteRefetch } =
    useWebsiteInfoGetByInstitute({
      id: id,
      skip: !id,
    });
  useEffect(() => {
    if (id) websiteInfoGetByInstituteRefetch();
  }, [id, websiteInfoGetByInstituteRefetch]);
  const onBack = () => {
    navigate(-1);
  };

  // console.info(getQuery?.search?.substring(3));

  return (
    <div className={style.bgContainer}>
      <div className={style.navbar}>
        <Navbar status="profile" />
      </div>
      <div className={style.container}>
        <div className={style.containerhead}>
          <h6>{t("update_website_info")}</h6>
          <img src="/images/close-post-icon.svg" alt="" onClick={onBack} />
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />

        <div className={style.containercontent}>
          <SiteTab />
          <div className={style.container_inner_content}>
            {getQuery?.search?.substring(3) === "landing" && (
              <SiteLandingPage
                instituteId={id ?? ""}
                websiteLooks={
                  websiteInfoGetByInstitute?.one_ins?.website_looks ?? ""
                }
              />
            )}
            {getQuery?.search?.substring(3) === "tabs" && (
              <ActiveTabs
                websiteTab={
                  websiteInfoGetByInstitute?.one_ins?.website_active_tab ?? ""
                }
                instituteId={id ?? ""}
                sub_domain={
                  websiteInfoGetByInstitute?.one_ins?.sub_domain ?? ""
                }
              />
            )}
            {getQuery?.search?.substring(3) === "contact" && (
              <SiteContacts
                contactList={
                  websiteInfoGetByInstitute?.one_ins?.contact_list ?? ""
                }
                instituteId={id ?? ""}
              />
            )}
            {getQuery?.search?.substring(3) === "openers" && (
              <SiteOpener instituteId={id ?? ""} />
            )}
            {getQuery?.search?.substring(3, 9) === "others" && (
              <OtherSiteInfo instituteId={id ?? ""} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteEdit;

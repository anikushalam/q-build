import React from "react";
import Card from "../../Dashboard/InsDashboard/Components/Mainbody/SidebarRight/components/Card";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "./InstituteSetting.module.css";

const InstituteSettingTab = () => {
  const { t } = useTranslation();
  const params = useParams();

  return (
    <div className={style.institute_setting_tab}>
      <div className={style.institute_admission}>
        <Link to={`/q/${params.username}/staff?a=setting`}>
          <Card
            name={t("staff_form_setting")}
            img="/images/member_tab/institute/form-setting-icon.svg"
            customStyle={{
              height: "100%",
            }}
          />
        </Link>
      </div>
      <div className={style.institute_admission}>
        <Link to={`/q/${params.username}/student?a=setting`}>
          <Card
            name={t("student_form_setting")}
            img="/images/member_tab/institute/form-setting-icon.svg"
            customStyle={{
              height: "100%",
            }}
          />
        </Link>
      </div>
      <div className={style.institute_admission}>
        <Link to={`/q/${params.username}/settings`}>
          <Card
            name={t("profile_form_setting")}
            img="/images/member_tab/institute/profile-setting-icon.svg"
            customStyle={{
              height: "100%",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default InstituteSettingTab;

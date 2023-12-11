import React, { useEffect, useState } from "react";
import Card from "../../../../Dashboard/InsDashboard/Components/Mainbody/SidebarRight/components/Card";
import { useTranslation } from "react-i18next";
import style from "./SiteEdit.module.css";
import SelectSiteDepartment from "./SiteDepartment/SelectSiteDepartment";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useOneInstituteDashboard } from "../../../../hooks/dashboard/dashboard-api";
import { useWebsiteInfoGetByInstitute } from "../../../../hooks/setting-api";

const OtherSiteInfo = () => {
  const { t } = useTranslation();
  const id = useSelector((state) => state.idChange.id);
  const params = useParams();
  const [department, setDepartment] = useState(false);

  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: id,
      skip: !id,
    });
  const { websiteInfoGetByInstitute, websiteInfoGetByInstituteRefetch } =
    useWebsiteInfoGetByInstitute({
      id: id,
      skip: !id,
    });
  useEffect(() => {
    if (id) {
      oneInstituteDashboardRefetch();
    }
  }, [id, oneInstituteDashboardRefetch]);
  useEffect(() => {
    if (id) websiteInfoGetByInstituteRefetch();
  }, [id, websiteInfoGetByInstituteRefetch]);

  const onDepartmentToggle = () => {
    setDepartment((pre) => !pre);
  };
  // console.info(websiteInfoGetByInstitute?.one_ins);
  return (
    <>
      <div className={style.other_tab}>
        <div className={style.department} onClick={onDepartmentToggle}>
          <Card
            name={t("department")}
            img="/images/department-sidebar-icon.svg"
            customStyle={{
              height: "100%",
            }}
          />
        </div>
        <div className={style.admission}>
          <Link
            to={`/q/${params.username}/admission?a=site`}
            state={{
              aid: oneInstituteDashboard?.institute?.admissionDepart?.[0],
            }}
          >
            <Card
              name={t("admission")}
              img="/images/admision-sidebar-icon.svg"
              customStyle={{
                height: "100%",
              }}
            />
          </Link>
        </div>
        <div className={style.library}>
          <Link
            to={`/q/${params.username}/library?a=site`}
            state={{
              lid: oneInstituteDashboard?.institute?.library?.[0],
            }}
          >
            <Card
              name="Library"
              img="/images/liabrary-icon.svg"
              customStyle={{
                height: "100%",
              }}
            />
          </Link>
        </div>
        <div className={style.finance}>
          <Link
            to={`/q/${params.username}/hostel?a=site`}
            state={{
              hid: oneInstituteDashboard?.institute?.hostelDepart?.[0],
            }}
          >
            <Card
              name={t("hostel")}
              img="/images/hostel-institute-icon.svg"
              customStyle={{
                height: "100%",
              }}
            />
          </Link>
        </div>
        <div className={style.finance}>
          <Link
            to={`/q/${params.username}/transport?a=site`}
            state={{
              tid: oneInstituteDashboard?.institute?.transportDepart?.[0],
            }}
          >
            <Card
              name={t("transport")}
              img="/images/sidebar/dashboard-sidebar/transport.svg"
              customStyle={{
                height: "100%",
              }}
            />
          </Link>
        </div>

        <div className={style.admission}>
          <Link
            to={`/q/${params.username}/facilities?a=site`}
            state={{
              fid: websiteInfoGetByInstitute?.one_ins?.facilities_module?._id,
            }}
          >
            <Card
              name={t("facilities")}
              img="/images/admision-sidebar-icon.svg"
              customStyle={{
                height: "100%",
              }}
            />
          </Link>
        </div>

        <div className={style.admission}>
          <Link
            to={`/q/${params.username}/academics?a=site`}
            state={{
              aid: websiteInfoGetByInstitute?.one_ins?.academic_module?._id,
            }}
          >
            <Card
              name={t("academics_")}
              img="/images/admision-sidebar-icon.svg"
              customStyle={{
                height: "100%",
              }}
            />
          </Link>
        </div>
        <div className={style.admission}>
          <Link
            to={`/q/${params.username}/governence?a=site`}
            state={{
              gid: oneInstituteDashboard?.institute?.admissionDepart?.[0],
            }}
          >
            <Card
              name={t("governence")}
              img="/images/admision-sidebar-icon.svg"
              customStyle={{
                height: "100%",
              }}
            />
          </Link>
        </div>

        <div className={style.admission}>
          <Link
            to={`/q/${params.username}/nss?a=site`}
            state={{
              nid: websiteInfoGetByInstitute?.one_ins?.nss_module?._id,
            }}
          >
            <Card
              name={t("nss")}
              img="/images/admision-sidebar-icon.svg"
              customStyle={{
                height: "100%",
              }}
            />
          </Link>
        </div>
      </div>
      {department && <SelectSiteDepartment onClose={onDepartmentToggle} />}
    </>
  );
};

export default OtherSiteInfo;

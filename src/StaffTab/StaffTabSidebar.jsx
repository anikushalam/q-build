import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useInstituteStatsCount } from "../hooks/institute/institute-staff-student-api";
import { imageShowUrl } from "../services/BaseUrl";
import CommonCardSideWrapper from "../Sidebar/CommonCardSideWrapper";
import CommonSidebarBackground from "../Sidebar/CommonSidebarBackground";
import CommonSideCard from "../Sidebar/CommonSideCard";
import Goback from "../Sidebar/Goback";
import { Link, useParams } from "react-router-dom";

const StaffTabSidebar = ({ activeIndex }) => {
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const params = useParams();
  const { instituteStatsCount, instituteStatsCountRefetch } =
    useInstituteStatsCount({
      id: ids?.id,
      skip: !ids?.id,
    });

  useEffect(() => {
    if (ids?.id) instituteStatsCountRefetch();
  }, [ids?.id, instituteStatsCountRefetch]);

  // console.info("instituteStatsCount", instituteStatsCount);

  return (
    <>
      <Goback whichType="PREVIOUS_GO" />
      <CommonSidebarBackground
        dynamicImage={
          instituteStatsCount?.stats?.insProfileCoverPhoto
            ? `${imageShowUrl}/${instituteStatsCount?.stats?.insProfileCoverPhoto}`
            : "/images/profileAndCover/department-cover.svg"
        }
      />
      <CommonCardSideWrapper>
        <Link to={`/q/${params.username}/department`}>
          <CommonSideCard
            cardAsHead={false}
            heading={t("departments")}
            description={t("dept_in_ins")}
            count={instituteStatsCount?.stats?.departmentCount || 0}
            customStyleCard={{
              borderRadius: "18px 18px 0px 0px",
              border: "none",
              marginTop: "-2.49vw",
              cursor: "pointer",
            }}
            asActive={activeIndex === 0 && true}
          />
        </Link>
      </CommonCardSideWrapper>
      <Link to={`/q/${params.username}/staff`}>
        <CommonSideCard
          cardAsHead={false}
          heading={t("total_staffs")}
          description={t("all_staff_working")}
          count={instituteStatsCount?.stats?.staffCount || 0}
          asActive={activeIndex === 1 && true}
          customStyleCard={{
            cursor: "pointer",
          }}
        />
      </Link>
      <Link to={`/q/${params.username}/student`}>
        <CommonSideCard
          cardAsHead={false}
          heading={t("total_students")}
          description={t("current_plus")}
          count={instituteStatsCount?.stats?.studentCount || 0}
          customStyleCard={{
            // borderRadius: "0 0 12px 12px",
            // borderBottom: "0.4px solid rgba(0, 0, 0, 0.15)",
            cursor: "pointer",
          }}
          asActive={activeIndex === 2 && true}
        />
      </Link>
      <Link to={`/q/${params.username}/student?a=unapproved`}>
        <CommonSideCard
          cardAsHead={false}
          heading={t("total_unapproved_students")}
          description={t("current_plus")}
          count={instituteStatsCount?.stats?.un_approved_student_count || 0}
          customStyleCard={{
            borderRadius: "0 0 12px 12px",
            borderBottom: "0.4px solid rgba(0, 0, 0, 0.15)",
            cursor: "pointer",
          }}
          asActive={activeIndex === 3 && true}
        />
      </Link>
    </>
  );
};

export default StaffTabSidebar;

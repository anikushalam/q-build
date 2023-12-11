import React from "react";
import style from "../../DepartmentHead/Exminations/Exminations.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import { useParams, useSearchParams } from "react-router-dom";
import CoAttainmentSetting from "./CoAttainmentSetting";
import CoAttainmentTable from "./CoAttainmentTable/CoAttainmentTable";
import CopoMappingAttainment from "./CopoMappingAttainment/CopoMappingAttainment";

const SubjectCoAttainment = ({ sid, cid, carryParentState, smid }) => {
  const { t } = useTranslation();
  const params = useParams();
  const tabList = [
    {
      name: t("co_attainment"),
      id: 0,
      url: `member/subject/${params.sname}?a=co-attainment`,
      is_active: "enabled",
    },
    {
      name: t("copo_mapping"),
      id: 1,
      url: `member/subject/${params.sname}?a=co-mapping`,
      is_active: "enabled",
    },
    {
      name: t("setting"),
      id: 2,
      url: `member/subject/${params.sname}?a=co-setting`,
      is_active: "enabled",
    },
  ];

  const [searchParams] = useSearchParams();
  return (
    <div
      className={style.exam_container}
      style={{
        width: "910px",
      }}
    >
      <div className={style.with_search}>
        <h6>{t("co_mapping_and_attainment")}</h6>
      </div>
      <UniversalTab
        tabList={tabList}
        activeIndexTab={
          searchParams.get("a") === "co-attainment"
            ? 0
            : searchParams.get("a") === "co-mapping"
            ? 1
            : 2
        }
        // setActiveIndexTab={setActiveIndex}
        showAs={true}
        customStyleTab={{
          width: "100%",
        }}
        customStyleLink={{
          width: "33.3%",
        }}
        carryParentState={carryParentState}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "0.7rem",
        }}
      />
      {searchParams.get("a") === "co-attainment" && (
        <CoAttainmentTable sid={sid} />
      )}
      {searchParams.get("a") === "co-mapping" && (
        <CopoMappingAttainment sid={sid} />
      )}
      {searchParams.get("a") === "co-setting" && (
        <CoAttainmentSetting smid={smid} />
      )}
    </div>
  );
};

export default SubjectCoAttainment;

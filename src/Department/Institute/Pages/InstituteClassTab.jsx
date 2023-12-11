import React from "react";
import style from "../../../MembersTab/staff/Mainbody/DepartmentHead/DepartmentHeadProfile/MiddleContent/Tabs.module.css";
import { useTranslation } from "react-i18next";
import { Link, useParams, useSearchParams } from "react-router-dom";

const InstituteClassTab = () => {
  const { t } = useTranslation();
  const params = useParams();
  const [searchParams] = useSearchParams();
  return (
    <div className={style.mcqTop}>
      <div className={style.mcqToptabs}>
        <Link
          to={`/q/${params.username}/class`}
          style={{
            width: "33.3%",
          }}
        >
          <div
            className={
              !searchParams.get("type")
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
            style={{
              width: "100%",
            }}
          >
            {t("students")}
          </div>
        </Link>

        <Link
          to={`/q/${params.username}/class?type=subject`}
          style={{
            width: "33.3%",
          }}
        >
          <div
            className={
              searchParams.get("type") === "subject"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
            style={{
              width: "100%",
            }}
          >
            {t("subjects")}
          </div>
        </Link>
        <Link
          to={`/q/${params.username}/class?type=batches`}
          style={{
            width: "33.3%",
          }}
        >
          <div
            className={
              searchParams.get("type") === "batches" ||
              searchParams.get("type") === "batch-detail"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
            style={{
              width: "100%",
            }}
          >
            {t("class_batch")}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InstituteClassTab;

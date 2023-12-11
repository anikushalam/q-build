import React, { memo } from "react";
import style from "./CoAttainmentTable.module.css";
import { useTranslation } from "react-i18next";

const ComplianceCoAttainment = ({ complianceCoAttainment }) => {
  const { t } = useTranslation();

  return (
    <>
      <h6 className={style.other_table_heading}>
        {t("co_quality_compliance")}
      </h6>
      <div className={style.co_weightage_tabel_container_other}>
        <div
          className={style.co_weightage_tabel_container_other_inner}
          style={{
            flexFlow: "column",
          }}
        >
          <div className={style.cls_average_ia}>
            <div
              className={style.co_weightage_col}
              style={{
                width: "6rem",
              }}
            >
              <div className={style.co_weightage_col_text}>
                <h6>CO</h6>
              </div>
            </div>
            <div
              className={style.co_weightage_col}
              style={{
                width: "6rem",
              }}
            >
              <div className={style.co_weightage_col_text}>
                <h6>{t("target")}</h6>
              </div>
            </div>
            <div
              className={style.co_weightage_col}
              style={{
                width: "12rem",
              }}
            >
              <div className={style.co_weightage_col_text}>
                <h6>{t("co_attainment_gap")}</h6>
              </div>
            </div>
            <div
              className={style.co_weightage_col}
              style={{
                width: "18rem",
              }}
            >
              <div className={style.co_weightage_col_text}>
                <h6>{t("action_proposed_to_bridge_gap")}</h6>
              </div>
            </div>
            <div
              className={style.co_weightage_col}
              style={{
                width: "23rem",
              }}
            >
              <div className={style.co_weightage_col_text}>
                <h6>{t("modification_of_the_target_where_achieved")}</h6>
              </div>
            </div>
          </div>

          {complianceCoAttainment &&
            complianceCoAttainment["co_list"]?.map((co) => (
              <div className={style.cls_average_ia} key={co}>
                <div
                  className={style.co_weightage_col}
                  style={{
                    width: "6rem",
                  }}
                >
                  <div className={style.co_weightage_col_text}>
                    <h6>{co}</h6>
                  </div>
                </div>

                <div
                  className={style.co_weightage_col}
                  style={{
                    width: "6rem",
                  }}
                >
                  <div className={style.co_weightage_col_text}>
                    <h6>
                      {complianceCoAttainment[co]?.attainment_target ?? ""}
                    </h6>
                  </div>
                </div>

                <div
                  className={style.co_weightage_col}
                  style={{
                    width: "12rem",
                  }}
                >
                  <div className={style.co_weightage_col_text}>
                    <h6>
                      {complianceCoAttainment[co]?.co_attainment_gap ?? ""}
                    </h6>
                  </div>
                </div>
                <div
                  className={style.co_weightage_col}
                  style={{
                    width: "18rem",
                  }}
                >
                  <div className={style.co_weightage_col_text}>
                    <h6>
                      {complianceCoAttainment[co]
                        ?.action_praposed_to_bridge_gap ?? ""}
                    </h6>
                  </div>
                </div>
                <div
                  className={style.co_weightage_col}
                  style={{
                    width: "23rem",
                  }}
                >
                  <div className={style.co_weightage_col_text}>
                    <h6>
                      {complianceCoAttainment[co]
                        ?.modification_of_target_where_achived ?? " - "}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default memo(ComplianceCoAttainment);

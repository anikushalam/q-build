import React, { memo } from "react";
import style from "./CoAttainmentTable.module.css";
import { useTranslation } from "react-i18next";

const CalculationCoAttainment = ({ calculationCoAttainment }) => {
  const { t } = useTranslation();

  return (
    <>
      <h6 className={style.other_table_heading}>
        {calculationCoAttainment?.heading ?? ""}
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
                width: "20rem",
              }}
            >
              <div className={style.co_weightage_col_text}>
                <h6>{t("ia_cls_average_round_in")}</h6>
              </div>
            </div>
            <div
              className={style.co_weightage_col}
              style={{
                width: "20rem",
              }}
            >
              <div className={style.co_weightage_col_text}>
                <h6>{t("ie_cls_average_round_in")}</h6>
              </div>
            </div>
            <div
              className={style.co_weightage_col}
              style={{
                width: "20rem",
              }}
            >
              <div className={style.co_weightage_col_text}>
                <h6>{calculationCoAttainment?.direct_heading ?? ""}</h6>
              </div>
            </div>
          </div>

          {calculationCoAttainment &&
            calculationCoAttainment["co_list"]?.map((co) => (
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
                    width: "20rem",
                  }}
                >
                  <div className={style.co_weightage_col_text}>
                    <h6>{calculationCoAttainment[co]?.ia_avg ?? ""}</h6>
                  </div>
                </div>

                <div
                  className={style.co_weightage_col}
                  style={{
                    width: "20rem",
                  }}
                >
                  <div className={style.co_weightage_col_text}>
                    <h6>{calculationCoAttainment[co]?.ea_avg ?? ""}</h6>
                  </div>
                </div>
                <div
                  className={style.co_weightage_col}
                  style={{
                    width: "20rem",
                  }}
                >
                  <div className={style.co_weightage_col_text}>
                    <h6>{calculationCoAttainment[co]?.direct_co ?? ""}</h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default memo(CalculationCoAttainment);

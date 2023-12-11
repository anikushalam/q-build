import React, { memo } from "react";
import style from "./CoAttainmentTable.module.css";
import { useTranslation } from "react-i18next";

const CoAttainmentClassAverageEa = ({ outerClsAverageIa }) => {
  const { t } = useTranslation();

  return (
    <>
      <h6 className={style.other_table_heading}>
        {t("class_average_ea_internal_assesment")}
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
            {outerClsAverageIa &&
              outerClsAverageIa["co_attainment_name_list"]?.map((ia, index) => (
                <div
                  className={style.co_weightage_col}
                  key={index}
                  style={{
                    width: "20rem",
                  }}
                >
                  <div className={style.co_weightage_col_text}>
                    <h6>{ia}</h6>
                  </div>
                </div>
              ))}

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
          </div>
          {outerClsAverageIa &&
            outerClsAverageIa["co_list"]?.map((co) => (
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
                {outerClsAverageIa[co]?.list?.map((ia_average, index) => (
                  <div
                    className={style.co_weightage_col}
                    style={{
                      width: "20rem",
                    }}
                    key={index}
                  >
                    <div className={style.co_weightage_col_text}>
                      <h6>{ia_average}</h6>
                    </div>
                  </div>
                ))}

                <div
                  className={style.co_weightage_col}
                  style={{
                    width: "20rem",
                  }}
                >
                  <div className={style.co_weightage_col_text}>
                    <h6>{outerClsAverageIa[co]?.c_avg_total ?? " - "}</h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default memo(CoAttainmentClassAverageEa);

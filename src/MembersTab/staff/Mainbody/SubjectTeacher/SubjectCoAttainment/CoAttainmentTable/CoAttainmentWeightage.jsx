import React, { memo, useEffect, useState } from "react";
import style from "./CoAttainmentTable.module.css";
import { useTranslation } from "react-i18next";

const CoAttainmentWeightage = ({ coWeightage }) => {
  const { t } = useTranslation();
  const [weightage, setWeightage] = useState([]);
  useEffect(() => {
    if (coWeightage) {
      // let arr = [...Object.keys(coWeightage), ...Object.keys(coWeightage)];
      // setWeightage(arr);
      setWeightage(Object.keys(coWeightage));
    }
  }, [coWeightage]);
  return (
    <>
      <h6 className={style.other_table_heading}>{t("co_weightage")}</h6>
      <div className={style.co_weightage_tabel_container_other}>
        <div className={style.co_weightage_tabel_container_other_inner}>
          {weightage?.map((co, index) =>
            co === "key_count" ? (
              ""
            ) : co === "key0" || co === "key_assignment" ? (
              <div
                className={style.co_weightage_col}
                key={index}
                style={{
                  width: "8rem",
                }}
              >
                {coWeightage[co]?.map((name) => (
                  <div className={style.co_weightage_col_text} key={name}>
                    <h6>{name ?? ""}</h6>
                  </div>
                ))}
                {co === "key_assignment" ? null : (
                  <div className={style.co_weightage_col_text}>
                    <h6>Total</h6>
                  </div>
                )}
              </div>
            ) : (
              <div
                className={style.co_weightage_col}
                key={index}
                style={{
                  width: "20rem",
                }}
              >
                <div className={style.co_weightage_col_text}>
                  <h6>{coWeightage[co]?.[0]?.attainment_name ?? ""}</h6>
                </div>
                {coWeightage[co]?.map((sep, myIndex) => (
                  <div className={style.co_weightage_col_text} key={myIndex}>
                    <h6> {sep?.marks ?? ""}</h6>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default memo(CoAttainmentWeightage);

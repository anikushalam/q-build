import React, { useEffect, useState } from "react";
import style from "../CoAttainmentTable/CoAttainmentTable.module.css";
import {
  useGetCopoMappingAttainmentTable,
  useUpdateCopoMappingAttainment,
} from "../../../../../../hooks/member_tab/subject-api";
import { useTranslation } from "react-i18next";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import QLoader from "../../../../../../Loader/QLoader";

const CopoMappingAttainment = ({ sid }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [mapping, setMapping] = useState(null);
  const [mappingObj, setMappingObj] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const {
    getCopoMappingAttainmentTable,
    getCopoMappingAttainmentTableRefetch,
  } = useGetCopoMappingAttainmentTable({
    data: {
      sid: sid,
    },
    skip: !sid,
  });
  const [updateCopoMappingAttainment] = useUpdateCopoMappingAttainment();
  useEffect(() => {
    if (sid) getCopoMappingAttainmentTableRefetch();
  }, [sid, getCopoMappingAttainmentTableRefetch]);

  useEffect(() => {
    if (
      getCopoMappingAttainmentTable?.copo_mapping?.co_list?.length ||
      getCopoMappingAttainmentTable?.copo_mapping?.co_list?.length === 0
    ) {
      setShowingDataLoading(false);
      let obj = {};
      let obj1 = {};
      for (let co of getCopoMappingAttainmentTable?.copo_mapping["co_list"]) {
        for (let po of getCopoMappingAttainmentTable?.copo_mapping["po_list"]) {
          let sht = getCopoMappingAttainmentTable?.copo_mapping[`${co}${po}`];

          obj[`${co}${po}`] = {
            value: sht?.co_relation ?? "",
            key: `${sht?.coId}${sht?.poId}`,
            poId: sht?.poId,
            coId: sht?.coId,
          };
          obj1[`${co}${po}`] = sht?.co_relation ?? "";
        }
      }
      setMappingObj(obj);
      setMapping(obj1);
    } else {
    }
  }, [getCopoMappingAttainmentTable?.copo_mapping?.co_list]);

  const onSelectValue = (e, otherArgs) => {
    setMapping((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    let prevous = mappingObj;
    prevous[e.target.name]["value"] = e.target.value;
    prevous[e.target.name]["key"] = `${otherArgs?.coId}${otherArgs?.poId}`;
    prevous[e.target.name]["poId"] = `${otherArgs?.poId}`;
    prevous[e.target.name]["coId"] = `${otherArgs?.coId}`;
    setMappingObj(prevous);
  };
  console.info("ashfd", mappingObj);

  const onSubmit = () => {
    if (sid) {
      setDisabled((pre) => !pre);
      updateCopoMappingAttainment({
        sid: sid,
        updateCopo: {
          copo: mappingObj,
        },
      })
        .then(() => {
          getCopoMappingAttainmentTableRefetch();
          setDisabled((pre) => !pre);
        })
        .catch();
    }
  };
  return (
    <>
      {/* <h6 className={style.other_table_heading}>{t("copo_mapping")}</h6> */}
      <div
        className={style.co_weightage_tabel_container_other}
        style={{
          border: "none",
        }}
      >
        <div
          className={style.co_weightage_tabel_container_other_inner}
          style={{
            flexFlow: "column",
            marginTop: "3rem",
          }}
        >
          <div className={style.cls_average_ia}>
            <div
              className={style.co_weightage_col}
              style={{
                width: "7rem",
              }}
            >
              <div className={style.co_weightage_col_text}>
                <h6>Sr. No.</h6>
              </div>
            </div>
            <div
              className={style.co_weightage_col}
              style={{
                width: "7rem",
              }}
            >
              <div className={style.co_weightage_col_text}>
                <h6>CO Code</h6>
              </div>
            </div>
            {getCopoMappingAttainmentTable?.copo_mapping &&
              getCopoMappingAttainmentTable?.copo_mapping["po_list"]?.map(
                (ia, index) => (
                  <div
                    className={style.co_weightage_col}
                    key={index}
                    style={{
                      width: "7rem",
                    }}
                  >
                    <div className={style.co_weightage_col_text}>
                      <h6
                        title={
                          getCopoMappingAttainmentTable?.copo_mapping?.des?.[ia]
                        }
                      >
                        {ia}
                      </h6>
                    </div>
                  </div>
                )
              )}
          </div>
          {getCopoMappingAttainmentTable?.copo_mapping &&
            getCopoMappingAttainmentTable?.copo_mapping["co_list"]?.map(
              (co, icondex) => (
                <div className={style.cls_average_ia} key={co}>
                  <div
                    className={style.co_weightage_col}
                    style={{
                      width: "7rem",
                    }}
                  >
                    <div className={style.co_weightage_col_text}>
                      <h6>{icondex + 1}</h6>
                    </div>
                  </div>
                  <div
                    className={style.co_weightage_col}
                    style={{
                      width: "7rem",
                    }}
                  >
                    <div className={style.co_weightage_col_text}>
                      <h6>{co}</h6>
                    </div>
                  </div>
                  {getCopoMappingAttainmentTable?.copo_mapping["po_list"]?.map(
                    (po, index) => (
                      <div
                        className={style.co_weightage_col}
                        style={{
                          width: "7rem",
                        }}
                        key={index}
                      >
                        <div
                          className={style.co_weightage_col_text}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {/* <h6>
                            {getCopoMappingAttainmentTable?.copo_mapping[
                              `${co}${po}`
                            ]?.co_relation ?? ""}
                          </h6> */}
                          <select
                            name={`${co}${po}`}
                            onChange={(e) =>
                              onSelectValue(
                                e,
                                getCopoMappingAttainmentTable?.copo_mapping[
                                  `${co}${po}`
                                ]
                              )
                            }
                            value={mapping ? mapping[`${co}${po}`] : ""}
                            className={style.co_mapping_select}
                          >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="NA">NA</option>
                          </select>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )
            )}
        </div>
        <div className={style.submit_btn_attainment_group}>
          <button className={style.submit_btn_attainment} onClick={onSubmit}>
            {t("submit")}
          </button>
        </div>
      </div>
      {showingDataLoading && <QvipleLoading />}
      {disabled && <QLoader />}
    </>
  );
};

export default CopoMappingAttainment;

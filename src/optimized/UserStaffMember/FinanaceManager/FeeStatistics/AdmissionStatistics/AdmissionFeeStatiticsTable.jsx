import { useTranslation } from "react-i18next";
import style from "../../StudentStatitics/StudentStatitics.module.css";
import { useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const AdmissionFeeStatiticsTable = ({ statitics, batchId, depart }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const params = useParams();
  const getQuery = useLocation();
  const onNavigate = useCallback(
    (val) => {
      if (val?.length > 0) {
        navigate(
          `/q/${params.username}/member/staff/finance?type=statistics-detail`,
          {
            state: {
              ...getQuery.state,
              studentList: val,
              openAs: "ADMISSION_OVERVIEW",
              batchId: batchId,
              departmentId: depart,
            },
          }
        );
      }
    },
    [navigate, params]
  );
  return (
    <div className={style.ss_table}>
      <div className={style.fs_table_header}>
        <div
          className={style.fs_table_col}
          style={{
            borderRight: "none",
          }}
        >
          {heading?.map((head) => (
            <div className={style.fs_table_header_inner} key={head?.name}>
              <h6
                className={style.fs_table_header_inner_h6}
                style={{
                  width: "10rem",
                }}
              >
                {t(head?.name)}
              </h6>
            </div>
          ))}
        </div>
        {statitics?.departs?.map((depart, index) => (
          <div className={style.fs_table_col} key={index}>
            <div className={style.fs_table_header_inner}>
              <h6 className={style.fs_table_header_inner_h6}>
                {depart[`dp${index + 1}`]}
              </h6>
            </div>
            <div className={style.fs_table_col_inner}>
              {statitics[`dp${index + 1}`]?.batches?.map((batch) => (
                <div key={batch?._id}>
                  <div className={style.fs_table_header_inner}>
                    <h6 className={style.fs_table_header_inner_h6}>
                      {batch?.batchName}
                    </h6>
                  </div>
                  <div
                    className={style.fs_table_col_inner}
                    style={{
                      alignItems: "flex-start",
                    }}
                  >
                    {statitics[`dp${index + 1}`]?.masters?.map((master) => (
                      <div
                      // style={{
                      //   borderRight: "1px solid red",
                      // }}
                      >
                        <div
                          className={style.fs_table_header_inner}
                          key={master?._id}
                        >
                          <h6
                            className={style.fs_table_header_inner_h6}
                            style={{
                              width: "10rem",
                            }}
                          >
                            {master?.masterName ?? "NULL"}
                          </h6>
                        </div>
                        <div className={style.fs_table_col_inner}>
                          {getBatchClass(
                            statitics[`dp${index + 1}`]?.nest_classes,
                            batch?._id
                          )?.[batch?._id]?.classes?.map((cls) =>
                            cls?.classMaster === master?._id ? (
                              <div key={cls?._id}>
                                <div className={style.fs_table_header_inner}>
                                  <h6
                                    className={style.fs_table_header_inner_h6}
                                    style={{
                                      width: "10rem",
                                    }}
                                  >
                                    {cls?.className ?? "NULL"}
                                  </h6>
                                </div>
                                <div className={style.fs_table_header_inner}>
                                  <h6
                                    className={style.fs_table_header_inner_h6}
                                    onClick={() =>
                                      onNavigate(cls?.total_fees_arr)
                                    }
                                    style={{
                                      cursor: "pointer",
                                      color: "#00f",
                                    }}
                                  >
                                    {cls?.total_fees ?? "NULL"}
                                  </h6>
                                </div>
                                <div className={style.fs_table_header_inner}>
                                  <h6
                                    className={style.fs_table_header_inner_h6}
                                    onClick={() =>
                                      onNavigate(cls?.total_collect_arr)
                                    }
                                    style={{
                                      cursor: "pointer",
                                      color: "#00f",
                                    }}
                                  >
                                    {cls?.total_collect ?? "NULL"}
                                  </h6>
                                </div>
                                <div className={style.fs_table_header_inner}>
                                  <h6
                                    className={style.fs_table_header_inner_h6}
                                    onClick={() =>
                                      onNavigate(cls?.total_pending_arr)
                                    }
                                    style={{
                                      cursor: "pointer",
                                      color: "#00f",
                                    }}
                                  >
                                    {cls?.total_pending ?? "NULL"}
                                  </h6>
                                </div>
                                <div className={style.fs_table_header_inner}>
                                  <h6
                                    className={style.fs_table_header_inner_h6}
                                    onClick={() =>
                                      onNavigate(cls?.collect_by_student_arr)
                                    }
                                    style={{
                                      cursor: "pointer",
                                      color: "#00f",
                                    }}
                                  >
                                    {cls?.collect_by_student ?? "NULL"}
                                  </h6>
                                </div>
                                <div className={style.fs_table_header_inner}>
                                  <h6
                                    className={style.fs_table_header_inner_h6}
                                    onClick={() =>
                                      onNavigate(cls?.pending_by_student_arr)
                                    }
                                    style={{
                                      cursor: "pointer",
                                      color: "#00f",
                                    }}
                                  >
                                    {cls?.pending_by_student ?? "NULL"}
                                  </h6>
                                </div>
                                <div className={style.fs_table_header_inner}>
                                  <h6
                                    className={style.fs_table_header_inner_h6}
                                    onClick={() =>
                                      onNavigate(cls?.collect_by_government_arr)
                                    }
                                    style={{
                                      cursor: "pointer",
                                      color: "#00f",
                                    }}
                                  >
                                    {cls?.collect_by_government ?? "NULL"}
                                  </h6>
                                </div>
                                <div className={style.fs_table_header_inner}>
                                  <h6
                                    className={style.fs_table_header_inner_h6}
                                    onClick={() =>
                                      onNavigate(
                                        cls?.pending_from_government_arr
                                      )
                                    }
                                    style={{
                                      cursor: "pointer",
                                      color: "#00f",
                                    }}
                                  >
                                    {cls?.pending_from_government ?? "NULL"}
                                  </h6>
                                </div>
                              </div>
                            ) : null
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionFeeStatiticsTable;

const heading = [
  {
    name: "department",
  },
  {
    name: "batch",
  },
  {
    name: "standard",
  },
  {
    name: "class",
  },
  {
    name: "total_fees",
  },
  {
    name: "total_collect",
  },
  {
    name: "total_pending",
  },
  {
    name: "collect_from_student",
  },
  {
    name: "ot_from_student",
  },
  {
    name: "collect_from_gov",
  },
  {
    name: "ot_from_gov",
  },
];

const getBatchClass = (list, batchId) => {
  for (let val of list) {
    for (let obj in val) {
      if (obj === batchId) return val;
    }
  }
};

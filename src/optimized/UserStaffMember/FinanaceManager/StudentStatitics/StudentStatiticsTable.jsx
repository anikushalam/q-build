import { useTranslation } from "react-i18next";
import style from "./StudentStatitics.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCallback } from "react";

// - 0.52rem in clacl remove
const StudentStatiticsTable = ({ statitics }) => {
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
            },
          }
        );
      }
    },
    [navigate, params]
  );

  // console.info("statitics", statitics);
  return (
    <div className={style.ss_table}>
      <section className={style.ss_table_header}>
        <div className={style.ss_table_header_inner}>
          <h6
            className={style.ss_table_header_h6}
            style={{
              width: "3.4rem",
            }}
          >
            {t("sr_no")}
          </h6>
        </div>
        <div
          className={style.ss_table_header_inner}
          //   style={{
          //     flex: "1.5",
          //   }}
        >
          <h6
            className={style.ss_table_header_h6}
            style={{
              width: "12rem",
            }}
          >
            {t("classes")}
          </h6>
        </div>
        {/* <div className={style.ss_table_header_inner}>
          <h6 className={style.ss_table_header_h6}>{t("aided_unaid")}</h6>
        </div> */}
        <div className={style.ss_table_header_inner}>
          <h6
            className={style.ss_table_header_h6}
            style={{
              width: "4.7rem",
            }}
          >
            {t("strength")}
          </h6>
        </div>
        {statiticsCategory?.map((sc) => (
          <div className={style.ss_table_header_inner_fr} key={sc.key}>
            <div className={style.ss_table_header_inner_fr_center}>
              <h6
                className={style.ss_table_header_h6}
                style={{
                  width: "4.7rem",
                }}
              >
                {t(sc.name)}
              </h6>
            </div>

            <div className={style.ss_table_header_inner_fr_inner}>
              <h6 className={style.ss_table_header_inner_fr_inner_h6}>M</h6>
              <h6 className={style.ss_table_header_inner_fr_inner_h6_right}>
                F
              </h6>
            </div>
          </div>
        ))}
        <div className={style.ss_table_header_inner_fr}>
          <h6 className={style.ss_table_header_h6}>{t("minority")}</h6>
          <div className={style.ss_table_minority}>
            {minority.map((min) => (
              <div key={min.key} className={style.ss_table_minority_inner}>
                <h6
                  className={style.ss_table_header_h6}
                  style={{
                    width: "5rem",
                  }}
                >
                  {t(min.name)}
                </h6>
                <div className={style.ss_table_header_inner_fr_inner}>
                  <h6 className={style.ss_table_header_inner_fr_inner_h6}>M</h6>
                  <h6 className={style.ss_table_header_inner_fr_inner_h6_right}>
                    F
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
        {statiticsReligion?.map((sc) => (
          <div className={style.ss_table_header_inner_fr} key={sc.key}>
            <div className={style.ss_table_header_inner_fr_center}>
              <h6
                className={style.ss_table_header_h6}
                style={{
                  width: "5rem",
                }}
              >
                {t(sc.name)}
              </h6>
            </div>
            <div className={style.ss_table_header_inner_fr_inner}>
              <h6 className={style.ss_table_header_inner_fr_inner_h6}>M</h6>
              <h6 className={style.ss_table_header_inner_fr_inner_h6_right}>
                F
              </h6>
            </div>
          </div>
        ))}
        <div className={style.ss_table_header_inner_fr}>
          <div
            className={style.ss_table_header_inner_fr_center}
            style={{
              borderRight: "1px solid #cacaca",
            }}
          >
            <h6
              className={style.ss_table_header_h6}
              style={{
                width: "8rem",
              }}
            >
              {t("all_grand_total")}
            </h6>
          </div>

          <div className={style.ss_table_header_inner_fr_inner}>
            <h6 className={style.ss_table_header_inner_fr_inner_h6}>M</h6>
            <h6 className={style.ss_table_header_inner_fr_inner_h6}>F</h6>
            <h6
              className={style.ss_table_header_inner_fr_inner_h6_right}
              style={{
                borderRight: "1px solid #cacaca",
              }}
            >
              {t("total")}
            </h6>
          </div>
        </div>
      </section>

      {statitics?.map((stats, index) => (
        <section
          className={style.ss_table_header}
          style={{
            paddingTop: "0",
            paddingBottom: "1rem",
            height: "3.3rem",
          }}
        >
          <div className={style.ss_table_header_inner}>
            <h6
              className={style.ss_table_header_h6}
              style={{
                width: "3.4rem",
              }}
            >
              {index + 1}
            </h6>
          </div>
          <div className={style.ss_table_header_inner}>
            <h6
              className={style.ss_table_header_h6}
              style={{
                width: "12rem",
              }}
            >
              {stats?.className}
            </h6>
          </div>
          {/* <div className={style.ss_table_header_inner}>
          <h6 className={style.ss_table_header_h6}>{t("aided_unaid")}</h6>
        </div> */}
          <div className={style.ss_table_header_inner}>
            <h6
              className={style.ss_table_header_h6}
              style={{
                width: "4.7rem",
              }}
            >
              {stats?.strength}
            </h6>
          </div>
          {statiticsCategoryValue?.map((sc) => (
            <div className={style.ss_table_header_inner_fr} key={sc.name}>
              <div className={style.ss_table_header_inner_fr_inner}>
                <h6
                  className={style.ss_table_header_inner_fr_inner_h6}
                  style={{
                    width: "calc(2.35rem)",
                    cursor: "pointer",
                    color: "#00f",
                  }}
                  onClick={() => onNavigate(stats[`${sc.name}_m_arr`])}
                >
                  {stats[`${sc.name}_m`]}
                </h6>
                <h6
                  className={style.ss_table_header_inner_fr_inner_h6_right}
                  style={{
                    width: "calc(2.35rem)",
                    cursor: "pointer",
                    color: "#00f",
                  }}
                  onClick={() => onNavigate(stats[`${sc.name}_f_arr`])}
                >
                  {stats[`${sc.name}_f`]}
                </h6>
              </div>
            </div>
          ))}
          <div className={style.ss_table_header_inner_fr}>
            <div className={style.ss_table_minority}>
              {minorityValue.map((min) => (
                <div key={min.name} className={style.ss_table_minority_inner}>
                  <div className={style.ss_table_header_inner_fr_inner}>
                    <h6
                      className={style.ss_table_header_inner_fr_inner_h6}
                      style={{
                        width: "calc(2.5rem)",
                        cursor: "pointer",
                        color: "#00f",
                      }}
                      onClick={() => onNavigate(stats[`${min.name}_m_arr`])}
                    >
                      {stats[`${min.name}_m`]}
                    </h6>
                    <h6
                      className={style.ss_table_header_inner_fr_inner_h6_right}
                      style={{
                        width: "calc(2.5rem)",
                        cursor: "pointer",
                        color: "#00f",
                      }}
                      onClick={() => onNavigate(stats[`${min.name}_f_arr`])}
                    >
                      {stats[`${min.name}_f`]}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {statiticsReligionValue?.map((sc) => (
            <div className={style.ss_table_header_inner_fr} key={sc.name}>
              <div className={style.ss_table_header_inner_fr_inner}>
                <h6
                  className={style.ss_table_header_inner_fr_inner_h6}
                  style={{
                    width: "calc(2.5rem)",
                    cursor: "pointer",
                    color: "#00f",
                  }}
                  onClick={() => onNavigate(stats[`${sc.name}_m_arr`])}
                >
                  {" "}
                  {stats[`${sc.name}_m`]}
                </h6>
                <h6
                  className={style.ss_table_header_inner_fr_inner_h6_right}
                  style={{
                    width: "calc(2.5rem)",
                    cursor: "pointer",
                    color: "#00f",
                  }}
                  onClick={() => onNavigate(stats[`${sc.name}_f_arr`])}
                >
                  {stats[`${sc.name}_f`]}
                </h6>
              </div>
            </div>
          ))}
          <div className={style.ss_table_header_inner_fr}>
            <div className={style.ss_table_header_inner_fr_inner}>
              <h6
                className={style.ss_table_header_inner_fr_inner_h6}
                style={{
                  width: "calc(2.15rem)",
                  cursor: "pointer",
                  color: "#00f",
                }}
                onClick={() => onNavigate(stats["boy_arr"])}
              >
                {stats["boy"]}
              </h6>
              <h6
                className={style.ss_table_header_inner_fr_inner_h6}
                style={{
                  width: "calc(2.1rem)",
                  cursor: "pointer",
                  color: "#00f",
                }}
                onClick={() => onNavigate(stats["girl_arr"])}
              >
                {stats["girl"]}
              </h6>
              <h6
                className={style.ss_table_header_inner_fr_inner_h6_right}
                style={{
                  borderRight: "1px solid #cacaca",
                  width: "calc(3.8rem)",
                }}
              >
                {stats["strength"]}
              </h6>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default StudentStatiticsTable;

const statiticsCategory = [
  {
    name: "general",
    key: 0,
  },
  {
    name: "sc",
    key: 1,
  },
  {
    name: "st",
    key: 2,
  },
  {
    name: "dt",
    key: 3,
  },
  {
    name: "nt",
    key: 4,
  },
  {
    name: "obc",
    key: 5,
  },
  {
    name: "sbc",
    key: 6,
  },
  {
    name: "muslim",
    key: 7,
  },
  {
    name: "maratha",
    key: 8,
  },
  {
    name: "ews",
    key: 9,
  },
  {
    name: "ph",
    key: 10,
  },
  {
    name: "jk_students",
    key: 11,
  },
  {
    name: "goins_students",
    key: 12,
  },
];

const minority = [
  {
    name: "sikh",
    key: "sikh",
  },
  {
    name: "jainism",
    key: "jainism",
  },
  {
    name: "buddhism",
    key: "buddhism",
  },
  {
    name: "christian",
    key: "christian",
  },
  {
    name: "parsi",
    key: "parsi",
  },
  {
    name: "jews",
    key: "jews",
  },
];

const statiticsReligion = [
  {
    name: "hindu",
    key: "hindu",
  },
  {
    name: "muslim",
    key: "muslim",
  },
];

const statiticsCategoryValue = [
  {
    name: "general",
  },
  {
    name: "sc",
  },
  {
    name: "st",
  },
  {
    name: "dt",
  },
  {
    name: "nt",
  },
  {
    name: "obc",
  },
  {
    name: "sbc",
  },
  {
    name: "muslim",
  },
  {
    name: "maratha",
  },
  {
    name: "ews",
  },
  {
    name: "ph",
  },
  {
    name: "jk",
  },
  {
    name: "goins",
  },
];

const minorityValue = [
  {
    name: "sikh",
  },
  {
    name: "jain",
  },
  {
    name: "budh",
  },
  {
    name: "christian",
  },
  {
    name: "parsi",
  },
  {
    name: "jews",
  },
];

const statiticsReligionValue = [
  {
    name: "hindu",
  },
  {
    name: "muslim",
  },
];

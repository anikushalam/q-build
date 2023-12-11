import React from "react";
import { useTranslation } from "react-i18next";
import CustomNormalSelectInput from "../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import { useGetAllUniversalGrade } from "../../../../../hooks/member_tab/department-api";

const ViewGradeSystem = ({ gradeSystem, setEdit }) => {
  const { t } = useTranslation();
  const { getAllUniversalGrade } = useGetAllUniversalGrade({
    skip: false,
  });
  return (
    <div className={style.seating_modal}>
      <section
        className={style.seating_modal_title_left}
        style={{
          position: "relative",
        }}
      >
        <h6>{t("grade_system")}</h6>
        <button className={style.next_btn} onClick={() => setEdit(gradeSystem)}>
          {t("edit_")}
        </button>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.5rem",
        }}
      />

      <CustomNormalSelectInput
        selectLabel={t("grade_type")}
        value={gradeSystem.grade_type}
        openAs="REFUND"
      />
      {gradeSystem.grade_type === "Using custom formula" ? (
        getAllUniversalGrade?.custom_grades?.map((grade) => (
          <div
            className={
              gradeSystem?.custom_grade === grade?._id
                ? `${style.subject_container} ${style.class_container_active}`
                : `${style.subject_container} ${style.subject_container_active}`
            }
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "1.3rem",
              minHeight: "50px",
              alignItems: "center",
              marginTop: "0.9rem",
              cursor: "pointer",
            }}
          >
            <img src="/images/department/bank-icon.svg" alt="bank icon" />
            <h6>{grade?.grade_name ?? ""}</h6>
          </div>
        ))
      ) : (
        <>
          <JoinFormInput
            labelText={t("grade_count")}
            value={gradeSystem?.grade_count}
            type={"text"}
          />
          <section className={style.grade_system_header}>
            <h6
              style={{
                width: "15%",
                borderRight: "0.5px solid #FFFFFF",
                padding: "1rem",
              }}
            >
              {t("no")}
            </h6>
            <h6
              style={{
                width: "70%",
                borderRight: "0.5px solid #FFFFFF",
                padding: "1rem",
              }}
            >
              {t("range")}
            </h6>
            <h6
              style={{
                width: "15%",
                padding: "1rem",
              }}
            >
              {t("grade")}
            </h6>
          </section>
          {gradeSystem?.grades?.map((g_range, index) => (
            <section className={style.grade_system_body} key={index}>
              <h6
                style={{
                  width: "15%",
                  borderRight: "0.5px solid #121212",
                  padding: "0.7rem",
                }}
              >
                {g_range.serial_no}
              </h6>
              <h6
                style={{
                  width: "69%",
                  borderRight: "0.5px solid #121212",
                  padding: "0.7rem",
                  //   marginLeft: "-1.7rem",
                }}
              >
                <input
                  type={"text"}
                  value={g_range.start_range}
                  placeholder="00"
                  className={style.fee_head_amount_input}
                  style={{
                    width: "10%",
                  }}
                />
                To{" "}
                <input
                  type={"text"}
                  value={g_range.end_range}
                  placeholder="00"
                  className={style.fee_head_amount_input}
                  style={{
                    width: "10%",
                  }}
                />
              </h6>
              <h6
                style={{
                  width: "15%",
                  padding: "0.7rem",
                }}
              >
                <input
                  type={"text"}
                  value={g_range.grade_symbol}
                  className={style.fee_head_amount_input}
                />
              </h6>
            </section>
          ))}
        </>
      )}
    </div>
  );
};

export default ViewGradeSystem;

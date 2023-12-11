import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CustomNormalSelectInput from "../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import {
  useCreateGradeSystem,
  useGetAllUniversalGrade,
  useUpdateGradeSystem,
} from "../../../../../hooks/member_tab/department-api";
import QLoader from "../../../../../Loader/QLoader";
const GradeSystemForm = ({ did, onRefetchApi, edit, update }) => {
  const { t } = useTranslation();
  const [grade, setGrade] = useState({
    grade_type: "",
    grade_count: "",
  });
  const [gradeRange, setGradeRange] = useState([]);
  const [filled, setFilled] = useState("");
  const [custom_grade, setCustom_grade] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { getAllUniversalGrade, getAllUniversalGradeRefetch } =
    useGetAllUniversalGrade({
      skip: grade.grade_type === "Using custom formula" ? false : true,
    });
  const [createGradeSystem] = useCreateGradeSystem();
  const [updateGradeSystem] = useUpdateGradeSystem();

  useEffect(() => {
    if (update === "Yes") {
      if (edit?.grade_type === "Using custom formula") {
        setGrade({
          grade_type: edit?.grade_type,
          grade_count: "",
        });
        setCustom_grade(edit?.custom_grade);
      } else {
        let arr = [];

        for (let grade of edit?.grades) {
          arr.push({
            serial_no: grade?.serial_no,
            start_range: grade?.start_range,
            end_range: grade?.end_range,
            grade_symbol: grade?.grade_symbol,
          });
        }
        setGradeRange(arr);
        setGrade({
          grade_type: edit?.grade_type,
          grade_count: edit?.grade_count,
        });
      }
    }
  }, [update, edit]);

  useEffect(() => {
    if (grade.grade_type) {
      getAllUniversalGradeRefetch();
    }
  }, [grade.grade_type]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < grade.grade_count; i++) {
      let obj = {
        serial_no: i + 1,
        start_range: "",
        end_range: "",
        grade_symbol: "",
      };
      arr.push(obj);
    }

    setGradeRange(arr);
  }, [grade.grade_count]);

  const onInputChange = (e) => {
    setGrade((prev) => ({
      ...prev,
      grade_count: +e.target.value,
    }));
  };

  const onSelectGradeType = (val) => {
    setGrade((prev) => ({
      ...prev,
      grade_type: val,
    }));
  };

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      // if (obj === "grade_type") {
      //   if (data["grade_type"] === "Using custom formula") {
      //   } else {
      //     if (data["grade_type"] === "Slab based") {
      //       if (!data[obj]) errors[obj] = `${obj} is required!`;
      //     }
      //   }
      // } else {
      //   if (!data[obj]) errors[obj] = `${obj} is required!`;
      // }
      if (!data[obj]) {
        if (
          obj === "grade_count" &&
          data["grade_type"] === "Using custom formula"
        ) {
        } else {
          errors[obj] = `${obj} is required!`;
        }
      }
    }
    return errors;
  };

  const onGradeInputChangeSymbol = (e, index) => {
    const inputarr = [...gradeRange];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp].grade_symbol = e.target.value;
      }
    }
    setGradeRange(inputarr);
  };

  const onGradeInputChangeStart = (e, index) => {
    const inputarr = [...gradeRange];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp].start_range = +e.target.value;
      }
    }
    setGradeRange(inputarr);
  };
  const onGradeInputChangeEnd = (e, index) => {
    const inputarr = [...gradeRange];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp].end_range = +e.target.value;
      }
    }
    setGradeRange(inputarr);
  };

  const onAddGrade = () => {
    const validation = onValidation(grade);
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      setDisabled((pre) => !pre);
      if (update === "Yes") {
        updateGradeSystem({
          gid: edit?._id,
          custom_grade: custom_grade,
          gradeSystem: {
            ...grade,
            grades: gradeRange,
          },
        })
          .then(() => {
            onRefetchApi();
            setDisabled((pre) => !pre);
          })
          .catch({});
      } else {
        createGradeSystem({
          did: did,
          custom_grade: custom_grade,
          gradeSystem: {
            ...grade,
            grades: gradeRange,
          },
        })
          .then(() => {
            onRefetchApi();
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    }
  };

  const onCustomGrade = (val) => {
    if (val === custom_grade) {
      setCustom_grade("");
    } else {
      setCustom_grade(val);
    }
  };

  //   console.info("sgfhjjgetAllUniversalGrade", getAllUniversalGrade);
  return (
    <div className={style.seating_modal}>
      <section
        className={style.seating_modal_title_left}
        style={{
          position: "relative",
        }}
      >
        <h6>{t("grade_system")}</h6>
        <button className={style.next_btn} title="Next" onClick={onAddGrade}>
          {t(update === "Yes" ? "update" : "save")}
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
        selectedValue={t("select_grade_type")}
        options={["Slab based", "Using custom formula"]}
        value={grade.grade_type}
        onClick={onSelectGradeType}
        errorShow={filled["grade_type"]}
      />
      {grade.grade_type === "Using custom formula" ? (
        getAllUniversalGrade?.custom_grades?.map((grade) => (
          <div
            className={
              custom_grade === grade?._id
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
            onClick={() => onCustomGrade(grade?._id)}
          >
            <img src="/images/department/bank-icon.svg" alt="bank icon" />
            <h6>{grade?.grade_name ?? ""}</h6>
          </div>
        ))
      ) : (
        <>
          <JoinFormInput
            labelText={t("grade_count")}
            placeholder={t("enter_grade_count")}
            name={"grade_count"}
            value={grade?.grade_count}
            type={"text"}
            onChange={onInputChange}
            errorShow={filled["grade_count"]}
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
          {gradeRange?.map((g_range, index) => (
            <section className={style.grade_system_body} key={index}>
              <h6
                style={{
                  width: "14.3%",
                  borderRight: "0.5px solid #121212",
                  padding: "0.7rem",
                }}
              >
                {g_range.serial_no}
              </h6>
              <h6
                style={{
                  width: "64%",
                  borderRight: "0.5px solid #121212",
                  padding: "0.7rem",
                  //   marginLeft: "-1.7rem",
                }}
              >
                <input
                  type={"text"}
                  value={g_range.start_range}
                  placeholder="00"
                  onChange={(e) => onGradeInputChangeStart(e, index)}
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
                  onChange={(e) => onGradeInputChangeEnd(e, index)}
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
                  placeholder=""
                  onChange={(e) => onGradeInputChangeSymbol(e, index)}
                  className={style.fee_head_amount_input}
                />
              </h6>
            </section>
          ))}
        </>
      )}
      {disabled && <QLoader />}
    </div>
  );
};

export default GradeSystemForm;

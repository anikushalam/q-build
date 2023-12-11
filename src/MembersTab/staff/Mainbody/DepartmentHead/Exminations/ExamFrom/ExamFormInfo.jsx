import React, { useEffect, useState } from "react";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useTranslation } from "react-i18next";
import style from "../SeatingArrangement/SeatingArrangement.module.css";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import TileWrapper from "../../../../../../Department/Institute/Components/exportData/TileWrapper";

const attainmentList = [
  {
    name: "yes",
    key: "YES",
  },
  {
    name: "no",
    key: "NO",
  },
];
const attainmentTypeList = [
  {
    name: "internal",
    key: "INTERNAL",
  },
  {
    name: "external",
    key: "EXTERNAL",
  },
];
const ExamFormInfo = ({ onGrabInfo, examInfo, openAs }) => {
  const { t } = useTranslation();
  const [createExam, setCreateExam] = useState({
    examName: "",
    // examType: "",
    // examMode: "Offline",
    examWeight: "",
    copo_attainment: "NO",
    copo_attainment_type: "INTERNAL",
  });

  const [filled, setFilled] = useState("");

  useEffect(() => {
    if (examInfo) {
      setCreateExam((prev) => ({
        ...prev,
        ...examInfo,
      }));
    }
    if (openAs === "BACKLOG") {
      setCreateExam((prev) => ({
        ...prev,
        examType: "Final",
      }));
    }
  }, [examInfo, openAs]);

  const onInputChange = (e) => {
    if (e.target.name === "examWeight") {
      setCreateExam((prev) => ({
        ...prev,
        examWeight: +e.target.value,
      }));
    } else {
      setCreateExam((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  // const onSelectExamType = (val) => {
  //   setCreateExam((prev) => ({
  //     ...prev,
  //     examType: val,
  //   }));
  // };

  // const onSelectExamMode = (val) => {
  //   setCreateExam((prev) => ({
  //     ...prev,
  //     examMode: val,
  //   }));
  // };

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (obj === "examWeight") {
        // if (data["examType"] === "Final") {
        // } else {
        //   if (data["examType"] === "Other") {
        //     if (!data[obj]) errors[obj] = `${obj} is required!`;
        //   }
        // }
      } else {
        if (!data[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    return errors;
  };

  const onAddInfo = () => {
    const validation = onValidation(createExam);
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
      onGrabInfo(createExam);
    }
  };
  const onSelectAttainment = (val) => {
    setCreateExam((prev) => ({
      ...prev,
      copo_attainment: val,
    }));
  };
  const onSelectAttainmentType = (val) => {
    setCreateExam((prev) => ({
      ...prev,
      copo_attainment_type: val,
    }));
  };

  return (
    <div className={style.seating_modal}>
      <section
        className={style.seating_modal_title_left}
        style={{
          position: "relative",
        }}
      >
        <h6>{t("create_exam")}</h6>
        <button className={style.next_btn} title="Next" onClick={onAddInfo}>
          {t("next")}
        </button>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.5rem",
        }}
      />
      <JoinFormInput
        labelText={t("exam_name")}
        placeholder={t("enter_exam_name")}
        name={"examName"}
        value={createExam?.examName}
        type={"text"}
        onChange={onInputChange}
        errorShow={filled["examName"]}
      />
      <JoinFormInput
        labelText={t("exam_weight")}
        placeholder={t("enter_exam_weightage")}
        name={"examWeight"}
        value={createExam?.examWeight}
        type={"number"}
        onChange={onInputChange}
        errorShow={filled["examWeight"]}
      />
      <TileWrapper
        labelText="copo_attainment"
        tileList={attainmentList}
        activeTile={createExam.copo_attainment}
        onTile={onSelectAttainment}
      />
      {createExam.copo_attainment === "YES" && (
        <TileWrapper
          labelText="attainment_type"
          tileList={attainmentTypeList}
          activeTile={createExam.copo_attainment_type}
          onTile={onSelectAttainmentType}
        />
      )}
      {/* <CustomNormalSelectInput
        selectLabel={t("exam_type")}
        selectedValue={t("select_exam_type")}
        options={["Final", "Other"]}
        value={createExam.examType}
        onClick={onSelectExamType}
        errorShow={filled["examType"]}
        openAs={openAs}
      />
      <CustomNormalSelectInput
        selectLabel={t("exam_mode")}
        selectedValue={t("select_exam_mode")}
        options={["Offline", "Online"]}
        value={createExam.examMode}
        onClick={onSelectExamMode}
        errorShow={filled["examMode"]}
      /> */}
    </div>
  );
};

export default ExamFormInfo;

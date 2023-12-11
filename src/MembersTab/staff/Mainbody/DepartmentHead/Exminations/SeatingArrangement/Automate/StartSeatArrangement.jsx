import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../SeatingArrangement.module.css";
import BorderBottom from "../../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import SelectedCountView from "./SelectedCountView";
import JoinFormInput from "../../../../../../../JoiningForm/Student/Form/JoinFormInput";
import CustomNormalSelectInput from "../../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
const StartSeatArrangement = ({
  onBack,
  automateState,
  onAddAutoMateSeating,
  studentCount,
  examName,
}) => {
  const { t } = useTranslation();
  const [filled, setFilled] = useState("");
  const [infoMore, setInfoMore] = useState({
    hall_limit: "",
    sequence: "",
  });

  const onInput = (e) => {
    setInfoMore((prev) => ({
      ...prev,
      hall_limit: +e.target.value,
    }));
  };

  const onSelect = (val) => {
    setInfoMore((prev) => ({
      ...prev,
      sequence: val,
    }));
  };

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };

  const onAddSeat = () => {
    const validation = onValidation(infoMore);
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
      onAddAutoMateSeating(infoMore);
    }
  };

  return (
    <div className={style.seating_modal}>
      <section
        className={style.seating_modal_title_left}
        style={{
          position: "relative",
        }}
      >
        <img src="/images/arrow-left-fees-icon.svg" onClick={onBack} alt="" />
        <h6>{t("select_exams")}</h6>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <SelectedCountView
        examName={examName}
        total_staff={automateState?.staff_list?.length ?? 0}
        total_classroom={automateState?.class_list?.length ?? 0}
        student_count={studentCount}
      />
      <JoinFormInput
        labelText={t("enter_exam_hall_student")}
        placeholder={t("enter_exam_hall_student_placeholder")}
        name={"hall_limit"}
        type={"number"}
        errorShow={filled["hall_limit"]}
        onChange={onInput}
        value={infoMore.hall_limit}
      />
      <CustomNormalSelectInput
        selectLabel={t("type_of_seating")}
        selectedValue={t("type_of_seating_placeholder")}
        options={["One Student / Bench", "Two Student / Bench"]}
        value={infoMore.sequence}
        onClick={onSelect}
        errorShow={filled["sequence"]}
      />
      <button
        className={style.start_arrangement_btn}
        title="Start Arrangement"
        onClick={onAddSeat}
      >
        {t("start_arrangement")}
      </button>
    </div>
  );
};

export default StartSeatArrangement;

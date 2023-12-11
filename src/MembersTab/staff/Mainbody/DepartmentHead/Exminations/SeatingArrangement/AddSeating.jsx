import React, { useEffect, useState } from "react";
import style from "./SeatingArrangement.module.css";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useTranslation } from "react-i18next";
import SeatingExaminationCard from "./SeatingExaminationCard";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";

const AddSeating = ({ onClose, currentSubject, onAddSubjectSeating }) => {
  const { t } = useTranslation();
  const [filled, setFilled] = useState("");
  const [studentCount, setStudentCount] = useState(0);

  const [add, setAdd] = useState({
    from: "",
    to: "",
  });

  const onInput = (e) => {
    setAdd((prev) => ({
      ...prev,
      [e.target.name]: +e.target.value,
    }));
  };

  useEffect(() => {
    if (add.from && add.to) {
      setStudentCount(+add.to + 1 - +add.from);
    }
  }, [add]);

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    if (data["from"] < data["to"]) {
    } else {
      errors["greater_value"] = `form is less than to`;
    }
    return errors;
  };
  const onAddSeat = () => {
    const validation = onValidation(add);
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
      onAddSubjectSeating({
        ...add,
        subjectId: currentSubject?.currentSubject?.subject?.subjectId,
        subjectName: currentSubject?.currentSubject?.subject?.subjectName,
        totalMarks: currentSubject?.currentSubject?.subject?.totalMarks,
        date: currentSubject?.currentSubject?.subject?.date,
        startTime: currentSubject?.currentSubject?.subject?.startTime,
        endTime: currentSubject?.currentSubject?.subject?.endTime,
        duration: "",
        subjectMasterId:
          currentSubject?.currentSubject?.subject?.subjectMasterId,
        paperId: currentSubject?.currentSubject?.subject?._id,
      });
    }
  };

  // console.info("asndjhsdfja", currentSubject);

  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.seating_modal}>
        <section className={style.seating_modal_title_left}>
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt=""
          />
          <h6>{t("select_exam")}</h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginBottom: "1rem",
          }}
        />
        <SeatingExaminationCard
          examDetail={currentSubject}
          viewAs="ADD_SEATING"
          studentCount={studentCount}
        />
        <JoinFormInput
          labelText={t("student_from")}
          placeholder={t("student_from_placeholder")}
          name={"from"}
          type={"number"}
          errorShow={filled["from"]}
          onChange={onInput}
          value={add.from}
        />
        <JoinFormInput
          labelText={t("student_to")}
          placeholder={t("student_to_placeholder")}
          name={"to"}
          type={"number"}
          errorShow={filled["to"]}
          onChange={onInput}
          value={add.to}
        />

        {filled["greater_value"] && (
          <span style={{ color: "red", marginLeft: "15px" }}>
            * Form field is less than To field
          </span>
        )}

        <button
          className={style.select_exam_btn}
          title="Add"
          style={{ justifyContent: "center" }}
          onClick={onAddSeat}
        >
          {t("add")}
        </button>
      </div>
    </PopupWrapper>
  );
};

export default AddSeating;

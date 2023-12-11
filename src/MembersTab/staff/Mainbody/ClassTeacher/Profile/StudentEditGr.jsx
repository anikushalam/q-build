import React, { useEffect, useState } from "react";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import JoinFormTextArea from "../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import QLoader from "../../../../../Loader/QLoader";
import style from "../../FinanceManager/FeesStructure/FeesStructure.module.css";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useTranslation } from "react-i18next";
import { useEditStudentGrNumber } from "../../../../../hooks/member_tab/admission-api";
const StudentEditGr = ({ uniqueGr, onClose, studentId, onRefetch }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [filled, setFilled] = useState(false);
  const [editStudentGrNumber] = useEditStudentGrNumber();
  const [state, setState] = useState({
    query_content: "",
    query_gr: uniqueGr ?? "",
  });

  useEffect(() => {
    if (uniqueGr) {
      setState((prev) => ({
        ...prev,
        query_gr: uniqueGr ?? "",
      }));
    }
  }, [uniqueGr]);

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };

  const onAction = () => {
    const validation = onValidation(state);
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
      editStudentGrNumber({
        sid: studentId,
        grNumberContent: state,
      })
        .then(() => {
          onRefetch();
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch({});
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "30rem",
          minHeight: "10rem",
          height: "fit-content",
        }}
      >
        <section
          className={style.fee_middle_section_container}
          style={{ marginBottom: "1.2rem" }}
        >
          <h6
            style={{
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {t("update_student_gr")}
          </h6>

          <BorderBottom
            customStyle={{
              width: "100%",
              marginTop: "0.7rem",
              marginBottom: "1rem",
            }}
          />
          <JoinFormInput
            labelText={t("student_gr")}
            placeholder={t("student_gr_placeholder")}
            name={"query_gr"}
            value={state?.query_gr}
            type={"text"}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                query_gr: e.target.value,
              }))
            }
            errorShow={filled["query_gr"]}
          />

          <JoinFormTextArea
            labelText={t("gr_student_message_label")}
            placeholder={t("gr_student_message_label_placeholder")}
            name={"query_content"}
            value={state.query_content}
            type={"text"}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                query_content: e.target.value,
              }))
            }
            errorShow={filled["query_content"]}
          />
          <button
            onClick={onAction}
            className={style.fee_middle_confirm_button}
            style={{
              marginTop: "4rem",
            }}
          >
            {t("update")}
          </button>
        </section>
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default StudentEditGr;

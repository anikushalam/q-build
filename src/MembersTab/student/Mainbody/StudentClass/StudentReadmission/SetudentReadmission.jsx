import React from "react";
import PopupWrapper from "../../../../staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import style from "../../../../staff/Mainbody/SubjectTeacher/Academics/Academics.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useNavigate, useParams } from "react-router-dom";

const SetudentReadmission = ({ onClose, student }) => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const onSkip = () => {
    onClose();
  };

  const onTakeAdmission = () => {
    navigate(`/q/${params.username}/edit/student`, {
      state: {
        sid: student?._id,
        openAs: "STUDENT_MEMBER",
        type: "READMISSION",
        student: student,
      },
    });
  };
  return (
    <PopupWrapper onClose={() => {}}>
      <div className={style.add_academic_record}>
        <div className={style.add_academic_record_title}>
          <div className={style.add_academic_record_text}>
            <h6>{t("re_admission")}</h6>
          </div>
          <button onClick={onSkip}>{t("skip")}</button>
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.5rem",
            marginBottom: "0.6rem",
          }}
        />

        <div className={style.re_admission_middle_text}>
          {student?.department?.dName ?? ""}
          {", "}
          {student?.studentClass?.batch?.batchName}
          {", "}
          {student?.studentClass?.classTitle}
        </div>

        <button
          className={style.readmission_take_btn}
          onClick={onTakeAdmission}
        >
          {t("take_admission")}
        </button>
      </div>
    </PopupWrapper>
  );
};

export default SetudentReadmission;

import React, { useState } from "react";
import style from "../../../../../MembersTab/staff/Mainbody/ClassTeacher/Profile/EditConfirm.module.css";
import { useTranslation } from "react-i18next";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import Overlay from "../../../../../Search/Overlay";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../Loader/QLoader";
import { useUpdateSubjectCourseCredit } from "../../../../../hooks/member_tab/department-api";
const SubjectCreditUpdate = ({ onClose, courseCredit, sid, onRefetch }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [credit, setCredit] = useState(courseCredit ?? "");
  const [updateSubjectCourseCredit] = useUpdateSubjectCourseCredit();
  const onUpdate = () => {
    if (sid) {
      setDisabled((pre) => !pre);
      updateSubjectCourseCredit({
        sid: sid,
        subjectData: {
          course_credit: credit,
        },
      })
        .then(() => {
          onRefetch();
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <>
      <SearchModalBackdrop onClose={onClose} />
      <Overlay
        customStyle={{
          zIndex: "1200",
        }}
      >
        <div
          className={style.edit_modal_container}
          style={{ width: "420px", height: "15rem" }}
        >
          <h6 className={style.modal_header}>{t("update_course_credit")}</h6>
          <BorderBottom
            customStyle={{
              width: "100%",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
          <JoinFormInput
            placeholder={t("please_enter_subject_course_credit")}
            name={"credit"}
            value={credit}
            type={"text"}
            onChange={(e) => setCredit(e.target.value)}
            customStyleContainer={{ width: "100%" }}
          />
          <button
            className={style.update_to_btn}
            style={{
              marginTop: "3.5rem",
            }}
            onClick={onUpdate}
          >
            {t("update")}
          </button>
        </div>
        {disabled && <QLoader />}
      </Overlay>
    </>
  );
};

export default SubjectCreditUpdate;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../../Hostel/HostelFeeStructure/HostelFeeStructure.module.css";
import { useAddChapterSubject } from "../../../../../../hooks/member_tab/subject-api";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../../Loader/QLoader";

const CreateChapter = ({ onClose, onRefetch, sid }) => {
  const { t } = useTranslation();
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    chapter_name: "",
  });

  const [addChapterSubject] = useAddChapterSubject();

  const onAddHostelUnit = () => {
    if (!state.chapter_name) {
      setFilled(true);
    } else {
      if (sid) {
        setDisabled((pre) => !pre);
        addChapterSubject({
          sid: sid,
          addChapter: state,
        })
          .then(() => {
            onRefetch();
            onClose();
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    }
  };

  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.add_category_modal}>
        <div className={style.add_category_modal_title}>
          <h6>{t("add_new_chapter")}</h6>
          <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.6rem",
            marginBottom: "0.6rem",
          }}
        />
        <JoinFormInput
          labelText={t("chapter_name")}
          placeholder="please enter chapter name"
          name={"chapter_name"}
          value={state?.chapter_name}
          type={"text"}
          onChange={(e) => {
            setState((prev) => ({
              ...prev,
              chapter_name: e.target.value,
            }));
          }}
          errorShow={filled}
        />

        <button
          className={style.set_fees_structure_btn}
          title="Create Batch"
          onClick={onAddHostelUnit}
          style={{ justifyContent: "center" }}
        >
          {t("create")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default CreateChapter;

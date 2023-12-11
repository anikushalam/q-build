import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../../Hostel/HostelFeeStructure/HostelFeeStructure.module.css";
import { useAddChapterTopicSubject } from "../../../../../../hooks/member_tab/subject-api";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../../Loader/QLoader";
import JoinFormCalender from "../../../../../../JoiningForm/Student/Form/JoinFormCalender";

const CreateTopic = ({ onClose, onRefetch, chid }) => {
  const { t } = useTranslation();
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    topic_name: "",
    topic_last_date: "",
  });

  const [addChapterSubject] = useAddChapterTopicSubject();
  const onDateFunctionTo = (val) => {
    let splitDate = val?.split("/");
    let modify = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    setState((prev) => ({
      ...prev,
      topic_last_date: modify,
    }));
  };
  const onAddHostelUnit = () => {
    if (!state.topic_name) {
      setFilled(true);
    } else {
      if (chid) {
        setDisabled((pre) => !pre);
        addChapterSubject({
          chid: chid,
          addTopic: state,
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
      <div
        className={style.add_category_modal}
        style={{
          width: "35rem",
          minHeight: "24rem",
        }}
      >
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
          labelText={t("topic_name")}
          placeholder="please enter topic name"
          name={"topic_name"}
          value={state?.topic_name}
          type={"text"}
          onChange={(e) => {
            setState((prev) => ({
              ...prev,
              topic_name: e.target.value,
            }));
          }}
          errorShow={filled}
        />
        <JoinFormCalender
          labelText={t("topic_last_date")}
          placeholder={t("please_select_topic_last_date")}
          name={"topic_last_date"}
          value={state.topic_last_date}
          onDateFunction={onDateFunctionTo}
          customStyleContainer={{ position: "relative", width: "100%" }}
          datePickerPosition={{
            top: "-8rem",
            left: "5rem",
          }}
          errorShow={filled["topic_last_date"]}
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

export default CreateTopic;

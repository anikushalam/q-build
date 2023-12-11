import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../../../staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import style from "../../../../staff/Mainbody/DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import JoinFormTextArea from "../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import QLoader from "../../../../../Loader/QLoader";
import { useAksStudentMentorQuery } from "../../../../../hooks/member_tab/student-api";
const StudentAskQuery = ({ onRefetch, onClose, mid, sid }) => {
  const { t } = useTranslation();
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [content, setContent] = useState("");

  const [aksStudentMentorQuery] = useAksStudentMentorQuery();
  const onInputChange = (e) => {
    setContent(e.target.value);
  };

  const onAskQuery = () => {
    if (!content) {
      setFilled({ query: "* required" });
    } else {
      setDisabled((pre) => !pre);
      aksStudentMentorQuery({
        mid: mid,
        sid: sid,
        query: {
          query: content,
        },
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
      <div className={style.seating_modal}>
        <section
          className={style.seating_modal_title_left}
          style={{
            position: "relative",
          }}
        >
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt=""
          />
          <h6>{t("ask_query")}</h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginBottom: "1rem",
          }}
        />

        <JoinFormTextArea
          labelText={t("content")}
          placeholder={t("please_write_content")}
          name={"content"}
          value={content}
          type={"text"}
          onChange={onInputChange}
          customStyleContainer={{
            width: "100%",
          }}
          errorShow={filled["query"]}
        />
        <button className={style.start_arrangement_btn} onClick={onAskQuery}>
          {t("send")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default StudentAskQuery;

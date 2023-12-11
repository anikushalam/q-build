import React, { useEffect, useState } from "react";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../Academics.module.css";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../../../Loader/QLoader";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useUpdateOneTopicChapter } from "../../../../../../hooks/member_tab/subject-api";
import JoinFormCalender from "../../../../../../JoiningForm/Student/Form/JoinFormCalender";

const AcademicTopicEdit = ({
  onClose,
  topicMenu,
  onRefetch,
  onCloseParent,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [filled, setFilled] = useState(false);
  const [topicName, setTopicName] = useState(topicMenu?.topic_name ?? "");
  const [topicDate, setTopicDate] = useState(topicMenu?.topic_last_date ?? "");
  const [updateOneTopicChapter] = useUpdateOneTopicChapter();
  useEffect(() => {
    if (topicMenu?.topic_name) {
      setTopicName(topicMenu?.topic_name ?? "");
      setTopicDate(topicMenu?.topic_last_date ?? "");
    }
  }, [topicMenu]);

  const onUpdateTopic = () => {
    if (!topicName) {
      setFilled(true);
    } else {
      setDisabled(true);
      updateOneTopicChapter({
        ctid: topicMenu?._id,
        topicUpdate: {
          chapter: topicMenu?.chapter,
          created_at: topicMenu?.created_at,
          subject: topicMenu?.subject,
          topic_completion_status: topicMenu?.topic_completion_status,
          topic_current_status: topicMenu?.topic_current_status,
          topic_last_date: topicDate,
          topic_name: topicName,
          _id: topicMenu?._id,
        },
      })
        .then(() => {
          onRefetch();
          onCloseParent();
          setDisabled(false);
        })
        .catch({});
    }
  };

  const onDateFunction = (val) => {
    let splitDate = val?.split("/");
    let dob = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    setTopicDate(dob);
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_academic_record}
        style={{
          width: "30rem",
          minHeight: "30rem",
        }}
      >
        <div className={style.add_academic_record_title}>
          <div className={style.add_academic_record_text}>
            <img
              src="/images/arrow-left-fees-icon.svg"
              onClick={onClose}
              alt="back icon"
              style={{
                cursor: "pointer",
              }}
            />
            <h6>{topicMenu?.topic_name ?? ""}</h6>
          </div>
          <button onClick={onUpdateTopic}>{t("update")}</button>
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <JoinFormInput
          labelText={t("topic_name")}
          placeholder={t("topic_name_placeholder")}
          name={"topic_name"}
          value={topicName}
          type={"text"}
          onChange={(e) => setTopicName(e.target.value)}
          customStyleContainer={{
            width: "100%",
          }}
          errorShow={filled}
        />
        <JoinFormCalender
          labelText={t("topic_date")}
          placeholder={t("topic_date_placeholder")}
          name={"topicDate"}
          value={topicDate}
          onDateFunction={onDateFunction}
          customStyleContainer={{ position: "relative" }}
          datePickerPosition={{
            top: "-3rem",
            left: "3rem",
          }}
        />
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default AcademicTopicEdit;

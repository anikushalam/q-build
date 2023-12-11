import React from "react";
import style from "../Academics.module.css";
import AcademicTopicCard from "../AcademicDetail/AcademicTopicCard";
import { useTranslation } from "react-i18next";

const SelectedTopic = ({ topic, topicId }) => {
  const { t } = useTranslation();
  return (
    <div className={style.academic_card_container}>
      <div className={style.academic_card_top}>
        <img
          src="/images/member_tab/subject/subject-topic-icon.svg"
          alt="topic icon"
        />
        <h6>{t("selected_topics")}</h6>
      </div>

      {topic?.map((top) => (
        <AcademicTopicCard
          topic={top}
          key={top?._id}
          topicId={topicId}
          isView="SAVE_RECORD"
        />
      ))}
    </div>
  );
};

export default SelectedTopic;

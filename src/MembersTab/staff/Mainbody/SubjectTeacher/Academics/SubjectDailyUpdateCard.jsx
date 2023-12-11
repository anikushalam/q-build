import React, { useState } from "react";
import style from "./Academics.module.css";
import moment from "moment";
import { useTranslation } from "react-i18next";
import AcademicAditionalInfo from "./AcademicAditionalInfo";
import AcademicTopicCard from "./AcademicDetail/AcademicTopicCard";
import AddAcademicRecord from "./AddAdcemicRecord/AddAcademicRecord";

const SubjectDailyUpdateCard = ({ daily, sid, onParentRefetch, isView }) => {
  const { t } = useTranslation();
  const [dailyMenu, setDailyMenu] = useState("");
  return (
    <>
      <div className={style.academic_card_container}>
        <div
          className={style.academic_card_top}
          style={{
            justifyContent: "space-between",
          }}
        >
          <div className={style.academic_card_top_text}>
            <img
              src="/images/member_tab/subject/subject-topic-icon.svg"
              alt="topic icon"
            />
            <h6>
              {moment(daily?.date).format("Do MMMM, yyyy")}: Topics Covered
            </h6>
          </div>
          {isView === "STUDENT" ? null : (
            <h6 onClick={() => setDailyMenu(daily)}>({t("edit_")})</h6>
          )}
        </div>
        {daily?.daily_topic?.map((tp) => (
          <AcademicTopicCard
            key={tp?._id}
            topic={tp?.topic}
            topicType={tp?.status}
            topicCurrentStatus={tp?.current_status}
            isView="DAILY"
          />
        ))}

        <AcademicAditionalInfo
          updateDescription={daily?.updateDescription}
          upadateImage={daily?.upadateImage}
          createdAt={daily?.createdAt}
          isView={isView}
          subject={daily?.subject}
        />
      </div>
      {dailyMenu && (
        <AddAcademicRecord
          onClose={() => setDailyMenu("")}
          sid={sid}
          onRefetch={onParentRefetch}
          dailyMenu={dailyMenu}
        />
      )}
    </>
  );
};

export default SubjectDailyUpdateCard;

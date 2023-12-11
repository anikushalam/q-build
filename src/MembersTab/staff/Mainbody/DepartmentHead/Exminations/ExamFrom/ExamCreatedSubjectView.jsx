import React, { useEffect, useState } from "react";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { useTranslation } from "react-i18next";
import style from "../SeatingArrangement/SeatingArrangement.module.css";
import SubjectCard from "../SeatingArrangement/SubjectCard";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";

const ExamCreatedSubjectView = ({ examSubject }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  useEffect(() => {
    if (examSubject?.length) {
      setShowingDataLoading(false);
    }
  }, [examSubject]);
  useEffect(() => {
    document.getElementById("scrollViewSubject")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, []);
  return (
    <>
      <div className={style.with_search} id="scrollViewSubject">
        <h6>{t("exam_schedule")}</h6>
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />
      {examSubject?.map((subWithClass) =>
        subWithClass?.subject?.map((subject) => (
          <SubjectCard
            key={subject?._id}
            classMaster={subWithClass?.className}
            subject={subject}
            customCardStyle={{
              width: "49.5%",
            }}
          />
        ))
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default ExamCreatedSubjectView;

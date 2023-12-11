import React, { useEffect } from "react";
import style from "../Academics.module.css";
import { useTranslation } from "react-i18next";
import { useGetOneSubjectProfile } from "../../../../../../hooks/member_tab/subject-api";

const getCalculatePercentage = (total, value) => {
  if (!total || !value) {
    return 0;
  } else {
    return Math.ceil((value * 100) / total);
  }
};
const AcademicHeader = ({ sid }) => {
  const { t } = useTranslation();
  const { getOneSubjectProfile, getOneSubjectProfileRefetch } =
    useGetOneSubjectProfile({
      sid: sid,
      skip: !sid,
    });

  useEffect(() => {
    if (sid) {
      getOneSubjectProfileRefetch();
    }
  }, [sid, getOneSubjectProfileRefetch]);
  return (
    <div className={style.academic_header_container}>
      <div className={style.academic_header_each}>
        <h5>
          {t("academic_lectures")}{" "}
          {getOneSubjectProfile?.one_subject?.lecture_analytic?.lecture_count ??
            0}{" "}
          {` (${
            getOneSubjectProfile?.one_subject?.lecture_analytic?.lecture_time ??
            0
          }${t("mins_each")})`}
        </h5>
        <h6>
          {getCalculatePercentage(
            getOneSubjectProfile?.one_subject?.lecture_analytic?.lecture_count,
            getOneSubjectProfile?.one_subject?.lecture_analytic
              ?.lecture_complete
          )}
          %
        </h6>
      </div>
      <div className={style.academic_header_each}>
        <h5>
          {t("academic_practical")}{" "}
          {getOneSubjectProfile?.one_subject?.practical_analytic
            ?.practical_count ?? 0}{" "}
          {` (${
            getOneSubjectProfile?.one_subject?.practical_analytic
              ?.practical_time ?? 0
          }${t("mins_each")})`}
        </h5>
        <h6>
          {getCalculatePercentage(
            getOneSubjectProfile?.one_subject?.practical_analytic
              ?.practical_count,
            getOneSubjectProfile?.one_subject?.practical_analytic
              ?.practical_complete
          )}
          %
        </h6>
      </div>
      <div className={style.academic_header_each}>
        <h5>
          {t("academic_tutorials")}{" "}
          {getOneSubjectProfile?.one_subject?.tutorial_analytic
            ?.tutorial_count ?? 0}{" "}
          {` (${
            getOneSubjectProfile?.one_subject?.tutorial_analytic
              ?.tutorial_time ?? 0
          }${t("mins_each")})`}
        </h5>
        <h6>
          {getCalculatePercentage(
            getOneSubjectProfile?.one_subject?.tutorial_analytic
              ?.tutorial_count,
            getOneSubjectProfile?.one_subject?.tutorial_analytic
              ?.tutorial_complete
          )}
          %
        </h6>
      </div>
      <div className={style.academic_header_each}>
        <h5>
          {t("academic_topics")} {getOneSubjectProfile?.total_topic ?? 0}
        </h5>
        <h6>
          {getOneSubjectProfile?.academic_performance?.academic_percentage ?? 0}
          %
        </h6>
      </div>
    </div>
  );
};

export default AcademicHeader;

import React, { useEffect } from "react";
import MiddleContent from "./MiddleContent/MiddleContent";
import SubjectTeacherHeader from "./SubjectTeacherHeader";
import { useGetOneSubjectProfile } from "../../../../../hooks/member_tab/subject-api";
import { useTranslation } from "react-i18next";

function SubjectTeacherProfile({ onClickValue, carryParentState }) {
  const { t } = useTranslation();
  const { getOneSubjectProfile, getOneSubjectProfileRefetch } =
    useGetOneSubjectProfile({
      sid: onClickValue?._id,
      skip: !onClickValue?._id,
    });

  useEffect(() => {
    if (onClickValue?._id) {
      getOneSubjectProfileRefetch();
    }
  }, [onClickValue?._id, getOneSubjectProfileRefetch]);
  return (
    <div>
      <SubjectTeacherHeader
        defaultCover="/images/profileAndCover/subject-cover.png"
        textLarge={`${onClickValue?.class?.classTitle} ${onClickValue?.subjectName} ${onClickValue?.class?.batch?.batchName}`}
        count1={`${
          getOneSubjectProfile?.one_subject?.lecture_analytic?.lecture_count ??
          0
        } ${t("lectures_and")}`}
        count2={`${
          getOneSubjectProfile?.academic_performance?.academic_percentage ?? 0
        }% ${t("academics_covered")}`}
        carryParentState={{ ...carryParentState, subjectId: onClickValue?._id }}
        subjectId={onClickValue?._id}
      />
      <MiddleContent carryParentState={carryParentState} />
    </div>
  );
}

export default SubjectTeacherProfile;

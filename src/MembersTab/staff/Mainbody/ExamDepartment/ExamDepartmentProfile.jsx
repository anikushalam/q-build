import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useGetInstituteDetailByPromote } from "../../../../hooks/member_tab/department-api";
import UniversalDepartmentMiddleHead from "../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import ExamDepartmentList from "./ExamDepartmentList";
import style from "./ExamDepartment.module.css";

const ExamDepartmentProfile = ({ carryParentState, instituteId }) => {
  const { t } = useTranslation();
  const { getInstituteDetailByPromote, getInstituteDetailByPromoteRefetch } =
    useGetInstituteDetailByPromote({
      id: instituteId,
      skip: !instituteId,
    });

  useEffect(() => {
    if (instituteId) getInstituteDetailByPromoteRefetch();
  }, [instituteId]);

  return (
    <>
      <UniversalDepartmentMiddleHead
        coverKey={
          getInstituteDetailByPromote?.institute?.insProfileCoverPhoto ?? ""
        }
        coverId={getInstituteDetailByPromote?.institute?.coverId ?? ""}
        defaultCover="/images/profileAndCover/institute-cover.png"
        textLarge={getInstituteDetailByPromote?.institute?.insName ?? ""}
        textSmall={getInstituteDetailByPromote?.institute?.name ?? ""}
        count1label={t("department")}
        count1={getInstituteDetailByPromote?.institute?.departmentCount ?? 0}
        count2label={t("classes")}
        count2={getInstituteDetailByPromote?.institute?.classCount ?? 0}
        count3label={t("students")}
        count3={getInstituteDetailByPromote?.institute?.studentCount ?? 0}
      />
      <div className={style.demaprtment_list}>
        <ExamDepartmentList
          instituteId={instituteId}
          carryParentState={carryParentState}
        />
      </div>
    </>
  );
};

export default ExamDepartmentProfile;

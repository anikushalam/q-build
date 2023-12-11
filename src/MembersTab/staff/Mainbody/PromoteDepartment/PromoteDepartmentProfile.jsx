import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetInstituteDetailByPromote } from "../../../../hooks/member_tab/department-api";
import UniversalDepartmentMiddleHead from "../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import DepartmentList from "./Department/DepartmentList";
import style from "./PromoteDepartment.module.css";
import PromoteDepartmentTab from "./PromoteDepartmentTab";
import AllStudent from "../FinanceManager/AllStudent/AllStudent";
import StudentSectionSetting from "./StudentSectionSetting";
import { useLocation, useNavigate } from "react-router-dom";
import StudentMessageHistory from "../FinanceManager/AllStudent/StudentMessageHistory";
import PromoteMenuTab from "./PromoteMenuTab";

const PromoteDepartmentProfile = ({ carryParentState, instituteId }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const navigate = useNavigate();

  const { getInstituteDetailByPromote, getInstituteDetailByPromoteRefetch } =
    useGetInstituteDetailByPromote({
      id: instituteId,
      skip: !instituteId,
    });

  useEffect(() => {
    if (instituteId) getInstituteDetailByPromoteRefetch();
  }, [instituteId]);

  const onBack = () => {
    navigate(-1);
  };
  return (
    <>
      {getQuery.search?.substring(3) === "student-message" ? (
        <StudentMessageHistory sid={instituteId} />
      ) : (
        <>
          {!getQuery.search ? (
            <>
              <UniversalDepartmentMiddleHead
                coverKey={
                  getInstituteDetailByPromote?.institute
                    ?.insProfileCoverPhoto ?? ""
                }
                coverId={getInstituteDetailByPromote?.institute?.coverId}
                defaultCover="/images/profileAndCover/institute-cover.svg"
                textLarge={
                  getInstituteDetailByPromote?.institute?.insName ?? ""
                }
                textSmall={getInstituteDetailByPromote?.institute?.name ?? ""}
                count1label={t("department")}
                count1={
                  getInstituteDetailByPromote?.institute?.departmentCount ?? 0
                }
                count2label={t("classes")}
                count2={getInstituteDetailByPromote?.institute?.classCount ?? 0}
                count3label={t("students")}
                count3={
                  getInstituteDetailByPromote?.institute?.studentCount ?? 0
                }
              />
              <PromoteMenuTab carryParentState={carryParentState} />
            </>
          ) : (
            <div className={style.demaprtment_list}>
              {getQuery.search?.substring(3) === "departmentlist" && (
                <>
                  <h6>{t("departments")}</h6>
                  <DepartmentList
                    instituteId={instituteId}
                    carryParentState={carryParentState}
                  />
                </>
              )}
              {getQuery.search?.substring(3) === "student" && (
                <>
                  <AllStudent
                    instituteId={instituteId}
                    is_view="STUDENT_SECTION"
                    viewId={carryParentState?.onClickValue?._id}
                    studentAlias={
                      getInstituteDetailByPromote?.institute
                        ?.alias_pronounciation?.student_alias
                    }
                    headId={carryParentState?.sid}
                    carryParentState={carryParentState}
                  />
                </>
              )}
              {getQuery.search?.substring(3) === "setting" && (
                <>
                  <h6>{t("setting")}</h6>
                  <StudentSectionSetting instituteId={instituteId} />
                </>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PromoteDepartmentProfile;

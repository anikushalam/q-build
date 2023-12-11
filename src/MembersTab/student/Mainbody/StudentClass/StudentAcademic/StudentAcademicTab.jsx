import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import UniversalTabWithState from "../../../../staff/Mainbody/DepartmentHead/Competetions/CompetitionTab/UniversalTabWithState";
import style from "../../../../staff/Mainbody/SubjectTeacher/Academics/Academics.module.css";
import { useGetSubjectListByStudent } from "../../../../../hooks/member_tab/student-api";

const StudentAcademicTab = ({ carryParentState, sid }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const getQuery = useLocation();
  const params = useParams();
  const [tabList, setTabList] = useState([
    {
      name: t("all"),
      id: 0,
      url: "member/student/class?a=academic",
      carryParentState: {
        onClickValue: carryParentState?.onClickValue,
        sid: carryParentState?.sid,
        selectedTab: 0,
      },
    },
  ]);
  const { getSubjectListByStudent, getSubjectListByStudentRefetch } =
    useGetSubjectListByStudent({
      sid: sid,
      skip: !sid,
    });

  useEffect(() => {
    if (sid) getSubjectListByStudentRefetch();
  }, [sid, getSubjectListByStudentRefetch]);
  useEffect(() => {
    if (getSubjectListByStudent?.subjects) {
      let list = [
        {
          name: t("all"),
          id: 0,
          url: "member/student/class?a=academic",
          carryParentState: {
            onClickValue: carryParentState?.onClickValue,
            sid: carryParentState?.sid,
            selectedTab: 0,
          },
        },
      ];
      for (let sub of getSubjectListByStudent?.subjects) {
        list.push({
          name: sub?.subjectName,
          id: list.length,
          url: `member/student/class?a=academic&type=${sub?.subjectName}`,
          carryParentState: {
            ...carryParentState,
            subjectName: sub?.subjectName,
            subjectId: sub?._id,
            selectedTab: list.length,
          },
        });
      }
      setTabList(() => list);
    }
  }, [getSubjectListByStudent?.subjects]);

  // console.info("carryParentState", carryParentState);
  return (
    <>
      <UniversalTabWithState
        tabList={tabList}
        activeIndexTab={getQuery.state?.selectedTab}
        customStyleTab={{
          width: "100%",
        }}
        customStyleLink={{
          width: `${100 / getSubjectListByStudent?.subjects?.length}%`,
        }}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "0.7rem",
        }}
      />
      {![undefined, null, ""]?.includes(searchParams.get("type")) ? (
        <Link
          to={`/q/${params.username}/member/student/class?a=subject-academic`}
          state={{
            ...carryParentState,
            isView: "STUDENT",
          }}
        >
          <div className={style.student_view_academic_btn}>
            <h6>{t("view_academics")}</h6>
            <img src="/images/forward-right-icon.svg" alt="view academics" />
          </div>
        </Link>
      ) : null}
    </>
  );
};

export default StudentAcademicTab;

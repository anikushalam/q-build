import React from "react";
import style from "./ClassTeacher.module.css";
import ClassTeacherProfile from "./ClassTeacherProfile/ClassTeacherProfile";
import ClassSetting from "./ClassSetting/ClassSetting";
import ClassCatalog from "./ClassCatalog/ClassCatalog";
import StudentRequest from "./StudentRequest/StudentRequest";
import { useClassProfile } from "../../../../hooks/member_tab/class-api";
import Attendence from "./ClassCatalog/Attendence/Attendence";
import Fees from "./ClassCatalog/Fees/Fees";
import FinalReport from "./ClassCatalog/FinalReport/FinalReport";
import Behaviour from "./ClassCatalog/Behaviour/Behaviour";
import { useLocation } from "react-router-dom";
import Checklist from "./Checklist/Checklist";
import ChecklistDetail from "./Checklist/ChecklistDetail";
import Leaves from "./ClassCatalog/Attendence/Leaves/Leaves";
import Complaints from "./ClassSetting/Complaints/Complaints";
import PromoteList from "../PromoteDepartment/Department/PromoteList";
import ClassBatch from "./ClassBatch/ClassBatch";
import ClassBatchDetail from "./ClassBatch/ClassBatchDetail";
import AdministratorClassTimetable from "../AcademicAdministrator/Timetable/AdministratorClassTimetable";
import styleHostel from "../Hostel/Hostel.module.css";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useTranslation } from "react-i18next";
import OneDepartmentClassDetail from "../DepartmentHead/OneDepartmentClassDetail/OneDepartmentClassDetail";

function ClassTeacher({ onClickValue, carryParentState }) {
  const getQuery = useLocation();
  const { t } = useTranslation();
  const { classProfile, classProfileRefetch } = useClassProfile(
    onClickValue?._id
  );
  React.useEffect(() => {
    if (onClickValue?._id) classProfileRefetch();
  }, [onClickValue?._id, classProfileRefetch]);

  // console.info("THis is profile", classProfile);

  return (
    <div className={style.departmenthead}>
      {!getQuery?.search && (
        <ClassTeacherProfile
          classProfile={classProfile?.classes}
          carryParentState={carryParentState}
        />
      )}
      {getQuery?.search && (
        <div>
          {getQuery?.search?.substring(3, 10) === "catalog" && (
            <ClassCatalog
              cid={classProfile?.classes?._id}
              instituteId={classProfile?.classes?.institute?._id}
              carryParentState={carryParentState}
            />
          )}

          {getQuery?.search?.substring(3) === "attendance" && (
            <Attendence
              cid={classProfile?.classes?._id}
              className={`${classProfile?.classes?.className} - ${classProfile?.classes?.classTitle}`}
            />
          )}
          {getQuery?.search?.substring(3) === "time-table" && (
            <div className={styleHostel.hostel_container}>
              <div className={styleHostel.with_search}>
                <h6>{t("time_table")}</h6>
              </div>
              <BorderBottom
                customStyle={{
                  marginTop: "0.5rem",
                  marginBottom: "0.6rem",
                  width: "100%",
                }}
              />
              <AdministratorClassTimetable clsId={classProfile?.classes?._id} />
            </div>
          )}
          {getQuery?.search?.substring(3) === "leave" && (
            <Leaves cid={classProfile?.classes?._id} />
          )}
          {getQuery?.search?.substring(3) === "fees" && (
            <Fees cid={classProfile?.classes?._id} />
          )}
          {getQuery?.search?.substring(3) === "checklist" && (
            <Checklist
              cid={classProfile?.classes?._id}
              carryParentState={carryParentState}
            />
          )}
          {getQuery?.search?.substring(3) === "behaviour" && (
            <Behaviour cid={classProfile?.classes?._id} />
          )}
          {getQuery?.search?.substring(3, 9) === "report" && (
            <FinalReport
              cid={classProfile?.classes?._id}
              carryParentState={carryParentState}
            />
          )}

          {getQuery?.search?.substring(3) === "promote" && (
            <PromoteList classId={classProfile?.classes?._id} />
          )}

          {getQuery?.search?.substring(3) === "complaint" && (
            <Complaints cid={classProfile?.classes?._id} />
          )}

          {getQuery?.search?.substring(3) === "setting" && (
            <ClassSetting
              cid={classProfile?.classes?._id}
              startDate={classProfile?.classes?.classStartDate}
              classCode={classProfile?.classes?.classCode}
              classStatus={classProfile?.classes?.classStatus}
            />
          )}
          {getQuery?.search?.substring(3) === "request" && (
            <StudentRequest
              cid={classProfile?.classes?._id}
              id={classProfile?.classes?.institute?._id}
              did={classProfile?.classes?.department?._id}
              bid={classProfile?.classes?.batch?._id}
            />
          )}
          {getQuery?.search?.substring(3) === "checklist&detail" && (
            <ChecklistDetail
            // cid={classProfile?.classes?._id}
            />
          )}
          {getQuery?.search?.substring(3) === "batch" && (
            <ClassBatch
              cid={classProfile?.classes?._id}
              carryParentState={carryParentState}
            />
          )}
          {getQuery?.search?.substring(3) === "batch-detail" && (
            <ClassBatchDetail
              cid={classProfile?.classes?._id}
              masterBatchId={classProfile?.classes?.batch?._id}
            />
          )}

          {(getQuery.search?.substring(3, 10) === "subject" ||
            getQuery.search?.substring(3, 13) === "assignment") && (
            <OneDepartmentClassDetail
              carryParentState={carryParentState}
              viewAs="CLASS_TEACHER"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default ClassTeacher;

import React, { useEffect, useState } from "react";
import CustomSuspense from "../../../Custom/SuspenseLoading/CustomSuspense";
import {
  useOneDepartmentAllSubjectOneClass,
  // useOneSubjectEditDetail,
} from "../Components/DepartmentApi/depart-api";
import style from "./ClassProfileMain.module.css";
import { useTranslation } from "react-i18next";
import OneRow from "./OneRow";
import ExportStudentAttendance from "../Components/exportData/ExportStudentAttendance";
import InstituteClassTab from "./InstituteClassTab";
import InstituteClassStudentList from "./InstituteClassStudentList";
import ExportStudentReport from "../Components/exportData/ExportStudentReport";
import DeleteStudent from "./DeleteStudent/DeleteStudent";
import { useParams, Link, useSearchParams } from "react-router-dom";
import ClassBatch from "../../../MembersTab/staff/Mainbody/ClassTeacher/ClassBatch/ClassBatch";
import ClassBatchDetail from "../../../MembersTab/staff/Mainbody/ClassTeacher/ClassBatch/ClassBatchDetail";
const CreateSubject = React.lazy(() =>
  import("../../../Dashboard/InsDashboard/Modals/Subject/CreateSubject")
);
const ClassProfileMain = ({ cid, id, did, bid, className }) => {
  const { t } = useTranslation();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [addSubject, setAddSubject] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editSubject, setEditSubject] = useState("");
  const [exportAttendance, setExportAttendance] = useState(false);
  const [exportReport, setExportReport] = useState(false);
  const [deleteStudent, setDeleteStudent] = useState(false);
  const { oneClassAllSubject, oneClassAllSubjectRefetch } =
    useOneDepartmentAllSubjectOneClass({
      cid: cid,
      skip: !cid,
    });

  useEffect(() => {
    if (cid) oneClassAllSubjectRefetch();
  }, [cid, oneClassAllSubjectRefetch]);

  const editOneSubject = (data) => {
    setEditSubject(data);
    setEdit(true);
    setAddSubject(true);
  };

  const onCloseAttendance = () => {
    setExportAttendance((pre) => !pre);
  };
  const onCloseReport = () => {
    setExportReport((pre) => !pre);
  };
  const onCloseStudent = () => {
    setDeleteStudent((pre) => !pre);
  };
  return (
    <>
      <div className={style.mainContainer}>
        {/* <div className={style.head}> */}
        <InstituteClassTab />
        <p className={style.borderBottom}></p>
        {searchParams.get("type") === "subject" && (
          <div className={style.main}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "-1rem 0 1rem 0",
              }}
            >
              <p
                className={style.headRightTab}
                onClick={() => setAddSubject(true)}
              >
                {t("add_subjects")}
              </p>
            </div>
            {oneClassAllSubject?.classes?.subject?.map((subject, index) => (
              <Link
                to={`/q/${params.username}/class?type=academic`}
                state={{
                  subjectName: subject?.subjectName,
                  sid: subject?._id,
                  isView: "INSTITUTE",
                }}
                key={index}
              >
                <OneRow
                  name={`${subject?.subjectName || "Mathematics"} ${
                    subject?.subject_category
                      ? `(${subject?.subject_category})`
                      : ""
                  }`}
                  subjectType={subject?.subjectOptional}
                  image="/images/book-24-icon.svg"
                  onId={subject._id}
                  status="subject"
                  onReftech={oneClassAllSubjectRefetch}
                  onEdit={editOneSubject}
                  isBatch={subject?.selected_batch_query?.batchName ?? ""}
                />
              </Link>
            ))}
          </div>
        )}
        {!searchParams.get("type") && (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "1rem 1.25rem",
                gap: "2rem",
              }}
            >
              <p className={style.headRightTab} onClick={onCloseAttendance}>
                {t("export_zip_attendance")}
              </p>
              <p className={style.headRightTab} onClick={onCloseReport}>
                {t("export_zip_report")}
              </p>
              <p
                className={style.headRightTab}
                style={{
                  color: "#f85149",
                }}
                onClick={onCloseStudent}
              >
                {t("delete_all_student")}
              </p>
            </div>
            <InstituteClassStudentList cid={cid} />
          </div>
        )}
        {searchParams.get("type") === "batches" && (
          <ClassBatch cid={cid} viewAs="INSTITUTE" carryParentState={{}} />
        )}
        {searchParams.get("type") === "batch-detail" && (
          <ClassBatchDetail cid={cid} viewAs="INSTITUTE" masterBatchId={bid} />
        )}
      </div>
      <CustomSuspense>
        {addSubject && (
          <CreateSubject
            departmentModal={addSubject}
            hideModal={setAddSubject}
            id={id}
            did={did}
            bid={bid}
            cid={cid}
            edit={edit}
            setEdit={setEdit}
            editSubject={editSubject}
          />
        )}
        {exportAttendance && (
          <ExportStudentAttendance
            cid={cid}
            onClose={onCloseAttendance}
            className={className}
          />
        )}
        {exportReport && (
          <ExportStudentReport
            cid={cid}
            onClose={onCloseReport}
            className={className}
          />
        )}
        {deleteStudent && <DeleteStudent cid={cid} onClose={onCloseStudent} />}
      </CustomSuspense>
    </>
  );
};

export default ClassProfileMain;

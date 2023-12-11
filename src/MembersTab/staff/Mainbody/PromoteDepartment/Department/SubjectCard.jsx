import React, { useState } from "react";
import style from "../PromoteDepartment.module.css";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import AcademicAdministatorTabChange from "../../AcademicAdministrator/AcademicAdministatorTabChange";
import DepartmentTabChangeLink from "../../DepartmentHead/DepartmentTabChangeLink";
import CustomSuspense from "../../../../../Custom/SuspenseLoading/CustomSuspense";
const CreateSubject = React.lazy(() =>
  import("../../../../../Dashboard/InsDashboard/Modals/Subject/CreateSubject")
);

const SubjectCard = ({
  sub,
  carryParentState,
  isView,
  did,
  cid,
  instituteId,
  onRefetch,
}) => {
  const [edit, setEdit] = useState("");

  const onMenu = (e) => {
    e.preventDefault();
    setEdit(sub?._id);
  };
  // console.info("sub", sub);
  return (
    <>
      {isView === "DEPARTMENT_HEAD" ? (
        <DepartmentTabChangeLink
          carryParentState={{
            ...carryParentState,
            subjectId: sub?._id,
            subjectName: `${sub?.subjectName} ${
              sub?.subject_category ? `(${sub?.subject_category})` : ""
            } ${
              sub?.selected_batch_query?.batchName
                ? `(${sub?.selected_batch_query?.batchName})`
                : ""
            } ${
              sub?.subjectOptional === "Optional"
                ? `(${sub?.subjectOptional})`
                : ""
            }`,
            batchId: sub?.selected_batch_query?._id,
            subjectTeacherName: `${
              sub?.subjectTeacherName?.staffFirstName ?? ""
            } ${sub?.subjectTeacherName?.staffMiddleName ?? ""} ${
              sub?.subjectTeacherName?.staffLastName ?? ""
            }`,
          }}
          activeTab="subject-detail"
        >
          <div
            className={style.class_container}
            style={{
              justifyContent: "space-between",
            }}
          >
            <div className={style.moderator_container_title}>
              <img
                className={style.oneRowImage}
                src={
                  sub?.subjectTeacherName?.staffProfilePhoto
                    ? `${imageShowUrl}/${sub?.subjectTeacherName?.staffProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
                alt="staff avatr"
              />
              <div className={style.class_container_text}>
                <h6>
                  {sub?.subjectName ?? ""}{" "}
                  {sub?.subject_category ? `(${sub?.subject_category})` : ""}
                  {sub?.selected_batch_query?.batchName ? (
                    <span
                      style={{
                        fontWeight: "400",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      ({sub?.selected_batch_query?.batchName ?? ""})
                    </span>
                  ) : null}
                  {sub?.subjectOptional === "Optional" &&
                    `(${sub?.subjectOptional})`}
                </h6>
                <p>
                  {`${sub?.subjectTeacherName?.staffFirstName ?? ""} ${
                    sub?.subjectTeacherName?.staffMiddleName ?? ""
                  } ${sub?.subjectTeacherName?.staffLastName ?? ""}`}
                </p>
              </div>
            </div>
            <img
              src="/images/three-24-dot-icon.svg"
              alt="menu icon"
              onClick={onMenu}
              title="Menu"
              style={{
                cursor: "pointer",
                height: "1.5rem",
              }}
            />
          </div>
        </DepartmentTabChangeLink>
      ) : (
        <AcademicAdministatorTabChange
          carryParentState={{
            ...carryParentState,
            subjectId: sub?._id,
            subjectName: `${sub?.subjectName} ${
              sub?.subject_category ? `(${sub?.subject_category})` : ""
            } ${
              sub?.selected_batch_query?.batchName
                ? `(${sub?.selected_batch_query?.batchName})`
                : ""
            } ${
              sub?.subjectOptional === "Optional"
                ? `(${sub?.subjectOptional})`
                : ""
            }`,
            batchId: sub?.selected_batch_query?._id,
            isView: "ADMINISTRATOR",
          }}
          activeTab={"subject-menu"}
          // activeTab={"subject"}
        >
          <div className={style.class_container}>
            <img
              className={style.oneRowImage}
              src={
                sub?.subjectTeacherName?.staffProfilePhoto
                  ? `${imageShowUrl}/${sub?.subjectTeacherName?.staffProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt="staff avatr"
            />
            <div className={style.class_container_text}>
              <h6>
                {sub?.subjectName ?? ""}{" "}
                {sub?.subject_category ? `(${sub?.subject_category})` : ""}
                {sub?.selected_batch_query?.batchName ? (
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "12px",
                    }}
                  >
                    {" "}
                    ({sub?.selected_batch_query?.batchName ?? ""})
                  </span>
                ) : null}
                {sub?.subjectOptional === "Optional" &&
                  `(${sub?.subjectOptional})`}
              </h6>
              <p>
                {`${sub?.subjectTeacherName?.staffFirstName ?? ""} ${
                  sub?.subjectTeacherName?.staffMiddleName ?? ""
                } ${sub?.subjectTeacherName?.staffLastName ?? ""}`}
              </p>
            </div>
          </div>
        </AcademicAdministatorTabChange>
      )}
      <CustomSuspense>
        {edit && (
          <CreateSubject
            departmentModal={edit ? true : false}
            hideModal={() => setEdit("")}
            id={instituteId}
            did={did}
            cid={cid}
            edit={edit}
            setEdit={setEdit}
            editSubject={edit}
            isEditBy="DEPARTMENT_HEAD"
            onRefetch={onRefetch}
          />
        )}
      </CustomSuspense>
    </>
  );
};

export default SubjectCard;

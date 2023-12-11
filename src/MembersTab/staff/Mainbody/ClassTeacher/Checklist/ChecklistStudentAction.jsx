import React, { useState } from "react";
import style from "./Checklist.module.css";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useClassOneChecklistAssign } from "../../../../../hooks/member_tab/class-api";
import QLoader from "../../../../../Loader/QLoader";
const ChecklistStudentAction = ({
  student,
  checklistId,
  showFees,
  onRefetchWhenAction,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [classOneChecklistAssign] = useClassOneChecklistAssign();

  const onAction = () => {
    if (checklistId) {
      setDisabled((pre) => !pre);
      classOneChecklistAssign({
        cid: checklistId,
        sid: student?._id,
      })
        .then(() => {
          onRefetchWhenAction();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <>
      <section className={style.checklist_detail_header}>
        <h6
          style={{
            width: "15%",
          }}
        >
          {student?.studentROLLNO ?? 0}
        </h6>
        <h6
          style={{
            width: showFees ? "70%" : "55%",
          }}
        >
          {`${student?.studentFirstName ?? ""} ${
            student?.studentMiddleName ?? ""
          } ${student?.studentLastName ?? ""}`}
        </h6>
        {showFees ? (
          ""
        ) : (
          <h6
            style={{
              width: "15%",
              textAlign: "center",
            }}
          >
            <img
              src={
                student?.onlineCheckList?.includes(checklistId)
                  ? "/images/department/radio-blue-icon.svg"
                  : "/images/department/radio-gray-icon.svg"
              }
              alt="icon"
            />
          </h6>
        )}
        <h6
          style={{
            width: "15%",
            textAlign: "center",
          }}
        >
          <img
            src={
              student?.allottedChecklist?.includes(checklistId)
                ? "/images/department/radio-blue-icon.svg"
                : "/images/department/radio-gray-icon.svg"
            }
            alt="icon"
            onClick={onAction}
          />
        </h6>
      </section>
      <BorderBottom
        customStyle={{
          // marginTop: "0.5rem",
          // marginBottom: "0.6rem",
          width: "100%",
        }}
      />
      {disabled && <QLoader />}
    </>
  );
};

export default ChecklistStudentAction;

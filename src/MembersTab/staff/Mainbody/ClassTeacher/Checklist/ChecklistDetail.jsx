import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./Checklist.module.css";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import ChecklistStudentAction from "./ChecklistStudentAction";
import { useLocation } from "react-router-dom";
import { useClassChecklistAllStudent } from "../../../../../hooks/member_tab/class-api";
import EmptyInfo from "../../../../../Loader/EmptyInfo";
const ChecklistDetail = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [checklist, setChecklist] = useState([]);
  const { classChecklistAllStudent, classChecklistAllStudentRefetch } =
    useClassChecklistAllStudent({
      data: {
        cid: getQuery.state?.checklistId,
        page: 1,
        limit: 20,
      },
      skip: !getQuery.state?.checklistId,
    });
  useEffect(() => {
    if (getQuery.state?.checklistId) classChecklistAllStudentRefetch();
  }, [getQuery.state?.checklistId, classChecklistAllStudentRefetch]);

  useEffect(() => {
    if (refetchStatus) {
      if (classChecklistAllStudent?.checklist?.studentsList?.length) {
        setChecklist(classChecklistAllStudent?.checklist?.studentsList);
        setShowingDataLoading(false);
        setRefetchStatus(false);
      }
    } else {
      if (classChecklistAllStudent?.checklist?.studentsList?.length) {
        setChecklist(classChecklistAllStudent?.checklist?.studentsList);
        setShowingDataLoading(false);
      } else if (
        classChecklistAllStudent?.checklist?.studentsList?.length === 0
      ) {
        setShowingDataLoading(false);
      } else {
      }
    }
  }, [classChecklistAllStudent?.checklist?.studentsList]);

  const onRefetchWhenAction = () => {
    setRefetchStatus(true);
    classChecklistAllStudentRefetch();
  };
  return (
    <>
      <div className={style.exam_container}>
        <div className={style.with_search}>
          <h6>{getQuery.state?.checklistName}</h6>
        </div>
        <BorderBottom
          customStyle={{
            marginTop: "0.5rem",
            marginBottom: "0.6rem",
            width: "100%",
          }}
        />
        <section className={style.checklist_detail_header}>
          <h6
            style={{
              width: "15%",
            }}
          >
            {t("roll_number")}
          </h6>
          <h6
            style={{
              width: getQuery.state?.showFees ? "70%" : "55%",
            }}
          >
            {t("name")}
          </h6>
          {getQuery.state?.showFees ? (
            ""
          ) : (
            <h6
              style={{
                width: "15%",
                textAlign: "center",
              }}
            >
              {t("fees")}
            </h6>
          )}
          <h6
            style={{
              width: "15%",
              textAlign: "center",
            }}
          >
            {t("allotted")}
          </h6>
        </section>
        <BorderBottom
          customStyle={{
            marginBottom: "0.6rem",
            width: "100%",
          }}
        />
        {checklist?.map((student) => (
          <ChecklistStudentAction
            key={student._id}
            student={student}
            checklistId={getQuery.state?.checklistId}
            showFees={getQuery.state?.showFees}
            onRefetchWhenAction={onRefetchWhenAction}
          />
        ))}
        {!showingDataLoading &&
          !classChecklistAllStudent?.checklist?.studentsList?.length && (
            <EmptyInfo
              customStyleContainer={{
                marginTop: "9rem",
              }}
              title={"No any checklist student found."}
              subtitle={
                "Please make sure when checklist created for this class then student here."
              }
            />
          )}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </>
  );
};

export default ChecklistDetail;

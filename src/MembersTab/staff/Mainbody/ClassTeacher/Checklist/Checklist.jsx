import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./Checklist.module.css";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../../Loader/EmptyInfo";
import ChecklistCard from "./ChecklistCard";
import { useClassAllChecklist } from "../../../../../hooks/member_tab/class-api";

const Checklist = ({ carryParentState, cid }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [checklist, setChecklist] = useState([]);
  const { classAllChecklist, classAllChecklistRefetch } = useClassAllChecklist({
    data: {
      cid: cid,
      page: 1,
      limit: 20,
    },
    skip: !cid,
  });
  useEffect(() => {
    if (cid) {
      classAllChecklistRefetch();
      setShowingDataLoading(true);
    }
  }, [cid, classAllChecklistRefetch]);

  useEffect(() => {
    if (classAllChecklist?.checklist?.length) {
      setChecklist(classAllChecklist?.checklist);
      setShowingDataLoading(false);
    } else if (classAllChecklist?.checklist?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
  }, [classAllChecklist?.checklist]);
  return (
    <>
      <div className={style.exam_container}>
        <div className={style.with_search}>
          <h6>{t("checklist")}</h6>
        </div>
        <BorderBottom
          customStyle={{
            marginTop: "0.5rem",
            marginBottom: "0.6rem",
            width: "100%",
          }}
        />
        {checklist?.map((checklistDetail) => (
          <ChecklistCard
            key={checklistDetail._id}
            checklistDetail={checklistDetail}
            carryParentState={carryParentState}
          />
        ))}
        {!showingDataLoading && !classAllChecklist?.checklist?.length && (
          <EmptyInfo
            customStyleContainer={{
              marginTop: "9rem",
            }}
            title={"No any checklist found"}
            subtitle={"Please make sure checklist have created for this class."}
          />
        )}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </>
  );
};

export default Checklist;

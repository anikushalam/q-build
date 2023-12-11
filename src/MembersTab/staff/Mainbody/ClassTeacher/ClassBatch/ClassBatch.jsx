import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../Hostel/Hostel.module.css";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import CreateClassBatch from "./CreateClassBatch";
import ClassBatchCard from "./ClassBatchCard";
import { useGetClassAllBatch } from "../../../../../hooks/member_tab/class-api";

const ClassBatch = ({ cid, carryParentState, viewAs }) => {
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { getClassAllBatch, getClassAllBatchRefetch } = useGetClassAllBatch({
    cid: cid,
    skip: !cid,
  });
  useEffect(() => {
    if (cid) {
      setShowingDataLoading(true);
      getClassAllBatchRefetch();
    }
  }, [cid, getClassAllBatchRefetch]);

  useEffect(() => {
    if (getClassAllBatch?.all_batches) {
      setShowingDataLoading(false);
    } else if (getClassAllBatch?.all_batches?.length === 0)
      setShowingDataLoading(false);
    else {
    }
  }, [getClassAllBatch?.all_batches]);

  const onRefetchWhenCreate = () => {
    setShowingDataLoading(true);
    getClassAllBatchRefetch();
  };

  const onClose = () => {
    setAdd((pre) => !pre);
  };
  return (
    <div
      className={style.hostel_container}
      style={
        viewAs === "INSTITUTE"
          ? {
              border: "none",
            }
          : null
      }
    >
      <div className={style.with_search}>
        <h6>{t("class_batch")}</h6>
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />

      <div className={style.add_container}>
        <p className={style.add_new_category} onClick={onClose}>
          {t("create_new_batch")}
        </p>
      </div>

      {getClassAllBatch?.all_batches?.map((batch) => (
        <ClassBatchCard
          batch={batch}
          onRefetch={onRefetchWhenCreate}
          key={batch?._id}
          carryParentState={carryParentState}
          viewAs={viewAs}
        />
      ))}
      {showingDataLoading && <QvipleLoading status="white" />}
      {add && (
        <CreateClassBatch
          onClose={onClose}
          cid={cid}
          onRefetch={onRefetchWhenCreate}
        />
      )}
    </div>
  );
};

export default ClassBatch;

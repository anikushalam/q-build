import React, { useEffect, useState } from "react";
import { useAllClass } from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import ClassCard from "../../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionConfirm/ConfirmProcess/ClassCard";
import style from "../../StaffAdmisionAdmin/AdmissionScholarship/AdmissionScholarship.module.css";
import { useTranslation } from "react-i18next";

const ClassListBatchWise = ({ batchId, onClose, onGrab }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { allClass, allClassRefetch } = useAllClass({
    bid: batchId,
    skip: !batchId,
  });

  useEffect(() => {
    if (allClass?.batch?.classroom) {
      setShowingDataLoading(false);
    }
  }, [allClass?.batch?.classroom]);

  useEffect(() => {
    if (batchId) allClassRefetch();
  }, [batchId, allClassRefetch]);
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.assign_role_container}
        style={{
          width: "40rem",
        }}
      >
        <section
          className={style.assign_role_title}
          style={{
            justifyContent: "space-between",
          }}
        >
          <h6>{t("select_class")}</h6>
          <div
            className={style.button_container}
            style={{
              justifyContent: "flex-end",
              gap: "1rem",
            }}
          >
            <img
              src="/images/close-post-icon.svg"
              onClick={onClose}
              alt=""
              style={{
                cursor: "pointer",
              }}
            />
          </div>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginBottom: "0.8rem",
          }}
        />
        <section
          style={{
            padding: "0 0.8rem",
          }}
        >
          {allClass?.batch?.classroom?.map((all) => (
            <ClassCard
              setViewClass={() => {}}
              classData={all}
              setAllotC={(data) => onGrab(data)}
              isView="CLASS_TEACHER"
            />
          ))}
          {showingDataLoading && <QvipleLoading status="white" />}
        </section>
      </div>
    </PopupWrapper>
  );
};

export default ClassListBatchWise;

import React, { useEffect, useState } from "react";
import style from "../../../DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useDepartmentBatchAllClass } from "../../../../../../hooks/member_tab/department-api";
import ClassCard from "../../AdmissionApplicationRequest/AdmissionConfirm/ConfirmProcess/ClassCard";

const SelectApplicationDivision = ({
  onClose,
  bid,
  onSkip,
  onSelectedDivision,
}) => {
  const { t } = useTranslation();
  const { departmentBatchAllClass, departmentBatchAllClassRefetch } =
    useDepartmentBatchAllClass({
      data: { bid: bid, page: 1, limit: 200 },
      skip: !bid,
    });
  useEffect(() => {
    if (bid) departmentBatchAllClassRefetch();
  }, [bid, departmentBatchAllClassRefetch]);
  //   console.info("safhjdgksd", bid);
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.seating_modal}>
        <section
          className={style.seating_modal_title_left}
          style={{
            position: "relative",
          }}
        >
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt=""
          />
          <h6>{t("select_class_optional")}</h6>
          <button className={style.next_btn} onClick={onSkip}>
            {t("skip")}
          </button>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.8rem",
            marginBottom: "0.8rem",
          }}
        />
        {departmentBatchAllClass?.batch?.classroom?.map((all) => (
          <ClassCard
            key={all?._id}
            classData={all}
            setAllotC={onSelectedDivision}
            setViewClass={() => {}}
          />
        ))}
      </div>
    </PopupWrapper>
  );
};

export default SelectApplicationDivision;

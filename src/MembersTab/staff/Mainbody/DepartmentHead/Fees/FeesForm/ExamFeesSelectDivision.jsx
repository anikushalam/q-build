import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../Exminations/SeatingArrangement/SeatingArrangement.module.css";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import {
  useDepartmentAllClassMaster,
  useDepartmentCreateFees,
} from "../../../../../../hooks/member_tab/department-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../../../Loader/EmptyInfo";
import FeesClassCard from "./FeesClassCard";
import QLoader from "../../../../../../Loader/QLoader";

const ExamFeesSelectDivision = ({
  onBack,
  bid,
  did,
  createFees,
  onResetAfterCreate,
}) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [standardList, setStandardList] = useState([]);
  const [divisionId, setDivisionId] = useState([]);
  const [departmentCreateFees] = useDepartmentCreateFees();

  const { departmentAllClassMaster, departmentAllClassMasterRefetch } =
    useDepartmentAllClassMaster({
      data: { did: did, bid: bid, page: 1, limit: 50 },
      skip: !bid || !did,
    });
  useEffect(() => {
    if (bid && did) departmentAllClassMasterRefetch();
  }, [bid, did, departmentAllClassMasterRefetch]);

  useEffect(() => {
    if (departmentAllClassMaster?.classMaster?.length) {
      setStandardList(departmentAllClassMaster?.classMaster);
      setShowingDataLoading(false);
    } else if (departmentAllClassMaster?.classMaster?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
  }, [departmentAllClassMaster?.classMaster]);

  const onSaveFees = () => {
    if (divisionId?.length) {
      setDisabled((pre) => !pre);
      departmentCreateFees({
        did: did,
        fees: {
          ...createFees,
          ClassId: divisionId,
        },
      })
        .then(() => {
          onResetAfterCreate();
          setDisabled((pre) => !pre);
        })
        .catch(() => {
          setDisabled((pre) => !pre);
        });
    }
  };
  const onDivisionSelect = (val) => {
    if (divisionId?.includes(val))
      setDivisionId((prev) => prev?.filter((ids) => ids !== val));
    else setDivisionId((prev) => [...prev, val]);
  };
  return (
    <div className={style.seating_modal}>
      <section
        className={style.seating_modal_title_left}
        style={{
          position: "relative",
        }}
      >
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBack}
          alt="back"
        />
        <h6>{t("select_classes")}</h6>
        <button
          className={style.next_btn}
          title="Save fees"
          onClick={onSaveFees}
        >
          {t("save")}
        </button>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
        }}
      />
      {standardList?.map((clsMaster) =>
        clsMaster?.classDivision?.map((cls) => (
          <FeesClassCard
            key={cls._id}
            cls={cls}
            isMaster={true}
            onSelect={onDivisionSelect}
            classMaster={clsMaster?.className}
            divisionId={divisionId}
          />
        ))
      )}

      {!showingDataLoading && !standardList?.length && (
        <EmptyInfo
          customStyleContainer={{
            marginTop: "4rem",
          }}
          title={"No any class found"}
          subtitle={"Please make sure you have created class."}
        />
      )}

      {showingDataLoading && <QvipleLoading />}
      {disabled && <QLoader />}
    </div>
  );
};

export default ExamFeesSelectDivision;

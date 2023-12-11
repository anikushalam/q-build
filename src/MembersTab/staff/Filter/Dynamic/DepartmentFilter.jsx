import React, { useEffect, useState } from "react";
import PopupWrapper from "../../Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import style from "../../Mainbody/FinanceManager/FeesStructure/FeesStructure.module.css";
import { useTranslation } from "react-i18next";
import { useAllDepartmentCondition } from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
const DepartmentFilter = ({
  onCloseSetp,
  departmentFilter,
  instituteId,
  onGrabDepartment,
}) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [departmentId, setDepartmentId] = useState(departmentFilter ?? []);
  const { allDepartment, allDepartmentRefetch } = useAllDepartmentCondition({
    id: instituteId,
    skip: !instituteId,
  });

  // console.info(departmentId, classMasterId);
  useEffect(() => {
    if (departmentFilter?.length) {
      setDepartmentId(departmentFilter);
    }
  }, [departmentFilter]);

  useEffect(() => {
    if (instituteId) {
      setShowingDataLoading(true);
      allDepartmentRefetch();
    }
  }, [instituteId, allDepartmentRefetch]);

  useEffect(() => {
    if (
      allDepartment?.institute?.depart ||
      allDepartment?.institute?.depart?.length === 0
    ) {
      setShowingDataLoading(false);
    } else {
    }
  }, [allDepartment?.institute?.depart]);

  const onDepartmentSelect = (did) => {
    if (departmentId?.includes(did)) {
      setDepartmentId((prev) => prev?.filter((val) => val !== did));
    } else {
      setDepartmentId((prev) => [...prev, did]);
    }
  };

  const onNext = () => {
    onGrabDepartment(departmentId);
    setDepartmentId([]);
  };
  return (
    <PopupWrapper onClose={onCloseSetp}>
      <div className={style.seating_modal}>
        <div className={style.add_category_modal_title}>
          <section className={style.add_category_modal_title_left}>
            <img
              src="/images/arrow-left-fees-icon.svg"
              onClick={onCloseSetp}
              alt=""
            />
            <h6>{t("filter_department")}</h6>
          </section>
          <button onClick={onNext} className={style.next_btn}>
            {t("next")}
          </button>
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.6rem",
            marginBottom: "0.6rem",
          }}
        />
        {allDepartment?.institute?.depart?.map((depart) => (
          <div
            className={
              departmentId?.includes(depart?._id)
                ? `${style.fees_category} ${style.category_card_hover_active}`
                : `${style.fees_category} ${style.category_card_hover}`
            }
            key={depart?._id}
            onClick={() => onDepartmentSelect(depart?._id)}
            style={{
              marginBottom: "0.6rem",
            }}
          >
            <div className={style.fees_category_text}>
              <h6>{depart?.dName ?? ""}</h6>
            </div>
          </div>
        ))}
        {showingDataLoading && <QvipleLoading status="white" />}
      </div>
    </PopupWrapper>
  );
};

export default DepartmentFilter;

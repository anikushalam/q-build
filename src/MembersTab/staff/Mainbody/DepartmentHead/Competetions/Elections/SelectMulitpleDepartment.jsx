import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { useAllDepartmentCondition } from "../../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import style from "../../../FinanceManager/FeesStructure/FeesStructure.module.css";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
const SelectMulitpleDepartment = ({
  instituteId,
  onClose,
  // setSelectedDepartment,
  setSelectedId,
  selectedId,
}) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [departmentList, setDepartmentList] = useState([]);
  const { allDepartment, allDepartmentRefetch } = useAllDepartmentCondition({
    id: instituteId,
    skip: !instituteId,
  });

  // console.info(instituteId, classMasterId);
  useEffect(() => {
    if (instituteId) {
      setShowingDataLoading(true);
      allDepartmentRefetch();
    }
  }, [instituteId, page, allDepartmentRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (allDepartment?.institute?.depart) {
      setDepartmentList((prevState) =>
        [
          ...new Set(
            [...prevState, ...allDepartment?.institute?.depart]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (allDepartment?.institute?.depart?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (allDepartment?.institute?.depart?.length === 10) setState(true);
    else setState(false);
  }, [allDepartment?.institute?.depart]);

  const onSelectDepartment = (dept) => {
    if (selectedId?.includes(dept?._id)) {
      setSelectedId((val) => val?.filter((id) => id !== dept?._id));
      // setSelectedDepartment((val) =>
      //   val?.filter((dep) => dep?._id !== dept?._id)
      // );
    } else {
      setSelectedId((val) => [...val, dept?._id]);
      // setSelectedDepartment((val) => [...val, dept]);
    }
  };

  const onSelect = () => {
    onClose();
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "30rem",
          minHeight: "10rem",
          maxHeight: "35rem",
          overflowY: "auto",
          overflowX: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        <section
          className={style.add_category_modal_title_left}
          style={{
            position: "relative",
          }}
        >
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt="back arrow"
          />
          <h6>{t("select_department")}</h6>
          <button className={style.normal_select_btn} onClick={onSelect}>
            {selectedId?.length >= 1 ? selectedId?.length : ""} {` `}
            {t("select")}
          </button>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginBottom: "1rem",
          }}
        />
        {departmentList?.map((department, index) =>
          departmentList?.length === index + 1 ? (
            <div
              className={
                selectedId?.includes(department?._id)
                  ? `${style.fees_card} ${style.fees_card_hover} ${style.fees_card_hover_active}`
                  : `${style.fees_card} ${style.fees_card_hover}`
              }
              key={department?._id}
              ref={ref}
              onClick={() => onSelectDepartment(department)}
            >
              <img src="/images/profileAndCover/department-profile-img.svg" />
              <div className={style.fees_card_text}>
                <h6>{department?.dName ?? ""}</h6>
              </div>
            </div>
          ) : (
            <div
              className={
                selectedId?.includes(department?._id)
                  ? `${style.fees_card} ${style.fees_card_hover} ${style.fees_card_hover_active}`
                  : `${style.fees_card} ${style.fees_card_hover}`
              }
              key={department?._id}
              onClick={() => onSelectDepartment(department)}
            >
              <img alt="department avatar" />
              <div className={style.fees_card_text}>
                <h6>{department?.dName ?? ""}</h6>
              </div>
            </div>
          )
        )}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </PopupWrapper>
  );
};

export default SelectMulitpleDepartment;

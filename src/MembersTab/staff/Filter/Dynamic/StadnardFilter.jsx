import React, { useEffect, useState } from "react";
import PopupWrapper from "../../Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import style from "../../Mainbody/FinanceManager/FeesStructure/FeesStructure.module.css";
import { useTranslation } from "react-i18next";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import { useGetBatchStandardWithMultipleDepartment } from "../../../../hooks/member_tab/admission-api";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
const StadnardFilter = ({
  onCloseSetp,
  departmentFilter,
  onGrabStandard,
  standardFilter,
}) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [departmentId, setDepartmentId] = useState(standardFilter ?? []);
  const [standardList, setStandardList] = useState([]);

  const [getBatchStandardWithMultipleDepartment] =
    useGetBatchStandardWithMultipleDepartment();
  // console.info(departmentId, classMasterId);
  useEffect(() => {
    if (standardFilter?.length) {
      setDepartmentId(standardFilter);
    }
  }, [standardFilter]);

  useEffect(() => {
    if (departmentFilter?.length) {
      setShowingDataLoading(true);
      getBatchStandardWithMultipleDepartment({
        departmentList: {
          arr: departmentFilter,
        },
      })
        .then((res) => {
          if (res.data?.master) {
            setStandardList(res.data?.master);
            setShowingDataLoading(false);
          }
        })
        .catch({});
    } else if (departmentFilter?.length === 0) {
      setShowingDataLoading(false);
    }
  }, [departmentFilter]);

  const onDepartmentSelect = (did) => {
    if (departmentId?.includes(did)) {
      setDepartmentId((prev) => prev?.filter((val) => val !== did));
    } else {
      setDepartmentId((prev) => [...prev, did]);
    }
  };

  const onNext = () => {
    onGrabStandard(departmentId);
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
            <h6>{t("filter_standard")}</h6>
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
        {standardList?.map((depart) => (
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
              <h6>{depart?.className ?? ""}</h6>
            </div>
          </div>
        ))}
        {showingDataLoading && <QvipleLoading status="white" />}
      </div>
    </PopupWrapper>
  );
};

export default StadnardFilter;

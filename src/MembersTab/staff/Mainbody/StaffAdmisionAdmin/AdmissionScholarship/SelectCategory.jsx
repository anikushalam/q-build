import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./AdmissionScholarship.module.css";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import { useGetAllFeesCategory } from "../../../../../hooks/member_tab/finance-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
const SelectCategory = ({
  onClose,
  financeId,
  setOpenCategoryName,
  setScholar,
}) => {
  const { t } = useTranslation();
  const [selectedCat, setSelectedCat] = useState([]);
  const [selectedCatName, setSelectedCatName] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { getAllFeesCategory, getAllFeesCategoryRefetch } =
    useGetAllFeesCategory({
      fid: financeId,
      skip: !financeId,
    });

  useEffect(() => {
    if (financeId) {
      setShowingDataLoading(true);
      getAllFeesCategoryRefetch();
    }
  }, [financeId, getAllFeesCategoryRefetch]);

  useEffect(() => {
    if (
      getAllFeesCategory?.all_fees_format?.length === 0 ||
      getAllFeesCategory?.all_fees_format?.length
    )
      setShowingDataLoading(false);
  }, [getAllFeesCategory?.all_fees_format]);
  const onSelected = (val) => {
    if (selectedCat?.includes(val?._id)) {
      setSelectedCat((prev) => prev?.filter((id) => id !== val?._id));
      setSelectedCatName((prev) =>
        prev?.filter((val1) => val1?._id !== val?._id)
      );
    } else {
      setSelectedCat((prev) => (prev ? [...prev, val?._id] : [val?._id]));
      setSelectedCatName((prev) => (prev ? [...prev, val] : [val]));
    }
  };
  const onAllSelected = () => {
    setSelectedCatName(getAllFeesCategory?.all_fees_format);
    const arr = [];
    for (let val of getAllFeesCategory?.all_fees_format) {
      arr.push(val?._id);
    }
    setSelectedCat(arr);
  };
  const onSelect = () => {
    setOpenCategoryName(selectedCatName);
    setScholar((prev) => ({
      ...prev,
      category_array: selectedCat,
    }));
    onClose();
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.assign_role_container}>
        <section className={style.assign_role_title}>
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt="back icon"
          />

          <h6>{t("fee_category")}</h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <section
          style={{
            padding: "0.8rem",
          }}
        >
          <button
            className={style.applicable_to_btn}
            style={{
              marginBottom: "1rem",
              backgroundColor: "#001A72",
              color: "#ffffff",
            }}
            onClick={onAllSelected}
          >
            {t("applicable_to_all")}
          </button>

          {getAllFeesCategory?.all_fees_format?.map((category) => (
            <div
              className={
                selectedCat?.includes(category?._id)
                  ? `${style.category_card} ${style.category_card_hover_active}`
                  : style.category_card
              }
              key={category?._id}
              onClick={() => onSelected(category)}
              title="Select Category"
            >
              <img src="/images/fees-category-icon.svg" alt="categor icon" />
              <h6>{category?.category_name ?? ""}</h6>
            </div>
          ))}
          {showingDataLoading && <QvipleLoading />}
          <button
            className={style.applicable_to_btn}
            style={{
              justifyContent: "center",
              marginTop: "1rem",
            }}
            onClick={onSelect}
          >
            {t("select")}
          </button>
        </section>
      </div>
    </PopupWrapper>
  );
};

export default SelectCategory;

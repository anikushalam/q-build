import React from "react";
import PopupWrapper from "./PopupWrapper";
import style from "./FeesStructure.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
const SelectCategoryList = ({
  categoryList,
  selectedId,
  onSecondary,
  onClose,
}) => {
  const { t } = useTranslation();
  return (
    <PopupWrapper onClose={onClose}>
      <div className={`${style.add_category_modal} ${style.seating_modal}`}>
        <div className={style.add_category_modal_title}>
          <h6>{t("select_secondary_category")}</h6>
          <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.7rem",
            marginBottom: "0.7rem",
          }}
        />
        {categoryList?.map((category) =>
          category?._id === selectedId ? (
            ""
          ) : (
            <div
              className={`${style.category_card} ${style.add_category_modal_title_active}`}
              key={category?._id}
              onClick={() => onSecondary(category?._id)}
            >
              <img src="/images/fees-category-icon.svg" alt="categor icon" />
              <h6>{category?.category_name ?? ""}</h6>
            </div>
          )
        )}
      </div>
    </PopupWrapper>
  );
};

export default SelectCategoryList;

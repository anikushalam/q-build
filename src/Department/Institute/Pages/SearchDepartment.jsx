import React from "react";
import style from "./SearchDepartment.module.css";
import { useTranslation } from "react-i18next";
const SearchDepartment = () => {
  const { t } = useTranslation();
  return (
    <div className={style.searchContainer}>
      <img src="/images/search-dept-icon.svg" alt="" />
      <input type="text" placeholder={t("search")} required />
    </div>
  );
};

export default SearchDepartment;

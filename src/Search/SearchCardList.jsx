import React from "react";
import { useTranslation } from "react-i18next";
import style from "./SearchWrapper.module.css";

const SearchCardList = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className={style.search_card_list_container}>
      <section>
        <p>{t("search_result")}</p>
        <p>{t("clear")}</p>
      </section>
      {children}
    </div>
  );
};

export default SearchCardList;

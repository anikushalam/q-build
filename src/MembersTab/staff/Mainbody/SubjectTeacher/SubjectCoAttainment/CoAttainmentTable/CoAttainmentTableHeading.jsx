import React from "react";
import style from "./CoAttainmentTable.module.css";
import { useTranslation } from "react-i18next";

const CoAttainmentTableHeading = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className={style.table_heading}>
      {/* <div
        className={style.table_heading_text}
        style={{
          width: "4rem",
        }}
      >
        {t("sr_number")}
      </div> */}

      <div
        className={style.table_heading_text}
        style={{
          width: "4rem",
        }}
      >
        {t("roll_number")}
      </div>

      <div
        className={style.table_heading_text}
        style={{
          width: "10rem",
        }}
      >
        {t("co_gr_number")}
      </div>

      {children}
      {/* <div>{children}</div> */}
    </div>
  );
};

export default CoAttainmentTableHeading;

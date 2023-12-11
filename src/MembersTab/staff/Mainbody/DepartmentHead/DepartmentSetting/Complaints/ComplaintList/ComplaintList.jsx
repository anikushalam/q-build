import React from "react";
import style from "./ComplaintList.module.css";
import "./ComplainList.css";
import UnsolvedList from "./UnsolvedList";
import SolvedList from "./SolvedList";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// --------------------------------

function ComplaintList({ did }) {
  const [solved, setSolved] = useState(false);
  const { t } = useTranslation();
  return (
    <div className={style.complaintList}>
      <div className={style.tabss}>
        <div
          className={solved ? style.tabb : `${style.tabb} ${style.tabActive}`}
          onClick={() => setSolved(false)}
        >
          {t("unsolved")}
        </div>
        <div
          className={!solved ? style.tabb : `${style.tabb} ${style.tabActive}`}
          onClick={() => setSolved(true)}
        >
          {t("Solved")}
        </div>
      </div>

      <div className={style.listHead}>
        {!solved ? <UnsolvedList did={did} /> : <SolvedList did={did} />}
      </div>
    </div>
  );
}

export default ComplaintList;

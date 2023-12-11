import React from "react";
import style from "./ComplaintList.module.css";
import "./ComplainList.css";
import UnsolvedList from "./UnsolvedList";
import SolvedList from "./SolvedList";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// --------------------------------

function ComplaintList({ cid }) {
  const { t } = useTranslation();
  const [solved, setSolved] = useState(false);

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
        {!solved ? <UnsolvedList cid={cid} /> : <SolvedList cid={cid} />}
      </div>
    </div>
  );
}

export default ComplaintList;

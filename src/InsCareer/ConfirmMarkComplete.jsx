import React from "react";
import style from "./VacancyDetails.module.css";
import { Dialog, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useMarkComplete } from "../hooks/member_tab/career-api";
import QLoader from "../Loader/QLoader";
import { useState } from "react";

function ConfirmMarkComplete({
  open,
  hideModal,
  tid,
  getVacancyDetailRefetch,
  setStatus,
}) {
  const [disabled, setDisabled] = useState(false);
  const { t } = useTranslation();
  const [markComplete] = useMarkComplete();

  const handleMarkComplete = () => {
    setDisabled(true);
    markComplete({
      vid: tid,
    })
      .then((res) => {
        setDisabled(false);
        getVacancyDetailRefetch();
        setStatus("");
      })
      .catch((err) => {
        setDisabled(false);
      });
  };
  return (
    <Dialog open={open} onClose={() => hideModal(false)}>
      <div className={style.confirmMark}>
        <h5>{t("mark_closed")}</h5>
        <div className={style.marktabs}>
          <div className={style.condirmtab} onClick={handleMarkComplete}>
            {t("confirm")}
          </div>
          <div className={style.canceltab} onClick={() => hideModal(false)}>
            {t("cancel")}
          </div>
        </div>
        {disabled && <QLoader />}
      </div>
    </Dialog>
  );
}

export default ConfirmMarkComplete;

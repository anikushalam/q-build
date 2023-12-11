import React from "react";
import style from "../../../../InsCareer/VacancyDetails.module.css";
import { Dialog, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useGiveCertificate } from "../../../../hooks/member_tab/alumni-api";

import { useState } from "react";
import QLoader from "../../../../Loader/QLoader";

function GiveAlumniCertificate({
  open,
  hideModal,
  aid,
  rid,
  onRefetchWhenAlumniCreate,
  getAlumniDetailRefetch,
}) {
  const [disabled, setDisabled] = useState(false);
  const { t } = useTranslation();
  const [giveCertificate] = useGiveCertificate();

  const handleMarkComplete = () => {
    setDisabled(true);
    giveCertificate({
      rid: rid,
    })
      .then((res) => {
        setDisabled(false);
        onRefetchWhenAlumniCreate();
        getAlumniDetailRefetch();
        hideModal(false);
      })
      .catch((err) => {
        setDisabled(false);
      });
  };

  return (
    <Dialog open={open} onClose={() => hideModal(false)}>
      <div className={style.confirmMark}>
        <h5>{t("give_certificate_")}</h5>
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

export default GiveAlumniCertificate;

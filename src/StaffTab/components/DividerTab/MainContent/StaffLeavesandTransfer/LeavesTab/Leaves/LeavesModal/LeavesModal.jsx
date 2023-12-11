import React from "react";
import style from "./LeavesModal.module.css";
import { useTranslation } from "react-i18next";
import SearchModalBackdrop from "../../../../../../../../Search/SearchModalBackdrop";
import Overlay from "../../../../../../../../Search/Overlay";

function LeavesModal({ hideModal, dates }) {
  const { t } = useTranslation();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDate = (date) => {
    const d = date.split("/")[0];
    const month = months[date.split("/")[1] - 1];
    const yr = date.split("/")[2];
    return `${d} ${month} ${yr}`;
  };

  return (
    <>
      <SearchModalBackdrop onClose={() => hideModal(false)} />
      <Overlay customStyle={{ zIndex: "1200" }}>
        <div className={style.addDisplay}>
          <div className={style.addDisplayhead}>{t("leave_dates")}</div>
          <div className={style.addDisplaycontent}>
            {dates.map((d) => (
              <p>{getDate(d)}, </p>
            ))}
          </div>
        </div>
      </Overlay>
    </>
  );
}

export default LeavesModal;

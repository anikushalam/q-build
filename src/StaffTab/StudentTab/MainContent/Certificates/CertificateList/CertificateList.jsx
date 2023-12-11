import React from "react";
import style from "./CertificateList.module.css";
import { useTranslation } from "react-i18next";

function CertificateList({ index, setIndex }) {
  const { t } = useTranslation();
  return (
    <div className={style.complaintList}>
      <div
        className={
          index === 0
            ? `${style.certificate} ${style.active}`
            : style.certificate
        }
        onClick={() => setIndex(0)}
      >
        <p>{t("bonafide")}</p>
      </div>
      <div
        className={
          index === 1
            ? `${style.certificate} ${style.active}`
            : style.certificate
        }
        onClick={() => setIndex(1)}
      >
        <p>{t("leaving")}</p>
      </div>
      <div
        className={
          index === 2
            ? `${style.certificate} ${style.active}`
            : style.certificate
        }
        onClick={() => setIndex(2)}
      >
        <p>{t("transfer_certificate")}</p>
      </div>
      <div
        className={
          index === 3
            ? `${style.certificate} ${style.active}`
            : style.certificate
        }
        onClick={() => setIndex(3)}
      >
        <p>{t("certificate_setting")}</p>
      </div>
    </div>
  );
}

export default CertificateList;

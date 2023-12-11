import { cdnUrl } from "../../../Services/UrlConfig/BaseUrl";
import style from "./FinanceExport.module.css";
import dayjs from "dayjs";
import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import { localTimeFormat } from "../../../Utils/Functions/localTime";
import { useState } from "react";
import FinanceExportMenu from "./FinanceExportMenu";

const FinanceExportCard = ({ excel, instituteId }) => {
  const [xlsxId, setXlsxId] = useState("");
  const onClose = () => {
    setXlsxId("");
  };
  const onMenu = (e) => {
    e.preventDefault();
    setXlsxId(excel);
  };
  return (
    <>
      <a
        key={excel?._id}
        className={style.export_card}
        title="Download File"
        href={`${cdnUrl}/${excel?.excel_file}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`${assestsUserFinanceUrl}/xsxl.svg`}
          className={style.export_card_image}
          alt="excel icon"
        />
        <section className={style.export_card_text}>
          <h6>{excel?.excel_file_name ?? ""}</h6>
          <div className={style.export_card_date}>
            <h6>{dayjs(excel?.created_at).format("DD MMM YYYY")}</h6>
            <h6>{localTimeFormat(excel?.created_at, "LT")}</h6>
          </div>
        </section>
        <img
          src={`${assestsUserFinanceUrl}/menu.svg`}
          alt="menu icon"
          onClick={onMenu}
          title="Menu"
          className={style.export_card_menu}
        />
      </a>
      {xlsxId && (
        <FinanceExportMenu
          onClose={onClose}
          xlsxId={xlsxId}
          instituteId={instituteId}
        />
      )}
    </>
  );
};

export default FinanceExportCard;

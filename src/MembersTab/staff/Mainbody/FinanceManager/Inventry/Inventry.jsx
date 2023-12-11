import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./Inventry.module.css";
import InventryDetail from "./InventryDetail";
import InventryList from "./InventryList";
import { useNavigate } from "react-router-dom";
const Inventry = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [inventryId, setInventryId] = useState("");

  return (
    <div className={style.inventory}>
      <div className={style.invetory_header}>
        <img
          src="/images/left-back-icon.svg"
          alt="back arrow"
          className={style.back_icon}
          onClick={() => navigate(-1)}
        />
        <h6 className={style.invetory_header_title}>{t("inventry_assets")}</h6>
      </div>
      <div className={style.inventory_container}>
        <div className={style.inventory_list}>
          <InventryList setInventryId={setInventryId} inventryId={inventryId} />
        </div>
        <div className={style.inventory_show_detail}>
          {inventryId && (
            <InventryDetail
              inventryId={inventryId}
              setInventryId={setInventryId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Inventry;

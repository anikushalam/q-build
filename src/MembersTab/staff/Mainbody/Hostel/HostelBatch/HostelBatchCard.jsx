import React, { useState } from "react";
import style from "../Hostel.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import HostelBatchMenu from "./HostelBatchMenu";

const HostelBatchCard = ({
  batch,
  selectedId,
  hostelId,
  onRefetch,
  onMasterApiRefetch,
}) => {
  const { t } = useTranslation();
  const [batchMenu, setBatchMenu] = useState("");
  return (
    <>
      <div
        className={style.hostel_batch_container}
        style={{
          backgroundColor:
            selectedId === batch?._id ? "rgb(226, 229, 232)" : "inherit",
        }}
      >
        <img
          className={style.hostel_batch_image}
          src="/images/master-24-grey-icon.svg"
          alt="batch icon"
          style={{
            borderRadius: "0",
          }}
        />
        <div className={style.hostel_batch_container_text}>
          <h6>{batch?.batchName ?? ""}</h6>
          <p>
            {t("created_on_")} {moment(batch?.createdAt).format("DD MMM yyyy")}
          </p>
        </div>
        <img
          src="/images/three-24-dot-icon.svg"
          alt="menu icon"
          onClick={() => setBatchMenu(batch)}
          className={style.hostel_batch_menu}
          title="Menu"
        />
      </div>
      {batchMenu && (
        <HostelBatchMenu
          onClose={() => setBatchMenu("")}
          hostelId={hostelId}
          onRefetch={onRefetch}
          batchMenu={batchMenu}
          onMasterApiRefetch={onMasterApiRefetch}
        />
      )}
    </>
  );
};

export default HostelBatchCard;

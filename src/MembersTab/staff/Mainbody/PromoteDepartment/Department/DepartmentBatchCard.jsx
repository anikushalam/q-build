import React, { useState } from "react";
import style from "../PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import DepartmentBatchMenu from "./DepartmentBatchMenu";

const DepartmentBatchCard = ({
  batch,
  selectedId,
  did,
  instituteId,
  onRefetch,
  onParentRefetch,
}) => {
  const { t } = useTranslation();
  const [openBatchMenu, setOpenBatchMenu] = useState("");

  return (
    <>
      <div
        className={style.class_container}
        style={{
          cursor: "pointer",
          backgroundColor:
            selectedId === batch?._id ? "rgb(226, 229, 232)" : "inherit",
        }}
      >
        <img
          className={style.oneRowImage}
          src="/images/master-24-grey-icon.svg"
          alt="batch icon"
          style={{
            borderRadius: "0",
          }}
        />
        <div className={style.class_container_text}>
          <h6>{batch?.batchName ?? ""}</h6>
          <p>
            {t("created_on_")} {moment(batch?.createdAt).format("DD MMM yyyy")}
          </p>
        </div>
        <img
          src="/images/three-24-dot-icon.svg"
          alt="menu icon"
          onClick={() => setOpenBatchMenu(batch)}
          className={style.menu_icon}
          title="Menu"
        />
      </div>
      {openBatchMenu && (
        <DepartmentBatchMenu
          onClose={() => setOpenBatchMenu("")}
          instituteId={instituteId}
          did={did}
          onRefetch={onRefetch}
          openBatchMenu={openBatchMenu}
          onParentRefetch={onParentRefetch}
        />
      )}
    </>
  );
};

export default DepartmentBatchCard;

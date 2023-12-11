import React, { useState } from "react";
import style from "./List.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import ChecklistMenu from "./ChecklistMenu";

const DepartmentChecklistCard = ({ checklist, onRefetch, did }) => {
  const { t } = useTranslation();
  const [openChecklistMenu, setOpenChecklistMenu] = useState("");

  return (
    <>
      <div className={style.checklist_card_container}>
        <div className={style.checklist_card_left}>
          <img
            src="/images/members/fees-icon.svg"
            alt="fees icon"
            className={style.fees_image}
          />
          <div className={style.checklist_inner_text}>
            <h6>{checklist?.checklistName ?? 0}</h6>
            <p>
              {t("created_on")}{" "}
              {moment(checklist?.createdAt).format("DD MMMM YYYY")}{" "}
            </p>
          </div>
        </div>
        <div
          className={style.checklist_inner_text}
          style={{
            alignItems: "flex-end",
            marginRight: "2rem",
          }}
        >
          <h6>
            {t("rs")}. {checklist?.checklistAmount ?? 0}/-
          </h6>
          <p>{t("fees")} </p>
        </div>
        <img
          src="/images/three-24-dot-icon.svg"
          alt="menu icon"
          onClick={() => setOpenChecklistMenu(checklist)}
          className={style.menu_icon}
          title="Menu"
        />
      </div>
      {openChecklistMenu && (
        <ChecklistMenu
          did={did}
          onRefetch={onRefetch}
          openChecklistMenu={openChecklistMenu}
          onClose={() => setOpenChecklistMenu("")}
        />
      )}
    </>
  );
};
export default DepartmentChecklistCard;

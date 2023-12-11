import React, { useState, useEffect } from "react";
import style from "./AddDisplay.module.css";
import { useTranslation } from "react-i18next";
import { Dialog } from "@mui/material";
import "./AddDisplay.css";
import { useUpdateDisplayPerson } from "../../../../hooks/dashboard/dashboard-api";
import ButtonWithAction from "../../../../Custom/Button/ButtonWithAction";

function EditDisplay({
  editDisplay,
  hideModal,
  name,
  dsignation,
  displayUserId,
  userId,
  refetch,
}) {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [updateDisplayPerson] = useUpdateDisplayPerson();
  const [formData, setFormData] = useState({
    did: "",
    displayTitle: "",
    displayUser: "",
  });

  useEffect(() => {
    setFormData({
      displayTitle: dsignation,
      did: displayUserId,
      displayUser: userId,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const closeModal = () => {
    hideModal(false);
  };

  const handleClick = () => {
    // console.info("him sfsgfg");
    setDisabled((pre) => !pre);
    updateDisplayPerson(formData).then((res) => {
      if (res.data.message === "update Display Person") {
        refetch();
        hideModal(false);
        setDisabled((pre) => !pre);
      }
    });
  };

  return (
    <Dialog open={editDisplay} onClose={closeModal}>
      <div className={style.addDisplay} style={{ zIndex: "58" }}>
        <div className={style.title} style={{ zIndex: "58" }}>
          <h6 style={{ zIndex: "58" }}>{t("edit_display")}</h6>

          <img
            alt="close"
            src="/images/close-post-icon.svg"
            onClick={() => hideModal(false)}
          />
        </div>
        <div style={{ zIndex: "58" }} className={style.content}>
          <div style={{ zIndex: "58" }} className={style.item}>
            <label style={{ zIndex: "58" }}>{t("name")}</label>
            <input
              style={{ zIndex: "58" }}
              type="text"
              placeholder={name}
              disabled
            />
          </div>

          <div
            style={{ zIndex: "58", marginTop: "1vw", marginBottom: "1.5vw" }}
            className={style.item}
          >
            <label style={{ zIndex: "58" }}>{t("new_desig")}</label>
            <input
              style={{ zIndex: "58" }}
              type="text"
              value={formData.displayTitle}
              onChange={(e) =>
                setFormData({ ...formData, displayTitle: e.target.value })
              }
            />
          </div>

          <div
            style={{ position: "relative", zIndex: "58" }}
            onClick={handleClick}
          >
            <ButtonWithAction
              buttonText={t("edit_")}
              disabled={disabled}
              shwoLoader={true}
              onAction={handleClick}
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default EditDisplay;

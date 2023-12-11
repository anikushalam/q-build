import React from "react";
import style from "./ProminentCard.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../services/BaseUrl";

function ProminentCard({ prominent, itemRef, instituteTheme }) {
  const { t } = useTranslation();
  return (
    <div className={style.alumnicard} ref={itemRef}>
      <div className={style.alumnicardinner}>
        <div className={style.alumnicardfront}>
          <img
            src={`${imageShowUrl}/${prominent?.profile_photo}`}
            alt="alumni"
          />

          <div
            className={style.alumnicardtext}
            style={{
              backgroundColor: `${instituteTheme ?? "rgba(0, 26, 114, 0.5)"}`,
            }}
          >
            {prominent?.name}
          </div>
        </div>

        <div
          className={style.alumnicardback}
          style={{
            backgroundColor: `${instituteTheme ?? "rgba(0, 26, 114, 0.5)"}`,
          }}
        >
          <h6>{prominent?.name}</h6>
          <h6>{prominent?.department?.dName}</h6>
          <h6>
            {t("batch")}: {prominent?.batch}
          </h6>
          <h6>{prominent?.job_profile}</h6>
          <h6>@</h6>
          <h6>{prominent?.company_name}</h6>
        </div>
      </div>
    </div>
  );
}

export default ProminentCard;

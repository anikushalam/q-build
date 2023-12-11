import React, { useState } from "react";
import SelectOption from "./SelectOption";
import style from "../CertificateDetail.module.css";
import { useTranslation } from "react-i18next";

const ProgressLevel = ({ studyLevel, setLeavingData }) => {
  const [openOption, setOpenOption] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div>
        {studyLevel === "" ? (
          <h6
            className={style.greyInk}
            onClick={() => setOpenOption((pre) => !pre)}
          >
            {t("select_progress")}
          </h6>
        ) : (
          <h6 onClick={() => setOpenOption((pre) => !pre)}>{studyLevel}</h6>
        )}
        {openOption ? (
          <img className={style.up} src="/images/up-triangle-icon.svg" alt="" />
        ) : (
          <img className={style.down} src="/images/downn-icon.svg" alt="" />
        )}
      </div>
      {openOption && (
        <SelectOption
          onClose={() => setOpenOption((pre) => !pre)}
          setLeavingData={setLeavingData}
          status="progress"
        />
      )}
    </>
  );
};

export default ProgressLevel;

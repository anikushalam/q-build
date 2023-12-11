import React from "react";
import style from "../CertificateDetail.module.css";
import SelectOption from "./SelectOption";
import { useTranslation } from "react-i18next";

const BehaviourOption = ({ behaviour, setLeavingData }) => {
  const { t } = useTranslation();
  const [openOption, setOpenOption] = React.useState(false);

  return (
    <>
      <div>
        {behaviour === "" ? (
          <h6
            className={style.greyInk}
            onClick={() => setOpenOption((pre) => !pre)}
          >
            {t("select_behaviour")}
          </h6>
        ) : (
          <h6 onClick={() => setOpenOption((pre) => !pre)}>{behaviour}</h6>
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
          status="behaviour"
        />
      )}
    </>
  );
};

export default BehaviourOption;

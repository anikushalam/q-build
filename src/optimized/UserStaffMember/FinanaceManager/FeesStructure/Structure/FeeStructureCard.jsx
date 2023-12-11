import { useState } from "react";
import style from "../FeesStructure.module.css";
import { assestsUserFinanceUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";
import { useTranslation } from "react-i18next";
import FeeStructureDetail from "./FeeStructureDetail";
const FeeStructureCard = ({ structure, instituteId, fid, did }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState("");

  const onOpen = () => {
    setOpen(structure?._id);
  };

  const onClose = () => {
    setOpen("");
  };
  return (
    <>
      <div
        className={style.fees_card}
        onClick={onOpen}
        style={{
          cursor: "pointer",
        }}
      >
        <img src={`${assestsUserFinanceUrl}/category.svg`} alt="categor icon" />
        <div className={style.fees_card_text}>
          <div className={style.fees_card_text_bottom}>
            <h6>{structure?.category_master?.category_name ?? ""}</h6>
            <h6>{`(${t("rs_only")} ${structure?.applicable_fees ?? 0})`}</h6>
          </div>
          <div className={style.fees_card_text_bottom}>
            <h6>{structure?.structure_name ?? ""}</h6>
            <h6>
              {t("rs_only")}
              {structure?.total_admission_fees ?? 0}
            </h6>
          </div>
        </div>
      </div>
      {open && (
        <FeeStructureDetail
          onClose={onClose}
          structureId={open}
          instituteId={instituteId}
          fid={fid}
          did={did}
        />
      )}
    </>
  );
};

export default FeeStructureCard;

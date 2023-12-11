import style from "../FeesStructure.module.css";
import { assestsUserFinanceUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import { useTranslation } from "react-i18next";
const SelectFeeStructureCard = ({ structure, selectedStructure, onSelect }) => {
  const { t } = useTranslation();

  const onChoose = () => {
    onSelect(structure);
  };

  return (
    <div
      className={
        selectedStructure === structure?._id
          ? `${style.fees_card} ${style.fees_card_hover_active}`
          : `${style.fees_card} ${style.fees_card_hover}`
      }
      onClick={onChoose}
      style={{
        cursor: "pointer",
      }}
    >
      <img src={`${assestsUserFinanceUrl}/category.svg`} alt="categor icon" />
      <div className={style.fees_card_text}>
        <div className={style.fees_card_text_bottom}>
          <h6>{structure?.unique_structure_name ?? ""}</h6>
        </div>
        <div className={style.fees_card_text_bottom}>
          <h6>
            {t("applicable_fees_only")} {t("rs_only")}
            {structure?.applicable_fees ?? 0}
          </h6>
          <h6>
            {t("total_admission_fees")} {" : "} {t("rs_only")}
            {structure?.total_admission_fees ?? 0}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SelectFeeStructureCard;

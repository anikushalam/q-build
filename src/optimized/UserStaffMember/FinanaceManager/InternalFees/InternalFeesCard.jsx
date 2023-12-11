import { useTranslation } from "react-i18next";
import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import style from "./InternalFees.module.css";

const InternalFeesCard = ({ fees }) => {
  const { t } = useTranslation();
  return (
    <div className={style.exam_card_container}>
      <img
        src={`${assestsUserFinanceUrl}/fees-card.svg`}
        alt="fees icon"
        className={style.fees_image}
      />
      <div className={style.exam_inner_text}>
        <h6>
          {t("rs_only")} {fees?.feeAmount ?? 0}/-
        </h6>
        <p>{fees?.feeName ?? ""} </p>
      </div>
    </div>
  );
};

export default InternalFeesCard;

import { assestsUserFinanceUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";
import style from "../FeesStructure.module.css";
import { useTranslation } from "react-i18next";
const FeeHeadSelectCard = ({ feeHead, onSelect, selectedFeeId }) => {
  const { t } = useTranslation();
  const onClick = () => {
    onSelect(feeHead);
  };
  return (
    <>
      <div
        className={
          selectedFeeId?.includes(feeHead?._id)
            ? `${style.category_card} ${style.category_card_hover_active}`
            : `${style.category_card} ${style.category_card_hover}`
        }
        key={feeHead?._id}
        onClick={onClick}
      >
        <img
          style={{
            height: "36px",
            width: "36px",
          }}
          src={`${assestsUserFinanceUrl}/category.svg`}
          alt="categor icon"
        />
        <div className={style.category_card_fee}>
          <h6
            style={{
              marginBottom: "0.3rem",
            }}
          >
            {feeHead?.master_name ?? ""}
          </h6>
          <h6
            style={{
              color: "rgba(18, 18, 18, 0.5)",
            }}
          >
            {t("rs_only")}
            {feeHead?.master_amount ?? 0}
          </h6>
        </div>
      </div>
    </>
  );
};

export default FeeHeadSelectCard;

import { useTranslation } from "react-i18next";
import style from "../../StudentStatitics/StudentStatitics.module.css";
const OverallStatisticsCard = ({ label, amount, iconUrl, onAction, arr }) => {
  const { t } = useTranslation();
  const onClick = () => {
    onAction(arr);
  };
  return (
    <div className={style.osc_card} onClick={onClick}>
      <img src={iconUrl} alt="overal icon" />
      <div className={style.osc_card_inner}>
        <h6>
          {t("rs")} {amount ?? 0}
        </h6>
        <p>{t(label)}</p>
      </div>
    </div>
  );
};

export default OverallStatisticsCard;

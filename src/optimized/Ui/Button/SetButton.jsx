import { useTranslation } from "react-i18next";
import style from "./Button.module.css";
import { assestsUserFinanceUrl } from "../../Services/UrlConfig/AssestsBaseUrl";
const SetButton = ({ label, onAction, customStyle }) => {
  const { t } = useTranslation();

  return (
    <div
      className={style.set_btn_container}
      onClick={onAction}
      style={customStyle}
    >
      <h6>{t(label)}</h6>
      <img src={`${assestsUserFinanceUrl}/forward.svg`} alt="forward icon" />
    </div>
  );
};

export default SetButton;

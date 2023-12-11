import { useTranslation } from "react-i18next";
import style from "../../UiTab.module.css";
import { Link } from "react-router-dom";
const SquareTabCard = ({ label, iconUrl, url, state, isAuthorized }) => {
  const { t } = useTranslation();

  return url ? (
    <>
      {!isAuthorized ? (
        <div
          className={style.square_tab_card}
          style={{
            opacity: "0.5",
          }}
        >
          <img src={iconUrl} alt="card icon" />
          <p>{t(label)}</p>
        </div>
      ) : (
        <Link className={style.square_tab_card} to={url} state={state}>
          <img src={iconUrl} alt="card icon" />
          <p>{t(label)}</p>
        </Link>
      )}
    </>
  ) : (
    <div className={style.square_tab_card}>
      <img src={iconUrl} alt="card icon" />
      <p>{t(label)}</p>
    </div>
  );
};

export default SquareTabCard;

import { useTranslation } from "react-i18next";
import style from "../../UiTab.module.css";
import { Link } from "react-router-dom";
import { memo } from "react";

const HorizontalTabCard = ({
  tab,
  isActive,
  isLink,
  parentState,
  onAction,
  url,
}) => {
  const { t } = useTranslation();

  const onClick = () => {
    onAction(tab?.id);
  };
  return isLink ? (
    <Link
      className={
        isActive ? style.horizontal_tab_card_active : style.horizontal_tab_card
      }
      to={url}
      state={parentState}
    >
      <h6>{t(tab?.label)}</h6>
    </Link>
  ) : (
    <div
      className={
        isActive ? style.horizontal_tab_card_active : style.horizontal_tab_card
      }
      onClick={onClick}
    >
      <h6>{t(tab?.label)}</h6>
    </div>
  );
};

export default memo(HorizontalTabCard);

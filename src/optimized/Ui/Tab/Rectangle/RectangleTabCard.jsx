import { useTranslation } from "react-i18next";
import style from "../../UiTab.module.css";
import { memo, useCallback } from "react";
import { Link } from "react-router-dom";

const RectangleTabCard = ({
  label,
  onClick,
  isActive,
  isLink,
  url,
  parentState,
  isAuthorized,
}) => {
  const { t } = useTranslation();

  const onActionHandler = useCallback(() => {
    if (onClick) {
      onClick();
    }
    return null;
  }, [onClick]);
  return (
    <>
      {isLink ? (
        <>
          {!isAuthorized ? (
            <div
              className={style.rectangle_tab_card}
              style={{
                opacity: "0.5",
              }}
            >
              {t(label)}
            </div>
          ) : (
            <Link
              className={
                isActive
                  ? style.rectangle_tab_card_active
                  : style.rectangle_tab_card
              }
              to={url}
              state={parentState}
            >
              {t(label)}
            </Link>
          )}
        </>
      ) : (
        <div
          className={
            isActive
              ? style.rectangle_tab_card_active
              : style.rectangle_tab_card
          }
          onClick={onActionHandler}
        >
          {t(label)}
        </div>
      )}
    </>
  );
};

export default memo(RectangleTabCard);

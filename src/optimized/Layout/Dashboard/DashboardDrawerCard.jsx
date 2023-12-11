import { Link } from "react-router-dom";
import style from "./DashboardLayout.module.css";
import { useTranslation } from "react-i18next";

const DashboardDrawerCard = ({
  drawer,
  url,
  parentState,
  onAction,
  isActive,
  customStyleContainer,
  customStyleIcon,
  customStylelabel,
}) => {
  const { t } = useTranslation();
  return drawer?.isLink ? (
    <Link to={url} state={parentState}>
      <div
        className={
          isActive ? `${style.dd_card} ${style.dd_card_active}` : style.dd_card
        }
        style={customStyleContainer}
      >
        <img
          src={isActive ? drawer?.fill : drawer?.outline}
          alt="drawer icon"
          style={customStyleIcon}
        />
        <h6 style={customStylelabel}>{t(drawer?.label)}</h6>
      </div>
    </Link>
  ) : (
    <div
      className={style.dd_card}
      onClick={onAction}
      style={customStyleContainer}
    >
      <img
        src={isActive ? drawer?.fill : drawer?.outline}
        alt="drawer icon"
        style={customStyleIcon}
      />
      <h6 style={customStylelabel}>{t(drawer?.label)}</h6>
    </div>
  );
};

export default DashboardDrawerCard;

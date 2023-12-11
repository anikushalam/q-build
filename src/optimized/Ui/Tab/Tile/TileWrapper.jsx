import style from "../../UiTab.module.css";
import { useTranslation } from "react-i18next";
const TileWrapper = ({
  label,
  customTileLabel,
  customTileContainer,
  children,
}) => {
  const { t } = useTranslation();
  return (
    <div className={style.tile_container}>
      {label && (
        <h6 className={style.tile_label} style={customTileLabel}>
          {t(label)}
        </h6>
      )}
      <section
        className={style.tile_tile_container}
        style={customTileContainer}
      >
        {children}
      </section>
    </div>
  );
};

export default TileWrapper;

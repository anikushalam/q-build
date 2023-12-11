import style from "../../UiTab.module.css";
import { useTranslation } from "react-i18next";
const TileCard = ({ tile, onTile, activeTile, customTileChild }) => {
  const { t } = useTranslation();

  return (
    <div
      className={
        tile?.key === activeTile ? style.tile_tile_active : style.tile_tile
      }
      onClick={() => onTile(tile?.key)}
      style={customTileChild}
    >
      {t(tile?.name)}
    </div>
  );
};

export default TileCard;

import React from "react";
import style from "./Tile.module.css";
import { useTranslation } from "react-i18next";
const TileWrapper = ({
  labelText,
  customTileLabel,
  customTileContainer,
  customTileChild,
  tileList,
  activeTile,
  onTile,
  onParentTile,
  customTileAvailableChild,
}) => {
  const { t } = useTranslation();
  return (
    <div className={style.tile_container}>
      {labelText && (
        <h6 className={style.tile_label} style={customTileLabel}>
          {t(labelText)}
        </h6>
      )}
      <section
        className={style.tile_tile_container}
        style={customTileContainer}
      >
        {tileList?.map((tile) =>
          tile?.isAvaiable ? (
            <div
              className={
                tile?.key === activeTile
                  ? style.tile_tile_active
                  : style.tile_tile
              }
              onClick={() => onParentTile(tile)}
              style={customTileAvailableChild}
            >
              {t(tile?.name)}
              {tile?.mode === "FILTER" ? (
                ""
              ) : (
                <div
                  style={{
                    whiteSpace: "break-spaces",
                  }}
                >
                  {t("available")} {" : "} {tile?.count}
                </div>
              )}
            </div>
          ) : (
            <div
              className={
                tile?.key === activeTile
                  ? style.tile_tile_active
                  : style.tile_tile
              }
              onClick={() => onTile(tile?.key)}
              style={customTileChild}
            >
              {t(tile?.name)}
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default TileWrapper;

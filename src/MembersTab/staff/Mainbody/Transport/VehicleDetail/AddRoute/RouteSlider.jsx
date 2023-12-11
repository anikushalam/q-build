import React from "react";
import style from "./RouteSlider.module.css";
import AddPlusPoint from "./AddPlusPoint";
import DotPoint from "./DotPoint";
import { useTranslation } from "react-i18next";

const RouteSlider = ({
  onAddRoute,
  addedRouteList,
  vehicleId,
  transportId,
  batchId,
  classMasterId,
}) => {
  const { t } = useTranslation();
  return (
    <div className={style.line_container}>
      <DotPoint
        // customStyle={{
        //   marginTop: "-3px",
        // }}
        title={"At Institution"}
      />
      {addedRouteList?.map((route, index) => (
        <DotPoint
          customContainerStyle={{
            position: "absolute",
            top: `${index * 4 + 4}rem`,
          }}
          title={route.stop}
          subtitle={`${t("structure_name")}${route.structureName}`}
          key={index}
        />
      ))}
      <div
        className={style.line}
        style={{
          height: `${addedRouteList?.length * 4 + 4}rem`,
        }}
      ></div>
      <AddPlusPoint
        customStyle={{
          alignItems: "flex-start",
        }}
        customStyleDot={{
          marginTop: "-1px",
        }}
        onAddRoute={onAddRoute}
        vehicleId={vehicleId}
        transportId={transportId}
        batchId={batchId}
        classMasterId={classMasterId}
      />
    </div>
  );
};

export default RouteSlider;

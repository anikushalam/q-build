import React from "react";
import style from "./RouteSlider.module.css";
import RouteForm from "./RouteForm";
const AddPlusPoint = ({
  customStyle,
  customStyleDot,
  onAddRoute,
  openAs,
  onWhereAdd,
  routeIndex,
  vehicleId,
  transportId,
  batchId,
  classMasterId,
  isEdit,
  addIndex,
}) => {
  return (
    <div
      className={style.dot_point_container}
      style={{
        ...customStyle,
      }}
    >
      <div
        className={style.dot_point}
        style={{ backgroundColor: "#ffffff", ...customStyleDot }}
      >
        <img src="/images/transport/route-plus-icon.svg" alt="plus icon" />
      </div>
      <div className={style.dot_form_container}>
        <RouteForm
          onAddRoute={onAddRoute}
          openAs={openAs}
          onWhereAdd={onWhereAdd}
          routeIndex={routeIndex}
          vehicleId={vehicleId}
          transportId={transportId}
          batchId={batchId}
          classMasterId={classMasterId}
          addIndex={addIndex}
          isEdit={isEdit}
        />
      </div>
    </div>
  );
};

export default AddPlusPoint;

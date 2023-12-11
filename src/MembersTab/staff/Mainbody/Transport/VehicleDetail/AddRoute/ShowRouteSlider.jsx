import React, { useEffect, useState } from "react";
import style from "./RouteSlider.module.css";
import DotPoint from "./DotPoint";
import AddPlusPoint from "./AddPlusPoint";
import { useTranslation } from "react-i18next";
const ShowRouteSlider = ({
  onAddRoute,
  addedRouteList,
  onWhereAdd,
  addIndex,
  onAddInjectRoute,
  editRoute,
  onRouteClose,
  vehicleId,
  transportId,
  batchId,
  classMasterId,
  isRootAccess,
}) => {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({
    yPos: "",
    click: false,
  });
  function mouseCoordinates(event) {
    setMousePosition(() => ({
      yPos: event.clientY,
      click: false,
    }));
  }
  const calculateIndex = (val) => {
    let va = Math.ceil(val / 64);
    let con = va > 1 ? va : 1;
    return con;
  };
  function mouseCoordinatesClick(event) {
    // console.info(
    //   "pageX: ",
    //   event.pageX,

    //   "pageY: ",
    //   event.pageY,

    //   "clientX: ",
    //   event.clientX,

    //   "clientY:",
    //   event.clientY
    // );
    setMousePosition(() => ({
      yPos: event.clientY,
      click: true,
    }));
    onWhereAdd(calculateIndex(event.clientY - 147));
  }
  useEffect(() => {
    let mo = document.getElementById("mouseHover");
    mo.onmousemove = mouseCoordinates;
  }, []);

  //   const calculateIndex = (val) => {
  //     return val / 16;
  //   };
  //   useEffect(() => {
  //     let lo = document.getElementById("mouseClick");
  //     if (clickable) {
  //       // let mo = document.getElementById("mouseHover");
  //       lo.style.display = "block";
  //     } else {
  //       lo.style.display = "none";
  //       setWhichIndex("");
  //     }
  //     //    return removeEventListener()
  //   }, [clickable]);
  //   useEffect(() => {
  //     if (mousePosition.yPos) {
  //       setWhichIndex(calculateIndex(mousePosition.yPos - 170));
  //     }
  //   }, [mousePosition.yPos]);

  //   console.info("ashjsdabas", addedRouteList, addIndex);
  return (
    <div className={style.line_container}>
      <DotPoint
        // customStyle={{
        //   marginTop: "-3px",
        // }}
        title={"At Institution"}
      />
      {addedRouteList?.map((route, index) =>
        route?.stop === "" ? (
          <AddPlusPoint
            customStyle={{
              alignItems: "flex-start",
              position: "absolute",
              top: index === 1 || index === 0 ? `4rem` : `${4 * index}rem`,
              zIndex: "1",
            }}
            customStyleDot={{
              marginTop: "-1px",
            }}
            onAddRoute={onAddInjectRoute}
            openAs="INJECTABLE"
            onWhereAdd={onWhereAdd}
            routeIndex={route.index}
            key={index}
            vehicleId={vehicleId}
            transportId={transportId}
            batchId={batchId}
            classMasterId={classMasterId}
          />
        ) : (
          <DotPoint
            customContainerStyle={{
              position: "absolute",
              top: addIndex
                ? index >= addIndex - 1
                  ? `${index * 4 + 4 + 10}rem`
                  : `${index * 4 + 4}rem`
                : `${index * 4 + 4}rem`,
            }}
            title={route.stop ?? ""}
            subtitle={`${t("structure_name")}${route.structureName ?? ""}`}
            routeId={route?._id}
            routeStructureId={route?.structure}
            routeStructureName={route?.structureName}
            editRoute={editRoute}
            onRouteClose={onRouteClose}
            key={index}
          />
        )
      )}
      <div
        className={style.line}
        id="mouseHover"
        style={{
          height:
            isRootAccess === "INVALID" || !editRoute
              ? `${addedRouteList?.length * 4}rem`
              : addIndex
              ? `${addedRouteList?.length * 4 + 4 + 10}rem`
              : `${addedRouteList?.length * 4 + 4}rem`,
        }}
        onClick={mouseCoordinatesClick}
      >
        <div
          className={style.line_hover}
          style={{
            top: mousePosition.yPos - 170,
            width: "15rem",
          }}
          id="mouseClick"
        >
          {isRootAccess === "INVALID" || !editRoute ? null : (
            <div
              className={style.dot_point}
              style={{ backgroundColor: "#ffffff" }}
            >
              <img
                src="/images/transport/route-plus-icon.svg"
                alt="plus icon"
              />
            </div>
          )}
          {/* <div className={style.dot_form_container}>
            <RouteForm />
          </div> */}
        </div>
      </div>
      {isRootAccess === "INVALID" || !editRoute ? (
        ""
      ) : (
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
          isEdit
          addIndex={addedRouteList?.length}
        />
      )}
    </div>
  );
};

export default ShowRouteSlider;

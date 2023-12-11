import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../../../StaffAdmisionAdmin/AdmissionScholarship/AdmissionScholarship.module.css";
import QLoader from "../../../../../../Loader/QLoader";
import ShowRouteSlider from "./ShowRouteSlider";
import { useUpdateRoute } from "../../../../../../hooks/member_tab/transport-api";
import RouteMenu from "./RouteMenu";
const ShowRoutes = ({
  stopList,
  onClose,
  onRefetch,
  vehicleId,
  transportId,
  batchId,
  classMasterId,
  isRootAccess,
}) => {
  const { t } = useTranslation();
  const [disabled, setDiasbled] = useState(false);
  const [addedRouteList, setAddedRouteList] = useState([]);
  const [addIndex, setAddedIndex] = useState("");
  const [editRoute, setEditRoute] = useState(false);
  const [openRouteMenu, setOpenRouteMenu] = useState("");

  const [updateRoute] = useUpdateRoute();
  useEffect(() => {
    if (stopList) {
      let arr = [];
      for (let i = 0; i < stopList?.length; ++i) {
        if (i === 0) {
        } else {
          arr.push({
            stop: stopList[i]?.route_stop ?? "",
            _id: stopList[i]?._id ?? "",
            structure: stopList[i]?.route_structure?._id ?? "",
            structureName:
              stopList[i]?.route_structure?.unique_structure_name ?? "",
          });
        }
      }
      setAddedRouteList(arr);
    }
  }, [stopList]);

  const onWhereAdd = (index) => {
    let arr = addedRouteList;
    let flag = false;
    for (let i = 0; i < arr?.length; ++i) {
      if (arr[i].stop === "") {
        arr.splice(i, 1);
        flag = true;
      }
    }
    if (flag) {
      setAddedIndex("");
    } else {
      //   if (index === 1) {
      //     arr.splice(0, 0, {
      //       stop: "",
      //       fee: "",
      //       index: index,
      //     });
      //   } else {
      arr.splice(index - 1, 0, {
        stop: "",
        structure: "",
        structureName: "",
        index: index,
      });
      //   }
      setAddedIndex(index);
      setAddedRouteList(arr);
    }
  };
  const onAddRoute = (val) => {
    setAddedRouteList((prev) => [...prev, val]);
  };
  const onAddInjectRoute = (val) => {
    let arr = addedRouteList;
    for (let i = 0; i < arr?.length; ++i) {
      if (arr[i].stop === "") {
        arr[i].stop = val?.stop;
        arr[i].structure = val?.structure;
        arr[i].structureName = val?.structureName;
      }
    }
    // console.info("asdsakdkas", arr);
    setAddedRouteList(arr);
    setAddedIndex("");
  };

  const onUpdate = () => {
    if (addedRouteList?.length) {
      setDiasbled((pre) => !pre);
      let filterData = addedRouteList?.filter((val) => (val.index ? val : ""));
      updateRoute({
        vid: vehicleId,
        route_status: "Add_New_Stop_Point",
        modifyRoute: {
          edit_path: filterData,
        },
      })
        .then(() => {
          onRefetch();
          setDiasbled((pre) => !pre);
          onClose();
        })
        .catch({});
    }
  };

  const onRouteClose = (val) => {
    setOpenRouteMenu(val);
  };

  // console.info("stopList", stopList);
  return (
    <>
      {!openRouteMenu && (
        <PopupWrapper onClose={onClose}>
          <div className={style.assign_role_container}>
            <section
              className={style.assign_role_title}
              style={{
                position: "relative",
              }}
            >
              <img
                src="/images/arrow-left-fees-icon.svg"
                onClick={onClose}
                alt="back icon"
              />

              <h6>
                {t(
                  isRootAccess === "INVALID"
                    ? "vehicle_routes"
                    : "add_vehicle_route"
                )}
              </h6>
              {isRootAccess === "INVALID" ? null : (
                <button
                  className={style.edit_btn}
                  onClick={() => setEditRoute((pre) => !pre)}
                >
                  {t(editRoute ? "cancel" : "transport_edit")}
                </button>
              )}
            </section>
            <BorderBottom
              customStyle={{
                width: "100%",
              }}
            />
            <section
              style={{
                padding: "0 0.8rem",
              }}
            >
              <ShowRouteSlider
                onAddRoute={onAddRoute}
                onAddInjectRoute={onAddInjectRoute}
                addedRouteList={addedRouteList}
                onWhereAdd={onWhereAdd}
                addIndex={addIndex}
                isRootAccess={isRootAccess}
                editRoute={editRoute}
                onRouteClose={onRouteClose}
                vehicleId={vehicleId}
                transportId={transportId}
                batchId={batchId}
                classMasterId={classMasterId}
              />

              {isRootAccess === "INVALID" || !editRoute ? null : (
                <button
                  className={style.applicable_to_btn}
                  style={{
                    justifyContent: "center",
                    marginBottom: "2rem",
                    marginTop: "3rem",
                  }}
                  onClick={onUpdate}
                >
                  {t("save_route")}
                </button>
              )}
              {disabled && <QLoader />}
            </section>
          </div>
        </PopupWrapper>
      )}

      {openRouteMenu && (
        <RouteMenu
          openRouteMenu={openRouteMenu}
          onClose={() => setOpenRouteMenu("")}
          vid={vehicleId}
          onRefetch={onRefetch}
          transportId={transportId}
          batchId={batchId}
          classMasterId={classMasterId}
        />
      )}
    </>
  );
};

export default ShowRoutes;

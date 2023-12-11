import React, { useEffect, useState } from "react";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../../StaffAdmisionAdmin/AdmissionScholarship/AdmissionScholarship.module.css";
import QLoader from "../../../../../../Loader/QLoader";
import RouteSlider from "./RouteSlider";
import { useTranslation } from "react-i18next";
import {
  useAddRoute,
  useGetOneVehicleRouteList,
} from "../../../../../../hooks/member_tab/transport-api";
import ShowRoutes from "./ShowRoutes";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";

const AddRoute = ({
  onClose,
  vid,
  transportId,
  batchId,
  classMasterId,
  isRootAccess,
}) => {
  const { t } = useTranslation();
  const [addedRouteList, setAddedRouteList] = useState([]);
  const [disabled, setDiasbled] = useState(false);
  const [addRoute] = useAddRoute();

  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [stopList, setStopList] = useState([]);
  const { getOneVehicleRouteList, getOneVehicleRouteListRefetch } =
    useGetOneVehicleRouteList({
      data: { search: "", vid: vid },
      skip: !vid,
    });
  useEffect(() => {
    if (vid) {
      setShowingDataLoading(true);
      getOneVehicleRouteListRefetch();
    }
  }, [vid, getOneVehicleRouteListRefetch]);
  useEffect(() => {
    if (getOneVehicleRouteList?.route?.boarding_points) {
      // setStopList((prevState) =>
      //   [
      //     ...new Set(
      //       [
      //         ...prevState,
      //         ...getOneVehicleRouteList?.route?.boarding_points,
      //       ]?.map(JSON.stringify)
      //     ),
      //   ]?.map(JSON.parse)
      // );
      setStopList(getOneVehicleRouteList?.route?.boarding_points);
      setShowingDataLoading(false);
    } else if (getOneVehicleRouteList?.route?.boarding_points?.length === 0)
      setShowingDataLoading(false);
    else {
    }
  }, [getOneVehicleRouteList?.route?.boarding_points]);

  const onAddRoute = (val) => {
    setAddedRouteList((prev) => [...prev, val]);
  };

  const onCreate = () => {
    if (addedRouteList?.length) {
      setDiasbled((pre) => !pre);
      addRoute({
        vid: vid,
        createRoute: {
          route_path: addedRouteList,
        },
      })
        .then(() => {
          onClose();
        })
        .catch({});
    }
  };

  // console.info("addedRouteList", addedRouteList);
  return (
    <>
      {getOneVehicleRouteList?.route?.boarding_points?.length ? (
        <ShowRoutes
          stopList={stopList}
          onClose={onClose}
          vid={vid}
          isRootAccess={isRootAccess}
          onRefetch={getOneVehicleRouteListRefetch}
          vehicleId={vid}
          transportId={transportId}
          batchId={batchId}
          classMasterId={classMasterId}
        />
      ) : isRootAccess === "INVALID" ? null : (
        <PopupWrapper onClose={onClose}>
          <div
            className={style.assign_role_container}
            style={{
              width: "40rem",
            }}
          >
            <section className={style.assign_role_title}>
              <img
                src="/images/arrow-left-fees-icon.svg"
                onClick={onClose}
                alt="back icon"
              />

              <h6>{t("add_vehicle_route")}</h6>
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
              <RouteSlider
                onAddRoute={onAddRoute}
                addedRouteList={addedRouteList}
                vehicleId={vid}
                transportId={transportId}
                batchId={batchId}
                classMasterId={classMasterId}
              />

              <button
                className={style.applicable_to_btn}
                style={{
                  justifyContent: "center",
                  marginBottom: "2rem",
                  marginTop: "3rem",
                }}
                onClick={onCreate}
              >
                {t("save_route")}
              </button>
              {disabled && <QLoader />}
            </section>
          </div>
        </PopupWrapper>
      )}

      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default AddRoute;

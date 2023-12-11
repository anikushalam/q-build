import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useGetVehicleDetail } from "../../hooks/member_tab/transport-api";
import VehicleHeader from "./VehicleHeader";
import style from "../InstituteTransport.module.css";
import BorderBottom from "../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import VehiclePassenger from "../../MembersTab/staff/Mainbody/Transport/VehicleDetail/VehiclePassenger";
import AddRoute from "../../MembersTab/staff/Mainbody/Transport/VehicleDetail/AddRoute/AddRoute";
const InstituteVehcileDetail = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [addOpenRoute, setAddOpenRoute] = useState(false);

  const { getVehicleDetail, getVehicleDetailRefetch } = useGetVehicleDetail({
    vid: getQuery.state?.vehicleId,
    skip: !getQuery.state?.vehicleId,
  });

  useEffect(() => {
    if (getQuery.state?.vehicleId) getVehicleDetailRefetch();
  }, [getQuery.state?.vehicleId, getVehicleDetailRefetch]);
  const onCloseRoute = () => {
    setAddOpenRoute((pre) => !pre);
  };
  return (
    <>
      <VehicleHeader
        vehicle={getVehicleDetail?.one_vehicle}
        onCloseRoute={onCloseRoute}
      />
      <div className={style.mainContainer}>
        <h6
          style={{
            padding: "1rem",
          }}
        >
          {t("total_passengers")}{" "}
          {getVehicleDetail?.one_vehicle?.passenger_count ?? 0}
        </h6>
        <BorderBottom
          customStyle={{
            marginBottom: "0.6rem",
            width: "100%",
          }}
        />
        <VehiclePassenger
          vid={getQuery.state?.vehicleId}
          viewAs={"INSTITUTE_TRANSPORT"}
        />
        {addOpenRoute && (
          <AddRoute
            onClose={onCloseRoute}
            vid={getQuery.state?.vehicleId}
            viewAs={"INSTITUTE_TRANSPORT"}
          />
        )}
      </div>
    </>
  );
};

export default InstituteVehcileDetail;

import React from "react";
import style from "../../Hostel/Hostel.module.css";
import { useTranslation } from "react-i18next";
import TransportTabChangeLink from "../TransportTabChangeLink";
import InstituteTransportTabChangeLink from "../../../../../InstituteTransport/InstituteTransportTabChangeLink";

const VehicleCard = ({
  vehicle,
  customStyle,
  carryParentState,
  pageOpenAs,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {pageOpenAs === "INSTITUTE" ? (
        <InstituteTransportTabChangeLink
          carryParentState={{ ...carryParentState, vehicleId: vehicle?._id }}
          activeTab={`vehicle-detail`}
          customStyle={
            customStyle
              ? customStyle
              : {
                  width: "49%",
                }
          }
        >
          <div className={style.vehical_card_container} style={customStyle}>
            <img src="/images/transport/bus-icon.svg" alt="bus" />
            <div className={style.vehical_card_text}>
              <h6>
                {t("vehicle_name")}
                {" : "}
                {vehicle?.vehicle_name ?? ""}
              </h6>
              <h6>
                {t("vehicle_no")} {vehicle?.vehicle_number ?? ""}
              </h6>
              <p>
                {t("driver")}
                {`${vehicle?.vehicle_driver?.staffFirstName ?? ""} ${
                  vehicle?.vehicle_driver?.staffMiddleName ?? ""
                } ${vehicle?.vehicle_driver?.staffLastName ?? ""}`}
              </p>
              <p>
                {t("conductor")}
                {`${vehicle?.vehicle_conductor?.staffFirstName ?? ""} ${
                  vehicle?.vehicle_conductor?.staffMiddleName ?? ""
                } ${vehicle?.vehicle_conductor?.staffLastName ?? ""}`}
              </p>
              <p>
                {t("total_passenger")}
                {" : "}
                {vehicle?.passenger_count ?? 0}
              </p>
            </div>
          </div>
        </InstituteTransportTabChangeLink>
      ) : (
        <TransportTabChangeLink
          carryParentState={{ ...carryParentState, vehicleId: vehicle?._id }}
          activeTab={`vehicle-detail`}
          customStyle={
            customStyle
              ? customStyle
              : {
                  width: "49%",
                }
          }
        >
          <div className={style.vehical_card_container} style={customStyle}>
            <img src="/images/transport/bus-icon.svg" alt="bus" />
            <div className={style.vehical_card_text}>
              <h6>
                {t("vehile_name")}
                {" : "}
                {vehicle?.vehicle_name ?? ""}c
              </h6>
              <h6>
                {t("vehicle_no")} {vehicle?.vehicle_number ?? ""}
              </h6>
              <p>
                {t("driver")}
                {`${vehicle?.vehicle_driver?.staffFirstName ?? ""} ${
                  vehicle?.vehicle_driver?.staffMiddleName ?? ""
                } ${vehicle?.vehicle_driver?.staffLastName ?? ""}`}
              </p>
              <p>
                {t("conductor")}
                {`${vehicle?.vehicle_conductor?.staffFirstName ?? ""} ${
                  vehicle?.vehicle_conductor?.staffMiddleName ?? ""
                } ${vehicle?.vehicle_conductor?.staffLastName ?? ""}`}
              </p>
              <p>
                {t("total_passenger")}
                {" : "}
                {vehicle?.passenger_count ?? 0}
              </p>
            </div>
          </div>
        </TransportTabChangeLink>
      )}
    </>
  );
};

export default VehicleCard;

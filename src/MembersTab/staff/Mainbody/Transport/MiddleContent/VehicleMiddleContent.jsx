import React from "react";
import style from "./MiddleContent.module.css";
import { useTranslation } from "react-i18next";
import Tabs from "./Tabs";
import TransportTabChangeLink from "../TransportTabChangeLink";
import { useLocation } from "react-router-dom";
import InstituteTransportTabChangeLink from "../../../../../InstituteTransport/InstituteTransportTabChangeLink";

function VehicleMiddleContent({
  carryParentState,
  accessRole,
  accessTpye,
  callApi,
  pageOpenAs,
}) {
  const { t } = useTranslation();
  const getQuery = useLocation();

  return (
    <div
      className={style.MiddleContent}
      style={{
        color: "inherit",
      }}
    >
      <div className={style.MiddleContentLeft}>
        <div className={style.tabs}>
          <Tabs
            search={getQuery?.search}
            carryParentState={carryParentState}
            isVehile
          />
        </div>

        <div className={style.item}>
          {pageOpenAs === "INSTITUTE" ? (
            <>
              <InstituteTransportTabChangeLink
                carryParentState={carryParentState}
                activeTab="vehicle-detail&n=passenger"
                accessRole={accessRole}
                accessTpye={accessTpye}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/transport/transport-passenger-icon.svg"
                    alt="moderator icon"
                  />
                  <p>{t("vehicle_passenger")}</p>
                </div>
              </InstituteTransportTabChangeLink>

              <InstituteTransportTabChangeLink
                carryParentState={carryParentState}
                activeTab="vehicle-detail&n=route"
                accessRole={accessRole}
                accessTpye={accessTpye}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/transport/add-route-icon.svg"
                    alt="completed"
                  />
                  <p>{t("view_route")}</p>
                </div>
              </InstituteTransportTabChangeLink>
            </>
          ) : (
            <>
              <TransportTabChangeLink
                carryParentState={carryParentState}
                activeTab="vehicle-detail&n=passenger"
                accessRole={accessRole}
                accessTpye={accessTpye}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/transport/transport-passenger-icon.svg"
                    alt="moderator icon"
                  />
                  <p>{t("vehicle_passenger")}</p>
                </div>
              </TransportTabChangeLink>

              <TransportTabChangeLink
                carryParentState={carryParentState}
                activeTab="vehicle-detail&n=route"
                accessRole={accessRole}
                accessTpye={accessTpye}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/transport/add-route-icon.svg"
                    alt="completed"
                  />
                  <p>{t("view_route")}</p>
                </div>
              </TransportTabChangeLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default VehicleMiddleContent;

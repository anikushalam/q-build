import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetOneVehicleRouteList } from "../../../../../../hooks/member_tab/transport-api";
import style from "../../../StaffAdmisionAdmin/AdmissionScholarship/AdmissionScholarship.module.css";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { debounce } from "lodash";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";

const SelectStop = ({ vehicleId, onClose, onSelectStop }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [stopList, setStopList] = useState([]);
  const [search, setSearch] = useState("");
  const { getOneVehicleRouteList, getOneVehicleRouteListRefetch } =
    useGetOneVehicleRouteList({
      data: { search: search, vid: vehicleId },
      skip: !vehicleId,
    });
  useEffect(() => {
    if (vehicleId) {
      setShowingDataLoading(true);
      getOneVehicleRouteListRefetch();
    }
  }, [vehicleId, getOneVehicleRouteListRefetch]);
  useEffect(() => {
    if (search) {
      setStopList(getOneVehicleRouteList?.route?.boarding_points);
      setShowingDataLoading(false);
    } else {
      if (getOneVehicleRouteList?.route?.boarding_points) {
        setStopList((prevState) =>
          [
            ...new Set(
              [
                ...prevState,
                ...getOneVehicleRouteList?.route?.boarding_points,
              ]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getOneVehicleRouteList?.route?.boarding_points?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
  }, [getOneVehicleRouteList?.route?.boarding_points]);

  const debounceState = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );
  const onSearchEvent = (e) => {
    debounceState(e.target.value);
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.assign_role_container}
        style={{
          paddingBottom: "1rem",
        }}
      >
        <section className={style.assign_role_title}>
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt="back icon"
          />

          <h6>{t("select_stop")}</h6>
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
          <div className={style.search_container}>
            <div className={style.search_container_text}>
              <img
                className={style.searchIcon}
                alt="search icon"
                src="/images/search-dash-icon.svg"
              />
              <input
                type="text"
                placeholder={t("search-label")}
                onChange={onSearchEvent}
                autoFocus={true}
                style={{
                  border: "0.029vw solid rgba(0, 0, 0, 0.15)",
                  width: "450px",
                }}
              />
            </div>
          </div>
          {stopList?.map((stop) =>
            stop?.route_stop === "At Institute" ? (
              ""
            ) : (
              <section
                className={style.route_container}
                key={stop?._id}
                onClick={() => onSelectStop(stop)}
              >
                <img src="/images/transport/stop-icon.svg" alt="stop icon" />
                <div className={style.student_container_name}>
                  <h6>{`${stop?.route_stop ?? ""}`}</h6>
                  <p className={style.student_container_gr}>
                    {t("stop_fees")}{" "}
                    {stop?.route_structure?.total_admission_fees ?? ""}
                  </p>
                </div>
              </section>
            )
          )}
          {showingDataLoading && <QvipleLoading />}
        </section>
      </div>
    </PopupWrapper>
  );
};

export default SelectStop;

import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useGetVehicleList } from "../../../../../hooks/member_tab/transport-api";
import VehicleCard from "./VehicleCard";
import style from "../../Hostel/Hostel.module.css";
import AddVehicle from "./AddVehicle";

const Vehicle = ({
  tid,
  carryParentState,
  pageOpenAs,
  instituteId,
  isRootAccess,
}) => {
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [vehicleList, setVehicleList] = useState([]);
  const [search, setSearch] = useState("");
  const [refetchStatus, setRefetchStatus] = useState(false);

  const { getVehicleList, getVehicleListRefetch } = useGetVehicleList({
    data: {
      tid: tid,
      page: page,
      limit: 10,
      search: search,
    },
    skip: !tid,
  });
  useEffect(() => {
    if (tid) {
      setShowingDataLoading(true);
      getVehicleListRefetch();
    }
  }, [tid, page, search, getVehicleListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setVehicleList(getVehicleList?.all_vehicles);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (search) {
        setVehicleList(getVehicleList?.all_vehicles);
        setShowingDataLoading(false);
      } else {
        if (getVehicleList?.all_vehicles) {
          setVehicleList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getVehicleList?.all_vehicles]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getVehicleList?.all_vehicles?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getVehicleList?.all_vehicles?.length === 10) setState(true);
    else setState(false);
  }, [getVehicleList?.all_vehicles]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };
  const onClose = () => {
    setAdd((pre) => !pre);
  };
  const onRefetchWhenCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getVehicleListRefetch();
  };
  return (
    <>
      <div className={style.with_search}>
        <h6>{t("vehicles")}</h6>
        <section className={style.search_container}>
          <div className={style.search_container_input}>
            <img
              className={style.searchIcon}
              alt="search icon"
              src="/images/search-dash-icon.svg"
            />
            <input
              type="text"
              placeholder="Search vehicles..."
              onChange={onSearchEvent}
            />
          </div>
        </section>
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />
      {isRootAccess === "INVALID" ? null : (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <p className={style.add_new_category} onClick={onClose}>
            {t("add_new_vehicle")}
          </p>
        </div>
      )}
      <div className={style.vehicle_list}>
        {vehicleList?.map((vehicle, index) =>
          vehicleList?.length === index + 1 ? (
            <div
              ref={ref}
              key={vehicle?._id}
              style={{
                width: "49%",
              }}
            >
              <VehicleCard
                vehicle={vehicle}
                carryParentState={carryParentState}
                pageOpenAs={pageOpenAs}
                customStyle={{
                  width: "100%",
                }}
              />
            </div>
          ) : (
            <VehicleCard
              vehicle={vehicle}
              key={vehicle?._id}
              carryParentState={carryParentState}
              pageOpenAs={pageOpenAs}
            />
          )
        )}
      </div>
      {showingDataLoading && <QvipleLoading />}
      {add && (
        <AddVehicle
          onClose={onClose}
          tid={tid}
          instituteId={instituteId}
          onRefetch={onRefetchWhenCreate}
        />
      )}
    </>
  );
};

export default Vehicle;

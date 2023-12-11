import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import {
  useGetOneVehiclePassengerList,
  useTransportDetail,
} from "../../../../../hooks/member_tab/transport-api";
import VehiclePassengerCard from "./VehiclePassengerCard";
import style from "../../Hostel/Hostel.module.css";
import AddPassenger from "./AddPassenger/AddPassenger";
import VehiclePassengerMenu from "./VehiclePassengerMenu";
import TransportSelectedBatch from "../TransportSelectedBatch";
const VehiclePassenger = ({
  vid,
  carryParentState,
  instituteId,
  tid,
  passengerCount,
  isRootAccess,
}) => {
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [passengerList, setPassengerList] = useState([]);
  const [search, setSearch] = useState("");
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [vehicleMenu, setVehicleMenu] = useState("");
  const [batchFilter, setBatchFilter] = useState("");
  const [remainFilter, setRemainFilter] = useState(true);
  const [openSelectedBatch, setOpenSelectedBatch] = useState(false);
  const { getOneVehiclePassengerList, getOneVehiclePassengerListRefetch } =
    useGetOneVehiclePassengerList({
      data: {
        vid: vid,
        page: page,
        limit: 10,
        search: search,
        filter_by: remainFilter,
        batch_filter: batchFilter,
        id: instituteId,
      },
      skip: !vid,
    });
  useEffect(() => {
    if (vid) {
      setShowingDataLoading(true);
      getOneVehiclePassengerListRefetch();
    }
  }, [
    vid,
    instituteId,
    page,
    search,
    batchFilter,
    remainFilter,
    getOneVehiclePassengerListRefetch,
  ]);

  const { transportDetail, transportDetailRefetch } = useTransportDetail({
    tid: tid,
    skip: !tid,
  });

  useEffect(() => {
    if (tid) transportDetailRefetch();
  }, [tid, transportDetailRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setPassengerList(getOneVehiclePassengerList?.all_passengers);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (search) {
        setPassengerList(getOneVehiclePassengerList?.all_passengers);
        setShowingDataLoading(false);
      } else {
        if (getOneVehiclePassengerList?.all_passengers) {
          if (page === 1) {
            setPassengerList(getOneVehiclePassengerList?.all_passengers);
            setRefetchStatus(false);
          } else {
            setPassengerList((prevState) =>
              [
                ...new Set(
                  [
                    ...prevState,
                    ...getOneVehiclePassengerList?.all_passengers,
                  ]?.map(JSON.stringify)
                ),
              ]?.map(JSON.parse)
            );
          }
          setShowingDataLoading(false);
        } else if (getOneVehiclePassengerList?.all_passengers?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getOneVehiclePassengerList?.all_passengers?.length === 10)
      setState(true);
    else setState(false);
  }, [getOneVehiclePassengerList?.all_passengers]);

  const onClose = () => {
    setAdd((pre) => !pre);
  };
  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };

  const onRefetchWhenCreate = () => {
    setPage((prev) => (prev = 1));
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getOneVehiclePassengerListRefetch();
  };

  const onCloseBatch = () => {
    setOpenSelectedBatch((pre) => !pre);
  };
  const onBatchFilter = (val) => {
    setPage((prev) => (prev = 1));
    setBatchFilter(val);
    setRefetchStatus(true);
    // setShowingDataLoading(true);
    // getOneVehiclePassengerListRefetch();
    onCloseBatch();
  };
  const onRemainFeeFilter = () => {
    setPage((prev) => (prev = 1));
    setRemainFilter((pre) => !pre);
    setRefetchStatus(true);
    // setShowingDataLoading(true);
    // getOneVehiclePassengerListRefetch();
  };
  return (
    <>
      <div
        className={style.with_search}
        style={{
          paddingTop: "1rem",
          paddingInline: "1rem",
        }}
      >
        <h6>
          {t("passengers_and_student")} {" : "} {passengerCount}
        </h6>
        <div className={style.search_container_filter}>
          <section className={style.search_container}>
            <div className={style.search_container_input}>
              <img
                className={style.searchIcon}
                alt="search icon"
                src="/images/search-dash-icon.svg"
              />
              <input
                type="text"
                placeholder="Search"
                onChange={onSearchEvent}
              />
            </div>
          </section>
          <img
            src="/images/filter-blue-icon.svg"
            alt="filter icon"
            // onClick={onCloseBatch}
            title="See data batch wise"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "1rem",
          gap: "2rem",
        }}
      >
        <p className={style.add_new_category} onClick={onRemainFeeFilter}>
          {t("filter_by_fees")}
        </p>
        {isRootAccess === "VALID" ? (
          <p className={style.add_new_category} onClick={onClose}>
            {t("add_passenger")}
          </p>
        ) : null}
      </div>

      <div className={style.transpotation_container}>
        {passengerList?.map((passenger, index) =>
          passengerList?.length === index + 1 ? (
            <div ref={ref} key={index}>
              <VehiclePassengerCard
                passenger={passenger}
                carryParentState={carryParentState}
                setVehicleMenu={setVehicleMenu}
                transportId={tid}
                onRefetch={onRefetchWhenCreate}
                isCollect={transportDetail?.trans_panel?.pending_student}
                onParentRefetch={transportDetailRefetch}
                isRootAccess={isRootAccess}
              />
            </div>
          ) : (
            <VehiclePassengerCard
              passenger={passenger}
              key={index}
              carryParentState={carryParentState}
              setVehicleMenu={setVehicleMenu}
              transportId={tid}
              onRefetch={onRefetchWhenCreate}
              isCollect={transportDetail?.trans_panel?.pending_student}
              onParentRefetch={transportDetailRefetch}
              isRootAccess={isRootAccess}
              border
            />
          )
        )}
      </div>
      {showingDataLoading && <QvipleLoading />}
      {add && (
        <AddPassenger
          onClose={onClose}
          vehicleId={vid}
          onRefetch={onRefetchWhenCreate}
          instituteId={instituteId}
        />
      )}
      {vehicleMenu && (
        <VehiclePassengerMenu
          vehicleMenu={vehicleMenu}
          vehicleId={vid}
          onClose={() => setVehicleMenu("")}
          onRefetch={onRefetchWhenCreate}
        />
      )}
      {openSelectedBatch && (
        <TransportSelectedBatch
          onChooseBatch={onBatchFilter}
          onClose={onCloseBatch}
        />
      )}
    </>
  );
};

export default VehiclePassenger;

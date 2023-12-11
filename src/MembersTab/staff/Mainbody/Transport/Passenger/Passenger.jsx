import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useGetPassengerList } from "../../../../../hooks/member_tab/transport-api";
import PassengerCard from "./PassengerCard";
import style from "../../Hostel/Hostel.module.css";
import TransportSelectedBatch from "../TransportSelectedBatch";
const Passenger = ({ tid, carryParentState, instituteId }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [passengerList, setPassengerList] = useState([]);
  const [search, setSearch] = useState("");
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [batchFilter, setBatchFilter] = useState("");
  const [remainFilter, setRemainFilter] = useState(true);
  const [openSelectedBatch, setOpenSelectedBatch] = useState(false);
  const { getPassengerList, getPassengerListRefetch } = useGetPassengerList({
    data: {
      tid: tid,
      page: page,
      limit: 10,
      search: search,
      filter_by: remainFilter,
      batch_filter: batchFilter,
      id: instituteId,
    },
    skip: !tid,
  });
  useEffect(() => {
    if (tid) {
      setShowingDataLoading(true);
      getPassengerListRefetch();
    }
  }, [
    tid,
    instituteId,
    page,
    search,
    batchFilter,
    remainFilter,
    getPassengerListRefetch,
  ]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setPassengerList(getPassengerList?.all_passengers);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (search) {
        setPassengerList(getPassengerList?.all_passengers);
        setShowingDataLoading(false);
      } else {
        if (getPassengerList?.all_passengers) {
          if (page === 1) {
            setPassengerList(getPassengerList?.all_passengers);
            setRefetchStatus(false);
          } else {
            setPassengerList((prevState) =>
              [
                ...new Set(
                  [...prevState, ...getPassengerList?.all_passengers]?.map(
                    JSON.stringify
                  )
                ),
              ]?.map(JSON.parse)
            );
          }
          setShowingDataLoading(false);
        } else if (getPassengerList?.all_passengers?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getPassengerList?.all_passengers?.length === 10) setState(true);
    else setState(false);
  }, [getPassengerList?.all_passengers]);

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
    getPassengerListRefetch();
  };

  const onCloseBatch = () => {
    setOpenSelectedBatch((pre) => !pre);
  };
  const onBatchFilter = (val) => {
    setPage((prev) => (prev = 1));
    setBatchFilter(val);
    setRefetchStatus(true);
    // setShowingDataLoading(true);
    // getPassengerListRefetch();
    onCloseBatch();
  };
  const onRemainFeeFilter = () => {
    setPage((prev) => (prev = 1));
    setRemainFilter((pre) => !pre);
    setRefetchStatus(true);
    // setShowingDataLoading(true);
    // getPassengerListRefetch();
  };
  return (
    <>
      <div
        className={style.with_search}
        style={{
          padding: "0",
        }}
      >
        <h6>{t("passengers_and_student")}</h6>
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
            style={{ cursor: "pointer" }}
            title="See data batch wise"
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
        }}
      >
        <p className={style.add_new_category} onClick={onRemainFeeFilter}>
          {t("filter_by_fees")}
        </p>
      </div>
      <div
        className={style.transpotation_container}
        style={{
          borderRadius: "0",
          border: "none",
        }}
      >
        {passengerList?.map((passenger, index) =>
          passengerList?.length === index + 1 ? (
            <div ref={ref} key={index}>
              <PassengerCard
                passenger={passenger}
                carryParentState={carryParentState}
              />
            </div>
          ) : (
            <PassengerCard
              passenger={passenger}
              key={index}
              carryParentState={carryParentState}
              border
            />
          )
        )}
      </div>
      {showingDataLoading && <QvipleLoading />}

      {openSelectedBatch && (
        <TransportSelectedBatch
          onChooseBatch={onBatchFilter}
          onClose={onCloseBatch}
        />
      )}
    </>
  );
};

export default Passenger;

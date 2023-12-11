import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import style from "../../Hostel/Hostel.module.css";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import TransportPendingFeesCard from "./TransportPendingFeesCard";
import { useGetPendingFeeByTransport } from "../../../../../hooks/member_tab/transport-api";
const TransportPendingFees = ({ transportId, instituteId }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView({ skip: search });
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [pendingList, setPendingList] = useState([]);

  const { getPendingFeeByTransport, getPendingFeeByTransportRefetch } =
    useGetPendingFeeByTransport({
      data: {
        tid: transportId,
        page: page,
        limit: 10,
        search: search,
        id: instituteId ?? "",
      },
      skip: !transportId,
    });
  useEffect(() => {
    if (transportId) {
      setShowingDataLoading(true);
      getPendingFeeByTransportRefetch();
    }
  }, [transportId, instituteId, page, search, getPendingFeeByTransportRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (search) {
      setPendingList(getPendingFeeByTransport?.remain);
      setShowingDataLoading(false);
    } else {
      if (getPendingFeeByTransport?.remain) {
        setPendingList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getPendingFeeByTransport?.remain]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getPendingFeeByTransport?.remain?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getPendingFeeByTransport?.remain?.length === 10) setState(true);
    else setState(false);
  }, [getPendingFeeByTransport?.remain]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };
  return (
    <>
      <div className={style.with_search}>
        <h6>{t("remaining_fees")}</h6>
        <section className={style.search_container}>
          <div className={style.search_container_input}>
            <img
              className={style.searchIcon}
              alt="search icon"
              src="/images/search-dash-icon.svg"
            />
            <input
              type="text"
              placeholder="Search..."
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

      {pendingList?.map((applicant, index) =>
        pendingList?.length === index + 1 ? (
          <div ref={ref} key={applicant?._id}>
            <TransportPendingFeesCard applicant={applicant} />
          </div>
        ) : (
          <TransportPendingFeesCard
            applicant={applicant}
            key={applicant?._id}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default TransportPendingFees;

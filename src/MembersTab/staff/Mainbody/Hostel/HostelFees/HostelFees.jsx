import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import style from "../Hostel.module.css";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import HostelFeesCard from "./HostelFeesCard";
import { useGetPendingFeeByHostel } from "../../../../../hooks/member_tab/hostel-api";
const HostelFees = ({ hid, instituteId }) => {
  const { t } = useTranslation();
  //   const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [pendingList, setPendingList] = useState([]);
  const [search, setSearch] = useState("");

  const { getPendingFeeByHostel, getPendingFeeByHostelRefetch } =
    useGetPendingFeeByHostel({
      data: {
        hid: hid,
        page: page,
        limit: 10,
        search: search,
        id: instituteId,
      },
      skip: !hid,
    });
  useEffect(() => {
    if (hid) {
      setShowingDataLoading(true);
      getPendingFeeByHostelRefetch();
    }
  }, [hid, instituteId, page, search, getPendingFeeByHostelRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (search) {
      setPendingList(getPendingFeeByHostel?.remain);
      setShowingDataLoading(false);
    } else {
      if (getPendingFeeByHostel?.remain) {
        setPendingList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getPendingFeeByHostel?.remain]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getPendingFeeByHostel?.remain?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getPendingFeeByHostel?.remain?.length === 10) setState(true);
    else setState(false);
  }, [getPendingFeeByHostel?.remain]);

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
            <HostelFeesCard applicant={applicant} />
          </div>
        ) : (
          <HostelFeesCard applicant={applicant} key={applicant?._id} />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default HostelFees;

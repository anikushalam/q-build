import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../Hostel.module.css";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useGetHostelAllBatch } from "../../../../../hooks/member_tab/hostel-api";
import CreateHostelBatch from "./CreateHostelBatch";
import HostelBatchCard from "./HostelBatchCard";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import { useLocation } from "react-router-dom";

const HostelBatch = ({
  hid,
  selectedBacthId,
  onMasterApiRefetch,
  carryParentState,
  pageOpenAs,
  instituteId,
}) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [tabList, setTabList] = useState([
    {
      name: t("batch"),
      id: 0,
      url: "member/hostel?a=batch",
    },
    {
      name: t("hostel_tab_standard"),
      id: 1,
      url: "member/hostel?a=standard",
    },
  ]);

  const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [batchList, setBatchList] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const { getHostelAllBatch, getHostelAllBatchRefetch } = useGetHostelAllBatch({
    data: {
      hid: hid,
      id: instituteId,
      page: page,
      limit: 10,
    },
    skip: !hid,
  });
  useEffect(() => {
    if (pageOpenAs) {
      setTabList([
        {
          name: t("batch"),
          id: 0,
          url: "hostel?a=batch",
        },
        {
          name: t("hostel_tab_standard"),
          id: 1,
          url: "hostel?a=standard",
        },
      ]);
    }
  }, [pageOpenAs]);
  useEffect(() => {
    if (hid) {
      setShowingDataLoading(true);
      getHostelAllBatchRefetch();
    }
  }, [hid, page, getHostelAllBatchRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setBatchList(getHostelAllBatch?.all_batches);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (getHostelAllBatch?.all_batches) {
        setBatchList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getHostelAllBatch?.all_batches]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getHostelAllBatch?.all_batches?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getHostelAllBatch?.all_batches?.length === 10) setState(true);
    else setState(false);
  }, [getHostelAllBatch?.all_batches]);

  const onRefetchWhenCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getHostelAllBatchRefetch();
  };

  const onClose = () => {
    setAdd((pre) => !pre);
  };
  return (
    <>
      <UniversalTab
        tabList={tabList}
        activeIndexTab={getQuery.search?.substring(3) === "batch" ? 0 : 1}
        showAs={true}
        customStyleTab={{
          width: "100%",
          marginTop: "-1rem",
        }}
        customStyleLink={{
          width: "50%",
        }}
        carryParentState={carryParentState}
      />
      <BorderBottom
        customStyle={{
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />
      <div className={style.with_search}>
        <h6>{t("hostel_batch")}</h6>
        {/* <section className={style.search_container}>
          <div className={style.search_container_input}>
            <img
              className={style.searchIcon}
              alt="search icon"
              src="/images/search-dash-icon.svg"
            />
            <input
              type="text"
              placeholder="Search hostel units..."
              onChange={onSearchEvent}
            />
          </div>
        </section> */}
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />

      <div className={style.add_container}>
        <p className={style.add_new_category} onClick={onClose}>
          {t("create_new_batch")}
        </p>
      </div>

      {batchList?.map((batch, index) =>
        batchList?.length === index + 1 ? (
          <div ref={ref} key={batch?._id}>
            <HostelBatchCard
              batch={batch}
              hostelId={hid}
              onRefetch={onRefetchWhenCreate}
              selectedId={selectedBacthId}
              onMasterApiRefetch={onMasterApiRefetch}
            />
          </div>
        ) : (
          <HostelBatchCard
            batch={batch}
            key={batch?._id}
            hostelId={hid}
            onRefetch={onRefetchWhenCreate}
            selectedId={selectedBacthId}
            onMasterApiRefetch={onMasterApiRefetch}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading status="white" />}
      {add && (
        <CreateHostelBatch
          onClose={onClose}
          hostelId={hid}
          onRefetch={onRefetchWhenCreate}
          instituteId={instituteId}
        />
      )}
    </>
  );
};

export default HostelBatch;

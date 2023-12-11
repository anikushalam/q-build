import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../Hostel/Hostel.module.css";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import { useLocation } from "react-router-dom";
import { useGetTransportAllBatch } from "../../../../../hooks/member_tab/transport-api";
import CreateTransportBatch from "./CreateTransportBatch";
import TransportBatchCard from "./TransportBatchCard";

const TransportBatch = ({
  transportId,
  selectedBacthId,
  onMasterApiRefetch,
  carryParentState,
  pageOpenAs,
  instituteId,
  isRootAccess,
}) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [tabList, setTabList] = useState([
    {
      name: t("batch"),
      id: 0,
      url: "member/transport?a=batch",
    },
    {
      name: t("hostel_tab_standard"),
      id: 1,
      url: "member/transport?a=standard",
    },
  ]);

  const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [batchList, setBatchList] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const { getTransportAllBatch, getTransportAllBatchRefetch } =
    useGetTransportAllBatch({
      data: {
        tid: transportId,
        page: page,
        limit: 10,
      },
      skip: !transportId,
    });
  useEffect(() => {
    if (pageOpenAs) {
      setTabList([
        {
          name: t("batch"),
          id: 0,
          url: "transport?a=batch",
        },
        {
          name: t("hostel_tab_standard"),
          id: 1,
          url: "transport?a=standard",
        },
      ]);
    }
  }, [pageOpenAs]);

  useEffect(() => {
    if (transportId) {
      setShowingDataLoading(true);
      getTransportAllBatchRefetch();
    }
  }, [transportId, page, getTransportAllBatchRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setBatchList(getTransportAllBatch?.all_batches);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (getTransportAllBatch?.all_batches) {
        setBatchList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getTransportAllBatch?.all_batches]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getTransportAllBatch?.all_batches?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getTransportAllBatch?.all_batches?.length === 10) setState(true);
    else setState(false);
  }, [getTransportAllBatch?.all_batches]);

  const onRefetchWhenCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getTransportAllBatchRefetch();
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
        <h6>{t("transport_batch")}</h6>
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />
      {isRootAccess === "VALID" ? (
        <div className={style.add_container}>
          <p className={style.add_new_category} onClick={onClose}>
            {t("create_new_batch")}
          </p>
        </div>
      ) : null}

      {batchList?.map((batch, index) =>
        batchList?.length === index + 1 ? (
          <div ref={ref} key={batch?._id}>
            <TransportBatchCard
              batch={batch}
              transportId={transportId}
              onRefetch={onRefetchWhenCreate}
              selectedId={selectedBacthId}
              onMasterApiRefetch={onMasterApiRefetch}
            />
          </div>
        ) : (
          <TransportBatchCard
            batch={batch}
            key={batch?._id}
            transportId={transportId}
            onRefetch={onRefetchWhenCreate}
            selectedId={selectedBacthId}
            onMasterApiRefetch={onMasterApiRefetch}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading status="white" />}
      {add && (
        <CreateTransportBatch
          onClose={onClose}
          transportId={transportId}
          onRefetch={onRefetchWhenCreate}
          instituteId={instituteId}
        />
      )}
    </>
  );
};

export default TransportBatch;

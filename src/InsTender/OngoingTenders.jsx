import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useGetTenderlist } from "../hooks/member_tab/career-api";
import QvipleLoading from "../Loader/QvipleLoading";
import InsTenderCard from "./InsTenderCard";
import style from "./InsCareerMiddleContent.module.css";

function OngoingVacancies({ setStatus, ltid, flag }) {
  const careerId = useSelector((state) => state.careerChange);
  // --------------------------------------
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [tenderList, setTenderList] = useState([]);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [editRefetchStatus, setEditRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { getTenderlist, getTenderListRefetch } = useGetTenderlist({
    data: {
      ltid: ltid,
      page: page,
      limit: 10,
      status: "Open",
    },
    skip: !ltid,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (ltid) {
      setShowingDataLoading(true);
      getTenderListRefetch();
    }
  }, [page, ltid, search, getTenderListRefetch]);

  useEffect(() => {
    if (search) {
      setTenderList(getTenderlist?.all_tender);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setTenderList((prevState) =>
          [
            ...new Set(
              [...getTenderlist?.all_tender, ...prevState]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setRefetchStatus(false);
      } else if (editRefetchStatus) {
        setTenderList((prevState) =>
          [
            ...new Set([...getTenderlist?.all_tender]?.map(JSON.stringify)),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setEditRefetchStatus(false);
      } else {
        if (getTenderlist?.all_tender) {
          setTenderList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getTenderlist?.all_tender]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getTenderlist?.all_tender?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getTenderlist?.all_tender?.length === 10) setState(true);
    else setState(false);
  }, [getTenderlist?.all_tender]);

  const onRefetchWhenVacancyCreate = () => {
    setPage(1);
    setEditRefetchStatus(true);
    setShowingDataLoading(true);
    getTenderListRefetch();
  };

  const onRefetchWhenVacancyEdited = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getTenderListRefetch();
  };

  return (
    <div className={style.itemIconContainer}>
      {tenderList?.map((tender, index) =>
        tenderList?.length === index + 1 ? (
          <div ref={ref} key={index} className={style.itemIcon}>
            <InsTenderCard
              setStatus={setStatus}
              ltid={ltid}
              tender={tender}
              onRefetchWhenVacancyCreate={onRefetchWhenVacancyCreate}
            />
          </div>
        ) : (
          <div key={index} className={style.itemIcon}>
            <InsTenderCard
              setStatus={setStatus}
              ltid={ltid}
              tender={tender}
              onRefetchWhenVacancyCreate={onRefetchWhenVacancyCreate}
            />
          </div>
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
}

export default OngoingVacancies;

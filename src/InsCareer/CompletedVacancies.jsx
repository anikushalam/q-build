import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useGetVacancylist } from "../hooks/member_tab/career-api";
import QvipleLoading from "../Loader/QvipleLoading";
import InsCareerCard from "./InsCareerCard";
import style from "./InsCareerMiddleContent.module.css";

function CompletedVacancies({ setStatus, lcid, flag }) {
  const careerId = useSelector((state) => state.careerChange);

  // --------------------------------------
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [vacancyList, setVacancyList] = useState([]);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [editRefetchStatus, setEditRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { getVacancylist, getVacancyListRefetch } = useGetVacancylist({
    data: {
      lcid: lcid ? lcid : careerId?.lcid,
      page: page,
      limit: 10,
      status: "Completed",
    },
    skip: lcid ? !lcid : !careerId?.lcid,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (lcid ? lcid : careerId?.lcid) {
      setShowingDataLoading(true);
      getVacancyListRefetch();
    }
  }, [page, lcid ? lcid : careerId?.lcid, search, getVacancyListRefetch]);

  useEffect(() => {
    if (search) {
      setVacancyList(getVacancylist?.all_vacancy);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setVacancyList((prevState) =>
          [
            ...new Set(
              [...getVacancylist?.all_vacancy, ...prevState]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setRefetchStatus(false);
      } else if (editRefetchStatus) {
        setVacancyList((prevState) =>
          [
            ...new Set([...getVacancylist?.all_vacancy]?.map(JSON.stringify)),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setEditRefetchStatus(false);
      } else {
        if (getVacancylist?.all_vacancy) {
          setVacancyList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getVacancylist?.all_vacancy]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getVacancylist?.all_vacancy?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getVacancylist?.all_vacancy?.length === 10) setState(true);
    else setState(false);
  }, [getVacancylist?.all_vacancy]);

  const onRefetchWhenVacancyCreate = () => {
    setPage(1);
    setEditRefetchStatus(true);
    setShowingDataLoading(true);
    getVacancyListRefetch();
  };

  const onRefetchWhenVacancyEdited = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getVacancyListRefetch();
  };

  return (
    <div className={style.itemIconContainer}>
      {vacancyList?.map((vacancy, index) =>
        vacancyList?.length === index + 1 ? (
          <div
            ref={ref}
            key={index}
            className={style.itemIcon}
            // onClick={() => setStatus("vacancyDetail")}
          >
            <InsCareerCard
              vacancy={vacancy}
              setStatus={setStatus}
              vid={vacancy?._id}
              lcid={lcid}
            />
          </div>
        ) : (
          <div
            key={index}
            className={style.itemIcon}
            // onClick={() => setStatus("vacancyDetail")}
          >
            <InsCareerCard
              vacancy={vacancy}
              setStatus={setStatus}
              vid={vacancy?._id}
              lcid={lcid}
            />
          </div>
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
}

export default CompletedVacancies;

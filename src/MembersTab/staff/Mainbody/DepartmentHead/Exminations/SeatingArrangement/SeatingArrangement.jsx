import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import AddBlock from "./AddBlock";
import style from "./SeatingArrangement.module.css";
import SeatingArrangementCard from "./SeatingArrangementCard";
import { useInView } from "react-intersection-observer";
import { useGetSeatingListExam } from "../../../../../../hooks/member_tab/department-api";
import { useLocation } from "react-router-dom";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import SeatingAutomate from "./Automate/SeatingAutomate";
const SeatingArrangement = ({ instituteId, viewAs }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [add, setAdd] = useState(false);
  const [addAutomate, setAddAutomate] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [seatingList, setSeatingList] = useState([]);
  // const [search, setSearch] = useState("");
  const [refetchStatus, setRefetchStatus] = useState(false);

  const { getSeatingListExam, getSeatingListExamRefetch } =
    useGetSeatingListExam({
      data: {
        eid: getQuery.state?.examId,
        page: page,
        limit: 10,
        search: "",
      },
      skip: !getQuery.state?.examId,
    });
  useEffect(() => {
    if (getQuery.state?.examId) {
      setShowingDataLoading(true);
      getSeatingListExamRefetch();
    }
  }, [getQuery.state?.examId, page, getSeatingListExamRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    document.getElementById("scrollViewSeating")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, []);

  useEffect(() => {
    if (refetchStatus) {
      setSeatingList(getSeatingListExam?.all_seating);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (getSeatingListExam?.all_seating) {
        setSeatingList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getSeatingListExam?.all_seating]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getSeatingListExam?.all_seating?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getSeatingListExam?.all_seating?.length === 10) setState(true);
    else setState(false);
  }, [getSeatingListExam?.all_seating]);

  const onRefetchWhenCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getSeatingListExamRefetch();
  };

  const onClose = () => {
    setAdd((pre) => !pre);
  };

  const onCloseAutomate = () => {
    setAddAutomate((pre) => !pre);
  };
  return (
    <>
      <div className={style.with_search} id="scrollViewSeating">
        <h6>{t("seating_arrangements")}</h6>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <img
            src="/images/department/seat-automate-icon.svg"
            alt="back arrow"
            className={style.add_plus_icon}
            onClick={onCloseAutomate}
            title="Automate seating arrangements"
          />
          <img
            src="/images/add-plus-blue-icon.svg"
            alt="back arrow"
            className={style.add_plus_icon}
            onClick={onClose}
            title="Add seating arrangements"
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
      {seatingList?.map((seating, index) =>
        seatingList?.length === index + 1 ? (
          <div ref={ref} key={seating?._id}>
            <SeatingArrangementCard
              seating={seating}
              examName={getQuery.state?.examName ?? ""}
              examId={getQuery.state?.examId ?? ""}
              onRefetch={onRefetchWhenCreate}
            />
          </div>
        ) : (
          <SeatingArrangementCard
            seating={seating}
            key={seating?._id}
            examName={getQuery.state?.examName ?? ""}
            examId={getQuery.state?.examId ?? ""}
            onRefetch={onRefetchWhenCreate}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {add && (
        <AddBlock
          onClose={onClose}
          instituteId={instituteId}
          examId={getQuery.state?.examId ?? ""}
          examName={getQuery.state?.examName ?? ""}
          onRefetch={onRefetchWhenCreate}
          viewAs={viewAs}
        />
      )}
      {addAutomate && (
        <SeatingAutomate
          onClose={onCloseAutomate}
          instituteId={instituteId}
          examId={getQuery.state?.examId ?? ""}
          examName={getQuery.state?.examName ?? ""}
        />
      )}
    </>
  );
};

export default SeatingArrangement;

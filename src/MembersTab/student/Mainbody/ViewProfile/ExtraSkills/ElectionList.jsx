import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import moment from "moment";
import { useAllElectionList } from "../../../../../hooks/member_tab/student-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import style from "./ExtraSkills.module.css";
import ElectionDetail from "./ElectionDetail";

const ElectionList = ({ sid }) => {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [electionList, setElectionList] = useState([]);
  const [viewElectionDetail, setViewElectionDetail] = useState("");
  const { allElectionList, allElectionListRefetch } = useAllElectionList({
    data: {
      sid: sid,
      page: page,
      limit: 10,
    },
    skip: !sid,
  });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (sid) {
      setShowingDataLoading(true);
      allElectionListRefetch();
    }
  }, [page, sid, allElectionListRefetch]);

  useEffect(() => {
    if (allElectionList?.all) {
      setElectionList((prevState) =>
        [
          ...new Set(
            [...prevState, ...allElectionList?.all]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (allElectionList?.all?.length === 0) setShowingDataLoading(false);
    else {
    }
    if (allElectionList?.all?.length === 10) setState(true);
    else setState(false);
  }, [allElectionList?.all]);

  const onViewElection = (electionId) => {
    setViewElectionDetail(electionId);
  };

  //   console.info("this is infsdmgs", allElectionList);
  return (
    <div
      className={
        viewElectionDetail
          ? style.election_container_active
          : style.election_container
      }
    >
      <div
        className={
          viewElectionDetail
            ? style.election_container_left_50
            : style.election_container_left
        }
      >
        {electionList?.map((election, index) =>
          electionList?.length === index + 1 ? (
            <div
              className={
                viewElectionDetail?._id === election?._id
                  ? `${style.election_card} ${style.election_card_active}`
                  : style.election_card
              }
              ref={ref}
              key={election?._id}
              onClick={() => onViewElection(election)}
            >
              <img src="/images/members/competition.svg" alt="election icon" />
              <div className={style.election_card_text}>
                <h6>{election?.election_position}</h6>
                <p>
                  {moment(election?.election_app_start_date).format("dddd")} ,
                  {moment(election?.election_app_start_date).format(
                    "DD MMM yyyy"
                  )}
                </p>
              </div>
            </div>
          ) : (
            <div
              className={
                viewElectionDetail?._id === election?._id
                  ? `${style.election_card} ${style.election_card_active}`
                  : style.election_card
              }
              key={election?._id}
              onClick={() => onViewElection(election?._id)}
            >
              <div>
                <img
                  src="/images/members/competition.svg"
                  alt="election icon"
                />
                <div>
                  <h6>{election?.election_position}</h6>
                  <p>
                    {moment(election?.election_app_start_date).format("DDD")},
                    {moment(election?.election_app_start_date).format(
                      "DD MMM yyyy"
                    )}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
        {showingDataLoading && <QvipleLoading />}
      </div>
      {viewElectionDetail && (
        <div className={style.election_container_right}>
          <ElectionDetail sid={sid} viewElectionDetail={viewElectionDetail} />
        </div>
      )}
    </div>
  );
};

export default ElectionList;

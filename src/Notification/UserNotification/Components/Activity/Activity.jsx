import React, { useState } from "react";
import style from "./Activity.module.css";
import ElectionApplied from "../ElectionNotification/ElectionApplied";
import { useAllActivityList } from "../../../../hooks/member_tab/activity-api";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import ActivityConfig from "./ActivityConfig";
import GiveVote from "../ElectionNotification/GiveVote";
import QvipleLoading from "../../../../Loader/QvipleLoading";

const Activity = () => {
  const [electionShow, setElectionShow] = useState("");
  const [onClickValue, setOnClickValue] = useState("");
  const [allActivity, setAllActivity] = React.useState([]);
  const [ref, inView] = useInView();
  const [state, setState] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const ids = useSelector((state) => state.idChange);
  const [voteGiven, setVoteGiven] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = React.useState(true);

  const { allActivityList, allActivityListRefetch } = useAllActivityList({
    data: {
      id: ids?.id,
      page: page,
      limit: 10,
    },
    skip: !ids?.id,
  });

  React.useEffect(() => {
    if (voteGiven) {
      setShowingDataLoading(true);
      allActivityListRefetch();
    }
  }, [voteGiven, allActivityListRefetch]);
  React.useEffect(() => {
    if (ids?.id) {
      setShowingDataLoading(true);
      allActivityListRefetch();
    }
  }, [ids?.id, page, allActivityListRefetch]);
  React.useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    if (allActivityList?.activity) {
      if (voteGiven) {
        setAllActivity(allActivityList?.activity);
        setVoteGiven(false);
        setShowingDataLoading(false);
      } else {
        const uniqueDublicate = [...allActivity, ...allActivityList?.activity];
        const uniqueRefind = [
          ...new Set(uniqueDublicate.map(JSON.stringify)),
        ].map(JSON.parse);
        setAllActivity(uniqueRefind);
        setShowingDataLoading(false);
      }
    } else if (allActivityList?.activity?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    //for next api is call or not dashboard
    if (allActivityList?.activity.length === 10) setState(true);
    else setState(false);
  }, [allActivityList?.activity]);
  // console.info("this is all actitivty", allActivity);
  const onRefetchWhenVoteGiven = () => {
    setVoteGiven(true);
    setPage(1);
  };

  // console.info(allActivityList);

  return (
    <div className={style.activity_caontainer}>
      {!electionShow &&
        allActivity?.map((activity, index) =>
          allActivity?.length === index + 1 ? (
            <div ref={ref} key={index}>
              {!electionShow && (
                <ActivityConfig
                  activity={activity}
                  setElectionShow={setElectionShow}
                  setOnClickValue={setOnClickValue}
                />
              )}
            </div>
          ) : (
            !electionShow && (
              <ActivityConfig
                key={index}
                activity={activity}
                setElectionShow={setElectionShow}
                setOnClickValue={setOnClickValue}
              />
            )
          )
        )}
      {electionShow === "ELECTION_APPLY" && (
        <ElectionApplied
          onClickValue={onClickValue}
          setElectionShow={setElectionShow}
          onRefetch={allActivityListRefetch}
        />
      )}
      {electionShow === "VOTING_CANDIDATE" && (
        <GiveVote
          onClickValue={onClickValue}
          setElectionShow={setElectionShow}
          onRefetch={onRefetchWhenVoteGiven}
        />
      )}

      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default Activity;

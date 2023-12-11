import React, { useState } from "react";
import Candidate from "./Candidate";
import style from "./ElectionCard.module.css";
import ViewElection from "./ViewElection";
import ViewResult from "./ViewResult";
import AllElections from "./AllElections";
import CreateElection from "./CreateElection";

const Elections = ({ did, viewAs, instituteId }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [refetchWhenCreate, setRefetchWhenCreate] = useState(false);
  const [electionId, setElectionId] = useState({
    electionId: "",
  });

  const [oneApplyDetail, setOneApplyDetail] = useState("");

  const onViewOneApplyCandidate = (val) => {
    setOneApplyDetail(val);
    setActiveIndex(2);
  };

  const onViewResultOfApplyCandidate = (val) => {
    setOneApplyDetail(val);
    setActiveIndex(3);
  };
  // console.info(createElection);
  return (
    <div className={style.elections_container}>
      {activeIndex === 0 && viewAs === "EVENT_MANAGER" && (
        <CreateElection
          instituteId={instituteId}
          did={did}
          setRefetchWhenCreate={setRefetchWhenCreate}
        />
      )}
      {(activeIndex === 1 || activeIndex === 2 || activeIndex === 3) && (
        <ViewElection
          onViewOneApplyCandidate={onViewOneApplyCandidate}
          onViewResultOfApplyCandidate={onViewResultOfApplyCandidate}
          electionId={electionId}
          oneApplyDetail={oneApplyDetail}
        />
      )}
      {activeIndex !== 2 && activeIndex !== 3 && (
        <div
          style={{
            width: "343px",
          }}
        >
          <AllElections
            setActiveIndex={setActiveIndex}
            did={did}
            setElectionId={setElectionId}
            selectedEid={electionId.electionId}
            refetchWhenCreate={refetchWhenCreate}
            setRefetchWhenCreate={setRefetchWhenCreate}
            viewAs={viewAs}
          />
        </div>
      )}

      {activeIndex === 2 && (
        <Candidate
          oneApplyDetail={oneApplyDetail}
          electionId={electionId?.electionId}
          setOneApplyDetail={setOneApplyDetail}
          setActiveIndex={setActiveIndex}
        />
      )}
      {activeIndex === 3 && <ViewResult oneApplyDetail={oneApplyDetail} />}
    </div>
  );
};

export default Elections;

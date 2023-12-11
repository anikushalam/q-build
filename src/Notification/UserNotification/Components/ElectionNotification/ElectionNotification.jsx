import React from "react";
import { useDepartmentOneElection } from "../../../../hooks/member_tab/department-api";
import style from "./ElectionNotification.module.css";
import Vote from "./Vote";

const ElectionNotification = ({
  election,
  setElectionShow,
  setOnClickValue,
}) => {
  const { departmentOneElection, departmentOneElectionRefetch } =
    useDepartmentOneElection({
      id: election?.electionId,
      skip: !election?.election_type,
    });

  React.useEffect(() => {
    if (election?.electionId && election?.election_type)
      departmentOneElectionRefetch();
  }, [election?.election_type]);
  // console.info("xfjkhff", election);
  return (
    <div>
      {election?.election_type === "New Election App" && (
        <div className={style.vote_result_wrapper}>
          <div className={style.vote_result_heading}>
            <h6>{departmentOneElection?.elect?.election_position}</h6>
            <p
              onClick={() => {
                setOnClickValue({
                  electionId: election?.electionId,
                  notifyPublisher: election?.notifyPublisher,
                  did: election?.notifyByDepartPhoto?._id,
                });
                setElectionShow("ELECTION_APPLY");
              }}
            >
              Apply
            </p>
          </div>
          <p className={style.vote_time}>{election?.notifyContent}</p>
          <hr />
          <h6 className={style.vote_casted}>Application Requirements :</h6>
          <ol className={style.vaote_detail_requirement}>
            <li>Fixed president candidate</li>
            <li>At least 3 supporting members</li>
            <li>Campaign tagline needed, e.g. “We are a new start”</li>
          </ol>
        </div>
      )}
      {election?.election_type === "Open for vote" &&
        !election?.vote_status && (
          <Vote
            election={election}
            electionDetail={departmentOneElection?.elect}
            setOnClickValue={setOnClickValue}
            setElectionShow={setElectionShow}
          />
        )}
      {election?.election_type === "Election Vote Casted" && (
        <Vote
          election={election}
          election_position={departmentOneElection?.elect?.election_position}
        />
      )}
      {election?.election_type === "Result Declared" && (
        <Vote
          election={election}
          election_position={departmentOneElection?.elect?.election_position}
        />
      )}
    </div>
  );
};

export default ElectionNotification;

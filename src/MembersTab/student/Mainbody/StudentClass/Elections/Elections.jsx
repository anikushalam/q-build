import React, { useState } from "react";
import style from "../../../../staff/Mainbody/DepartmentHead/Competetions/Elections/ElectionCard.module.css";
import { useGetOneDeptElectionlist } from "../../../../../hooks/member_tab/event-api";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { useDepartmentAllElection } from "../../../../../hooks/member_tab/department-api";
import moment from "moment";
import ElectionCard from "../../../../staff/Mainbody/DepartmentHead/Competetions/Elections/ElectionCard";
import ViewElection from "../../../../staff/Mainbody/DepartmentHead/Competetions/Elections/ViewElection";

function Elections() {
  // { sid }
  const sid = "6436e71feba9f9984c206c42";
  const [allElection, setAllElection] = React.useState([]);
  const [ref, inView] = useInView();
  const { t } = useTranslation();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [singleElectionId, setSingleElectionId] = useState("");
  const [oneApplyDetail, setOneApplyDetail] = useState("");

  const { getOneDeptElectionlist, getOneDeptElectionListRefetch } =
    useGetOneDeptElectionlist({
      data: {
        sid: sid,
        page: page,
        limit: 10,
      },
      skip: !sid,
    });

  const { departmentAllElection, departmentAllElectionRefetch } =
    useDepartmentAllElection({
      data: {
        viewAs: "EVENT_MANAGER",
        did: sid,
        page: page,
        limit: 10,
      },
      skip: !sid,
    });

  React.useEffect(() => {
    if (sid) departmentAllElectionRefetch();
  }, [sid, departmentAllElectionRefetch, page]);

  React.useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    if (departmentAllElection?.all_elections) {
      const uniqueDublicate = [
        ...allElection,
        ...departmentAllElection?.all_elections,
      ];
      const uniqueRefind = [
        ...new Set(uniqueDublicate.map(JSON.stringify)),
      ].map(JSON.parse);
      setAllElection(uniqueRefind);
    }
    //for next api is call or not dashboard
    if (departmentAllElection?.all_elections?.length === 10) setState(true);
    else setState(false);
  }, [departmentAllElection?.elect, departmentAllElection?.all_elections]);

  const onElectionHandler = (eid) => {
    setSingleElectionId(eid);
  };
  const onViewOneApplyCandidate = (val) => {
    setOneApplyDetail(val);
  };

  const onViewResultOfApplyCandidate = (val) => {
    setOneApplyDetail(val);
  };

  return (
    <div className={style.electionsContainer}>
      <div
        className={
          singleElectionId !== ""
            ? style.electionleftHalf
            : style.electionleftFull
        }
      >
        {allElection?.map((election, index) =>
          allElection?.length === index + 1 ? (
            <ElectionCard
              customStyle={{
                minHeight: "130px",
                padding: "0",
                width: singleElectionId !== "" ? "100%" : "49%",
              }}
            >
              <div
                onClick={() => onElectionHandler(election?._id)}
                style={{
                  cursor: "pointer",
                  padding: "15px",
                  backgroundColor:
                    singleElectionId === election?._id
                      ? "rgba(75, 26, 133, 0.1)"
                      : "#ffffff",
                }}
                title="View election detail"
              >
                <div
                  className={style.election_card_title}
                  onClick={() => onElectionHandler(election?._id)}
                  ref={ref}
                >
                  <img
                    src="/images/members/election-icon.svg"
                    alt="elections static icon"
                  />
                  <h6 className={style.create_new_elections}>
                    {election?.election_position}
                  </h6>
                </div>

                <hr
                  className={style.create_new_elections_hr}
                  style={{
                    marginLeft: "0",
                    marginRight: "0",
                  }}
                />
                <div className={style.election_card_info}>
                  <p>
                    {t("application_start")} :
                    <span>
                      {moment(election?.election_app_start_date).format(
                        "DD MMMM yyyy"
                      )}
                    </span>
                  </p>
                  <p>
                    {t("voting_date")} :
                    <span>
                      {moment(election?.election_voting_date).format(
                        "DD MMMM yyyy"
                      )}
                    </span>
                  </p>
                </div>
              </div>
            </ElectionCard>
          ) : (
            <ElectionCard
              customStyle={{
                minHeight: "130px",
                padding: "0",
                width: singleElectionId !== "" ? "100%" : "49%",
              }}
            >
              <div
                onClick={() => onElectionHandler(election?._id)}
                style={{
                  cursor: "pointer",
                  padding: "15px",
                  backgroundColor:
                    singleElectionId === election?._id
                      ? "rgba(75, 26, 133, 0.1)"
                      : "#ffffff",
                }}
                title="View election detail"
              >
                <div className={style.election_card_title}>
                  <img
                    src="/images/members/election-icon.svg"
                    alt="elections static icon"
                  />
                  <h6 className={style.create_new_elections}>
                    {election?.election_position}
                  </h6>
                </div>

                <hr
                  className={style.create_new_elections_hr}
                  style={{
                    marginLeft: "0",
                    marginRight: "0",
                  }}
                />
                <div className={style.election_card_info}>
                  <p>
                    {t("application_start")} :
                    <span>
                      {moment(election?.election_app_start_date).format(
                        "DD MMMM yyyy"
                      )}
                    </span>
                  </p>
                  <p>
                    {t("voting_date")} :
                    <span>
                      {moment(election?.election_voting_date).format(
                        "DD MMMM yyyy"
                      )}
                    </span>
                  </p>
                </div>
              </div>
            </ElectionCard>
          )
        )}
      </div>
      {singleElectionId !== "" && (
        <div className={style.electionsRight}>
          <ViewElection
            status="studentElection"
            onViewOneApplyCandidate={onViewOneApplyCandidate}
            onViewResultOfApplyCandidate={onViewResultOfApplyCandidate}
            electionId={singleElectionId}
            oneApplyDetail={oneApplyDetail}
          />
        </div>
      )}
    </div>
  );
}

export default Elections;

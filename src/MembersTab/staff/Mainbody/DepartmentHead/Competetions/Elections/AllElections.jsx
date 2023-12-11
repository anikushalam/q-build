import React from "react";
import style from "./ElectionCard.module.css";
import ElectionCard from "./ElectionCard";
import { useTranslation } from "react-i18next";
import { useDepartmentAllElection } from "../../../../../../hooks/member_tab/department-api";
import { useInView } from "react-intersection-observer";
import moment from "moment";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
const AllElections = ({
  setActiveIndex,
  did,
  setElectionId,
  refetchWhenCreate,
  setRefetchWhenCreate,
  viewAs,
  selectedEid,
}) => {
  const [allElection, setAllElection] = React.useState([]);
  const [ref, inView] = useInView();
  const { t } = useTranslation();
  const [state, setState] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const { departmentAllElection, departmentAllElectionRefetch } =
    useDepartmentAllElection({
      data: {
        viewAs: viewAs ?? "",
        did: did,
        page: refetchWhenCreate ? 1 : page,
        limit: 10,
      },
      skip: !did,
    });

  React.useEffect(() => {
    if (did) departmentAllElectionRefetch();
  }, [did, departmentAllElectionRefetch, page]);

  React.useEffect(() => {
    if (did && refetchWhenCreate) departmentAllElectionRefetch();
  }, [did, refetchWhenCreate, departmentAllElectionRefetch]);
  React.useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    if (viewAs === "EVENT_MANAGER") {
      if (departmentAllElection?.all_elections) {
        if (refetchWhenCreate) {
          const uniqueDublicate = [
            ...departmentAllElection?.all_elections,
            ...allElection,
          ];
          const uniqueRefind = [
            ...new Set(uniqueDublicate.map(JSON.stringify)),
          ].map(JSON.parse);
          setAllElection(uniqueRefind);
          setRefetchWhenCreate(false);
        } else {
          const uniqueDublicate = [
            ...allElection,
            ...departmentAllElection?.all_elections,
          ];
          const uniqueRefind = [
            ...new Set(uniqueDublicate.map(JSON.stringify)),
          ].map(JSON.parse);
          setAllElection(uniqueRefind);
        }
      }
      //for next api is call or not dashboard
      if (departmentAllElection?.all_elections?.length === 10) setState(true);
      else setState(false);
    } else {
      if (departmentAllElection?.elect) {
        if (refetchWhenCreate) {
          const uniqueDublicate = [
            ...departmentAllElection?.elect,
            ...allElection,
          ];
          const uniqueRefind = [
            ...new Set(uniqueDublicate.map(JSON.stringify)),
          ].map(JSON.parse);
          setAllElection(uniqueRefind);
          setRefetchWhenCreate(false);
        } else {
          const uniqueDublicate = [
            ...allElection,
            ...departmentAllElection?.elect,
          ];
          const uniqueRefind = [
            ...new Set(uniqueDublicate.map(JSON.stringify)),
          ].map(JSON.parse);
          setAllElection(uniqueRefind);
        }
      }
      //for next api is call or not dashboard
      if (departmentAllElection?.elect?.length === 10) setState(true);
      else setState(false);
    }
  }, [
    departmentAllElection?.elect,
    departmentAllElection?.all_elections,
    viewAs,
  ]);

  //   console.info("departmentAllElection sdald", departmentAllElection);

  const onElectionHandler = (val) => {
    if (val === selectedEid) {
      setElectionId((pre) => ({
        ...pre,
        electionId: "",
      }));
      setActiveIndex(0);
    } else {
      setElectionId((pre) => ({
        ...pre,
        electionId: val,
      }));
      setActiveIndex(1);
    }
  };
  return (
    <>
      <h6>{t("all_election")}</h6>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "0.7rem",
        }}
      />
      {allElection?.map((election, index) =>
        allElection?.length === index + 1 ? (
          <ElectionCard
            customStyle={{
              minHeight: "130px",
              padding: "0",
            }}
          >
            <div
              onClick={() => onElectionHandler(election?._id)}
              style={{
                cursor: "pointer",
                padding: "15px",
                backgroundColor:
                  selectedEid === election?._id
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
            }}
          >
            <div
              onClick={() => onElectionHandler(election?._id)}
              style={{
                cursor: "pointer",
                padding: "15px",
                backgroundColor:
                  selectedEid === election?._id
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
    </>
  );
};
export default AllElections;

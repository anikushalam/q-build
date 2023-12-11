import React from "react";
import { useState, useEffect } from "react";
import style from "./SportsClassTeams.module.css";
import CreateTeamModal from "./CreateTeamModal/CreateTeamModal";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { useSportClassTeamList } from "../../../../../../../hooks/sports/sports-api";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";

function Item({ team, setClickEvent, sport }) {
  const { t } = useTranslation();
  return (
    <div className={style.card} onClick={() => {}}>
      <img
        src={
          team?.photoId === "1"
            ? `${imageShowUrl}/${team?.sportTeamPhoto}`
            : "/images/ins-image.jpg"
        }
        alt=""
      />
      <div className={style.texttt}>
        <p>
          <span className={style.span1}>{team?.sportClassTeamName}</span>
        </p>

        <p>
          {" "}
          {t("total_team_member")} : {team?.sportTeamStudentCount}
        </p>
        <p>
          {" "}
          {t("total_team_points")} : {team?.teamPoints}
        </p>
      </div>
    </div>
  );
}

function SportsClassTeams({ cid, classMembers, insId }) {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();
  const [classTeams, setClassTeams] = useState([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [editRefetchStatus, setEditRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { SportClassTeamList, SportClassTeamListRefetch } =
    useSportClassTeamList({
      data: {
        cid: cid,
        page: page,
      },
      skip: !cid,
    });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (cid) {
      setShowingDataLoading(true);
      SportClassTeamListRefetch();
    }
  }, [page, cid, SportClassTeamListRefetch]);

  useEffect(() => {
    if (refetchStatus) {
      setClassTeams((prevState) =>
        [
          ...new Set(
            [...SportClassTeamList?.team_query, ...prevState]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else if (editRefetchStatus) {
      setClassTeams((prevState) =>
        [
          ...new Set([...SportClassTeamList?.team_query]?.map(JSON.stringify)),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
      setEditRefetchStatus(false);
    } else {
      if (SportClassTeamList?.team_query) {
        setClassTeams((prevState) =>
          [
            ...new Set(
              [...prevState, ...SportClassTeamList?.team_query]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (SportClassTeamList?.team_query?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (SportClassTeamList?.team_query?.length === 10) setState(true);
    else setState(false);
  }, [SportClassTeamList?.team_query]);

  const onRefetchWhenClassCreated = () => {
    setPage(1);
    setEditRefetchStatus(true);
    setShowingDataLoading(true);
    SportClassTeamListRefetch();
  };

  return (
    <div className={style.sports}>
      <div className={style.eventstop}>
        <h6 className={`${style.eventstopTab} `}>
          {t("total_teams")}: {classTeams?.length}
        </h6>

        <h6
          className={`${style.eventstopTab} ${style.eventBlue}`}
          onClick={() => setOpenModal(true)}
        >
          {t("create_new_team")}
        </h6>
      </div>

      <div className={style.eventsMid}>
        {classTeams?.map((team, index) =>
          classTeams?.length === index + 1 ? (
            <div key={index} ref={ref}>
              <Item team={team} refetch={onRefetchWhenClassCreated} />
            </div>
          ) : (
            <div key={index}>
              <Item team={team} refetch={onRefetchWhenClassCreated} />
            </div>
          )
        )}
        {showingDataLoading && <QvipleLoading />}
        {!showingDataLoading &&
          SportClassTeamList?.team_query?.length === 0 && (
            <div className={style.noData}>{t("no_team_found")}</div>
          )}
      </div>
      {openModal && (
        <CreateTeamModal
          insId={insId}
          openModal={openModal}
          hideModal={(w) => setOpenModal(w)}
          classMembers={classMembers}
          cid={cid}
          teamrefetch={onRefetchWhenClassCreated}
        />
      )}
    </div>
  );
}

export default SportsClassTeams;

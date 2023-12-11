import React from "react";
import style from "./SportEventDetails.module.css";
import { useInView } from "react-intersection-observer";
import {
  useAllMatchList,
  useMatchDetails,
  useSportsEventDetail,
  useEditIntraMatchResultIndividual,
  useEditInterMatchResultIndividual,
  useEditIntraMatchResultTeam,
  useEditInterMatchResultFreeStyle,
  useEditIntraMatchResultFreeStyle,
  useEditInterMatchResultTeam,
} from "../../../../../hooks/sports/sports-api";

import { imageShowUrl } from "../../../../../services/BaseUrl";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import CreateIntraMatchModal from "./CreateNewMatchModal/CreateIntraMatchModal";
import CreateInterMatchModal from "./CreateNewMatchModal/CreateInterMatchModal";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useEffect } from "react";
import QvipleLoading from "../../../../../Loader/QvipleLoading";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const MODAL_STYLES = {
  position: "absolute",
  left: "0",
  top: "5vw",
  zIndex: 10,
};

const MODAL_STYLES2 = {
  position: "absolute",
  left: "31vw",
  top: "5vw",
  zIndex: 10,
};

const MODAL_STYLES3 = {
  position: "absolute",
  left: "0",
  top: "10vw",
  zIndex: 10,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};

function Options({
  setIndividualWinnerDummyData,
  individualWinnerDummyData,
  individualWinnerData,
  setIndividualWinnerData,
  clickType,
  setClickType,
  onClose,
  open,
  status,
  sid,
}) {
  const { t } = useTranslation();
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      {status === "rank" && (
        <div style={MODAL_STYLES2} className={style.options}>
          <div
            className={style.itemm}
            onClick={() => {
              setIndividualWinnerData({
                ...individualWinnerData,
                studentRankTitle: "Winner",
              });
              setClickType({ ...clickType, rank: false });
            }}
          >
            {t("winner")}
          </div>
          <div
            className={style.itemm}
            onClick={() => {
              setIndividualWinnerData({
                ...individualWinnerData,
                studentRankTitle: "Runner",
              });
              setClickType({ ...clickType, rank: false });
            }}
          >
            {t("runner_up")}
          </div>
          <div
            className={style.itemm}
            onClick={() => {
              setIndividualWinnerData({
                ...individualWinnerData,
                studentRankTitle: "Participant",
              });
              setClickType({ ...clickType, rank: false });
            }}
          >
            {t("participant")}
          </div>
        </div>
      )}
    </>
  );
}

function SportEventDetails({ eventId, sportClass, setProfile, sportDepartId }) {
  const [page, setPage] = useState(1);
  const [matchlist, setMatchList] = useState([]);
  const [ref, inView] = useInView();
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [editRefetchStatus, setEditRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { allMatchList, allMatchListRefetch } = useAllMatchList({
    data: {
      eid: eventId,
      page: page,
    },
    skip: !eventId,
  });

  const { sportsEventDetails } = useSportsEventDetail({
    eid: eventId,
    skip: !eventId,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (eventId) {
      setShowingDataLoading(true);
      allMatchListRefetch();
    }
  }, [page, eventId, allMatchListRefetch]);

  useEffect(() => {
    if (refetchStatus) {
      setMatchList((prevState) =>
        [
          ...new Set(
            [...allMatchList?.match_query, ...prevState]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else if (editRefetchStatus) {
      setMatchList((prevState) =>
        [...new Set([...allMatchList?.match_query]?.map(JSON.stringify))]?.map(
          JSON.parse
        )
      );
      setShowingDataLoading(false);
      setEditRefetchStatus(false);
    } else {
      if (allMatchList?.match_query) {
        setMatchList((prevState) =>
          [
            ...new Set(
              [...prevState, ...allMatchList?.match_query]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (allMatchList?.match_query?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (allMatchList?.match_query?.length === 10) setState(true);
    else setState(false);
  }, [allMatchList?.match_query]);

  const onRefetchWhenClassCreated = () => {
    setPage(1);
    setEditRefetchStatus(true);
    setShowingDataLoading(true);
    allMatchListRefetch();
  };
  const [matchDetailsData, setMatchDetailsData] = useState({
    matchName: "",
    matchType: "",
    gameType: "",
    sportClass: "",
    matchDate: "",
    eventType: "",
    player1: "",
    player2: "",
    player: "",
    freeArr: [],
    team1: "",
    team2: "",
    team: "",
  });
  const [clickType, setClickType] = useState({
    individual: false,
    rank: false,
    opponent: false,
    team: false,
    runner: false,
  });
  const [individualWinnerData, setIndividualWinnerData] = useState({
    studentWinner: "",
    studentRunner: "",
    studentPlayer: matchDetailsData?.player1?._id,
    studentRankTitle: "",
    studentOpponentPlayer: "",
    teamWinner: "",
    teamRunner: "",
    teamPlayer: "",
    studentParticipants: [],
    teamOpponentPlayer: "",
  });

  const [individualWinnerDummyData, setIndividualWinnerDummyData] = useState({
    studentWinner: {},
    studentRunner: {},
    studentPlayer: matchDetailsData?.player1,
    studentOpponentPlayer: {},
    studentParticipants: [],
    teamWinner: {},
    teamRunner: {},
    teamPlayer: {},
    interfree: false,
    teamOpponentPlayer: {},
  });

  const [matchId, setMatchId] = useState("");

  const { matchDetails, matchDetailsRefetch } = useMatchDetails({
    mid: matchId,
    skip: !matchId,
  });
  const [detail, setDetail] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [openSanckBar, setOpenSanckBar] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const [editIntraMatchResultIndividual] = useEditIntraMatchResultIndividual();
  const [editInterMatchResultIndividual] = useEditInterMatchResultIndividual();
  const [editInterMatchResultTeam] = useEditInterMatchResultTeam();
  const [editIntraMatchResultTeam] = useEditIntraMatchResultTeam();
  const [editInterMatchResultFreeStyle] = useEditInterMatchResultFreeStyle();
  const [editIntraMatchResultFreeStyle] = useEditIntraMatchResultFreeStyle();

  const handleEdit = () => {
    if (
      individualWinnerData.studentWinner !== "" &&
      individualWinnerData.studentRunner !== ""
    ) {
      setLoading(true);
      editIntraMatchResultIndividual({
        mid: matchId,
        resultData: individualWinnerData,
      }).then((res) => {
        setLoading(false);
        matchDetailsRefetch();
        setOpenSanckBar(true);
        setIndividualWinnerData({
          ...individualWinnerData,
          studentWinner: "",
          studentRunner: "",
          studentPlayer: "",
          studentRankTitle: "",
          studentOpponentPlayer: "",
          teamWinner: "",
          teamRunner: "",
          teamPlayer: "",
          studentParticipants: [],
          teamOpponentPlayer: "",
        });

        setIndividualWinnerDummyData({
          ...individualWinnerDummyData,
          studentWinner: {},
          studentRunner: {},
          studentPlayer: {},
          studentOpponentPlayer: {},
          studentParticipants: [],
          teamWinner: {},
          teamRunner: {},
          teamPlayer: {},
          interfree: false,
          teamOpponentPlayer: {},
        });
      });
    }

    // console.info(individualWinnerData);

    if (
      individualWinnerData.studentOpponentPlayer !== "" &&
      individualWinnerData.studentRankTitle !== "" &&
      individualWinnerData.studentPlayer !== ""
    ) {
      setLoading(true);
      editInterMatchResultIndividual({
        mid: matchId,
        resultData: individualWinnerData,
      }).then((res) => {
        setLoading(false);
        matchDetailsRefetch();
        setOpenSanckBar(true);
        setIndividualWinnerData({
          ...individualWinnerData,
          studentWinner: "",
          studentRunner: "",
          studentPlayer: "",
          studentRankTitle: "",
          studentOpponentPlayer: "",
          teamWinner: "",
          teamRunner: "",
          teamPlayer: "",
          studentParticipants: [],
          teamOpponentPlayer: "",
        });
        setIndividualWinnerDummyData({
          ...individualWinnerDummyData,
          studentWinner: {},
          studentRunner: {},
          studentPlayer: {},
          studentOpponentPlayer: {},
          studentParticipants: [],
          teamWinner: {},
          teamRunner: {},
          teamPlayer: {},
          interfree: false,
          teamOpponentPlayer: {},
        });
      });
    }

    if (
      individualWinnerData.studentOpponentPlayer !== "" &&
      individualWinnerData.studentRankTitle !== "" &&
      individualWinnerData.studentPlayer !== "" &&
      individualWinnerDummyData.interfree
    ) {
      setLoading(true);
      editInterMatchResultFreeStyle({
        mid: matchId,
        resultData: individualWinnerData,
      }).then((res) => {
        setLoading(false);
        setOpenSanckBar(true);
        matchDetailsRefetch();
        setIndividualWinnerData({
          ...individualWinnerData,
          studentWinner: "",
          studentRunner: "",
          studentPlayer: "",
          studentRankTitle: "",
          studentOpponentPlayer: "",
          teamWinner: "",
          teamRunner: "",
          teamPlayer: "",
          studentParticipants: [],
          teamOpponentPlayer: "",
        });
        setIndividualWinnerDummyData({
          ...individualWinnerDummyData,
          studentWinner: {},
          studentRunner: {},
          studentPlayer: {},
          studentOpponentPlayer: {},
          studentParticipants: [],
          teamWinner: {},
          teamRunner: {},
          teamPlayer: {},
          interfree: false,
          teamOpponentPlayer: {},
        });
      });
    }

    if (
      individualWinnerData.teamWinner !== "" &&
      individualWinnerData.teamRunner !== ""
    ) {
      setLoading(true);
      editIntraMatchResultTeam({
        mid: matchId,
        resultData: individualWinnerData,
      }).then((res) => {
        setLoading(false);
        setOpenSanckBar(true);
        matchDetailsRefetch();
        setIndividualWinnerData({
          ...individualWinnerData,
          studentWinner: "",
          studentRunner: "",
          studentPlayer: "",
          studentRankTitle: "",
          studentOpponentPlayer: "",
          teamWinner: "",
          teamRunner: "",
          teamPlayer: "",
          studentParticipants: [],
          teamOpponentPlayer: "",
        });
        setIndividualWinnerDummyData({
          ...individualWinnerDummyData,
          studentWinner: {},
          studentRunner: {},
          studentPlayer: {},
          studentOpponentPlayer: {},
          studentParticipants: [],
          teamWinner: {},
          teamRunner: {},
          teamPlayer: {},
          interfree: false,
          teamOpponentPlayer: {},
        });
      });
    }

    if (
      individualWinnerData.teamPlayer !== "" &&
      individualWinnerData.studentRankTitle !== "" &&
      individualWinnerData.teamOpponentPlayer !== ""
    ) {
      setLoading(true);
      editInterMatchResultTeam({
        mid: matchId,
        resultData: individualWinnerData,
      }).then((res) => {
        setLoading(false);
        setOpenSanckBar(true);
        matchDetailsRefetch();
        setIndividualWinnerData({
          ...individualWinnerData,
          studentWinner: "",
          studentRunner: "",
          studentPlayer: "",
          studentRankTitle: "",
          studentOpponentPlayer: "",
          teamWinner: "",
          teamRunner: "",
          teamPlayer: "",
          studentParticipants: [],
          teamOpponentPlayer: "",
        });
        setIndividualWinnerDummyData({
          ...individualWinnerDummyData,
          studentWinner: {},
          studentRunner: {},
          studentPlayer: {},
          studentOpponentPlayer: {},
          studentParticipants: [],
          teamWinner: {},
          teamRunner: {},
          teamPlayer: {},
          interfree: false,
          teamOpponentPlayer: {},
        });
      });
    }

    if (
      individualWinnerData.studentWinner !== "" &&
      individualWinnerData.studentRunner !== "" &&
      individualWinnerData?.studentParticipants.length >= 0
    ) {
      setLoading(true);
      editIntraMatchResultFreeStyle({
        mid: matchId,
        resultData: individualWinnerData,
      }).then((res) => {
        setLoading(false);
        setOpenSanckBar(true);
        matchDetailsRefetch();
        setIndividualWinnerData({
          ...individualWinnerData,
          studentWinner: "",
          studentRunner: "",
          studentPlayer: "",
          studentRankTitle: "",
          studentOpponentPlayer: "",
          teamWinner: "",
          teamRunner: "",
          teamPlayer: "",
          studentParticipants: [],
          teamOpponentPlayer: "",
        });
        setIndividualWinnerDummyData({
          ...individualWinnerDummyData,
          studentWinner: {},
          studentRunner: {},
          studentPlayer: {},
          studentOpponentPlayer: {},
          studentParticipants: [],
          teamWinner: {},
          teamRunner: {},
          teamPlayer: {},
          interfree: false,
          teamOpponentPlayer: {},
        });
      });
    }
  };

  useEffect(() => {
    if (matchId) {
      matchDetailsRefetch();
    }
  }, [matchId, matchDetailsRefetch]);

  useEffect(() => {
    setIndividualWinnerData({
      ...individualWinnerData,
      studentPlayer: matchDetailsData?.player1?._id,
      teamPlayer: matchDetailsData?.team1?._id,
    });

    setIndividualWinnerDummyData({
      ...individualWinnerDummyData,
      studentPlayer: matchDetailsData?.player1,
      teamPlayer: matchDetailsData?.team1,
    });
  }, [matchDetailsData]);

  const handleAdd = (student, status) => {
    if (status === "player") {
      let arr = matchDetailsData?.freeArr?.filter((val) => {
        if (val?._id !== student?._id) {
          return val;
        }
      });

      let arr2 = arr?.map((a) => a?._id);

      setIndividualWinnerData({
        ...individualWinnerData,
        studentPlayer: student?._id,
        studentParticipants: arr2,
      });

      setIndividualWinnerDummyData({
        ...individualWinnerDummyData,
        studentPlayer: student,
        studentParticipants: arr,
      });
    }

    if (status === "runner") {
      let arr = matchDetailsData?.freeArr?.filter((val) => {
        if (
          val?._id !== student?._id &&
          val?._id !== individualWinnerData.studentWinner
        ) {
          return val;
        }
      });

      let arr2 = arr?.map((a) => a?._id);

      setIndividualWinnerDummyData({
        ...individualWinnerDummyData,
        studentRunner: student,
        studentParticipants: arr,
      });
      setIndividualWinnerData({
        ...individualWinnerData,
        studentRunner: student?._id,
        studentParticipants: arr2,
      });
    }

    if (status === "winner") {
      let arr = matchDetailsData?.freeArr?.filter((val) => {
        if (
          val?._id !== student?._id &&
          val?._id !== individualWinnerData.studentRunner
        ) {
          return val;
        }
      });

      let arr2 = arr?.map((a) => a?._id);

      setIndividualWinnerDummyData({
        ...individualWinnerDummyData,
        studentWinner: student,
        studentParticipants: arr,
      });
      setIndividualWinnerData({
        ...individualWinnerData,
        studentWinner: student?._id,
        studentParticipants: arr2,
      });
    }
  };

  return (
    <div>
      <div className={style.card}>
        {/* setEventId(eid) */}
        <img
          src={
            sportsEventDetails?.event?.sportEventProfilePhoto
              ? `${imageShowUrl}/${sportsEventDetails?.event?.sportEventProfilePhoto}`
              : "/images/ins-image.jpg"
          }
          alt=""
        />
        <div className={style.texttt}>
          <p>
            <span className={style.span1}>
              {sportsEventDetails?.event?.sportEventName}
            </span>{" "}
            ({sportsEventDetails?.event?.sportEventCategory} {t("event")})
          </p>
          <p>
            <span className={style.span2}> {t("date")} : </span>{" "}
            {days[new Date(sportsEventDetails?.event?.sportEventDate).getDay()]}
            , {sportsEventDetails?.event?.sportEventDate}
          </p>
          <p>
            <span className={style.span2}> {t("Place")} : </span>
            {sportsEventDetails?.event?.sportEventPlace}
          </p>
        </div>
      </div>
      {!detail && (
        <div className={style.detailsBottom}>
          <div className={style.detailsBottomHeading}>
            <p
              onClick={() => {
                setProfile(true);
                setIndividualWinnerData({
                  ...individualWinnerData,
                  studentWinner: "",
                  studentRunner: "",
                  studentPlayer: "",
                  studentRankTitle: "",
                  studentOpponentPlayer: "",
                  teamWinner: "",
                  teamRunner: "",
                  teamPlayer: "",
                  studentParticipants: [],
                  teamOpponentPlayer: "",
                });
              }}
            >
              {t("back")}
            </p>
            <p>{t("matches")}</p>

            <p className={style.createp} onClick={() => setOpenModal(true)}>
              {t("create_new_match")}
            </p>
          </div>
          <div className={style.matches}>
            {matchlist?.map((match, index) => (
              <div key={index}>
                <div
                  className={style.matcheCard}
                  ref={ref}
                  onClick={() => {
                    setMatchDetailsData({
                      ...matchDetailsData,
                      matchName: match?.sportEventMatchName,
                      matchType: match?.sportEventMatchCategoryLevel,
                      gameType: match?.sportEventMatchCategory,
                      sportClass: "Swimming",
                      matchDate: `${
                        days[new Date(match?.sportEventMatchDate).getDay()]
                      },${match?.sportEventMatchDate}`,
                      eventType: sportsEventDetails?.event?.sportEventCategory,
                      player1: match?.sportPlayer1,
                      player2: match?.sportPlayer2,
                      player: match?.sportFreePlayer,
                      team1: match?.sportTeam1,
                      team2: match?.sportTeam2,
                      team: match?.sportTeam,
                      freeArr: match?.sportFreePlayer,
                    });
                    setMatchId(match?._id);
                    setDetail(true);
                  }}
                >
                  <div className={style.matcheRow}>
                    <p>
                      {" "}
                      <span> {t("match")} :</span> {match?.sportEventMatchName}
                    </p>
                    <p>
                      {" "}
                      <span> {t("match_type")} :</span>{" "}
                      {match?.sportEventMatchCategoryLevel}
                    </p>
                    <p>
                      {" "}
                      <span> {t("game_type")} :</span>{" "}
                      {match?.sportEventMatchCategory}
                    </p>
                  </div>

                  {sportsEventDetails?.event?.sportEventCategory === "Intra" &&
                    (match?.sportEventMatchCategory === "Individual" ? (
                      <div className={style.matcheRow}>
                        <p style={{ marginTop: "1.5vw" }}>
                          {" "}
                          <span> {t("player")} 1 :</span>{" "}
                          {match?.sportPlayer1?.studentFirstName}{" "}
                          {match?.sportPlayer1?.studentMiddleName}{" "}
                          {match?.sportPlayer1?.studentLastName}
                        </p>
                        <p>
                          {" "}
                          <span> {t("player")} 2 :</span>{" "}
                          {match?.sportPlayer2?.studentFirstName}{" "}
                          {match?.sportPlayer2?.studentMiddleName}{" "}
                          {match?.sportPlayer2?.studentLastName}
                        </p>
                      </div>
                    ) : match?.sportEventMatchCategory === "Team" ? (
                      <div className={style.matcheRow}>
                        <p style={{ marginTop: "1.5vw" }}>
                          {" "}
                          <span> {t("team")} 1 :</span>{" "}
                          {match?.sportTeam1?.sportClassTeamName}
                        </p>
                        <p>
                          {" "}
                          <span> {t("team")} 2 :</span>{" "}
                          {match?.sportTeam2?.sportClassTeamName}
                        </p>
                      </div>
                    ) : (
                      <div
                        className={`${style.matcheRow} ${style.matcheRowFlex}`}
                      >
                        <p
                          style={
                            match?.sportEventMatchCategory !== "Free Style"
                              ? { marginTop: "1.5vw" }
                              : { marginTop: "0" }
                          }
                        >
                          <span> {t("players")} : </span>{" "}
                        </p>
                        <p>
                          {match?.sportFreePlayer[0]?.studentFirstName}{" "}
                          {match?.sportFreePlayer[0]?.studentMiddleName}{" "}
                          {match?.sportFreePlayer[0]?.studentLastName},
                        </p>
                        <p>
                          {match?.sportFreePlayer[1]?.studentFirstName}{" "}
                          {match?.sportFreePlayer[1]?.studentMiddleName}{" "}
                          {match?.sportFreePlayer[1]?.studentLastName}...
                        </p>
                      </div>
                    ))}

                  {sportsEventDetails?.event?.sportEventCategory !== "Intra" &&
                    (match?.sportEventMatchCategory === "Individual" ? (
                      <div className={style.matcheRow}>
                        <p style={{ marginTop: "1.5vw" }}>
                          {" "}
                          <span> {t("player")} :</span>{" "}
                          {match?.sportPlayer1?.studentFirstName}{" "}
                          {match?.sportPlayer1?.studentMiddleName}{" "}
                          {match?.sportPlayer1?.studentLastName}
                        </p>
                      </div>
                    ) : match?.sportEventMatchCategory === "Team" ? (
                      <div className={style.matcheRow}>
                        <p style={{ marginTop: "1.5vw" }}>
                          {" "}
                          <span> {t("team")} :</span>{" "}
                          {match?.sportTeam1?.sportClassTeamName}
                        </p>
                      </div>
                    ) : (
                      <div className={style.matcheRow}>
                        <div
                          className={style.matcheRowflex}
                          style={{ marginTop: "1.5vw" }}
                        >
                          <p>
                            <span> {t("players")} :</span>
                          </p>

                          <p>
                            {match?.sportFreePlayer[0]?.studentFirstName}{" "}
                            {match?.sportFreePlayer[0]?.studentMiddleName}{" "}
                            {match?.sportFreePlayer[0]?.studentLastName},
                          </p>
                          <p>
                            {match?.sportFreePlayer[1]?.studentFirstName}{" "}
                            {match?.sportFreePlayer[1]?.studentMiddleName}{" "}
                            {match?.sportFreePlayer[1]?.studentLastName} ...
                          </p>
                        </div>
                      </div>
                    ))}

                  <div className={style.matcheRow}>
                    <p className={style.matchDate} style={{ marginTop: "3vw" }}>
                      {days[new Date(match?.sportEventMatchDate).getDay()]},{" "}
                      {match?.sportEventMatchDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {showingDataLoading && <QvipleLoading />}
            {!showingDataLoading && allMatchList?.match_query?.length === 0 && (
              <div className={style.noData}>
                <img src="/images/nodata.jpg" alt="" />
              </div>
            )}
          </div>
        </div>
      )}

      {detail && (
        <div className={style.detailsBottom2}>
          <div className={style.detailsBottomHeading}>
            <p
              onClick={() => {
                setDetail(false);
                setClickType({ ...clickType, individual: false });
                setIndividualWinnerData({
                  ...individualWinnerData,
                  studentWinner: "",
                  studentRunner: "",
                  studentPlayer: "",
                  studentRankTitle: "",
                  studentOpponentPlayer: "",
                  teamWinner: "",
                  teamRunner: "",
                  teamPlayer: "",
                  studentParticipants: [],
                  teamOpponentPlayer: "",
                });
              }}
            >
              {t("back")}
            </p>
            {matchDetails?.match?.matchStatus === "Completed" ? (
              ""
            ) : (
              <p onClick={() => onRefetchWhenClassCreated()}>
                {t("select_winners")}
              </p>
            )}

            <p className={style.createp}></p>
          </div>
          <div className={style.matcheCard}>
            <div className={style.matcheRow}>
              <p>
                {" "}
                <span> {t("match")} : </span>
                {matchDetailsData?.eventType === "Intra" &&
                  (matchDetailsData?.gameType === "Individual" ? (
                    <span className={style.spanLight}>
                      {matchDetailsData?.player1?.studentFirstName}{" "}
                      {matchDetailsData?.player1?.studentMiddleName}{" "}
                      {matchDetailsData?.player1?.studentLastName} vs{" "}
                      {matchDetailsData?.player2?.studentFirstName}{" "}
                      {matchDetailsData?.player2?.studentMiddleName}{" "}
                      {matchDetailsData?.player2?.studentLastName}
                    </span>
                  ) : matchDetailsData?.gameType === "Team" ? (
                    <span className={style.spanLight}>
                      {matchDetailsData?.team1?.sportClassTeamName} vs{" "}
                      {matchDetailsData?.team2?.sportClassTeamName}
                    </span>
                  ) : (
                    <span className={style.spanLight}>
                      {matchDetailsData?.matchName}
                    </span>
                  ))}
                {matchDetailsData?.eventType !== "Intra" &&
                  matchDetailsData?.matchName}
              </p>
              <p>
                {" "}
                <span> {t("match_type")} :</span> {matchDetailsData?.matchType}{" "}
                Match
              </p>
              <p>
                {" "}
                <span> {t("game_type")} :</span> {matchDetailsData?.gameType}
              </p>
            </div>
            <div className={style.matcheRow}>
              {matchDetailsData?.eventType === "Intra" &&
                (matchDetailsData?.gameType === "Team" ? (
                  <div>
                    <p style={{ marginTop: "1.5vw" }}>
                      {" "}
                      <span> {t("team")} 2 :</span>{" "}
                      {matchDetailsData?.team1?.sportClassTeamName}
                    </p>
                    <p>
                      {" "}
                      <span> {t("team")} 2 :</span>{" "}
                      {matchDetailsData?.team2?.sportClassTeamName}
                    </p>
                  </div>
                ) : matchDetailsData?.gameType === "Individual" ? (
                  <div>
                    <p style={{ marginTop: "1.5vw" }}>
                      {" "}
                      <span> {t("player")} 1:</span>{" "}
                      {matchDetailsData?.player1?.studentFirstName}
                      {matchDetailsData?.player1?.studentMiddleName}
                      {matchDetailsData?.player1?.studentLastName}
                    </p>
                    <p>
                      {" "}
                      <span> {t("player")} 2 :</span>{" "}
                      {matchDetailsData?.player2?.studentFirstName}
                      {matchDetailsData?.player2?.studentMiddleName}
                      {matchDetailsData?.player2?.studentLastName}
                    </p>
                  </div>
                ) : (
                  <p style={{ marginTop: "1.5vw" }}>
                    {" "}
                    <span>{t("players")} :</span>{" "}
                    {matchDetailsData?.player[0]?.studentFirstName}{" "}
                    {matchDetailsData?.player[0]?.studentMiddleName}{" "}
                    {matchDetailsData?.player[0]?.studentLastName},
                    {matchDetailsData?.player[1]?.studentFirstName}{" "}
                    {matchDetailsData?.player[1]?.studentMiddleName}{" "}
                    {matchDetailsData?.player[1]?.studentLastName}...
                  </p>
                ))}

              {matchDetailsData?.eventType !== "Intra" &&
                (matchDetailsData?.gameType === "Team" ? (
                  <div>
                    <p></p>
                    <p style={{ marginTop: "1.5vw" }}>
                      {" "}
                      <span>{t("team")} :</span>{" "}
                      {matchDetailsData?.team1?.sportClassTeamName}
                    </p>
                  </div>
                ) : matchDetailsData?.gameType === "Individual" ? (
                  <div>
                    <p></p>
                    <p style={{ marginTop: "1.5vw" }}>
                      {" "}
                      <span>{t("player")} :</span>{" "}
                      {matchDetailsData?.player1?.studentFirstName}
                      {matchDetailsData?.player1?.studentMiddleName}
                      {matchDetailsData?.player1?.studentLastName}
                    </p>
                  </div>
                ) : (
                  <p style={{ marginTop: "1.5vw" }}>
                    {" "}
                    <span>{t("players")} :</span>{" "}
                    {matchDetailsData?.player[0]?.studentFirstName}{" "}
                    {matchDetailsData?.player[0]?.studentMiddleName}{" "}
                    {matchDetailsData?.player[0]?.studentLastName},
                    {matchDetailsData?.player[1]?.studentFirstName}{" "}
                    {matchDetailsData?.player[1]?.studentMiddleName}{" "}
                    {matchDetailsData?.player[1]?.studentLastName}...
                  </p>
                ))}
            </div>
            <div className={style.matcheRow}>
              <p className={style.matchDate} style={{ marginTop: "3vw" }}>
                {matchDetailsData?.matchDate}
              </p>
            </div>
          </div>

          <div className={style.saveContainer}>
            {((individualWinnerData.studentWinner !== "" &&
              individualWinnerData.studentRunner !== "") ||
              (individualWinnerData.studentPlayer !== "" &&
                individualWinnerData.studentOpponentPlayer !== "" &&
                individualWinnerData.studentRankTitle !== "") ||
              (individualWinnerData.teamWinner !== "" &&
                individualWinnerData.teamRunner !== "") ||
              (individualWinnerData.teamPlayer !== "" &&
                individualWinnerData.studentRankTitle !== "" &&
                individualWinnerData.teamOpponentPlayer !== "") ||
              (individualWinnerData.studentWinner !== "" &&
                individualWinnerData.studentRunner !== "" &&
                individualWinnerData?.studentParticipants.length >= 0)) && (
              <p className={style.createp} onClick={handleEdit}>
                {t("save")}
              </p>
            )}

            {/* {individualWinnerData.studentPlayer !== "" && (
              <p className={style.createp} onClick={handleEdit}>
                Save
              </p>
            )} */}
          </div>

          {matchDetailsData?.eventType === "Intra" &&
            matchDetails?.match?.matchStatus === "Not Completed" &&
            (matchDetailsData?.gameType === "Individual" ? (
              <div className={style.winners} style={BUTTON_WRAPPER_STYLES}>
                <div className={style.winnerRow}>
                  {individualWinnerData.studentWinner === "" ? (
                    <div
                      className={style.selectPlayer}
                      onClick={() =>
                        setClickType({ ...clickType, individual: true })
                      }
                    >
                      <img src="/images/sports/avatar-circle.svg" alt="" />
                      <div>
                        <h6>{t("select_winners")}</h6>
                      </div>
                    </div>
                  ) : (
                    <div className={`${style.itemm} ${style.half}`}>
                      <img
                        alt=""
                        className={style.playerImg}
                        src={
                          individualWinnerDummyData.studentWinner
                            ?.studentProfilePhoto
                            ? `${imageShowUrl}/${individualWinnerDummyData.studentWinner?.studentProfilePhoto}`
                            : "/images/member_tab/class/default_avatar.svg"
                        }
                      />
                      <div className={style.itemtext}>
                        <div className={style.insName}>
                          <h6 className={style.playerh}>
                            {
                              individualWinnerDummyData.studentWinner
                                ?.studentFirstName
                            }{" "}
                            {individualWinnerDummyData.studentWinner
                              ?.studentMiddleName
                              ? individualWinnerDummyData.studentWinner
                                  ?.studentMiddleName
                              : " "}{" "}
                            {
                              individualWinnerDummyData.studentWinner
                                ?.studentLastName
                            }
                          </h6>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className={style.position}>
                    <p>{t("winner")}</p>
                    <img src="/images/members/one.svg" alt="" />
                  </div>
                </div>

                {individualWinnerData.studentWinner !== "" && (
                  <div className={style.winnerRow}>
                    <div className={`${style.itemm} ${style.half}`}>
                      <img
                        alt=""
                        className={style.playerImg}
                        src={
                          individualWinnerDummyData.studentRunner
                            ?.studentProfilePhoto
                            ? `${imageShowUrl}/${individualWinnerDummyData.studentRunner?.studentProfilePhoto}`
                            : "/images/member_tab/class/default_avatar.svg"
                        }
                      />
                      <div className={style.itemtext}>
                        <div className={style.insName}>
                          <h6 className={style.playerh}>
                            {
                              individualWinnerDummyData.studentRunner
                                ?.studentFirstName
                            }{" "}
                            {individualWinnerDummyData.studentRunner
                              ?.studentMiddleName
                              ? individualWinnerDummyData.studentRunner
                                  ?.studentMiddleName
                              : " "}{" "}
                            {
                              individualWinnerDummyData.studentRunner
                                ?.studentLastName
                            }
                          </h6>
                        </div>
                      </div>
                    </div>

                    {matchDetailsData?.matchType === "Final" && (
                      <div className={style.position}>
                        <p>{t("runner_up")}</p>
                        <img src="/images/members/two.svg" alt="" />
                      </div>
                    )}
                  </div>
                )}

                {clickType.individual && (
                  <div style={MODAL_STYLES} className={style.options}>
                    <div
                      className={style.itemm}
                      onClick={() => {
                        setIndividualWinnerDummyData({
                          ...individualWinnerDummyData,
                          studentWinner: matchDetailsData?.player1,
                          studentRunner: matchDetailsData?.player2,
                        });
                        setIndividualWinnerData({
                          ...individualWinnerData,
                          studentWinner: matchDetailsData?.player1?._id,
                          studentRunner: matchDetailsData?.player2?._id,
                        });
                        setClickType({ ...clickType, individual: false });
                      }}
                    >
                      <img
                        alt=""
                        className={style.playerImg}
                        src={
                          matchDetailsData?.player1?.studentProfilePhoto
                            ? `${imageShowUrl}/${matchDetailsData?.player1?.studentProfilePhoto}`
                            : "/images/member_tab/class/default_avatar.svg"
                        }
                      />
                      <div className={style.itemtext}>
                        <div className={style.insName}>
                          <h6 className={style.playerh}>
                            {matchDetailsData?.player1?.studentFirstName}{" "}
                            {matchDetailsData?.player1?.studentMiddleName
                              ? matchDetailsData?.player1?.studentMiddleName
                              : " "}{" "}
                            {matchDetailsData?.player1?.studentLastName}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className={style.itemm}
                      onClick={() => {
                        setIndividualWinnerDummyData({
                          ...individualWinnerDummyData,
                          studentWinner: matchDetailsData?.player2,
                          studentRunner: matchDetailsData?.player1,
                        });
                        setIndividualWinnerData({
                          ...individualWinnerData,
                          studentWinner: matchDetailsData?.player2?._id,
                          studentRunner: matchDetailsData?.player1?._id,
                        });
                        setClickType({ ...clickType, individual: false });
                      }}
                    >
                      <img
                        alt=""
                        className={style.playerImg}
                        src={
                          matchDetailsData?.player2?.studentProfilePhoto
                            ? `${imageShowUrl}/${matchDetailsData?.player2?.studentProfilePhoto}`
                            : "/images/member_tab/class/default_avatar.svg"
                        }
                      />
                      <div className={style.itemtext}>
                        <div className={style.insName}>
                          <h6 className={style.playerh}>
                            {matchDetailsData?.player2?.studentFirstName}{" "}
                            {matchDetailsData?.player2?.studentMiddleName
                              ? matchDetailsData?.player2?.studentMiddleName
                              : " "}{" "}
                            {matchDetailsData?.player2?.studentLastName}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : matchDetailsData?.gameType === "Team" ? (
              <div className={style.winners} style={BUTTON_WRAPPER_STYLES}>
                <div className={style.winnerRow}>
                  {individualWinnerData.teamWinner === "" ? (
                    <div
                      className={style.selectPlayer}
                      onClick={() => {
                        setClickType({ ...clickType, team: true });
                      }}
                    >
                      <img src="/images/sports/avatar-circle.svg" alt="" />
                      <div>
                        <h6>{t("select_winning_team")}</h6>
                      </div>
                    </div>
                  ) : (
                    <div className={`${style.itemm} ${style.half}`}>
                      <h6 className={style.playerh}>
                        {
                          individualWinnerDummyData.teamWinner
                            .sportClassTeamName
                        }
                      </h6>
                    </div>
                  )}
                  <div className={style.position}>
                    <p>{t("winner")}</p>
                    <img src="/images/members/one.svg" alt="" />
                  </div>
                </div>

                {individualWinnerData.teamWinner !== "" && (
                  <div className={style.winnerRow}>
                    <div className={`${style.itemm} ${style.half}`}>
                      <h6 className={style.playerh}>
                        {
                          individualWinnerDummyData.teamRunner
                            .sportClassTeamName
                        }
                      </h6>
                    </div>

                    {matchDetailsData?.matchType === "Final" && (
                      <div className={style.position}>
                        <p>{t("runner_up")}</p>
                        <img src="/images/members/two.svg" alt="" />
                      </div>
                    )}
                  </div>
                )}

                {clickType.team && (
                  <div style={MODAL_STYLES} className={style.options}>
                    <div
                      className={style.itemm}
                      onClick={() => {
                        setIndividualWinnerDummyData({
                          ...individualWinnerDummyData,
                          teamWinner: matchDetailsData?.team1,
                          teamRunner: matchDetailsData?.team2,
                        });
                        setIndividualWinnerData({
                          ...individualWinnerData,
                          teamWinner: matchDetailsData?.team1?._id,
                          teamRunner: matchDetailsData?.team2?._id,
                        });
                        setClickType({ ...clickType, team: false });
                      }}
                    >
                      <h6 className={style.playerh}>
                        {matchDetailsData?.team1?.sportClassTeamName}
                      </h6>
                    </div>
                    <div
                      className={style.itemm}
                      onClick={() => {
                        setIndividualWinnerDummyData({
                          ...individualWinnerDummyData,
                          teamWinner: matchDetailsData?.team2,
                          teamRunner: matchDetailsData?.team1,
                        });
                        setIndividualWinnerData({
                          ...individualWinnerData,
                          teamWinner: matchDetailsData?.team2?._id,
                          teamRunner: matchDetailsData?.team1?._id,
                        });
                        setClickType({ ...clickType, team: false });
                      }}
                    >
                      <h6 className={style.playerh}>
                        {matchDetailsData?.team2?.sportClassTeamName}
                      </h6>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className={style.winners} style={BUTTON_WRAPPER_STYLES}>
                <div className={style.winnerRow}>
                  {individualWinnerData.studentWinner === "" ? (
                    <div
                      className={style.selectPlayer}
                      onClick={() => {
                        setClickType({ ...clickType, individual: true });
                      }}
                    >
                      <img src="/images/sports/avatar-circle.svg" alt="" />
                      <div>
                        <h6>{t("select_winners")}</h6>
                      </div>
                    </div>
                  ) : (
                    <div className={`${style.itemm} ${style.half}`}>
                      <img
                        alt=""
                        className={style.playerImg}
                        src={
                          individualWinnerDummyData.studentWinner
                            ?.studentProfilePhoto
                            ? `${imageShowUrl}/${individualWinnerDummyData.studentWinner?.studentProfilePhoto}`
                            : "/images/member_tab/class/default_avatar.svg"
                        }
                      />
                      <div className={style.itemtext}>
                        <div className={style.insName}>
                          <h6 className={style.playerh}>
                            {
                              individualWinnerDummyData.studentWinner
                                ?.studentFirstName
                            }{" "}
                            {individualWinnerDummyData.studentWinner
                              ?.studentMiddleName
                              ? individualWinnerDummyData.studentWinner
                                  ?.studentMiddleName
                              : " "}{" "}
                            {
                              individualWinnerDummyData.studentWinner
                                ?.studentLastName
                            }
                          </h6>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className={style.position}>
                    <p>{t("winner")}</p>
                    <img src="/images/members/one.svg" alt="" />
                  </div>
                </div>

                {matchDetailsData?.freeArr.length >= 2 && (
                  <div className={style.winnerRow} style={{ marginTop: "1vw" }}>
                    {individualWinnerData.studentRunner === "" ? (
                      <div
                        className={style.selectPlayer}
                        onClick={() =>
                          setClickType({ ...clickType, runner: true })
                        }
                      >
                        <img src="/images/sports/avatar-circle.svg" alt="" />
                        <div>
                          <h6>{t("select_select_runner")}</h6>
                        </div>
                      </div>
                    ) : (
                      <div className={`${style.itemm} ${style.half}`}>
                        <img
                          alt=""
                          className={style.playerImg}
                          src={
                            individualWinnerDummyData.studentRunner
                              ?.studentProfilePhoto
                              ? `${imageShowUrl}/${individualWinnerDummyData.studentRunner?.studentProfilePhoto}`
                              : "/images/member_tab/class/default_avatar.svg"
                          }
                        />
                        <div className={style.itemtext}>
                          <div className={style.insName}>
                            <h6 className={style.playerh}>
                              {
                                individualWinnerDummyData.studentRunner
                                  ?.studentFirstName
                              }{" "}
                              {individualWinnerDummyData.studentRunner
                                ?.studentMiddleName
                                ? individualWinnerDummyData.studentRunner
                                    ?.studentMiddleName
                                : " "}{" "}
                              {
                                individualWinnerDummyData.studentRunner
                                  ?.studentLastName
                              }
                            </h6>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className={style.position}>
                      <p>{t("runner_up")}</p>
                      <img src="/images/members/two.svg" alt="" />
                    </div>
                  </div>
                )}

                {matchDetailsData?.freeArr.length > 2 &&
                  individualWinnerData.studentRunner !== "" &&
                  individualWinnerData.studentWinner !== "" &&
                  matchDetailsData?.freeArr
                    ?.filter((val) => {
                      if (
                        val?._id !== individualWinnerData?.studentWinner &&
                        val?._id !== individualWinnerData?.studentRunner
                      ) {
                        return val;
                      }
                    })
                    ?.map((student) => (
                      <div
                        className={style.winnerRow}
                        style={{ marginTop: "1vw" }}
                      >
                        <div className={`${style.itemm} ${style.half}`}>
                          <img
                            alt=""
                            className={style.playerImg}
                            src={
                              student?.studentProfilePhoto
                                ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                                : "/images/member_tab/class/default_avatar.svg"
                            }
                          />
                          <div className={style.itemtext}>
                            <div className={style.insName}>
                              <h6 className={style.playerh}>
                                {student?.studentFirstName}{" "}
                                {student?.studentMiddleName
                                  ? student?.studentMiddleName
                                  : " "}{" "}
                                {student?.studentLastName}
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div className={style.position}>
                          <p>{t("participant")}</p>
                        </div>
                      </div>
                    ))}

                {clickType.individual && (
                  <div>
                    <div
                      onClick={() => {
                        setClickType({ ...clickType, individual: false });
                      }}
                      style={OVERLAY_STYLES}
                    />
                    <div style={MODAL_STYLES} className={style.options}>
                      {matchDetailsData?.freeArr
                        ?.filter((val) => {
                          if (
                            val?._id !== individualWinnerData?.studentWinner &&
                            val?._id !== individualWinnerData?.studentRunner
                          ) {
                            return val;
                          }
                        })
                        .map((student) => (
                          <div
                            className={style.itemm}
                            onClick={() => {
                              handleAdd(student, "winner");

                              setClickType({ ...clickType, individual: false });
                            }}
                          >
                            <img
                              alt=""
                              className={style.playerImg}
                              src={
                                student?.studentProfilePhoto
                                  ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                                  : "/images/member_tab/class/default_avatar.svg"
                              }
                            />
                            <div className={style.itemtext}>
                              <div className={style.insName}>
                                <h6 className={style.playerh}>
                                  {student?.studentFirstName}{" "}
                                  {student?.studentMiddleName
                                    ? student?.studentMiddleName
                                    : " "}{" "}
                                  {student?.studentLastName}
                                </h6>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {clickType.runner && (
                  <div>
                    <div
                      onClick={() =>
                        setClickType({ ...clickType, runner: false })
                      }
                      style={OVERLAY_STYLES}
                    />
                    <div style={MODAL_STYLES3} className={style.options}>
                      {matchDetailsData?.freeArr
                        ?.filter((val) => {
                          if (
                            val?._id !== individualWinnerData?.studentWinner &&
                            val?._id !== individualWinnerData?.studentRunner
                          ) {
                            return val;
                          }
                        })
                        .map((student) => (
                          <div
                            className={style.itemm}
                            onClick={() => {
                              handleAdd(student, "runner");

                              setClickType({ ...clickType, runner: false });
                            }}
                          >
                            <img
                              alt=""
                              className={style.playerImg}
                              src={
                                student?.studentProfilePhoto
                                  ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                                  : "/images/member_tab/class/default_avatar.svg"
                              }
                            />
                            <div className={style.itemtext}>
                              <div className={style.insName}>
                                <h6 className={style.playerh}>
                                  {student?.studentFirstName}{" "}
                                  {student?.studentMiddleName
                                    ? student?.studentMiddleName
                                    : " "}{" "}
                                  {student?.studentLastName}
                                </h6>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

          {matchDetailsData?.eventType !== "Intra" &&
            matchDetails?.match?.matchStatus === "Not Completed" &&
            (matchDetailsData?.gameType === "Individual" ? (
              <div className={style.winners2} style={BUTTON_WRAPPER_STYLES}>
                <div className={style.winnerRow2}>
                  {individualWinnerData.studentPlayer === "" ? (
                    <div
                      className={style.selectPlayer2}
                      onClick={() =>
                        setClickType({
                          ...clickType,
                          individual: !clickType.individual,
                        })
                      }
                    >
                      <img src="/images/sports/avatar-circle.svg" alt="" />
                      <div>
                        <h6>{t("select_player")}</h6>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`${style.itemm} ${style.itemmborder} ${style.half}`}
                    >
                      <img
                        alt=""
                        className={style.playerImg}
                        src={
                          individualWinnerDummyData.studentPlayer
                            ?.studentProfilePhoto
                            ? `${imageShowUrl}/${individualWinnerDummyData.studentPlayer?.studentProfilePhoto}`
                            : "/images/member_tab/class/default_avatar.svg"
                        }
                      />
                      <div className={style.itemtext}>
                        <div className={style.insName}>
                          <h6 className={style.playerh}>
                            {
                              individualWinnerDummyData.studentPlayer
                                ?.studentFirstName
                            }{" "}
                            {individualWinnerDummyData.studentPlayer
                              ?.studentMiddleName
                              ? individualWinnerDummyData.studentPlayer
                                  ?.studentMiddleName
                              : " "}{" "}
                            {
                              individualWinnerDummyData.studentPlayer
                                ?.studentLastName
                            }
                          </h6>
                        </div>
                      </div>
                    </div>
                  )}
                  {individualWinnerData.studentRankTitle === "" ? (
                    <div
                      className={`${style.position} ${style.positionborder}`}
                      onClick={() =>
                        setClickType({ ...clickType, rank: !clickType.rank })
                      }
                    >
                      {t("select_rank_title")}
                    </div>
                  ) : (
                    <div
                      className={`${style.position} ${style.positionborder}`}
                      onClick={() =>
                        setClickType({ ...clickType, rank: !clickType.rank })
                      }
                    >
                      {individualWinnerData.studentRankTitle}
                    </div>
                  )}
                </div>
                <div className={style.winnerRow2}>
                  <input
                    type="text"
                    placeholder={t("write_opponent_player_name")}
                    className={style.winnerRow2Input}
                    value={individualWinnerData.studentOpponentPlayer}
                    onChange={(e) => {
                      setIndividualWinnerDummyData({
                        ...individualWinnerDummyData,
                        studentOpponentPlayer: e.target.value,
                      });
                      setIndividualWinnerData({
                        ...individualWinnerData,
                        studentOpponentPlayer: e.target.value,
                      });
                    }}
                  />
                </div>

                {clickType.individual && (
                  <div style={MODAL_STYLES} className={style.options}>
                    <div
                      className={style.itemm}
                      onClick={() => {
                        setIndividualWinnerDummyData({
                          ...individualWinnerDummyData,
                          studentPlayer: matchDetailsData?.player1,
                        });
                        setIndividualWinnerData({
                          ...individualWinnerData,
                          studentPlayer: matchDetailsData?.player1?._id,
                        });
                        setClickType({ ...clickType, individual: false });
                      }}
                    >
                      <img
                        alt=""
                        className={style.playerImg}
                        src={
                          matchDetailsData?.player1?.studentProfilePhoto
                            ? `${imageShowUrl}/${matchDetailsData?.player1?.studentProfilePhoto}`
                            : "/images/member_tab/class/default_avatar.svg"
                        }
                      />
                      <div className={style.itemtext}>
                        <div className={style.insName}>
                          <h6 className={style.playerh}>
                            {matchDetailsData?.player1?.studentFirstName}{" "}
                            {matchDetailsData?.player1?.studentMiddleName
                              ? matchDetailsData?.player1?.studentMiddleName
                              : " "}{" "}
                            {matchDetailsData?.player1?.studentLastName}
                          </h6>
                        </div>
                        <p className={style.insUserName}>
                          {t("gr_no")} {matchDetailsData?.player1?.studentGRNO}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {clickType.rank && (
                  <Options
                    setIndividualWinnerData={setIndividualWinnerData}
                    individualWinnerData={individualWinnerData}
                    status="rank"
                    clickType={clickType}
                    setClickType={setClickType}
                    open={clickType.rank}
                    onClose={() => setClickType({ ...clickType, rank: false })}
                  />
                )}
              </div>
            ) : matchDetailsData?.gameType === "Team" ? (
              <div className={style.winners2} style={BUTTON_WRAPPER_STYLES}>
                <div className={style.winnerRow2}>
                  {individualWinnerData.teamPlayer === "" ? (
                    <div
                      className={style.selectPlayer2}
                      onClick={() =>
                        setClickType({
                          ...clickType,
                          team: !clickType.team,
                        })
                      }
                    >
                      <img src="/images/sports/avatar-circle.svg" alt="" />
                      <div>
                        <h6>{t("selected_team")}</h6>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`${style.itemm} ${style.itemmborder} ${style.half}`}
                    >
                      <h6
                        className={style.playerh}
                        style={{ marginTop: "0.25vw" }}
                      >
                        {
                          individualWinnerDummyData?.teamPlayer
                            ?.sportClassTeamName
                        }
                      </h6>
                    </div>
                  )}
                  {individualWinnerData.studentRankTitle === "" ? (
                    <div
                      className={`${style.position} ${style.positionborder}`}
                      onClick={() =>
                        setClickType({ ...clickType, rank: !clickType.rank })
                      }
                    >
                      {t("select_rank_title")}
                    </div>
                  ) : (
                    <div
                      className={`${style.position} ${style.positionborder}`}
                      onClick={() =>
                        setClickType({ ...clickType, rank: !clickType.rank })
                      }
                    >
                      {individualWinnerData.studentRankTitle}
                    </div>
                  )}
                </div>
                <div className={style.winnerRow2}>
                  <input
                    type="text"
                    placeholder={t("write_opponent_team_name")}
                    className={style.winnerRow2Input}
                    value={individualWinnerData.teamOpponentPlayer}
                    onChange={(e) => {
                      setIndividualWinnerDummyData({
                        ...individualWinnerDummyData,
                        teamOpponentPlayer: e.target.value,
                      });
                      setIndividualWinnerData({
                        ...individualWinnerData,
                        teamOpponentPlayer: e.target.value,
                      });
                    }}
                  />
                </div>

                {clickType.team && (
                  <div style={MODAL_STYLES} className={style.options}>
                    <div
                      className={style.itemm}
                      onClick={() => {
                        setIndividualWinnerDummyData({
                          ...individualWinnerDummyData,
                          teamPlayer: matchDetailsData?.team1,
                        });
                        setIndividualWinnerData({
                          ...individualWinnerData,
                          teamPlayer: matchDetailsData?.team1?._id,
                        });
                        setClickType({ ...clickType, team: false });
                      }}
                    >
                      <h6 className={style.playerh}>
                        {matchDetailsData?.team1?.sportClassTeamName}
                      </h6>
                    </div>
                  </div>
                )}

                {clickType.rank && (
                  <Options
                    setIndividualWinnerData={setIndividualWinnerData}
                    individualWinnerData={individualWinnerData}
                    status="rank"
                    clickType={clickType}
                    setClickType={setClickType}
                    open={clickType.rank}
                    onClose={() => setClickType({ ...clickType, rank: false })}
                  />
                )}
              </div>
            ) : (
              // <div className={style.winners}>FreeStyle</div>

              <div className={style.winners} style={BUTTON_WRAPPER_STYLES}>
                <div className={style.winnerRow}>
                  {!individualWinnerData.studentPlayer ||
                  individualWinnerData.studentPlayer === "" ? (
                    <div
                      className={`${style.position} ${style.positionborder}`}
                      onClick={() => {
                        setClickType({ ...clickType, individual: true });
                      }}
                    >
                      <img src="/images/sports/avatar-circle.svg" alt="" />
                      <div>
                        <h6>{t("select_winners")}</h6>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`${style.itemm} ${style.itemmborder} ${style.half}`}
                      onClick={() => {
                        setClickType({ ...clickType, individual: true });
                      }}
                    >
                      <img
                        alt=""
                        className={style.playerImg}
                        src={
                          individualWinnerDummyData.studentPlayer
                            ?.studentProfilePhoto
                            ? `${imageShowUrl}/${individualWinnerDummyData.studentPlayer?.studentProfilePhoto}`
                            : "/images/member_tab/class/default_avatar.svg"
                        }
                      />
                      <div className={style.itemtext}>
                        <div className={style.insName}>
                          <h6 className={style.playerh}>
                            {
                              individualWinnerDummyData.studentPlayer
                                ?.studentFirstName
                            }{" "}
                            {individualWinnerDummyData.studentPlayer
                              ?.studentMiddleName
                              ? individualWinnerDummyData.studentPlayer
                                  ?.studentMiddleName
                              : " "}{" "}
                            {
                              individualWinnerDummyData.studentWinner
                                ?.studentLastName
                            }
                          </h6>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* --------------------------------------- */}
                  {individualWinnerData.studentRankTitle === "" ? (
                    <div
                      className={`${style.position} ${style.positionborder}`}
                      onClick={() =>
                        setClickType({ ...clickType, rank: !clickType.rank })
                      }
                    >
                      {t("select_rank_title")}
                    </div>
                  ) : (
                    <div
                      className={`${style.position} ${style.positionborder}`}
                      onClick={() =>
                        setClickType({ ...clickType, rank: !clickType.rank })
                      }
                    >
                      {individualWinnerData.studentRankTitle}
                    </div>
                  )}
                </div>

                {individualWinnerDummyData.studentParticipants?.map(
                  (student) => (
                    <div
                      className={style.winnerRow}
                      style={{ marginTop: "1vw" }}
                    >
                      <div
                        className={`${style.itemm} ${style.itemmborder} ${style.half}`}
                      >
                        <img
                          alt=""
                          className={style.playerImg}
                          src={
                            student?.studentProfilePhoto
                              ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                              : "/images/member_tab/class/default_avatar.svg"
                          }
                        />
                        <div className={style.itemtext}>
                          <div className={style.insName}>
                            <h6 className={style.playerh}>
                              {student?.studentFirstName}{" "}
                              {student?.studentMiddleName
                                ? student?.studentMiddleName
                                : " "}{" "}
                              {
                                individualWinnerDummyData.studentWinner
                                  ?.studentLastName
                              }
                            </h6>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`${style.position} ${style.positionborder}`}
                      >
                        {t("participant")}
                      </div>
                    </div>
                  )
                )}

                <div className={style.winnerRow2}>
                  <input
                    type="text"
                    placeholder={t("write_opponent_player_name")}
                    className={`${style.winnerRow2Input} ${style.inputfull}`}
                    value={individualWinnerData.studentOpponentPlayer}
                    onChange={(e) => {
                      setIndividualWinnerDummyData({
                        ...individualWinnerDummyData,
                        studentOpponentPlayer: e.target.value,
                        interfree: true,
                      });
                      setIndividualWinnerData({
                        ...individualWinnerData,
                        studentOpponentPlayer: e.target.value,
                      });
                    }}
                  />
                </div>

                {clickType.individual && (
                  <div>
                    <div
                      onClick={() => {
                        setClickType({ ...clickType, individual: false });
                      }}
                      style={OVERLAY_STYLES}
                    />
                    <div style={MODAL_STYLES} className={style.options}>
                      {matchDetailsData?.freeArr?.map((student) => (
                        <div
                          className={style.itemm}
                          onClick={() => {
                            handleAdd(student, "player");
                            setClickType({ ...clickType, individual: false });
                          }}
                        >
                          <img
                            alt=""
                            className={style.playerImg}
                            src={
                              student?.studentProfilePhoto
                                ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                                : "/images/member_tab/class/default_avatar.svg"
                            }
                          />
                          <div className={style.itemtext}>
                            <div className={style.insName}>
                              <h6 className={style.playerh}>
                                {student?.studentFirstName}{" "}
                                {student?.studentMiddleName
                                  ? student?.studentMiddleName
                                  : " "}{" "}
                                {student?.studentLastName}
                              </h6>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {clickType.rank && (
                  <Options
                    setIndividualWinnerData={setIndividualWinnerData}
                    individualWinnerData={individualWinnerData}
                    status="rank"
                    clickType={clickType}
                    setClickType={setClickType}
                    open={clickType.rank}
                    onClose={() => setClickType({ ...clickType, rank: false })}
                  />
                )}
              </div>
            ))}

          {matchDetailsData?.eventType === "Intra" &&
            matchDetails?.match?.matchStatus === "Completed" &&
            (matchDetailsData?.gameType === "Individual" ? (
              <div>
                <div className={style.winnerRow}>
                  <div className={`${style.itemm} ${style.half}`}>
                    <img
                      alt=""
                      className={style.playerImg}
                      src={
                        matchDetails?.match?.sportWinner?.studentProfilePhoto
                          ? `${imageShowUrl}/${matchDetails?.match?.sportWinner?.studentProfilePhoto}`
                          : "/images/member_tab/class/default_avatar.svg"
                      }
                    />
                    <div className={style.itemtext}>
                      <div className={style.insName}>
                        <h6 className={style.playerh}>
                          {matchDetails?.match?.sportWinner?.studentFirstName}{" "}
                          {matchDetails?.match?.sportWinner?.studentMiddleName
                            ? matchDetails?.match?.sportWinner
                                ?.studentMiddleName
                            : " "}{" "}
                          {matchDetails?.match?.sportWinner?.studentLastName}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className={style.position}>
                    <p>{t("winner")}</p>
                    <img src="/images/members/one.svg" alt="" />
                  </div>
                </div>

                <div className={style.winnerRow}>
                  <div className={`${style.itemm} ${style.half}`}>
                    <img
                      alt=""
                      className={style.playerImg}
                      src={
                        matchDetails?.match?.sportRunner?.studentProfilePhoto
                          ? `${imageShowUrl}/${matchDetails?.match?.sportRunner?.studentProfilePhoto}`
                          : "/images/member_tab/class/default_avatar.svg"
                      }
                    />
                    <div className={style.itemtext}>
                      <div className={style.insName}>
                        <h6 className={style.playerh}>
                          {matchDetails?.match?.sportRunner?.studentFirstName}{" "}
                          {matchDetails?.match?.sportRunner?.studentMiddleName
                            ? matchDetails?.match?.sportRunner
                                ?.studentMiddleName
                            : " "}{" "}
                          {matchDetails?.match?.sportRunner?.studentLastName}
                        </h6>
                      </div>
                    </div>
                  </div>

                  {matchDetailsData?.matchType === "Final" && (
                    <div className={style.position}>
                      <p>{t("runner_up")}</p>
                      <img src="/images/members/two.svg" alt="" />
                    </div>
                  )}
                </div>
              </div>
            ) : matchDetailsData?.gameType === "Team" ? (
              <div>
                <div className={style.winnerRow}>
                  <div className={`${style.itemm} ${style.half}`}>
                    <h6 className={style.playerh}>
                      {matchDetails?.match?.sportWinnerTeam?.sportClassTeamName}
                    </h6>
                  </div>
                  <div className={style.position}>
                    <p>{t("winner")}</p>
                    <img src="/images/members/one.svg" alt="" />
                  </div>
                </div>

                <div className={style.winnerRow}>
                  <div className={`${style.itemm} ${style.half}`}>
                    <h6 className={style.playerh}>
                      {matchDetails?.match?.sportRunnerTeam?.sportClassTeamName}
                    </h6>
                  </div>

                  {matchDetailsData?.matchType === "Final" && (
                    <div className={style.position}>
                      <p> {t("runner_up")}</p>
                      <img src="/images/members/two.svg" alt="" />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <div className={style.winnerRow}>
                  <div className={`${style.itemm} ${style.half}`}>
                    <img
                      alt=""
                      className={style.playerImg}
                      src={
                        matchDetails?.match?.sportWinner?.studentProfilePhoto
                          ? `${imageShowUrl}/${matchDetails?.match?.sportWinner?.studentProfilePhoto}`
                          : "/images/member_tab/class/default_avatar.svg"
                      }
                    />
                    <div className={style.itemtext}>
                      <div className={style.insName}>
                        <h6 className={style.playerh}>
                          {matchDetails?.match?.sportWinner?.studentFirstName}{" "}
                          {matchDetails?.match?.sportWinner?.studentMiddleName
                            ? matchDetails?.match?.sportWinner
                                ?.studentMiddleName
                            : " "}{" "}
                          {matchDetails?.match?.sportWinner?.studentLastName}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className={style.position}>
                    <p>{t("winner")}</p>
                    <img src="/images/members/one.svg" alt="" />
                  </div>
                </div>

                <div className={style.winnerRow}>
                  <div className={`${style.itemm} ${style.half}`}>
                    <img
                      alt=""
                      className={style.playerImg}
                      src={
                        matchDetails?.match?.sportRunner?.studentProfilePhoto
                          ? `${imageShowUrl}/${matchDetails?.match?.sportRunner?.studentProfilePhoto}`
                          : "/images/member_tab/class/default_avatar.svg"
                      }
                    />
                    <div className={style.itemtext}>
                      <div className={style.insName}>
                        <h6 className={style.playerh}>
                          {matchDetails?.match?.sportRunner?.studentFirstName}{" "}
                          {matchDetails?.match?.sportRunner?.studentMiddleName
                            ? matchDetails?.match?.sportRunner
                                ?.studentMiddleName
                            : " "}{" "}
                          {matchDetails?.match?.sportRunner?.studentLastName}
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className={style.position}>
                    <p>{t("runner_up")}</p>
                    <img src="/images/members/two.svg" alt="" />
                  </div>
                </div>

                {matchDetails?.match?.sportParticipants?.map((student) => (
                  <div className={style.winnerRow}>
                    <div className={`${style.itemm} ${style.half}`}>
                      <img
                        alt=""
                        className={style.playerImg}
                        src={
                          student?.studentProfilePhoto
                            ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                            : "/images/member_tab/class/default_avatar.svg"
                        }
                      />
                      <div className={style.itemtext}>
                        <div className={style.insName}>
                          <h6 className={style.playerh}>
                            {student?.studentFirstName}{" "}
                            {student?.studentMiddleName
                              ? student?.studentMiddleName
                              : " "}{" "}
                            {student?.studentLastName}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className={style.position}>
                      <p style={{ textAlign: "right" }}>Participant</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}

          {matchDetailsData?.eventType !== "Intra" &&
            matchDetails?.match?.matchStatus === "Completed" &&
            (matchDetailsData?.gameType === "Individual" ? (
              <div>
                <div className={style.winnerRow}>
                  <div className={`${style.itemm} ${style.half}`}>
                    <img
                      alt=""
                      className={style.playerImg}
                      src={
                        matchDetails?.match?.sportPlayer1?.studentProfilePhoto
                          ? `${imageShowUrl}/${matchDetails?.match?.sportPlayer1?.studentProfilePhoto}`
                          : "/images/member_tab/class/default_avatar.svg"
                      }
                    />
                    <div className={style.itemtext}>
                      <div className={style.insName}>
                        <h6 className={style.playerh}>
                          {matchDetails?.match?.sportPlayer1?.studentFirstName}{" "}
                          {matchDetails?.match?.sportPlayer1?.studentMiddleName
                            ? matchDetails?.match?.sportPlayer1
                                ?.studentMiddleName
                            : " "}{" "}
                          {matchDetails?.match?.sportPlayer1?.studentLastName}
                        </h6>
                      </div>
                    </div>
                  </div>
                  {matchDetails?.match?.rankMatch === "Winner" ? (
                    <div className={style.position}>
                      <p>{t("winner")}</p>
                      <img src="/images/members/one.svg" alt="" />
                    </div>
                  ) : matchDetails?.match?.rankMatch === "Runner" ? (
                    <div className={style.position}>
                      <p>{t("runner_up")}</p>
                      <img src="/images/members/two.svg" alt="" />
                    </div>
                  ) : matchDetails?.match?.rankMatch === "Participant" ? (
                    <div className={style.position}>
                      <p>{t("participant")}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ) : matchDetailsData?.gameType === "Team" ? (
              <div className={style.winnerRow}>
                <div className={`${style.itemm} ${style.half}`}>
                  <h6 className={style.playerh}>
                    {matchDetails?.match?.sportTeam1?.sportClassTeamName}
                  </h6>
                </div>
                {matchDetails?.match?.rankMatch === "Winner" ? (
                  <div className={style.position}>
                    <p>{t("winner")}</p>
                    <img src="/images/members/one.svg" alt="" />
                  </div>
                ) : matchDetails?.match?.rankMatch === "Runner" ? (
                  <div className={style.position}>
                    <p>{t("runner_up")}</p>
                    <img src="/images/members/two.svg" alt="" />
                  </div>
                ) : matchDetails?.match?.rankMatch === "Participant" ? (
                  <div className={style.position}>
                    <p>{t("participant")}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <div>
                {matchDetails?.match?.sportWinner && (
                  <div className={style.winnerRow}>
                    <div className={`${style.itemm} ${style.half}`}>
                      <img
                        alt=""
                        className={style.playerImg}
                        src={
                          matchDetails?.match?.sportWinner?.studentProfilePhoto
                            ? `${imageShowUrl}/${matchDetails?.match?.sportWinner?.studentProfilePhoto}`
                            : "/images/member_tab/class/default_avatar.svg"
                        }
                      />
                      <div className={style.itemtext}>
                        <div className={style.insName}>
                          <h6 className={style.playerh}>
                            {matchDetails?.match?.sportWinner?.studentFirstName}{" "}
                            {matchDetails?.match?.sportWinner?.studentMiddleName
                              ? matchDetails?.match?.sportWinner
                                  ?.studentMiddleName
                              : " "}{" "}
                            {matchDetails?.match?.sportWinner?.studentLastName}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className={style.position}>
                      <p>{t("winner")}</p>
                      <img src="/images/members/one.svg" alt="" />
                    </div>
                  </div>
                )}

                {matchDetails?.match?.sportRunner && (
                  <div className={style.winnerRow}>
                    <div className={`${style.itemm} ${style.half}`}>
                      <img
                        alt=""
                        className={style.playerImg}
                        src={
                          matchDetails?.match?.sportRunner?.studentProfilePhoto
                            ? `${imageShowUrl}/${matchDetails?.match?.sportRunner?.studentProfilePhoto}`
                            : "/images/member_tab/class/default_avatar.svg"
                        }
                      />
                      <div className={style.itemtext}>
                        <div className={style.insName}>
                          <h6 className={style.playerh}>
                            {matchDetails?.match?.sportRunner?.studentFirstName}{" "}
                            {matchDetails?.match?.sportRunner?.studentMiddleName
                              ? matchDetails?.match?.sportRunner
                                  ?.studentMiddleName
                              : " "}{" "}
                            {matchDetails?.match?.sportRunner?.studentLastName}
                          </h6>
                        </div>
                      </div>
                    </div>

                    <div className={style.position}>
                      <p>{t("runner_up")}</p>
                      <img src="/images/members/two.svg" alt="" />
                    </div>
                  </div>
                )}

                {matchDetails?.match?.sportParticipants?.map((student) => (
                  <div className={style.winnerRow}>
                    <div className={`${style.itemm} ${style.half}`}>
                      <img
                        alt=""
                        className={style.playerImg}
                        src={
                          student?.studentProfilePhoto
                            ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                            : "/images/member_tab/class/default_avatar.svg"
                        }
                      />
                      <div className={style.itemtext}>
                        <div className={style.insName}>
                          <h6 className={style.playerh}>
                            {student?.studentFirstName}{" "}
                            {student?.studentMiddleName
                              ? student?.studentMiddleName
                              : " "}{" "}
                            {student?.studentLastName}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className={style.position}>
                      <p style={{ textAlign: "right" }}>{t("participant")}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      )}

      {openModal &&
        sportsEventDetails?.event?.sportEventCategory === "Intra" && (
          <CreateIntraMatchModal
            openModal={openModal}
            eventId={eventId}
            hideModal={(w) => setOpenModal(w)}
            sportClass={sportClass}
            refetch={onRefetchWhenClassCreated}
            sportDepartId={sportDepartId}
          />
        )}

      {openModal &&
        sportsEventDetails?.event?.sportEventCategory !== "Intra" && (
          <CreateInterMatchModal
            openModal={openModal}
            eventId={eventId}
            hideModal={(w) => setOpenModal(w)}
            sportClass={sportClass}
            refetch={onRefetchWhenClassCreated}
            sportDepartId={sportDepartId}
          />
        )}

      {loading && (
        <div className={style.loadingOverLay}>
          <img src="/images/loader-transperant.svg" alt="" />
        </div>
      )}
      <Snackbar
        open={openSanckBar}
        autoHideDuration={3000}
        onClose={() => setOpenSanckBar(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {t("result_updated")}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SportEventDetails;

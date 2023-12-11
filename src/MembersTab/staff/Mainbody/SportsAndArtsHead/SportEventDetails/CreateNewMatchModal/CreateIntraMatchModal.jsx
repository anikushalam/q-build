import React from "react";
import style from "./CreateNewMatchModal.module.css";
import { Dialog } from "@mui/material";
import { useState } from "react";
import {
  useAllEventClassList,
  useCreateNewMatchIntra,
  useAllClassStudentList,
  useAllClassTeamList,
} from "../../../../../../hooks/sports/sports-api";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import { useInView } from "react-intersection-observer";
import LoaderButton from "../../../../../../Loader/LoaderButton";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  // zIndex: 1,
};

const MODAL_STYLES = {
  position: "absolute",
  left: "0",
  top: "3.2vw",
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
  open,
  onClose,
  setMatchData,
  matchData,
  status,
  classList,
  ref,
}) {
  const { t } = useTranslation();
  if (!open) return null;

  return (
    <>
      {status === "matchType" && (
        <div>
          <div onClick={onClose} style={OVERLAY_STYLES} />
          <div style={MODAL_STYLES} className={style.options}>
            <div
              className={style.option}
              onClick={() => {
                setMatchData({
                  ...matchData,
                  sportEventMatchCategoryLevel: "Other",
                });
                onClose();
              }}
            >
              {t("other")}
            </div>
            <div
              className={style.option}
              onClick={() => {
                setMatchData({
                  ...matchData,
                  sportEventMatchCategoryLevel: "Final",
                });
                onClose();
              }}
            >
              {t("final")}
            </div>
          </div>
        </div>
      )}

      {status === "gameType" && (
        <div>
          <div onClick={onClose} style={OVERLAY_STYLES} />
          <div style={MODAL_STYLES} className={style.options}>
            <div
              className={style.option}
              onClick={() => {
                setMatchData({
                  ...matchData,
                  sportEventMatchCategory: "Individual",
                });
                onClose();
              }}
            >
              {t("individual")}
            </div>
            <div
              className={style.option}
              onClick={() => {
                setMatchData({
                  ...matchData,
                  sportEventMatchCategory: "Team",
                });
                onClose();
              }}
            >
              {t("team")}
            </div>
            <div
              className={style.option}
              onClick={() => {
                setMatchData({
                  ...matchData,
                  sportEventMatchCategory: "Free Style",
                });
                onClose();
              }}
            >
              {t("free_style")}
            </div>
          </div>
        </div>
      )}

      {status === "class" && (
        <div>
          <div onClick={onClose} style={OVERLAY_STYLES} />
          <div style={MODAL_STYLES} className={style.options}>
            {classList?.map((clas, index) => (
              <div
                ref={ref}
                key={index}
                className={style.option}
                onClick={() => {
                  setMatchData({
                    ...matchData,
                    sportEventMatchClass: clas?._id,
                    sportEventMatchClassName: clas?.sportClassName,
                  });
                  onClose();
                }}
              >
                {clas?.sportClassName}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function CreateNewMatchModal({
  openModal,
  hideModal,
  sportClass,
  eventId,
  refetch,
  sportDepartId,
}) {
  const [createIntraMatch] = useCreateNewMatchIntra();

  const [isOpen, setIsOpen] = useState({
    matchType: false,
    gameType: false,
    class: false,
  });
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const [dummyData, setDummyData] = useState({
    player1: {},
    player2: {},
    team1: {},
    team2: {},
    freeArr: [],
  });
  const [index, setIndex] = useState(0);
  const [selectAll, setSelectAll] = React.useState(false);
  const [matchData, setMatchData] = useState({
    sportEventMatchName: "",
    sportEventMatchCategory: "",
    sportEventMatchDate: "",
    sportEventMatchCategoryLevel: "",
    sportEventMatchClass: "",
    sportEventMatchClassName: "",
    sportPlayerFree: [],
    sportTPlayer1: "",
    sportTPlayer2: "",
    sportInPlayer1: "",
    sportInPlayer2: "",
  });

  const { allClassStudentList } = useAllClassStudentList({
    cid: matchData.sportEventMatchClass,
    skip: !matchData.sportEventMatchClass,
  });
  const { allClassTeamList } = useAllClassTeamList({
    cid: matchData.sportEventMatchClass,
    skip: !matchData.sportEventMatchClass,
  });

  const PlayerArr1 = allClassStudentList?.student_query?.filter((item) => {
    return item?._id !== matchData.sportInPlayer1;
  });
  const PlayerArr2 = allClassStudentList?.student_query?.filter((item) => {
    return item?._id !== matchData.sportInPlayer2;
  });

  const TeamArr1 = allClassTeamList?.team_query?.filter((item) => {
    return item?._id !== matchData.sportTPlayer1;
  });
  const TeamArr2 = allClassTeamList?.team_query?.filter((item) => {
    return item?._id !== matchData.sportTPlayer2;
  });

  const [classes, setClasses] = useState([]);
  const [page, setPage] = useState(1);
  const [noMoreResults, setNoMoreResults] = useState(false);
  const [timeeout, setTimeeout] = useState(false);
  const [ref, inView] = useInView();

  const { AllEventClassList } = useAllEventClassList({
    data: {
      sid: sportDepartId,
      page: page,
    },
    skip: !sportDepartId,
  });

  useEffect(() => {
    if (AllEventClassList) {
      if (AllEventClassList?.classes?.length) {
        setClasses([...classes, ...AllEventClassList?.classes]);
      } else if (page > 1) {
        setNoMoreResults(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AllEventClassList]);

  useEffect(() => {
    if (inView) {
      if (!noMoreResults) {
        setPage(page + 1);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeout(!timeeout);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = (player) => {
    const arr = matchData.sportPlayerFree;
    const arr2 = dummyData.freeArr;
    arr.push(player?._id);
    arr2.push(player);
    setMatchData({ ...matchData, sportPlayerFree: arr });
    setDummyData({ ...dummyData, freeArr: arr2 });
  };

  const handleDeselect = (player) => {
    const arr = matchData.sportPlayerFree;
    const ar2 = dummyData.freeArr.filter((item) => {
      return item._id !== player?._id;
    });
    const index = arr.indexOf(player?._id);
    if (index > -1) {
      arr.splice(index, 1);
    }
    setMatchData({ ...matchData, sportPlayerFree: arr });
    setDummyData({ ...dummyData, freeArr: ar2 });
  };

  const handleSelectAll = () => {
    const arr = [];
    const arr2 = [];
    for (var i = 0; i < allClassStudentList?.student_query?.length; i++) {
      arr.push(allClassStudentList?.student_query[i]?._id);
      arr2.push(allClassStudentList?.student_query[i]);
    }
    setMatchData({ ...matchData, sportPlayerFree: arr });
    setDummyData({ ...dummyData, freeArr: arr2 });

    setSelectAll(true);
  };

  const handleCreate = () => {
    setLoading(true);
    createIntraMatch({
      matchData: matchData,
      eid: eventId,
    }).then((res) => {
      if (res?.data?.message) {
        setLoading(false);
        hideModal();
        refetch();
      }
    });
  };

  return (
    <Dialog open={openModal}>
      <div className={style.addDisplay}>
        {index === 0 && (
          <div>
            <div className={style.title}>
              <div />
              <h6>{t("create_new_match")}</h6>

              <img
                src="/images/close-post-icon.svg"
                alt=""
                onClick={() => hideModal(false)}
              />
            </div>
            <div className={style.content}>
              <div className={style.item}>
                <label>{t("select_sports_class")}</label>
                <div
                  className={style.inputt}
                  style={BUTTON_WRAPPER_STYLES}
                  onClick={() => setIndex(6)}
                >
                  <div>
                    {matchData.sportEventMatchClass !== "" ? (
                      <h6 onClick={() => setIsOpen({ ...isOpen, class: true })}>
                        {" "}
                        {matchData.sportEventMatchClassName}
                      </h6>
                    ) : (
                      <h6 onClick={() => setIsOpen({ ...isOpen, class: true })}>
                        {" "}
                        {t("please_select_the_sport")}
                      </h6>
                    )}
                    {isOpen.class ? (
                      <img
                        className={style.up}
                        src="/images/up-triangle-icon.svg"
                        alt=""
                      />
                    ) : (
                      <img
                        className={style.down}
                        src="/images/downn-icon.svg"
                        alt=""
                      />
                    )}
                  </div>
                  {/* <Options
                    open={isOpen.class}
                    onClose={() => setIsOpen({ ...isOpen, class: false })}
                    setMatchData={setMatchData}
                    matchData={matchData}
                    status="class"
                    classList={classes}
                    ref={ref}
                  /> */}
                </div>
              </div>

              <div className={style.input}>
                <h6>{t("match_name")}</h6>
                <input
                  type="text"
                  value={matchData.sportEventMatchName}
                  onChange={(e) => {
                    setMatchData({
                      ...matchData,
                      sportEventMatchName: e.target.value,
                    });
                  }}
                  required
                  placeholder={t("please_enter_match_name")}
                />
              </div>

              <div className={style.item}>
                <label>{t("match_type")}</label>
                <div className={style.inputt} style={BUTTON_WRAPPER_STYLES}>
                  <div>
                    {matchData.sportEventMatchCategoryLevel === "Other" ? (
                      <h6
                        onClick={() =>
                          setIsOpen({ ...isOpen, matchType: true })
                        }
                      >
                        {" "}
                        {t("other")}
                      </h6>
                    ) : matchData.sportEventMatchCategoryLevel === "Final" ? (
                      <h6
                        onClick={() =>
                          setIsOpen({ ...isOpen, matchType: true })
                        }
                      >
                        {t("final")}
                      </h6>
                    ) : (
                      <h6
                        onClick={() =>
                          setIsOpen({ ...isOpen, matchType: true })
                        }
                      >
                        {" "}
                        {t("select_match_type")}
                      </h6>
                    )}
                    {isOpen.matchType ? (
                      <img
                        className={style.up}
                        src="/images/up-triangle-icon.svg"
                        alt=""
                      />
                    ) : (
                      <img
                        className={style.down}
                        src="/images/downn-icon.svg"
                        alt=""
                      />
                    )}
                  </div>
                  <Options
                    open={isOpen.matchType}
                    onClose={() => setIsOpen({ ...isOpen, matchType: false })}
                    setMatchData={setMatchData}
                    matchData={matchData}
                    status="matchType"
                  />
                </div>
              </div>

              <div className={style.item}>
                <label>{t("game_type")}</label>
                <div className={style.inputt} style={BUTTON_WRAPPER_STYLES}>
                  <div>
                    {matchData.sportEventMatchCategory === "Individual" ? (
                      <h6
                        onClick={() => setIsOpen({ ...isOpen, gameType: true })}
                      >
                        {" "}
                        {t("individual")}
                      </h6>
                    ) : matchData.sportEventMatchCategory === "Team" ? (
                      <h6
                        onClick={() => setIsOpen({ ...isOpen, gameType: true })}
                      >
                        {t("team")}
                      </h6>
                    ) : matchData.sportEventMatchCategory === "Free Style" ? (
                      <h6
                        onClick={() => setIsOpen({ ...isOpen, gameType: true })}
                      >
                        {t("free_style")}
                      </h6>
                    ) : (
                      <h6
                        onClick={() => setIsOpen({ ...isOpen, gameType: true })}
                      >
                        {" "}
                        {t("please_select_the_game_type")}
                      </h6>
                    )}
                    {isOpen.gameType ? (
                      <img
                        className={style.up}
                        src="/images/up-triangle-icon.svg"
                        alt=""
                      />
                    ) : (
                      <img
                        className={style.down}
                        src="/images/downn-icon.svg"
                        alt=""
                      />
                    )}
                  </div>
                  <Options
                    open={isOpen.gameType}
                    onClose={() => setIsOpen({ ...isOpen, gameType: false })}
                    setMatchData={setMatchData}
                    matchData={matchData}
                    status="gameType"
                  />
                </div>
              </div>

              <div className={`${style.input} ${style.dateinput}`}>
                <h6>{t("match_date")}</h6>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={matchData.sportEventMatchDate}
                  onChange={(e) =>
                    setMatchData({
                      ...matchData,
                      sportEventMatchDate: e.target.value,
                    })
                  }
                  placeholder={t("select_event_date")}
                />
              </div>

              {matchData.sportEventMatchCategory === "Individual" &&
                matchData.sportEventMatchClass !== "" && (
                  <div>
                    {matchData.sportInPlayer1 === "" ? (
                      <div
                        onClick={() => setIndex(1)}
                        className={style.selectPlayer}
                        style={{ marginBottom: "1vw" }}
                      >
                        <img src="/images/sports/avatar-circle.svg" />
                        <div>
                          <h6>{t("add_player_one")}</h6>
                          <p>{t("search_from_joined_list")}</p>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={style.selectPlayer}
                        style={{ marginBottom: "1vw" }}
                      >
                        <img
                          className={style.selectPlayerimg}
                          alt=""
                          src={
                            dummyData?.player1?.photoId !== 0
                              ? `${imageShowUrl}/${dummyData?.player1?.studentProfilePhoto}`
                              : "/images/sports/avatar-circle.svg"
                          }
                        />

                        <div>
                          <h6>
                            {dummyData.player1?.studentFirstName}{" "}
                            {dummyData.player1?.studentMiddleName}{" "}
                            {dummyData.player1?.studentLastName}
                          </h6>
                        </div>
                      </div>
                    )}

                    {matchData.sportInPlayer2 === "" ? (
                      <div
                        className={style.selectPlayer}
                        onClick={() => setIndex(2)}
                      >
                        <img src="/images/sports/avatar-circle.svg" />
                        <div>
                          <h6>{t("add_player_two")}</h6>
                          <p>{t("search_from_joined_list")}</p>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={style.selectPlayer}
                        style={{ marginBottom: "1vw" }}
                      >
                        <img
                          className={style.selectPlayerimg}
                          alt=""
                          src={
                            dummyData?.player2?.photoId !== 0
                              ? `${imageShowUrl}/${dummyData?.player2?.studentProfilePhoto}`
                              : "/images/sports/avatar-circle.svg"
                          }
                        />
                        <div>
                          <h6>
                            <h6>
                              {dummyData.player2?.studentFirstName}{" "}
                              {dummyData.player2?.studentMiddleName}{" "}
                              {dummyData.player2?.studentLastName}
                            </h6>
                          </h6>
                        </div>
                      </div>
                    )}
                  </div>
                )}

              {matchData.sportEventMatchCategory === "Free Style" &&
                matchData.sportEventMatchClass !== "" && (
                  <div>
                    {matchData.sportPlayerFree.length > 0 ? (
                      <div className={style.players}>
                        {dummyData.freeArr?.map((item) => (
                          <div
                            className={style.selectPlayer}
                            style={{ marginBottom: "1vw" }}
                          >
                            <img
                              className={style.selectPlayerimg}
                              alt=""
                              src={
                                item?.photoId !== 0
                                  ? `${imageShowUrl}/${item?.studentProfilePhoto}`
                                  : "/images/sports/avatar-circle.svg"
                              }
                            />

                            <div>
                              <h6>
                                {item?.studentFirstName}{" "}
                                {item?.studentMiddleName}
                                {item?.studentLastName}
                              </h6>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div
                        className={style.selectPlayer}
                        style={{ marginBottom: "1vw" }}
                        onClick={() => setIndex(3)}
                      >
                        <img src="/images/sports/avatar-circle.svg" />
                        <div>
                          <h6>{t("add_players")}</h6>
                          <p> {t("search_from_joined_list")}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

              {matchData.sportEventMatchCategory === "Team" &&
                matchData.sportEventMatchClass !== "" && (
                  <div>
                    {matchData.sportTPlayer1 === "" ? (
                      <div
                        onClick={() => setIndex(4)}
                        className={style.selectPlayer}
                        style={{ marginBottom: "1vw" }}
                      >
                        <img src="/images/sports/avatar-circle.svg" />
                        <div>
                          <h6>{t("add_first_team")}</h6>
                          <p>{t("search_from_joined_list")}</p>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={style.selectPlayer}
                        style={{ marginBottom: "1vw" }}
                      >
                        <img
                          className={style.selectPlayerimg}
                          alt=""
                          src={
                            dummyData?.team1?.sportTeamPhoto
                              ? `${imageShowUrl}/${dummyData?.team1?.sportTeamPhoto}`
                              : "/images/sports/avatar-circle.svg"
                          }
                        />
                        <div>
                          <h6>{dummyData.team1?.sportClassTeamName}</h6>
                        </div>
                      </div>
                    )}

                    {matchData.sportTPlayer2 === "" ? (
                      <div
                        className={style.selectPlayer}
                        onClick={() => setIndex(5)}
                      >
                        <img src="/images/sports/avatar-circle.svg" />
                        <div>
                          <h6>{t("add_second_team")}</h6>
                          <p>{t("search_from_joined_list")}</p>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={style.selectPlayer}
                        style={{ marginBottom: "1vw" }}
                      >
                        <img
                          className={style.selectPlayerimg}
                          alt=""
                          src={
                            dummyData?.team2?.sportTeamPhoto
                              ? `${imageShowUrl}/${dummyData?.team2?.sportTeamPhoto}`
                              : "/images/sports/avatar-circle.svg"
                          }
                        />
                        <div>
                          <h6>
                            <h6>{dummyData.team2?.sportClassTeamName}</h6>
                          </h6>
                        </div>
                      </div>
                    )}
                  </div>
                )}
            </div>
          </div>
        )}

        {index === 1 && (
          <div>
            <div className={style.title}>
              <img
                src="/images/left-nav-icon.svg"
                onClick={() => setIndex(0)}
              />
              <h6>{t("select_student")}</h6>

              <div />
            </div>
            <div className={style.content}>
              {PlayerArr2?.map((player) => (
                <div
                  className={style.itemm}
                  onClick={() => {
                    setMatchData({ ...matchData, sportInPlayer1: player._id });
                    setDummyData({ ...dummyData, player1: player });
                    setIndex(0);
                  }}
                >
                  <img
                    alt=""
                    className={style.playerImg}
                    src={
                      player.studentProfilePhoto
                        ? `${imageShowUrl}/${player.studentProfilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                  />
                  <div className={style.itemtext}>
                    <div className={style.insName}>
                      <h6 className={style.playerh}>
                        {player.studentFirstName}{" "}
                        {player.studentMiddleName
                          ? player.studentMiddleName
                          : " "}{" "}
                        {player.studentLastName}
                      </h6>
                    </div>
                    <p className={style.insUserName}>
                      {t("gr_no")} {player.studentGRNO}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {index === 2 && (
          <div>
            <div className={style.title}>
              <img
                src="/images/left-nav-icon.svg"
                onClick={() => setIndex(0)}
              />
              <h6>{t("select_student")}</h6>

              <div />
            </div>
            <div className={style.content}>
              {PlayerArr1?.map((player) => (
                <div
                  className={style.itemm}
                  onClick={() => {
                    setMatchData({ ...matchData, sportInPlayer2: player._id });
                    setDummyData({ ...dummyData, player2: player });
                    setIndex(0);
                  }}
                >
                  <img
                    alt=""
                    className={style.playerImg}
                    src={
                      player.studentProfilePhoto
                        ? `${imageShowUrl}/${player.studentProfilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                  />
                  <div className={style.itemtext}>
                    <div className={style.insName}>
                      <h6 className={style.playerh}>
                        {player.studentFirstName}{" "}
                        {player.studentMiddleName
                          ? player.studentMiddleName
                          : " "}{" "}
                        {player.studentLastName}
                      </h6>
                    </div>
                    <p className={style.insUserName}>
                      {t("gr_no")} {player.studentGRNO}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {index === 3 && (
          <div>
            <div className={style.title}>
              <img
                src="/images/left-nav-icon.svg"
                onClick={() => setIndex(0)}
              />
              <h6>{t("select_students")}</h6>

              <div />
            </div>
            <div className={style.content}>
              <div className={style.counts}>
                <p>{matchData.sportPlayerFree.length} selected</p>
                <p style={{ cursor: "pointer" }} onClick={handleSelectAll}>
                  {t("select_all")}
                </p>
              </div>
              {allClassStudentList?.student_query?.map((player) => (
                <div className={style.itemmContainer}>
                  <div
                    className={style.itemm}
                    onClick={() => {
                      setMatchData({
                        ...matchData,
                        sportInPlayer2: player._id,
                      });
                      setDummyData({ ...dummyData, player2: player });
                      setIndex(0);
                    }}
                  >
                    <img
                      alt=""
                      className={style.playerImg}
                      src={
                        player.studentProfilePhoto
                          ? `${imageShowUrl}/${player.studentProfilePhoto}`
                          : "/images/member_tab/class/default_avatar.svg"
                      }
                    />
                    <div className={style.itemtext}>
                      <div className={style.insName}>
                        <h6 className={style.playerh}>
                          {player.studentFirstName}{" "}
                          {player.studentMiddleName
                            ? player.studentMiddleName
                            : " "}{" "}
                          {player.studentLastName}
                        </h6>
                      </div>
                      <p className={style.insUserName}>
                        {t("gr_no")} {player.studentGRNO}
                      </p>
                    </div>
                  </div>
                  {matchData.sportPlayerFree.includes(player?._id) ? (
                    <img
                      id="check"
                      className={style.checkbox}
                      src="/images/checkbox-icon.svg"
                      alt=""
                      onClick={() => handleDeselect(player)}
                    />
                  ) : (
                    <img
                      id="check"
                      className={style.checkbox}
                      src="/images/box-icon.svg"
                      alt=""
                      onClick={() => handleSelect(player)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {index === 4 && (
          <div>
            <div className={style.title}>
              <img
                src="/images/left-nav-icon.svg"
                onClick={() => setIndex(0)}
              />
              <h6>{t("selected_team")}</h6>

              <div />
            </div>
            <div className={style.content}>
              {TeamArr2?.map((team, index) => (
                <div
                  className={style.itemmTeam}
                  onClick={() => {
                    setMatchData({ ...matchData, sportTPlayer1: team._id });
                    setDummyData({ ...dummyData, team1: team });
                    setIndex(0);
                  }}
                >
                  {index + 1}. {team?.sportClassTeamName}
                </div>
              ))}
            </div>
          </div>
        )}

        {index === 5 && (
          <div>
            <div className={style.title}>
              <img
                src="/images/left-nav-icon.svg"
                onClick={() => setIndex(0)}
              />
              <h6>{t("selected_team")}</h6>

              <div />
            </div>
            <div className={style.content}>
              {TeamArr1.map((team, index) => (
                <div
                  className={style.itemmTeam}
                  onClick={() => {
                    setMatchData({ ...matchData, sportTPlayer2: team._id });
                    setDummyData({ ...dummyData, team2: team });
                    setIndex(0);
                  }}
                >
                  {index + 1}. {team?.sportClassTeamName}
                </div>
              ))}
            </div>
          </div>
        )}

        {index === 6 && (
          <div>
            <div className={style.title}>
              <img
                src="/images/left-nav-icon.svg"
                onClick={() => {
                  setIndex(0);
                  setIsOpen({ ...isOpen, class: false });
                }}
              />
              <h6>{t("select_sport")}</h6>

              <div />
            </div>
            <div className={style.contentt}>
              {classes?.map((clas, index) => (
                <div
                  className={style.sportitem}
                  ref={ref}
                  key={index}
                  onClick={() => {
                    matchData.sportEventMatchClass === clas?._id
                      ? setMatchData({
                          ...matchData,
                          sportEventMatchClass: clas?._id,
                          sportEventMatchClassName: clas?.sportClassName,
                        })
                      : setMatchData({
                          ...matchData,
                          sportEventMatchClass: clas?._id,
                          sportInPlayer1: "",
                          sportInPlayer2: "",
                          sportPlayerFree: [],
                          sportTPlayer1: "",
                          sportTPlayer2: "",
                          sportEventMatchClassName: clas?.sportClassName,
                        });

                    // setMatchData({
                    //   ...matchData,
                    //   sportEventMatchClass: clas?._id,
                    //   sportEventMatchClassName: clas?.sportClassName,
                    // });
                    setIndex(0);
                    setIsOpen({ ...isOpen, class: false });
                  }}
                >
                  <img
                    alt="not found"
                    src={
                      clas?.photoId !== "1"
                        ? `${imageShowUrl}/${clas?.photo}`
                        : "/images/football.svg"
                    }
                    className={style.stafImg}
                  />
                  <p>{clas?.sportClassName}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={style.footer}>
          {matchData.sportEventMatchCategory &&
          matchData.sportEventMatchCategoryLevel &&
          matchData.sportEventMatchClass &&
          matchData.sportEventMatchDate &&
          matchData.sportEventMatchName &&
          ((matchData.sportInPlayer1 !== "" &&
            matchData.sportInPlayer2 !== "") ||
            matchData.sportPlayerFree.length > 0 ||
            (matchData.sportTPlayer1 !== "" &&
              matchData.sportTPlayer2 !== "")) ? (
            <button
              disabled={loading ? true : false}
              className={`${style.btn} ${style.btnActive}`}
              onClick={handleCreate}
            >
              <p> {t("create")} </p>
              {loading && <LoaderButton />}
            </button>
          ) : (
            <div className={style.btn}>
              {" "}
              <p> {t("create")} </p>{" "}
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}

export default CreateNewMatchModal;

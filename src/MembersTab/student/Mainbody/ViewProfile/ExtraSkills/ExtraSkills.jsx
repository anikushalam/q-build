import React from "react";
import style from "./ExtraSkills.module.css";
// import ComingSoon from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/ComingSoon";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import {
  useStudentExtraSkillDataQuery,
  useStudentMatchListQuery,
} from "../../../../../services/sports_and_arts/sportsAndArtsApi";
import { useState } from "react";
import { t } from "i18next";
import ElectionList from "./ElectionList";


function MidLeftCard({ event, setEventDetails, days, eventDetails, status, match, matchDetails ,setMatchDetails }) {
 

  return (
    <>
    {status === "event" && (
      <div
      className={
        eventDetails?._id === event?._id
          ? `${style.midLeftCard} ${style.midLeftCardActive}`
          : style.midLeftCard
      }
      onClick={() => setEventDetails(event)}
    >
      <img
        src={
          event?.photoId === "1"
            ? `${imageShowUrl}/${event?.sportEventProfilePhoto}`
            : "/images/ins-image.jpg"
        }
        alt=""
      />
      <div>
        <h6>{event?.sportEventName}</h6>
        <p>
          {days[new Date(event?.sportEventDate).getDay()]},{" "}
          {event?.sportEventDate}{" "}
          {event?.sportEventStatus === "Upcoming" ? (
            <span className={style.spanred}>
              ({t("upcoming")})
            </span>
          ) : (
            <span className={style.spangreen}>
              ({t("completed")})
            </span>
          )}
        </p>
      </div>
    </div>
    )}

{status === "match" && (
  <div
  className={
    matchDetails?.eventMatch?._id === match?.eventMatch?._id
      ? `${style.midLeftCard} ${style.midLeftCardActive}`
      : 
      style.midLeftCard
  }
  onClick={() => setMatchDetails(match?.match)}
>
<img
        src=
        // {
        //   event?.photoId === "1"
        //     ? `${imageShowUrl}/${event?.sportEventProfilePhoto}`
        //     : 
            "/images/ins-image.jpg"
        // }
        alt=""
      />

<div>
        <h6>{match?.match?.sportEventMatchName}</h6>
        <p>
          {days[new Date(match?.match?.sportEventMatchDate).getDay()]},{" "}
          {match?.match?.sportEventMatchDate}{" "}
          
        </p>
      </div>
</div>
)}
    
    </>
    
  );
}

function ExtraSkills({ sid,avgpoints,extraPoints, imgstatus }) {
  const [index, setIndex] = useState(0);
  const { data: studentExtraSkill } = useStudentExtraSkillDataQuery(sid);
  const [eventDetails, setEventDetails] = useState(
    studentExtraSkill?.event_query.sportEvent[0]
  );



  const { data: studentAllMatchList } = useStudentMatchListQuery({
    sid: sid,
    eid: eventDetails?._id,
    skip: !eventDetails?._id
  });
  const [matchDetails, setMatchDetails] = useState(
    studentAllMatchList?.match_query[0]
    );

    // console.info(studentAllMatchList)
  
 

  const winnerMemberIds = matchDetails?.sportWinnerTeam?.sportTeamStudent?.map(student => student?.student)


  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

      // console.info("Sid :", sid, )
        // console.info("Sid :", sid, )
  return (
    <div className={style.payroll}>
      <div className={style.skillTop}>
        <div className={style.skillTopRow}>
          <p>
            {t("total_skill")}
          </p>
          <p className={style.pdark}>{extraPoints}</p>
        </div>
        <div className={style.skillTopRow}>
          <p>
            {t("avg_skill")}
          </p>
          <p className={style.pdark}>{avgpoints}</p>
        </div>
      </div>
      {index === 0 && (
        <div className={style.matchList}>
          <div className={style.matchListTop}> 
          <p className={style.matchListp} >
            {t("elections")}
          </p>
          </div>
          <div className={style.skillMid}>
          <ElectionList sid={sid}/>
        </div>
        </div>
      )}

      {index === 0 && (
        <div className={style.matchList}>
          <div className={style.matchListTop}>
          <p className={style.matchListp} >
            {t("events")}
          </p>
          
          </div>
        <div className={style.skillMid}>
          <div className={style.skillMidLeft}>
            {studentExtraSkill?.event_query?.sportEvent?.map((event, index) => (
              <MidLeftCard
                event={event}
                key={index}
                setEventDetails={setEventDetails}
                days={days}
                eventDetails={eventDetails}
                status="event"
                
              />
            ))}
          </div>
          <div className={style.skillMidRight}>
            <div className={style.skillMidRightCard} onClick={()=> setIndex(1)}>
              <div className={style.skillMidRightCardTop}>
                <img
                className={imgstatus === "studentcatalogprofile" ? style.studentcatalogprofileimg : ""}
                  src={
                    eventDetails?.photoId === "1"
                      ? `${imageShowUrl}/${eventDetails?.sportEventProfilePhoto}`
                      : "/images/ins-image.jpg"
                  }
                  alt=""
                />

                <h6>
                  {eventDetails?.sportEventName}{" "}
                  {eventDetails?.sportEventStatus === "Upcoming" ? (
                    <span className={style.spanred}>(
                      {t("u_event")}
                    )</span>
                  ) : (
                    <span className={style.spangreen}>(
                      {t("c_event")}
                    )</span>
                  )}
                </h6>
                <div
                  className={style.skillMidRightCardTopflex}
                  style={{ display: "flex", gap: "1vw" }}
                >
                  <p>{eventDetails?.sportEventCategory} {t("event")} </p>
                  <p>
                    {t("final_match")}
                  </p>
                </div>
                <p>
                  <span className={style.pdark}> {t("date")} :</span>{" "}
                  {days[new Date(eventDetails?.sportEventDate).getDay()]},{" "}
                  {eventDetails?.sportEventDate}
                </p>
                <p>
                  <span className={style.pdark}> {t("Place")} :</span>{" "}
                  {eventDetails?.sportEventPlace}
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}


      {index === 1 && (
        <div className={style.matchList}>
          <div className={style.matchListTop}>
          <p className={style.matchListp} onClick={()=> {
            setIndex(0);
            setMatchDetails();
            }}>Back</p>
          <p className={style.matchListp}>{eventDetails?.sportEventName}</p>
          <div />
          </div>

          {studentAllMatchList?.match_query?.length > 0 ? (
          <div className={style.skillMid}>
          <div className={style.skillMidLeft}>
            {studentAllMatchList?.match_query?.map((match, index)=> (
              <MidLeftCard
              match={match}
              key={index}
              status="match"
              setMatchDetails={setMatchDetails}
              matchDetails={matchDetails}
              days={days}
              // eventDetails={eventDetails}
            />
            ))}
          </div>
          <div className={style.skillMidRight}>
          <div className={`${style.skillMidRightCard} ${style.skillMidRightCardd}`} >
              <div className={style.skillMidRightCardTop}>
                <img
                className={imgstatus === "studentcatalogprofile" ? style.studentcatalogprofileimg : ""}
                  src=
                  // {
                  //   eventDetails?.photoId === "1"
                  //     ? `${imageShowUrl}/${eventDetails?.sportEventProfilePhoto}`
                  //     : 
                      "/images/ins-image.jpg"
                  // }
                  alt=""
                />

                <h6 >
                  {matchDetails?.sportEventMatchName}{"   "}
                  {matchDetails?.matchStatus === " Not Completed" ? (
                    <span className={style.spanred}>(
                      {t("not_completed")}
                    )</span>
                  ) : (
                    <span className={style.spangreen}>{" "}(
                      {t("completted")}
                    )</span>
                  )}
                </h6>
                <div
                  className={style.skillMidRightCardTopflex}
                  style={{ display: "flex", gap: "1vw" }}
                >
                  <p>
                    <span className={style.pdark}> {t("game_type")} :</span>{" "}
                    {matchDetails?.sportEventMatchCategory}
                  </p>
                  <p>
                  <span className={style.pdark}> {t("match_type")} :</span>{" "}
                    {matchDetails?.sportEventMatchCategoryLevel}
                  </p>
                </div>
                <p>
                  <span className={style.pdark}> {t("date")} :</span>{" "}
                  {days[new Date(matchDetails?.sportEventMatchDate).getDay()]},{"  "}
                  {matchDetails?.sportEventMatchDate}
                </p>
                <p>
                  <span className={style.pdark}> {t("Place")} :</span>{" "}
                  {eventDetails?.sportEventPlace}
                </p>



                {eventDetails?.sportEventCategory === "Intra" &&
                    (matchDetails?.sportEventMatchCategory === "Individual" ? (
                      <div className={style.matcheRow}>
                        <p style={{ marginTop: "1.5vw" }}>
                          {" "}
                          <span> {t("Player_1")} :</span>{" "}
                          {matchDetails?.sportRunner?.studentFirstName}{" "}
                          {matchDetails?.sportRunner?.studentMiddleName}{" "}
                          {matchDetails?.sportRunner?.studentLastName}
                        </p>
                        <p>
                          {" "}
                          <span> {t("Player_2")} :</span>{" "}
                          {matchDetails?.sportWinner?.studentFirstName}{" "}
                          {matchDetails?.sportWinner?.studentMiddleName}{" "}
                          {matchDetails?.sportWinner?.studentLastName}
                        </p>
                      </div>
                    ) : matchDetails?.sportEventMatchCategory === "Team" ? (
                      <div className={style.matcheRow}>
                        <p style={{ marginTop: "1.5vw" }}>
                          {" "}
                          <span> {t("team_1")} :</span>{" "}
                          {matchDetails?.sportWinnerTeam?.sportClassTeamName}
                        </p>
                        <p>
                          {" "}
                          <span> {t("team_2")} :</span>{" "}
                          {matchDetails?.sportRunnerTeam?.sportClassTeamName}
                        </p>
                      </div>
                    ) : (
                      <div
                        className={`${style.matcheRow} ${style.matcheRowFlex}`}
                      >
                        <p
                          style={
                            matchDetails?.sportEventMatchCategory !== "Free Style"
                              ? { marginTop: "1.5vw" }
                              : { marginTop: "0" }
                          }
                        >
                          <span> {t("players")} : </span>{" "}
                        </p>
                        <div>
                        <p>
                          {" "}
                         
                          {matchDetails?.sportWinner?.studentFirstName}{" "}
                          {matchDetails?.sportWinner?.studentMiddleName}{" "}
                          {matchDetails?.sportWinner?.studentLastName}
                        </p>
                        <p>
                          {" "}
                         
                          {matchDetails?.sportRunner?.studentFirstName}{" "}
                          {matchDetails?.sportRunner?.studentMiddleName}{" "}
                          {matchDetails?.sportRunner?.studentLastName}
                        </p>

                        {matchDetails?.sportParticipants?.map((student, index)=> (
                          <p key={index}>
                           {student?.studentFirstName}{" "}
                           {student?.studentMiddleName}{" "}
                           {student?.studentLastName}
                        </p>
                        
                       ))}
                        </div>
                      
                      
                      </div>
                    ))}

                  {/* {data?.event?.sportEventCategory !== "Intra" &&
                    (match?.sportEventMatchCategory === "Individual" ? (
                      <div className={style.matcheRow}>
                        <p style={{ marginTop: "1.5vw" }}>
                          {" "}
                          <span>Player :</span>{" "}
                          {match?.sportPlayer1?.studentFirstName}{" "}
                          {match?.sportPlayer1?.studentMiddleName}{" "}
                          {match?.sportPlayer1?.studentLastName}
                        </p>
                      </div>
                    ) : match?.sportEventMatchCategory === "Team" ? (
                      <div className={style.matcheRow}>
                        <p style={{ marginTop: "1.5vw" }}>
                          {" "}
                          <span>Team :</span>{" "}
                          {match?.sportTeam1?.sportClassTeamName}
                        </p>
                      </div>
                    ) : (
                      <div className={style.matcheRow}>
                        <p style={{ marginTop: "1.5vw" }}>
                          <span>Players :</span>
                        </p>
                        {match?.sportFreePlayer?.map((player) => (
                          <p>Ankush Singh</p>
                        ))}
                      </div>
                    ))} */}










              </div>
             
              {eventDetails?.sportEventCategory === "Intra" && 

(matchDetails?.sportEventMatchCategory === "Individual" && sid === matchDetails?.sportWinner?._id ? (
<div className={style.skilllMidRightCardbtn}>
  {t("you_have_won")}
</div>
) : matchDetails?.sportEventMatchCategory === "Team" && winnerMemberIds?.includes(sid) ? (
<div className={style.skilllMidRightCardbtn}>
 {t("your_team_have_won")}
</div>
) : matchDetails?.sportEventMatchCategory === "Free Style" && sid === matchDetails?.sportWinner?._id ? (
<div className={style.skilllMidRightCardbtn}>
{t("you_have_won")}
</div>
) : "")
             
              
              }
              
            </div>
          </div>
        </div>
        ) : (
          <div className={style.emptyMatchList}>
            
            {t("no_match_found")}
          </div>
        )}
        </div>
     
        
        
      )}

      
    </div>
  );
}

export default ExtraSkills;

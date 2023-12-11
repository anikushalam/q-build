import React, { useEffect } from "react";
import { useState } from "react";
import style from "./SportsAndArtsHead.module.css";
import SportsAndArtsHeadProfile from "./SportsAndArtsHeadProfile/SportsAndArtsHeadProfile";
import { useFetchSportsArts } from "../../../../hooks/sports/sports-api";
import SportEventDetails from "./SportEventDetails/SportEventDetails";

function SportsAndArtsHead({ sportDepartId }) {
  const [profile, setProfile] = useState(true);
  const [eventId, setEventId] = useState("");

  const { fetchSportsArts, fetchSportsArtsRefetch } = useFetchSportsArts({
    sportId: sportDepartId,
    skip: !sportDepartId,
  });

  useEffect(() => {
    if (sportDepartId) fetchSportsArtsRefetch();
  }, [sportDepartId]);

  return (
    <>
      <div className={style.departmenthead}>
        {profile && (
          <SportsAndArtsHeadProfile
            setProfile={setProfile}
            sportArtsDetails={fetchSportsArts?.sport}
            setEventId={setEventId}
            sportArtsDetailsRefetch={fetchSportsArtsRefetch}
            sportDepartId={sportDepartId}
          />
        )}

        {!profile && (
          <SportEventDetails
            eventId={eventId}
            sportClass={fetchSportsArts?.sport?.sportClass}
            setProfile={setProfile}
            sportDepartId={sportDepartId}
          />
        )}
      </div>
    </>
  );
}

export default SportsAndArtsHead;

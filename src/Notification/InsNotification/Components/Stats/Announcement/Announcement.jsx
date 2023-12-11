import { useState } from "react";
import Body from "./Body/Body";
import Details from "./Details/Details";
// import StarBody from "./StarBody/Body";

function Announcement() {
  const [details, setDetails] = useState(false);
  const [annId, setAnnId] = useState("");
  return (
    <>
      {/* {clickItem && clickItem === 3 ?
    <>
      {!details && <StarBody Switch={(w) => setDetails(w)} setAnnId={setAnnId}/>}
    </>
    : 
    <>
      {!details && <Body Switch={(w) => setDetails(w)} setAnnId={setAnnId}/>}
    </>
    } */}
      {details ? (
        <Details annId={annId && annId} />
      ) : (
        <Body Switch={(w) => setDetails(w)} setAnnId={setAnnId} />
      )}
    </>
  );
}

export default Announcement;

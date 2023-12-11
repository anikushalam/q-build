import React from "react";
import { useState } from "react";
import Applications from "./Applications";
import JoiningCode from "./JoiningCode";
import style from "./JoiningForm.module.css";
import Options from "./Options";
import ApplicationDetails from "./ApplicationDetails";

function JoiningForm({ applicantUserName }) {
  const [index, setIndex] = useState(1);
  const [join, setJoin] = useState("");
  return (
    <div className={style.joiningForm}>
      {index === 1 && <Applications setIndex={setIndex} />}
      {index === 2 && <Options setIndex={setIndex} setJoin={setJoin} />}
      {index === 3 && (
        <JoiningCode join={join} applicantUserName={applicantUserName} />
      )}
      {index === 5 && (
        <ApplicationDetails
          setIndex={setIndex}
          applicantUserName={applicantUserName}
        />
      )}
    </div>
  );
}

export default JoiningForm;

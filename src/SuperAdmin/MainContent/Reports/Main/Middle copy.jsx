import React from "react";
import style from "./Middle.module.css";
import MiddleHead from "./MiddleHead";

// import MiddleBody from "./MiddleBody";
const Middle = ({ profileData }) => {
  const [state, setState] = React.useState();
  const dataFunction = (data) => {
    setState(data);
  };

  if (false) {
    setState(!state);
  }

  return (
    <div className={style.middlewidth}>
      <MiddleHead profileHead={profileData && profileData} />

      {/* <MiddleBody
        state={dataFunction}
        profileBody={profileData && profileData}
      /> */}
    </div>
  );
};

export default Middle;

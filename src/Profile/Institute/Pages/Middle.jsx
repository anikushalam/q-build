import React from "react";
import style from "./Middle.module.css";
import MiddleHead from "./MiddleHead";
import MiddleHeadBottom from "./MiddleHeadBottom";
import MiddleBody from "./MiddleBody";
import { useSelector } from "react-redux";
const Middle = ({ profileData }) => {
  const [state, setState] = React.useState();
  const ids = useSelector((state) => state.idChange);
  const dataFunction = (data) => {
    setState(data);
  };

  return (
    <div className={style.middlewidth}>
      <MiddleHead profileHead={profileData && profileData} />
      <MiddleHeadBottom
        data={state}
        profileBottom={profileData && profileData}
        searchId={ids?.searchProfile.id}
      />
      <MiddleBody
        state={dataFunction}
        profileBody={profileData && profileData}
      />
    </div>
  );
};

export default Middle;

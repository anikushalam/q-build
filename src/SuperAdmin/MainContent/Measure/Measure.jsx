import React from "react";
import FirstRow from "./Components/FirstRow";
import SecondRow from "./Components/SecondRow";
import ThirdRow from "./Components/ThirdRow";
import style from "./Measure.module.css";
import FourthRow from "./Components/FourthRow";

import { useTabReducer } from "./Reducers/DepartmentTab";

function Measure({ data }) {
  const [changeTab, tabHandler] = useTabReducer();

  if (false) {
    tabHandler();
  }
  return (
    <div className={style.measure}>
      <div className={style.firstRow}>
        <FirstRow first={data && data.admins} />
      </div>
      <div className={style.secondRow}>
        <SecondRow
          second={data && data.admins}
          count={data?.postCount}
          changeTab={changeTab}
        />
      </div>
      <div className={style.thirdRow}>
        <ThirdRow />
      </div>
      <div className={style.fourthRow}>
        <FourthRow />
      </div>
    </div>
  );
}

export default Measure;

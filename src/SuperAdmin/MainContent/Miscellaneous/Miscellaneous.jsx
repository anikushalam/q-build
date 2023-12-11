import React, { useState } from "react";
import style from "./Miscellaneous.module.css";
import Tab from "../InsStatus/Components/Tab";
import TabDark from "../InsStatus/Components/TabDark";
import Requests from "../InsStatus/Requests/Requests";
import GetInTouch from "./GetInTouch/GetInTouch";
import Carrier from "./Carrier/Carrier";
import Report from "./Report/Report";
import Feedback from "./Feedback/Feedback";

function Miscellaneous({ getCount }) {
  const [index, setIndex] = useState(1);

  return (
    <div className={style.insStatus}>
      <div className={style.tabs}>
        <div className={style.tab} onClick={() => setIndex(1)}>
          {index === 1 ? (
            <TabDark
              name="Get In Touch"
              img="/images/admin/subs-icon.svg"
              imgDark="/images/admin/subs-dark-icon.svg"
            />
          ) : (
            <Tab
              name="Get In Touch"
              img="/images/admin/subs-icon.svg"
              imgDark="/images/admin/subs-dark-icon.svg"
            />
          )}
        </div>

        <div className={style.tab} onClick={() => setIndex(2)}>
          {index === 2 ? (
            <TabDark
              name="Carrier"
              img="/images/admin/carrier-icon.svg"
              imgDark="/images/admin/carrier-white.svg"
            />
          ) : (
            <Tab
              name="Carrier"
              img="/images/admin/carrier-icon.svg"
              imgDark="/images/admin/carrier-white.svg"
            />
          )}
        </div>

        <div className={style.tab} onClick={() => setIndex(3)}>
          {index === 3 ? (
            <TabDark
              name="Report"
              img="/images/admin/reportt-icon.svg"
              imgDark="/images/admin/report-white.svg"
            />
          ) : (
            <Tab
              name="Report"
              img="/images/admin/reportt-icon.svg"
              imgDark="/images/admin/report-white.svg"
            />
          )}
        </div>

        <div className={style.tab} onClick={() => setIndex(4)}>
          {index === 4 ? (
            <TabDark
              name="Feedback"
              img="/images/admin/feedbackk-icon.svg"
              imgDark="/images/admin/feedback-white.svg"
            />
          ) : (
            <Tab
              name="Feedback"
              img="/images/admin/feedbackk-icon.svg"
              imgDark="/images/admin/feedback-white.svg"
            />
          )}
        </div>
      </div>

      {index === 1 && (
        <div className={style.requests}>
          <Requests
            nbr={getCount?.admins?.getTouchCount}
            text="Total Get Touch"
          />
          <GetInTouch />
        </div>
      )}

      {index === 2 && (
        <div className={style.requests}>
          <Requests
            nbr={getCount?.admins?.careerCount}
            text="Total Career"
          />
          <Carrier/>
        </div>
      )}

      {index === 3 && (
        <div className={style.requests}>
          <Requests
            nbr={getCount?.admins?.reportPostQueryCount}
            text="Total Reports"
          />
          <Report/>
        </div>
      )}

      {index === 4 && (
        <div className={style.requests}>
          <Requests
            nbr={'10'}
            text="Total Feedbacks"
          />
          <Feedback />
        </div>
      )}
    </div>
  );
}

export default Miscellaneous;

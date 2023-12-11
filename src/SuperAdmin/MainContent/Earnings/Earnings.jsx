import React, { useState } from "react";
import style from "./Earnings.module.css";
import Tab from "../InsStatus/Components/Tab";
import TabDark from "../InsStatus/Components/TabDark";
import Requests from "../InsStatus/Requests/Requests";
import Activation from "./Activation/Activation";

function Earnings({ activateQuery }) {
  const [index, setIndex] = useState(1);
  return (
    <div className={style.insStatus}>
      <div className={style.tabs}>
        <div className={style.tab} onClick={() => setIndex(1)}>
          {index === 1 ? (
            <TabDark
              name="Activation"
              img="/images/admin/internal-icon.svg"
              imgDark="/images/admin/internal-dark-icon.svg"
            />
          ) : (
            <Tab
              name="Activation"
              img="/images/admin/internal-icon.svg"
              imgDark="/images/admin/internal-dark-icon.svg"
            />
          )}
        </div>

        <div
          className={style.tab}
          //  onClick={() => setIndex(2)}
        >
          {index === 2 ? (
            <TabDark
              name="Advertisement"
              img="/images/admin/mike-icon.svg"
              imgDark="/images/admin/idcard-white-icon.svg"
            />
          ) : (
            <Tab
              name="Advertisement"
              img="/images/admin/mike-icon.svg"
              imgDark="/images/admin/idcard-white-icon.svg"
            />
          )}
        </div>

        <div
          className={style.tab}
          // onClick={() => setIndex(3)}
        >
          {index === 3 ? (
            <TabDark
              name="Applications"
              img="/images/admin/applications-icon.svg"
              imgDark="/images/admin/user-support-white-icon.svg"
            />
          ) : (
            <Tab
              name="Applications"
              img="/images/admin/applications-icon.svg"
              imgDark="/images/admin/user-support-white-icon.svg"
            />
          )}
        </div>

        <div
          className={style.tab}
          // onClick={() => setIndex(4)}
        >
          {index === 4 ? (
            <TabDark
              name="Id Card"
              img="/images/admin/idcard-icon.svg"
              imgDark="/images/admin/user-support-white-icon.svg"
            />
          ) : (
            <Tab
              name="Id Card"
              img="/images/admin/idcard-icon.svg"
              imgDark="/images/admin/user-support-white-icon.svg"
            />
          )}
        </div>

        <div
          className={style.tab}
          //  onClick={() => setIndex(5)}
        >
          {index === 5 ? (
            <TabDark
              name="E-learning"
              img="/images/admin/elearning-icon.svg"
              imgDark="/images/admin/user-support-white-icon.svg"
            />
          ) : (
            <Tab
              name="E-learning"
              img="/images/admin/elearning-icon.svg"
              imgDark="/images/admin/user-support-white-icon.svg"
            />
          )}
        </div>

        {/* <div
          className={style.tab}
          //  onClick={() => setIndex(6)}
        >
          {index === 6 ? (
            <TabDark
              name="Subscription"
              img="/images/admin/subs-icon.svg"
              imgDark="/images/admin/user-support-white-icon.svg"
            />
          ) : (
            <Tab
              name="Subscription"
              img="/images/admin/subs-icon.svg"
              imgDark="/images/admin/user-support-white-icon.svg"
            />
          )}
        </div> */}
      </div>

      {index === 1 && (
        <div className={style.requests}>
          <Requests nbr={activateQuery?.admin?.activateAccount} text="Total Activations" />
          <Activation activateData={activateQuery && activateQuery?.institute}/>
        </div>
      )}
    </div>
  );
}

export default Earnings;

import React from "react";
import Tab from "../../MembersTab/staff/Mainbody/EventAdmin/Components/Tab";
import TabDark from "../../MembersTab/staff/Mainbody/EventAdmin/Components/TabDark";
import style from "./InsEventFunction.module.css";
import { useTranslation } from "react-i18next";
import InsEvents from "./InsEvents/InsEvents";
import InsSeminars from "./InsSeminars/InsSeminars";

function InsEventFunction({
  eid,
  status,
  setStatus,
  seminarCount,
  eventCount,
}) {
  const { t } = useTranslation();

  return (
    <div className={style.admisionApplication}>
      <div className={style.admisionApplicationTop}>
        <div className={style.tabs}>
          <div className={style.tab} onClick={() => setStatus("eventFunction")}>
            {status === "eventFunction" ? (
              <TabDark
                name={t("events")}
                img="/images/internal-funds.svg"
                imgDark="/images/internal-funds-white.svg"
              />
            ) : (
              <Tab
                name={t("events")}
                img="/images/internal-funds.svg"
                imgDark="/images/internal-funds-white.svg"
              />
            )}
          </div>

          <div
            className={style.tab}
            onClick={() => setStatus("seminarFunction")}
          >
            {status === "seminarFunction" ? (
              <TabDark
                name={t("seminars")}
                img="/images/incomes.svg"
                imgDark="/images/incomes-white.svg"
              />
            ) : (
              <Tab
                name={t("seminars")}
                img="/images/incomes.svg"
                imgDark="/images/incomes-white.svg"
              />
            )}
          </div>

          <div
            className={style.tab}
            // onClick={() => setStatus("electionFunction")}
          >
            {status === "electionFunction" ? (
              <TabDark
                name={t("elections")}
                img="/images/expenses.svg"
                imgDark="/images/finance/expense-white.svg"
              />
            ) : (
              <Tab
                name={t("elections")}
                img="/images/expenses.svg"
                imgDark="/images/finance/expense-white.svg"
              />
            )}
          </div>

          <div
            className={style.tab}
            // onClick={() => setStatus("competitionFunction")}
          >
            {status === "competitionFunction" ? (
              <TabDark
                name={t("competitions")}
                img="/images/members/competition.svg"
                imgDark="/images/members/competition-white.svg"
              />
            ) : (
              <Tab
                name={t("competitions")}
                img="/images/members/competition.svg"
                imgDark="/images/members/competition-white.svg"
              />
            )}
          </div>

          <div
            className={style.tab}
            // onClick={() => setStatus("pendingFunction")}
          >
            {status === "pendingFunction" ? (
              <TabDark
                name={t("pending_fees")}
                img="/images/finance/pending-fees-tab-icon.svg"
                imgDark="/images/finance/pending-white.svg"
              />
            ) : (
              <Tab
                name={t("pending_fees")}
                img="/images/finance/pending-fees-tab-icon.svg"
                imgDark="/images/finance/pending-white.svg"
              />
            )}
          </div>

          <div
            className={style.tab}
            // onClick={() => setStatus("moderatorFunction")}
          >
            {status === "moderatorFunction" ? (
              <TabDark
                name={t("moderators")}
                img="/images/members/dsetting.svg"
                imgDark="/images/members/dept-setting.svg"
              />
            ) : (
              <Tab
                name={t("moderators")}
                img="/images/members/dsetting.svg"
                imgDark="/images/members/dept-setting.svg"
              />
            )}
          </div>
        </div>
      </div>
      <div className={style.applicationBody}>
        {status === "eventFunction" && (
          <InsEvents deptId={eid} eventCount={eventCount} />
        )}
        {status === "seminarFunction" && (
          <InsSeminars deptId={eid} seminarCount={seminarCount} />
        )}
      </div>
    </div>
  );
}

export default InsEventFunction;

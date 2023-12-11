import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Tab from "../../MembersTab/staff/Mainbody/EventAdmin/Components/Tab";
import TabDark from "../../MembersTab/staff/Mainbody/EventAdmin/Components/TabDark";
import style from "../InsEventFunction/InsEventFunction.module.css";
import InsDeptEvents from "./InsDeptEvents/InsDeptEvents";
import InsDeptSeminars from "./InsDeptSeminars/InsDeptSeminars";

function InsEventDeptFunction({ eid, status, setStatus }) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  return (
    <div className={style.admisionApplication}>
      <div className={style.admisionApplicationTop}>
        <div className={style.tabs}>
          <div className={style.tab} onClick={() => setIndex(0)}>
            {index === 0 ? (
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

          <div className={style.tab} onClick={() => setIndex(1)}>
            {index === 1 ? (
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
            // onClick={() => setIndex(2)}
          >
            {index === 2 ? (
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
            // onClick={() => setIndex(3)}
          >
            {index === 3 ? (
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
            // onClick={() => setIndex(4)}
          >
            {index === 4 ? (
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
            // onClick={() => setIndex(5)}
          >
            {index === 5 ? (
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
        {index === 0 && <InsDeptEvents deptId={eid} />}
        {index === 1 && <InsDeptSeminars deptId={eid} />}
      </div>
    </div>
  );
}

export default InsEventDeptFunction;

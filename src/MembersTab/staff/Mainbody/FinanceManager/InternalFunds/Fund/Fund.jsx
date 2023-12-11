import React from "react";
import style from "./Fund.module.css";
import Card from "../Card/Card";
import FinanceTabChangeLink from "../../FinanceTabChangeLink";

function Fund({ funds, duration, remain, carryParentState, callApi }) {
  return (
    <>
      <div>
        {duration.from !== "" && duration.to !== "" && (
          <div className={style.insFundMid}>
            <p>
              From : <span>{duration?.from}</span>
            </p>
            <p>
              From : <span>{duration?.to}</span>
            </p>
          </div>
        )}

        <div className={style.insFundBottom}>
          <Card
            amt={funds?.financeRaisedBalance}
            text="Total Raised Amount"
            img="/images/finance/total.svg"
          />
          <Card
            amt={funds?.financeSubmitBalance}
            text="Offline Collected
Amount"
            img="/images/finance/offline.svg"
          />
          <Card
            amt={(
              funds?.financeCollectedBankBalance + funds?.financeBankBalance
            )?.toFixed(2)}
            text="Online Collected
Amount"
            img="/images/finance/online.svg"
          />
          <FinanceTabChangeLink
            carryParentState={carryParentState}
            activeTab="submission"
            callApi={callApi}
          >
            <Card
              amt={funds?.financeCollectedSBalance}
              text="Collected, Not Submitted"
              img="/images/finance/notSubmitted.svg"
            />
          </FinanceTabChangeLink>
          <Card
            amt={funds?.financeExemptBalance}
            text="Exempted Amount"
            img="/images/finance/exempted.svg"
          />
          <FinanceTabChangeLink
            carryParentState={carryParentState}
            activeTab="pending"
            callApi={callApi}
          >
            <Card
              amt={remain}
              text="Remaining Amount"
              img="/images/finance/remaining.svg"
            />
          </FinanceTabChangeLink>
        </div>
      </div>
    </>
  );
}

export default Fund;

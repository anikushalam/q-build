import React, { useState } from "react";
import style from "./Payments.module.css";
import Tab from "../InsStatus/Components/Tab";
import TabDark from "../InsStatus/Components/TabDark";
import Requests from "../InsStatus/Requests/Requests";
import Institutes from "./Institutes/Institutes";
import ViewReport from "./ViewReport/ViewReport";
import InsReport from "./ViewReport/InsReport/InsReport";
import Reeferal from "./Reeferal/Reeferal";

function Payments({
  volumeQuery,
  volumeFetch,
  referralQuery,
  referralFetch,
  repay,
}) {
  const [index, setIndex] = useState(1);

  const [reportData, setReportData] = useState({
    id: "",
    bankAccountHolderName: "",
    bankAccountNumber: "",
    bankAccountType: "",
    bankAccountPhoneNumber: "",
    name: "",
    insName: "",
    bankIfscCode: "",
    paymentBankStatus: "",
    repayArray: [],
  });

  return (
    <div className={style.insStatus}>
      {index !== 5 && (
        <div className={style.tabs}>
          <div className={style.tab} onClick={() => setIndex(1)}>
            {index === 1 ? (
              <TabDark
                name="Institutes"
                img="/images/admin/ins-tab-icon.svg"
                imgDark="/images/admin/ins-tab-white-icon.svg"
              />
            ) : (
              <Tab
                name="Institutes"
                img="/images/admin/ins-tab-icon.svg"
                imgDark="/images/admin/ins-tab-white-icon.svg"
              />
            )}
          </div>

          <div className={style.tab} onClick={() => setIndex(2)}>
            {index === 2 ? (
              <TabDark
                name="Refferal"
                img="/images/admin/referal.svg"
                imgDark="/images/admin/referal-dark.svg"
              />
            ) : (
              <Tab
                name="Refferal"
                img="/images/admin/referal.svg"
                imgDark="/images/admin/referal-dark.svg"
              />
            )}
          </div>

          <div
            className={style.tab}
            // onClick={() => setIndex(3)}
          >
            {index === 3 ? (
              <TabDark
                name="Q coins"
                img="/images/admin/hand-coin.svg"
                imgDark="/images/admin/user-support-white-icon.svg"
              />
            ) : (
              <Tab
                name="Q coins"
                img="/images/admin/hand-coin.svg"
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
                name="ID Cards"
                img="/images/admin/idcard-icon.svg"
                imgDark="/images/admin/user-support-white-icon.svg"
              />
            ) : (
              <Tab
                name="ID Cards"
                img="/images/admin/idcard-icon.svg"
                imgDark="/images/admin/user-support-white-icon.svg"
              />
            )}
          </div>
        </div>
      )}

      {index === 1 && (
        <div className={style.requests}>
          <Requests
            nbr={repay?.admins?.returnAmount?.toFixed(4)}
            text="Total Volumes"
          />

          <Institutes
            setIndex={setIndex}
            activateVolume={volumeQuery?.institute}
            setReportData={setReportData}
            reportData={reportData}
            fetch={volumeFetch && volumeFetch}
          />
        </div>
      )}

      {index === 2 && (
        <>
          <Requests nbr={referralQuery?.user?.length} text="Total Refferal" />
          <Reeferal referralArray={referralQuery?.user} fetch={referralFetch} />
        </>
      )}

      {index === 5 && (
        <>
          <ViewReport
            setIndex={setIndex}
            view={reportData}
            fetch={volumeFetch}
          />
          <Requests nbr={reportData?.repayArray?.length} text="Total Reports" />
          <InsReport repay={reportData?.repayArray} />
        </>
      )}
    </div>
  );
}

export default Payments;

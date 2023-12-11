import React, { useState } from "react";
import style from "./MainContent.module.css";
import Navbar from "./Navbar/Navbar";
import Measure from "./Measure/Measure";
import InsStatus from "./InsStatus/InsStatus";
import UserStatus from "./UserStatus/UserStatus";
import Support from "./Support/Support";
import Payments from "./Payments/Payments";
import Transactions from "./Transactions/Transactions";
import Earnings from "./Earnings/Earnings";
import Miscellaneous from "./Miscellaneous/Miscellaneous";
import {
  useActivateArrayQuery,
  useActivateInstituteVolumeDataQuery,
  useGetAdminDashboardQuery,
  useGetNotificationCountQuery,
  useGetPendingInstituteArrayQuery,
  useGetReferralPaymentQuery,
  useInternalPaymentFeeQuery,
} from "../../services/superAdminAPI";
import NotificationDrawer from "./NotificationDrawer/NotificationDrawer";
import { useSelector } from "react-redux";
import Posts from "./Posts/Posts";
import Reports from "./Reports/Reports";

function MainContent({ index }) {
  const [state, setState] = useState(false);
  const user_Id = localStorage.getItem("user");
  const author = useSelector((state) => state.authChange);
  var admin = `${author?.id ? author?.id : user_Id}`;
  const { data: adminQuery } = useGetAdminDashboardQuery(`${admin}`);
  const { data: requestData, refetch: requestFetch } =
    useGetPendingInstituteArrayQuery(`${admin}`);
  const { data: activateQuery } = useActivateArrayQuery(`${admin}`);
  const { data: transactionQuery } = useInternalPaymentFeeQuery();
  const { data: volumeQuery, refetch: volumeFetch } =
    useActivateInstituteVolumeDataQuery(`${admin}`);
  const { data: referralQuery, refetch: referralFetch } =
    useGetReferralPaymentQuery(`${admin}`);
  const { data: countQuery } = useGetNotificationCountQuery();
  return (
    <div className={style.MainContent}>
      {state && <NotificationDrawer state={state} setState={setState} />}
      <Navbar setState={setState} nCount={countQuery && countQuery} />
      {index === 1 && <Measure data={adminQuery && adminQuery} />}
      {index === 2 && (
        <InsStatus
          requestData={requestData && requestData}
          requestFetch={requestFetch && requestFetch}
          instituteCount={adminQuery?.admins.instituteCount}
        />
      )}
      {index === 3 && (
        <UserStatus
          count={adminQuery && adminQuery}
        />
      )}
      {index === 4 && (
        <Payments
          volumeQuery={volumeQuery && volumeQuery}
          volumeFetch={volumeFetch && volumeFetch}
          referralQuery={referralQuery && referralQuery}
          referralFetch={referralFetch && referralFetch}
          repay={adminQuery && adminQuery}
        />
      )}
      {index === 5 && (
        <Transactions transactionQuery={transactionQuery && transactionQuery} />
      )}
      {index === 6 && (
        <Earnings activateQuery={activateQuery && activateQuery} />
      )}
      {index === 7 && <Support />}
      {index === 8 && <Miscellaneous getCount={adminQuery && adminQuery} />}
      {index === 9 && <Posts />}
      {index === 10 && <Reports />}
    </div>
  );
}

export default MainContent;

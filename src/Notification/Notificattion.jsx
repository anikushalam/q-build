import React from "react";
import { useSelector } from "react-redux";
import CustomSuspense from "../Custom/SuspenseLoading/CustomSuspense";
const InsNotification = React.lazy(() =>
  import("./InsNotification/InsNotification")
);
const UserNotification = React.lazy(() =>
  import("./UserNotification/UserNotification")
);

function Notificattion() {
  const logged = useSelector((state) => state.idChange.loggedinAs);

  return (
    <>
      {logged === "user" ? (
        <CustomSuspense>
          <UserNotification />
        </CustomSuspense>
      ) : (
        <CustomSuspense>
          <InsNotification />
        </CustomSuspense>
      )}
    </>
  );
}

export default Notificattion;

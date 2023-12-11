import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import QLoader from "../Loader/QLoader";
const InsDashboard = React.lazy(() => import("./InsDashboard/InsDashboard"));
const UserDashboard = React.lazy(() => import("./UserDashboard/UserDashboard"));

function Dashboard() {
  const logged = useSelector((state) => state.idChange.loggedinAs);
  return (
    <Suspense fallback={<QLoader />}>
      {logged === "user" ? (
        <UserDashboard />
      ) : logged === "institute" ? (
        <InsDashboard />
      ) : (
        ""
      )}
    </Suspense>
  );
}

export default Dashboard;

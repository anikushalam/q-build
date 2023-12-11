import React from "react";
import { useSelector } from "react-redux";
import CustomSuspense from "../Custom/SuspenseLoading/CustomSuspense";
const InsEdit = React.lazy(() => import("./Institute/Pages/InsEdit"));
const UserEdit = React.lazy(() => import("./User/Pages/UserEdit"));

function Edit() {
  const logged = useSelector((state) => state.idChange.loggedinAs);

  return (
    <>
      {logged === "institute" ? (
        <CustomSuspense>
          <InsEdit />
        </CustomSuspense>
      ) : (
        <CustomSuspense>
          <UserEdit />
        </CustomSuspense>
      )}
    </>
  );
}

export default Edit;

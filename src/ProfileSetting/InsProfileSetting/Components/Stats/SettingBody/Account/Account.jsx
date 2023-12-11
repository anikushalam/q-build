import React, { useState } from "react";
import CustomSuspense from "../../../../../../Custom/SuspenseLoading/CustomSuspense";
import Recovery from "./Recovery";
const DeleteAcnt = React.lazy(() => import("./DeleteAcnt"));
function Account() {
  const [switched, setSwitched] = useState(false);
  const switchh = () => {
    setSwitched(true);
  };
  return (
    <>
      {!switched && <Recovery switchh={switchh} />}
      <CustomSuspense>{switched && <DeleteAcnt />}</CustomSuspense>
    </>
  );
}

export default Account;

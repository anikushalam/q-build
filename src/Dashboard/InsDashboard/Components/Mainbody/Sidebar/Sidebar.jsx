import React, { useState } from "react";
import SidebarTop from "./components/SidebarTop";
import SidebarBottom from "./components/SidebarBottom";
import CustomSuspense from "../../../../../Custom/SuspenseLoading/CustomSuspense";
const PostInstruction = React.lazy(() =>
  import("./components/PostInstruction")
);

function Sidebar({ status }) {
  const [displayHeight1, setDisplayHeight1] = useState(0);

  return (
    <div
      style={{
        top: displayHeight1 ? `-${displayHeight1 - 230}px` : "80px",
        position: "sticky",
      }}
    >
      <SidebarTop />
      {status === "post" && (
        <SidebarBottom setDisplayHeight1={setDisplayHeight1} />
      )}

      {(status === "newPost" ||
        status === "newAnnouncement" ||
        status === "newQuestion" ||
        status === "newPoll") && (
        <CustomSuspense>
          <PostInstruction />
        </CustomSuspense>
      )}
      {/* {status === "newAnnouncement" && <PostInstruction />} */}
    </div>
  );
}

export default Sidebar;

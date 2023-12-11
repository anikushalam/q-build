import React from "react";
import { Link, useParams } from "react-router-dom";

const LibraryTabChnageLink = ({
  carryParentState,
  activeTab,
  customStyle,
  children,
  deptId,
}) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/member/events?a=${activeTab}`}
      state={{ ...carryParentState, deptId: deptId }}
      style={{ ...customStyle }}
    >
      {children}
    </Link>
  );
};

export default LibraryTabChnageLink;

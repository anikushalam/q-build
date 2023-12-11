import React from "react";
import { Link, useParams } from "react-router-dom";

const LibraryTabChnageLink = ({
  carryParentState,
  activeTab,
  customStyle,
  children,
}) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/member/library?a=${activeTab}`}
      state={{ ...carryParentState }}
      style={{ ...customStyle }}
    >
      {children}
    </Link>
  );
};

export default LibraryTabChnageLink;

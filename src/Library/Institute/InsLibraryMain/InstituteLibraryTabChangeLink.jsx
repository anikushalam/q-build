import React from "react";
import { Link, useParams } from "react-router-dom";

const InstituteLibraryTabChangeLink = ({
  carryParentState,
  activeTab,
  customStyle,
  children,
}) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/library${activeTab}`}
      state={{ ...carryParentState }}
      style={customStyle}
    >
      {children}
    </Link>
  );
};

export default InstituteLibraryTabChangeLink;

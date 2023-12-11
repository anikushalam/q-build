import React from "react";
import { Link, useParams } from "react-router-dom";

const SiteTabChangeLink = ({
  carryParentState,
  activeTab,
  customStyle,
  children,
}) => {
  const params = useParams();
  return (
    <Link
      to={`/q/${params.username}/edit/site?a=${activeTab}`}
      state={{ ...carryParentState }}
      style={{ ...customStyle }}
    >
      {children}
    </Link>
  );
};

export default SiteTabChangeLink;

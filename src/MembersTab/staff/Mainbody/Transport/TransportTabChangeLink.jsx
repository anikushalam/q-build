import React from "react";
import { Link, useParams } from "react-router-dom";
const TransportTabChangeLink = ({
  carryParentState,
  activeTab,
  customStyle,
  children,
}) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/member/transport?a=${activeTab}`}
      state={{ ...carryParentState }}
      style={customStyle}
    >
      {children}
    </Link>
  );
};

export default TransportTabChangeLink;

import React from "react";
import { Link, useParams } from "react-router-dom";

const InstituteTransportTabChangeLink = ({
  carryParentState,
  activeTab,
  customStyle,
  children,
}) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/transport?a=${activeTab}`}
      state={{ ...carryParentState }}
      style={customStyle}
    >
      {children}
    </Link>
  );
};

export default InstituteTransportTabChangeLink;

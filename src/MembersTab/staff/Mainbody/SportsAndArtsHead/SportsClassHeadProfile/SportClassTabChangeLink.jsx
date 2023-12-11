import React from "react";
import { Link, useParams } from "react-router-dom";

const SportClassTabChangeLink = ({
  carryParentState,
  activeTab,
  customStyleOfLink,
  children,
}) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/member/sport/class/${params.cname}${
        activeTab ? `?a=${activeTab}` : ""
      }`}
      state={{ ...carryParentState }}
      style={{ ...customStyleOfLink }}
    >
      {children}
    </Link>
  );
};

export default SportClassTabChangeLink;

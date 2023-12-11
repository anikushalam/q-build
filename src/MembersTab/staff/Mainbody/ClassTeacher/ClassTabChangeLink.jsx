import React from "react";
import { Link, useParams } from "react-router-dom";

const ClassTabChangeLink = ({ carryParentState, activeTab, children }) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/member/class/${params.cname}?a=${activeTab}`}
      state={{ ...carryParentState }}
    >
      {children}
    </Link>
  );
};

export default ClassTabChangeLink;

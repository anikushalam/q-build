import React from "react";
import { Link, useParams } from "react-router-dom";

const PromoteTabChangeLink = ({ carryParentState, activeTab, children }) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/member/promote?a=${activeTab}`}
      state={{ ...carryParentState }}
    >
      {children}
    </Link>
  );
};

export default PromoteTabChangeLink;

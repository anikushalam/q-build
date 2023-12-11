import React from "react";
import { Link, useParams } from "react-router-dom";

const MentorTabChangeLink = ({ carryParentState, activeTab, children }) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/member/mentor?a=${activeTab}`}
      state={{ ...carryParentState }}
    >
      {children}
    </Link>
  );
};

export default MentorTabChangeLink;

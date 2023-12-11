import React from "react";
import { Link, useParams } from "react-router-dom";

const WardenTabChangeLink = ({ carryParentState, activeTab, children }) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/member/hostel/warden?a=${activeTab}`}
      state={{ ...carryParentState }}
    >
      {children}
    </Link>
  );
};

export default WardenTabChangeLink;

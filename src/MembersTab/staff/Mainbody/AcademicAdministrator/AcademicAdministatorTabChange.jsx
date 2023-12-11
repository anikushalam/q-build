import React from "react";
import { Link, useParams } from "react-router-dom";

const AcademicAdministatorTabChange = ({
  carryParentState,
  customStyleLink,
  activeTab,
  children,
}) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/member/administrator?a=${activeTab}`}
      state={{ ...carryParentState }}
      style={customStyleLink}
    >
      {children}
    </Link>
  );
};

export default AcademicAdministatorTabChange;

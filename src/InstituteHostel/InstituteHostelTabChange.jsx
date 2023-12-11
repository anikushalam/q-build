import React from "react";
import { Link, useParams } from "react-router-dom";

const InstituteHostelTabChangeLink = ({
  carryParentState,
  activeTab,
  children,
}) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/hostel?a=${activeTab}`}
      state={{ ...carryParentState }}
    >
      {children}
    </Link>
  );
};

export default InstituteHostelTabChangeLink;

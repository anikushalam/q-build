import React from "react";
import { Link, useParams } from "react-router-dom";

const InstituteFinanceTabChangeLink = ({
  carryParentState,
  activeTab,
  children,
}) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/finance${activeTab}`}
      state={{ ...carryParentState }}
    >
      {children}
    </Link>
  );
};

export default InstituteFinanceTabChangeLink;

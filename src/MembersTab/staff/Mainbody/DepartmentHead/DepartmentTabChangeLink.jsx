import React from "react";
import { Link, useParams } from "react-router-dom";

const DepartmentTabChangeLink = ({ carryParentState, activeTab, children }) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/member/department/${params.deptname}?a=${activeTab}`}
      state={{ ...carryParentState }}
    >
      {children}
    </Link>
  );
};

export default DepartmentTabChangeLink;

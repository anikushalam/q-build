import React from "react";
import { Link, useParams } from "react-router-dom";

const InstituteAdmissionTabChangeLink = ({
  carryParentState,
  activeTab,
  children,
}) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/admission${activeTab}`}
      state={{ ...carryParentState }}
    >
      {children}
    </Link>
  );
};

export default InstituteAdmissionTabChangeLink;

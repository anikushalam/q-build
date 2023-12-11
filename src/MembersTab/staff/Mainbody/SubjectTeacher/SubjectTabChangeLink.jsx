import React from "react";
import { Link, useParams } from "react-router-dom";

const SubjectTabChangeLink = ({
  carryParentState,
  activeTab,
  customStyleLink,
  children,
}) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/member/subject/${params.sname}?a=${activeTab}`}
      state={{ ...carryParentState }}
      style={customStyleLink}
    >
      {children}
    </Link>
  );
};

export default SubjectTabChangeLink;

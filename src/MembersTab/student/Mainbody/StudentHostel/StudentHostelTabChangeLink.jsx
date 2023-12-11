import React from "react";
import { Link, useParams } from "react-router-dom";

const StudentHostelTabChangeLink = ({
  carryParentState,
  activeTab,
  children,
}) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/member/student/hostel?a=${activeTab}`}
      state={{ ...carryParentState }}
    >
      {children}
    </Link>
  );
};

export default StudentHostelTabChangeLink;

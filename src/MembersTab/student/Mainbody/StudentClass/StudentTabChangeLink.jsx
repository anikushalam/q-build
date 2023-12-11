import React from "react";
import { Link, useParams } from "react-router-dom";

const StudentTabChangeLink = ({
  carryParentState,
  activeTab,
  customStyleLink,
  children,
}) => {
  const params = useParams();

  return (
    <>
      {activeTab === "" ? (
        <Link
          to={`/q/${params.username}/member/student/class`}
          state={{ ...carryParentState }}
          style={customStyleLink}
        >
          {children}
        </Link>
      ) : (
        <Link
          to={`/q/${params.username}/member/student/class?a=${activeTab}`}
          state={{ ...carryParentState }}
          style={customStyleLink}
        >
          {children}
        </Link>
      )}
    </>
  );
};

export default StudentTabChangeLink;

import React from "react";
import { Link, useParams } from "react-router-dom";

const AlumniTabChnageLink = ({
  carryParentState,
  activeTab,
  customStyle,
  children,
  deptId,
}) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/member/alumni?a=${activeTab}`}
      state={{ ...carryParentState, deptId: deptId }}
      style={{ ...customStyle }}
    >
      {children}
    </Link>
  );
};

export default AlumniTabChnageLink;

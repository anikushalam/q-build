import React from "react";
import { Link, useParams } from "react-router-dom";

const FinanceTabLink = ({ activeUrl, parentState, children }) => {
  const params = useParams();
  return (
    <Link
      to={`/q/${params.username}/member/staff/finance?${activeUrl}`}
      state={parentState}
    >
      {children}
    </Link>
  );
};

export default FinanceTabLink;

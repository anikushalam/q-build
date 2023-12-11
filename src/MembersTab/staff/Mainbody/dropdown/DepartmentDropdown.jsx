import React from "react";
import { Link, useParams } from "react-router-dom";
const DepartmentDropdown = ({ parentStyle, department, sid, onClose }) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/member/department/${department?.dName}`}
      state={{
        onClickValue: department,
        sid: sid,
      }}
      onClick={onClose}
    >
      <div className={parentStyle}>
        <img alt="" src="/images/members/dHead-icon.svg" />
        <h6>
          {/* {department?.dTitle} of  */}
          {department?.dName}
        </h6>
      </div>
    </Link>
  );
};

export default DepartmentDropdown;

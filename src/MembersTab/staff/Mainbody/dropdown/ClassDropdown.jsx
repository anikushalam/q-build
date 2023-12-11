import React from "react";
import { Link, useParams } from "react-router-dom";

const ClassDropdown = ({ parentStyle, classes, sid, onClose }) => {
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/member/class/${classes?.classTitle}`}
      state={{
        onClickValue: classes,
        sid: sid,
      }}
      onClick={onClose}
    >
      <div className={parentStyle}>
        <img alt="" src="/images/members/cTeacher-icon.svg" />
        <h6>
          {/* {classes?.classHeadTitle} of  */}
          {classes?.classTitle} {" - "} {`${classes?.batch?.batchName}`}
        </h6>
      </div>
    </Link>
  );
};

export default ClassDropdown;

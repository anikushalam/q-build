import React from "react";
import style from "./DepartmentSide.module.css";
import SidebarrTop from "./DepartmentSidebarrTop";
import SidebarTop from "./DepartmentSidebarTop";
import SidebarBottom from "./DepartmentSidebarBottom";

function DepartmentSide({
  deptHead,
  deptHeadDesig,
  sideRow1Heading,
  sideRow2Heading,
  sideRow1para,
  sideRow2para,
  sideRow1Count,
  sideRow2Count,
  insName,
}) {
  return (
    <div className={style.deptside}>
      <SidebarrTop insName={insName} />
      <SidebarTop />
      <div className={style.deptsidebottom}>
        <SidebarBottom
          deptHead={deptHead}
          deptHeadDesig={deptHeadDesig}
          sideRow1Heading={sideRow1Heading}
          sideRow2Heading={sideRow2Heading}
          sideRow1para={sideRow1para}
          sideRow2para={sideRow2para}
          sideRow1Count={sideRow1Count}
          sideRow2Count={sideRow2Count}
        />
      </div>
    </div>
  );
}

export default DepartmentSide;

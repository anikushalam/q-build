import React from "react";
import style from "./DepartmentSidebarBottom.module.css";
import Avatar from "@mui/material/Avatar";
import { imageShowUrl } from "../../../services/BaseUrl";

function Item({ Heading, para, Count }) {
  return (
    <div className={style.item}>
      <div className={style.itemText}>
        <h6 className={style.itemTexth}>{Heading}</h6>
        <p className={style.itemTextp}> {para}</p>
      </div>
      <h6 className={style.itemTextcount}>{Count}</h6>
    </div>
  );
}

function SidebarBottom({
  deptHead,
  deptHeadDesig,
  sideRow1Heading,
  sideRow2Heading,
  sideRow1para,
  sideRow2para,
  sideRow1Count,
  sideRow2Count,
}) {
  return (
    <div className={style.sidebarBottom}>
      <div className={style.sidebarBottomTop}>
        <h6 className={style.sidebarBottomtoph}>{deptHead}</h6>
        <p className={style.sidebarBottomtopp}>{deptHeadDesig}</p>
      </div>
      <Item
        Heading={sideRow1Heading}
        para={sideRow1para}
        Count={sideRow1Count}
      />
      <Item
        Heading={sideRow2Heading}
        para={sideRow2para}
        Count={sideRow2Count}
      />
    </div>
  );
}

export default SidebarBottom;

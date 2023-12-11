import React from "react";
import ClassCard from "./ClassCard";
const ClassList = ({ classes, carryParentState, isView }) => {
  return (
    <>
      {classes?.map((cls) => (
        <ClassCard
          cls={cls}
          key={cls?._id}
          carryParentState={carryParentState}
          isView={isView}
        />
      ))}
    </>
  );
};

export default ClassList;

import React from "react";
import SubjectCard from "./SubjectCard";
const SubjectList = ({
  subjects,
  carryParentState,
  isView,
  cid,
  instituteId,
  did,
  onRefetch,
}) => {
  return (
    <>
      {subjects?.map((sub) => (
        <SubjectCard
          sub={sub}
          key={sub?._id}
          carryParentState={carryParentState}
          isView={isView}
          cid={cid}
          instituteId={instituteId}
          did={did}
          onRefetch={onRefetch}
        />
      ))}
    </>
  );
};

export default SubjectList;

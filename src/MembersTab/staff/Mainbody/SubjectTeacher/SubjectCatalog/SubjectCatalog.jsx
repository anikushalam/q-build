import React from "react";
import SubjectAllStudent from "./SubjectAllStudent";
import SubjectBatchAllStudent from "./SubjectBatchAllStudent";

function SubjectCatalog({ cid, bid, isDepartment, sid }) {
  return (
    <>
      {bid ? (
        <SubjectBatchAllStudent
          bid={bid}
          isDepartment={isDepartment}
          sid={sid}
        />
      ) : (
        <SubjectAllStudent cid={cid} isDepartment={isDepartment} sid={sid} />
      )}
    </>
  );
}

export default SubjectCatalog;

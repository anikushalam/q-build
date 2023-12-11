import React, { useState } from "react";
import ClassListBatchWise from "./ClassListBatchWise";
import AddStudentByClassCatalog from "./AddStudentByClassCatalog";

const AddStudentInBatch = ({ batchId, onClose, onRefetch, masterBatchId }) => {
  const [activeState, setActiveState] = useState("CLASSES");
  const [clsId, setClsId] = useState("");

  const onGrab = (data) => {
    setClsId(data);
    setActiveState("STUDENT");
  };

  return (
    <>
      {activeState === "CLASSES" ? (
        <ClassListBatchWise
          batchId={masterBatchId}
          onClose={onClose}
          onGrab={onGrab}
        />
      ) : (
        <AddStudentByClassCatalog
          cid={clsId?._id}
          onClose={() => setActiveState("CLASSES")}
          onCloseParent={onClose}
          onRefetch={onRefetch}
          batchId={batchId}
        />
      )}
    </>
  );
};

export default AddStudentInBatch;

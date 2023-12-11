import React, { useEffect, useState } from "react";
import ClassList from "../PromoteDepartment/Department/ClassList";
import { useAllClass } from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import QvipleLoading from "../../../../Loader/QvipleLoading";

const AdministratorClass = ({ carryParentState, batchId }) => {
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { allClass, allClassRefetch } = useAllClass({
    bid: batchId,
    skip: !batchId,
  });

  useEffect(() => {
    if (allClass?.batch?.classroom) {
      setShowingDataLoading(false);
    }
  }, [allClass?.batch?.classroom]);

  useEffect(() => {
    if (batchId) allClassRefetch();
  }, [batchId, allClassRefetch]);
  return (
    <>
      <ClassList
        classes={allClass?.batch?.classroom ?? []}
        carryParentState={carryParentState}
        isView="ADMINISTRATOR"
      />
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default AdministratorClass;

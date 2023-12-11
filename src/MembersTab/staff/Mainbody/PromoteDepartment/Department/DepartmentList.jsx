import React from "react";
import { useAllDepartmentCondition } from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import DepartmentCard from "./DepartmentCard";
const DepartmentList = ({ instituteId, carryParentState }) => {
  const [showingDataLoading, setShowingDataLoading] = React.useState(true);
  const { allDepartment, allDepartmentRefetch } = useAllDepartmentCondition({
    id: instituteId,
    skip: !instituteId,
  });

  React.useEffect(() => {
    if (instituteId) allDepartmentRefetch();
  }, [instituteId, allDepartmentRefetch]);
  React.useEffect(() => {
    if (
      allDepartment?.institute?.depart?.length === 0 ||
      allDepartment?.institute?.depart
    ) {
      setShowingDataLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDepartment?.institute?.depart]);

  return (
    <>
      {allDepartment?.institute?.depart?.map((department) => (
        <DepartmentCard
          carryParentState={carryParentState}
          department={department}
          key={department?._id}
        />
      ))}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default DepartmentList;

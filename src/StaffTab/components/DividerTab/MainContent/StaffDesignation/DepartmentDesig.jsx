import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAllDepartment } from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import DepartmentDesigCard from "./Cards/DepartmentDesigCard";

const DepartmentDesig = ({ currentSid }) => {
  const id = useSelector((state) => state.idChange.id);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { allDepartment, allDepartmentRefetch } = useAllDepartment({
    id: id,
    skip: !id,
  });
  useEffect(() => {
    if (allDepartment?.institute?.depart) {
      setShowingDataLoading(false);
    }
  }, [allDepartment?.institute?.depart]);

  useEffect(() => {
    if (id) allDepartmentRefetch();
  }, [id, allDepartmentRefetch]);

  return (
    <>
      {allDepartment?.institute?.depart?.map((depart, index) =>
        allDepartment?.institute?.depart?.length === index + 1 ? (
          <DepartmentDesigCard
            depart={depart}
            key={depart?._id}
            customStyleContainer={{
              border: "none",
            }}
            currentSid={currentSid}
          />
        ) : (
          <DepartmentDesigCard
            depart={depart}
            key={depart?._id}
            currentSid={currentSid}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default DepartmentDesig;

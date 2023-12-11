import React, { useEffect, useState } from "react";
import style from "./UnsolvedList.module.css";
import { useStudentComplaintList } from "../../../../../hooks/institute/institute-staff-student-api";
import { useSelector } from "react-redux";
import ComplaintItem from "./ComplaintItem";
import QvipleLoading from "../../../../../Loader/QvipleLoading";

function UnsolvedList({
  setComplaintId,
  setShowDetails,
  complaintId,
  refetchStatus,
  setRefetchStatus,
}) {
  const id = useSelector((state) => state.idChange.id);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { studentComplaintList, studentComplaintListRefetch } =
    useStudentComplaintList({
      data: {
        id: id,
        status: "Unsolved",
      },
      skip: !id,
    });

  useEffect(() => {
    if (id || refetchStatus.unsolved) {
      setShowingDataLoading(true);
      studentComplaintListRefetch();
      setRefetchStatus((prev) => ({
        ...prev,
        unsolved: false,
      }));
    }
  }, [id, refetchStatus.unsolved, studentComplaintListRefetch]);
  useEffect(() => {
    if (studentComplaintList?.complaints) setShowingDataLoading(false);
  }, [studentComplaintList?.complaints]);
  useEffect(() => {
    setTimeout(() => setShowingDataLoading(false), 2000);
  }, []);
  return (
    <div className={style.list}>
      {studentComplaintList?.complaints?.map((complaint, index) => (
        <ComplaintItem
          key={index}
          setComplaintId={setComplaintId}
          setShowDetails={setShowDetails}
          complaint={complaint}
          complaintId={complaintId}
        />
      ))}
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
}

export default UnsolvedList;

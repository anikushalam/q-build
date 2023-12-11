import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useStudentComplaintList } from "../../../../../hooks/institute/institute-staff-student-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import ComplaintItem from "./ComplaintItem";
import style from "./UnsolvedList.module.css";

function SolvedList({
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
        status: "Solved",
      },
      skip: !id,
    });

  useEffect(() => {
    if (id || refetchStatus.solved) {
      setShowingDataLoading(true);
      studentComplaintListRefetch();
      setRefetchStatus((prev) => ({
        ...prev,
        solved: false,
      }));
    }
  }, [id, refetchStatus.solved, studentComplaintListRefetch]);
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

export default SolvedList;

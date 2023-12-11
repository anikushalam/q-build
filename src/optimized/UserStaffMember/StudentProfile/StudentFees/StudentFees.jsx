import UserMemberContentWrapper from "@/Ui/UserMember/UserMemberContentWrapper";
import React from "react";
import StudentFeesHeader from "./StudentFeesHeader";
import { useSearchParams } from "react-router-dom";
import StudentAdmissionFees from "./StudentAdmissionFees";
import StudentInternalFees from "./StudentInternalFees/StudentInternalFees";

const StudentFees = ({ sid, isFeesData }) => {
  const [searchParams] = useSearchParams();

  return (
    <>
      <UserMemberContentWrapper
        customStyle={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <StudentFeesHeader sid={sid} />
      </UserMemberContentWrapper>
      <UserMemberContentWrapper
        customStyle={{
          padding: "1.5rem 5rem",
        }}
      >
        {!searchParams.get("n") ? (
          <StudentAdmissionFees isFeesData={isFeesData} sid={sid} />
        ) : (
          <StudentInternalFees sid={sid} />
        )}
      </UserMemberContentWrapper>
    </>
  );
};

export default StudentFees;

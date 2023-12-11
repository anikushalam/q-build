import { useStudentAllDesignationList } from "@/Hooks/ApiHooks/UserMember/user-member-api";
import UserStudentDesignationCard from "./UserStudentDesignationCard";

const UserStudentDesignation = ({ sid }) => {
  const { studentAllDesignationList, studentAllDesignationListLoading } =
    useStudentAllDesignationList({
      sid: sid,
      skip: !sid,
    });

  return (
    <>
      <UserStudentDesignationCard
        studentClass={studentAllDesignationList?.student?.studentClass}
        rollNumber={studentAllDesignationList?.student?.studentROLLNO}
      />
    </>
  );
};

export default UserStudentDesignation;

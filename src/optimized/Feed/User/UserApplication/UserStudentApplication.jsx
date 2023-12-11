import { useUserMemberAppliedAllApplicationAccount } from "@/Hooks/ApiHooks/UserMember/user-member-api";
import UserStudentApplicationCard from "./UserStudentApplicationCard";
import { useSelector } from "react-redux";

const UserStudentApplication = () => {
  const uid = useSelector((state) => state.baseChange.id);

  const {
    userMemberAppliedAllApplicationAccount,
    userMemberAppliedAllApplicationAccountLoading,
  } = useUserMemberAppliedAllApplicationAccount({
    uid: uid,
    skip: !uid,
  });

  return (
    <>
      {userMemberAppliedAllApplicationAccount?.map((appication) => (
        <UserStudentApplicationCard appication={appication} />
      ))}
    </>
  );
};

export default UserStudentApplication;

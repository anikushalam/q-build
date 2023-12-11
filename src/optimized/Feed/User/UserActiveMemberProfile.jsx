import { useUserActivatedMember } from "@/Hooks/ApiHooks/UserMember/user-member-api";
import { useSelector } from "react-redux";
import UserJoinInstitute from "./UserJoinInstitute/UserJoinInstitute";
import UserDesignation from "./UserDesignation/UserDesignation";
import { useTranslation } from "react-i18next";
import UserStudentDesignation from "./UserDesignation/UserStudentDesignation";
import { memo } from "react";

const UserActiveMemberProfile = () => {
  const { t } = useTranslation();
  const uid = useSelector((state) => state.baseChange.id);
  const { userActivatedMember, userActivatedMemberRefetch } =
    useUserActivatedMember({
      data: {
        uid: uid,
        role: "",
      },
      skip: !uid,
    });

  return (
    <>
      {userActivatedMember?.role?.member === "Staff" ? (
        <>
          <UserJoinInstitute
            instituteName={userActivatedMember?.role?.institute?.insName}
            institutePhoto={
              userActivatedMember?.role?.institute?.insProfilePhoto
            }
            alias={
              userActivatedMember?.role?.active_role_data?.institute
                ?.alias_pronounciation?.staff_alias ?? t("index_no")
            }
            rollNumber={
              userActivatedMember?.role?.active_role_data?.staffROLLNO
            }
            isApproved={
              userActivatedMember?.role?.active_role_data?.staffStatus
            }
            onRefetch={userActivatedMemberRefetch}
          />
          <UserDesignation sid={userActivatedMember?.role?.activeRole} />
        </>
      ) : userActivatedMember?.role?.member === "Student" ? (
        <>
          <UserJoinInstitute
            instituteName={userActivatedMember?.role?.institute?.insName}
            institutePhoto={
              userActivatedMember?.role?.institute?.insProfilePhoto
            }
            alias={
              userActivatedMember?.role?.active_role_data?.institute
                ?.alias_pronounciation?.student_alias ?? t("gr_number")
            }
            rollNumber={
              userActivatedMember?.role?.active_role_data?.studentGRNO
            }
            isApproved={
              userActivatedMember?.role?.active_role_data?.studentStatus
            }
            isStudent
            onRefetch={userActivatedMemberRefetch}
            sid={userActivatedMember?.role?.activeRole}
          />
          <UserStudentDesignation sid={userActivatedMember?.role?.activeRole} />
        </>
      ) : null}
    </>
  );
};

export default memo(UserActiveMemberProfile);

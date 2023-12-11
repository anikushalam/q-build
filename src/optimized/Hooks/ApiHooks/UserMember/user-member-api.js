import {
  useStaffAllDesignationListQuery,
  useStudentAllDesignationListQuery,
  useUserActivatedMemberQuery,
  useUserMemberAllAccountQuery,
  useUserMemberAppliedAllApplicationAccountQuery,
} from "@/Services/UserMember/userMemberApiDynamic";

export const useUserActivatedMember = (args) => {
  const { data, refetch, isLoading } = useUserActivatedMemberQuery(args.data, {
    skip: args.skip,
  });
  return {
    userActivatedMember: data,
    userActivatedMemberRefetch: refetch,
    userActivatedMemberLoading: isLoading,
  };
};

export const useStaffAllDesignationList = (args) => {
  const { data, refetch, isLoading } = useStaffAllDesignationListQuery(
    args.sid,
    { skip: args.skip }
  );
  return {
    staffAllDesignationList: data,
    staffAllDesignationListRefetch: refetch,
    staffAllDesignationListLoading: isLoading,
  };
};

export const useStudentAllDesignationList = (args) => {
  const { data, refetch, isLoading } = useStudentAllDesignationListQuery(
    args.sid,
    { skip: args.skip }
  );
  return {
    studentAllDesignationList: data,
    studentAllDesignationListRefetch: refetch,
    studentAllDesignationListLoading: isLoading,
  };
};

export const useUserMemberAllAccount = (args) => {
  const { data, refetch, isLoading } = useUserMemberAllAccountQuery(args.uid, {
    skip: args.skip,
  });
  return {
    userMemberAllAccount: data,
    userMemberAllAccountRefetch: refetch,
    userMemberAllAccountLoading: isLoading,
  };
};

export const useUserMemberAppliedAllApplicationAccount = (args) => {
  const { data, refetch, isLoading } =
    useUserMemberAppliedAllApplicationAccountQuery(args.uid, {
      skip: args.skip,
    });
  return {
    userMemberAppliedAllApplicationAccount: data,
    userMemberAppliedAllApplicationAccountRefetch: refetch,
    userMemberAppliedAllApplicationAccountLoading: isLoading,
  };
};

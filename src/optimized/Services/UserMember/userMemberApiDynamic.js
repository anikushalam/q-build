import { userMemberApi } from "./userMemberApi";
import {
  staffAllDesignationListFunction,
  studentAllDesignationListFunction,
  userActivatedMemberFunction,
  userMemberAllAccountFunction,
  userMemberAppliedAllApplicationAccountFunction,
} from "./user_member_query_mutation_function";

const userMemberApiDynamic = userMemberApi.injectEndpoints({
  endpoints: (builder) => ({
    userActivatedMember: userActivatedMemberFunction(builder),
    staffAllDesignationList: staffAllDesignationListFunction(builder),
    studentAllDesignationList: studentAllDesignationListFunction(builder),
    userMemberAllAccount: userMemberAllAccountFunction(builder),
    userMemberAppliedAllApplicationAccount:
      userMemberAppliedAllApplicationAccountFunction(builder),
  }),
});

export const {
  useUserActivatedMemberQuery,
  useStaffAllDesignationListQuery,
  useStudentAllDesignationListQuery,
  useUserMemberAllAccountQuery,
  useUserMemberAppliedAllApplicationAccountQuery,
} = userMemberApiDynamic;

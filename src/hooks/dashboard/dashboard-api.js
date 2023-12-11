import {
  useOneInstituteDashboardQuery,
  useFetchDisplayPersonQuery,
  useAddDisplayPersonMutation,
  useUpdateDisplayPersonMutation,
  useDeleteDisplayPersonMutation,
  useOneInstituteProfileQuery,
  useUpdateInstituteProfileMutation,
  useInstituteFollowersArrayQuery,
  useInstituteFollowingArrayQuery,
  useInstituteFollowingActionMutation,
  useOneUserDashboardQuery,
  useOneUserProfileQuery,
  useOneUserProfileUsernameQuery,
  useAddDailyQuoteMutation,
} from "../../services/Dashboard/dashboardApiDynamic";

export const useOneInstituteDashboard = (args) => {
  const { data: oneInstituteDashboard, refetch: oneInstituteDashboardRefetch } =
    useOneInstituteDashboardQuery(args.id, { skip: args.skip });
  return { oneInstituteDashboard, oneInstituteDashboardRefetch };
};

export const useFetchDisplayPerson = (args) => {
  const { data: fetchDisplayPerson, refetch: fetchDisplayPersonRefetch } =
    useFetchDisplayPersonQuery(args.id, { skip: args.skip });
  return { fetchDisplayPerson, fetchDisplayPersonRefetch };
};

export const useAddDisplayPerson = () => {
  const [addDisplayPerson] = useAddDisplayPersonMutation();
  return [addDisplayPerson];
};
export const useUpdateDisplayPerson = () => {
  const [updateDisplayPerson] = useUpdateDisplayPersonMutation();
  return [updateDisplayPerson];
};
export const useDeleteDisplayPerson = () => {
  const [deleteDisplayPerson] = useDeleteDisplayPersonMutation();
  return [deleteDisplayPerson];
};

export const useOneInstituteProfile = (args) => {
  const { data: oneInstituteProfile, refetch: oneInstituteProfileRefetch } =
    useOneInstituteProfileQuery(args.data, { skip: args.skip });
  return { oneInstituteProfile, oneInstituteProfileRefetch };
};

export const useUpdateInstituteProfile = () => {
  const [updateInstituteProfile] = useUpdateInstituteProfileMutation();
  return [updateInstituteProfile];
};

export const useInstituteFollowersArray = (args) => {
  const {
    data: instituteFollowersArray,
    refetch: instituteFollowersArrayRefetch,
  } = useInstituteFollowersArrayQuery(args.data, { skip: args.skip });
  return { instituteFollowersArray, instituteFollowersArrayRefetch };
};

export const useInstituteFollowingArray = (args) => {
  const {
    data: instituteFollowingArray,
    refetch: instituteFollowingArrayRefetch,
  } = useInstituteFollowingArrayQuery(args.data, { skip: args.skip });
  return { instituteFollowingArray, instituteFollowingArrayRefetch };
};

export const useInstituteFollowingAction = () => {
  const [instituteFollowingAction] = useInstituteFollowingActionMutation();
  return [instituteFollowingAction];
};

// data.following
//for user side

export const useOneUserDashboard = (args) => {
  const { data: oneUserDashboard, refetch: oneUserDashboardRefetch } =
    useOneUserDashboardQuery(args.id, { skip: args.skip });
  return { oneUserDashboard, oneUserDashboardRefetch };
};

export const useOneUserProfile = (args) => {
  const { data: oneUserProfile, refetch: oneUserProfileRefetch } =
    useOneUserProfileQuery(args.data, { skip: args.skip });
  return { oneUserProfile, oneUserProfileRefetch };
};

export const useOneUserProfileUsername = (args) => {
  const {
    data: oneUserProfileUsername,
    refetch: oneUserProfileUsernameRefetch,
  } = useOneUserProfileUsernameQuery(args.data, { skip: args.skip });
  return { oneUserProfileUsername, oneUserProfileUsernameRefetch };
};

export const useAddDailyQuote = () => {
  const [addDailyQuote] = useAddDailyQuoteMutation();
  return [addDailyQuote];
};

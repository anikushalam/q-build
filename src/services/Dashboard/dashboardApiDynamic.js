import { dashboardApi } from "./dashboardApi";
import {
  oneInstituteDashboardFunction,
  fetchDisplayPersonFunction,
  addDisplayPersonFunction,
  updateDisplayPersonFunction,
  deleteDisplayPersonFunction,
  oneInstituteProfileFunction,
  updateInstituteProfileFunction,
  instituteFollowersArrayFunction,
  instituteFollowingArrayFunction,
  instituteFollowingActionFunction,
  oneUserProfileFunction,
  oneUserProfileUsernameFunction,
  oneUserDashboardFunction,
  addDailyQuoteFunction,
} from "./dashboard_query_mutation_function";
import { deleteMethod, patchMethod, postMethod } from "../BaseUrl";
const dashboardApiDynamic = dashboardApi.injectEndpoints({
  endpoints: (builder) => ({
    oneInstituteDashboard: oneInstituteDashboardFunction(builder),
    fetchDisplayPerson: fetchDisplayPersonFunction(builder),
    addDisplayPerson: addDisplayPersonFunction(builder, postMethod),
    updateDisplayPerson: updateDisplayPersonFunction(builder, patchMethod),
    deleteDisplayPerson: deleteDisplayPersonFunction(builder, deleteMethod),
    oneInstituteProfile: oneInstituteProfileFunction(builder),
    updateInstituteProfile: updateInstituteProfileFunction(
      builder,
      patchMethod
    ),
    instituteFollowersArray: instituteFollowersArrayFunction(builder),
    instituteFollowingArray: instituteFollowingArrayFunction(builder),
    instituteFollowingAction: instituteFollowingActionFunction(
      builder,
      patchMethod
    ),
    oneUserProfile: oneUserProfileFunction(builder),
    oneUserProfileUsername: oneUserProfileUsernameFunction(builder),
    oneUserDashboard: oneUserDashboardFunction(builder),
    addDailyQuote: addDailyQuoteFunction(builder, patchMethod),
  }),
});

export const {
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
  useOneUserProfileQuery,
  useOneUserProfileUsernameQuery,
  useOneUserDashboardQuery,
  useAddDailyQuoteMutation,
} = dashboardApiDynamic;

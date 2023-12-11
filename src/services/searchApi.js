import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl, patchMethod, postMethod, session } from "./BaseUrl";
import {
  followInstituteFunction,
  followInstituteListFunction,
  followInstituteListIdFunction,
  followingInstituteListIdFunction,
  followingInstituteListFunction,
  instituteAllSearchFunction,
  instituteDepartmentSearchFunction,
  unfollowInstituteFunction,
  instituteCreateAnnouncementFunction,
  followUserListFunction,
  followingUserListFunction,
  userAllSearchFunction,
  circleUserListFunction,
  followUserFunction,
  unfollowUserFunction,
  followUserInsFunction,
  unfollowUserInsFunction,
  circleUserFunction,
  unCircleUserFunction,
  universalUserFunction,
} from "./QueryMutationFunctionSearch";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      if (session()) {
        headers.set("authorization", session());
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    instituteAllSearch: instituteAllSearchFunction(builder),
    instituteDepartmentSearch: instituteDepartmentSearchFunction(builder),
    followInstitute: followInstituteFunction(builder, patchMethod),
    unfollowInstitute: unfollowInstituteFunction(builder, patchMethod),
    followInstituteList: followInstituteListFunction(builder),
    followingInstituteList: followingInstituteListFunction(builder),
    followInstituteListId: followInstituteListIdFunction(builder),
    followingInstituteListId: followingInstituteListIdFunction(builder),
    instituteCreateAnnouncement: instituteCreateAnnouncementFunction(
      builder,
      postMethod
    ),

    followUserList: followUserListFunction(builder),
    followingUserList: followingUserListFunction(builder),
    userAllSearch: userAllSearchFunction(builder),
    followUser: followUserFunction(builder, patchMethod),
    circleUser: circleUserFunction(builder, patchMethod),
    uncircleUser: unCircleUserFunction(builder, patchMethod),
    circleUserList: circleUserListFunction(builder),
    unfollowUser: unfollowUserFunction(builder, patchMethod),
    followUserIns: followUserInsFunction(builder, patchMethod),
    unfollowUserIns: unfollowUserInsFunction(builder, patchMethod),
    universalUser: universalUserFunction(builder),
  }),
});

export const {
  useInstituteAllSearchQuery,
  useFollowInstituteMutation,
  useUnfollowInstituteMutation,
  useFollowInstituteListQuery,
  useFollowingInstituteListQuery,
  useFollowInstituteListIdQuery,
  useFollowingInstituteListIdQuery,
  useInstituteCreateAnnouncementMutation,

  useUserAllSearchQuery,
  useFollowUserListQuery,
  useFollowingUserListQuery,
  useCircleUserListQuery,
  useFollowUserMutation,
  useUnfollowUserMutation,
  useFollowUserInsMutation,
  useUnfollowUserInsMutation,
  useCircleUserMutation,
  useUncircleUserMutation,
  useUniversalUserQuery,
} = searchApi;

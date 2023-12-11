import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, patchMethod, postMethod, session } from "../BaseUrl";
import {
  instituteAllNotificationFunction,
  userAllNotificationFunction,
  activityFunction,
  activityAppliedFunction,
  activityElectionVoteFunction,
  activitySupportMemberFunction,
  activityNotifiationCountFunction,
  activityMarkViewFunction,
  activityMarkAsReadFunction,
  instituteAllGRNotificationFunction,
  instituteGRNotificationActionFunction,
} from "./activity_query_mutation_function";

export const activityApi = createApi({
  reducerPath: "activityApi",
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
    instituteAllNotification: instituteAllNotificationFunction(builder),
    userAllNotification: userAllNotificationFunction(builder),
    allActivity: activityFunction(builder),
    activityNotifiationCount: activityNotifiationCountFunction(builder),
    activityMarkView: activityMarkViewFunction(builder, patchMethod),
    activityMarkAsRead: activityMarkAsReadFunction(builder, patchMethod),
    activityElectionApplied: activityAppliedFunction(builder, postMethod),
    activityElectionVote: activityElectionVoteFunction(builder, patchMethod),
    activitySupportMember: activitySupportMemberFunction(builder),
    instituteAllGRNotification: instituteAllGRNotificationFunction(builder),
    instituteGRNotificationAction: instituteGRNotificationActionFunction(
      builder,
      patchMethod
    ),
  }),
});

export const {
  useInstituteAllNotificationQuery,
  useUserAllNotificationQuery,
  useAllActivityQuery,
  useActivityNotifiationCountQuery,
  useActivityMarkViewMutation,
  useActivityMarkAsReadMutation,
  useActivityElectionAppliedMutation,
  useActivityElectionVoteMutation,
  useActivitySupportMemberQuery,
  useInstituteAllGRNotificationQuery,
  useInstituteGRNotificationActionMutation,
} = activityApi;

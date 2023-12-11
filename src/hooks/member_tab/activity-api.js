import {
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
} from "../../services/staff_department/activityApi";

export const useInstituteAllNotification = (args) => {
  const {
    data: instituteAllNotification,
    refetch: instituteAllNotificationRefetch,
  } = useInstituteAllNotificationQuery(args.data, { skip: args.skip });
  return { instituteAllNotification, instituteAllNotificationRefetch };
};

export const useUserAllNotification = (args) => {
  const { data: userAllNotification, refetch: userAllNotificationRefetch } =
    useUserAllNotificationQuery(args.data, { skip: args.skip });
  return { userAllNotification, userAllNotificationRefetch };
};

export const useAllActivityList = (args) => {
  const { data: allActivityList, refetch: allActivityListRefetch } =
    useAllActivityQuery(args.data, { skip: args.skip });
  return { allActivityList, allActivityListRefetch };
};

export const useActivityNotifiationCount = (args) => {
  const {
    data: activityNotifiationCount,
    refetch: activityNotifiationCountRefetch,
  } = useActivityNotifiationCountQuery(args.id, { skip: args.skip });
  return { activityNotifiationCount, activityNotifiationCountRefetch };
};

export const useActivityMarkView = () => {
  const [activityMarkView] = useActivityMarkViewMutation();
  return [activityMarkView];
};

export const useActivityMarkAsRead = () => {
  const [activityMarkAsRead] = useActivityMarkAsReadMutation();
  return [activityMarkAsRead];
};

export const useActivityAppliedElection = () => {
  const [activityAppliedElection] = useActivityElectionAppliedMutation();
  return [activityAppliedElection];
};

export const useActivityElectionVote = () => {
  const [activityElectionVote] = useActivityElectionVoteMutation();
  return [activityElectionVote];
};

export const useActivitySupportMember = (args) => {
  const { data: activitySupportMember, refetch: activitySupportMemberRefetch } =
    useActivitySupportMemberQuery(args.data, { skip: args.skip });
  return { activitySupportMember, activitySupportMemberRefetch };
};

export const useInstituteAllGRNotification = (args) => {
  const {
    data: instituteAllGRNotification,
    refetch: instituteAllGRNotificationRefetch,
  } = useInstituteAllGRNotificationQuery(args.data, { skip: args.skip });
  return { instituteAllGRNotification, instituteAllGRNotificationRefetch };
};

export const useInstituteGRNotificationAction = () => {
  const [instituteGRNotificationAction] =
    useInstituteGRNotificationActionMutation();
  return [instituteGRNotificationAction];
};

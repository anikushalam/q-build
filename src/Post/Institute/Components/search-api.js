import { useStaffSearchQuery } from "../../../services/qvipleAPI";
import {
  useFollowInstituteListQuery,
  useFollowingInstituteListQuery,
  useFollowInstituteMutation,
  useInstituteAllSearchQuery,
  useInstituteCreateAnnouncementMutation,
  useUnfollowInstituteMutation,
  useFollowInstituteListIdQuery,
  useFollowingInstituteListIdQuery,
  useFollowUserListQuery,
  useFollowingUserListQuery,
  useUserAllSearchQuery,
  useFollowUserMutation,
  useUnfollowUserMutation,
  useCircleUserMutation,
  useUncircleUserMutation,
  useFollowUserInsMutation,
  useUnfollowUserInsMutation,
  useCircleUserListQuery,
  useUniversalUserQuery,
} from "../../../services/searchApi";

export const useInstituteAllSearch = (args) => {
  const { data, refetch } = useInstituteAllSearchQuery(args.search, {
    skip: args.skip,
  });
  return { instituteAllSearch: data, instituteAllSearchRefetch: refetch };
};

export const useInstituteFollow = () => {
  const [instituteFollow] = useFollowInstituteMutation();
  return [instituteFollow];
};

export const useInstituteUnfollow = () => {
  const [instituteUnfollow] = useUnfollowInstituteMutation();
  return [instituteUnfollow];
};

export const useInstituteFollowList = (args) => {
  const { data, refetch } = useFollowInstituteListQuery(args.list, {
    skip: args.skip,
  });
  return { instituteFollowList: data, instituteFollowListRefetch: refetch };
};

export const useInstituteOwnFollowingList = (args) => {
  const { data, refetch } = useFollowingInstituteListQuery(args.data, {
    skip: args.skip,
  });
  return {
    instituteOwnFollowingList: data,
    instituteOwnFollowingListRefetch: refetch,
  };
};

export const useInstituteFollowListId = (args) => {
  const { data, refetch } = useFollowInstituteListIdQuery(args.list);
  return { instituteFollowListId: data, instituteFollowListIdRefetch: refetch };
};

export const useInstituteOwnFollowingListId = (args) => {
  const { data, refetch } = useFollowingInstituteListIdQuery(args);
  return {
    instituteOwnFollowingListId: data,
    instituteOwnFollowingListIdRefetch: refetch,
  };
};

export const useInstituteCreateAnnouncement = () => {
  const [instituteCreateAnnouncement] =
    useInstituteCreateAnnouncementMutation();
  return [instituteCreateAnnouncement];
};

export const useUserFollowList = (args) => {
  const { data, refetch } = useFollowUserListQuery(args.list);
  return { userFollowList: data, userFollowListRefetch: refetch };
};
export const useUserOwnFollowingList = (args) => {
  const { data, refetch } = useFollowingUserListQuery(args);
  return {
    userFollowingList: data,
    userFollowingListRefetch: refetch,
  };
};

export const useUserAllSearch = (args) => {
  const { data, refetch } = useUserAllSearchQuery(args.search, {
    skip: args.skip,
  });
  return { userAllSearch: data, userAllSearchRefetch: refetch };
};

export const useUserFollow = () => {
  const [userFollow] = useFollowUserMutation();
  return [userFollow];
};

export const useUserUnfollow = () => {
  const [userUnfollow] = useUnfollowUserMutation();
  return [userUnfollow];
};

export const useUserCircle = () => {
  const [userCircle] = useCircleUserMutation();
  return [userCircle];
};

export const useUserUncircle = () => {
  const [userUncircle] = useUncircleUserMutation();
  return [userUncircle];
};

export const useUserFollowIns = () => {
  const [userFollowIns] = useFollowUserInsMutation();
  return [userFollowIns];
};

export const useUserUnfollowIns = () => {
  const [userUnfollowIns] = useUnfollowUserInsMutation();
  return [userUnfollowIns];
};

export const useUserCircleList = (args) => {
  const { data, refetch } = useCircleUserListQuery(args);
  return {
    userCircleList: data,
    userCircleListRefetch: refetch,
  };
};

//for assign of staff head

export const useAssignSearchStaff = (args) => {
  const { data: assignSearchStaff, refetch: assignSearchStaffRefetch } =
    useStaffSearchQuery(args.search, { skip: args.skip });
  return {
    assignSearchStaff,
    assignSearchStaffRefetch,
  };
};

//for assign to all universal user

export const useUniversalUser = (args) => {
  const { data: universalUser, refetch: universalUserRefetch } =
    useUniversalUserQuery(args);
  return {
    universalUser,
    universalUserRefetch,
  };
};

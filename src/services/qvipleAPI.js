import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, prepareHeaders } from "./configApi";
import {
  getInTouchPage,
  addUserRecoveryMail,
  addUserRecoveryPhoneNumber,
  deactivate,
  oneUserProfile,
  oneUserProfileUsername,
  approveStaffArray,
  pendingStaffArray,
  oneStaffProfile,
  approveStudentArray,
  oneStudentProfile,
  instituteFollowersArray,
  fetchAnnouncementArray,
  fetchUserAnnouncementArray,
  fetchStarAnnouncement,
  oneAnnouncementDetail,
  oneDashboard,
  oneUserDashboard,
  fetchDisplayPerson,
  addDisplayPerson,
  updateDisplayPerson,
  deleteDisplayPerson,
  fetchAllNotification,
  fetchAllUserNotification,
  markStar,
  searchStaff,
  searchStudent,
  universalSearchArray,
  staffApprove,
  staffReject,
  checkLogin,
  randomCodeArray,
  staffCode,
  userArray,
  userAgeRestriction,
  getUserAgeRestriction,
  feesArray,
  randomIns,
} from "./qvipleAPIBuilder";

export const qvipleApi = createApi({
  reducerPath: "qvipleApi",
  baseQuery: fetchBaseQuery({ baseUrl, prepareHeaders: prepareHeaders }),
  endpoints: (builder) => ({
    postGetInTouch: getInTouchPage(builder),
    postUserRecoveryMail: addUserRecoveryMail(builder),
    postUserRecoveryPhoneNumber: addUserRecoveryPhoneNumber(builder),
    postDeactivateAccount: deactivate(builder),
    getOneUserProfile: oneUserProfile(builder),
    getOneUserProfileUsername: oneUserProfileUsername(builder),
    staffApproveArray: approveStaffArray(builder),
    staffPendingArray: pendingStaffArray(builder),
    getOneStaffProfile: oneStaffProfile(builder),
    studentApproveArray: approveStudentArray(builder),
    getOneStudentProfile: oneStudentProfile(builder),
    getInsFollowersArray: instituteFollowersArray(builder),
    getAnnouncementArray: fetchAnnouncementArray(builder),
    getUserAnnouncementArray: fetchUserAnnouncementArray(builder),
    getStarAnnouncementArray: fetchStarAnnouncement(builder),
    getOneAnnouncement: oneAnnouncementDetail(builder),
    getSingleInsData: oneDashboard(builder),
    getSingleUserData: oneUserDashboard(builder),
    getDisplayPerson: fetchDisplayPerson(builder),
    addDisplayPerson: addDisplayPerson(builder),
    editDisplayPerson: updateDisplayPerson(builder),
    deleteDisplayPerson: deleteDisplayPerson(builder),
    getAllNotifications: fetchAllNotification(builder),
    getAllUserNotifications: fetchAllUserNotification(builder),
    markStarAnnouncement: markStar(builder),
    staffSearch: searchStaff(builder),
    studentSearch: searchStudent(builder),
    universalSearch: universalSearchArray(builder),
    markAsApprove: staffApprove(builder),
    markAsReject: staffReject(builder),
    checkLoginUser: checkLogin(builder),
    randomCode: randomCodeArray(builder),
    instituteStaffCode: staffCode(builder),
    getAllUserArray: userArray(builder),
    patchUserRestrictAge: userAgeRestriction(builder),
    getUsserAgeRestriction: getUserAgeRestriction(builder),
    getStudentFeesArray: feesArray(builder),
    randomIns: randomIns(builder),
  }),
});

export const {
  usePatchUserRestrictAgeMutation,
  useGetUsserAgeRestrictionQuery,
  usePostGetInTouchMutation,
  usePostUserRecoveryMailMutation,
  usePostUserRecoveryPhoneNumberMutation,
  useGetOneUserProfileQuery,
  useGetOneUserProfileUsernameQuery,
  useGetSingleInsDataQuery,
  useGetSingleUserDataQuery,
  useGetDisplayPersonQuery,
  useEditDisplayPersonMutation,
  useAddDisplayPersonMutation,
  useDeleteDisplayPersonMutation,
  useGetAllNotificationsQuery,
  useGetAllUserNotificationsQuery,
  useStaffPendingArrayQuery,
  useStaffApproveArrayQuery,
  useGetOneStaffProfileQuery,
  useStudentApproveArrayQuery,
  useGetOneStudentProfileQuery,
  useGetInsFollowersArrayQuery,
  useGetAnnouncementArrayQuery,
  useGetUserAnnouncementArrayQuery,
  useGetStarAnnouncementArrayQuery,
  useGetOneAnnouncementQuery,
  useMarkStarAnnouncementMutation,
  useStaffSearchQuery,
  useStudentSearchQuery,
  useUniversalSearchQuery,
  useMarkAsApproveMutation,
  useMarkAsRejectMutation,
  useCheckLoginUserQuery,
  useRandomCodeMutation,
  useInstituteStaffCodeQuery,
  useGetAllUserArrayQuery,
  useGetStudentFeesArrayQuery,
  useRandomInsQuery,
} = qvipleApi;

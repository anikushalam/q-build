import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseUrl, prepareHeaders } from "./configApi";
import {
  solvedQuery,
  unsolvedQuery,
  complaintDetail,
  complaintOneSolvedByInstitute,
  leaveDetail,
  fetchLeave,
  transferDetail,
  approveStaffReplace,
  rejectStaffReplace,
} from "./CLTApiBuilder";

export const CLTApi = createApi({
  reducerPath: "CLTApi",
  baseQuery: fetchBaseQuery({ baseUrl, prepareHeaders: prepareHeaders }),
  endpoints: (builder) => ({
    getSolvedComplaint: solvedQuery(builder),
    getUnSolvedComplaint: unsolvedQuery(builder),
    getComplaintDetail: complaintDetail(builder),
    complaintOneSolvedByInstitute: complaintOneSolvedByInstitute(builder),
    getLeaveDetail: leaveDetail(builder),
    fetchLeaveStatus: fetchLeave(builder),
    getTransferDetail: transferDetail(builder),
    fetchApproveStaffReplacement: approveStaffReplace(builder),
    fetchRejectStaffReplacement: rejectStaffReplace(builder),
  }),
});

export const {
  useGetSolvedComplaintQuery,
  useGetUnSolvedComplaintQuery,
  useGetComplaintDetailQuery,
  useComplaintOneSolvedByInstituteMutation,
  useGetLeaveDetailQuery,
  useFetchLeaveStatusMutation,
  useGetTransferDetailQuery,
  useFetchApproveStaffReplacementMutation,
  useFetchRejectStaffReplacementMutation,
} = CLTApi;

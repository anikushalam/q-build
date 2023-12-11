import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, patchMethod, postMethod, session } from "./BaseUrl";
import {
  getTodayStaffAttendanceFunction,
  postTodayStaffAttendanceFunction,
  staffAttendanceCalenderFunction,
  updateTodayStaffAttendanceFunction,
} from "./QueryMutationFunctionAttendance";

export const attendanceApi = createApi({
  reducerPath: "attendanceApi",
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
    getStaffAttendance: getTodayStaffAttendanceFunction(builder),
    markStaffAttendance: postTodayStaffAttendanceFunction(builder, postMethod),
    updateMarkStaffAttendance: updateTodayStaffAttendanceFunction(
      builder,
      patchMethod
    ),
    staffAttendanceCalender: staffAttendanceCalenderFunction(builder),
  }),
});

export const {
  useGetStaffAttendanceQuery,
  useMarkStaffAttendanceMutation,
  useUpdateMarkStaffAttendanceMutation,
  useStaffAttendanceCalenderQuery,
} = attendanceApi;

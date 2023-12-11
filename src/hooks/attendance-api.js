import {
  useGetStaffAttendanceQuery,
  useMarkStaffAttendanceMutation,
  useStaffAttendanceCalenderQuery,
  useUpdateMarkStaffAttendanceMutation,
} from "../services/attendanceApi";

export const useAllStaffAttendance = (id) => {
  const { data, refetch } = useGetStaffAttendanceQuery(id);
  return { allAttendance: data, allAttendanceRefetch: refetch };
};

export const useMarkAttendance = () => {
  const [markAttendance] = useMarkStaffAttendanceMutation();
  return [markAttendance];
};

export const useUpdateMarkAttendance = () => {
  const [updateAttendance] = useUpdateMarkStaffAttendanceMutation();
  return [updateAttendance];
};

export const useOneStaffCalenderAttendance = (id) => {
  const { data, refetch } = useStaffAttendanceCalenderQuery(id);
  return {
    staffCalenderAttendance: data,
    staffCalenderAttendanceRefetch: refetch,
  };
};

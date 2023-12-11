const postUrl = "/api/v1/attendance";
export const getTodayStaffAttendanceFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/institute/${data.id}/staff/attendance?date=${data.date}`,
  });
};

export const postTodayStaffAttendanceFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/institute/${data.id}/staff/attendance`,
      method: `${method}`,
      body: data.payload,
    }),
  });
};

export const updateTodayStaffAttendanceFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/staff/update/${data.said}`,
      method: `${method}`,
      body: data.payload,
    }),
  });
};

export const staffAttendanceCalenderFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/staff-calender/${data.sid}?month=${data.month}&year=${data.year}`,
  });
};

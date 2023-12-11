import { createSlice } from "@reduxjs/toolkit";

const eventAdminChange = createSlice({
  name: "eventAdminChange",
  initialState: {
    sid: "",
    insId: "",
    eventDeptId: "",
  },
  reducers: {
    eventAdminQuery(state, action) {
      state.sid = action.payload.sid;
      state.insId = action.payload.insId;
      state.eventDeptId = action.payload.eventDeptId;
    },
  },
});

export const eventAdminChangeAction = eventAdminChange.actions;

export default eventAdminChange.reducer;

import { createSlice } from "@reduxjs/toolkit";

const alumniChange = createSlice({
  name: "alumniChange",
  initialState: {
    sid: "",
    insId: "",
    aid: "",
    rid: "",
  },
  reducers: {
    alumniQuery(state, action) {
      state.sid = action.payload.sid;
      state.insId = action.payload.insId;
      state.aid = action.payload.aid;
      state.rid = action.payload.rid;
    },
  },
});

export const alumniChangeAction = alumniChange.actions;

export default alumniChange.reducer;

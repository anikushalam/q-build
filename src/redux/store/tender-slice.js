import { createSlice } from "@reduxjs/toolkit";

const tenderChange = createSlice({
  name: "tenderChange",
  initialState: {
    ltid: "",
    tid: "",
    bid: "",
  },
  reducers: {
    tenderQuery(state, action) {
      state.ltid = action.payload.ltid;
      state.tid = action.payload.tid;
      state.bid = action.payload.bid;
    },
  },
});

export const tenderChangeAction = tenderChange.actions;

export default tenderChange.reducer;

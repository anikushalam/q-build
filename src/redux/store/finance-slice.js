import { createSlice } from "@reduxjs/toolkit";

const financeChange = createSlice({
  name: "financeChange",
  initialState: {
    fid: "",
    insId: "",
  },
  reducers: {
    financeQuery(state, action) {
      state.fid = action.payload.fid;
      state.insId = action.payload.insId;
    },
  },
});

export const financeChangeAction = financeChange.actions;

export default financeChange.reducer;

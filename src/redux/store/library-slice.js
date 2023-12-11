import { createSlice } from "@reduxjs/toolkit";

const libraryChange = createSlice({
  name: "libraryChange",
  initialState: {
    lid: "",
    lhead: "",
    bid: "",
  },
  reducers: {
    libraryQuery(state, action) {
      state.lid = action.payload.lid;
      state.lhead = action.payload.lhead;
      state.bid = action.payload.bid;
    },
  },
});

export const libraryChangeAction = libraryChange.actions;

export default libraryChange.reducer;

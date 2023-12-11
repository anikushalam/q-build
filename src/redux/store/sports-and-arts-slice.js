import { createSlice } from "@reduxjs/toolkit";

const sportsArtChange = createSlice({
  name: "sportsArtChange",
  initialState: {
    spid: "",
  },
  reducers: {
    sportsArtQuery(state, action) {
      state.spid = action.payload.spid;
    },
  },
});

export const sportsArtChangeAction = sportsArtChange.actions;

export default sportsArtChange.reducer;

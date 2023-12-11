import { createSlice } from "@reduxjs/toolkit";

const careerChange = createSlice({
  name: "careerChange",
  initialState: {
    lcid: "",
    vid: "",
    acid: "",
  },
  reducers: {
    careerQuery(state, action) {
      state.lcid = action.payload.lcid;
      state.vid = action.payload.vid;
      state.acid = action.payload.acid;
    },
  },
});

export const careerChangeAction = careerChange.actions;

export default careerChange.reducer;

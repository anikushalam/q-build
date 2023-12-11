import { createSlice } from "@reduxjs/toolkit";

const memberChange = createSlice({
  name: "memberChange",
  initialState: {
    sidebar: localStorage.getItem("_sb") ?? "",
  },
  reducers: {
    sidebarToggle(state, action) {
      state["sidebar"] = action?.payload;
      localStorage.setItem("_sb", action?.payload);
    },
  },
});

export const memberChangeAction = memberChange.actions;
export default memberChange.reducer;

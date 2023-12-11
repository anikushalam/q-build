import { createSlice } from "@reduxjs/toolkit";

const profileChange = createSlice({
  name: "profileChange",
  initialState: {
    searchStatus: localStorage.getItem("searchStatus"),
    _searchId: localStorage.getItem("_searchId"),
  },

  reducers: {
    profileQuery(state, action) {
      state.searchStatus = action.payload.searchStatus;

      state._searchId = action.payload._searchId;
      localStorage.setItem("_searchId", action.payload._searchId);
      localStorage.setItem("searchStatus", action.payload.searchStatus);
    },
  },
});

export const profileChangeAction = profileChange.actions;

export default profileChange.reducer;

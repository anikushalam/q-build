import { createSlice } from "@reduxjs/toolkit";

const admissionChange = createSlice({
  name: "admissionChange",
  initialState: {
    aid: "",
    applyId: "",
    studentAppId: "",
    studentAdminId: "",
    apps: [],
    selects: [],
    confirms: [],
  },
  reducers: {
    admissionQuery(state, action) {
      state.aid = action.payload.aid;
      state.applyId = action.payload.applyId;
      state.studentAppId = action.payload.studentAppId;
      state.studentAdminId = action.payload.studentAdminId;
    },
    applicationArray(state, action) {
      if (action.payload?.apps !== undefined) {
        var duplicate_apps = [...state.apps, ...action.payload?.apps];
        const reduce_apps = [
          ...new Set(duplicate_apps.map(JSON.stringify)),
        ].map(JSON.parse);
        for (let i = 0; i < reduce_apps?.length; i++) {
          for (let j = i + 1; j < reduce_apps?.length; j++) {
            if (reduce_apps[i]._id === reduce_apps[j]._id)
              reduce_apps.splice(j, 1);
          }
        }
        state.apps = reduce_apps;
      }
    },
    selectedArray(state, action) {
      if (action.payload?.selects !== undefined) {
        var duplicate_apps = [...state.selects, ...action.payload?.selects];
        const reduce_apps = [
          ...new Set(duplicate_apps.map(JSON.stringify)),
        ].map(JSON.parse);
        for (let i = 0; i < reduce_apps?.length; i++) {
          for (let j = i + 1; j < reduce_apps?.length; j++) {
            if (reduce_apps[i]._id === reduce_apps[j]._id)
              reduce_apps.splice(j, 1);
          }
        }
        state.selects = reduce_apps;
      }
    },
    confirmedArray(state, action) {
      if (action.payload?.confirms !== undefined) {
        var duplicate_apps = [...state.confirms, ...action.payload?.confirms];
        const reduce_apps = [
          ...new Set(duplicate_apps.map(JSON.stringify)),
        ].map(JSON.parse);
        for (let i = 0; i < reduce_apps?.length; i++) {
          for (let j = i + 1; j < reduce_apps?.length; j++) {
            if (reduce_apps[i]._id === reduce_apps[j]._id)
              reduce_apps.splice(j, 1);
          }
        }
        state.confirms = reduce_apps;
      }
    },
  },
});

export const admissionChangeAction = admissionChange.actions;

export default admissionChange.reducer;

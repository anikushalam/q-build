import { createSlice } from "@reduxjs/toolkit";

const baseChange = createSlice({
  name: "baseChange",
  initialState: {
    status: localStorage.getItem("status") ?? "",
    token: localStorage.getItem("token") ?? "",
    loggedInAs: localStorage.getItem("_lia") ?? "",
    currentLoginRole: localStorage.getItem("_usr_r") ?? "",
    id: localStorage.getItem("id") ?? "",
    currentLogin: {
      username: localStorage.getItem("_usr") ?? "",
      profilePhoto: localStorage.getItem("avatar") ?? "",
      name: localStorage.getItem("_name") ?? "",
    },
  },
  reducers: {
    addCurrentLogin(state, action) {
      localStorage.clear();
      let payload = action?.payload;
      let payloadCurrent = action?.payload?.currentLogin;
      for (let actionObj in payload) {
        let dObj = payload[actionObj];
        state[actionObj] = dObj;
      }
      localStorage.setItem("status", payload.status);
      localStorage.setItem("token", payload.token);
      localStorage.setItem("_lia", payload.loggedInAs);
      localStorage.setItem("id", payload.id);
      localStorage.setItem("_usr", payloadCurrent?.username);
      localStorage.setItem("_usr_r", payload?.currentLoginRole);
      localStorage.setItem("_name", payloadCurrent?.name);
      localStorage.setItem("avatar", payloadCurrent?.profilePhoto);
    },
  },
});

export const baseChangeAction = baseChange.actions;
export default baseChange.reducer;

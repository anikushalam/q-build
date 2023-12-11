import { createSlice } from "@reduxjs/toolkit";
// import {
//   decryptLocalStorage,
//   encryptLocalStorage,
// } from "../../Decrypt/decryptionPayload";

const authChange = createSlice({
  name: "authChange",
  initialState: {
    login: localStorage.getItem("status")
      ? // ? decryptLocalStorage(localStorage.getItem("status"))
        localStorage.getItem("status")
      : false,
    logout: true,
    token: localStorage.getItem("token"),
    id: localStorage.getItem("user")
      ? // ? decryptLocalStorage(localStorage.getItem("user"))
        localStorage.getItem("user")
      : "",
    status: false,
    forgetAs: "",
    username: localStorage.getItem("_usr"),
    loginRole: localStorage.getItem("_usr_r"),
  },
  reducers: {
    loginQuery(state, action) {
      state.login = action.payload.login;
      state.id = action.payload.id;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      state.username = action.payload.username;
      // localStorage.setItem(
      //   "status",
      //   encryptLocalStorage(action.payload.status)
      // );
      localStorage.setItem("status", action.payload.status);
      // localStorage.setItem("user", encryptLocalStorage(action.payload.id));
      localStorage.setItem("user", action.payload.id);
      // localStorage.setItem("username", encryptLocalStorage(action.payload.username));

      // localStorage.setItem("username", action.payload.username);

      // localStorage.setItem(
      //   "loggedinAs",
      //   encryptLocalStorage(action.payload.loggedinAs)
      // );
      localStorage.setItem("loggedinAs", action.payload.loggedinAs);
      localStorage.setItem("_usr", action.payload.username);
      if (action.payload?.loginRole) {
        localStorage.setItem("_usr_r", action.payload?.loginRole ?? "");
      }
    },
    logoutQuery(state, action) {
      localStorage.clear("token");
      localStorage.clear("user");
      localStorage.clear("loggedinAs");
      localStorage.clear("_did");
      localStorage.clear("_cid");
      localStorage.clear("_searchId");
      localStorage.clear("_searchAs");
      localStorage.clear("_usr");
      localStorage.clear("_ad_access");
      localStorage.clear("_fn_access");
      localStorage.clear("_usr_r");
      state.logout = action.payload.logout;
    },

    signupChange(state, action) {
      state.status = action.payload.status;
    },
    onForgetPassword(state, action) {
      state.forgetAs = action.payload.forgetAs;
    },
  },
});

export const authChangeAction = authChange.actions;

export default authChange.reducer;

import { createSlice } from "@reduxjs/toolkit";
// import {
//   decryptLocalStorage,
//   encryptLocalStorage,
// } from "../../Decrypt/decryptionPayload";
const idChange = createSlice({
  name: "idChange",
  initialState: {
    id: localStorage.getItem("user"),
    // &&
    // decryptLocalStorage(localStorage.getItem("user")),
    did: localStorage.getItem("_did"),
    // &&
    // decryptLocalStorage(localStorage.getItem("_did")),
    cid: localStorage.getItem("_cid"),
    // &&
    // decryptLocalStorage(localStorage.getItem("_cid")),
    loggedinAs: localStorage.getItem("loggedinAs"),
    // &&
    // decryptLocalStorage(localStorage.getItem("loggedinAs")),
    departments: [],
    loginProfile: {
      username: "",
      //&&
      // decryptLocalStorage(localStorage.getItem("username")),
      name: "",
      profilePhoto: "",
    },
    searchProfile: {
      id: localStorage.getItem("_searchId"),
      // &&
      // decryptLocalStorage(localStorage.getItem("_searchId")),
      searchAs: localStorage.getItem("_searchAs"),
      //  &&
      // decryptLocalStorage(localStorage.getItem("_searchAs")),
      type: "ID",
    },
    repostQuestion: {
      repostStatus: "post",
      post: "",
      otherOption: "",
      type: "",
      search: "not search",
    },
    universalBack: {
      childList: [],
      childHeight: 0,
    },
    studentFormSkip: false,
    passwordManager: {
      admissionPassword: localStorage.getItem("_ad_access") ?? "",
      financePassword: localStorage.getItem("_fn_access") ?? "",
    },
  },
  reducers: {
    addInstituteId(state, action) {
      state.id = action.payload.id;
      state.loggedinAs = action.payload.loggedinAs;
    },
    addLoginProfile(state, action) {
      if (action.payload?.profile) {
        state.loginProfile = {
          username: action.payload?.profile?.username,
          name: action.payload?.profile?.insName,
        };
      }
    },
    addDepartmentId(state, action) {
      localStorage.setItem("_did", action.payload.did);
      // localStorage.setItem("_did", encryptLocalStorage(action.payload.did));
      state.did = action.payload.did;
    },
    addClassId(state, action) {
      localStorage.setItem("_cid", action.payload.cid);
      // localStorage.setItem("_cid", encryptLocalStorage(action.payload.cid));
      state.cid = action.payload.cid;
    },

    addDepartment(state, action) {
      if (action.payload?.departments) {
        const uniqueDepartment = [
          ...state.departments,
          ...action.payload?.departments,
        ];
        const uniqueRefind = [
          ...new Set(uniqueDepartment.map(JSON.stringify)),
        ].map(JSON.parse);
        for (let i = 0; i < uniqueRefind?.length; i++) {
          for (let j = i + 1; j < uniqueRefind?.length; j++) {
            if (uniqueRefind[i]._id === uniqueRefind[j]._id)
              uniqueRefind.splice(j, 1);
          }
        }
        state.departments = uniqueRefind;
      }
    },
    editOneDepartment(state, action) {
      if (action.payload?.did) {
        for (let dept of state.departments) {
          if (dept._id === action.payload?.did) {
            dept.dName = action.payload?.dName;
            dept.dTitle = action.payload?.dTitle;
            dept.dHead = action.payload?.dHead;
          }
        }
      }
    },
    searchId(state, action) {
      state.searchProfile.id = action.payload.id;
      state.searchProfile.type = action.payload?.type;
      state.searchProfile.searchAs = action.payload?.searchAs;
      // localStorage.setItem("_searchId", encryptLocalStorage(action.payload.id));
      localStorage.setItem("_searchId", action.payload.id);

      // localStorage.setItem(
      //   "_searchAs",
      //   encryptLocalStorage(action.payload.searchAs)
      // );
      localStorage.setItem("_searchAs", action.payload.searchAs);
      // state.repostQuestion.repostStatus = "post";
    },

    openQuestionWithAnswer(state, action) {
      state.repostQuestion.repostStatus = action.payload.repost;
      state.repostQuestion.post = action.payload.post;
      state.repostQuestion.otherOption = action.payload.otherOption;
      state.repostQuestion.type = action.payload.type;
      state.repostQuestion.search = action.payload.search;
    },
    workUniversalBack(state, action) {
      state.universalBack.childList = action.payload?.childList;
      state.universalBack.childHeight = action.payload?.childHeight;
      // state.universalBack.onGobackAction = action.payload?.onFunction;
      // state.universalBack.gobackValue = action.payload?.gobackValue;
    },

    onSkipStudentForm(state, action) {
      state.studentFormSkip = action.payload.skip;
    },
    onAddPasswordManager(state, action) {
      if (action.payload.type === "ADMISSION_PASSWORD") {
        state.passwordManager.admissionPassword = action.payload.value;
        localStorage.setItem("_ad_access", action.payload.value);
      } else {
        state.passwordManager.financePassword = action.payload.value;
        localStorage.setItem("_fn_access", action.payload.value);
      }
    },
  },
});

export const idChangeAction = idChange.actions;

export default idChange.reducer;

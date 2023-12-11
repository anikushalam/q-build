import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authenticationApi } from "../../services/Authentication/authenticationApi";
import { dashboardApi } from "../../services/Dashboard/dashboardApi";
import { instituteStaffStudentApi } from "../../services/InstituteStaffStudent/instituteStaffStudentApi";
import { qvipleApi } from "../../services/qvipleAPI";
import { superAdminAPI } from "../../services/superAdminAPI";
import { chatAPI } from "../../services/chatAPI";
import { financeAPI } from "../../services/financeAPI";
import { paymentConfigureAPI } from "../../services/RazorPay/paymentConfigure";
import { joinApi } from "../../services/joining/joinApi";
import { sportsAndArtsApi } from "../../services/sports_and_arts/sportsAndArtsApi";
import { switchAccountApi } from "../../services/switchAccount/switchAccountApi";
import { CLTApi } from "../../services/CLTApi";
import { instituteDepartmentApi } from "../../services/InstituteDepartment/instituteDepartmentApi";
import { postApi } from "../../services/Post/postApi";
import { imageApi } from "../../services/imageApi";
import { searchApi } from "../../services/searchApi";
import { attendanceApi } from "../../services/attendanceApi";
import { settingApi } from "../../services/Setting/settingApi";
import { departmentApi } from "../../services/staff_department/departmentApi";
import { classApi } from "../../services/staff_department/classApi";
import { subjectApi } from "../../services/staff_department/subjectApi";
import { plateformApi } from "../../services/plateform/plateformApi";
import { admissionAPI } from "../../services/admission/admissionAPI";
import { libraryApi } from "../../services/library/libraryApi";
import { eventApi } from "../../services/event/eventApi";
import { careerApi } from "../../services/career/careerApi";
import { admissionNewApi } from "../../services/admission/admissionNewApi";
import { exportDataApi } from "../../services/ExportData/ExportDataApi";
import { studentMembersTabApi } from "../../services/student_members_ab/studentMembersTabApi";
import { activityApi } from "../../services/staff_department/activityApi";
import { alumniApi } from "../../services/alumni/alumniApi";
import idChangeReducer from "./department-slice";
import authChangeReducer from "./authenticate-slice";
import postChangeReducer from "./post-slice";
import chatChangeReducer from "./chat-slice";
import financeChangeReducer from "./finance-slice";
import profileChangeReducer from "./profile-slice";
import adminChangeReducer from "./superAdmin-slice";
import admissionChangeReducer from "./admission-slice";
import sportsArtChangeReducer from "./sports-and-arts-slice";
import libraryChangeReducer from "./library-slice";
import eventAdminChangeReducer from "./event-slice";
import careerChangeReducer from "./career-slice";
import tenderChangeReducer from "./tender-slice";
import alumniChangeReducer from "./alumni-slice";
import { hostelApi } from "../../services/staff_department/hostel/hostelApi";
import { transportApi } from "../../services/staff_department/transport/transportApi";
import attendanceStoreReducer from "./attendance-slice";

// here start new optimized code import

import { authApi } from "../../optimized/Services/Auth/authApi";
import { userMemberApi } from "../../optimized/Services/UserMember/userMemberApi";
import { financeManagerApi } from "../../optimized/Services/FinanceManager/financeManagerApi";

// import { userMemberApi } from "@/Services/UserMember/userMemberApi";
// import { financeManagerApi } from "@/Services/FinanceManager/financeManagerApi";
// import { authApi } from "@/Services/Auth/authApi";

export const store = configureStore({
  reducer: {
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [instituteStaffStudentApi.reducerPath]: instituteStaffStudentApi.reducer,
    [qvipleApi.reducerPath]: qvipleApi.reducer,
    [superAdminAPI.reducerPath]: superAdminAPI.reducer,
    [chatAPI.reducerPath]: chatAPI.reducer,
    [financeAPI.reducerPath]: financeAPI.reducer,
    [paymentConfigureAPI.reducerPath]: paymentConfigureAPI.reducer,
    [CLTApi.reducerPath]: CLTApi.reducer,
    [instituteDepartmentApi.reducerPath]: instituteDepartmentApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [attendanceApi.reducerPath]: attendanceApi.reducer,
    [settingApi.reducerPath]: settingApi.reducer,
    [joinApi.reducerPath]: joinApi.reducer,
    [sportsAndArtsApi.reducerPath]: sportsAndArtsApi.reducer,
    [exportDataApi.reducerPath]: exportDataApi.reducer,
    [switchAccountApi.reducerPath]: switchAccountApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
    [classApi.reducerPath]: classApi.reducer,
    [subjectApi.reducerPath]: subjectApi.reducer,
    [plateformApi.reducerPath]: plateformApi.reducer,
    [admissionAPI.reducerPath]: admissionAPI.reducer,
    [libraryApi.reducerPath]: libraryApi.reducer,
    [eventApi.reducerPath]: eventApi.reducer,
    [careerApi.reducerPath]: careerApi.reducer,
    [admissionNewApi.reducerPath]: admissionNewApi.reducer,
    [studentMembersTabApi.reducerPath]: studentMembersTabApi.reducer,
    [activityApi.reducerPath]: activityApi.reducer,
    [alumniApi.reducerPath]: alumniApi.reducer,
    [hostelApi.reducerPath]: hostelApi.reducer,
    [transportApi.reducerPath]: transportApi.reducer,
    idChange: idChangeReducer,
    authChange: authChangeReducer,
    postChange: postChangeReducer,
    chatChange: chatChangeReducer,
    financeChange: financeChangeReducer,
    profileChange: profileChangeReducer,
    adminChange: adminChangeReducer,
    admissionChange: admissionChangeReducer,
    sportsArtChange: sportsArtChangeReducer,
    libraryChange: libraryChangeReducer,
    eventAdminChange: eventAdminChangeReducer,
    careerChange: careerChangeReducer,
    tenderChange: tenderChangeReducer,
    alumniChange: alumniChangeReducer,
    attendanceStore: attendanceStoreReducer,

    // here start new optimized code import
    [authApi.reducerPath]: authApi.reducer,
    [userMemberApi.reducerPath]: userMemberApi.reducer,
    [financeManagerApi.reducerPath]: financeManagerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authenticationApi.middleware,
      dashboardApi.middleware,
      instituteStaffStudentApi.middleware,
      qvipleApi.middleware,
      instituteDepartmentApi.middleware,
      postApi.middleware,
      imageApi.middleware,
      searchApi.middleware,
      attendanceApi.middleware,
      settingApi.middleware,
      superAdminAPI.middleware,
      chatAPI.middleware,
      financeAPI.middleware,
      paymentConfigureAPI.middleware,
      CLTApi.middleware,
      joinApi.middleware,
      sportsAndArtsApi.middleware,
      exportDataApi.middleware,
      switchAccountApi.middleware,
      departmentApi.middleware,
      classApi.middleware,
      subjectApi.middleware,
      plateformApi.middleware,
      admissionAPI.middleware,
      libraryApi.middleware,
      eventApi.middleware,
      careerApi.middleware,
      admissionNewApi.middleware,
      studentMembersTabApi.middleware,
      activityApi.middleware,
      alumniApi.middleware,
      hostelApi.middleware,
      transportApi.middleware,

      // here start new optimized code import
      authApi.middleware,
      userMemberApi.middleware,
      financeManagerApi.middleware
    ),
});

setupListeners(store.dispatch);

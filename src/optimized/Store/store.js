// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import baseChangeReducer from "./base-slice";
// import memberChangeReducer from "./member-slice";
// import { authApi } from "@/Services/Auth/authApi";
// import { userMemberApi } from "@/Services/UserMember/userMemberApi";
// import { financeManagerApi } from "@/Services/FinanceManager/financeManagerApi";

// export const store = configureStore({
//   reducer: {
//     baseChange: baseChangeReducer,
//     memberChange: memberChangeReducer,
//     [authApi.reducerPath]: authApi.reducer,
//     [userMemberApi.reducerPath]: userMemberApi.reducer,
//     [financeManagerApi.reducerPath]: financeManagerApi.reducer,
//   },
//   middleware: (getDefaultMiddleare) =>
//     getDefaultMiddleare().concat(
//       authApi.middleware,
//       userMemberApi.middleware,
//       financeManagerApi.middleware
//     ),
// });

// setupListeners(store.dispatch);

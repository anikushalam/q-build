import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../UrlConfig/BaseUrl";
import { tokenVerify } from "../UrlConfig/TokenVerify";

export const financeManagerApi = createApi({
  reducerPath: "financeManagerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: tokenVerify,
  }),
  tagTypes: [
    "Finance_Bank",
    "Finance_Income",
    "Finance_Expense",
    "Finance_Internal_Fees",
  ],
  endpoints: () => ({}),
});
// providesTags: ["Finance_Internal_Fees"],
// invalidatesTags: ["Finance_Internal_Fees"],

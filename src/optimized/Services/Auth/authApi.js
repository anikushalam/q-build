import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../UrlConfig/BaseUrl";
import { tokenVerify } from "../UrlConfig/TokenVerify";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: tokenVerify,
  }),
  endpoints: () => ({}),
});

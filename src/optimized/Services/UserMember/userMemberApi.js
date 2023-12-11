import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, baseUrlV1 } from "../UrlConfig/BaseUrl";
import { tokenVerify } from "../UrlConfig/TokenVerify";

export const userMemberApi = createApi({
  reducerPath: "userMemberApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    // baseUrl: baseUrlV1,

    prepareHeaders: tokenVerify,
  }),
  endpoints: () => ({}),
});

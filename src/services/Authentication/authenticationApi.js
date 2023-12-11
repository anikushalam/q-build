import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, session } from "../BaseUrl";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      if (session()) {
        headers.set("authorization", session());
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});

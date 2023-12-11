import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, session } from "../BaseUrl";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
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

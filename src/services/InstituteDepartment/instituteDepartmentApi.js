import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, session } from "../BaseUrl";

export const instituteDepartmentApi = createApi({
  reducerPath: "instituteDepartmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      if (session()) {
        // headers.set("SessionID", session());
        headers.set("authorization", session());
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});

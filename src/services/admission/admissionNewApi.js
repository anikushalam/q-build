import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, prepareHeaders } from "../configApi";

export const admissionNewApi = createApi({
  reducerPath: "admissionNewApi",
  baseQuery: fetchBaseQuery({ baseUrl, prepareHeaders: prepareHeaders }),
  endpoints: () => ({}),
});

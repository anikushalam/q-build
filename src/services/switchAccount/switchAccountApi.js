import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  baseUrl,
  // deleteMethod,
  //   patchMethod,
  // postMethod,
  session,
} from "../BaseUrl";
import { switchUserAccount } from "./switchAccountApiBuilder";

export const switchAccountApi = createApi({
  reducerPath: "switchAccountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      if (session()) {
        headers.set("authorization", session());
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    switchUserAccount: switchUserAccount(builder),
  }),
});

export const { useSwitchUserAccountQuery } = switchAccountApi;

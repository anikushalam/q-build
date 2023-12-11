import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  baseUrl,
  patchMethod,
  //   patchMethod,
  postMethod,
  //   putMethod,
  session,
} from "../BaseUrl";
import {
  trendingPlateformQuestionFunction,
  affiliatedSearchFunction,
  affiliatedRequestFunction,
  allDomainPlateformFunction,
  linkedInstituteDomainFunction,
} from "./plateform_query_mutation";

export const plateformApi = createApi({
  reducerPath: "plateformApi",
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
    trendingPlateformQuestion: trendingPlateformQuestionFunction(builder),
    affiliatedSearch: affiliatedSearchFunction(builder),
    affiliatedRequest: affiliatedRequestFunction(builder, postMethod),
    allDomainPlateform: allDomainPlateformFunction(builder),
    linkedInstituteDomain: linkedInstituteDomainFunction(builder, patchMethod),
  }),
});

export const {
  useTrendingPlateformQuestionQuery,
  useAffiliatedSearchQuery,
  useAffiliatedRequestMutation,
  useAllDomainPlateformQuery,
  useLinkedInstituteDomainMutation,
} = plateformApi;

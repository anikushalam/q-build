import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  baseUrl,
  // deleteMethod,
  //   patchMethod,
  // postMethod,
  session,
} from "../BaseUrl";

import {
  activateAlumni,
  alumniEidtActivateFunction,
  alumniInfo,
  alumniReg,
  alumniRegList,
  giveCertificate,
  ProminentAlumniList,
  addStory,
  feedbackList,
  addFeedbackPoll,
} from "./alumniApibuilder";

export const alumniApi = createApi({
  reducerPath: "alumniApi",
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
    activateAlumni: activateAlumni(builder),
    alumniEidtActivate: alumniEidtActivateFunction(builder),
    alumniInfo: alumniInfo(builder),
    alumniReg: alumniReg(builder),
    alumniRegList: alumniRegList(builder),
    giveCertificate: giveCertificate(builder),
    ProminentAlumniList: ProminentAlumniList(builder),
    addStory: addStory(builder),
    feedbackList: feedbackList(builder),
    addFeedbackPoll: addFeedbackPoll(builder),
  }),
});

export const {
  useActivateAlumniMutation,
  useAlumniEidtActivateMutation,
  useAlumniInfoQuery,
  useAlumniRegMutation,
  useAlumniRegListQuery,
  useGiveCertificateMutation,
  useProminentAlumniListQuery,
  useAddStoryMutation,
  useFeedbackListQuery,
  useAddFeedbackPollMutation,
} = alumniApi;

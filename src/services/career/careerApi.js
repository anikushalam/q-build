import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  baseUrl,
  // deleteMethod,
  //   patchMethod,
  // postMethod,
  session,
} from "../BaseUrl";

import {
  activateCareer,
  careerInfo,
  createVacancy,
  vacancyList,
  markCompleteVacancy,
  vacancyInfo,
  applyVacancy,
  applicationList,
  scheduleInterview,
  deleteVacancy,
  activateTender,
  tenderInfo,
  createTender,
  tenderList,
  markClosedTender,
  singleTenderInfo,
  applyTender,
  biderList,
  placeBidOrder,
  deleteTender,
} from "./careerApiBuilder";

export const careerApi = createApi({
  reducerPath: "careerApi",
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
    activateCareer: activateCareer(builder),
    careerInfo: careerInfo(builder),
    createVacancy: createVacancy(builder),
    vacancyList: vacancyList(builder),
    markCompleteVacancy: markCompleteVacancy(builder),
    vacancyInfo: vacancyInfo(builder),
    applyVacancy: applyVacancy(builder),
    applicationList: applicationList(builder),
    scheduleInterview: scheduleInterview(builder),
    deleteVacancy: deleteVacancy(builder),
    activateTender: activateTender(builder),
    tenderInfo: tenderInfo(builder),
    createTender: createTender(builder),
    tenderList: tenderList(builder),
    markClosedTender: markClosedTender(builder),
    singleTenderInfo: singleTenderInfo(builder),
    applyTender: applyTender(builder),
    biderList: biderList(builder),
    placeBidOrder: placeBidOrder(builder),
    deleteTender: deleteTender(builder),
  }),
});

export const {
  useActivateTenderMutation,
  useTenderInfoQuery,
  useCreateTenderMutation,
  useTenderListQuery,
  useMarkClosedTenderMutation,
  useSingleTenderInfoQuery,
  useApplyTenderMutation,
  useBiderListQuery,
  usePlaceBidOrderMutation,
  useDeleteTenderMutation,
  useActivateCareerMutation,
  useCareerInfoQuery,
  useCreateVacancyMutation,
  useVacancyInfoQuery,
  useMarkCompleteVacancyMutation,
  useVacancyListQuery,
  useApplyVacancyMutation,
  useApplicationListQuery,
  useScheduleInterviewMutation,
  useDeleteVacancyMutation,
} = careerApi;

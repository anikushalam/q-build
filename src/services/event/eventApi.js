import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  baseUrl,
  // deleteMethod,
  //   patchMethod,
  // postMethod,
  session,
} from "../BaseUrl";

import {
  eventDeptInfo,
  alleventList,
  allSeminarList,
  oneDeptElectionList,
  oneDeptEventList,
  oneDeptSeminarList,
  singleEventInfo,
  singleSeminarInfo,
  createNewEvent,
  createNewSeminar,
  deleteEvent,
  deleteSeminar,
  editEvent,
  editSeminar,
  activateEventDept,
  editEventAdnSeminarFunction,
} from "./eventApiBuilder";

export const eventApi = createApi({
  reducerPath: "eventApi",
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
    activateEventDept: activateEventDept(builder),
    editEventAdnSeminar: editEventAdnSeminarFunction(builder),
    eventDeptInfo: eventDeptInfo(builder),
    alleventList: alleventList(builder),
    allSeminarList: allSeminarList(builder),
    oneDeptEventList: oneDeptEventList(builder),
    oneDeptElectionList: oneDeptElectionList(builder),
    oneDeptSeminarList: oneDeptSeminarList(builder),
    singleEventInfo: singleEventInfo(builder),
    singleSeminarInfo: singleSeminarInfo(builder),
    createNewEvent: createNewEvent(builder),
    createNewSeminar: createNewSeminar(builder),
    deleteEvent: deleteEvent(builder),
    deleteSeminar: deleteSeminar(builder),
    editEvent: editEvent(builder),
    editSeminar: editSeminar(builder),
  }),
});

export const {
  useActivateEventDeptMutation,
  useEditEventAdnSeminarMutation,
  useEventDeptInfoQuery,
  useAlleventListQuery,
  useAllSeminarListQuery,
  useOneDeptEventListQuery,
  useOneDeptSeminarListQuery,
  useOneDeptElectionListQuery,
  useSingleEventInfoQuery,
  useSingleSeminarInfoQuery,
  useCreateNewEventMutation,
  useCreateNewSeminarMutation,
  useDeleteEventMutation,
  useDeleteSeminarMutation,
  useEditEventMutation,
  useEditSeminarMutation,
} = eventApi;

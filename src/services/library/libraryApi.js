import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  baseUrl,
  // deleteMethod,
  //   patchMethod,
  // postMethod,
  session,
} from "../BaseUrl";

import {
  activateLibrary,
  editLibrary,
  libraryInfo,
  allBookList,
  addLibraryBook,
  bookDetails,
  updateLibraryBook,
  allIssuedBookList,
  IssueLibraryBook,
  allCollectedBookList,
  collectLibraryBook,
  collectedBookDetails,
  allMembersList,
  singleMembersBookList,
  singleMemberHistory,
  libraryCoverPhoto,
  fineHistoryMembersList,
  submitFineRequest,
  libraryGetSiteInfoFunction,
  libraryUpdateSiteInfoFunction,
  libraryFineChargeFunction,
  libraryFineCollectBookFunction,
  addExcelBookByLibraryFunction,
} from "./libraryApiBuilder";

export const libraryApi = createApi({
  reducerPath: "libraryApi",
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
    activateLibrary: activateLibrary(builder),
    editLibrary: editLibrary(builder),
    libraryInfo: libraryInfo(builder),
    allBookList: allBookList(builder),
    addLibraryBook: addLibraryBook(builder),
    bookDetails: bookDetails(builder),
    updateLibraryBook: updateLibraryBook(builder),
    allIssuedBookList: allIssuedBookList(builder),
    IssueLibraryBook: IssueLibraryBook(builder),
    allCollectedBookList: allCollectedBookList(builder),
    collectLibraryBook: collectLibraryBook(builder),
    collectedBookDetails: collectedBookDetails(builder),
    allMembersList: allMembersList(builder),
    singleMembersBookList: singleMembersBookList(builder),
    singleMemberHistory: singleMemberHistory(builder),
    libraryCoverPhoto: libraryCoverPhoto(builder),
    fineHistoryMembersList: fineHistoryMembersList(builder),
    submitFineRequest: submitFineRequest(builder),
    libraryGetSiteInfo: libraryGetSiteInfoFunction(builder),
    libraryUpdateSiteInfo: libraryUpdateSiteInfoFunction(builder),
    libraryFineCharge: libraryFineChargeFunction(builder),
    libraryFineCollectBook: libraryFineCollectBookFunction(builder),
    addExcelBookByLibrary: addExcelBookByLibraryFunction(builder),
  }),
});

export const {
  useActivateLibraryMutation,
  useEditLibraryMutation,
  useLibraryInfoQuery,
  useAllBookListQuery,
  useAddLibraryBookMutation,
  useBookDetailsQuery,
  useUpdateLibraryBookMutation,
  useAllIssuedBookListQuery,
  useIssueLibraryBookMutation,
  useAllCollectedBookListQuery,
  useCollectLibraryBookMutation,
  useCollectedBookDetailsQuery,
  useAllMembersListQuery,
  useSingleMembersBookListQuery,
  useSingleMemberHistoryQuery,
  useLibraryCoverPhotoMutation,
  useFineHistoryMembersListQuery,
  useSubmitFineRequestMutation,
  useLibraryGetSiteInfoQuery,
  useLibraryUpdateSiteInfoMutation,
  useLibraryFineChargeQuery,
  useLibraryFineCollectBookMutation,
  useAddExcelBookByLibraryMutation,
} = libraryApi;

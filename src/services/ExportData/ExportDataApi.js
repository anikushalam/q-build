import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  baseUrl,
  // deleteMethod,
  //   patchMethod,
  // postMethod,
  session,
} from "../BaseUrl";

import {
  fetchStaffIdCard,
  extractStudentIDCard,
  fetchStudentExportData,
  fetchFinanceExportData,
  exportOneStudentIdCardFunction,
  exportZipStudentProfilePhotoFunction,
} from "./ExportDataBuilder";

export const exportDataApi = createApi({
  reducerPath: "exportDataApi",
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
    fetchStaffIdCard: fetchStaffIdCard(builder),
    extractStudentIDCard: extractStudentIDCard(builder),
    fetchStudentExportDat: fetchStudentExportData(builder),
    fetchFinanceExportData: fetchFinanceExportData(builder),
    exportOneStudentIdCard: exportOneStudentIdCardFunction(builder),
    exportZipStudentProfilePhoto: exportZipStudentProfilePhotoFunction(builder),
  }),
});

export const {
  useFetchStaffIdCardQuery,
  useExtractStudentIDCardMutation,
  useFetchStudentExportDatMutation,
  useFetchFinanceExportDataQuery,
  useExportOneStudentIdCardMutation,
  useExportZipStudentProfilePhotoMutation,
} = exportDataApi;

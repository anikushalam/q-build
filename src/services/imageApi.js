import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseUrl, patchMethod, session } from "./BaseUrl";
import {
  coverPhotoIntituteFunction,
  getImageFunction,
  profilePhotoInstituteFunction,
  profilePhotoUserFunction,
  coverPhotoUserFunction,
  uploadUserAndStudentProfileFunction,
} from "./QueryMutationFunctionImage";

export const imageApi = createApi({
  reducerPath: "imageApi",
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
    getImage: getImageFunction(builder),
    instituteProfilePhoto: profilePhotoInstituteFunction(builder, patchMethod),
    instituteCoverPhoto: coverPhotoIntituteFunction(builder, patchMethod),

    userProfilePhoto: profilePhotoUserFunction(builder, patchMethod),
    uploadUserAndStudentProfile: uploadUserAndStudentProfileFunction(
      builder,
      patchMethod
    ),
    userCoverPhoto: coverPhotoUserFunction(builder, patchMethod),
  }),
});

export const {
  useGetImageQuery,
  useInstituteProfilePhotoMutation,
  useInstituteCoverPhotoMutation,
  useUserProfilePhotoMutation,
  useUploadUserAndStudentProfileMutation,
  useUserCoverPhotoMutation,
} = imageApi;

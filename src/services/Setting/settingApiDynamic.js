import { deleteMethod, patchMethod, postMethod, get } from "../BaseUrl";
import {
  privacySettingPatchFunction,
  userDeActivateAccount,
  userQCoins,
  userPaymentHistoryFuntion,
  paymentHistoryDetailFuntion,
  addRecoveryMailFunction,
  addRecoveryPhoneNumberFunction,
  userSettingNotificationFunction,
  userSettingPrivacyFunction,
  websiteLookUpdateByInstituteFunction,
  websiteTabUpdateByInstituteFunction,
  websiteInfoGetByInstituteFunction,
  websiteContactUpdateByInstituteFunction,

  //
  getInstituteSiteOpenerFunction,
  updateInstituteSiteOpenerFunction,
  institutePaymentToggleFunction,
  trashInstituteSiteOpenerFunction,
  addAcademicModuleFunction,
  getAcademicModuleFunction,
  updateAcademicModuleFunction,
  addNssModuleFunction,
  updateNssModuleFunction,
  getNssModuleFunction,
  addFacilitiesModuleFunction,
  getFacilitiesModuleFunction,
  updateFacilitiesModuleFunction,
} from "./QueryMutationFunctionSetting";
import { settingApi } from "./settingApi";

export const settingApiDynamic = settingApi.injectEndpoints({
  endpoints: (builder) => ({
    institutePrivacyUpdate: privacySettingPatchFunction(builder, patchMethod),
    addRecoveryMail: addRecoveryMailFunction(builder, postMethod),
    addRecoveryPhoneNumber: addRecoveryPhoneNumberFunction(builder, postMethod),
    deactivateUserAccount: userDeActivateAccount(builder),
    getUserCoins: userQCoins(builder),
    userPaymentHistory: userPaymentHistoryFuntion(builder),
    paymentHistoryDetail: paymentHistoryDetailFuntion(builder),
    userSettingNotification: userSettingNotificationFunction(
      builder,
      patchMethod
    ),
    userSettingPrivacy: userSettingPrivacyFunction(builder, patchMethod),
    websiteLookUpdateByInstitute: websiteLookUpdateByInstituteFunction(
      builder,
      patchMethod
    ),
    websiteTabUpdateByInstitute: websiteTabUpdateByInstituteFunction(
      builder,
      patchMethod
    ),
    websiteInfoGetByInstitute: websiteInfoGetByInstituteFunction(builder),
    websiteContactUpdateByInstitute: websiteContactUpdateByInstituteFunction(
      builder,
      patchMethod
    ),
    getInstituteSiteOpener: getInstituteSiteOpenerFunction(builder),
    updateInstituteSiteOpener: updateInstituteSiteOpenerFunction(
      builder,
      patchMethod
    ),
    institutePaymentToggle: institutePaymentToggleFunction(
      builder,
      patchMethod
    ),
    trashInstituteSiteOpener: trashInstituteSiteOpenerFunction(
      builder,
      deleteMethod
    ),
    academicSiteInfo: addAcademicModuleFunction(builder, postMethod),
    updateAcademicSiteInfo: updateAcademicModuleFunction(builder, patchMethod),
    getAcademicModuleInfo: getAcademicModuleFunction(builder),
    nssSiteInfo: addNssModuleFunction(builder, postMethod),
    updateNssSiteInfo: updateNssModuleFunction(builder, patchMethod),
    getNssModuleInfo: getNssModuleFunction(builder),
    getFacilitiesModuleInfo: getFacilitiesModuleFunction(builder),
    facilitiesSiteInfo: addFacilitiesModuleFunction(builder, postMethod),
    updateFacilitiesSiteInfo: updateFacilitiesModuleFunction(
      builder,
      patchMethod
    ),
  }),
});

export const {
  useInstitutePrivacyUpdateMutation,
  useAddRecoveryMailMutation,
  useAddRecoveryPhoneNumberMutation,
  useDeactivateUserAccountMutation,
  useGetUserCoinsQuery,
  useUserPaymentHistoryQuery,
  usePaymentHistoryDetailQuery,
  useUserSettingNotificationMutation,
  useUserSettingPrivacyMutation,
  useWebsiteLookUpdateByInstituteMutation,
  useWebsiteTabUpdateByInstituteMutation,
  useWebsiteInfoGetByInstituteQuery,
  useWebsiteContactUpdateByInstituteMutation,
  //
  useGetInstituteSiteOpenerQuery,
  useUpdateInstituteSiteOpenerMutation,

  useInstitutePaymentToggleMutation,
  useTrashInstituteSiteOpenerMutation,
  useAcademicSiteInfoMutation,
  useGetAcademicModuleInfoQuery,
  useUpdateAcademicSiteInfoMutation,
  useNssSiteInfoMutation,
  useUpdateNssSiteInfoMutation,
  useGetNssModuleInfoQuery,
  useFacilitiesSiteInfoMutation,
  useGetFacilitiesModuleInfoQuery,
  useUpdateFacilitiesSiteInfoMutation,
} = settingApiDynamic;

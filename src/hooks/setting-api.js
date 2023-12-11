import {
  useInstitutePrivacyUpdateMutation,
  useAddRecoveryPhoneNumberMutation,
  useAddRecoveryMailMutation,
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
  useGetInstituteSiteOpenerQuery,
  useUpdateInstituteSiteOpenerMutation,
  useInstitutePaymentToggleMutation,
  useTrashInstituteSiteOpenerMutation,
  useAcademicSiteInfoMutation,
  useGetAcademicModuleInfoQuery,
  useUpdateAcademicSiteInfoMutation,
  useNssSiteInfoMutation,
  useUpdateNssSiteInfoMutation,
  useFacilitiesSiteInfoMutation,
  useGetFacilitiesModuleInfoQuery,
  useUpdateFacilitiesSiteInfoMutation,
  useGetNssModuleInfoQuery,
} from "../services/Setting/settingApiDynamic";

export const useInstitutePrivacyUpdate = () => {
  const [institutePrivacyUpdate] = useInstitutePrivacyUpdateMutation();
  return [institutePrivacyUpdate];
};

export const useAddRecoveryMail = () => {
  const [addRecoveryMail] = useAddRecoveryMailMutation();
  return [addRecoveryMail];
};

export const useAddRecoveryPhoneNumber = () => {
  const [addRecoveryPhoneNumber] = useAddRecoveryPhoneNumberMutation();
  return [addRecoveryPhoneNumber];
};

export const useDeactivateUserAccount = () => {
  const [deactivateUserAccount] = useDeactivateUserAccountMutation();
  return [deactivateUserAccount];
};

export const useGetUserCoins = (args) => {
  const { data: getUserCoins, refetch: getUserCoinsRefetch } =
    useGetUserCoinsQuery(args.id, { skip: args.skip });
  return { getUserCoins, getUserCoinsRefetch };
};

export const useUserPaymentHistory = (args) => {
  const { data: userPayment, refetch: userPaymentRefetch } =
    useUserPaymentHistoryQuery(args.data, { skip: args.skip });
  return { userPayment, userPaymentRefetch };
};

export const useUserPaymentDetailHistory = (args) => {
  const { data: userPaymentDetail, refetch: userPaymentDetailRefetch } =
    usePaymentHistoryDetailQuery(args.pid, { skip: args.skip });
  return { userPaymentDetail, userPaymentDetailRefetch };
};

export const useUserSettingNotification = () => {
  const [userSettingNotification] = useUserSettingNotificationMutation();
  return [userSettingNotification];
};

export const useUserSettingPrivacy = () => {
  const [userSettingPrivacy] = useUserSettingPrivacyMutation();
  return [userSettingPrivacy];
};

export const useWebsiteLookUpdateByInstitute = () => {
  const [websiteLookUpdateByInstitute] =
    useWebsiteLookUpdateByInstituteMutation();
  return [websiteLookUpdateByInstitute];
};

export const useWebsiteTabUpdateByInstitute = () => {
  const [websiteTabUpdateByInstitute] =
    useWebsiteTabUpdateByInstituteMutation();
  return [websiteTabUpdateByInstitute];
};

export const useWebsiteInfoGetByInstitute = (args) => {
  const {
    data: websiteInfoGetByInstitute,
    refetch: websiteInfoGetByInstituteRefetch,
  } = useWebsiteInfoGetByInstituteQuery(args.id, { skip: args.skip });
  return { websiteInfoGetByInstitute, websiteInfoGetByInstituteRefetch };
};

export const useWebsiteContactUpdateByInstitute = () => {
  const [websiteContactUpdateByInstitute] =
    useWebsiteContactUpdateByInstituteMutation();
  return [websiteContactUpdateByInstitute];
};

export const useGetInstituteSiteOpener = (args) => {
  const {
    data: getInstituteSiteOpener,
    refetch: getInstituteSiteOpenerRefetch,
  } = useGetInstituteSiteOpenerQuery(args.id, { skip: args.skip });
  return { getInstituteSiteOpener, getInstituteSiteOpenerRefetch };
};

export const useUpdateInstituteSiteOpener = () => {
  const [updateInstituteSiteOpener] = useUpdateInstituteSiteOpenerMutation();
  return [updateInstituteSiteOpener];
};

// ===
export const useInstitutePaymentToggle = () => {
  const [institutePaymentToggle] = useInstitutePaymentToggleMutation();
  return [institutePaymentToggle];
};

export const useTrashInstituteSiteOpener = () => {
  const [trashInstituteSiteOpener] = useTrashInstituteSiteOpenerMutation();
  return [trashInstituteSiteOpener];
};

export const useFacilitiesSiteInfo = () => {
  const [facilitiesInstituteSiteInfo] = useFacilitiesSiteInfoMutation();
  return [facilitiesInstituteSiteInfo];
};

export const useFacilitiesUpdateSiteInfo = () => {
  const [updateFacilities] = useUpdateFacilitiesSiteInfoMutation();
  return [updateFacilities];
};

export const useAcademicSiteInfo = () => {
  const [academicSiteInfoo] = useAcademicSiteInfoMutation();
  return [academicSiteInfoo];
};

export const useUpdateAcademicSiteInfo = () => {
  const [updateAcademicSiteInfoo] = useUpdateAcademicSiteInfoMutation();
  return [updateAcademicSiteInfoo];
};

export const useGetAcademicSiteInfo = (args) => {
  const { data: getAcademicSiteInfo, refetch: getAcademicSiteInfoRefetch } =
    useGetAcademicModuleInfoQuery(args.aid, { skip: args.skip });
  return { getAcademicSiteInfo, getAcademicSiteInfoRefetch };
};

export const useNssSiteInfo = () => {
  const [nssSiteInfoo] = useNssSiteInfoMutation();
  return [nssSiteInfoo];
};

export const useUpdateNssSiteInfo = () => {
  const [updateNssSiteInfoo] = useUpdateNssSiteInfoMutation();
  return [updateNssSiteInfoo];
};

export const useGetFacilitiesSiteInfo = (args) => {
  const { data: getFacilitiesSiteInfo, refetch: getFacilitiesSiteInfoRefetch } =
    useGetFacilitiesModuleInfoQuery(args.fid, { skip: args.skip });
  return { getFacilitiesSiteInfo, getFacilitiesSiteInfoRefetch };
};

export const useGetNssSiteInfo = (args) => {
  const { data: getNssSiteInfo, refetch: getNssSiteInfoRefetch } =
    useGetNssModuleInfoQuery(args.nid, { skip: args.skip });
  return { getNssSiteInfo, getNssSiteInfoRefetch };
};

const postUrl = "/api/v1";
const landingUrl = "/api/v1/landing";

export const privacySettingPatchFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/extra/${data.id}/privacy/institute/feature`,
      method: `${method}`,
      body: data.privacy,
    }),
  });
};

export const addRecoveryMailFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/ins/${data.id}/recovery-mail`,
      method: method,
      body: data.mail,
    }),
  });
};

export const addRecoveryPhoneNumberFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/ins/phone/info/${data.id}`,
      method: method,
      body: data.phone,
    }),
  });
};

export const userDeActivateAccount = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/user/${data.id}/deactivate/account`,
      method: "POST",
      body: data.passwordData,
    }),
  });
};

export const userQCoins = (builder) => {
  return builder.query({
    query: (id) => ({
      url: `${postUrl}/user/${id}/referals/q-coins`,
      method: "GET",
    }),
  });
};

export const userPaymentHistoryFuntion = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/pay/history/by?uid=${data.uid}&page=${data.page}&limit=${data.limit}&filter=${data.filter}`,
  });
};

export const paymentHistoryDetailFuntion = (builder) => {
  return builder.query({
    query: (pid) => `${postUrl}/pay/one/${pid}`,
  });
};

export const userSettingNotificationFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/extra/${data.id}/update/notification/user`,
      method: method,
      body: data.settingNotifyData,
    }),
  });
};

export const userSettingPrivacyFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/extra/${data.id}/privacy/feature`,
      method: method,
      body: data.settingPrivacyData,
    }),
  });
};

export const websiteLookUpdateByInstituteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/landing/${data.id}/website/looks`,
      method: method,
      body: data.updateLooks,
    }),
  });
};

export const websiteTabUpdateByInstituteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/landing/${data.id}/website/active/tabs`,
      method: method,
      body: data.updateTab,
    }),
  });
};

export const websiteInfoGetByInstituteFunction = (builder) => {
  return builder.query({
    query: (id) => `${postUrl}/landing/${id}/one/web/profile`,
  });
};

export const websiteContactUpdateByInstituteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/landing/${data.id}/website/contacts`,
      method: method,
      body: data.updateContact,
    }),
  });
};

export const getInstituteSiteOpenerFunction = (builder) => {
  return builder.query({
    query: (id) => `${postUrl}/site/institute/${id}/opener`,
  });
};

export const updateInstituteSiteOpenerFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/site/institute/${data.id}/opener`,
      method: method,
      body: data.updateSiteOpener,
    }),
  });
};

export const trashInstituteSiteOpenerFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/site/institute/${data.id}/opener`,
      method: method,
      body: data.updateSiteOpener,
    }),
  });
};
// for institute payment toggle
export const institutePaymentToggleFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/ins/${data.id}/select/merchant/query`,
      method: `${method}`,
      body: data.formSetting,
    }),
  });
};

// ----------------------------------Site Academic----------------------------

export const addAcademicModuleFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${landingUrl}/${data.id}/new/academic/section/query`,
      method: method,
      body: data.updateSiteInfo,
    }),
  });
};

export const updateAcademicModuleFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${landingUrl}/${data.aid}/exist/academic/section/query`,
      method: method,
      body: data.updateSiteInfo,
    }),
  });
};

export const getAcademicModuleFunction = (builder) => {
  return builder.query({
    query: (aid) => `${landingUrl}/${aid}/academic/section/query`,
  });
};

// ----------------------------------Site NSS----------------------------

export const addNssModuleFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${landingUrl}/${data.id}/new/nss/query`,
      method: method,
      body: data.updateSiteInfo,
    }),
  });
};

export const updateNssModuleFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${landingUrl}/${data.nid}/exist/nss/query`,
      method: method,
      body: data.updateSiteInfo,
    }),
  });
};

export const getNssModuleFunction = (builder) => {
  return builder.query({
    query: (nid) => `${landingUrl}/${nid}/nss/query`,
  });
};

export const getFacilitiesModuleFunction = (builder) => {
  return builder.query({
    query: (fid) => `${landingUrl}/${fid}/facilities/query`,
  });
};

export const addFacilitiesModuleFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${landingUrl}/${data.id}/new/facilities/query`,
      method: method,
      body: data.updateSiteInfo,
    }),
  });
};

export const updateFacilitiesModuleFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${landingUrl}/${data.fid}/edit/facilities/query`,
      method: method,
      body: data.updateSiteInfo,
    }),
  });
};

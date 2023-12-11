const transportBaseUrl = "/api/v1/transport";
const baseUrl = "/api/v1";

export const transportDetailFunction = (builder) => {
  return builder.query({
    query: (tid) => `${transportBaseUrl}/${tid}/dashboard`,
  });
};

export const transportActivateFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${transportBaseUrl}/ins/${data.id}/transport/query`,
      method: `POST`,
      body: data.fActivate,
    }),
  });
};

export const transportEidtActivateFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/edit/staff/transport/staff/${data.osid}?nsid=${data.nsid}`,
      method: "PATCH",
    }),
  });
};
export const transportCoverUploadFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/all-images/${data.tid}/transport/cover`,
      method: "PATCH",
      body: data.uploadFile,
    }),
  });
};

export const transportVehicleCoverUploadFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/all-images/${data.vid}/vehicle/cover`,
      method: "PATCH",
      body: data.uploadFile,
    }),
  });
};
//
export const addVehicleFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${transportBaseUrl}/${data.tid}/new/vehicle`,
      method: "POST",
      body: data.createVehicle,
    }),
  });
};

export const addRouteFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${transportBaseUrl}/vehicle/${data.vid}/new/route`,
      method: "POST",
      body: data.createRoute,
    }),
  });
};

export const updateRouteFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${transportBaseUrl}/vehicle/${data.vid}/route/update?route_status=${data.route_status}`,
      method: "PATCH",
      body: data.modifyRoute,
    }),
  });
};

export const addPassengerFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${transportBaseUrl}/vehicle/${data.vid}/new/passenger`,
      method: "POST",
      body: data.createPassenger,
    }),
  });
};

///
export const getVehicleListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${transportBaseUrl}/${data.tid}/all/vehicles?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};
export const getPassengerListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${transportBaseUrl}/${data.tid}/all/passengers?page=${data.page}&limit=${
        data.limit
      }&search=${data.search}&filter_by=${data.filter_by}&batch_filter=${
        data.batch_filter
      }&id=${data?.id ?? ""}`,
  });
};

export const getDriverConductorListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${transportBaseUrl}/${data.tid}/all/vehicles/staff?page=${data.page}&limit=${data.limit}`,
  });
};
export const getVehicleDetailFunction = (builder) => {
  return builder.query({
    query: (vid) => `${transportBaseUrl}/one/vehicle/${vid}/query`,
  });
};

export const getOneVehiclePassengerListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${transportBaseUrl}/one/vehicle/${data.vid}/query/all/passengers?page=${
        data.page
      }&limit=${data.limit}&search=${data.search}&filter_by=${
        data.filter_by
      }&batch_filter=${data.batch_filter}&id=${data?.id ?? ""}`,
  });
};
export const getOneVehicleRouteListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${transportBaseUrl}/one/vehicle/${data.vid}/route?search=${data.search}`,
  });
};

//
export const collectTransportFeesFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${transportBaseUrl}/${data.tid}/students/${
        data.sid
      }/collect/offline?id=${data?.id ?? ""}`,
      method: "POST",
      body: data.collectFees,
    }),
  });
};
export const requestCashToFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${transportBaseUrl}/${data.tid}/request/finance`,
      method: "PATCH",
      body: data.submitCash,
    }),
  });
};
export const deleteOneRouteFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${transportBaseUrl}/vehicle/${data.vid}/${data.rid}/destroy`,
      method: "DELETE",
    }),
  });
};

export const deletePassengerFromVehicleFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${transportBaseUrl}/vehicle/${data.vid}/destroy/passenger/${data.sid}`,
      method: "DELETE",
    }),
  });
};

// for transport batch
export const getTransportAllBatchFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${transportBaseUrl}/${data.tid}/all/batch/query?page=${data.page}&limit=${data.limit}`,
  });
};

export const createTransportBatchFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${transportBaseUrl}/${data.tid}/new/batch/query?id=${
        data?.id ?? ""
      }`,
      method: `POST`,
      body: data.transportBatch,
    }),
  });
};
export const selectTransportBatchFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${transportBaseUrl}/${data.tid}/batch-select/${data.bid}`,
      method: `POST`,
    }),
  });
};

export const deleteTransportBatchFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/edit/institute/transport/batch/${data.bid}`,
      method: `DELETE`,
    }),
  });
};

export const getTransportAllStandardFunction = (builder) => {
  return builder.query({
    query: (tid) => `${transportBaseUrl}/${tid}/all/master/query`,
  });
};
export const createTransportStandardFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${transportBaseUrl}/${data.tid}/new/master/query`,
      method: `POST`,
      body: data.transportStandard,
    }),
  });
};

// deposit
export const getMasterDepositByTransportFunction = (builder) => {
  return builder.query({
    query: (tid) => `${transportBaseUrl}/${tid}/master/deposit/query`,
  });
};
export const getAllDepositRefundByTransportFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${transportBaseUrl}/${data.tid}/master/all/refund/deposit/history?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const getPendingFeeByTransportFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${transportBaseUrl}/${data.tid}/all/remaining/array?page=${
        data.page
      }&limit=${data.limit}&search=${data.search}&id=${data?.id ?? ""}`,
  });
};

export const getTransportFeeStructureListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${transportBaseUrl}/${data.tid}/all/fee/structure?page=${
        data.page
      }&limit=${data.limit}&filter_by=${data.filter_by ?? ""}&master_by=${
        data.master_by ?? ""
      }&vehicle_by=${data?.vehicle_by ?? ""}`,
  });
};

export const transportCollectFeesFunction = (builder) => {
  return builder.mutation({
    query: (confirm) => ({
      url: `${transportBaseUrl}/${confirm.tid}/students/${
        confirm.sid
      }/collect/offline?receipt_status=${confirm?.receipt_status}&id=${
        confirm?.id ?? ""
      }`,
      method: "POST",
      body: confirm.confirm_data,
    }),
  });
};

export const applicantTransportRemainingFeeFuntcion = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${transportBaseUrl}/${data.tid}/paid/remaining/fee/${
        data.sid
      }/student?id=${data?.id ?? ""}`,
      method: "POST",
      body: data.remain_data,
    }),
  });
};
export const transportGetSiteInfoFunction = (builder) => {
  return builder.query({
    query: (tid) => `${baseUrl}/site/info/transport/${tid}`,
  });
};

export const transportUpdateSiteInfoFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/site/info/transport/${data.tid}`,
      method: `PATCH`,
      body: data.updateSiteInfo,
    }),
  });
};

export const getTransportLinkedListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${transportBaseUrl}/all/${data.tid}/not/linked/query?page=${
        data.page
      }&limit=${data.limit}&search=${data.search ?? ""}`,
  });
};

export const addTransportLinkedInstituteFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${transportBaseUrl}/${data.tid}/linked/one/${data.id}/query`,
      method: "PATCH",
    }),
  });
};

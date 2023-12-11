import { transportApi } from "./transportApi";
import {
  addPassengerFunction,
  addRouteFunction,
  addVehicleFunction,
  collectTransportFeesFunction,
  deleteOneRouteFunction,
  deletePassengerFromVehicleFunction,
  getDriverConductorListFunction,
  getOneVehiclePassengerListFunction,
  getOneVehicleRouteListFunction,
  getPassengerListFunction,
  getVehicleDetailFunction,
  getVehicleListFunction,
  requestCashToFinanceFunction,
  transportActivateFunction,
  transportCoverUploadFunction,
  transportDetailFunction,
  transportEidtActivateFunction,
  transportVehicleCoverUploadFunction,
  updateRouteFunction,

  // batch functionality
  getTransportAllBatchFunction,
  createTransportBatchFunction,
  selectTransportBatchFunction,
  deleteTransportBatchFunction,

  //
  getTransportAllStandardFunction,
  createTransportStandardFunction,
  getMasterDepositByTransportFunction,
  getAllDepositRefundByTransportFunction,
  getPendingFeeByTransportFunction,
  getTransportFeeStructureListFunction,
  transportCollectFeesFunction,
  applicantTransportRemainingFeeFuntcion,
  transportGetSiteInfoFunction,
  transportUpdateSiteInfoFunction,
  getTransportLinkedListFunction,
  addTransportLinkedInstituteFunction,
} from "./transport_query_mutaion_function";

export const transportDynamicApi = transportApi.injectEndpoints({
  endpoints: (builder) => ({
    transportDetail: transportDetailFunction(builder),
    transportActivate: transportActivateFunction(builder),
    transportEidtActivate: transportEidtActivateFunction(builder),
    transportCoverUpload: transportCoverUploadFunction(builder),
    transportVehicleCoverUpload: transportVehicleCoverUploadFunction(builder),
    //
    addVehicle: addVehicleFunction(builder),
    addRoute: addRouteFunction(builder),
    updateRoute: updateRouteFunction(builder),
    addPassenger: addPassengerFunction(builder),
    //
    getVehicleList: getVehicleListFunction(builder),
    getPassengerList: getPassengerListFunction(builder),
    getDriverConductorList: getDriverConductorListFunction(builder),
    getVehicleDetail: getVehicleDetailFunction(builder),
    getOneVehiclePassengerList: getOneVehiclePassengerListFunction(builder),
    getOneVehicleRouteList: getOneVehicleRouteListFunction(builder),

    ///
    collectTransportFees: collectTransportFeesFunction(builder),
    requestCashToFinance: requestCashToFinanceFunction(builder),
    deleteOneRoute: deleteOneRouteFunction(builder),
    deletePassengerFromVehicle: deletePassengerFromVehicleFunction(builder),

    getTransportAllBatch: getTransportAllBatchFunction(builder),
    createTransportBatch: createTransportBatchFunction(builder),
    selectTransportBatch: selectTransportBatchFunction(builder),
    deleteTransportBatch: deleteTransportBatchFunction(builder),

    getTransportAllStandard: getTransportAllStandardFunction(builder),
    createTransportStandard: createTransportStandardFunction(builder),

    getMasterDepositByTransport: getMasterDepositByTransportFunction(builder),
    getAllDepositRefundByTransport:
      getAllDepositRefundByTransportFunction(builder),
    getPendingFeeByTransport: getPendingFeeByTransportFunction(builder),
    getTransportFeeStructureList: getTransportFeeStructureListFunction(builder),
    transportCollectFees: transportCollectFeesFunction(builder),
    applicantTransportRemainingFee:
      applicantTransportRemainingFeeFuntcion(builder),
    transportGetSiteInfo: transportGetSiteInfoFunction(builder),
    transportUpdateSiteInfo: transportUpdateSiteInfoFunction(builder),
    getTransportLinkedList: getTransportLinkedListFunction(builder),
    addTransportLinkedInstitute: addTransportLinkedInstituteFunction(builder),
  }),
});

export const {
  useTransportDetailQuery,
  useTransportActivateMutation,
  useTransportEidtActivateMutation,
  useTransportCoverUploadMutation,
  useTransportVehicleCoverUploadMutation,
  //
  useAddVehicleMutation,
  useAddRouteMutation,
  useUpdateRouteMutation,
  useAddPassengerMutation,
  //
  useGetVehicleListQuery,
  useGetPassengerListQuery,
  useGetDriverConductorListQuery,
  useGetVehicleDetailQuery,
  useGetOneVehiclePassengerListQuery,
  useGetOneVehicleRouteListQuery,
  //
  useCollectTransportFeesMutation,
  useRequestCashToFinanceMutation,
  useDeleteOneRouteMutation,
  useDeletePassengerFromVehicleMutation,

  useGetTransportAllBatchQuery,
  useCreateTransportBatchMutation,
  useSelectTransportBatchMutation,
  useDeleteTransportBatchMutation,
  useGetTransportAllStandardQuery,
  useCreateTransportStandardMutation,

  useGetMasterDepositByTransportQuery,
  useGetAllDepositRefundByTransportQuery,
  useGetPendingFeeByTransportQuery,
  useGetTransportFeeStructureListQuery,
  useTransportCollectFeesMutation,
  useApplicantTransportRemainingFeeMutation,
  useTransportGetSiteInfoQuery,
  useTransportUpdateSiteInfoMutation,
  useGetTransportLinkedListQuery,
  useAddTransportLinkedInstituteMutation,
} = transportDynamicApi;

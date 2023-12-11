import {
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
} from "../../services/staff_department/transport/transportDynamicApi";

export const useTransportDetail = (args) => {
  const { data: transportDetail, refetch: transportDetailRefetch } =
    useTransportDetailQuery(args.tid, { skip: args.skip });
  return { transportDetail, transportDetailRefetch };
};
export const useTransportActivate = () => {
  const [transportActivate] = useTransportActivateMutation();
  return [transportActivate];
};

export const useTransportEidtActivate = () => {
  const [transportEidtActivate] = useTransportEidtActivateMutation();
  return [transportEidtActivate];
};
export const useTransportCoverUpload = () => {
  const [transportCoverUpload] = useTransportCoverUploadMutation();
  return [transportCoverUpload];
};
export const useTransportVehicleCoverUpload = () => {
  const [transportVehicleCoverUpload] =
    useTransportVehicleCoverUploadMutation();
  return [transportVehicleCoverUpload];
};
//

export const useAddVehicle = () => {
  const [addVehicle] = useAddVehicleMutation();
  return [addVehicle];
};

export const useAddRoute = () => {
  const [addRoute] = useAddRouteMutation();
  return [addRoute];
};
export const useUpdateRoute = () => {
  const [updateRoute] = useUpdateRouteMutation();
  return [updateRoute];
};
export const useAddPassenger = () => {
  const [addPassenger] = useAddPassengerMutation();
  return [addPassenger];
};

//
export const useGetVehicleList = (args) => {
  const { data: getVehicleList, refetch: getVehicleListRefetch } =
    useGetVehicleListQuery(args.data, { skip: args.skip });
  return { getVehicleList, getVehicleListRefetch };
};
export const useGetPassengerList = (args) => {
  const { data: getPassengerList, refetch: getPassengerListRefetch } =
    useGetPassengerListQuery(args.data, { skip: args.skip });
  return { getPassengerList, getPassengerListRefetch };
};
export const useGetDriverConductorList = (args) => {
  const {
    data: getDriverConductorList,
    refetch: getDriverConductorListRefetch,
  } = useGetDriverConductorListQuery(args.data, { skip: args.skip });
  return { getDriverConductorList, getDriverConductorListRefetch };
};
export const useGetVehicleDetail = (args) => {
  const { data: getVehicleDetail, refetch: getVehicleDetailRefetch } =
    useGetVehicleDetailQuery(args.vid, { skip: args.skip });
  return { getVehicleDetail, getVehicleDetailRefetch };
};
export const useGetOneVehiclePassengerList = (args) => {
  const {
    data: getOneVehiclePassengerList,
    refetch: getOneVehiclePassengerListRefetch,
  } = useGetOneVehiclePassengerListQuery(args.data, { skip: args.skip });
  return { getOneVehiclePassengerList, getOneVehiclePassengerListRefetch };
};
export const useGetOneVehicleRouteList = (args) => {
  const {
    data: getOneVehicleRouteList,
    refetch: getOneVehicleRouteListRefetch,
  } = useGetOneVehicleRouteListQuery(args.data, { skip: args.skip });
  return { getOneVehicleRouteList, getOneVehicleRouteListRefetch };
};

//

export const useCollectTransportFees = () => {
  const [collectTransportFees] = useCollectTransportFeesMutation();
  return [collectTransportFees];
};

export const useRequestCashToFinance = () => {
  const [requestCashToFinance] = useRequestCashToFinanceMutation();
  return [requestCashToFinance];
};
export const useDeleteOneRoute = () => {
  const [deleteOneRoute] = useDeleteOneRouteMutation();
  return [deleteOneRoute];
};
export const useDeletePassengerFromVehicle = () => {
  const [deletePassengerFromVehicle] = useDeletePassengerFromVehicleMutation();
  return [deletePassengerFromVehicle];
};

//// batch
export const useGetTransportAllBatch = (args) => {
  const { data: getTransportAllBatch, refetch: getTransportAllBatchRefetch } =
    useGetTransportAllBatchQuery(args.data, { skip: args.skip });
  return { getTransportAllBatch, getTransportAllBatchRefetch };
};

export const useCreateTransportBatch = () => {
  const [createTransportBatch] = useCreateTransportBatchMutation();
  return [createTransportBatch];
};

export const useSelectTransportBatch = () => {
  const [selectTransportBatch] = useSelectTransportBatchMutation();
  return [selectTransportBatch];
};

export const useDeleteTransportBatch = () => {
  const [deleteTransportBatch] = useDeleteTransportBatchMutation();
  return [deleteTransportBatch];
};

export const useGetTransportAllStandard = (args) => {
  const {
    data: getTransportAllStandard,
    refetch: getTransportAllStandardRefetch,
  } = useGetTransportAllStandardQuery(args.tid, { skip: args.skip });
  return { getTransportAllStandard, getTransportAllStandardRefetch };
};

export const useCreateTransportStandard = () => {
  const [createTransportStandard] = useCreateTransportStandardMutation();
  return [createTransportStandard];
};

export const useGetMasterDepositByTransport = (args) => {
  const {
    data: getMasterDepositByTransport,
    refetch: getMasterDepositByTransportRefetch,
  } = useGetMasterDepositByTransportQuery(args.tid, { skip: args.skip });
  return { getMasterDepositByTransport, getMasterDepositByTransportRefetch };
};

export const useGetAllDepositRefundByTransport = (args) => {
  const {
    data: getAllDepositRefundByTransport,
    refetch: getAllDepositRefundByTransportRefetch,
  } = useGetAllDepositRefundByTransportQuery(args.data, { skip: args.skip });
  return {
    getAllDepositRefundByTransport,
    getAllDepositRefundByTransportRefetch,
  };
};
export const useGetPendingFeeByTransport = (args) => {
  const {
    data: getPendingFeeByTransport,
    refetch: getPendingFeeByTransportRefetch,
  } = useGetPendingFeeByTransportQuery(args.data, { skip: args.skip });
  return { getPendingFeeByTransport, getPendingFeeByTransportRefetch };
};

export const useGetTransportFeeStructureList = (args) => {
  const {
    data: getTransportFeeStructureList,
    refetch: getTransportFeeStructureListRefetch,
  } = useGetTransportFeeStructureListQuery(args.data, { skip: args.skip });
  return { getTransportFeeStructureList, getTransportFeeStructureListRefetch };
};

export const useTransportCollectFees = () => {
  const [transportCollectFees] = useTransportCollectFeesMutation();
  return [transportCollectFees];
};

export const useApplicantTransportRemainingFee = () => {
  const [applicantTransportRemainingFee] =
    useApplicantTransportRemainingFeeMutation();
  return [applicantTransportRemainingFee];
};
export const useTransportGetSiteInfo = (args) => {
  const { data: transportGetSiteInfo, refetch: transportGetSiteInfoRefetch } =
    useTransportGetSiteInfoQuery(args.tid, { skip: args.skip });
  return { transportGetSiteInfo, transportGetSiteInfoRefetch };
};

export const useTransportUpdateSiteInfo = () => {
  const [transportUpdateSiteInfo] = useTransportUpdateSiteInfoMutation();
  return [transportUpdateSiteInfo];
};

export const useGetTransportLinkedList = (args) => {
  const {
    data: getTransportLinkedList,
    refetch: getTransportLinkedListRefetch,
  } = useGetTransportLinkedListQuery(args.data, { skip: args.skip });
  return { getTransportLinkedList, getTransportLinkedListRefetch };
};

export const useAddTransportLinkedInstitute = () => {
  const [addTransportLinkedInstitute] =
    useAddTransportLinkedInstituteMutation();
  return [addTransportLinkedInstitute];
};

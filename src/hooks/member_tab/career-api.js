import {
  useActivateCareerMutation,
  useCareerInfoQuery,
  useCreateVacancyMutation,
  useVacancyInfoQuery,
  useMarkCompleteVacancyMutation,
  useVacancyListQuery,
  useApplyVacancyMutation,
  useApplicationListQuery,
  useScheduleInterviewMutation,
  useDeleteVacancyMutation,
  useActivateTenderMutation,
  useTenderInfoQuery,
  useCreateTenderMutation,
  useTenderListQuery,
  useMarkClosedTenderMutation,
  useSingleTenderInfoQuery,
  useApplyTenderMutation,
  useBiderListQuery,
  usePlaceBidOrderMutation,
  useDeleteTenderMutation,
} from "../../services/career/careerApi";

export const useActivateCareer = () => {
  const [activeCareer] = useActivateCareerMutation();
  return [activeCareer];
};

export const useGetCareeDetail = (args) => {
  const { data: getCareerDetail, refetch: getCareerDetailRefetch } =
    useCareerInfoQuery(
      args?.lcid
      // args?.eid, { skip: args?.skip }
    );
  return { getCareerDetail, getCareerDetailRefetch };
};

export const useCreateVacancy = () => {
  const [createNewVacancy] = useCreateVacancyMutation();
  return [createNewVacancy];
};

export const useGetVacancylist = (args) => {
  const { data: getVacancylist, refetch: getVacancyListRefetch } =
    useVacancyListQuery(args.data, { skip: args?.skip });
  return { getVacancylist, getVacancyListRefetch };
};

export const useMarkComplete = () => {
  const [markComplete] = useMarkCompleteVacancyMutation();
  return [markComplete];
};

export const useGetVacancyDetail = (args) => {
  const { data: getVacancyDetail, refetch: getVacancyDetailRefetch } =
    useVacancyInfoQuery(
      args?.vid
      // args?.eid, { skip: args?.skip }
    );

  return { getVacancyDetail, getVacancyDetailRefetch };
};

export const useApplyVacancy = () => {
  const [applyVacancy] = useApplyVacancyMutation();
  return [applyVacancy];
};

export const useGetApplicationlist = (args) => {
  const { data: getApplicationlist, refetch: getApplicationListRefetch } =
    useApplicationListQuery(args.data, { skip: args?.skip });
  return { getApplicationlist, getApplicationListRefetch };
};

export const useScheduleInterview = () => {
  const [scheduleInterview] = useScheduleInterviewMutation();
  return [scheduleInterview];
};

export const useVacancyDelete = () => {
  const [vacancyDelete] = useDeleteVacancyMutation();
  return [vacancyDelete];
};

// ----------------------------------------------------

export const useActivateTender = () => {
  const [activeTender] = useActivateTenderMutation();
  return [activeTender];
};

export const useGetTenderDetail = (args) => {
  const { data: getTenderDetail, refetch: getTenderDetailRefetch } =
    useTenderInfoQuery(
      args?.ltid
      // args?.eid, { skip: args?.skip }
    );
  return { getTenderDetail, getTenderDetailRefetch };
};

export const useCreateTender = () => {
  const [createNewTender] = useCreateTenderMutation();
  return [createNewTender];
};

export const useGetTenderlist = (args) => {
  const { data: getTenderlist, refetch: getTenderListRefetch } =
    useTenderListQuery(args.data, { skip: args?.skip });
  return { getTenderlist, getTenderListRefetch };
};

export const useMarkClosed = () => {
  const [markClosed] = useMarkClosedTenderMutation();
  return [markClosed];
};

export const useGetSingleTenderDetail = (args) => {
  const { data: getTenderDetail, refetch: getTenderDetailRefetch } =
    useSingleTenderInfoQuery(
      args?.tid
      // args?.eid, { skip: args?.skip }
    );

  return { getTenderDetail, getTenderDetailRefetch };
};

export const useApplyTender = () => {
  const [applyTender] = useApplyTenderMutation();
  return [applyTender];
};

export const useGetBiderlist = (args) => {
  const { data: getBiderlist, refetch: getBiderListRefetch } =
    useBiderListQuery(args.data, { skip: args?.skip });
  return { getBiderlist, getBiderListRefetch };
};

export const usePlaceBidOffer = () => {
  const [placeBidOffer] = usePlaceBidOrderMutation();
  return [placeBidOffer];
};

export const useTenderDelete = () => {
  const [tenderDelete] = useDeleteTenderMutation();
  return [tenderDelete];
};

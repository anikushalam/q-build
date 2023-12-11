import {
  useActivateAlumniMutation,
  useAlumniEidtActivateMutation,
  useAlumniInfoQuery,
  useAlumniRegMutation,
  useAlumniRegListQuery,
  useGiveCertificateMutation,
  useProminentAlumniListQuery,
  useAddStoryMutation,
  useFeedbackListQuery,
  useAddFeedbackPollMutation,
} from "../../services/alumni/alumniApi";

export const useActivateAlumni = () => {
  const [activeAlumni] = useActivateAlumniMutation();
  return [activeAlumni];
};

export const useAlumniEidtActivate = () => {
  const [alumniEidtActivate] = useAlumniEidtActivateMutation();
  return [alumniEidtActivate];
};
export const useGetAlumniDetail = (args) => {
  const { data: getAlumniDetail, refetch: getAlumniDetailRefetch } =
    useAlumniInfoQuery(
      args?.aid
      // args?.eid, { skip: args?.skip }
    );
  return { getAlumniDetail, getAlumniDetailRefetch };
};

export const useAlumniReg = () => {
  const [newAlumniReg] = useAlumniRegMutation();
  return [newAlumniReg];
};

export const useGetAlumniReglist = (args) => {
  const { data: getAlumniReglist, refetch: getAlumniRegListRefetch } =
    useAlumniRegListQuery(args.data, { skip: args?.skip });
  return { getAlumniReglist, getAlumniRegListRefetch };
};

export const useGiveCertificate = () => {
  const [giveCertificate] = useGiveCertificateMutation();
  return [giveCertificate];
};

export const useGetProminentAlumniList = (args) => {
  const {
    data: getProminentAlumniList,
    refetch: getProminentAlumniListRefetch,
  } = useProminentAlumniListQuery(args.data, { skip: args?.skip });
  return { getProminentAlumniList, getProminentAlumniListRefetch };
};

export const useAddStory = () => {
  const [newAddStory] = useAddStoryMutation();
  return [newAddStory];
};

export const useGetFeedbackList = (args) => {
  const { data: getFeedbackList, refetch: getFeedbackListRefetch } =
    useFeedbackListQuery(args.data, { skip: args?.skip });
  return { getFeedbackList, getFeedbackListRefetch };
};

export const useCreatePoll = () => {
  const [createPoll] = useAddFeedbackPollMutation();
  return [createPoll];
};

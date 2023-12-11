import {
  useActivateEventDeptMutation,
  useEditEventAdnSeminarMutation,
  useEventDeptInfoQuery,
  useAlleventListQuery,
  useAllSeminarListQuery,
  useOneDeptEventListQuery,
  useOneDeptSeminarListQuery,
  useOneDeptElectionListQuery,
  useSingleEventInfoQuery,
  useSingleSeminarInfoQuery,
  useCreateNewEventMutation,
  useCreateNewSeminarMutation,
  useDeleteEventMutation,
  useDeleteSeminarMutation,
  useEditEventMutation,
  useEditSeminarMutation,
} from "../../services/event/eventApi";

export const useAssignEventManager = () => {
  const [assignEventManager] = useActivateEventDeptMutation();
  return [assignEventManager];
};

export const useEditEventAdnSeminar = () => {
  const [editEventAdnSeminar] = useEditEventAdnSeminarMutation();
  return [editEventAdnSeminar];
};
export const useGeteventDeptDetail = (args) => {
  const { data: getEventDeptDetail, refetch: getEventDeptDetailRefetch } =
    useEventDeptInfoQuery(
      args?.eid
      // args?.eid, { skip: args?.skip }
    );
  return { getEventDeptDetail, getEventDeptDetailRefetch };
};

export const useGetEventlist = (args) => {
  const { data: getEventlist, refetch: getEventListRefetch } =
    useAlleventListQuery(args.data, { skip: args?.skip });
  return { getEventlist, getEventListRefetch };
};

export const useGetSeminarlist = (args) => {
  const { data: getSeminarlist, refetch: getSeminarListRefetch } =
    useAllSeminarListQuery(args.data, { skip: args?.skip });
  return { getSeminarlist, getSeminarListRefetch };
};

export const useGetOneDeptEventlist = (args) => {
  const { data: getOneDeptEventlist, refetch: getOneDeptEventListRefetch } =
    useOneDeptEventListQuery(args.data, { skip: args?.skip });
  return { getOneDeptEventlist, getOneDeptEventListRefetch };
};

export const useGetOneDeptElectionlist = (args) => {
  const {
    data: getOneDeptElectionlist,
    refetch: getOneDeptElectionListRefetch,
  } = useOneDeptElectionListQuery(args.data, { skip: args?.skip });
  return { getOneDeptElectionlist, getOneDeptElectionListRefetch };
};

export const useGetOneDeptSeminarlist = (args) => {
  const { data: getOneDeptSeminarlist, refetch: getOneDeptSeminarListRefetch } =
    useOneDeptSeminarListQuery(args.data, { skip: args?.skip });
  return { getOneDeptSeminarlist, getOneDeptSeminarListRefetch };
};

export const useGetOneEventDetail = (args) => {
  const { data: getOneEventDetail, refetch: getOneEventDetailRefetch } =
    useSingleEventInfoQuery(
      args?.evid
      // args?.eid, { skip: args?.skip }
    );
  return { getOneEventDetail, getOneEventDetailRefetch };
};

export const useGetOneSeminarDetail = (args) => {
  const { data: getOneSeminarDetail, refetch: getOneSeminarDetailRefetch } =
    useSingleSeminarInfoQuery(
      args?.smid
      // args?.eid, { skip: args?.skip }
    );
  return { getOneSeminarDetail, getOneSeminarDetailRefetch };
};

export const useCreateEvent = () => {
  const [createNewEvent] = useCreateNewEventMutation();
  return [createNewEvent];
};

export const useCreateSeminar = () => {
  const [createNewSeminar] = useCreateNewSeminarMutation();
  return [createNewSeminar];
};

export const useEventDelete = () => {
  const [eventDelete] = useDeleteEventMutation();
  return [eventDelete];
};
export const useSeminarDelete = () => {
  const [seminarDelete] = useDeleteSeminarMutation();
  return [seminarDelete];
};

export const useEventEdit = () => {
  const [eventEdit] = useEditEventMutation();
  return [eventEdit];
};
export const useSeminarEdit = () => {
  const [seminarEdit] = useEditSeminarMutation();
  return [seminarEdit];
};

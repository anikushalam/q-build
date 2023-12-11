import {
  useActivateSportsAndArtsMutation,
  useFetchSportsArtsQuery,
  useCreateSportsClassMutation,
  useSportsArtsProfilePhotoFunctionMutation,
  useSportsArtsCoverPhotoFunctionMutation,
  useCreateSportsEventMutation,
  useSportsEventDetailsQuery,
  useSportsClassDetailsQuery,
  useStudentApprovedArrayQuery,
  useAddStudentInSportClassMutation,
  useCreateSportsTeamMutation,
  useCreateNewMatchIntraMutation,
  useCreateNewMatchInterMutation,
  useAllMatchListQuery,
  useOngoingEventListQuery,
  useCompletedEventListQuery,
  useRmoveStudentInSportClassMutation,
  useMatchDetailsQuery,
  useEditIntraMatchResultIndividualMutation,
  useAllEventClassListQuery,
  useAllClassStudentListQuery,
  useAllClassTeamListQuery,
  useEditInterMatchResultIndividualMutation,
  useStudentExtraSkillDataQuery,
  useStudentMatchListQuery,
  useSportClassStudentListQuery,
  useSportClassTeamListQuery,
  useEditInterMatchResultTeamMutation,
  useEditIntraMatchResultTeamMutation,
  useEditInterMatchResultFreeStyleMutation,
  useEditIntraMatchResultFreeStyleMutation,
  useSportsArtsClassProfilePhotoFunctionMutation,
  useSportsClassCoverPhotoMutation,
  useSportClassListStudentQuery,
  useSportClassTeamStudentQuery,
  useSportsTeamDetailsStudentQuery,
} from "../../services/sports_and_arts/sportsAndArtsApi";

export const useActiveSports = () => {
  const [activeSports] = useActivateSportsAndArtsMutation();
  return [activeSports];
};

export const useFetchSportsArts = (args) => {
  const { data, refetch } = useFetchSportsArtsQuery(args.sportId, {
    skip: args?.skip,
  });
  return {
    fetchSportsArts: data,
    fetchSportsArtsRefetch: refetch,
  };
};

export const useActiveSportsClass = () => {
  const [activeSportsClass] = useCreateSportsClassMutation();
  return [activeSportsClass];
};
export const useSportsProfilePhoto = () => {
  const [sportsProfilePhoto] = useSportsArtsProfilePhotoFunctionMutation();
  return [sportsProfilePhoto];
};
export const useSportsArtsCoverPhoto = () => {
  const [sportsCoverPhoto] = useSportsArtsCoverPhotoFunctionMutation();
  return [sportsCoverPhoto];
};

export const useCreateSportsEvent = () => {
  const [createSportsEvent] = useCreateSportsEventMutation();
  return [createSportsEvent];
};

export const useOngoingEventList = (args) => {
  const { data: ongoingEventList, refetch: ongoingEventListRefetch } =
    useOngoingEventListQuery(args.data, { skip: args?.skip });
  return { ongoingEventList, ongoingEventListRefetch };
};
export const useCompletedEventList = (args) => {
  const { data: completedEventList, refetch: completedEventListRefetch } =
    useCompletedEventListQuery(args.data, { skip: args?.skip });
  return { completedEventList, completedEventListRefetch };
};

export const useSportsEventDetail = (args) => {
  const { data: sportsEventDetails, refetch: sportsEventDetailsRefetch } =
    useSportsEventDetailsQuery(args.eid, { skip: args?.skip });
  return { sportsEventDetails, sportsEventDetailsRefetch };
};

export const useSportsClassDetails = (args) => {
  const { data: sportsClassDetails, refetch: sportsClassDetailsRefetch } =
    useSportsClassDetailsQuery(args.sportClassId, { skip: args?.skip });
  return { sportsClassDetails, sportsClassDetailsRefetch };
};

export const useStudentApprovedArray = (args) => {
  const { data: studentApprovedArray, refetch: studentApprovedArrayRefetch } =
    useStudentApprovedArrayQuery(args.insId, { skip: args?.skip });
  return { studentApprovedArray, studentApprovedArrayRefetch };
};

export const useSportClassStudentList = (args) => {
  const { data: SportClassStudentList, refetch: SportClassStudentListRefetch } =
    useSportClassStudentListQuery(args.data, { skip: args?.skip });
  return { SportClassStudentList, SportClassStudentListRefetch };
};

export const useCreateSportsTeam = () => {
  const [createSportsTeam] = useCreateSportsTeamMutation();
  return [createSportsTeam];
};

export const useCreateNewMatchIntra = () => {
  const [CreateNewMatchIntra] = useCreateNewMatchIntraMutation();
  return [CreateNewMatchIntra];
};
export const useCreateNewMatchInter = () => {
  const [CreateNewMatchInter] = useCreateNewMatchInterMutation();
  return [CreateNewMatchInter];
};

export const useAddStudentInSportClass = () => {
  const [addStudentInSportClass] = useAddStudentInSportClassMutation();
  return [addStudentInSportClass];
};

export const useAllMatchList = (args) => {
  const { data: allMatchList, refetch: allMatchListRefetch } =
    useAllMatchListQuery(args.data, { skip: args?.skip });
  return { allMatchList, allMatchListRefetch };
};

export const useRmoveStudentInSportClass = () => {
  const [removeStudentInSportClass] = useRmoveStudentInSportClassMutation();
  return [removeStudentInSportClass];
};

export const useMatchDetails = (args) => {
  const { data: matchDetails, refetch: matchDetailsRefetch } =
    useMatchDetailsQuery(args.mid, { skip: args?.skip });
  return { matchDetails, matchDetailsRefetch };
};
export const useEditIntraMatchResultIndividual = () => {
  const [editIntraMatchResultIndividual] =
    useEditIntraMatchResultIndividualMutation();
  return [editIntraMatchResultIndividual];
};
export const useGetClassListStudent = (args) => {
  const { data: getClassListStudent, refetch: getClassListStudentRefetch } =
    useSportClassListStudentQuery(args.data, { skip: args?.skip });
  return { getClassListStudent, getClassListStudentRefetch };
};

export const useAllEventClassList = (args) => {
  const { data: AllEventClassList, refetch: AllEventClassListRefetch } =
    useAllEventClassListQuery(args.data, { skip: args?.skip });
  return { AllEventClassList, AllEventClassListRefetch };
};

export const useAllClassStudentList = (args) => {
  const { data: allClassStudentList, refetch: allClassStudentListRefetch } =
    useAllClassStudentListQuery(args.cid, { skip: args?.skip });
  return { allClassStudentList, allClassStudentListRefetch };
};

export const useAllClassTeamList = (args) => {
  const { data: allClassTeamList, refetch: allClassTeamListRefetch } =
    useAllClassTeamListQuery(args.cid, { skip: args?.skip });
  return { allClassTeamList, allClassTeamListRefetch };
};

export const useSportsArtsClassProfilePhotoFunction = () => {
  const [sportsArtsClassProfilePhoto] =
    useSportsArtsClassProfilePhotoFunctionMutation();
  return [sportsArtsClassProfilePhoto];
};

export const useSportsClassCoverPhoto = () => {
  const [sportsClassCoverPhoto] = useSportsClassCoverPhotoMutation();
  return [sportsClassCoverPhoto];
};

export const useEditIntraMatchResultTeam = () => {
  const [editIntraMatchResultTeam] = useEditIntraMatchResultTeamMutation();
  return [editIntraMatchResultTeam];
};

export const useEditInterMatchResultTeam = () => {
  const [editInterMatchResultTeam] = useEditInterMatchResultTeamMutation();
  return [editInterMatchResultTeam];
};

export const useEditInterMatchResultFreeStyle = () => {
  const [editInterMatchResultFreeStyle] =
    useEditInterMatchResultFreeStyleMutation();
  return [editInterMatchResultFreeStyle];
};

export const useEditIntraMatchResultFreeStyle = () => {
  const [editIntraMatchResultFreeStyle] =
    useEditIntraMatchResultFreeStyleMutation();
  return [editIntraMatchResultFreeStyle];
};

export const useEditInterMatchResultIndividual = () => {
  const [editInterMatchResultIndividual] =
    useEditInterMatchResultIndividualMutation();
  return [editInterMatchResultIndividual];
};

export const useStudentExtraSkillData = (args) => {
  const { data: studentExtraSkillData, refetch: studentExtraSkillDataRefetch } =
    useStudentExtraSkillDataQuery(args.sid, { skip: args?.skip });
  return { studentExtraSkillData, studentExtraSkillDataRefetch };
};

export const useStudentMatchList = (args) => {
  const { data: studentMatchList, refetch: studentMatchListRefetch } =
    useStudentMatchListQuery(args.data, { skip: args?.skip });
  return { studentMatchList, studentMatchListRefetch };
};

export const useSportClassTeamList = (args) => {
  const { data: SportClassTeamList, refetch: SportClassTeamListRefetch } =
    useSportClassTeamListQuery(args.data, { skip: args?.skip });
  return { SportClassTeamList, SportClassTeamListRefetch };
};

export const useGetSportTeamStudent = (args) => {
  const { data: getSportTeamStudent, refetch: getSportTeamStudentRefetch } =
    useSportClassTeamStudentQuery(args.data, { skip: args?.skip });
  return { getSportTeamStudent, getSportTeamStudentRefetch };
};

export const useGetSportTeamDetailsStudent = (args) => {
  const {
    data: getSportTeamDetailsStudent,
    refetch: getSportTeamDetailsStudentRefetch,
  } = useSportsTeamDetailsStudentQuery(args.data, { skip: args?.skip });
  return { getSportTeamDetailsStudent, getSportTeamDetailsStudentRefetch };
};

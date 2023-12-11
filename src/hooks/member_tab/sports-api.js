import {
  useSportsClassCoverPhotoMutation,
  useSportsArtsCoverPhotoFunctionMutation,
  useSportClassListStudentQuery,
  useSportClassTeamStudentQuery,
  useSportsTeamDetailsStudentQuery,
} from "../../services/sports_and_arts/sportsAndArtsApi";

export const useSportsClassCoverPhoto = () => {
  const [sportsCoverPhoto] = useSportsClassCoverPhotoMutation();
  return [sportsCoverPhoto];
};

export const useSportsArtsCoverPhoto = () => {
  const [sportsCoverPhoto] = useSportsArtsCoverPhotoFunctionMutation();
  return [sportsCoverPhoto];
};

// import {
//   useSportClassListStudentQuery,
//   useSportClassTeamStudentQuery,
//   useSportsTeamDetailsStudentQuery,
// } from "../../services/sports_and_arts/sportsAndArtsApi";

export const useGetClassListStudent = (args) => {
  const { data: getClassListStudent, refetch: getClassListStudentRefetch } =
    useSportClassListStudentQuery(args.data, { skip: args?.skip });
  return { getClassListStudent, getClassListStudentRefetch };
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

import {
  useInstituteCoverPhotoMutation,
  useInstituteProfilePhotoMutation,
  useUserProfilePhotoMutation,
  useUserCoverPhotoMutation,
  useUploadUserAndStudentProfileMutation,
} from "../../../services/imageApi";

export const useInstituteProfilePhoto = () => {
  const [instituteProfilePhoto] = useInstituteProfilePhotoMutation();
  return [instituteProfilePhoto];
};

export const useInstituteCoverPhoto = () => {
  const [instituteCoverPhoto] = useInstituteCoverPhotoMutation();
  return [instituteCoverPhoto];
};

export const useUserProfilePhoto = () => {
  const [userProfilePhoto] = useUserProfilePhotoMutation();
  return [userProfilePhoto];
};

export const useUploadUserAndStudentProfile = () => {
  const [uploadUserAndStudentProfile] =
    useUploadUserAndStudentProfileMutation();
  return [uploadUserAndStudentProfile];
};

export const useUserCoverPhoto = () => {
  const [userCoverPhoto] = useUserCoverPhotoMutation();
  return [userCoverPhoto];
};

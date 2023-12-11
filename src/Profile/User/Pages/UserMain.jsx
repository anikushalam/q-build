import React, { useEffect, useState } from "react";
import style from "./UserMain.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  useGetOneUserProfileQuery,
  useGetOneUserProfileUsernameQuery,
} from "../../../services/qvipleAPI";
import { idChangeAction } from "../../../redux/store/department-slice";
import UniversalProfileMiddle from "../../UniversalProfileMiddle/UniversalProfileMiddle";
import ProfileSidebarBottom from "../../../Dashboard/UserDashboard/Components/Mainbody/Sidebar/components/ProfileSidebarBottom";
import MiddleBody from "./MiddleBody";
import MainProfile from "./EditHead/MainProfile";
import {
  useUploadUserAndStudentProfile,
  useUserCoverPhoto,
  // useUserProfilePhoto,
} from "../../../Post/Institute/Components/image-api";
import BlockMenu from "./BlockMenu";
import UserProfilePhotoPopup from "./UserProfilePhotoPopup";

function UserMain() {
  const ids = useSelector((state) => state.idChange);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [openBlock, setOpenBlock] = useState(false);
  const { data: profileData, refetch } = useGetOneUserProfileQuery(
    ids?.searchProfile?.id ? ids?.searchProfile?.id : ids?.id,
    { skip: ids.searchProfile.type === "USERNAME" }
  );

  const { data: profileDataUsername, refetch: refetchUsername } =
    useGetOneUserProfileUsernameQuery(ids?.searchProfile?.id, {
      skip: ids.searchProfile.type === "ID",
    });
  useEffect(() => {
    if (ids.searchProfile.type === "USERNAME") refetchUsername();
    else if (ids.searchProfile.type === "ID") refetch();
  }, [ids.searchProfile.type, ids?.searchProfile?.id]);

  // console.info("This is search handelr", ids.searchProfile.id);
  useEffect(() => {
    if (profileDataUsername?.user && ids.searchProfile.type === "USERNAME") {
      dispatch(
        idChangeAction.searchId({
          id: profileDataUsername?.user?._id,
          type: "ID",
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileDataUsername?.user]);

  const resultId =
    ids?.searchProfile?.id !== "" ? ids?.searchProfile?.id : ids?.id;

  // --------------------------------------------------------------------
  const [upload, setUpload] = useState(false);
  const [uploadProfile, setUploadProfile] = useState(false);
  const [file, setFile] = useState("");
  const [fileProfile, setFileProfile] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [openCropCover, setOpenCropCover] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const [photoPopup, setPhotoPopup] = useState(false);
  const [profileUploadType, setProfileUploadType] = useState("");

  // const [userProfilePhoto] = useUserProfilePhoto();
  const [uploadUserAndStudentProfile] = useUploadUserAndStudentProfile();
  const [userCoverPhoto] = useUserCoverPhoto();

  useEffect(() => {
    if (upload) {
      let formData = new FormData();
      formData.append("file", file);
      userCoverPhoto({
        cover: formData,
        id: ids?.id,
      })
        .then(() => {})
        .catch({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upload, file]);

  useEffect(() => {
    if (uploadProfile) {
      let formData = new FormData();
      formData.append("file", fileProfile);
      uploadUserAndStudentProfile({
        photo: formData,
        id: ids?.id,
        role: profileUploadType,
      })
        .then(() => {})
        .catch({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadProfile, fileProfile]);

  const coverChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setFile(e.target.files[0]);
    setCoverPhoto(image);
    setPhotoURL(image);
    setOpenCrop(true);
  };

  const onOpenProfilePopup = () => {
    setPhotoPopup(true);
    // const image = URL.createObjectURL(e.target.files[0]);
    // setFileProfile(e.target.files[0]);
    // setProfilePhoto(image);
    // setPhotoURL(image);
    // setOpenCropCover(true);
  };

  const onUploadType = (value) => {
    setProfileUploadType((prev) => (prev = value));
  };
  const profileChange = (e) => {
    if (e.target.files?.length) {
      setPhotoPopup(false);
      const image = URL.createObjectURL(e.target.files[0]);
      setFileProfile(e.target.files[0]);
      setProfilePhoto(image);
      setPhotoURL(image);
      setOpenCropCover(true);
    }
  };

  // --------------------------------------------------------------

  return (
    <>
      {profileData &&
        ids?.repostQuestion?.repostStatus === "post" &&
        (edit ? (
          <div className={style.mainbodyedit}>
            <MainProfile setEdit={setEdit} />
          </div>
        ) : (
          <div className={style.mainbody}>
            <UniversalProfileMiddle
              resultId={resultId}
              insID={ids?.id}
              profileData={profileData?.user}
              searchId={ids?.searchProfile?.id}
              profile={ids}
              status="userProfile"
              setEdit={setEdit}
              openCrop={openCrop}
              openCropCover={openCropCover}
              setOpenCrop={setOpenCrop}
              setOpenCropCover={setOpenCropCover}
              coverChange={coverChange}
              profileChange={onOpenProfilePopup}
              photoURL={photoURL}
              setPhotoURL={setPhotoURL}
              coverPhoto={coverPhoto}
              profilePhoto={profilePhoto}
              setUpload={setUpload}
              setUploadProfile={setUploadProfile}
              setFile={setFile}
              setFileProfile={setFileProfile}
              setCoverPhoto={setCoverPhoto}
              setProfilePhoto={setProfilePhoto}
              setOpenBlock={setOpenBlock}
              blockedBy={profileData?.user?.blockedBy ?? []}
              loginUserId={ids?.id ?? ""}
              userId={ids?.searchProfile?.id ?? ""}
            />
            <div className={style.mainbodysplit}>
              <ProfileSidebarBottom
                userData={profileData?.user}
                status="profile"
              />

              <MiddleBody
                profileBody={profileData && profileData?.user}
                upVote={profileData?.upVote || 0}
                status="profile"
              />
              {openBlock && (
                <BlockMenu
                  userId={ids?.searchProfile?.id ?? ""}
                  onClose={() => setOpenBlock((pre) => !pre)}
                  onSearchRefetch={refetch}
                  blockedBy={profileData?.user?.blockedBy ?? []}
                  loginUserId={ids?.id ?? ""}
                />
              )}
            </div>
          </div>
        ))}

      {photoPopup && (
        <UserProfilePhotoPopup
          onClose={() => setPhotoPopup(false)}
          profileChange={profileChange}
          onUploadType={onUploadType}
        />
      )}
    </>
  );
}

export default UserMain;

import React, { useEffect, useState } from "react";
import MiddleContent from "./MiddleContent/MiddleContent";
import MiddleHead from "./MiddleHead/MiddleHead";
import { useTranslation } from "react-i18next";
import UniversalDepartmentMiddleHead from "../../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import { useSportsArtsCoverPhoto } from "../../../../../hooks/member_tab/sports-api";
// import MiddleHeadBottom from "./MiddleHeadBottom/MiddleHeadBottom";

function SportsAndArtsHeadProfile({
  setProfile,
  sportArtsDetails,
  setEventId,
  sportArtsDetailsRefetch,
}) {
  const { t } = useTranslation();

  // -----------------------------------
  const [sportsCoverPhoto] = useSportsArtsCoverPhoto();

  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");

  useEffect(() => {
    if (upload) {
      let formData = new FormData();
      formData.append("file", file);
      sportsCoverPhoto({
        cover: formData,
        sid: sportArtsDetails?._id,
      })
        .then((res) => {
          // console.info("done");
        })
        .catch({});
    }
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upload, file]);

  const profileChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setFile(e.target.files[0]);
    setProfilePhoto(image);
    setPhotoURL(image);
    setOpenCrop(true);
  };

  // -------------------------------------------

  return (
    <div>
      <UniversalDepartmentMiddleHead
        coverKey={sportArtsDetails?.cover}
        coverId={sportArtsDetails?.coverId}
        defaultCover="/images/profileAndCover/sport-cover.png"
        textLarge={t("sport_art_head_coach")}
        textSmall={`${sportArtsDetails?.sportHead?.staffFirstName} ${
          sportArtsDetails?.sportHead?.staffMiddleName
            ? sportArtsDetails?.sportHead?.staffMiddleName
            : ""
        } ${sportArtsDetails?.sportHead?.staffLastName}`}
        count1={sportArtsDetails?.sportMemberCount}
        count1label={t("members")}
        count2={sportArtsDetails?.sportClassCount}
        count2label={t("sports")}
        profilePhoto={profilePhoto}
        profileChange={profileChange}
        openCrop={openCrop}
        setOpenCrop={setOpenCrop}
        setPhotoURL={setPhotoURL}
        photoURL={photoURL}
        setFile={setFile}
        setUpload={setUpload}
        setProfilePhoto={setProfilePhoto}
      />

      <MiddleContent
        setProfile={setProfile}
        sid={sportArtsDetails?._id}
        sportEvent={sportArtsDetails?.sportEvent}
        sportClass={sportArtsDetails?.sportClass}
        setEventId={setEventId}
        sportArtsDetailsRefetch={sportArtsDetailsRefetch}
      />
    </div>
  );
}

export default SportsAndArtsHeadProfile;

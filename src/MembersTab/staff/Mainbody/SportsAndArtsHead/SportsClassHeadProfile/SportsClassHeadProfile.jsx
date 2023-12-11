import React, { useEffect, useState } from "react";
import SportsClassHeadMiddleContent from "./SportsClassHeadMiddleContent/SportsClassHeadMiddleContent";
import { useSportsClassDetails } from "../../../../../hooks/sports/sports-api";
import UniversalDepartmentMiddleHead from "../../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import { useTranslation } from "react-i18next";
import { useSportsClassCoverPhoto } from "../../../../../hooks/member_tab/sports-api";

function SportsClassHeadProfile({ sportClassId, carryParentState }) {
  const { t } = useTranslation();

  const { sportsClassDetails, sportsClassDetailsRefetch } =
    useSportsClassDetails({ sportClassId: sportClassId, skip: !sportClassId });

  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [sportsCoverPhoto] = useSportsClassCoverPhoto();

  useEffect(() => {
    if (sportClassId) sportsClassDetailsRefetch();
  }, [sportClassId, sportsClassDetailsRefetch]);
  useEffect(() => {
    if (upload) {
      let formData = new FormData();
      formData.append("file", file);
      sportsCoverPhoto({
        cover: formData,
        sid: sportClassId,
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
  // --------------------------------------------

  return (
    <>
      <UniversalDepartmentMiddleHead
        coverKey={sportsClassDetails?.classes?.cover}
        coverId={sportsClassDetails?.classes?.coverId}
        defaultCover="/images/profileAndCover/sports-class-cover.png"
        textLarge={sportsClassDetails?.classes?.sportClassName}
        textSmall={`${
          sportsClassDetails?.classes?.sportClassHead?.staffFirstName
        } 
        ${
          sportsClassDetails?.classes?.sportClassHead?.staffMiddleName
            ? sportsClassDetails?.classes?.sportClassHead?.staffMiddleName
            : ""
        } 
        ${sportsClassDetails?.classes?.sportClassHead?.staffLastName}`}
        count1={sportsClassDetails?.classes?.sportStudentCount}
        count1label={t("members")}
        count2={sportsClassDetails?.classes?.sportTeamCount}
        count2label={t("teams")}
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

      <SportsClassHeadMiddleContent
        cid={sportsClassDetails?.classes?._id}
        classMembers={sportsClassDetails?.classes?.sportStudent}
        classTeams={sportsClassDetails?.classes?.sportTeam}
        insId={sportsClassDetails?.classes?.institute?._id}
        classProfileRefetch={sportsClassDetailsRefetch}
        carryParentState={carryParentState}
      />
    </>
  );
}

export default SportsClassHeadProfile;

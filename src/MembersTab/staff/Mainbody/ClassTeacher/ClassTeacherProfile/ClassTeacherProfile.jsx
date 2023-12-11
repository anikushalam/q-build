import React, { useEffect, useState } from "react";
import MiddleContent from "./MiddleContent/MiddleContent";
import UniversalDepartmentMiddleHead from "../../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import { useClassCoverPhoto } from "../../../../../hooks/member_tab/class-api";
import { useTranslation } from "react-i18next";

function ClassTeacherProfile({ classProfile, carryParentState }) {
  const { t } = useTranslation();

  // ----------------------------------------
  const [classCoverPhoto] = useClassCoverPhoto();
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");

  useEffect(() => {
    if (upload) {
      let formData = new FormData();
      formData.append("file", file);
      classCoverPhoto({
        cover: formData,
        cid: classProfile?._id,
      })
        .then(() => {
          // console.info("done");
        })
        .catch({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upload, file]);

  const profileChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setFile(e.target.files[0]);
    setProfilePhoto(image);
    setPhotoURL(image);
    setOpenCrop(true);
  };

  return (
    <div>
      <UniversalDepartmentMiddleHead
        coverKey={classProfile?.cover}
        coverId={classProfile?.coverId}
        defaultCover="/images/profileAndCover/classroom-cover.png"
        textLarge={classProfile?.classTitle}
        batchStatus="true"
        textSmall={classProfile?.batch?.batchName}
        count1={classProfile?.studentCount}
        count1label={t("students")}
        count2={classProfile?.subjectCount}
        count2label={t("subjects")}
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
        classProfile={classProfile}
        carryParentState={carryParentState}
      />
    </div>
  );
}

export default ClassTeacherProfile;

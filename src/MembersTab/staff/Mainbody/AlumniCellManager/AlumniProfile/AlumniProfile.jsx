import React, { useState } from "react";
import UniversalDepartmentMiddleHead from "../../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import style from "./EventAdminProfile.module.css";
import { useTranslation } from "react-i18next";
import AlumniMiddleContent from "./AlumniMiddleContent";

function AlumniProfile({ carryParentState, alumni }) {
  const { t } = useTranslation();
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");

  const profileChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setFile(e.target.files[0]);
    setProfilePhoto(image);
    setPhotoURL(image);
    setOpenCrop(true);
  };

  return (
    <div className={style.AlumniProfileContainer}>
      <UniversalDepartmentMiddleHead
        coverKey="2"
        // coverId={getLibraryDetail?.library?.coverId}
        defaultCover="/images/profileAndCover/eventAdmin-cover.png"
        textLarge={t("alumni_portal")}
        textSmall={`${alumni?.alumini_head?.staffFirstName} ${
          alumni?.alumini_head?.staffMiddleName
            ? alumni?.alumini_head?.staffMiddleName
            : ""
        } ${alumni?.alumini_head?.staffLastName}`}
        count1={alumni?.certifcate_given_count}
        count1label={t("allies_for_cert")}
        count2={alumni?.certifcate_given_count + alumni?.register_form_count}
        count2label={t("alumni_")}
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
      <AlumniMiddleContent carryParentState={carryParentState} />
    </div>
  );
}

export default AlumniProfile;

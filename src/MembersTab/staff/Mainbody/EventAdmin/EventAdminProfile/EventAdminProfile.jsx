import React, { useState } from "react";
import UniversalDepartmentMiddleHead from "../../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import style from "./EventAdminProfile.module.css";
import { useTranslation } from "react-i18next";
import EventAdminMiddleContent from "./EventAdminMiddleContent";

function EventAdminProfile({ carryParentState, eventMgt }) {
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
    <>
      <UniversalDepartmentMiddleHead
        coverKey="2"
        // coverId={getLibraryDetail?.library?.coverId}
        defaultCover="/images/profileAndCover/eventAdmin-cover.png"
        textLarge={t("events_seminers")}
        textSmall={`${eventMgt?.event_head?.staffFirstName} ${
          eventMgt?.event_head?.staffMiddleName
            ? eventMgt?.event_head?.staffMiddleName
            : ""
        } ${eventMgt?.event_head?.staffLastName}`}
        count1={eventMgt?.event_count}
        count1label={t("upcoming_events")}
        count2={eventMgt?.seminar_count}
        count2label={t("upcoming_seminars")}
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
      <EventAdminMiddleContent carryParentState={carryParentState} />
    </>
  );
}

export default EventAdminProfile;

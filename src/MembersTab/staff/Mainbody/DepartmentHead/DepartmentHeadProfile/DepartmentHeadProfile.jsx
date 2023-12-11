import React from "react";
import MiddleContent from "./MiddleContent/MiddleContent";
import { useTranslation } from "react-i18next";
import { useDepartmentCoverPhoto } from "../../../../../hooks/member_tab/department-api";
import UniversalDepartmentMiddleHead from "../../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function DepartmentHeadProfile({
  departmentProfile,
  carryParentState,
  instituteId,
}) {
  const { t } = useTranslation();
  const params = useParams();
  // --------------------------------------
  const [departmentCoverPhoto] = useDepartmentCoverPhoto();
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");

  useEffect(() => {
    if (upload) {
      let formData = new FormData();
      formData.append("file", file);
      departmentCoverPhoto({
        cover: formData,
        did: departmentProfile?.department?._id,
      })
        .then((res) => {
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

  // --------------------------------------------
  return (
    <div>
      <UniversalDepartmentMiddleHead
        coverKey={departmentProfile?.cover}
        coverId={departmentProfile?.coverId}
        defaultCover="/images/profileAndCover/department-cover.png"
        textLarge={departmentProfile?.dName}
        batchStatus="true"
        textSmall={`${departmentProfile?.userBatch?.batchName}`}
        count1={departmentProfile?.classCount}
        count1label={t("classes")}
        count3={departmentProfile?.studentCount}
        count2label={t("staff")}
        count2={departmentProfile?.staffCount}
        count3label={t("students")}
        profilePhoto={profilePhoto}
        profileChange={profileChange}
        openCrop={openCrop}
        setOpenCrop={setOpenCrop}
        setPhotoURL={setPhotoURL}
        photoURL={photoURL}
        setFile={setFile}
        setUpload={setUpload}
        setProfilePhoto={setProfilePhoto}
        viewAs={true}
        redirectUrl={`/q/${params.username}/member/department/${params.deptname}?a=site`}
        carryParentState={carryParentState}
      />

      <MiddleContent
        bid={departmentProfile?.userBatch?._id}
        carryParentState={carryParentState}
        instituteId={instituteId}
      />
    </div>
  );
}

export default DepartmentHeadProfile;

import React, { useEffect, useState } from "react";
import UniversalDepartmentMiddleHead from "../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import MiddleContent from "./MiddleContent/MiddleContent";
import { useTranslation } from "react-i18next";
import {
  useGetLibraryDetail,
  useLibraryCoverPhoto,
} from "../../../../hooks/member_tab/library-api";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const LibraryProfile = ({ carryParentState }) => {
  const { t } = useTranslation();
  const params = useParams();
  const libAuthor = useSelector((state) => state.libraryChange);

  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");

  const [libraryCover] = useLibraryCoverPhoto();
  // ------------Library Cover-------------------
  useEffect(() => {
    if (upload) {
      let formData = new FormData();
      formData.append("file", file);

      libraryCover({
        file: formData,
        lid: libAuthor?.lid,
      })
        .then((res) => {})
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

  const { getLibraryDetail, getLibraryDetailRefetch } = useGetLibraryDetail({
    lid: libAuthor?.lid,
    skip: !libAuthor?.lid,
  });

  return (
    <>
      <UniversalDepartmentMiddleHead
        coverKey={getLibraryDetail?.library?.cover}
        coverId={getLibraryDetail?.library?.coverId}
        defaultCover="/images/profileAndCover/library-cover.png"
        textLarge={t("librarian")}
        textSmall={`${getLibraryDetail?.library?.libraryHead?.staffFirstName} ${
          getLibraryDetail?.library?.libraryHead?.staffMiddleName
            ? getLibraryDetail?.library?.libraryHead?.staffMiddleName
            : ""
        } ${getLibraryDetail?.library?.libraryHead?.staffLastName}`}
        count1={getLibraryDetail?.library?.bookCount}
        count1label={t("books")}
        count2={getLibraryDetail?.library?.memberCount}
        count2label={t("members")}
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
        redirectUrl={`/q/${params.username}/member/library?a=site`}
        carryParentState={carryParentState}
      />
      <MiddleContent
        library={getLibraryDetail?.library}
        getLibraryDetailRefetch={getLibraryDetailRefetch}
        carryParentState={carryParentState}
      />
    </>
  );
};

export default LibraryProfile;

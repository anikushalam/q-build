import React, { useEffect, useState } from "react";
import style from "./SportsClassHeadPhoto.module.css";
import { Dialog } from "@mui/material";
import Crop from "../../../../../../ImageCrop/Crop";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import { useSportsArtsClassProfilePhotoFunction } from "../../../../../../hooks/sports/sports-api";

const SportsClassHeadPhoto = ({ photoKey, photoId, cid }) => {
  const [sportsArtsClassProfilePhoto] =
    useSportsArtsClassProfilePhotoFunction();
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  // 635b8f15e91ae4832439063e

  useEffect(() => {
    if (upload) {
      let formData = new FormData();
      formData.append("file", file);
      sportsArtsClassProfilePhoto({
        profile: formData,
        sid: cid,
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

  return (
    <div className={style.photoMain}>
      {profilePhoto ? (
        <img
          src={profilePhoto}
          alt="profile is not uploaded"
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <img
          src={
            photoId !== "1"
              ? `${imageShowUrl}/${photoKey}`
              : "/images/profileAndCover/classroom-profile-img.svg"
          }
          // className={
          //   photoId !== "1"
          //     ? style.ClassPhotomarginleft
          //     : style.ClassPhotomargin
          // }
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      )}
      <label
        htmlFor="photo"
        // className={photoId !== "1" ? style.photoLabel : style.photoLabell}
        className={style.photoLabel}
      >
        <img
          alt="not found"
          className={style.photoLabel}
          src="/images/edit1-icon.svg"
        />
      </label>
      <input
        id="photo"
        name="file"
        onChange={profileChange}
        type="file"
        style={{ display: "none" }}
        accept="image/gif, image/jpeg, image/png"
        required
      />
      {openCrop && (
        <Dialog open={openCrop}>
          <Crop
            setPhotoURL={setPhotoURL}
            photoURL={photoURL}
            setFile={setFile}
            setOpenCrop={setOpenCrop}
            setUpload={setUpload}
            setProfilePhoto={setProfilePhoto}
            first={1}
            second={1}
          />
        </Dialog>
      )}
    </div>
  );
};

export default SportsClassHeadPhoto;

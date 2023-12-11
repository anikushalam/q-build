import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Crop from "../../../ImageCrop/Crop";
import style from "../Pages/InstituteProfileInfoTop.module.css";

const ProfilePhoto = ({ dynamicImage, onPhotohangeAction, defaultImg }) => {
  // const [instituteProfilePhoto] = useInstituteProfilePhoto();
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const ids = useSelector((state) => state.idChange.searchProfile);

  useEffect(() => {
    if (upload) {
      onPhotohangeAction(file);
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
    <>
      <div className={style.profileimgcontainer}>
        <img
          className={style.profileimg}
          src={
            profilePhoto
              ? profilePhoto
              : dynamicImage
              ? dynamicImage
              : defaultImg
          }
        />
        {ids?.id ? (
          ""
        ) : (
          <label htmlFor="userphoto">
            <img
              className={style.profilephotoEdit}
              src="/images/profile/cover-edit.svg"
              alt=""
            />
          </label>
        )}

        <input
          id="userphoto"
          name="file"
          onChange={profileChange}
          type="file"
          style={{ display: "none" }}
          accept="image/gif, image/jpeg, image/png"
          required
        />
      </div>
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
    </>
  );
};

export default ProfilePhoto;

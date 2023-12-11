import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useUserProfilePhoto } from "../../../Post/Institute/Components/image-api";
import style from "./EditSide.module.css";
import EditSideBottom from "./EditSideBottom";
import { Dialog } from "@mui/material";
import Crop from "../../../ImageCrop/Crop";
import { imageShowUrl } from "../../../services/BaseUrl";

const EditSide = ({ photoId, photoKey, username }) => {
  const [instituteProfilePhoto] = useUserProfilePhoto();
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  // const ids = useSelector((state) => state.idChange);

  const userId = localStorage.getItem("user");

  useEffect(() => {
    if (upload) {
      let formData = new FormData();
      formData.append("file", file);
      instituteProfilePhoto({
        photo: formData,
        id: userId,
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
    <div className={style.sidebar}>
      <div className={style.sidebartop}>
        <div
          className={style.imgcontainer}
          // style={{ backgroundImage: "" }}
        >
          {profilePhoto ? (
            <img src={profilePhoto} alt="profile is not uploaded" />
          ) : (
            <img
              src={
                photoId !== "1"
                  ? `${imageShowUrl}/${photoKey}`
                  : "/images/edit-photo-icon.svg"
              }
              alt=""
            />
          )}
        </div>
        <label htmlFor="photo">
          <img
            alt="not found"
            className={style.imgedit}
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

        <div className={style.userContainer}>
          <p className={style.username}>{username}</p>
        </div>
      </div>
      <EditSideBottom />
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

export default EditSide;

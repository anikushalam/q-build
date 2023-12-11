import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStaffProfilePhoto } from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import Crop from "../../../../ImageCrop/Crop";
import QLoader from "../../../../Loader/QLoader";
import { imageShowUrl } from "../../../../services/BaseUrl";
import style from "./StaffFormPhoto.module.css";

const StaffFormPhoto = ({ sid, photoId, photoKey }) => {
  const [staffProfilePhoto] = useStaffProfilePhoto();
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");

  useEffect(() => {
    if (upload) {
      setDisabled((pre) => !pre);
      let formData = new FormData();
      formData.append("file", file);
      staffProfilePhoto({
        profile: formData,
        sid: sid,
      })
        .then(() => {
          setDisabled((pre) => !pre);

          //   console.info(res);
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
              : "/images/member_tab/class/default_avatar.svg"
          }
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      )}
      <label htmlFor="photo" className={style.photoLabel}>
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
      {disabled && <QLoader />}
    </div>
  );
};

export default StaffFormPhoto;

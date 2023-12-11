import React, { useState, useEffect } from "react";
import style from "./ClassCover.module.css";
import { Dialog } from "@mui/material";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import Crop from "../../../../../ImageCrop/Crop";

const ClassCover = ({ coverKey, coverId, cid, parentStyle }) => {
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");

  useEffect(() => {
    if (upload) {
      let formData = new FormData();
      formData.append("file", file);
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
    <div className={style.coverMain}>
      {profilePhoto ? (
        <img className={style.coverImgg} src={profilePhoto} alt="" />
      ) : (
        <img
          className={coverId !== "2" ? style.coverImgg : style.coverImg}
          src={
            coverId !== "2"
              ? `${imageShowUrl}/${coverKey}`
              : "/images/profileAndCover/admission-cover.svg"
          }
          alt=""
        />
      )}
      <label
        htmlFor="cover"
        className={coverId !== "2" ? style.imgeditLabell : style.imgeditLabel}
      >
        <img
          alt="not found"
          className={style.imgedit}
          src="/images/edit1-icon.svg"
          title="Edit cover"
        />
      </label>
      <input
        id="cover"
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
            first={16}
            second={9}
          />
        </Dialog>
      )}
    </div>
  );
};

export default ClassCover;

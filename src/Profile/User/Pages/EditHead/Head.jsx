import React, { useState, useEffect } from "react";
import Crop from "../../../../ImageCrop/Crop";
import { useUserCoverPhoto } from "../../../../Post/Institute/Components/image-api";
import style from "./Head.module.css";
import { Dialog } from "@mui/material";
import { useSelector } from "react-redux";
import { imageShowUrl } from "../../../../services/BaseUrl";

const Head = ({ coverKey, coverId }) => {
  const [userCoverPhoto] = useUserCoverPhoto();
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const ids = useSelector((state) => state.idChange);

  useEffect(() => {
    if (upload) {
      let formData = new FormData();
      formData.append("file", file);
      userCoverPhoto({
        cover: formData,
        id: ids?.id,
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
    <div>
      <div className={style.main}>
        <div className={style.imageJustify}>
          <img
            src="/images/profile-white.svg"
            alt=""
            style={{ height: "100%" }}
          />
          <img
            src="/images/profile-blue.svg"
            alt=""
            className={style.imageJustify1}
          />
          {/* <div className={style.nameAndAbout}>
          <p className={style.name}>
            <span>K. K. Wagh</span> <br /> Institute of Engineering Education
            and Research Centre.
          </p>
          <p className={style.about}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus Lorem ipsum dolor sit amet, consectetur Lorem
            ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
            sit
          </p>
        </div> */}
        </div>
        {profilePhoto ? (
          <img
            className={style.imageJustify2}
            src={profilePhoto}
            alt="profile is not uploaded"
            style={{ right: "0" }}
          />
        ) : (
          <img
            src={
              coverId !== "2"
                ? `${imageShowUrl}/${coverKey}`
                : "/images/profile-cover-icon.svg"
            }
            alt=""
            className={style.imageJustify2}
            style={coverId !== "2" ? { right: "0" } : { right: "-2.27vw" }}
          />
        )}
      </div>
      <label htmlFor="cover">
        <img
          alt="not found"
          className={style.imgedit}
          src="/images/edit1-icon.svg"
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

export default Head;

import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import Crop from "../../../ImageCrop/Crop";
import style from "../Pages/InstituteProfileInfoTop.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileCover = ({
  dynamicImage,
  onCoverChangeAction,
  username,
  openAs,
}) => {
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const ids = useSelector((state) => state.idChange.searchProfile);
  const loginRole = useSelector((state) => state.authChange.loginRole);

  useEffect(() => {
    if (upload) {
      onCoverChangeAction(file);
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
      <img src={profilePhoto ? profilePhoto : dynamicImage} alt="cover file" />
      {ids?.id || openAs === "SEARCH_HOSTEL" ? (
        ""
      ) : (
        <>
          {loginRole === "_usr_rs" ? null : (
            <Link to={`/q/${username}/settings`}>
              <img
                className={style.profileMenu}
                src="/images/profile/profile-menu.svg"
                alt=""
              />
            </Link>
          )}
          <label htmlFor="cover">
            <img
              className={style.coverEdit}
              src="/images/profile/cover-edit.svg"
              alt=""
            />
          </label>
        </>
      )}

      <input
        id="cover"
        name="file"
        onChange={profileChange}
        type="file"
        style={{ display: "none" }}
        accept="image/gif, image/jpeg, image/png"
        required
      />
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
    </>
  );
};

export default ProfileCover;

import React, { useState } from "react";
import style from "./UniversalProfileMiddle.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { imageShowUrl } from "../../services/BaseUrl";
import Crop from "../../ImageCrop/Crop";
import { Dialog } from "@mui/material";
import UserSocialButton from "../User/Pages/UserSocialButton";

// /images/Institute-cover.svg

function UniversalProfileMiddle({
  resultId,
  insID,
  profileData,
  searchId,
  profile,
  status,
  setApply,
  setEdit,
  openCrop,
  openCropCover,
  setOpenCrop,
  setOpenCropCover,
  coverChange,
  profileChange,
  photoURL,
  setPhotoURL,
  coverPhoto,
  profilePhoto,
  setUpload,
  setUploadProfile,
  setFile,
  setFileProfile,
  setCoverPhoto,
  setProfilePhoto,
  setEditt,
  userOpenCrop,
  setUserFile,
  setUserOpenCrop,
  setUserUpload,
  userCoverPhoto,
  setUserCoverPhoto,
  insCoverChange,

  setUserProfileFile,
  setUserProfileOpenCrop,
  setUserProfileUpload,
  setUserProfilePhoto,
  userrProfilePhoto,
  userProfileOpenCrop,
  insProfileChange,

  setOpenBlock,
  userId,
}) {
  const [loadMore, setLoadMore] = useState(true);

  const { t } = useTranslation();

  return (
    <>
      {status !== "userProfile" && status !== "useredit" ? (
        <div className={style.profilehead}>
          <div className={style.profileheadTop}>
            {userCoverPhoto ? (
              <img src={userCoverPhoto} alt="" />
            ) : (
              <img
                src={
                  profileData?.coverId !== "2"
                    ? `${imageShowUrl}/${profileData?.insProfileCoverPhoto}`
                    : "/images/profileAndCover/profile-cover.png"
                }
                alt=""
              />
            )}

            <img
              className={style.profileMenu}
              src="/images/profile/profile-menu.svg"
              alt=""
            />
            <label htmlFor="insCover">
              <img
                className={style.coverEdit}
                src="/images/profile/cover-edit.svg"
                alt=""
              />
            </label>
            <input
              id="insCover"
              name="file"
              onChange={insCoverChange}
              type="file"
              style={{ display: "none" }}
              accept="image/gif, image/jpeg, image/png"
              required
            />

            {userrProfilePhoto ? (
              <div className={style.profileimgcontainer}>
                <img className={style.profileimg} src={userrProfilePhoto} />
                <label htmlFor="userphoto">
                  <img
                    className={style.profilephotoEdit}
                    src="/images/profile/cover-edit.svg"
                    alt=""
                  />
                </label>
                <input
                  id="userphoto"
                  name="file"
                  onChange={insProfileChange}
                  type="file"
                  style={{ display: "none" }}
                  accept="image/gif, image/jpeg, image/png"
                  required
                />
              </div>
            ) : (
              <div className={style.profileimgcontainer}>
                <img
                  className={style.profileimg}
                  src={
                    profileData?.photoId !== "1"
                      ? `${imageShowUrl}/${profileData?.insProfilePhoto}`
                      : "/images/ins_default_profile.svg"
                  }
                />
                <label htmlFor="userphoto">
                  <img
                    className={style.profilephotoEdit}
                    src="/images/profile/cover-edit.svg"
                    alt=""
                  />
                </label>
                <input
                  id="userphoto"
                  name="file"
                  onChange={insProfileChange}
                  type="file"
                  style={{ display: "none" }}
                  accept="image/gif, image/jpeg, image/png"
                  required
                />
              </div>
            )}
          </div>

          <div className={style.profileheadBottom}>
            <div className={style.profileheadBottomtop}>
              <h3 className={style.insname}>{profileData?.insName}</h3>
              <p className={style.username}>@{profileData?.name}</p>
              {profileData?.followersCount < 2 ? (
                <p className={style.oneLiner}>
                  {profileData?.followersCount} {t("follower")} /
                  {profileData?.one_line_about?.length > 200
                    ? `${
                        profileData?.one_line_about?.match(/.{1,200}/g)[0]
                      } ...`
                    : profileData?.one_line_about?.length <= 200
                    ? profileData?.one_line_about
                    : t("one_liner")}
                </p>
              ) : (
                <p className={style.oneLiner}>
                  {profileData?.followersCount} {t("followers_")} /
                  {profileData?.one_line_about?.length > 200
                    ? `${
                        profileData?.one_line_about?.match(/.{1,200}/g)[0]
                      } ...`
                    : profileData?.one_line_about?.length <= 200
                    ? profileData?.one_line_about
                    : t("one_liner")}
                </p>
              )}
              {profileData?.insAbout?.length >= 41 && !loadMore ? (
                <p className={style.biofull}>
                  {" "}
                  {profileData?.insAbout}
                  <span
                    className={style.biospan}
                    onClick={() => setLoadMore(true)}
                  >
                    {t("read_less")}
                  </span>
                </p>
              ) : profileData?.insAbout?.length >= 41 && loadMore ? (
                <p className={style.biofull}>
                  {profileData?.insAbout?.match(/.{1,40}/g)[0]}
                  <span
                    className={style.biospan}
                    onClick={() => setLoadMore(false)}
                  >
                    {t("read_more")}
                  </span>
                </p>
              ) : (
                <p className={style.biofull}>{profileData?.insAbout}</p>
              )}
            </div>

            <div className={style.profileheadBottomcounts}>
              <div className={style.bottomOneItem}>
                <p className={style.bottomCount}>{profileData?.postCount}</p>

                {profileData?.postCount < 2 ? (
                  <p className={style.bottomText}>{t("post")}</p>
                ) : (
                  <p className={style.bottomText}>{t("posts")}</p>
                )}
              </div>

              <div className={style.bottomOneItem}>
                <p className={style.bottomCount}>
                  {profileData?.followersCount}
                </p>

                {profileData?.followersCount < 2 ? (
                  <p className={style.bottomText}>{t("follower")}</p>
                ) : (
                  <p className={style.bottomText}>{t("followers")}</p>
                )}
              </div>

              <div className={style.bottomOneItem}>
                <p className={style.bottomCount}>
                  {profileData?.followingCount}
                </p>

                {profileData?.followingCount < 2 ? (
                  <p className={style.bottomText}>{t("following")}</p>
                ) : (
                  <p className={style.bottomText}>{t("following")}</p>
                )}
              </div>

              <div className={style.bottomOneItem}>
                <p className={style.bottomCount}>
                  {profileData?.staffCount + profileData?.studentCount}
                </p>

                {profileData?.staffCount + profileData?.studentCount < 2 ? (
                  <p className={style.bottomText}>{t("joined")}</p>
                ) : (
                  <p className={style.bottomText}>{t("joined")}</p>
                )}
              </div>

              {profileData?.accessFeature === "Locked" || searchId ? (
                <div className={style.bottomOneItem}>
                  <p className={style.bottomCount}>
                    {profileData && profileData?.departmentCount}
                  </p>

                  {profileData?.departmentCount < 2 ? (
                    <p className={style.bottomText}>{t("department")}</p>
                  ) : (
                    <p className={style.bottomText}>{t("departments")}</p>
                  )}
                </div>
              ) : (
                <Link to={`/q/${profileData?.name}/department`}>
                  <div className={style.bottomOneItem}>
                    <p className={style.bottomCount}>
                      {profileData && profileData?.departmentCount}
                    </p>

                    {profileData?.departmentCount < 2 ? (
                      <p className={style.bottomText}>{t("department")}</p>
                    ) : (
                      <p className={style.bottomText}>{t("departments")} </p>
                    )}
                  </div>
                </Link>
              )}

              <div className={style.bottomOneItem}>
                <p className={style.bottomCount}>{profileData?.staffCount}</p>

                {profileData?.staffCount < 2 ? (
                  <p className={style.bottomText}>{t("Staff")}</p>
                ) : (
                  <p className={style.bottomText}>{t("staffs")}</p>
                )}
              </div>

              <div className={style.bottomOneItem}>
                <p className={style.bottomCount}>
                  {profileData?.announcementCount}
                </p>

                {profileData?.announcementCount < 2 ? (
                  <p className={style.bottomText}>{t("announcement")}</p>
                ) : (
                  <p className={style.bottomText}>{t("announcements")}</p>
                )}
              </div>

              <div className={style.bottomOneItem}>
                <p className={style.bottomCount}>
                  {profileData?.admissionCount}
                </p>

                {profileData?.admissionCount < 2 ? (
                  <p className={style.bottomText}>{t("admision")}</p>
                ) : (
                  <p className={style.bottomText}>{t("admisions")}</p>
                )}
              </div>
            </div>

            <img
              className={
                (resultId === insID && status === "profile") ||
                (profile?.loggedinAs === "user" && status === "profile")
                  ? style.scanicon
                  : style.scaniconsearch
              }
              src="/images/profile/scan-icon.svg"
              alt=""
            />

            {resultId === insID && status === "profile" ? (
              <div className={style.profileedit} onClick={() => setEditt(true)}>
                <img src="/images/profile/edit-profile-icon.svg" alt="" />
                <p>{t("edit")}</p>
              </div>
            ) : (
              status === "profile" &&
              profile?.loggedinAs === "user" && (
                <div
                  className={style.profileedit}
                  onClick={() => setApply(true)}
                >
                  <img src="/images/profile/edit-profile-icon.svg" alt="" />
                  <p>{t("apply")}</p>
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        <div className={style.profilehead}>
          <div className={style.profileheadTop}>
            {coverPhoto ? (
              <img src={coverPhoto} alt="cover is not uploaded" />
            ) : (
              <img
                src={
                  profileData?.coverId !== "2"
                    ? `${imageShowUrl}/${profileData?.profileCoverPhoto}`
                    : "/images/profileAndCover/profile-cover.png"
                }
                alt=""
              />
            )}

            {resultId === insID && (
              <img
                className={style.profileMenu}
                src="/images/profile/profile-menu.svg"
                alt=""
              />
            )}
            {status === "userProfile" && profile?.loggedinAs === "user" && (
              <img
                className={style.profileMenu}
                src="/images/profile/profile-menu.svg"
                alt=""
                onClick={() => setOpenBlock(true)}
              />
            )}
            <input
              id="cover"
              name="file"
              onChange={coverChange}
              type="file"
              style={{ display: "none" }}
              accept="image/gif, image/jpeg, image/png"
              required
            />
            <label htmlFor="cover">
              {resultId === insID && (
                <img
                  className={style.coverEdit}
                  src="/images/profile/cover-edit.svg"
                  alt=""
                />
              )}
            </label>

            {profilePhoto ? (
              <div className={style.profileimgcontainer}>
                <img className={style.profileimg} src={profilePhoto} />

                {resultId === insID && (
                  <div>
                    <label>
                      <img
                        className={style.profilephotoEdit}
                        src="/images/profile/cover-edit.svg"
                        alt=""
                        onClick={profileChange}
                      />
                    </label>
                    {/* <input
                      id="photo"
                      name="file"
                      onChange={profileChange}
                      type="file"
                      style={{ display: "none" }}
                      accept="image/gif, image/jpeg, image/png"
                      required
                    /> */}
                  </div>
                )}
              </div>
            ) : (
              <div
                className={
                  profileData?.photoId !== "1"
                    ? style.profileimgcontainer
                    : `${style.profileimgcontainerbg}`
                }
              >
                <img
                  className={
                    profileData?.photoId !== "1"
                      ? style.profileimg
                      : `${style.profileimg} ${style.profileimgg}`
                  }
                  src={
                    profileData?.photoId !== "1"
                      ? `${imageShowUrl}/${profileData?.profilePhoto}`
                      : "/images/member_tab/class/default_avatar.svg"
                  }
                />
                {resultId === insID && (
                  <div>
                    <label>
                      <img
                        className={style.profilephotoEdit}
                        src="/images/profile/cover-edit.svg"
                        alt=""
                        onClick={profileChange}
                      />
                    </label>
                    {/* <input
                      id="photo"
                      name="file"
                      onChange={profileChange}
                      type="file"
                      style={{ display: "none" }}
                      accept="image/gif, image/jpeg, image/png"
                      required
                    /> */}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className={style.profileheadBottom}>
            <div className={style.profileheadBottomtop}>
              <h3 className={style.insname}>{profileData?.userLegalName}</h3>
              <p className={style.username}>@{profileData?.username}</p>
              {profileData?.one_line_about ? (
                <p className={style.oneLiner}>
                  {profileData?.one_line_about?.length > 200
                    ? `${
                        profileData?.one_line_about?.match(/.{1,200}/g)[0]
                      } ...`
                    : profileData?.one_line_about?.length <= 200
                    ? profileData?.one_line_about
                    : ""}
                </p>
              ) : profileData?.followerCount < 2 ? (
                <p className={style.oneLiner}>
                  {profileData?.followerCount} {t("follower")}
                </p>
              ) : (
                <p className={style.oneLiner}>
                  {profileData?.followerCount} {t("followers_")}
                </p>
              )}
            </div>
            {resultId === insID && status === "userProfile" ? (
              <div className={style.profileedit} onClick={() => setEdit(true)}>
                <img src="/images/profile/edit-profile-icon.svg" alt="" />
                <p>{t("edit")}</p>
              </div>
            ) : (
              status === "userProfile" &&
              profile?.loggedinAs === "user" && (
                <UserSocialButton userId={userId} />
              )
            )}
          </div>
        </div>
      )}

      {openCrop && (
        <Dialog open={openCrop}>
          <Crop
            setPhotoURL={setPhotoURL}
            photoURL={photoURL}
            setFile={setFile}
            setOpenCrop={setOpenCrop}
            setUpload={setUpload}
            setCoverPhoto={setCoverPhoto}
            first={16}
            second={9}
          />
        </Dialog>
      )}

      {openCropCover && (
        <Dialog open={openCropCover}>
          <Crop
            setPhotoURL={setPhotoURL}
            photoURL={photoURL}
            setFile={setFileProfile}
            setOpenCrop={setOpenCropCover}
            setUpload={setUploadProfile}
            setProfilePhoto={setProfilePhoto}
            first={1}
            second={1}
          />
        </Dialog>
      )}

      {userOpenCrop && (
        <Dialog open={userOpenCrop}>
          <Crop
            setPhotoURL={setPhotoURL}
            photoURL={photoURL}
            setFile={setUserFile}
            setOpenCrop={setUserOpenCrop}
            setUpload={setUserUpload}
            setProfilePhoto={setUserCoverPhoto}
            first={16}
            second={9}
          />
        </Dialog>
      )}

      {userProfileOpenCrop && (
        <Dialog open={userProfileOpenCrop}>
          <Crop
            setPhotoURL={setPhotoURL}
            photoURL={photoURL}
            setFile={setUserProfileFile}
            setOpenCrop={setUserProfileOpenCrop}
            setUpload={setUserProfileUpload}
            setProfilePhoto={setUserProfilePhoto}
            first={1}
            second={1}
          />
        </Dialog>
      )}
    </>
  );
}

export default UniversalProfileMiddle;

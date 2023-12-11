import React, { useState } from "react";
import style from "./InstituteProfileInfoTop.module.css";
import ProfileCover from "../components/ProfileCover";
import ProfilePhoto from "../components/ProfilePhoto";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { imageShowUrl } from "../../../services/BaseUrl";
import QLoader from "../../../Loader/QLoader";
import {
  useInstituteCoverPhoto,
  useInstituteProfilePhoto,
} from "../../../Post/Institute/Components/image-api";
import CustomSuspense from "../../../Custom/SuspenseLoading/CustomSuspense";
import FollowButtonUser from "./FollowButtonUser";
const FollowButton = React.lazy(() => import("./FollowButton"));
const InstituteProfileInfoTop = ({ institute, setApply }) => {
  const { t } = useTranslation();
  //   const [loadMore, setLoadMore] = useState(true);
  const ids = useSelector((state) => state.idChange);
  const loginRole = useSelector((state) => state.authChange.loginRole);
  const [instituteCoverPhoto] = useInstituteCoverPhoto();
  const [instituteProfilePhoto] = useInstituteProfilePhoto();

  const [disabled, setDisabled] = useState(false);
  const coverPhotoChange = (file) => {
    if (file) {
      setDisabled((pre) => !pre);
      let formData = new FormData();
      formData.append("file", file);
      instituteCoverPhoto({
        cover: formData,
        id: ids?.id,
      })
        .then(() => {
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  const profilePhotoChange = (file) => {
    if (file) {
      setDisabled((pre) => !pre);
      let formData = new FormData();
      formData.append("file", file);
      instituteProfilePhoto({
        photo: formData,
        id: ids?.id,
      })
        .then(() => {
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  return (
    <>
      <div className={style.profilehead}>
        <div className={style.profileheadTop}>
          <ProfileCover
            dynamicImage={
              institute?.coverId !== "2"
                ? `${imageShowUrl}/${institute?.insProfileCoverPhoto}`
                : "/images/profileAndCover/profile-cover.png"
            }
            onCoverChangeAction={coverPhotoChange}
            username={institute?.name}
          />
          <ProfilePhoto
            dynamicImage={
              institute?.photoId !== "1"
                ? `${imageShowUrl}/${institute?.insProfilePhoto}`
                : "/images/ins_default_profile.svg"
            }
            onPhotohangeAction={profilePhotoChange}
            defaultImg="/images/ins_default_profile.svg"
          />
        </div>
        <div className={style.profileheadBottom}>
          <div
            className={style.profileheadBottomtop}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3 className={style.insname}>{institute?.insName}</h3>
              <p className={style.username}>@{institute?.name}</p>
              {institute?.one_line_about ? (
                <p className={style.oneLiner}>
                  {" "}
                  {institute?.one_line_about?.length > 200
                    ? `${institute?.one_line_about?.match(/.{1,200}/g)[0]} ...`
                    : institute?.one_line_about?.length <= 200
                    ? institute?.one_line_about
                    : ""}{" "}
                </p>
              ) : institute?.followersCount < 2 ? (
                <p className={style.oneLiner}>
                  {institute?.followersCount} {t("follower")}
                </p>
              ) : (
                <p className={style.oneLiner}>
                  {institute?.followersCount} {t("followers_")}
                </p>
              )}

              {/* {institute?.insAbout?.length >= 41 && !loadMore ? (
              <p className={style.biofull}>
                {institute?.insAbout}
                <span
                  className={style.biospan}
                  onClick={() => setLoadMore(true)}
                >
                  {t("read_less")}
                </span>
              </p>
            ) : institute?.insAbout?.length >= 41 && loadMore ? (
              <p className={style.biofull}>
                {institute?.insAbout?.match(/.{1,40}/g)[0]}
                <span
                  className={style.biospan}
                  onClick={() => setLoadMore(false)}
                >
                  {t("read_more")}
                </span>
              </p>
            ) : ( */}
              <p className={style.biofull}>{institute?.insAbout}</p>
            </div>
            {institute?.sub_domain?.sub_domain_path ? (
              <a
                target="_blank"
                rel="noreferrer"
                href={institute?.sub_domain?.sub_domain_path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "0.8rem",
                  color: "#1C023B",
                }}
              >
                <img src="/images/site-globe-blue-icon.svg" alt="" />
                <p>{institute?.sub_domain?.sub_domain_path}</p>
              </a>
            ) : (
              ""
            )}

            {/* )} */}
          </div>

          <div className={style.profileheadBottomcounts}>
            <div className={style.bottomOneItem}>
              <p className={style.bottomCount}>{institute?.postCount}</p>

              {institute?.postCount < 2 ? (
                <p className={style.bottomText}>{t("post")}</p>
              ) : (
                <p className={style.bottomText}>{t("posts")}</p>
              )}
            </div>

            <div className={style.bottomOneItem}>
              {ids?.searchProfile.id && (
                <div className={style.profile_following_count}>
                  <p className={style.bottomCount}>
                    {institute?.followersCount}
                  </p>
                  {institute?.followersCount < 2 ? (
                    <p className={style.bottomText}>{t("follower")}</p>
                  ) : (
                    <p className={style.bottomText}>{t("followers")}</p>
                  )}
                </div>
              )}
              {loginRole === "_usr_rs" ? (
                <div className={style.profile_following_count}>
                  <p className={style.bottomCount}>
                    {institute?.followersCount}
                  </p>

                  {institute?.followersCount < 2 ? (
                    <p className={style.bottomText}>{t("follower")}</p>
                  ) : (
                    <p className={style.bottomText}>{t("followers")}</p>
                  )}
                </div>
              ) : (
                !ids?.searchProfile.id && (
                  <Link to={`/q/${institute?.name}/following`}>
                    <div className={style.profile_following_count}>
                      <p className={style.bottomCount}>
                        {institute?.followersCount}
                      </p>

                      {institute?.followersCount < 2 ? (
                        <p className={style.bottomText}>{t("follower")}</p>
                      ) : (
                        <p className={style.bottomText}>{t("followers")}</p>
                      )}
                    </div>
                  </Link>
                )
              )}
            </div>

            <div className={style.bottomOneItem}>
              {ids?.searchProfile.id && (
                <div className={style.profile_following_count}>
                  <p className={style.bottomCount}>
                    {institute?.followingCount}
                  </p>
                  {institute?.followingCount < 2 ? (
                    <p className={style.bottomText}>{t("unfollow")}</p>
                  ) : (
                    <p className={style.bottomText}>{t("unfollow")}</p>
                  )}
                </div>
              )}

              {loginRole === "_usr_rs" ? (
                <div className={style.profile_following_count}>
                  <p className={style.bottomCount}>
                    {institute?.followingCount}
                  </p>
                  {institute?.followingCount < 2 ? (
                    <p className={style.bottomText}>{t("unfollow")}</p>
                  ) : (
                    <p className={style.bottomText}>{t("unfollow")}</p>
                  )}
                </div>
              ) : (
                !ids?.searchProfile.id && (
                  <Link to={`/q/${institute?.name}/following`}>
                    <div className={style.profile_following_count}>
                      <p className={style.bottomCount}>
                        {institute?.followingCount}
                      </p>
                      {institute?.followingCount < 2 ? (
                        <p className={style.bottomText}>{t("unfollow")}</p>
                      ) : (
                        <p className={style.bottomText}>{t("unfollow")}</p>
                      )}
                    </div>
                  </Link>
                )
              )}
            </div>

            <div className={style.bottomOneItem}>
              <p className={style.bottomCount}>
                {institute?.staffCount ?? 0 + institute?.studentCount ?? 0}
              </p>

              {institute?.staffCount ?? 0 + institute?.studentCount ?? 0 < 2 ? (
                <p className={style.bottomText}>{t("joined")}</p>
              ) : (
                <p className={style.bottomText}>{t("joined")}</p>
              )}
            </div>

            {institute?.accessFeature === "Locked" || ids?.searchProfile.id ? (
              <div className={style.bottomOneItem}>
                <p className={style.bottomCount}>
                  {institute && institute?.departmentCount}
                </p>

                {institute?.departmentCount < 2 ? (
                  <p className={style.bottomText}>{t("department")}</p>
                ) : (
                  <p className={style.bottomText}>{t("departments")}</p>
                )}
              </div>
            ) : loginRole === "_usr_rs" ? (
              <div className={style.bottomOneItem}>
                <p className={style.bottomCount}>
                  {institute && institute?.departmentCount}
                </p>

                {institute?.departmentCount < 2 ? (
                  <p className={style.bottomText}>{t("department")}</p>
                ) : (
                  <p className={style.bottomText}>{t("departments")} </p>
                )}
              </div>
            ) : (
              <Link to={`/q/${institute?.name}/department`}>
                <div className={style.bottomOneItem}>
                  <p className={style.bottomCount}>
                    {institute && institute?.departmentCount}
                  </p>

                  {institute?.departmentCount < 2 ? (
                    <p className={style.bottomText}>{t("department")}</p>
                  ) : (
                    <p className={style.bottomText}>{t("departments")} </p>
                  )}
                </div>
              </Link>
            )}

            <div className={style.bottomOneItem}>
              {ids?.searchProfile.id && (
                <>
                  <p className={style.bottomCount}>{institute?.staffCount}</p>
                  {institute?.staffCount < 2 ? (
                    <p className={style.bottomText}>{t("Staff")}</p>
                  ) : (
                    <p className={style.bottomText}>{t("staffs")}</p>
                  )}
                </>
              )}
              {loginRole === "_usr_rs" ? (
                <>
                  <p className={style.bottomCount}>{institute?.staffCount}</p>
                  {institute?.staffCount < 2 ? (
                    <p className={style.bottomText}>{t("Staff")}</p>
                  ) : (
                    <p className={style.bottomText}>{t("staffs")}</p>
                  )}
                </>
              ) : (
                !ids?.searchProfile.id && (
                  <Link to={`/q/${institute?.name}/staff`}>
                    <p className={style.bottomCount}>{institute?.staffCount}</p>
                    {institute?.staffCount < 2 ? (
                      <p className={style.bottomText}>{t("Staff")}</p>
                    ) : (
                      <p className={style.bottomText}>{t("staffs")}</p>
                    )}
                  </Link>
                )
              )}
            </div>

            <div className={style.bottomOneItem}>
              <p className={style.bottomCount}>
                {institute?.announcementCount}
              </p>

              {institute?.announcementCount < 2 ? (
                <p className={style.bottomText}>{t("announcement")}</p>
              ) : (
                <p className={style.bottomText}>{t("announcements")}</p>
              )}
            </div>

            <div className={style.bottomOneItem}>
              <p className={style.bottomCount}>{institute?.admissionCount}</p>

              {institute?.admissionCount < 2 ? (
                <p className={style.bottomText}>{t("admission")}</p>
              ) : (
                <p className={style.bottomText}>{t("admissions")}</p>
              )}
            </div>
          </div>
          {ids?.searchProfile.id ? (
            ids?.loggedinAs === "user" ? (
              <CustomSuspense>
                <FollowButtonUser
                  institute={institute}
                  is_hostel={institute?.hostelDepart?.length ? true : false}
                />
                <div
                  className={style.profileedit}
                  onClick={() => setApply(true)}
                  style={{ width: "180px", height: "40px", right: "24.5%" }}
                >
                  <img
                    style={{ height: "1rem" }}
                    src="/images/profile/edit-profile-icon.svg"
                    alt=""
                  />
                  <p style={{ fontSize: "1rem" }}>{t("new_admissions")}</p>
                </div>
                {institute?.hostelDepart?.[0] && (
                  <Link
                    to={`/q/${institute?.name}/hostel/profile`}
                    state={{
                      hid: institute?.hostelDepart?.[0],
                    }}
                  >
                    <div
                      className={style.profileedit}
                      style={{
                        position: "absolute",
                        right: "42.5%",
                        cursor: "pointer",
                        height: "40px",
                        width: "180px",
                      }}
                    >
                      <img
                        style={{ height: "1rem" }}
                        src="/images/profile/edit-profile-icon.svg"
                        alt=""
                      />
                      <p style={{ fontSize: "1rem" }}>{t("hostel_facility")}</p>
                    </div>
                    {/* <img
                      src="/images/hostel/hostel-bed-icon.svg"
                      alt="bed icon"
                      style={{
                        position: "absolute",
                        left: "61%",
                        top: "1.8rem",
                        cursor: "pointer",
                        height: "1.5rem",
                      }}
                      title="Apply for hostel"
                    /> */}
                  </Link>
                )}
              </CustomSuspense>
            ) : (
              <CustomSuspense>
                <FollowButton institute={institute} />
              </CustomSuspense>
            )
          ) : (
            <>
              <Link
                to={`/q/${ids.loginProfile?.username}/edit/site?a=landing`}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className={style.site_edit}>
                  <img src="/images/profile/site-globe-icon.svg" alt="" />
                  <p>{t("site_info")}</p>
                </div>
              </Link>
              <Link
                to={`/q/${ids.loginProfile?.username}/edit`}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className={style.profileedit}>
                  <img src="/images/profile/edit-profile-icon.svg" alt="" />
                  <p>{t("edit")}</p>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
      {disabled && <QLoader />}
    </>
  );
};

export default InstituteProfileInfoTop;

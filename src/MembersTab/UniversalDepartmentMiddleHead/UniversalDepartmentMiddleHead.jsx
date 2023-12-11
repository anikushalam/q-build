import React from "react";
import style from "./UniversalDepartmentMiddleHead.module.css";
import { imageShowUrl } from "../../services/BaseUrl";
import { useTranslation } from "react-i18next";
import Crop from "../../ImageCrop/Crop";
import { Dialog } from "@mui/material";
import { Link } from "react-router-dom";

function UniversalDepartmentMiddleHead({
  coverKey,
  coverId,
  defaultCover,
  textLarge,
  textSmall,
  batchStatus,
  count1,
  count1label,
  count3,
  count2label,
  count2,
  count3label,
  status,
  profilePhoto,
  profileChange,
  openCrop,
  setOpenCrop,
  setPhotoURL,
  photoURL,
  setFile,
  setUpload,
  setProfilePhoto,
  rollNoStatus,
  rollNo,
  coverUpdate,
  redirectUrl,
  viewAs,
  carryParentState,
  enableLock,
  setPassword,
  openAs,
  coverImageStyle,
  conductor,
  driver,
  pendingFees,
  onOpenFunction,
  isTransport,
}) {
  const { t } = useTranslation();
  return (
    <div className={style.unideptmiddlehead}>
      <div className={style.unideptmiddleheadleft}>
        {profilePhoto ? (
          <img className={style.coverImgg} src={profilePhoto} alt="" />
        ) : coverId ? (
          <img
            className={coverId !== "2" ? style.coverImgg : style.coverImg}
            src={coverId !== "2" ? `${imageShowUrl}/${coverKey}` : defaultCover}
            alt=""
            style={coverImageStyle}
          />
        ) : (
          <img className={style.coverImg} src={defaultCover} alt="" />
        )}

        {coverUpdate && (
          <label htmlFor="cover">
            <img
              className={style.deptedit}
              src="/images/profileAndCover/dept-edit.svg"
              alt=""
            />
          </label>
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
      </div>
      <div className={style.unideptmiddleheadright}>
        <div>
          {isTransport === "TRANSPORT_MANAGER" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h6 className={style.textLarge}>{textLarge}</h6>
                <p className={style.textSmall}> {textSmall}</p>
              </div>
              <Link
                to={`${redirectUrl}`}
                state={{
                  ...carryParentState,
                }}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div title="Update Site Info">
                  <img
                    src="/images/profile/site-globe-icon.svg"
                    alt="site logo"
                    style={{
                      height: "1.3rem",
                    }}
                  />
                  <span
                    style={{
                      marginLeft: "0.6rem",
                    }}
                  >
                    {t("site_info")}
                  </span>
                </div>
              </Link>
            </div>
          ) : (
            <>
              <h6 className={style.textLarge}>{textLarge}</h6>
              {batchStatus && batchStatus === "true" ? (
                <p className={style.textSmall}>
                  {" "}
                  {t("batch")} &nbsp; {textSmall}
                </p>
              ) : (
                <p className={style.textSmall}> {textSmall}</p>
              )}
            </>
          )}

          {rollNoStatus && (
            <p className={style.textSmall}>
              {" "}
              {t("roll_no")} &nbsp; {rollNo}
            </p>
          )}
          {openAs === "VEHICLE_DETAIL" && (
            <div className={style.vehicle_info}>
              <div>
                <p
                  className={style.textSmall}
                  style={{
                    marginBottom: "0.1rem",
                  }}
                >
                  {" "}
                  {driver}
                </p>
                <p
                  className={style.textSmall}
                  style={{
                    marginBottom: "0.7rem",
                  }}
                >
                  {" "}
                  {conductor}
                </p>
                <p className={style.textSmall}> {pendingFees}</p>
              </div>
              {/* <div className={style.vehicle_icon_container}>
                <div
                  className={style.vehicle_icon_container_inner}
                  onClick={() => onOpenFunction("PASSENGER")}
                >
                  <img
                    src="/images/transport/add-passenger-icon.svg"
                    alt="add student icon"
                  />
                  <p>{t("add_passenger")}</p>
                </div>
                <div
                  className={style.vehicle_icon_container_inner}
                  onClick={() => onOpenFunction("ROUTE")}
                >
                  <img
                    src="/images/transport/add-route-icon.svg"
                    alt="add student icon"
                  />
                  <p>{t("view_route")}</p>
                </div>
              </div> */}
            </div>
          )}
        </div>
        {openAs === "VEHICLE_DETAIL" && <div></div>}
        <div
          className={status === "insCareer" ? style.countss : style.counts}
          style={{
            justifyContent:
              openAs === "FINANCE_MANAGER"
                ? "flex-end"
                : openAs === "HOSTEL_MANAGER"
                ? "flex-start"
                : "space-between",
          }}
        >
          {openAs === "STUDENT_HOSTEL" ? (
            <>
              <div
                className={
                  status === "insCareer"
                    ? `${style.countsItem} ${style.countssItem}`
                    : style.countsItem
                }
              >
                <p className={style.countlabel}>{count1label}</p>
                <p className={style.count}>{count1}</p>
              </div>
              <div
                className={
                  status === "insCareer"
                    ? `${style.countsItem} ${style.countssItem}`
                    : style.countsItem
                }
              >
                <p className={style.countlabel}>{count2label}</p>
                <p className={style.count}>{count2}</p>
              </div>
            </>
          ) : (
            <>
              {count1 ? (
                <div
                  className={
                    status === "insCareer"
                      ? `${style.countsItem} ${style.countssItem}`
                      : style.countsItem
                  }
                >
                  <p className={style.count}>{count1}</p>
                  <p className={style.countlabel}>{count1label}</p>
                </div>
              ) : null}
              {count2 ? (
                <div
                  className={
                    status === "insCareer"
                      ? `${style.countsItem} ${style.countssItem}`
                      : style.countsItem
                  }
                >
                  <p className={style.count}>{count2}</p>
                  <p className={style.countlabel}>{count2label}</p>
                </div>
              ) : null}
            </>
          )}
          {count3 ? (
            <div
              className={
                status === "insCareer"
                  ? `${style.countsItem} ${style.countssItem}`
                  : style.countsItem
              }
            >
              <p className={style.count}>{count3}</p>
              <p className={style.countlabel}>{count3label}</p>
            </div>
          ) : null}

          {viewAs && openAs !== "FINANCE_MANAGER" && (
            <Link
              to={`${redirectUrl}`}
              state={{
                ...carryParentState,
              }}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <div title="Update Site Info">
                <img
                  src="/images/profile/site-globe-icon.svg"
                  alt="site logo"
                  style={{
                    height: "1.3rem",
                  }}
                />
                <span
                  style={{
                    marginLeft: "0.6rem",
                  }}
                >
                  {t("site_info")}
                </span>
              </div>
            </Link>
          )}
          {viewAs &&
            (openAs === "FINANCE_MANAGER" || openAs === "ADMISSION_ADMIN") && (
              <div
              // style={{
              //   display: "flex",
              //   alignItems: "center",
              //   justifyContent: "space-between",
              //   width: "100%",
              // }}
              >
                <img
                  title="Enable or disable password protection"
                  src={
                    enableLock
                      ? "/images/lock-white-icon.svg"
                      : "/images/lock-grey-slate-icon.svg"
                  }
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => setPassword(true)}
                  alt="lock icon"
                />
              </div>
            )}
        </div>
      </div>

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
}

export default UniversalDepartmentMiddleHead;

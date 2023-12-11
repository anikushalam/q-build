import React, { useState } from "react";
import { imageShowUrl } from "../../services/BaseUrl";
import style from "./Side.module.css";
import { Link } from "react-router-dom";
import SidebarBottom from "../../Dashboard/InsDashboard/Components/Mainbody/Sidebar/components/SidebarBottom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function Side({
  profileSide,
  resultId,
  name,
  insPhotoId,
  insProfilePhoto,
  setApply,
  apply,
}) {
  const profile = useSelector((state) => state.idChange);
  const { t } = useTranslation();
  const [displayHeight1, setDisplayHeight1] = useState(0);
  return (
    <div
      className={style.sidebar}
      style={{ top: `-${displayHeight1 - 270}px` }}
    >
      {resultId === profile?.id ? (
        <div className={style.sidebartop}>
          <div
            className={style.imgcontainer}
            // style={{ backgroundImage: "" }}
          >
            <img
              alt="not found"
              src={
                profileSide?.photoId !== "1"
                  ? `${imageShowUrl}/${insProfilePhoto}`
                  : "/images/ins_default_profile.svg"
              }
            />
          </div>
          <div className={style.textContainer}>
            <h6>{profile.loginProfile?.username}</h6>
            <h6>{profile.loginProfile?.insName}</h6>
          </div>

          {profile?.id === resultId && (
            <div className={style.btn}>
              <Link
                to={`/q/${profile.loginProfile?.username}/edit`}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                {t("edit")}
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className={style.sidebartop}>
          {insPhotoId && (
            <div
              className={style.imgcontainer}
              // style={{ backgroundImage: "" }}
            >
              <img
                alt="not found"
                src={
                  insPhotoId !== "1" && insProfilePhoto
                    ? `${imageShowUrl}/${insProfilePhoto}`
                    : "/images/ins_default_profile.svg"
                }
              />
            </div>
          )}
          <div className={style.textContainer}>
            <h6
              style={{
                fontSize: "1.2vw",
              }}
            >
              {name ? name : ""}
            </h6>
          </div>

          {profile?.loggedinAs === "institute" ? (
            ""
          ) : (
            <div className={style.buttons}>
              {!apply && (
                <div className={style.applybtn} onClick={() => setApply(true)}>
                  {t("apply")}
                </div>
              )}
              {apply && (
                <div className={style.applybtn} onClick={() => setApply(false)}>
                  {t("Back")}
                </div>
              )}
              <div className={style.btn}>{t("follow")}</div>
            </div>
          )}
        </div>
      )}
      <SidebarBottom
        resultId={resultId}
        setDisplayHeight1={setDisplayHeight1}
      />
    </div>
  );
}

export default Side;

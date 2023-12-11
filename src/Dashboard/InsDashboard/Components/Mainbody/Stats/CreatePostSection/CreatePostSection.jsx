import React, { useState } from "react";
import style from "./CreatePostSection.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import { FileNotUpload } from "../../../../../../validation/Snackbar";

function CreatePostSection({ setPostType, profileData, onPostTypeChange }) {
  const { t } = useTranslation();
  const [run, setRun] = useState(false);
  const [msg, setMsg] = useState(false);
  const dummy = (type) => {
    if (profileData?.status === "Not Approved") {
    } else {
      if (profileData?.blockStatus !== "UnBlocked") {
        setRun(true);
        setMsg("You are blocked by super admin due to malicious activities");
      } else if (type === "img") {
        setPostType("image");
        onPostTypeChange("newPost");
      } else if (type === "video") {
        setPostType("video");
        onPostTypeChange("newPost");
      } else if (type === "poll") {
        onPostTypeChange("newPoll");
      } else if (type === "announcement") {
        onPostTypeChange("newAnnouncement");
      } else if (type === "newQuestion") {
        onPostTypeChange("newQuestion");
      } else {
        setPostType("text");
        onPostTypeChange("newPost");
      }
    }
  };
  return (
    <>
      {profileData?.status === "Not Approved" ? (
        <div className={style.CreatePostSectionNotApprooved}>
          <h6>{t("welcome_to_qviple")}</h6>

          <p>{t("manage_profile")}</p>
        </div>
      ) : (
        <div className={style.CreatePostSection}>
          <div className={style.posttsearch}>
            <div className={style.imgcontainer}>
              <img
                alt="not found"
                src={
                  profileData?.photoId !== "1"
                    ? `${imageShowUrl}/${profileData?.insProfilePhoto}`
                    : "/images/ins_default_profile.svg"
                }
              />
            </div>
            <div
              className={style.searchContainer}
              onClick={() => dummy("text")}
            >
              <p>{t("start_posting")}</p>
            </div>
          </div>

          <div className={style.posttype}>
            <div className={style.posticon} onClick={() => dummy("newPost")}>
              <img
                alt="not found"
                src="/images/edit-icon.svg"
                title="Create Text Post"
              />
            </div>
            <div className={style.posticon} onClick={() => dummy("img")}>
              <img
                alt="not found"
                src="/images/img-post-icon.svg"
                title="Create Image Post"
              />
            </div>
            <div className={style.posticon} onClick={() => dummy("video")}>
              <img
                alt="not found"
                src="/images/video-post-icon.svg"
                title="Create Image Post"
              />
            </div>
            <div
              className={style.posticon}
              onClick={() => dummy("announcement")}
            >
              <img
                alt="not found"
                src="/images/voice-post-icon.svg"
                title="Create Announcement"
              />
            </div>
            <div className={style.posticon} onClick={() => dummy("poll")}>
              <img
                alt="not found"
                src="/images/shorts-icon.svg"
                title="Create Poll Post"
              />
            </div>
            <div
              className={style.posticon}
              onClick={() => dummy("newQuestion")}
            >
              <img
                alt="not found"
                src="/images/document-icon.svg"
                title="Create Question Post"
              />
            </div>
          </div>
        </div>
      )}

      <FileNotUpload run={run} setRun={setRun} msg={msg} />
    </>
  );
}

export default CreatePostSection;

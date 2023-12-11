import React from "react";
import style from "./PostHeader.module.css";
import { useTranslation } from "react-i18next";

const PostFooterIcon = ({
  onEditIocn,
  activeIcon,
  onPostTypeChange,
  addFileToggle,
  onAddFile,
  acceptFormate,
  onVideoIcon,
  children,
}) => {
  const { t } = useTranslation();

  const onClickIconHandler = (val) => {
    onPostTypeChange(val);
  };
  return (
    <>
      <hr className={style.hr} />
      <div className={style.iconsContainer}>
        <div className={style.icons}>
          <div>
            <img
              onClick={onEditIocn}
              src="/images/edit-icon.svg"
              alt="eidt icon of post"
              title="Create Text Post"
            />
            {activeIcon === 1 && <div className={style.border1}></div>}
          </div>
          {children}
          <div>
            <img
              onClick={onVideoIcon}
              src="/images/video-post-icon.svg"
              alt="video icon of post"
              title="Create Video Post"
            />
            {activeIcon === 3 && <div className={style.border3}></div>}
          </div>
          <div>
            <img
              onClick={() => onClickIconHandler("newAnnouncement")}
              src="/images/voice-post-icon.svg"
              alt="announcement icon of post"
              title="Create Announcement"
            />
            {activeIcon === 4 && <div className={style.border4}></div>}
          </div>
          <div>
            <img
              onClick={() => onClickIconHandler("newPoll")}
              src="/images/shorts-icon.svg"
              alt="poll icon of post"
              title="Create Poll Post"
            />
            {activeIcon === 5 && <div className={style.border5}></div>}
          </div>
          <div>
            <img
              onClick={() => onClickIconHandler("newQuestion")}
              src="/images/document-icon.svg"
              alt="question icon of post"
              title="Create Question Post"
            />
            {activeIcon === 6 && <div className={style.border6}></div>}
          </div>
        </div>
        {addFileToggle ? (
          <div>
            <label htmlFor="document" style={{ cursor: "pointer" }}>
              <p className={style.addfiles}>{t("add_files")}</p>
            </label>

            <input
              className={style.upload}
              multiple
              id="document"
              name="file"
              onChange={onAddFile}
              type="file"
              accept={acceptFormate}
            />
          </div>
        ) : (
          <p>{t("add_files")}</p>
        )}
      </div>
    </>
  );
};

export default PostFooterIcon;

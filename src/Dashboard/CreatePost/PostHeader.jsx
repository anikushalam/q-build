import React from "react";
import Avatar from "../../Custom/Avatar/Avatar";
import style from "./PostHeader.module.css";
import { useTranslation } from "react-i18next";
import FormToggle from "../../StaffTab/components/DividerTab/MainContent/StaffForm/FormToggle";

const PostHeader = ({
  postTitle,
  onClose,
  name,
  privateImage,
  setPrivateImage,
  dynamicImage,
  postStatusRef,
  checkedToggle,
  onToggleHandler,
  announcement,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <div className={style.newPost}>
      <div className={style.header}>
        <h4>{postTitle}</h4>
        <img
          src="/images/close-post-icon.svg"
          onClick={onClose}
          alt="close icon"
        />
      </div>
      <hr className={style.hr} />
      <div className={style.content}>
        <div className={style.title}>
          <div className={style.imgContainer}>
            <Avatar dynamicImage={dynamicImage} />
          </div>

          <div className={style.userName}>
            <h6>{name}</h6>
            <div className={style.public}>
              <img
                className={style.privacyIcon}
                src={
                  !privateImage
                    ? "/images/privacy-icon.svg"
                    : "/images/post-private-icon.svg"
                }
                alt=""
              />
              <div className={style.select}>
                <span className={style.arrow}></span>
                <img
                  className={style.arrowIcon}
                  src="/images/dropdown-icon.svg"
                  alt=""
                />

                <select
                  name="cars"
                  id="cars"
                  ref={postStatusRef}
                  onChange={(e) =>
                    e.target.value === "Anyone"
                      ? setPrivateImage(false)
                      : setPrivateImage(true)
                  }
                >
                  <option value="Anyone">{t("public")}</option>
                  <option value="Private">{t("private")} </option>
                </select>
              </div>
            </div>
          </div>
          {!announcement && (
            <FormToggle
              labelHeading={t("turn_off_comment")}
              customContainer={{ padding: "0" }}
              customLabel={{ fontWeight: "500" }}
              checkedToggle={checkedToggle === "On" ? false : true}
              onToggleHandler={onToggleHandler}
            />
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default PostHeader;

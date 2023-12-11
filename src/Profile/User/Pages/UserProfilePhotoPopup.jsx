import React from "react";
import style from "../../../MembersTab/staff/Mainbody/ClassTeacher/Profile/EditConfirm.module.css";
import SearchModalBackdrop from "../../../Search/SearchModalBackdrop";
import Overlay from "../../../Search/Overlay";
import { useTranslation } from "react-i18next";
const UserProfilePhotoPopup = ({ onClose, profileChange, onUploadType }) => {
  const { t } = useTranslation();
  return (
    <>
      <SearchModalBackdrop onClose={onClose} />
      <Overlay
        customStyle={{
          zIndex: "1200",
        }}
      >
        <div className={style.edit_modal_container} style={{ width: "300px" }}>
          <label htmlFor="photo">
            <h6
              className={style.edit}
              onClick={() => onUploadType("ONLY_USER")}
            >
              {t("update_only_profile_photo")}
            </h6>
          </label>

          <label htmlFor="photo">
            <h6
              className={style.edit}
              onClick={() => onUploadType("USER_AND_STUDENT")}
            >
              {t("update_user_student_profile_photo")}
            </h6>
          </label>
          <input
            id="photo"
            name="file"
            onChange={profileChange}
            type="file"
            style={{ display: "none" }}
            accept="image/gif, image/jpeg, image/png"
            required
          />
        </div>
      </Overlay>
    </>
  );
};

export default UserProfilePhotoPopup;

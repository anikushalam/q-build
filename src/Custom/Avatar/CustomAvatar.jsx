import React from "react";
import Overlay from "../../Search/Overlay";
import SearchModalBackdrop from "../../Search/SearchModalBackdrop";
import { customAvatarUrl } from "../../services/BaseUrl";
import style from "./Avatar.module.css";

const CustomAvatar = ({
  customContainerStyle,
  onClose,
  showContent,
  onClick,
}) => {
  const avatarUrl = [];
  for (let i = 1; i < 31; i++) {
    avatarUrl.push(i);
  }

  const onSelectAvatar = (url) => {
    onClick(`3D${url}.jpg`);
    onClose();
  };
  return (
    <>
      <SearchModalBackdrop onClose={onClose} />
      <Overlay customStyle={{ zIndex: "1400" }}>
        <div
          className={style.custom_avatar_container}
          style={{ ...customContainerStyle }}
        >
          <h5 className={style.custom_avatar_content}>{showContent}</h5>
          {avatarUrl?.map((url) => (
            <div
              className={style.custom_avatar_one}
              key={url}
              onClick={() => onSelectAvatar(url)}
            >
              <img src={`${customAvatarUrl}/3D${url}.jpg`} alt="3d avatar" />
            </div>
          ))}
        </div>
      </Overlay>
    </>
  );
};

export default CustomAvatar;
